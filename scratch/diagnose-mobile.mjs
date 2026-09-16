import fs from 'node:fs';
import path from 'node:path';

const data = JSON.parse(fs.readFileSync('reports/mobile-performance/raw/home_mobile-run3.json', 'utf8'));

console.log('=== LCP ELEMENT ===');
const lcpElement = data.audits['largest-contentful-paint-element'];
console.log(JSON.stringify(lcpElement?.details?.items, null, 2));

console.log('\n=== LONG TASKS ===');
const longTasks = data.audits['long-tasks'];
console.log(JSON.stringify(longTasks?.details?.items?.slice(0, 5), null, 2));

console.log('\n=== MAIN THREAD BREAKDOWN ===');
const mainThread = data.audits['mainthread-work-breakdown'];
console.log(JSON.stringify(mainThread?.details?.items, null, 2));

console.log('\n=== ACCESSIBILITY AUDITS (FAILS) ===');
const a11y = data.categories.accessibility;
const failedA11y = a11y?.auditRefs?.filter(ref => ref.weight > 0 && data.audits[ref.id]?.score !== 1);
failedA11y?.forEach(ref => {
  const audit = data.audits[ref.id];
  console.log(`[${ref.id}] ${audit.title} - Score: ${audit.score}`);
  console.log(JSON.stringify(audit.details?.items?.slice(0, 3), null, 2));
});

console.log('\n=== DIAGNOSTICS ===');
['render-blocking-resources', 'network-requests', 'critical-request-chains', 'bootup-time'].forEach(auditId => {
  const audit = data.audits[auditId];
  if (audit) {
    console.log(`\n-- ${auditId} -- (${audit.displayValue || audit.score})`);
    if (auditId === 'critical-request-chains') {
      console.log(JSON.stringify(audit.details?.chains, null, 2)?.slice(0, 500));
    } else if (audit.details?.items) {
      console.log(JSON.stringify(audit.details.items.slice(0, 4), null, 2));
    }
  }
});
