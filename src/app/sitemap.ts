import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';

/**
 * -----------------------------------------------------------------------------
 * Static sitemap routes
 * -----------------------------------------------------------------------------
 *
 * Add all public routes here as the project grows.
 *
 * Future sections:
 *
 * Services
 *  - /about
 *  - /contact
 *  - /our-tutors
 *  - /pricing
 *
 * Subjects
 *  - /math-tutoring
 *  - /english-tutoring
 *  - /science-tutoring
 *  - /french-tutoring
 *
 * Grade Levels
 *  - /elementary
 *  - /middle-school
 *  - /high-school
 *
 * Service Areas
 *  - /toronto
 *  - /milton
 *  - /gta
 *  - /new-york
 *
 * Resources
 *  - /blog
 *  - /faq
 *  - /success-stories
 *
 * NOTE:
 * Dynamic content (Blog, Articles, Tutors, Programs...)
 * should eventually be generated automatically from the database
 * or CMS instead of being hardcoded.
 * -----------------------------------------------------------------------------
 */

const staticPaths = [
  '',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.7,

    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${SITE_URL}/${locale}${path}`,
        ])
      ),
    },
  }));
}