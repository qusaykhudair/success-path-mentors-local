const fs = require('node:fs');
const path = require('node:path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchDir(full);
    } else if (f.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('500.html') && (content.includes('rename') || content.includes('move'))) {
        console.log('Found match in:', full);
        const lines = content.split('\n');
        lines.forEach((l, idx) => {
          if (l.includes('500.html')) console.log(`  Line ${idx + 1}: ${l.slice(0, 150)}`);
        });
      }
    }
  }
}

searchDir('node_modules/next/dist/build');
