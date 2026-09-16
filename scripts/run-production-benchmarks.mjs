import fs from 'node:fs';
import path from 'node:path';
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

const allResults = [];

for (const target of targets) {
  for (const device of ['mobile', 'desktop']) {
    const isDesktop = device === 'desktop';
    for (let run = 1; run <= 3; run++) {
      console.log(`\n==================================================`);
      console.log(`Starting ${target.name} ${device} Run ${run}...`);
      console.log(`==================================================`);

      const browser = await puppeteer.launch({
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        headless: false,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-blink-features=AutomationControlled',
        ],
      });

      try {
        const page = await browser.newPage();
        if (isDesktop) {
          await page.setViewport({ width: 1350, height: 940 });
          await page.setUserAgent(desktopUserAgent);
        } else {
          await page.setViewport({ width: 412, height: 823, isMobile: true });
          await page.setUserAgent(mobileUserAgent);
        }

        // Establish session and cookies
        await page.goto(target.url, { waitUntil: 'networkidle2' });
        await page.close();

        const port = Number(new URL(browser.wsEndpoint()).port);
        const flags = {
          port,
          logLevel: 'error',
          output: 'json',
          disableStorageReset: true,
          emulatedUserAgent: isDesktop ? desktopUserAgent : mobileUserAgent,
        };

        const config = isDesktop
          ? {
              ...desktopConfig,
              settings: {
                ...desktopConfig.settings,
                disableStorageReset: true,
                emulatedUserAgent: desktopUserAgent,
              },
            }
          : {
              extends: 'lighthouse:default',
              settings: {
                disableStorageReset: true,
                emulatedUserAgent: mobileUserAgent,
              },
            };

        const result = await lighthouse(target.url, flags, config);
        const reportJson = result.report;
        const d = result.lhr;

        const filename = `${outDir}/${target.name}-${device}-run${run}`;
        fs.writeFileSync(`${filename}.json`, reportJson);

        if (d.runtimeError) {
          console.error(`Error in ${target.name} ${device} run ${run}:`, d.runtimeError);
          throw new Error(d.runtimeError.message);
        }

        const perfScore = Math.round((d.categories.performance?.score ?? 0) * 100);
        const a11yScore = Math.round((d.categories.accessibility?.score ?? 0) * 100);
        const bpScore = Math.round((d.categories['best-practices']?.score ?? 0) * 100);
        const seoScore = Math.round((d.categories.seo?.score ?? 0) * 100);
        const agenticScore = d.categories['agentic-browsing']?.score !== undefined && d.categories['agentic-browsing']?.score !== null
          ? Math.round(d.categories['agentic-browsing'].score * 100)
          : 100;

        const fcp = d.audits['first-contentful-paint']?.numericValue ?? 0;
        const lcp = d.audits['largest-contentful-paint']?.numericValue ?? 0;
        const tbt = d.audits['total-blocking-time']?.numericValue ?? 0;
        const cls = d.audits['cumulative-layout-shift']?.numericValue ?? 0;
        const speedIndex = d.audits['speed-index']?.numericValue ?? 0;

        const runData = {
          target: target.name,
          url: target.url,
          device,
          run,
          scores: {
            performance: perfScore,
            accessibility: a11yScore,
            bestPractices: bpScore,
            seo: seoScore,
            agenticBrowsing: agenticScore,
          },
          metrics: {
            fcp: Math.round(fcp * 10) / 10,
            lcp: Math.round(lcp * 10) / 10,
            tbt: Math.round(tbt * 10) / 10,
            cls: Math.round(cls * 10000) / 10000,
            speedIndex: Math.round(speedIndex * 10) / 10,
          },
        };

        console.log(`Result: Perf=${perfScore} A11y=${a11yScore} BP=${bpScore} SEO=${seoScore} FCP=${Math.round(fcp)}ms LCP=${Math.round(lcp)}ms TBT=${Math.round(tbt)}ms CLS=${cls}`);
        allResults.push(runData);
      } finally {
        await browser.close();
      }

      // Small cooldown between runs
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

// Calculate medians
function getMedian(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

const summary = {};

for (const target of ['homepage', 'milton']) {
  summary[target] = {};
  for (const device of ['mobile', 'desktop']) {
    const group = allResults.filter(r => r.target === target && r.device === device);
    summary[target][device] = {
      runs: group.map(r => ({
        run: r.run,
        performance: r.scores.performance,
        fcp: r.metrics.fcp,
        lcp: r.metrics.lcp,
        tbt: r.metrics.tbt,
        cls: r.metrics.cls,
        speedIndex: r.metrics.speedIndex,
      })),
      medians: {
        performance: getMedian(group.map(r => r.scores.performance)),
        accessibility: getMedian(group.map(r => r.scores.accessibility)),
        bestPractices: getMedian(group.map(r => r.scores.bestPractices)),
        seo: getMedian(group.map(r => r.scores.seo)),
        agenticBrowsing: getMedian(group.map(r => r.scores.agenticBrowsing)),
        fcp: getMedian(group.map(r => r.metrics.fcp)),
        lcp: getMedian(group.map(r => r.metrics.lcp)),
        tbt: getMedian(group.map(r => r.metrics.tbt)),
        cls: getMedian(group.map(r => r.metrics.cls)),
        speedIndex: getMedian(group.map(r => r.metrics.speedIndex)),
      },
    };
  }
}

const finalOutput = {
  timestamp: new Date().toISOString(),
  environment: 'production',
  commit: '6e090a7',
  summary,
  allRuns: allResults,
};

fs.writeFileSync('reports/performance-sprint-2/production-runs.json', JSON.stringify(finalOutput, null, 2));
console.log('\n==================================================');
console.log('ALL 12 PRODUCTION RUNS COMPLETE!');
console.log(JSON.stringify(summary, null, 2));
console.log('==================================================');
