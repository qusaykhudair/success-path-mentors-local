import { siteConfig } from '@/config/site';
import type {
  BreadcrumbItem,
  FaqItem,
} from '@/types/internal-page';

export function buildBreadcrumbSchema(
  items: BreadcrumbItem[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(item.href
          ? {
              item: new URL(
                item.href,
                siteConfig.url
              ).toString(),
            }
          : {}),
      })
    ),
  };
}

export function buildFaqSchema(
  items: FaqItem[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildAboutPageSchema({
  locale,
  pathname,
  title,
  description,
}: {
  locale: string;
  pathname: string;
  title: string;
  description: string;
}) {
  const pageUrl = new URL(
    `/${locale}${pathname}`,
    siteConfig.url
  ).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${pageUrl}#about-page`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
    },
    about: {
      '@type': 'EducationalOrganization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url: siteConfig.url,
    },
  };
}