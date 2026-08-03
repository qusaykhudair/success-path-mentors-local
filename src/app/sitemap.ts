import type {
  MetadataRoute,
} from 'next';

import {
  approvedEnglishStrands,
} from '@/content/subjects/english/english-strands';
import {
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import {
  routing,
} from '@/i18n/routing';
import {
  SITE_URL,
} from '@/lib/constants';

const staticPaths = [
  '',
  '/subjects/math',
  ...publicMathPathways.map(
    (pathway) =>
      `/subjects/math/${pathway.slug}`
  ),
  '/subjects/english',
  ...approvedEnglishStrands.map(
    (strand) =>
      `/subjects/english/${strand.slug}`
  ),
];

export default function sitemap():
  MetadataRoute.Sitemap {
  return staticPaths.map(
    (path) => ({
      url:
        `${SITE_URL}/${routing.defaultLocale}${path}`,
      lastModified:
        new Date(),
      changeFrequency:
        path === ''
          ? 'weekly'
          : 'monthly',
      priority:
        path === ''
          ? 1
          : path ===
                '/subjects/math' ||
              path ===
                '/subjects/english'
            ? 0.9
            : 0.8,

      alternates: {
        languages:
          Object.fromEntries(
            routing.locales.map(
              (locale) => [
                locale,
                `${SITE_URL}/${locale}${path}`,
              ]
            )
          ),
      },
    })
  );
}
