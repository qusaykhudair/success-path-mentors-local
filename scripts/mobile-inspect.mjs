import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const cache = path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx');
const modules = fs.readdirSync(cache).map(p => path.join(cache, p, 'node_modules')).find(p => fs.existsSync(path.join(p, 'puppeteer-core/lib/puppeteer/puppeteer-core.js')));
const { default: puppeteer } = await import(pathToFileURL(path.join(modules, 'puppeteer-core/lib/puppeteer/puppeteer-core.js')));
const [label = 'before', base = 'http://localhost:3100'] = process.argv.slice(2);
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  const results = [];
  for (const locale of ['en', 'ar']) {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 1 });
    await page.goto(`${base}/${locale}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    const result = await page.evaluate(() => ({
      url: location.href,
      title: document.title,
      meta: [...document.head.querySelectorAll('meta[name],meta[property],link[rel="canonical"],link[hreflang]')].map(e => e.outerHTML),
      schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(e => e.textContent),
      text: document.querySelector('main')?.textContent,
      dir: document.documentElement.dir,
      fonts: getComputedStyle(document.body).fontFamily,
      fontVariable: getComputedStyle(document.documentElement).getPropertyValue('--font-din'),
      fontRequests: performance.getEntriesByType('resource').filter(e => /\.(ttf|woff2?)/.test(e.name)).map(e => e.name),
      dom: document.querySelectorAll('*').length,
      initialScripts: performance.getEntriesByType('resource').filter(e => /\.js(?:\?|$)/.test(e.name)).map(e => ({url:e.name,bytes:e.transferSize})),
      faq: [...document.querySelectorAll('details')].map(e => e.textContent),
      overflow: document.documentElement.scrollWidth > innerWidth,
    }));
    results.push(result);
    await page.screenshot({ path: `reports/mobile-performance/${label}-${locale}.png` });
    console.log(JSON.stringify({ ...result, meta: undefined, schema: undefined, text: undefined, faq: result.faq.length }));
    await page.close();
  }
  fs.writeFileSync(`reports/mobile-performance/${label}-page-snapshot.json`, JSON.stringify(results, null, 2));
} finally { await browser.close(); }
