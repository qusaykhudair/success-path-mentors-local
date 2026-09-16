import fs from 'node:fs';

const d = JSON.parse(fs.readFileSync('reports/mobile-performance/raw/home_mobile-run3.json', 'utf8'));

console.log('Mobile Run 3 Score Breakdown:');
console.log('Performance:', Math.round(d.categories.performance.score * 100));
console.log('Accessibility:', Math.round(d.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(d.categories['best-practices'].score * 100));
console.log('SEO:', Math.round(d.categories.seo.score * 100));

console.log('\nMetrics:');
for (const [k, v] of Object.entries(d.audits)) {
  if (['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].includes(k)) {
    console.log(`  ${k}: score=${v.score} | value=${v.displayValue} (${v.numericValue?.toFixed(1)}ms)`);
  }
}
