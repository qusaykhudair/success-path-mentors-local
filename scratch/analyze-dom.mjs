import fs from 'node:fs';
import { execSync } from 'node:child_process';

const html = execSync('curl.exe -s http://localhost:3000/en').toString();

// Count tags in different parts
const matchTags = (str) => (str.match(/<[a-zA-Z0-9\-]+/g) || []).length;

console.log('Total tags in HTML:', matchTags(html));

// Sections in main
const sections = html.split('<section');
console.log(`Found ${sections.length - 1} sections:`);
sections.slice(1).forEach((sec, i) => {
  const headingMatch = sec.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/s);
  const heading = headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 40) : 'No heading';
  console.log(`  Section ${i + 1} (${heading}): ~${matchTags(sec)} elements`);
});

// Check header and footer
const headerMatch = html.match(/<header[\s\S]*?<\/header>/);
if (headerMatch) console.log(`Header: ~${matchTags(headerMatch[0])} elements`);

const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/);
if (footerMatch) console.log(`Footer: ~${matchTags(footerMatch[0])} elements`);
