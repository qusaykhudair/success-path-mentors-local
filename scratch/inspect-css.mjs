import fs from 'node:fs';

const css = fs.readFileSync('C:/Users/IT/Desktop/success-path-mentors-nextjs/SuccessPath-Website-development-/.next/static/css/11def5b62f97be3e.css', 'utf8');

console.log('Total CSS size:', (css.length / 1024).toFixed(1), 'KB');

// Check what takes the most space
const fontFaces = css.match(/@font-face\{[^}]+\}/g) || [];
console.log(`@font-face rules count: ${fontFaces.length}, size: ${(fontFaces.join('').length / 1024).toFixed(1)} KB`);

const keyframes = css.match(/@keyframes [^{]+\{(?:[^{}]*\{[^{}]*\})*\}/g) || [];
console.log(`@keyframes count: ${keyframes.length}, size: ${(keyframes.join('').length / 1024).toFixed(1)} KB`);

const mediaQueries = css.match(/@media[^{]+\{(?:[^{}]*\{[^{}]*\})*\}/g) || [];
console.log(`@media count: ${mediaQueries.length}, size: ${(mediaQueries.join('').length / 1024).toFixed(1)} KB`);
