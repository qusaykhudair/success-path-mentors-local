import { getDefaultMarket } from '@/config/markets';
import {
  siteConfig,
} from '@/config/site';
import type {
  EnglishCurriculumOverview,
} from '@/types/english-overview';

export function buildEnglishServiceSchema({
  locale,
  pathname,
  name,
  description,
  overview,
}: {
  locale: string;
  pathname: string;
  name: string;
  description: string;
  overview: EnglishCurriculumOverview;
}) {
  const pageUrl = new URL(
    `/${locale}${pathname}`,
    siteConfig.url
  ).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    url: pageUrl,
    name,
    description,
    serviceType:
      'One-to-one online English tutoring',
    areaServed: getDefaultMarket().organization.areaServed.map((country) => country.name),
    provider: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url: siteConfig.url,
    },
    audience: {
      '@type':
        'EducationalAudience',
      educationalRole: 'student',
      audienceType:
        `Students in Grades ${overview.totals.gradeMin}–${overview.totals.gradeMax}`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:
        locale === 'ar'
          ? 'مسارات منهج اللغة الإنجليزية'
          : 'English curriculum strands',
      itemListElement:
        overview.strands
          .filter(
            (strand) =>
              strand.status ===
              'approved'
          )
          .map((strand) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: strand.title,
              description:
                strand.description,
            },
          })),
    },
  };
}
