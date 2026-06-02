const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  // open booking
  await page.evaluate(() => window.openBooking && window.openBooking());
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: 'booking-modal.png' });
  await browser.close();
})();
