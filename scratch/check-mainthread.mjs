import fs from 'node:fs';

const d = JSON.parse(fs.readFileSync('reports/mobile-performance/raw/home_mobile-run1.json', 'utf8'));

console.log('=== MAIN THREAD WORK ===');
console.log(d.audits['mainthread-work-breakdown']?.details?.items);

console.log('=== SCRIPT EVALUATION ===');
const bootup = d.audits['bootup-time']?.details?.items || [];
bootup.forEach(b => {
  console.log(`${(b.total || 0).toFixed(0)}ms: ${b.url?.slice(0, 80)}`);
});
