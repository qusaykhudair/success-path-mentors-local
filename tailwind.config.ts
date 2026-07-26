import type { Config } from 'tailwindcss';

/**
 * Design tokens — locked brand values (do not alter without sign-off):
 *   Primary  : #205375
 *   Accent   : #D5A021
 *   Heading  : #205375
 *   Body     : #010101
 *   Surface  : #FFFFFF
 * All other steps below are mathematically derived tints/shades of the two
 * locked hex values so the palette stays internally consistent as the UI grows.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f8',
          100: '#e4eaee',
          200: '#c1cfd8',
          300: '#98b0c0',
          400: '#63879e',
          500: '#205375', // locked brand color 1
          600: '#1c4967',
          700: '#173c54',
          800: '#122e42',
          900: '#0d2331',
          950: '#091721',
          DEFAULT: '#205375',
        },
        accent: {
          50: '#fdfaf4',
          100: '#faf4e4',
          200: '#f3e4c1',
          300: '#ecd399',
          400: '#e2bc64',
          500: '#d5a021', // locked brand color 2
          600: '#bb8d1d',
          700: '#997318',
          800: '#775a12',
          900: '#59430e',
          950: '#3c2d09',
          DEFAULT: '#d5a021',
        },
        ink: '#010101', // locked body text color
        surface: '#ffffff', // locked background color
      },
      fontFamily: {
        sans: ['var(--font-tajawal)', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 4vw + 1rem, 4.5rem)', { lineHeight: '1.08', fontWeight: '700' }],
        h1: ['clamp(2rem, 3vw + 1rem, 3.25rem)', { lineHeight: '1.15', fontWeight: '700' }],
        h2: ['clamp(1.625rem, 2vw + 1rem, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['clamp(1.25rem, 1vw + 1rem, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '1rem',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(32, 83, 117, 0.12)',
        'card-hover': '0 12px 32px -8px rgba(32, 83, 117, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
