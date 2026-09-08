import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import ts from 'typescript';

const require = createRequire(import.meta.url);

// Uses the installed compiler; no production loader or dependency changes.
export function createLoader(root, overrides = {}) {
  const cache = new Map();
  const loading = new Set();
  function load(relativePath) {
    const filename = resolve(root, relativePath);
    if (cache.has(filename)) return cache.get(filename);
    if (loading.has(filename)) throw new Error(`Circular runtime dependency: ${filename}`);
    loading.add(filename);
    if (filename.endsWith('.json')) {
      const value = JSON.parse(readFileSync(filename, 'utf8'));
      cache.set(filename, value);
      loading.delete(filename);
      return value;
    }
    const { outputText } = ts.transpileModule(readFileSync(filename, 'utf8'), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022,
        jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
      },
      fileName: filename,
    });
    const loadedModule = { exports: {} };
    const localRequire = (specifier) => {
      if (Object.hasOwn(overrides, specifier)) return overrides[specifier];
      if (specifier.endsWith('.css')) return {};
      if (specifier.startsWith('@/') || specifier.startsWith('.')) {
        const base = specifier.startsWith('@/')
          ? resolve(root, 'src', specifier.slice(2)) : resolve(dirname(filename), specifier);
        const target = [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`].find(existsSync);
        if (!target) throw new Error(`Cannot resolve ${specifier} from ${filename}`);
        return load(target);
      }
      return require(specifier);
    };
    new Function('require', 'module', 'exports', outputText)(localRequire, loadedModule, loadedModule.exports);
    cache.set(filename, loadedModule.exports);
    loading.delete(filename);
    return loadedModule.exports;
  }
  return load;
}
