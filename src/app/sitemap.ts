import type {
  MetadataRoute,
} from 'next';

import {
  approvedChemistryStrands,
} from '@/content/subjects/chemistry/chemistry-strands';
import {
  approvedEnglishStrands,
} from '@/content/subjects/english/english-strands';
import {
  approvedGeneralScienceStrands,
} from '@/content/subjects/general-science/general-science-strands';
import {
  publicMathPathways,
} from '@/content/subjects/math/math-pathways';
import {
  approvedPhysicsStrands,
} from '@/content/subjects/physics/physics-strands';
import {
  programmeFrancaisSubjects,
} from '@/content/programme-francais/programme-francais-definitions';
import {
  routing,
} from '@/i18n/routing';
import {
  SITE_URL,
} from '@/lib/constants';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

const localizedPaths = [
  '',
  '/subjects',
  '/about',
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
  '/subjects/chemistry',
  ...approvedChemistryStrands.map(
    (strand) =>
      `/subjects/chemistry/${strand.slug}`
  ),
  '/subjects/physics',
  ...approvedPhysicsStrands.map(
    (strand) =>
      `/subjects/physics/${strand.slug}`
  ),
  '/subjects/general-science',
  ...approvedGeneralScienceStrands.map(
    (strand) =>
      `/subjects/general-science/${strand.slug}`
  ),
];

const frenchPaths = [
  programmeFrancaisRoutes.home,
  ...programmeFrancaisSubjects.map(
    (subject) =>
      programmeFrancaisRoutes.subject(
        subject.key
      )
  ),
  ...programmeFrancaisSubjects.flatMap(
    (subject) =>
      subject.domains.map(
        (domain) =>
          programmeFrancaisRoutes.domain(
            subject.key,
            domain.slug
          )
      )
  ),
];

function getLocalizedPriority(
  path: string
): number {
  if (path === '') {
    return 1;
  }

  if (path === '/subjects') {
    return 0.95;
  }

  if (
    path ===
      '/subjects/math' ||
    path ===
      '/subjects/english' ||
    path ===
      '/subjects/chemistry' ||
    path ===
      '/subjects/physics' ||
    path ===
      '/subjects/general-science'
  ) {
    return 0.9;
  }

  if (path === '/about') {
    return 0.75;
  }

  return 0.8;
}

function getFrenchPriority(
  path: string
): number {
  if (
    path ===
    programmeFrancaisRoutes.home
  ) {
    return 0.95;
  }

  if (
    programmeFrancaisSubjects.some(
      (subject) =>
        path ===
        programmeFrancaisRoutes.subject(
          subject.key
        )
    )
  ) {
    return 0.9;
  }

  return 0.82;
}

export default function sitemap():
  MetadataRoute.Sitemap {
  const localizedEntries =
    localizedPaths.map(
      (path) => ({
        url:
          `${SITE_URL}/${routing.defaultLocale}${path}`,
        lastModified:
          new Date(),
        changeFrequency:
          path === ''
            ? 'weekly' as const
            : 'monthly' as const,
        priority:
          getLocalizedPriority(
            path
          ),
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

  const frenchEntries =
    frenchPaths.map(
      (path) => ({
        url:
          `${SITE_URL}${path}`,
        lastModified:
          new Date(),
        changeFrequency:
          'monthly' as const,
        priority:
          getFrenchPriority(
            path
          ),
        alternates: {
          languages: {
            fr:
              `${SITE_URL}${path}`,
          },
        },
      })
    );

  return [
    ...localizedEntries,
    ...frenchEntries,
  ];
}
