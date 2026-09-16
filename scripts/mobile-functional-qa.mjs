import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const cache = path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx');
const modules = fs.readdirSync(cache).map(p => path.join(cache, p, 'node_modules')).find(p => fs.existsSync(path.join(p, 'puppeteer-core/lib/puppeteer/puppeteer-core.js')));
const { default: puppeteer } = await import(pathToFileURL(path.join(modules, 'puppeteer-core/lib/puppeteer/puppeteer-core.js')));
const base = process.argv[2] ?? 'http://localhost:3100';
if (!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(base)) throw new Error('Functional QA is restricted to local builds.');
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = [];
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function clickText(page, selector, text) {
  const found = await page.evaluate((selector, text) => {
    const el = [...document.querySelectorAll(selector)].find(e => e.textContent.trim() === text && e.getClientRects().length && !e.closest('[inert]'));
    el?.click(); return !!el;
  }, selector, text);
  assert(found, `Missing visible control: ${text}`);
}
try {
  for (const locale of ['en', 'ar']) {
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    const errors = [], chatRequests = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.setViewport({width:390, height:844, isMobile:true, deviceScaleFactor:1});
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.url() === `${base}/api/chat`) {
        const data = JSON.parse(request.postData() || '{}');
        chatRequests.push(data);
        void request.respond({status:200, contentType:'application/json', body:JSON.stringify(data.action === 'loadPreviousSession' ? {data:[]} : {output:'Local QA reply'})});
      } else void request.continue();
    });
    await page.goto(`${base}/${locale}`, {waitUntil:'networkidle0'});
    assert.equal(await page.$eval('html', e => e.dir), locale === 'ar' ? 'rtl' : 'ltr');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    const beforeScripts = await page.evaluate(() => performance.getEntriesByType('resource').filter(e => /\.js(?:\?|$)/.test(e.name)).map(e => e.name));
    await page.keyboard.press('Tab');
    await page.evaluate(() => window.scrollTo(0, 200));
    await wait(11000);
    assert.equal(chatRequests.length, 0, 'Ordinary interaction must not start chat');
    assert.equal(await page.$eval('#n8n-chat', e => e.childElementCount), 0);

    // EN/AR mobile menu: nested tree must not exist until relevant expansion.
    const menuButton = await page.$('header .xl\\:hidden > button[aria-controls]');
    assert(menuButton, 'Mobile navigation trigger');
    await menuButton.click();
    const canada = locale === 'ar' ? 'كندا' : 'Canada';
    await page.waitForSelector(`button[aria-label="${canada}"]`);
    assert.equal(await page.$$eval('a[href$="/locations/canada/ontario/milton"]', es => es.filter(e => e.closest('[role="dialog"]')).length), 0);
    await page.click(`button[aria-label="${canada}"]`);
    await wait(400);
    const ontario = locale === 'ar' ? 'أونتاريو' : 'Ontario';
    await page.waitForSelector(`button[aria-label="${ontario}"]`);
    await page.click(`button[aria-label="${ontario}"]`);
    await wait(400);
    await page.waitForSelector(`[role="dialog"] a[href$="/locations/canada/ontario/milton"]`);
    await page.keyboard.press('Escape');
    assert.equal(await menuButton.evaluate(e => e.getAttribute('aria-expanded')), 'false');

    // Form checks use the existing UI; current repository submission is a simulation.
    const nextText = locale === 'ar' ? 'التالي' : 'Next';
    const cardSelector = '[data-qa-enrollment]';
    await page.$eval('[role="progressbar"]', e => e.closest('.p-6').setAttribute('data-qa-enrollment', ''));
    const nextButtonText = await page.$eval(`${cardSelector} button`, e => e.textContent.trim());
    await clickText(page, `${cardSelector} button`, nextButtonText || nextText);
    assert(await page.$(`${cardSelector} [role="alert"]`), 'Empty contact fields are validated');
    await page.type(`${cardSelector} input[type="text"]`, 'Local QA Parent');
    await page.type(`${cardSelector} input[type="tel"]`, '+15555550123');
    await page.type(`${cardSelector} input[type="email"]`, 'qa@example.test');
    await clickText(page, `${cardSelector} button`, nextButtonText);
    await page.waitForSelector(`${cardSelector} input[type="number"]`);
    await page.type(`${cardSelector} input[type="number"]`, '12');
    await clickText(page, `${cardSelector} button`, canada);
    await clickText(page, `${cardSelector} button`, nextButtonText);
    await page.waitForSelector(`${cardSelector} textarea`);
    const choices = await page.$$(`${cardSelector} button[aria-pressed]`);
    assert(choices.length >= 3);
    await choices[0].click();
    await choices[choices.length - 1].click();
    const navButtons = await page.$$(`${cardSelector} button:not([aria-pressed])`);
    await navButtons[navButtons.length - 1].click();
    await page.waitForSelector(`${cardSelector} h2`);

    const faq = await page.$('details:not([open]) summary');
    assert(faq); await faq.evaluate(e => { e.scrollIntoView(); e.click(); });
    assert(await faq.evaluate(e => e.parentElement.open));
    assert(await page.$('a[href*="wa.me"]'), 'WhatsApp conversion link');
    const registration = await page.$$eval('a[href]', es => es.filter(e => /register|booking|trial|lms\.|wa\.me|contact|تواصل|حجز/i.test(decodeURIComponent(e.href))).map(e => e.href));
    assert(registration.length, 'Registration / trial links remain');

    await page.click('[data-chat-launcher]');
    await page.waitForSelector('#n8n-chat textarea', {visible:true, timeout:30000});
    await page.type('#n8n-chat textarea', 'Local QA only');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.querySelector('#n8n-chat')?.textContent.includes('Local QA reply'));
    assert(chatRequests.some(r => r.action === 'sendMessage'));
    const sessionId = chatRequests.find(r => r.sessionId)?.sessionId;
    assert(sessionId);
    assert(chatRequests.filter(r => r.sessionId).every(r => r.sessionId === sessionId));
    const afterScripts = await page.evaluate(() => performance.getEntriesByType('resource').filter(e => /\.js(?:\?|$)/.test(e.name)).map(e => e.name));
    assert(afterScripts.length > beforeScripts.length, 'Interaction loads deferred chunks');
    await page.screenshot({path:`reports/mobile-performance/qa-${locale}-chat.png`});
    await page.click('#n8n-chat .chat-window-toggle');
    await page.evaluate(() => window.scrollTo(0, 0));
    const switcher = await page.$(locale === 'en' ? 'button[aria-label^="AR -"]' : 'button[aria-label^="EN -"]');
    assert(switcher); await switcher.click();
    await page.waitForFunction(expected => document.documentElement.lang === expected, {}, locale === 'en' ? 'ar' : 'en');
    assert.deepEqual(errors, []);
    results.push({locale, status:'PASS', enrollment:'UI validation and simulated success only; existing backend is not connected', chat:'Proxy mocked locally; click-only loading, sending, session consistency tested', registrationLinks:registration, initialScripts:beforeScripts.length, postInteractionScripts:afterScripts.length});
    await context.close();
  }
  const page = await browser.newPage();
  await page.setViewport({width:1440,height:1000});
  await page.goto(`${base}/en`, {waitUntil:'networkidle0'});
  await clickText(page, 'header button', 'Our Locations');
  await page.waitForSelector('[role="menu"] a[href="/en/locations/canada"]');
  await page.hover('[role="menu"] a[href="/en/locations/canada"]');
  await page.waitForSelector('[role="menu"] a[href="/en/locations/canada/ontario"]');
  await page.keyboard.press('Escape');
  results.push({desktopNavigation:'PASS'});
  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('reports/mobile-performance/functional-qa.json', JSON.stringify(results, null, 2));
} finally { await browser.close(); }
