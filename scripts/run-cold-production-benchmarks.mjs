import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const cache = path.join(process.env.LOCALAPPDATA, 'npm-cache/_npx');
const modules = fs.readdirSync(cache).map(p => path.join(cache, p, 'node_modules')).find(p => fs.existsSync(path.join(p, 'lighthouse/core/index.js')));
if (!modules) throw new Error('Install Lighthouse and puppeteer-core before running this audit.');

const { default: lighthouse } = await import(pathToFileURL(path.join(modules, 'lighthouse/core/index.js')));
const { default: desktopConfig } = await import(pathToFileURL(path.join(modules, 'lighthouse/core/config/desktop-config.js')));
const { default: puppeteer } = await import(pathToFileURL(path.join(modules, 'puppeteer-core/lib/puppeteer/puppeteer-core.js')));

const outDir = 'reports/performance-sprint-2/raw';
fs.mkdirSync(outDir, { recursive: true });

const targets = [
  {
    name: 'homepage',
    url: 'https://successpathmentors.net/en',
  },
  {
    name: 'milton',
    url: 'https://successpathmentors.net/en/locations/canada/ontario/milton',
  },
];

const mobileUserAgent = 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36';
const desktopUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36';

const coldResults = [];

for (const target of targets) {
  for (const device of ['mobile', 'desktop']) {
    const isDesktop = device === 'desktop';
    for (let run = 1; run <= 3; run++) {
      console.log(`\n==================================================`);
      console.log(`Starting COLD CACHE: ${target.name} ${device} Run ${run}...`);
      console.log(`==================================================`);

      // 1. Fresh profile directory for EACH run (completely clean cache and storage)
      const tmpProfile = fs.mkdtempSync(path.join(os.tmpdir(), `spm-cold-${target.name}-${device}-${run}-`));

      const browser = await puppeteer.launch({
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        headless: false,
        userDataDir: tmpProfile,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-blink-features=AutomationControlled',
        ],
      });

      try {
        const port = Number(new URL(browser.wsEndpoint()).port);

        // STRICT COLD REQUIREMENTS:
        // - NO page.goto() before Lighthouse
        // - NO pre-navigation
        // - NO disableStorageReset: true (default storage reset enabled)
        const flags = {
          port,
          logLevel: 'error',
          output: 'json',
          emulatedUserAgent: isDesktop ? desktopUserAgent : mobileUserAgent,
        };

        const config = isDesktop
          ? {
              ...desktopConfig,
              settings: {
                ...desktopConfig.settings,
                emulatedUserAgent: desktopUserAgent,
              },
            }
          : {
              extends: 'lighthouse:default',
              settings: {
                emulatedUserAgent: mobileUserAgent,
              },
            };

        const result = await lighthouse(target.url, flags, config);
        const reportJson = result.report;
        const d = result.lhr;

        const filename = `${outDir}/cold-${target.name}-${device}-run${run}`;
        fs.writeFileSync(`${filename}.json`, reportJson);

        const hasRuntimeError = !!d.runtimeError;
        const perfScore = d.categories.performance?.score !== null && d.categories.performance?.score !== undefined
          ? Math.round(d.categories.performance.score * 100)
          : null;
        const a11yScore = d.categories.accessibility?.score !== null && d.categories.accessibility?.score !== undefined
          ? Math.round(d.categories.accessibility.score * 100)
          : null;
        const bpScore = d.categories['best-practices']?.score !== null && d.categories['best-practices']?.score !== undefined
          ? Math.round(d.categories['best-practices'].score * 100)
          : null;
        const seoScore = d.categories.seo?.score !== null && d.categories.seo?.score !== undefined
          ? Math.round(d.categories.seo.score * 100)
          : null;

        const fcp = d.audits['first-contentful-paint']?.numericValue ?? null;
        const lcp = d.audits['largest-contentful-paint']?.numericValue ?? null;
        const tbt = d.audits['total-blocking-time']?.numericValue ?? null;
        const cls = d.audits['cumulative-layout-shift']?.numericValue ?? null;
        const speedIndex = d.audits['speed-index']?.numericValue ?? null;
        const totalBytes = d.audits['total-byte-weight']?.numericValue ?? null;
        const renderBlockingItems = d.audits['render-blocking-resources']?.details?.items ?? [];
        const renderBlockingMs = renderBlockingItems.reduce((acc, i) => acc + (i.wastedMs || 0), 0);
        const unusedJsBytes = d.audits['unused-javascript']?.details?.items?.reduce((acc, i) => acc + (i.wastedBytes || 0), 0) ?? 0;
        const unusedCssBytes = d.audits['unused-css-rules']?.details?.items?.reduce((acc, i) => acc + (i.wastedBytes || 0), 0) ?? 0;
        const longTasksCount = d.audits['long-tasks']?.details?.items?.length ?? 0;

        const runRecord = {
          target: target.name,
          url: target.url,
          device,
          run,
          mode: 'cold-cache',
          valid: !hasRuntimeError,
          runtimeError: d.runtimeError ?? null,
          scores: {
            performance: perfScore,
            accessibility: a11yScore,
            bestPractices: bpScore,
            seo: seoScore,
          },
          metrics: {
            fcp: fcp !== null ? Math.round(fcp * 10) / 10 : null,
            lcp: lcp !== null ? Math.round(lcp * 10) / 10 : null,
            tbt: tbt !== null ? Math.round(tbt * 10) / 10 : null,
            cls: cls !== null ? Math.round(cls * 10000) / 10000 : null,
            speedIndex: speedIndex !== null ? Math.round(speedIndex * 10) / 10 : null,
            totalBytes,
            renderBlockingMs,
            unusedJsBytes,
            unusedCssBytes,
            longTasksCount,
          },
        };

        if (hasRuntimeError) {
          console.log(`[COLD RUN FAILED]: ${d.runtimeError.code} - ${d.runtimeError.message}`);
        } else {
          console.log(`[COLD RUN SUCCESS]: Perf=${perfScore} A11y=${a11yScore} BP=${bpScore} SEO=${seoScore} FCP=${fcp} LCP=${lcp} TBT=${tbt} CLS=${cls}`);
        }

        coldResults.push(runRecord);
      } catch (err) {
        console.error(`Execution error on ${target.name} ${device} run ${run}:`, err.message);
        coldResults.push({
          target: target.name,
          url: target.url,
          device,
          run,
          mode: 'cold-cache',
          valid: false,
          runtimeError: { code: 'EXECUTION_EXCEPTION', message: err.message },
          scores: { performance: null, accessibility: null, bestPractices: null, seo: null },
          metrics: { fcp: null, lcp: null, tbt: null, cls: null, speedIndex: null },
        });
      } finally {
        await browser.close();
        try { fs.rmSync(tmpProfile, { recursive: true, force: true }); } catch {}
      }

      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

// Load warm results from existing production-runs.json if present
let warmSummary = null;
if (fs.existsSync('reports/performance-sprint-2/production-runs.json')) {
  try {
    const existing = JSON.parse(fs.readFileSync('reports/performance-sprint-2/production-runs.json', 'utf8'));
    warmSummary = existing.summary;
  } catch {}
}

function getMedian(numbers) {
  const valid = numbers.filter(n => typeof n === 'number' && !isNaN(n));
  if (!valid.length) return null;
  const sorted = [...valid].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

const coldSummary = {};
for (const target of ['homepage', 'milton']) {
  coldSummary[target] = {};
  for (const device of ['mobile', 'desktop']) {
    const group = coldResults.filter(r => r.target === target && r.device === device);
    coldSummary[target][device] = {
      runs: group.map(r => ({
        run: r.run,
        valid: r.valid,
        runtimeError: r.runtimeError,
        performance: r.scores.performance,
        fcp: r.metrics.fcp,
        lcp: r.metrics.lcp,
        tbt: r.metrics.tbt,
        cls: r.metrics.cls,
        speedIndex: r.metrics.speedIndex,
        totalBytes: r.metrics.totalBytes,
      })),
      medians: {
        performance: getMedian(group.map(r => r.scores.performance)),
        accessibility: getMedian(group.map(r => r.scores.accessibility)),
        bestPractices: getMedian(group.map(r => r.scores.bestPractices)),
        seo: getMedian(group.map(r => r.scores.seo)),
        fcp: getMedian(group.map(r => r.metrics.fcp)),
        lcp: getMedian(group.map(r => r.metrics.lcp)),
        tbt: getMedian(group.map(r => r.metrics.tbt)),
        cls: getMedian(group.map(r => r.metrics.cls)),
        speedIndex: getMedian(group.map(r => r.metrics.speedIndex)),
      },
    };
  }
}

const comparisonOutput = {
  timestamp: new Date().toISOString(),
  environment: 'production',
  host: 'https://successpathmentors.net',
  notes: 'Cold cache benchmark executes with fresh browser profile, no pre-navigation, and default storage reset. Warm cache benchmark executes with established session cookies and disableStorageReset=true.',
  warmCacheBenchmark: warmSummary,
  coldCacheBenchmark: coldSummary,
  allColdRuns: coldResults,
};

fs.writeFileSync('reports/performance-sprint-2/production-runs.json', JSON.stringify(comparisonOutput, null, 2));

console.log('\n==================================================');
console.log('COLD-CACHE PRODUCTION BENCHMARK COMPLETE!');
console.log(JSON.stringify(coldSummary, null, 2));
console.log('==================================================');
