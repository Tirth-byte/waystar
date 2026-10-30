// scripts/capture-scenes.mjs
import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const SCENES = [
  { name: '01_hero', y: 0 },
  { name: '02_immersion', y: 1080 },
  { name: '03_signature', y: 2160 },
  { name: '04_selector', y: 3240 },
  { name: '05_art_of_living', y: 4320 },
  { name: '06_collection', y: 5400 },
  { name: '07_private_experience', y: 6480 },
  { name: '08_finale', y: 7560 },
];

const OUT_DIR = path.resolve(process.cwd(), 'docs/screenshots/qa_007/scenes');

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 0;
    this.pending = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  async send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const port = 9223;
  const braveBin = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
  
  console.log('Launching headless browser for scene audit...');
  const proc = spawn(
    braveBin,
    [
      '--headless',
      '--disable-gpu',
      '--remote-debugging-port=' + port,
      'about:blank',
    ],
    { stdio: 'ignore' }
  );

  try {
    await sleep(1500);

    const targetsRes = await fetch(`http://127.0.0.1:${port}/json/list`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find((t) => t.type === 'page');

    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');

    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });

    await client.send('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(2000);

    for (let i = 0; i < SCENES.length; i++) {
      const scene = SCENES[i];
      console.log(`Auditing scene ${scene.name}...`);

      const evalRes = await client.send('Runtime.evaluate', {
        expression: `
          (() => {
            const sections = document.querySelectorAll('main > section');
            if (sections[${i}]) {
              const rect = sections[${i}].getBoundingClientRect();
              window.scrollBy({ top: rect.top, left: 0, behavior: 'instant' });
              return { found: true, top: rect.top, count: sections.length };
            }
            return { found: false, count: sections.length };
          })()
        `,
        returnByValue: true,
      });
      console.log(`Scene ${scene.name}:`, evalRes.result?.value);
      await sleep(1200);

      const shot = await client.send('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(OUT_DIR, `${scene.name}.png`);
      await fs.writeFile(filePath, Buffer.from(shot.data, 'base64'));
    }

    console.log('All 8 scenes captured in docs/screenshots/qa_007/scenes/');
    client.close();
  } finally {
    proc.kill();
  }
}

run().catch(console.error);

