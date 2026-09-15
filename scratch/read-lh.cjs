const fs = require('fs');

const home = JSON.parse(fs.readFileSync('C:/Users/IT/Desktop/success-path-mentors-nextjs/SuccessPath-Website-development-/reports/scratch-lh-home.json', 'utf8'));
console.log('HOMEPAGE:');
console.log('Performance:', Math.round(home.categories.performance.score * 100));
console.log('Accessibility:', Math.round(home.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(home.categories['best-practices'].score * 100));
console.log('SEO:', Math.round(home.categories.seo.score * 100));
console.log('FCP:', home.audits['first-contentful-paint'].displayValue);
console.log('LCP:', home.audits['largest-contentful-paint'].displayValue);
console.log('TBT:', home.audits['total-blocking-time'].displayValue);
console.log('CLS:', home.audits['cumulative-layout-shift'].displayValue);
console.log('Speed Index:', home.audits['speed-index'].displayValue);

const milton = JSON.parse(fs.readFileSync('C:/Users/IT/Desktop/success-path-mentors-nextjs/SuccessPath-Website-development-/reports/scratch-lh-milton.json', 'utf8'));
console.log('\nMILTON:');
console.log('Performance:', Math.round(milton.categories.performance.score * 100));
console.log('Accessibility:', Math.round(milton.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(milton.categories['best-practices'].score * 100));
console.log('SEO:', Math.round(milton.categories.seo.score * 100));
console.log('FCP:', milton.audits['first-contentful-paint'].displayValue);
console.log('LCP:', milton.audits['largest-contentful-paint'].displayValue);
console.log('TBT:', milton.audits['total-blocking-time'].displayValue);
console.log('CLS:', milton.audits['cumulative-layout-shift'].displayValue);
console.log('Speed Index:', milton.audits['speed-index'].displayValue);
