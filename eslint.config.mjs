import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      'react-hooks/purity': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/incompatible-library': 'off',
      'react-hooks/immutability': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'dist/**',
    'node_modules/**',
    '.sites-runtime/**',
    '.wrangler/**',
    'examples/**',
    'db/**',
    'drizzle/**',
    'build/**',
  ]),
]);
