// scripts/capture-viewports.mjs
import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const VIEWPORTS = [
  { name: '1920_desktop_wide', width: 1920, height: 1080 },
  { name: '1440_desktop', width: 1440, height: 900 },
  { name: '1280_laptop', width: 1280, height: 800 },
  { name: '1024_tablet_landscape', width: 1024, height: 768 },
  { name: '768_tablet_portrait', width: 768, height: 1024 },
  { name: '390_mobile_iphone', width: 390, height: 844 },
  { name: '360_mobile_compact', width: 360, height: 780 },
];

const OUT_DIR = path.resolve(process.cwd(), 'docs/screenshots/qa_007');

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

  const port = 9222;
  const braveBin = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
  
  console.log('Launching headless browser...');
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

    const versionRes = await fetch(`http://127.0.0.1:${port}/json/version`);
    const versionData = await versionRes.json();
    console.log('Connected to', versionData.Browser);

    const targetsRes = await fetch(`http://127.0.0.1:${port}/json/list`);
    const targets = await targetsRes.json();
    const pageTarget = targets.find((t) => t.type === 'page');

    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('DOM.enable');
    await client.send('Runtime.enable');

    console.log('Navigating to http://localhost:3000...');
    await client.send('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(2000); // Allow animations & fonts to settle

    const qaReport = [];

    for (const vp of VIEWPORTS) {
      console.log(`Testing viewport ${vp.name} (${vp.width}x${vp.height})...`);

      await client.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 768,
      });
      await client.send('Emulation.setVisibleSize', {
        width: vp.width,
        height: vp.height,
      });

      await sleep(500);

      // Check overflow
      const overflowEval = await client.send('Runtime.evaluate', {
        expression: `({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
        })`,
        returnByValue: true,
      });

      const overflow = overflowEval.result.value;

      // Capture screenshot
      const shot = await client.send('Page.captureScreenshot', {
        format: 'png',
      });

      const filePath = path.join(OUT_DIR, `${vp.name}.png`);
      await fs.writeFile(filePath, Buffer.from(shot.data, 'base64'));

      qaReport.push({
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        hasOverflow: overflow.hasOverflow,
        scrollWidth: overflow.scrollWidth,
        clientWidth: overflow.clientWidth,
        screenshot: filePath,
      });
    }

    console.log('\n--- QA VIEWPORT TEST RESULTS ---');
    console.table(
      qaReport.map((r) => ({
        Viewport: r.viewport,
        Resolution: `${r.width}x${r.height}`,
        'Horizontal Overflow': r.hasOverflow ? 'FAIL' : 'PASS',
        ScrollWidth: r.scrollWidth,
        ClientWidth: r.clientWidth,
      }))
    );

    client.close();
  } finally {
    proc.kill();
  }
}

run().catch((err) => {
  console.error('QA Runner Error:', err);
  process.exit(1);
});

