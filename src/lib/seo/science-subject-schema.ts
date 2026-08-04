import {
  siteConfig,
  type SiteLocale,
} from '@/config/site';
import type {
  ScienceSubjectOverview,
} from '@/types/science-overview';

interface BuildScienceServiceSchemaInput {
  locale: SiteLocale;
  pathname: string;
  name: string;
  description: string;
  overview: ScienceSubjectOverview;
}

export function buildScienceServiceSchema({
  locale,
  pathname,
  name,
  description,
  overview,
}: BuildScienceServiceSchemaInput) {
  const pageUrl =
    new URL(
      `/${locale}${pathname}`,
      siteConfig.url
    ).toString();

  return {
    '@context':
      'https://schema.org',
    '@type':
      'Service',
    '@id':
      `${pageUrl}#service`,
    url:
      pageUrl,
    name,
    description,
    inLanguage:
      locale,
    serviceType:
      `${overview.subjectName} tutoring`,
    provider: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name:
        siteConfig.name,
      url:
        siteConfig.url,
    },
    audience: {
      '@type':
        'EducationalAudience',
      educationalRole:
        'student',
    },
    hasOfferCatalog: {
      '@type':
        'OfferCatalog',
      name:
        `${overview.subjectName} curriculum strands`,
      numberOfItems:
        overview.totals
          .approvedStrandCount,
      itemListElement:
        overview.strands.map(
          (strand, index) => ({
            '@type':
              'Offer',
            position:
              index + 1,
            itemOffered: {
              '@type':
                'Course',
              name:
                strand.title,
              description:
                strand.description,
              educationalLevel:
                strand.gradeLevels.map(
                  (grade) =>
                    `Grade ${grade}`
                ),
            },
          })
        ),
    },
  };
}
