// scripts/qa-v2-verification.mjs
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

const PAGES = [
  { path: '/', label: 'homepage' },
  { path: '/residences', label: 'residences' },
  { path: '/residences/the-lumina-waterfront-dubai', label: 'residence_detail' },
  { path: '/discover', label: 'discover' },
  { path: '/philosophy', label: 'philosophy' },
  { path: '/contact', label: 'contact' },
  { path: '/saved', label: 'saved' },
];

const OUT_DIR = path.resolve(process.cwd(), 'docs/screenshots/v2');

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

  console.log('Launching headless Brave Browser for V2 Visual QA...');
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
    await sleep(2000);

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

    const results = [];

    // Phase 1: 7-Viewport QA of Homepage
    console.log('\n=== PHASE 1: HOMEPAGE 7-VIEWPORT AUDIT ===');
    for (const vp of VIEWPORTS) {
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 768,
      });

      await client.send('Page.navigate', { url: 'http://localhost:3000/' });
      await sleep(1500);

      const overflowEval = await client.send('Runtime.evaluate', {
        expression: `({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
        })`,
        returnByValue: true,
      });
      const overflow = overflowEval.result.value;

      const shot = await client.send('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(OUT_DIR, `home_${vp.name}.png`);
      await fs.writeFile(filePath, Buffer.from(shot.data, 'base64'));

      results.push({
        Context: `Home @ ${vp.width}px`,
        Width: vp.width,
        Height: vp.height,
        Overflow: overflow.hasOverflow ? 'FAIL ❌' : 'PASS ✅',
        ScrollW: overflow.scrollWidth,
        ClientW: overflow.clientWidth,
        File: `home_${vp.name}.png`,
      });
    }

    // Phase 2: Core Application Pages at Desktop (1440px) and Mobile (390px)
    console.log('\n=== PHASE 2: ROUTE AUDIT (1440px & 390px) ===');
    const auditViewports = [
      { name: '1440_desktop', width: 1440, height: 900, mobile: false },
      { name: '390_mobile', width: 390, height: 844, mobile: true },
    ];

    for (const page of PAGES) {
      for (const avp of auditViewports) {
        await client.send('Emulation.setDeviceMetricsOverride', {
          width: avp.width,
          height: avp.height,
          deviceScaleFactor: 1,
          mobile: avp.mobile,
        });

        await client.send('Page.navigate', { url: `http://localhost:3000${page.path}` });
        await sleep(1500);

        const overflowEval = await client.send('Runtime.evaluate', {
          expression: `({
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth,
            hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
          })`,
          returnByValue: true,
        });
        const overflow = overflowEval.result.value;

        const shot = await client.send('Page.captureScreenshot', { format: 'png' });
        const filePath = path.join(OUT_DIR, `${page.label}_${avp.name}.png`);
        await fs.writeFile(filePath, Buffer.from(shot.data, 'base64'));

        results.push({
          Context: `${page.label} @ ${avp.width}px`,
          Width: avp.width,
          Height: avp.height,
          Overflow: overflow.hasOverflow ? 'FAIL ❌' : 'PASS ✅',
          ScrollW: overflow.scrollWidth,
          ClientW: overflow.clientWidth,
          File: `${page.label}_${avp.name}.png`,
        });
      }
    }

    console.log('\n=== V2 VISUAL QA AUDIT RESULTS TABLE ===');
    console.table(results);

    client.close();
  } finally {
    proc.kill();
  }
}

run().catch((err) => {
  console.error('QA Runner Error:', err);
  process.exit(1);
});

