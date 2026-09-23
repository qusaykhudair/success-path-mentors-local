import type {
  MetadataRoute,
} from 'next';

import {
  TUTORING_PAGES,
} from '@/content/germany-tutoring/pages';
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
  locationPages,
} from '@/content/locations/location-pages';
import {
  isOntarioCurriculumLocationSegments,
  routePath,
} from '@/config/routes';
import {
  routing,
} from '@/i18n/routing';
import {
  SITE_URL,
} from '@/lib/constants';
import {
  getMarketChildPath,
  getMarketLocalePath,
  type MarketLanguage,
} from '@/lib/market-routing';
import {
  buildAbsoluteUrl,
  buildLanguageAlternates,
} from '@/lib/seo/urls';
import {
  programmeFrancaisRoutes,
} from '@/lib/programme-francais/routes';

const localizedPaths = [
  '',
  '/subjects',
  '/about',
  '/how-it-works',
  '/contact',
  '/tutor-matching',
  '/locations',
  '/privacy',
  '/terms',
  '/cancellation-policy',
  '/data-deletion',
  ...locationPages
    .filter(
      (page) =>
        page.segments.length > 0 &&
        !isOntarioCurriculumLocationSegments(
          page.segments
        )
    )
    .map(
      (page) =>
        `/locations/${page.segments.join('/')}`
    ),
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

const englishOnlyGapPaths = [
  '/subjects/french',
  '/subjects/math/grade-12-advanced-functions-mhf4u',
  '/subjects/math/grade-12-calculus-vectors-mcv4u',
  '/subjects/math/grade-11-functions-mcr3u',
  '/subjects/math/grade-12-data-management-mdm4u',
  '/subjects/math/grade-9-math-mth1w',
  '/subjects/math/grade-10-math-mpm2d',
  '/subjects/chemistry/senior-chemistry-sch3u-sch4u',
  '/subjects/physics/senior-physics-sph3u-sph4u',
  '/services/homework-help',
  '/services/exam-preparation',
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

const germanyLocales = [
  'de',
  'en',
  'ar',
] as const satisfies readonly MarketLanguage[];

function getLocalizedPriority(
  path: string
): number {
  if (path === '') {
    return 1;
  }

  if (
    path === '/subjects' ||
    path === '/locations'
  ) {
    return 0.95;
  }

  if (
    path.startsWith(
      '/locations/'
    )
  ) {
    return path.split('/').length >= 5
      ? 0.9
      : 0.88;
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

  if (
    path === '/about' ||
    path === '/how-it-works'
  ) {
    return 0.78;
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

function getOntarioCurriculumUrl(
  locale: 'en' | 'ar'
): string {
  return `${SITE_URL}${
    routePath.ontarioCurriculum(
      locale
    )
  }`;
}

function getOntarioCurriculumAlternates():
  Record<string, string> {
  const englishUrl =
    getOntarioCurriculumUrl('en');
  const arabicUrl =
    getOntarioCurriculumUrl('ar');

  return {
    'en-CA': englishUrl,
    'ar-CA': arabicUrl,
    'x-default': englishUrl,
  };
}

function getGermanyLocalizedUrl(
  locale: MarketLanguage,
  slug?: string
): string {
  const path = slug
    ? getMarketChildPath(
        'germany',
        locale,
        slug.split('/')
      )
    : getMarketLocalePath(
        'germany',
        locale
      );

  return `${SITE_URL}${path}`;
}

function getGermanyAlternates(
  slug?: string
): Record<string, string> {
  return {
    'de-DE': getGermanyLocalizedUrl(
      'de',
      slug
    ),
    'en-DE': getGermanyLocalizedUrl(
      'en',
      slug
    ),
    'ar-DE': getGermanyLocalizedUrl(
      'ar',
      slug
    ),
    'x-default': getGermanyLocalizedUrl(
      'de',
      slug
    ),
  };
}

export default function sitemap():
  MetadataRoute.Sitemap {
  const localizedEntries =
    localizedPaths.map(
      (path) => ({
        url:
          buildAbsoluteUrl(
            routing.defaultLocale,
            path
          ),
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
            buildLanguageAlternates(
              path
            ),
        },
      })
    );

  const englishGapEntries =
    englishOnlyGapPaths.map((path) => ({
      url: `${SITE_URL}/en${path}`,
      changeFrequency: 'monthly' as const,
      priority: 0.88,
      alternates: {
        languages: {
          'en-CA': `${SITE_URL}/en${path}`,
          'x-default': `${SITE_URL}/en${path}`,
        },
      },
    }));

  const ontarioCurriculumAlternates =
    getOntarioCurriculumAlternates();

  const ontarioCurriculumEntries =
    (['en', 'ar'] as const).map(
      (locale) => ({
        url:
          getOntarioCurriculumUrl(
            locale
          ),
        changeFrequency:
          'monthly' as const,
        priority: 0.9,
        alternates: {
          languages:
            ontarioCurriculumAlternates,
        },
      })
    );

  const frenchEntries =
    frenchPaths.map(
      (path) => ({
        url:
          `${SITE_URL}${path}`,
        changeFrequency:
          'monthly' as const,
        priority:
          getFrenchPriority(
            path
          ),
        alternates: {
          languages: {
            'fr-CA':
              `${SITE_URL}${path}`,
          },
        },
      })
    );

  const germanyRootEntries =
    germanyLocales.map(
      (locale) => ({
        url:
          getGermanyLocalizedUrl(
            locale
          ),
        changeFrequency:
          'weekly' as const,
        priority: 1,
        alternates: {
          languages:
            getGermanyAlternates(),
        },
      })
    );

  const germanyChildEntries =
    Object.keys(
      TUTORING_PAGES
    ).flatMap(
      (slug) =>
        germanyLocales.map(
          (locale) => ({
            url:
              getGermanyLocalizedUrl(
                locale,
                slug
              ),
            changeFrequency:
              'monthly' as const,
            priority: 0.9,
            alternates: {
              languages:
                getGermanyAlternates(
                  slug
                ),
            },
          })
        )
    );

  return [
    ...localizedEntries,
    ...englishGapEntries,
    ...ontarioCurriculumEntries,
    ...frenchEntries,
    ...germanyRootEntries,
    ...germanyChildEntries,
  ];
}
