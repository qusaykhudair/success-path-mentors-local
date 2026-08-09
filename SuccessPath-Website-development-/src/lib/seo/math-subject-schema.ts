import {
  siteConfig,
} from '@/config/site';
import type {
  MathCurriculumOverview,
} from '@/types/math-overview';

export function buildMathServiceSchema({
  locale,
  pathname,
  name,
  description,
  overview,
}: {
  locale: 'en' | 'ar';
  pathname: string;
  name: string;
  description: string;
  overview: MathCurriculumOverview;
}) {
  const url = new URL(
    `/${locale}${pathname}`,
    siteConfig.url
  ).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#math-tutoring`,
    name,
    description,
    url,
    serviceType:
      'One-to-one online mathematics tutoring',
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
    },
    areaServed: 'Online',
    availableLanguage: [
      'English',
      'Arabic',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:
        locale === 'ar'
          ? 'مسارات منهج الرياضيات'
          : 'Mathematics curriculum pathways',
      itemListElement:
        overview.pathways.map(
          (pathway, index) => ({
            '@type': 'OfferCatalog',
            position: index + 1,
            name: pathway.title,
            description:
              pathway.description,
          })
        ),
    },
  };
}
