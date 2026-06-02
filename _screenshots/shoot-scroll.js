// Take screenshots at multiple scroll positions
const puppeteer = require('puppeteer');
(async () => {
  const url = process.argv[2];
  const prefix = process.argv[3];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = 844;
  let i = 0;
  for (let y = 0; y < totalHeight; y += vh) {
    await page.evaluate(yy => window.scrollTo(0, yy), y);
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: `${prefix}-${i}.png`, fullPage: false });
    i++;
  }
  await browser.close();
  console.log(`took ${i} screenshots`);
})();
