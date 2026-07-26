/**
 * -----------------------------------------------------------------------------
 * Site Configuration
 * -----------------------------------------------------------------------------
 * Centralized configuration for SEO, metadata, structured data,
 * social sharing, and general site information.
 *
 * NOTE:
 * Update the values below whenever the business information changes.
 * -----------------------------------------------------------------------------
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mustafaacademy.com';

/**
 * -----------------------------------------------------------------------------
 * Website
 * -----------------------------------------------------------------------------
 */

export const SITE = {
  /** Public website name */
  name: 'Mustafa Academy',

  /** Registered / legal business name */
  legalName: 'Mustafa Academy',

  /** Brand slogan */
  tagline: 'Empowering Students. Inspiring Success.',

  /** Default website language */
  defaultLocale: 'en',

  /** Base website URL */
  url: SITE_URL,

  /** Default page title */
  title: 'Mustafa Academy',

  /** Default SEO description */
  description:
    'Mustafa Academy is a professional online tutoring platform providing personalized academic support, expert mentors, and high-quality educational programs to help students achieve their full potential.',

  /** Default Open Graph image */
  ogImage: '/images/og-image.png',

  /** Twitter Card image */
  twitterImage: '/images/twitter-image.png',

  /** Favicon */
  favicon: '/favicon.ico',

  /** Apple Touch Icon */
  appleTouchIcon: '/apple-touch-icon.png',

  /** Theme color */
  themeColor: '#0F172A',

  /** Background color */
  backgroundColor: '#FFFFFF',
} as const;

/**
 * -----------------------------------------------------------------------------
 * Organization
 * -----------------------------------------------------------------------------
 */

export const ORGANIZATION = {
  name: SITE.name,

  legalName: SITE.legalName,

  url: SITE.url,
ogImage: '/images/og-image.jpg',
  logo: `${SITE.url}/images/logo.png`,

  description: SITE.description,

  sameAs: [
    /**
     * Add official social media profiles here.
     *
     * Example:
     * 'https://facebook.com/...',
     * 'https://instagram.com/...',
     * 'https://linkedin.com/company/...'
     */
  ],

  founders: [
    // Future implementation
  ],
} as const;

/**
 * -----------------------------------------------------------------------------
 * Contact Information
 * -----------------------------------------------------------------------------
 */

export const CONTACT = {
  phone: '',

  whatsapp: '',

  email: '',

  address: '',

  city: '',

  country: '',

  postalCode: '',
} as const;

/**
 * -----------------------------------------------------------------------------
 * Social Media
 * -----------------------------------------------------------------------------
 */

export const SOCIAL = {
  facebook: '',

  instagram: '',

  linkedin: '',

  youtube: '',

  x: '',

  tiktok: '',
} as const;

/**
 * -----------------------------------------------------------------------------
 * Search Engine Verification
 * -----------------------------------------------------------------------------
 * Add verification codes once available.
 * -----------------------------------------------------------------------------
 */

export const VERIFICATION = {
  google: '',

  bing: '',

  yandex: '',

  yahoo: '',
} as const;

/**
 * -----------------------------------------------------------------------------
 * Default SEO Keywords
 * -----------------------------------------------------------------------------
 */

export const DEFAULT_KEYWORDS = [
  'Mustafa Academy',
  'Online Tutoring',
  'Private Tutoring',
  'Academic Mentoring',
  'Online Education',
  'K-12 Tutoring',
  'Math Tutoring',
  'Science Tutoring',
  'English Tutoring',
  'Professional Tutors',
  'Academic Success',
  'Personalized Learning',
] as const;