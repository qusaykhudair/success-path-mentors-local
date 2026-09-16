import fs from 'node:fs';

// Run PageSpeed Insights API against live production
const API_KEY = ''; // PSI API works without a key for basic queries
const BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

async function runPSI(url, strategy) {
  const params = new URLSearchParams({
    url,
    strategy,
    category: 'PERFORMANCE',
    category: 'ACCESSIBILITY',
    category: 'BEST_PRACTICES',
    category: 'SEO',
  });
  // PSI only takes one category at a time in query params, but we can use multiple
  const fullUrl = `${BASE}?url=${encodeURIComponent(url)}&strategy=${strategy}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`;
  
  console.log(`\nRunning PSI: ${url} [${strategy}]...`);
  const start = Date.now();
  
  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      console.error(`PSI API error: ${response.status} ${response.statusText}`);
      const body = await response.text();
      console.error(body.substring(0, 500));
      return null;
    }
    
    const data = await response.json();
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`  Completed in ${elapsed}s`);
    
    const lh = data.lighthouseResult;
    if (!lh) {
      console.error('  No lighthouseResult in response');
      return null;
    }
    
    const categories = lh.categories || {};
    const audits = lh.audits || {};
    
    const result = {
      url,
      strategy,
      fetchedAt: new Date().toISOString(),
      scores: {
        performance: Math.round((categories.performance?.score || 0) * 100),
        accessibility: Math.round((categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
        seo: Math.round((categories.seo?.score || 0) * 100),
      },
      metrics: {
        fcp: audits['first-contentful-paint']?.numericValue,
        lcp: audits['largest-contentful-paint']?.numericValue,
        tbt: audits['total-blocking-time']?.numericValue,
        cls: audits['cumulative-layout-shift']?.numericValue,
        si: audits['speed-index']?.numericValue,
        ttfb: audits['server-response-time']?.numericValue,
      },
      lcpElement: audits['largest-contentful-paint-element']?.details?.items?.[0] || null,
    };
    
    console.log(`  Performance: ${result.scores.performance}`);
    console.log(`  Accessibility: ${result.scores.accessibility}`);
    console.log(`  Best Practices: ${result.scores.bestPractices}`);
    console.log(`  SEO: ${result.scores.seo}`);
    console.log(`  FCP: ${(result.metrics.fcp / 1000).toFixed(2)}s`);
    console.log(`  LCP: ${(result.metrics.lcp / 1000).toFixed(2)}s`);
    console.log(`  TBT: ${result.metrics.tbt?.toFixed(0)}ms`);
    console.log(`  CLS: ${result.metrics.cls?.toFixed(3)}`);
    console.log(`  SI:  ${(result.metrics.si / 1000).toFixed(2)}s`);
    
    return result;
  } catch (err) {
    console.error(`  Fetch failed:`, err.message);
    return null;
  }
}

async function main() {
  const results = [];
  
  // Homepage Mobile
  const homeMobile = await runPSI('https://successpathmentors.net/en', 'MOBILE');
  if (homeMobile) results.push(homeMobile);
  
  // Homepage Desktop
  const homeDesktop = await runPSI('https://successpathmentors.net/en', 'DESKTOP');
  if (homeDesktop) results.push(homeDesktop);
  
  // Milton Mobile
  const miltonMobile = await runPSI('https://successpathmentors.net/en/locations/canada/ontario/milton', 'MOBILE');
  if (miltonMobile) results.push(miltonMobile);
  
  // Milton Desktop
  const miltonDesktop = await runPSI('https://successpathmentors.net/en/locations/canada/ontario/milton', 'DESKTOP');
  if (miltonDesktop) results.push(miltonDesktop);
  
  // Write results
  const outPath = 'reports/performance-sprint/psi-results.json';
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nResults written to ${outPath}`);
  
  // Summary table
  console.log('\n=== SUMMARY ===');
  console.log('Page                | Strategy | Perf | A11y | BP  | SEO | FCP    | LCP    | TBT    | CLS');
  console.log('-'.repeat(110));
  for (const r of results) {
    const page = r.url.includes('milton') ? 'Milton' : 'Homepage';
    const m = r.metrics;
    console.log(
      `${page.padEnd(20)}| ${r.strategy.padEnd(9)}| ${String(r.scores.performance).padEnd(5)}| ${String(r.scores.accessibility).padEnd(5)}| ${String(r.scores.bestPractices).padEnd(4)}| ${String(r.scores.seo).padEnd(4)}| ${(m.fcp/1000).toFixed(2).padEnd(7)}| ${(m.lcp/1000).toFixed(2).padEnd(7)}| ${(m.tbt||0).toFixed(0).padStart(4)}ms | ${(m.cls||0).toFixed(3)}`
    );
  }
}

main().catch(console.error);
