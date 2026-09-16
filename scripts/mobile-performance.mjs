import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const cache = path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx');
const modules = fs.readdirSync(cache).map(p => path.join(cache, p, 'node_modules')).find(p => fs.existsSync(path.join(p, 'lighthouse/core/index.js')));
if (!modules) throw new Error('Install Lighthouse and puppeteer-core before running this audit.');
const { default: lighthouse } = await import(pathToFileURL(path.join(modules, 'lighthouse/core/index.js')));
const { default: desktop } = await import(pathToFileURL(path.join(modules, 'lighthouse/core/config/desktop-config.js')));
const { default: puppeteer } = await import(pathToFileURL(path.join(modules, 'puppeteer-core/lib/puppeteer/puppeteer-core.js')));
const [url, label, runsText = '3', mode = 'both'] = process.argv.slice(2);
if (!url || !/^[a-z0-9-]+$/.test(label)) throw new Error('Usage: node scripts/mobile-performance.mjs URL label [runs] [mobile|desktop|both]');
const out = 'reports/mobile-performance/raw';
fs.mkdirSync(out, { recursive: true });
for (const device of mode === 'both' ? ['mobile', 'desktop'] : [mode]) {
  for (let i = 1; i <= Number(runsText); i++) {
    const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
    try {
      const port = Number(new URL(browser.wsEndpoint()).port);
      const result = await lighthouse(url, { port, logLevel: 'error', output: 'json' }, device === 'desktop' ? desktop : undefined);
      const filename = `${out}/${label}-${device}-${i}`;
      fs.writeFileSync(filename + '.json', result.report);
      if (result.artifacts.Trace) fs.writeFileSync(filename + '.trace.json', JSON.stringify(result.artifacts.Trace));
      if (result.artifacts.DevtoolsLog) fs.writeFileSync(filename + '.devtoolslog.json', JSON.stringify(result.artifacts.DevtoolsLog));
      const d = result.lhr;
      const values = Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift'].map(k => [k, d.audits[k]?.numericValue ?? null]));
      console.log(JSON.stringify({ label, device, run: i, error: d.runtimeError, scores: Object.fromEntries(Object.entries(d.categories).map(([k,v]) => [k, v.score === null ? null : Math.round(v.score * 100)])), ...values }));
      if (d.runtimeError) throw new Error(d.runtimeError.message);
    } finally { await browser.close(); }
  }
}
