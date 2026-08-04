import {
  siteConfig,
  type SiteLocale,
} from '@/config/site';
import {
  routePath,
} from '@/config/routes';
import type {
  LocalizedLocationPage,
} from '@/types/location';

interface BreadcrumbSchemaItem {
  name: string;
  href: string;
}

export function buildLocationBreadcrumbSchema(
  items: BreadcrumbSchemaItem[]
) {
  return {
    '@context':
      'https://schema.org',
    '@type':
      'BreadcrumbList',
    itemListElement:
      items.map(
        (item, index) => ({
          '@type':
            'ListItem',
          position:
            index + 1,
          name:
            item.name,
          item:
            new URL(
              item.href,
              siteConfig.url
            ).toString(),
        })
      ),
  };
}

export function buildLocationPageSchemas({
  locale,
  page,
  children,
}: {
  locale: SiteLocale;
  page: LocalizedLocationPage;
  children: LocalizedLocationPage[];
}) {
  const pageHref =
    routePath.location(
      locale,
      ...page.segments
    );

  const pageUrl =
    new URL(
      pageHref,
      siteConfig.url
    ).toString();

  const areaType =
    page.level === 'city'
      ? 'City'
      : page.level === 'country'
        ? 'Country'
        : 'AdministrativeArea';

  const place = {
    '@type':
      areaType,
    name:
      page.name,
    ...(page.countryCode
      ? {
          addressCountry:
            page.countryCode,
        }
      : {}),
  };

  const webPage = {
    '@context':
      'https://schema.org',
    '@type':
      page.level === 'index'
        ? 'CollectionPage'
        : 'WebPage',
    '@id':
      `${pageUrl}#webpage`,
    url:
      pageUrl,
    name:
      page.seo.title,
    description:
      page.seo.description,
    inLanguage:
      locale,
    dateModified:
      page.reviewedAt,
    isPartOf: {
      '@type':
        'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
      url:
        siteConfig.url,
      name:
        siteConfig.name,
    },
    about:
      place,
    ...(children.length > 0
      ? {
          mainEntity: {
            '@type':
              'ItemList',
            numberOfItems:
              children.length,
            itemListElement:
              children.map(
                (child, index) => ({
                  '@type':
                    'ListItem',
                  position:
                    index + 1,
                  name:
                    child.name,
                  url:
                    new URL(
                      routePath.location(
                        locale,
                        ...child.segments
                      ),
                      siteConfig.url
                    ).toString(),
                })
              ),
          },
        }
      : {}),
  };

  const service = {
    '@context':
      'https://schema.org',
    '@type':
      'Service',
    '@id':
      `${pageUrl}#online-tutoring-service`,
    name:
      page.heroTitle,
    description:
      page.heroDescription,
    serviceType:
      'Online one-to-one tutoring',
    areaServed:
      place,
    provider: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name:
        siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url:
        siteConfig.url,
    },
    availableChannel: {
      '@type':
        'ServiceChannel',
      serviceUrl:
        pageUrl,
      serviceLocation: {
        '@type':
          'VirtualLocation',
        url:
          pageUrl,
      },
    },
  };

  const faq = {
    '@context':
      'https://schema.org',
    '@type':
      'FAQPage',
    mainEntity:
      page.faqs.map(
        (item) => ({
          '@type':
            'Question',
          name:
            item.question,
          acceptedAnswer: {
            '@type':
              'Answer',
            text:
              item.answer,
          },
        })
      ),
  };

  return {
    webPage,
    service,
    faq,
  };
}
