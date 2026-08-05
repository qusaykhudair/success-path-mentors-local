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

export const SITE_URL = 'https://successpathmentors.net';

/**
 * -----------------------------------------------------------------------------
 * Website
 * -----------------------------------------------------------------------------
 */

export const SITE = {
  /** Public website name */
  name: 'Success Path Mentors',

  /** Registered / legal business name */
  legalName: 'Commenda Inc. operating as Success Path Mentors',

  /** Brand slogan */
  tagline: 'Empowering Students. Inspiring Success.',

  /** Default website language */
  defaultLocale: 'en',

  /** Base website URL */
  url: SITE_URL,

  /** Default page title */
  title: 'Success Path Mentors',

  /** Default SEO description */
  description:
    'Success Path Mentors provides one-to-one online tutoring for Grades 1–12, with curriculum-aligned support for families in Canada and the United States, including Arabic-speaking families and students transitioning between education systems.',

  /** Default Open Graph image */
ogImage: '/images/logo.png',


  /** Twitter Card image */
 twitterImage: '/images/logo.png',

  /** Favicon */
  favicon: 'src/app/icon.png',

  /** Apple Touch Icon */
  appleTouchIcon: '/icons/apple-touch-icon.png',

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

  logo: `${SITE.url}/images/logo.png`,

  description: SITE.description,

  sameAs: [] as string[],

  founders: [] as string[],
} as const;

/**
 * -----------------------------------------------------------------------------
 * Contact Information
 * -----------------------------------------------------------------------------
 */

export const CONTACT = {
  phone: '+1 647 787 5999',

  whatsapp: '+1 647 787 5999',

  email: 'successpathmentors@gmail.com',

  address: '',

  city: '',

  country: 'Canada',

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
  'Success Path Mentors',
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