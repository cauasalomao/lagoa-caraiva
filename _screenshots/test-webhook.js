// Test: open page, fill WA widget, submit, capture network calls to webhook
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const webhookCalls = [];
  page.on('request', req => {
    if (req.url().includes('webhook.komplexagrowth.com')) {
      webhookCalls.push({ url: req.url(), method: req.method(), body: req.postData() });
    }
  });
  page.on('console', msg => console.log('PAGE:', msg.text()));

  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Open WA widget
  await page.click('#wa-toggle');
  await new Promise(r => setTimeout(r, 300));

  // Fill form
  await page.type('#wa-form input[name="nome"]', 'Teste Cauã');
  await page.type('#wa-form input[name="email"]', 'teste@cidigitalmarketing.com');
  await page.type('#wa-form input[name="telefone"]', '12999998888');

  // Submit, intercept window.open to avoid wa.me redirect
  await page.evaluate(() => { window.open = () => null; });
  await page.click('#wa-form button[type="submit"]');
  await new Promise(r => setTimeout(r, 2500));

  console.log('Webhook calls captured:', webhookCalls.length);
  webhookCalls.forEach((c, i) => {
    console.log(`#${i+1}`, c.method, c.url);
    if (c.body) console.log('  body:', c.body);
  });

  await browser.close();
})();
