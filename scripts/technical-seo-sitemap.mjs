import fs from 'node:fs';
import ts from 'typescript';
import Module from 'node:module';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
const cache = new Map();
function load(filename, override) {
  const full = path.resolve(filename);
  if (!override && cache.has(full)) return cache.get(full).exports;
  if (full.endsWith('.json')) return JSON.parse(fs.readFileSync(full, 'utf8'));
  const code = ts.transpileModule(override ?? fs.readFileSync(full, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const m = new Module(full);
  m.filename = full;
  m.paths = Module._nodeModulePaths(path.dirname(full));
  const originalRequire = m.require.bind(m);
  m.require = specifier => {
    if (specifier.startsWith('@/') || specifier.startsWith('.')) {
      const root = specifier.startsWith('@/') ? path.resolve('src', specifier.slice(2)) : path.resolve(path.dirname(full),specifier);
      const found = [root,root+'.ts',root+'.json',path.join(root,'index.ts')].find(p=>fs.existsSync(p)&&fs.statSync(p).isFile());
      if (found) return load(found);
    }
    return originalRequire(specifier);
  };
  if (!override) cache.set(full,m);
  m._compile(code,full);
  return m.exports;
}
const original = execFileSync('git',['show','HEAD:src/app/sitemap.ts'],{encoding:'utf8'});
const before = load('src/app/sitemap.ts', original).default();
const after = load('src/app/sitemap.ts').default();
const locations = entries => entries.filter(e=>e.url.includes('/locations')).map(({lastModified,...entry})=>({...entry,hasLastModified:Boolean(lastModified)}));
assert.deepEqual(locations(after),locations(before));
assert.equal(after.filter(e=>!e.url.includes('/locations')&&e.lastModified).length,0);
const summary={locationEntries:locations(after).length,locationEntriesUnchanged:true,nonLocationEntries:after.length-locations(after).length,nonLocationLastmodOmitted:true};
fs.writeFileSync('reports/technical-seo/sitemap-source-qa.json',JSON.stringify(summary,null,2));
console.log(summary);
