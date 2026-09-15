const fs = require('fs');
const path = '../SuccessPath-Website-development-/src/components/layout/mobile-nav.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /const \[open, setOpen\]\s*=\s*useState\(false\);/,
  'const [open, setOpen] = useState(false);\n  const [hasBeenOpened, setHasBeenOpened] = useState(false);'
);

content = content.replace(
  /setOpen\(true\);/,
  'setHasBeenOpened(true);\n            setOpen(true);'
);

content = content.replace(
  /\{locationCountries\.map\(\(country\) => \{/,
  '{hasBeenOpened ? locationCountries.map((country) => {'
);

content = content.replace(
  /\n\s*\}\)\}\s*<\/div>\s*<\/div>\s*\{sectionLinks\.map\(/,
  '\n              }) : null}\n            </div>\n          </div>\n\n          {sectionLinks.map('
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated deployment mobile-nav.tsx');
