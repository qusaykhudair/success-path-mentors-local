import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
 content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
],

  theme: {
    extend: {
   colors: {
  primary: {
    50: '#F1F6FA',
    100: '#E2EDF5',
    200: '#C9DDEA',
    300: '#A2C4D9',
    400: '#73A6C3',
    500: '#4F89AB',
    600: '#386C8E',
    700: '#2C5774',
    800: '#24475F',
    900: '#0B1F3A',
    950: '#071426',
    DEFAULT: '#0B1F3A',
    foreground: '#FFFFFF',
  },

  accent: {
    50: '#ECFEFD',
    100: '#CFFAF8',
    200: '#A4F4F1',
    300: '#67E8E5',
    400: '#2DD4D1',
    500: '#16C7C7',
    600: '#0FA8A8',
    700: '#108686',
    800: '#126A6A',
    900: '#145858',
    950: '#063737',
    DEFAULT: '#16C7C7',
    foreground: '#071426',
  },

  neutral: {
    0: '#FFFFFF',
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },

  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    DEFAULT: '#22C55E',
    foreground: '#FFFFFF',
  },

  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    DEFAULT: '#F59E0B',
    foreground: '#071426',
  },

  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    DEFAULT: '#EF4444',
    foreground: '#FFFFFF',
  },

  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    DEFAULT: '#3B82F6',
    foreground: '#FFFFFF',
  },

  background:
   'rgb(var(--background) / <alpha-value>)',

  foreground:
    'rgb(var(--foreground) / <alpha-value>)',

card: {
  DEFAULT: 'rgb(var(--card) / <alpha-value>)',
  foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
},

popover: {
  DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
  foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
},


surface: {
  DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
  elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
  sunken: 'rgb(var(--surface-sunken) / <alpha-value>)',
  soft: 'rgb(var(--surface-soft) / <alpha-value>)',
},

muted: {
  DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
  foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
},


border: 'rgb(var(--border) / <alpha-value>)',
input: 'rgb(var(--input) / <alpha-value>)',
ring: 'rgb(var(--ring) / <alpha-value>)',

selected: {
  DEFAULT: 'rgb(var(--selected) / <alpha-value>)',
  foreground: 'rgb(var(--selected-foreground) / <alpha-value>)',
},

overlay: 'rgb(var(--overlay) / <alpha-value>)',

  ink: {
    DEFAULT: '#0B1F3A',
    secondary: '#475569',
    muted: '#64748B',
    inverse: '#FFFFFF',
  },
},

 fontFamily: {
  sans: [
    'var(--font-din)',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Arial',
    'sans-serif',
  ],

  arabic: [
    'var(--font-din)',
    'Tahoma',
    'Arial',
    'sans-serif',
  ],

  english: [
    'var(--font-din)',
    'system-ui',
    '-apple-system',
    '"Segoe UI"',
    'Arial',
    'sans-serif',
  ],
},


   fontSize: {
  display: [
    'clamp(2.75rem, 5vw + 0.5rem, 5rem)',
    {
      lineHeight: '1.06',
      fontWeight: '700',
      letterSpacing: '-0.04em',
    },
  ],

  h1: [
    'clamp(2.25rem, 4vw + 0.25rem, 4rem)',
    {
      lineHeight: '1.1',
      fontWeight: '700',
      letterSpacing: '-0.035em',
    },
  ],

  h2: [
    'clamp(1.875rem, 3vw + 0.25rem, 3rem)',
    {
      lineHeight: '1.16',
      fontWeight: '700',
      letterSpacing: '-0.025em',
    },
  ],

  h3: [
    'clamp(1.5rem, 2vw + 0.25rem, 2.125rem)',
    {
      lineHeight: '1.25',
      fontWeight: '700',
      letterSpacing: '-0.018em',
    },
  ],

  h4: [
    'clamp(1.25rem, 1vw + 0.5rem, 1.625rem)',
    {
      lineHeight: '1.35',
      fontWeight: '700',
    },
  ],

  lead: [
    'clamp(1.0625rem, 0.5vw + 1rem, 1.25rem)',
    {
      lineHeight: '1.75',
      fontWeight: '400',
    },
  ],

  body: [
    '1rem',
    {
      lineHeight: '1.75',
      fontWeight: '400',
    },
  ],

  small: [
    '0.875rem',
    {
      lineHeight: '1.6',
      fontWeight: '400',
    },
  ],

  caption: [
    '0.75rem',
    {
      lineHeight: '1.5',
      fontWeight: '400',
    },
  ],
},

  boxShadow: {
  xs:
    '0 1px 2px rgba(7, 20, 38, 0.04)',

  sm:
    '0 1px 3px rgba(7, 20, 38, 0.06), 0 1px 2px rgba(7, 20, 38, 0.04)',

  md:
    '0 8px 24px rgba(7, 20, 38, 0.08), 0 2px 8px rgba(7, 20, 38, 0.04)',

  lg:
    '0 16px 40px rgba(7, 20, 38, 0.10), 0 4px 12px rgba(7, 20, 38, 0.05)',

  xl:
    '0 24px 64px rgba(7, 20, 38, 0.14), 0 8px 20px rgba(7, 20, 38, 0.06)',

  card:
    '0 8px 30px rgba(7, 20, 38, 0.07), 0 1px 3px rgba(7, 20, 38, 0.04)',

  'card-hover':
    '0 22px 55px rgba(7, 20, 38, 0.13), 0 8px 20px rgba(22, 199, 199, 0.07)',

  dropdown:
    '0 18px 45px rgba(7, 20, 38, 0.14), 0 4px 12px rgba(7, 20, 38, 0.06)',

  modal:
    '0 32px 90px rgba(2, 6, 23, 0.24)',

  focus:
    '0 0 0 4px rgba(22, 199, 199, 0.22)',

  glow:
    '0 0 48px rgba(22, 199, 199, 0.28)',

  'glow-primary':
    '0 0 48px rgba(11, 31, 58, 0.22)',

  'button-primary':
    '0 8px 20px rgba(11, 31, 58, 0.20), 0 2px 6px rgba(11, 31, 58, 0.10)',

  'button-accent':
    '0 8px 20px rgba(22, 199, 199, 0.22), 0 2px 6px rgba(22, 199, 199, 0.12)',

  none: 'none',
},

    backgroundImage: {
  brand:
    'linear-gradient(120deg, #0B1F3A 0%, #123D68 52%, #16A8A8 100%)',

  'brand-reverse':
    'linear-gradient(120deg, #16A8A8 0%, #123D68 48%, #0B1F3A 100%)',

  cta:
    'linear-gradient(110deg, #071426 0%, #0B1F3A 56%, #108686 100%)',

  'cta-hover':
    'linear-gradient(110deg, #071426 0%, #123D68 56%, #0FA8A8 100%)',

  'brand-dark':
    'linear-gradient(135deg, #071426 0%, #0B1F3A 52%, #063737 100%)',

  primary:
    'linear-gradient(135deg, #123D68 0%, #0B1F3A 100%)',

  accent:
    'linear-gradient(135deg, #2DD4D1 0%, #0FA8A8 100%)',

  hero:
    'linear-gradient(135deg, #F1F6FA 0%, #FFFFFF 50%, #ECFEFD 100%)',

  section:
    'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',

  'section-accent':
    'linear-gradient(180deg, #ECFEFD 0%, #FFFFFF 100%)',

  mesh:
    'radial-gradient(at 12% 18%, rgba(11, 31, 58, 0.14) 0px, transparent 48%), radial-gradient(at 88% 20%, rgba(22, 199, 199, 0.18) 0px, transparent 48%), radial-gradient(at 55% 88%, rgba(103, 232, 229, 0.12) 0px, transparent 46%)',

  'glow-accent':
    'radial-gradient(circle at center, rgba(22, 199, 199, 0.24), transparent 68%)',

  'glow-primary':
    'radial-gradient(circle at center, rgba(11, 31, 58, 0.18), transparent 70%)',

  sheen:
    'linear-gradient(105deg, transparent 28%, rgba(255, 255, 255, 0.40) 50%, transparent 72%)',
},
spacing: {
  4.5: '1.125rem',
  5.5: '1.375rem',
  7.5: '1.875rem',
  13: '3.25rem',
  15: '3.75rem',
  18: '4.5rem',
  22: '5.5rem',
  26: '6.5rem',
  30: '7.5rem',

  section:
    'clamp(4rem, 8vw, 7.5rem)',

  'section-sm':
    'clamp(3rem, 6vw, 5rem)',

  gutter:
    'clamp(1rem, 4vw, 3rem)',
},
minHeight: {
  touch: '44px',
  button: '48px',
  input: '52px',
  hero: 'calc(100svh - 5rem)',
},
maxWidth: {
  container: '1320px',
  content: '760px',
  prose: '72ch',
  reading: '65ch',
  form: '560px',
},
    },
  },

  plugins: [],
};

export default config;