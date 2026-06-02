// Tiny puppeteer script: take full-page mobile screenshot
const puppeteer = require('puppeteer');
(async () => {
  const url = process.argv[2];
  const out = process.argv[3];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
})();
