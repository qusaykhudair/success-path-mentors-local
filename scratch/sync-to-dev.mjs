import fs from 'node:fs';
import path from 'node:path';

const devRoot = path.resolve('../SuccessPath-Website-development-');
const filesToSync = [
  'src/app/[locale]/layout.tsx',
  'src/app/llms.txt/route.ts',
  'src/components/chat/n8n-chat.tsx',
  'src/components/layout/locale-switcher.tsx',
  'src/components/sections/home/enrollment-card.tsx',
  'src/components/sections/home/faq-accordion.tsx',
  'src/components/sections/home/stat-counter.tsx',
  'src/components/sections/home/steps.tsx',
  'src/components/sections/home/testimonials-grid.tsx',
  'src/components/sections/home/video-testimonials-grid.tsx',
  'src/components/ui/supported-countries.tsx',
  'reports/mobile-performance/MOBILE-TRACE-BEFORE.md'
];

for (const file of filesToSync) {
  const srcPath = path.resolve(file);
  const destPath = path.join(devRoot, file);

  if (!fs.existsSync(srcPath)) {
    console.warn(`Source does not exist: ${file}`);
    continue;
  }

  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied: ${file}`);
}
