import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    /**
     * A centred responsive container.
     *
     * Example:
     * <main className="container">
     */
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },

    extend: {
      /**
       * Brand colour system
       *
       * Primary = deep navy blue
       * Accent = turquoise
       * Neutral = cool gray
       *
       * The colour scales are suitable for:
       * - backgrounds
       * - text
       * - borders
       * - hover states
       * - selected states
       * - dark mode
       */
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
          50: '#ECFDF5',
          100: '#D1FAE5',
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

        /**
         * Semantic colours
         *
         * Prefer these names inside components instead of hard-coded colours.
         *
         * Examples:
         * bg-background
         * text-foreground
         * bg-card
         * border-border
         * text-muted-foreground
         */
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',

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

        /**
         * Backwards-compatible aliases.
         */
        ink: {
          DEFAULT: '#0B1F3A',
          secondary: '#475569',
          muted: '#64748B',
          inverse: '#FFFFFF',
        },
      },

      /**
       * Arabic and English font system.
       *
       * Recommended Next.js font variables:
       * --font-english: Manrope or Inter
       * --font-arabic: IBM Plex Sans Arabic or Alexandria
       */
      fontFamily: {
        sans: [
          'var(--font-english)',
          'var(--font-arabic)',
          'Inter',
          'Arial',
          'sans-serif',
        ],

        english: [
          'var(--font-english)',
          'Inter',
          'Arial',
          'sans-serif',
        ],

        arabic: [
          'var(--font-arabic)',
          '"IBM Plex Sans Arabic"',
          'Tahoma',
          'Arial',
          'sans-serif',
        ],

        display: [
          'var(--font-display)',
          'var(--font-english)',
          'var(--font-arabic)',
          'sans-serif',
        ],
      },

      /**
       * Responsive typography.
       *
       * Each size includes:
       * - responsive size
       * - line height
       * - font weight
       * - letter spacing
       */
      fontSize: {
        display: [
          'clamp(3rem, 5vw + 0.5rem, 5rem)',
          {
            lineHeight: '1.04',
            fontWeight: '800',
            letterSpacing: '-0.045em',
          },
        ],

        h1: [
          'clamp(2.5rem, 4vw + 0.25rem, 4rem)',
          {
            lineHeight: '1.08',
            fontWeight: '800',
            letterSpacing: '-0.04em',
          },
        ],

        h2: [
          'clamp(2rem, 3vw + 0.25rem, 3.25rem)',
          {
            lineHeight: '1.14',
            fontWeight: '750',
            letterSpacing: '-0.032em',
          },
        ],

        h3: [
          'clamp(1.5rem, 2vw + 0.25rem, 2.25rem)',
          {
            lineHeight: '1.25',
            fontWeight: '700',
            letterSpacing: '-0.022em',
          },
        ],

        h4: [
          'clamp(1.25rem, 1vw + 0.5rem, 1.625rem)',
          {
            lineHeight: '1.35',
            fontWeight: '650',
            letterSpacing: '-0.012em',
          },
        ],

        lead: [
          'clamp(1.125rem, 0.6vw + 1rem, 1.375rem)',
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
            fontWeight: '500',
            letterSpacing: '0.01em',
          },
        ],
      },

      /**
       * Font weights that allow slightly more refined hierarchy.
       */
      fontWeight: {
        medium: '500',
        semibold: '600',
        strong: '650',
        bold: '700',
        extrabold: '800',
      },

      /**
       * Maximum content widths.
       */
      maxWidth: {
        container: '1320px',
        content: '760px',
        prose: '72ch',
        form: '560px',
        reading: '65ch',
      },

      /**
       * Minimum heights for accessibility and comfortable touch targets.
       */
      minHeight: {
        touch: '44px',
        button: '48px',
        input: '52px',
        hero: 'calc(100svh - 5rem)',
      },

      /**
       * 8-point spacing system with additional responsive section spacing.
       */
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

        section: 'clamp(4rem, 8vw, 7.5rem)',
        'section-sm': 'clamp(3rem, 6vw, 5rem)',
        gutter: 'clamp(1rem, 4vw, 3rem)',
      },

      /**
       * Border radius system.
       */
      borderRadius: {
        xs: '0.375rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',

        button: '0.75rem',
        input: '0.75rem',
        card: '1.25rem',
        modal: '1.5rem',
        image: '1.25rem',

        full: '9999px',
      },

      /**
       * Brand-aware shadows.
       *
       * Shadows are intentionally soft and use navy instead of bright blue.
       */
      boxShadow: {
        xs: '0 1px 2px rgba(7, 20, 38, 0.04)',

        sm: [
          '0 1px 3px rgba(7, 20, 38, 0.06)',
          '0 1px 2px rgba(7, 20, 38, 0.04)',
        ].join(', '),

        md: [
          '0 8px 24px rgba(7, 20, 38, 0.08)',
          '0 2px 8px rgba(7, 20, 38, 0.04)',
        ].join(', '),

        lg: [
          '0 16px 40px rgba(7, 20, 38, 0.10)',
          '0 4px 12px rgba(7, 20, 38, 0.05)',
        ].join(', '),

        xl: [
          '0 24px 64px rgba(7, 20, 38, 0.14)',
          '0 8px 20px rgba(7, 20, 38, 0.06)',
        ].join(', '),

        card: [
          '0 8px 30px rgba(7, 20, 38, 0.07)',
          '0 1px 3px rgba(7, 20, 38, 0.04)',
        ].join(', '),

        'card-hover': [
          '0 22px 55px rgba(7, 20, 38, 0.13)',
          '0 8px 20px rgba(22, 199, 199, 0.07)',
        ].join(', '),

        dropdown: [
          '0 18px 45px rgba(7, 20, 38, 0.14)',
          '0 4px 12px rgba(7, 20, 38, 0.06)',
        ].join(', '),

        modal: '0 32px 90px rgba(2, 6, 23, 0.24)',

        focus: '0 0 0 4px rgba(22, 199, 199, 0.22)',

        glow: '0 0 48px rgba(22, 199, 199, 0.28)',

        'glow-primary': '0 0 48px rgba(11, 31, 58, 0.22)',

        'button-primary': [
          '0 8px 20px rgba(11, 31, 58, 0.20)',
          '0 2px 6px rgba(11, 31, 58, 0.10)',
        ].join(', '),

        'button-accent': [
          '0 8px 20px rgba(22, 199, 199, 0.22)',
          '0 2px 6px rgba(22, 199, 199, 0.12)',
        ].join(', '),

        none: 'none',
      },

      /**
       * Background gradients and decorative surfaces.
       */
      backgroundImage: {
        brand:
          'linear-gradient(120deg, #0B1F3A 0%, #123D68 48%, #16A8A8 100%)',

        'brand-reverse':
          'linear-gradient(120deg, #16A8A8 0%, #123D68 52%, #0B1F3A 100%)',

        cta:
          'linear-gradient(110deg, #0B1F3A 0%, #123D68 55%, #16A8A8 100%)',

        'cta-hover':
          'linear-gradient(110deg, #071426 0%, #0B1F3A 55%, #108686 100%)',

        'brand-dark':
          'linear-gradient(135deg, #071426 0%, #0B1F3A 45%, #063737 100%)',

        primary:
          'linear-gradient(135deg, #123D68 0%, #0B1F3A 100%)',

        accent:
          'linear-gradient(135deg, #2DD4D1 0%, #0FA8A8 100%)',

        hero:
          'linear-gradient(135deg, #F1F6FA 0%, #FFFFFF 48%, #ECFEFD 100%)',

        'hero-dark':
          'linear-gradient(135deg, #071426 0%, #0B1F3A 52%, #063737 100%)',

        section:
          'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',

        'section-accent':
          'linear-gradient(180deg, #ECFEFD 0%, #FFFFFF 100%)',

        mesh: [
          'radial-gradient(at 12% 18%, rgba(11, 31, 58, 0.14) 0px, transparent 48%)',
          'radial-gradient(at 88% 20%, rgba(22, 199, 199, 0.18) 0px, transparent 48%)',
          'radial-gradient(at 55% 88%, rgba(103, 232, 229, 0.12) 0px, transparent 46%)',
        ].join(', '),

        'mesh-dark': [
          'radial-gradient(at 15% 20%, rgba(79, 137, 171, 0.22) 0px, transparent 45%)',
          'radial-gradient(at 85% 25%, rgba(22, 199, 199, 0.16) 0px, transparent 48%)',
          'linear-gradient(135deg, #071426 0%, #0B1F3A 100%)',
        ].join(', '),

        'glow-accent':
          'radial-gradient(circle at center, rgba(22, 199, 199, 0.24), transparent 68%)',

        'glow-primary':
          'radial-gradient(circle at center, rgba(11, 31, 58, 0.18), transparent 70%)',

        grid:
          'linear-gradient(rgba(11, 31, 58, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 31, 58, 0.05) 1px, transparent 1px)',

        dots:
          'radial-gradient(circle, rgba(11, 31, 58, 0.12) 1px, transparent 1px)',

        sheen:
          'linear-gradient(105deg, transparent 28%, rgba(255,255,255,0.40) 50%, transparent 72%)',
      },

      backgroundSize: {
        grid: '32px 32px',
        dots: '20px 20px',
        sheen: '220% 100%',
      },

      backgroundPosition: {
        sheen: '200% center',
      },

      /**
       * Border widths for selected and active states.
       */
      borderWidth: {
        3: '3px',
      },

      /**
       * Outline widths and offsets for keyboard accessibility.
       */
      outlineWidth: {
        3: '3px',
      },

      outlineOffset: {
        3: '3px',
      },

      /**
       * Transitions.
       */
      transitionDuration: {
        150: '150ms',
        200: '200ms',
        250: '250ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
      },

      transitionTimingFunction: {
        brand: 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      /**
       * Keyframes used by buttons, cards, menus and hero content.
       */
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },

        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        fadeDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-12px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.96)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },

        pulseSoft: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.72',
          },
        },

        shimmer: {
          '0%': {
            backgroundPosition: '200% center',
          },
          '100%': {
            backgroundPosition: '-200% center',
          },
        },

        accordionDown: {
          from: {
            height: '0',
            opacity: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
        },

        accordionUp: {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: {
            height: '0',
            opacity: '0',
          },
        },
      },

      animation: {
        'fade-in': 'fadeIn 300ms ease-out both',
        'fade-up': 'fadeUp 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-down': 'fadeDown 300ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scaleIn 250ms cubic-bezier(0.22, 1, 0.36, 1) both',

        float: 'float 5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',

        'accordion-down': 'accordionDown 250ms ease-out',
        'accordion-up': 'accordionUp 250ms ease-out',
      },

      /**
       * Grid templates for common website layouts.
       */
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        cards: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        features: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
        pricing: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        footer: 'minmax(260px, 1.5fr) repeat(3, minmax(140px, 1fr))',
      },

      /**
       * Custom z-index hierarchy.
       */
      zIndex: {
        dropdown: '40',
        sticky: '50',
        overlay: '60',
        modal: '70',
        toast: '80',
        tooltip: '90',
      },

      /**
       * Blur for navigation bars and glass surfaces.
       */
      backdropBlur: {
        nav: '18px',
        glass: '24px',
      },

      background: 'rgb(var(--background) / <alpha-value>)',
foreground: 'rgb(var(--foreground) / <alpha-value>)',

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

      /**
       * Opacity utilities for disabled states and overlays.
       */
      opacity: {
        disabled: '0.48',
        overlay: '0.64',
      },
    },
  },

  plugins: [],
};

export default config;