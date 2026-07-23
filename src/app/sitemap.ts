import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';

// Static routes live here for now; extend as Subjects/Locations/Blog pages
// are added, ideally by generating entries from their content sources.
const staticPaths = [
  '',
  '/about',
  '/services',
  '/faq',
  '/contact',
  '/become-tutor',
  '/find-tutor',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
      ),
    },
  }));
}
