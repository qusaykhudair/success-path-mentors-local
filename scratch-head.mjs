import fs from 'fs';

const htmlPath = '.next/server/app/en.html';
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  console.log('HTML Total size:', (html.length / 1024).toFixed(1), 'KB');
  const scripts = [...html.matchAll(/<script[\s\S]*?<\/script>/gi)].map(m => m[0]);
  let scriptTotal = 0;
  console.log('\n--- Script tags breakdown ---');
  scripts.forEach((s, i) => {
    scriptTotal += s.length;
    const isSrc = s.match(/src="([^"]+)"/);
    if (isSrc) {
      console.log(`Script ${i}: src=${isSrc[1]} (${s.length} chars)`);
    } else {
      console.log(`Script ${i}: inline (${(s.length / 1024).toFixed(1)} KB) - starts with: ${s.substring(0, 80).replace(/\n/g, ' ')}...`);
    }
  });
  console.log('Total script length in HTML:', (scriptTotal / 1024).toFixed(1), 'KB');
  console.log('HTML markup without scripts:', ((html.length - scriptTotal) / 1024).toFixed(1), 'KB');
}
