const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

fs.mkdirSync('.next/export', { recursive: true });
fs.writeFileSync('.next/export/500.html', '<!DOCTYPE html><html><body>500</body></html>');
fs.mkdirSync('.next/server', { recursive: true });
if (!fs.existsSync('.next/server/pages-manifest.json')) {
  fs.writeFileSync('.next/server/pages-manifest.json', '{}');
}

console.log('Starting next build...');
execSync('npx next build', { stdio: 'inherit' });
console.log('Build completed successfully!');
