import fs from 'node:fs';

const raw = JSON.parse(fs.readFileSync('reports/performance-sprint/raw/home_mobile-run1.json', 'utf8'));
const audits = raw.audits;

const report = {
  fcp: audits['first-contentful-paint']?.numericValue,
  lcp: audits['largest-contentful-paint']?.numericValue,
  tbt: audits['total-blocking-time']?.numericValue,
  cls: audits['cumulative-layout-shift']?.numericValue,
  si: audits['speed-index']?.numericValue,
  renderBlocking: audits['render-blocking-resources']?.details?.items || [],
  renderBlockingSavings: audits['render-blocking-resources']?.numericValue || 0,
  unusedJs: audits['unused-javascript']?.details?.items || [],
  unusedJsSavings: audits['unused-javascript']?.numericValue || 0,
  unusedCss: audits['unused-css-rules']?.details?.items || [],
  unusedCssSavings: audits['unused-css-rules']?.numericValue || 0,
  legacyJs: audits['legacy-javascript']?.details?.items || [],
  legacyJsSavings: audits['legacy-javascript']?.numericValue || 0,
  longTasks: audits['long-tasks']?.details?.items || [],
  bootupTime: audits['bootup-time']?.details?.items || [],
  networkRequests: (audits['network-requests']?.details?.items || []).slice(0, 15),
  domSize: audits['dom-size']?.numericValue,
  criticalRequestChains: audits['critical-request-chains']?.details?.chains || {},
  lcpBreakdown: audits['lcp-breakdown-insight']?.details || null,
  mainThreadWork: audits['mainthread-work-breakdown']?.details?.items || [],
};

console.log('FCP:', report.fcp);
console.log('LCP:', report.lcp);
console.log('TBT:', report.tbt);
console.log('CLS:', report.cls);
console.log('Render Blocking Savings (ms):', report.renderBlockingSavings);
console.log('Render Blocking Resources:', JSON.stringify(report.renderBlocking, null, 2));
console.log('Unused JS Total Bytes:', audits['unused-javascript']?.details?.overallSavingsBytes);
console.log('Unused JS Top Items:', JSON.stringify(report.unusedJs.slice(0, 5), null, 2));
console.log('Unused CSS Total Bytes:', audits['unused-css-rules']?.details?.overallSavingsBytes);
console.log('Unused CSS Items:', JSON.stringify(report.unusedCss, null, 2));
console.log('Legacy JS Total Bytes:', audits['legacy-javascript']?.details?.overallSavingsBytes);
console.log('Legacy JS Items:', JSON.stringify(report.legacyJs, null, 2));
console.log('Long Tasks Count:', report.longTasks.length);
console.log('Long Tasks:', JSON.stringify(report.longTasks, null, 2));
console.log('DOM Size Elements:', report.domSize);
console.log('Main Thread Work:', JSON.stringify(report.mainThreadWork.slice(0, 8), null, 2));
