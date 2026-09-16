const fs = require('node:fs');
const path = require('node:path');

const filePath = path.resolve('src/app/[locale]/page.tsx');
let code = fs.readFileSync(filePath, 'utf8');

const oldSections = [
  '      <Steps />',
  '      <Services />',
  '      <Challenges />',
  '      <Testimonials />',
  '      <VideoTestimonials />',
  '      <Pricing />',
  '      <LocalAvailabilityBlock locale={locale} />',
  '      <Faq />',
  '      <FinalCta />'
];

oldSections.forEach(sec => {
  const replacement = `      <div className="content-auto">\n  ${sec}\n      </div>`;
  code = code.replace(sec, replacement);
});

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully wrapped sections with content-auto');
