import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        // Electric royal blue — bold, saturated, confident
        primary: {
          50: '#ECF2FF',
          100: '#DCE7FF',
          200: '#C0D2FF',
          300: '#96B3FF',
          400: '#6489FF',
          500: '#3B5DFF',
          600: '#1E3AFF',
          700: '#1528E6',
          800: '#1622B8',
          900: '#1A2691',
          950: '#101454',
          DEFAULT: '#1E3AFF',
        },

        // Vibrant cyan-turquoise — electric, energetic
        accent: {
          50: '#E7FEFB',
          100: '#C3FCF6',
          200: '#8EF8EF',
          300: '#4FEEE4',
          400: '#1BDCD4',
          500: '#00BFBC',
          600: '#00999B',
          700: '#0A797C',
          800: '#105F63',
          900: '#124F52',
          950: '#032F32',
          DEFAULT: '#00BFBC',
        },

        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',

        ink: {
          DEFAULT: '#0B1533',
          secondary: '#52618A',
        },
        muted: '#6B7A9E',

        border: '#DEE6F5',
        surface: '#FFFFFF',
        background: '#F4F8FF',
      },

      fontFamily: {
        sans: ['var(--font-din)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        display: ['clamp(2.75rem,4vw+1rem,4.75rem)', { lineHeight: '1.08', fontWeight: '800' }],
        h1: ['clamp(2.2rem,3vw+1rem,3.5rem)', { lineHeight: '1.15', fontWeight: '800' }],
        h2: ['clamp(1.75rem,2vw+1rem,2.75rem)', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['clamp(1.35rem,1vw+1rem,1.9rem)', { lineHeight: '1.3', fontWeight: '700' }],
        h4: ['1.3rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.8', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.6' }],
        caption: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },

      maxWidth: { container: '1320px' },

      borderRadius: {
        xs: '.5rem', sm: '.75rem', md: '1rem', lg: '1.25rem',
        xl: '1.5rem', card: '1.5rem', full: '9999px',
      },

      boxShadow: {
        xs: '0 1px 2px rgba(11,21,51,.05)',
        sm: '0 2px 8px rgba(11,21,51,.06)',
        md: '0 8px 24px rgba(30,58,255,.10)',
        lg: '0 16px 40px rgba(30,58,255,.16)',
        xl: '0 24px 64px rgba(30,58,255,.20)',
        glow: '0 0 40px rgba(0,191,188,.40)',
        'glow-blue': '0 0 40px rgba(30,58,255,.35)',
        'card-hover': '0 20px 50px rgba(30,58,255,.18)',
      },

      backgroundImage: {
        // ---- SIGNATURE GRADIENTS (bold blue ↔ cyan) ----

        // The star: deep electric blue → vivid cyan. High energy, high contrast.
        brand: 'linear-gradient(120deg,#1E3AFF 0%,#0091E6 45%,#00BFBC 100%)',
        'brand-reverse': 'linear-gradient(120deg,#00BFBC 0%,#0091E6 55%,#1E3AFF 100%)',

        // Punchy CTA gradient — saturated, made to be clicked
        cta: 'linear-gradient(115deg,#1E3AFF 0%,#00BFBC 100%)',
        'cta-hover': 'linear-gradient(115deg,#1528E6 0%,#00999B 100%)',

        // Deep immersive band for dark sections (pricing/feature bands)
        'brand-dark': 'linear-gradient(135deg,#101454 0%,#1A2691 40%,#0A797C 100%)',

        // Vivid accent-only (cyan depth)
        accent: 'linear-gradient(135deg,#1BDCD4 0%,#00999B 100%)',
        primary: 'linear-gradient(135deg,#3B5DFF 0%,#1528E6 100%)',

        // Soft section wash (very light blue → white → light cyan)
        hero: 'linear-gradient(135deg,#ECF2FF 0%,#FFFFFF 50%,#E7FEFB 100%)',

        // Modern multi-glow mesh backdrop (ed-tech hero style)
        mesh: 'radial-gradient(at 15% 20%, rgba(30,58,255,.18) 0px, transparent 50%), radial-gradient(at 85% 25%, rgba(0,191,188,.20) 0px, transparent 50%), radial-gradient(at 50% 85%, rgba(79,238,228,.14) 0px, transparent 50%)',

        // Radial glows for decorative blobs
        'glow-teal': 'radial-gradient(circle at top right, rgba(0,191,188,.25), transparent 55%)',
        'glow-blue-r': 'radial-gradient(circle at bottom left, rgba(30,58,255,.22), transparent 55%)',

        // Shiny highlight sweep for buttons/cards
        sheen: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%)',
      },
    },
  },

  plugins: [],
};

export default config;