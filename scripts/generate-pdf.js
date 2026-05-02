// Generate A3 landscape PDF of the editorial scroll.
// Usage: node scripts/generate-pdf.js [url] [out-pdf]
// Requires puppeteer-core + system Chrome (see CHROME_PATH).
//
// Strategy:
//   1) Open page, set viewport to A3 landscape px (1587x1123 @ 96dpi)
//   2) Trigger window.preparePrint() to init all maps
//   3) Wait for all wardMaps + introMap to fire 'idle'
//   4) page.pdf() with format: 'A3', landscape: true

const puppeteer = require('puppeteer-core');

const URL = process.argv[2] || 'http://localhost:9877/';
const OUT = process.argv[3] || './tokyo-strata.pdf';
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const A3_LANDSCAPE_WIDTH = 1587;   // 420mm × 96dpi / 25.4
const A3_LANDSCAPE_HEIGHT = 1123;  // 297mm × 96dpi / 25.4

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    defaultViewport: null,
    args: ['--window-size=' + A3_LANDSCAPE_WIDTH + ',' + A3_LANDSCAPE_HEIGHT],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: A3_LANDSCAPE_WIDTH, height: A3_LANDSCAPE_HEIGHT, deviceScaleFactor: 1 });

  console.log('navigate:', URL);
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 });

  // Wait for stats.json + maplibre + pmtiles to load
  await page.waitForFunction(() => window.maplibregl && window.pmtiles, { timeout: 30000 });

  // Force-init all maps (don't trigger window.print)
  console.log('initializing all maps...');
  await page.evaluate(async () => {
    if (typeof initIntroMap === 'function') await initIntroMap();
    if (typeof REGIONS !== 'undefined' && typeof initWardMap === 'function') {
      for (const r of REGIONS) await initWardMap(r.id);
    }
  });

  // Give maps a beat to render tile data after .on('idle')
  console.log('waiting for tiles to settle...');
  await new Promise(r => setTimeout(r, 8000));

  console.log('printing pdf:', OUT);
  await page.pdf({
    path: OUT,
    format: 'A3',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('done.');
})().catch(e => { console.error(e); process.exit(1); });
