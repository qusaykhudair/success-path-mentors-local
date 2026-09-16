import fs from 'node:fs';

const raw = JSON.parse(fs.readFileSync('reports/performance-sprint/raw/home_mobile-run1.json', 'utf8'));
const audits = raw.audits;
const a11yCategory = raw.categories.accessibility;

console.log('A11y Score:', a11yCategory.score * 100);

for (const auditRef of a11yCategory.auditRefs) {
  const audit = audits[auditRef.id];
  if (audit && audit.score !== null && audit.score < 1) {
    console.log(`\nAudit Fail: [${auditRef.id}] ${audit.title} (Score: ${audit.score}, Weight: ${auditRef.weight})`);
    if (audit.details?.items) {
      console.log('Items:', JSON.stringify(audit.details.items.slice(0, 3), null, 2));
    }
  }
}
