import fs from 'node:fs';
import path from 'node:path';

const rawDir = path.resolve('reports/mobile-performance/raw');

function parseAudit(filename) {
  const filePath = path.join(rawDir, filename);
  if (!fs.existsSync(filePath)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const categories = data.categories || {};
    const audits = data.audits || {};

    return {
      filename,
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
      savings: {
        renderBlocking: audits['render-blocking-resources']?.details?.overallSavingsMs || audits['render-blocking-resources']?.numericValue || 0,
        unusedJs: audits['unused-javascript']?.details?.overallSavingsBytes || audits['unused-javascript']?.numericValue || 0,
        unusedCss: audits['unused-css-rules']?.details?.overallSavingsBytes || audits['unused-css-rules']?.numericValue || 0,
        longTasks: (audits['long-tasks']?.details?.items || []).length,
      }
    };
  } catch (e) {
    console.error(`Error parsing ${filename}:`, e.message);
    return null;
  }
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

const mobileRuns = [
  parseAudit('home_mobile-run1.json'),
  parseAudit('home_mobile-run2.json'),
  parseAudit('home_mobile-run3.json'),
].filter(Boolean);

const desktopRuns = [
  parseAudit('home_desktop-run1.json'),
  parseAudit('home_desktop-run2.json'),
  parseAudit('home_desktop-run3.json'),
].filter(Boolean);

console.log('=== MOBILE RUNS ===');
mobileRuns.forEach((r, i) => {
  console.log(`Run ${i + 1}: Perf=${r.scores.perf} | LCP=${(r.metrics.lcp / 1000).toFixed(2)}s | FCP=${(r.metrics.fcp / 1000).toFixed(2)}s | TBT=${r.metrics.tbt?.toFixed(0)}ms | CLS=${r.metrics.cls?.toFixed(3)} | A11y=${r.scores.a11y} | BP=${r.scores.bp} | SEO=${r.scores.seo}`);
  console.log(`       RenderBlocking=${r.savings.renderBlocking}ms | UnusedJS=${(r.savings.unusedJs / 1024).toFixed(1)}KiB | UnusedCSS=${(r.savings.unusedCss / 1024).toFixed(1)}KiB | LongTasks=${r.savings.longTasks}`);
});

console.log('\n=== DESKTOP RUNS ===');
desktopRuns.forEach((r, i) => {
  console.log(`Run ${i + 1}: Perf=${r.scores.perf} | LCP=${(r.metrics.lcp / 1000).toFixed(2)}s | FCP=${(r.metrics.fcp / 1000).toFixed(2)}s | TBT=${r.metrics.tbt?.toFixed(0)}ms | CLS=${r.metrics.cls?.toFixed(3)} | A11y=${r.scores.a11y} | BP=${r.scores.bp} | SEO=${r.scores.seo}`);
});

const summary = {
  mobile: {
    perf: median(mobileRuns.map(r => r.scores.perf)),
    lcp: median(mobileRuns.map(r => r.metrics.lcp)),
    fcp: median(mobileRuns.map(r => r.metrics.fcp)),
    tbt: median(mobileRuns.map(r => r.metrics.tbt)),
    cls: median(mobileRuns.map(r => r.metrics.cls)),
    a11y: median(mobileRuns.map(r => r.scores.a11y)),
    bp: median(mobileRuns.map(r => r.scores.bp)),
    seo: median(mobileRuns.map(r => r.scores.seo)),
    renderBlocking: median(mobileRuns.map(r => r.savings.renderBlocking)),
    unusedJsKiB: (median(mobileRuns.map(r => r.savings.unusedJs)) / 1024).toFixed(1),
    unusedCssKiB: (median(mobileRuns.map(r => r.savings.unusedCss)) / 1024).toFixed(1),
    longTasks: median(mobileRuns.map(r => r.savings.longTasks)),
  },
  desktop: {
    perf: median(desktopRuns.map(r => r.scores.perf)),
    lcp: median(desktopRuns.map(r => r.metrics.lcp)),
    fcp: median(desktopRuns.map(r => r.metrics.fcp)),
    tbt: median(desktopRuns.map(r => r.metrics.tbt)),
    cls: median(desktopRuns.map(r => r.metrics.cls)),
    a11y: median(desktopRuns.map(r => r.scores.a11y)),
    bp: median(desktopRuns.map(r => r.scores.bp)),
    seo: median(desktopRuns.map(r => r.scores.seo)),
  }
};

console.log('\n=======================================');
console.log('FINAL BENCHMARK MEDIANS:');
console.log('=======================================');
console.log('MOBILE MEDIAN:');
console.log(`  Performance: ${summary.mobile.perf}`);
console.log(`  LCP: ${(summary.mobile.lcp / 1000).toFixed(2)}s`);
console.log(`  FCP: ${(summary.mobile.fcp / 1000).toFixed(2)}s`);
console.log(`  TBT: ${summary.mobile.tbt.toFixed(0)}ms`);
console.log(`  CLS: ${summary.mobile.cls.toFixed(3)}`);
console.log(`  Accessibility: ${summary.mobile.a11y}`);
console.log(`  Best Practices: ${summary.mobile.bp}`);
console.log(`  SEO: ${summary.mobile.seo}`);
console.log(`  Render-blocking savings: ${summary.mobile.renderBlocking}ms`);
console.log(`  Unused JS: ${summary.mobile.unusedJsKiB} KiB`);
console.log(`  Unused CSS: ${summary.mobile.unusedCssKiB} KiB`);
console.log(`  Long Tasks: ${summary.mobile.longTasks}`);

console.log('\nDESKTOP MEDIAN:');
console.log(`  Performance: ${summary.desktop.perf}`);
console.log(`  LCP: ${(summary.desktop.lcp / 1000).toFixed(2)}s`);
console.log(`  FCP: ${(summary.desktop.fcp / 1000).toFixed(2)}s`);
console.log(`  TBT: ${summary.desktop.tbt.toFixed(0)}ms`);
console.log(`  CLS: ${summary.desktop.cls.toFixed(3)}`);
console.log(`  Accessibility: ${summary.desktop.a11y}`);
console.log(`  Best Practices: ${summary.desktop.bp}`);
console.log(`  SEO: ${summary.desktop.seo}`);

fs.writeFileSync('reports/mobile-performance/benchmark-results.json', JSON.stringify({ mobileRuns, desktopRuns, summary }, null, 2));
