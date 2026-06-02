// Screenshot at a specific scroll Y
const puppeteer = require('puppeteer');
(async () => {
  const url = process.argv[2];
  const out = process.argv[3];
  const y = parseInt(process.argv[4] || '0', 10);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(yy => window.scrollTo(0, yy), y);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: out });
  // Also dump positions of key elements
  const positions = await page.evaluate(() => {
    const els = ['.hero-split', '.hero-split__info', '.hero-split__btn', '.editorial', '.editorial__title'];
    const out = {};
    els.forEach(s => {
      const el = document.querySelector(s);
      if (el) {
        const r = el.getBoundingClientRect();
        out[s] = { top: Math.round(r.top + window.scrollY), bottom: Math.round(r.bottom + window.scrollY), height: Math.round(r.height) };
      }
    });
    return out;
  });
  console.log(JSON.stringify(positions, null, 2));
  await browser.close();
})();
