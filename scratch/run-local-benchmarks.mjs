import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const LIGHTHOUSE_CMD = `C:\\Users\\IT\\AppData\\Local\\npm-cache\\_npx\\0f94ee7615faf582\\node_modules\\.bin\\lighthouse.cmd`;
const rawDir = path.resolve('reports/mobile-performance/raw');

if (!fs.existsSync(rawDir)) {
  fs.mkdirSync(rawDir, { recursive: true });
}

function runAudit(url, strategy, runIndex) {
  const isDesktop = strategy === 'desktop';
  const filename = `${url.includes('milton') ? 'milton' : 'home'}_${strategy}-run${runIndex}.json`;
  const outPath = path.join(rawDir, filename);

  const presetFlag = isDesktop ? '--preset=desktop' : '';
  const cmd = `"${LIGHTHOUSE_CMD}" ${url} --output=json --output-path="${outPath}" --chrome-flags="--headless=new" ${presetFlag} --only-categories=performance,accessibility,best-practices,seo --quiet`;

  console.log(`\n[${strategy.toUpperCase()} Run ${runIndex}] Running: ${url}...`);
  const start = Date.now();
  try {
    execSync(cmd, { stdio: 'inherit' });
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`  Done in ${elapsed}s. Saved to ${filename}`);

    const data = JSON.parse(fs.readFileSync(outPath, 'utf8'));
    const categories = data.categories || {};
    const audits = data.audits || {};

    return {
      strategy,
      runIndex,
      scores: {
        perf: Math.round((categories.performance?.score || 0) * 100),
        a11y: Math.round((categories.accessibility?.score || 0) * 100),
        bp: Math.round((categories['best-practices']?.score || 0) * 100),
        seo: Math.round((categories.seo?.score || 0) * 100),
      },
      metrics: {
        fcp: audits['first-contentful-paint']?.numericValue,
        lcp: audits['largest-contentful-paint']?.numericValue,
        tbt: audits['total-blocking-time']?.numericValue,
        cls: audits['cumulative-layout-shift']?.numericValue,
        si: audits['speed-index']?.numericValue,
      },
    };
  } catch (err) {
    console.error(`  Failed run:`, err.message);
    return null;
  }
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

async function main() {
  const runs = {
    homeMobile: [],
    homeDesktop: [],
  };

  // Run 3x Homepage Mobile
  for (let i = 1; i <= 3; i++) {
    const res = runAudit('http://localhost:3000/en', 'mobile', i);
    if (res) runs.homeMobile.push(res);
  }

  // Run 3x Homepage Desktop
  for (let i = 1; i <= 3; i++) {
    const res = runAudit('http://localhost:3000/en', 'desktop', i);
    if (res) runs.homeDesktop.push(res);
  }

  console.log('\n==============================');
  console.log('RESULTS SUMMARY (3 RUNS MEDIAN)');
  console.log('==============================');

  const summary = {
    mobile: {
      perf: median(runs.homeMobile.map(r => r.scores.perf)),
      lcp: median(runs.homeMobile.map(r => r.metrics.lcp)),
      fcp: median(runs.homeMobile.map(r => r.metrics.fcp)),
      tbt: median(runs.homeMobile.map(r => r.metrics.tbt)),
      cls: median(runs.homeMobile.map(r => r.metrics.cls)),
      a11y: median(runs.homeMobile.map(r => r.scores.a11y)),
      bp: median(runs.homeMobile.map(r => r.scores.bp)),
      seo: median(runs.homeMobile.map(r => r.scores.seo)),
    },
    desktop: {
      perf: median(runs.homeDesktop.map(r => r.scores.perf)),
      lcp: median(runs.homeDesktop.map(r => r.metrics.lcp)),
      fcp: median(runs.homeDesktop.map(r => r.metrics.fcp)),
      tbt: median(runs.homeDesktop.map(r => r.metrics.tbt)),
      cls: median(runs.homeDesktop.map(r => r.metrics.cls)),
      a11y: median(runs.homeDesktop.map(r => r.scores.a11y)),
      bp: median(runs.homeDesktop.map(r => r.scores.bp)),
      seo: median(runs.homeDesktop.map(r => r.scores.seo)),
    }
  };

  console.log('HOMEPAGE MOBILE MEDIAN:');
  console.log(`  Performance: ${summary.mobile.perf}`);
  console.log(`  LCP: ${(summary.mobile.lcp / 1000).toFixed(2)}s`);
  console.log(`  FCP: ${(summary.mobile.fcp / 1000).toFixed(2)}s`);
  console.log(`  TBT: ${summary.mobile.tbt?.toFixed(0)}ms`);
  console.log(`  CLS: ${summary.mobile.cls?.toFixed(3)}`);
  console.log(`  Accessibility: ${summary.mobile.a11y}`);
  console.log(`  Best Practices: ${summary.mobile.bp}`);
  console.log(`  SEO: ${summary.mobile.seo}`);

  console.log('\nHOMEPAGE DESKTOP MEDIAN:');
  console.log(`  Performance: ${summary.desktop.perf}`);
  console.log(`  LCP: ${(summary.desktop.lcp / 1000).toFixed(2)}s`);
  console.log(`  FCP: ${(summary.desktop.fcp / 1000).toFixed(2)}s`);
  console.log(`  TBT: ${summary.desktop.tbt?.toFixed(0)}ms`);
  console.log(`  CLS: ${summary.desktop.cls?.toFixed(3)}`);
  console.log(`  Accessibility: ${summary.desktop.a11y}`);
  console.log(`  Best Practices: ${summary.desktop.bp}`);
  console.log(`  SEO: ${summary.desktop.seo}`);

  fs.writeFileSync('reports/mobile-performance/benchmark-summary.json', JSON.stringify({ runs, summary }, null, 2));
  console.log('\nWrote reports/mobile-performance/benchmark-summary.json');
}

main().catch(console.error);
