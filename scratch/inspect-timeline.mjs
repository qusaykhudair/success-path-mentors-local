import fs from 'node:fs';

const d = JSON.parse(fs.readFileSync('reports/mobile-performance/raw/home_mobile-run1.json', 'utf8'));

const requests = d.audits['network-requests']?.details?.items || [];
console.log('=== NETWORK TIMELINE (ms) ===');
requests.forEach(r => {
  console.log(`${r.rendererStartTime?.toFixed(1)}ms - ${r.networkEndTime?.toFixed(1)}ms: [${r.resourceType}] ${r.url?.slice(0, 70)} (${(r.transferSize / 1024).toFixed(1)} KB)`);
});

console.log('\n=== METRICS ===');
console.log('TTFB:', d.audits['server-response-time']?.numericValue);
console.log('FCP:', d.audits['first-contentful-paint']?.numericValue);
console.log('LCP:', d.audits['largest-contentful-paint']?.numericValue);
console.log('DOM Size:', d.audits['dom-size']?.numericValue);
