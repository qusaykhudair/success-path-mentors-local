import type {
  Metadata,
} from 'next';

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

function getHreflang(
  locale: SiteLocale,
  countryCode?: 'CA' | 'US'
): string {
  if (countryCode === 'US') {
    return locale === 'ar'
      ? 'ar-US'
      : 'en-US';
  }

  if (countryCode === 'CA') {
    return locale === 'ar'
      ? 'ar-CA'
      : 'en-CA';
  }

  return locale;
}

function getOpenGraphLocale(
  locale: SiteLocale,
  countryCode?: 'CA' | 'US'
): string {
  const region =
    countryCode === 'US'
      ? 'US'
      : 'CA';

  return locale === 'ar'
    ? `ar_${region}`
    : `en_${region}`;
}

export function buildLocationMetadata({
  locale,
  page,
}: {
  locale: SiteLocale;
  page: LocalizedLocationPage;
}): Metadata {
  const pathname =
    routePath.location(
      locale,
      ...page.segments
    );

  const canonical =
    new URL(
      pathname,
      siteConfig.url
    ).toString();

  const englishUrl =
    new URL(
      routePath.location(
        'en',
        ...page.segments
      ),
      siteConfig.url
    ).toString();

  const arabicUrl =
    new URL(
      routePath.location(
        'ar',
        ...page.segments
      ),
      siteConfig.url
    ).toString();

  const imagePath =
    siteConfig.defaultOgImage;

  const imageUrl = imagePath
    ? new URL(
        imagePath,
        siteConfig.url
      ).toString()
    : undefined;

  const languages:
    Record<string, string> = {
      [getHreflang(
        'en',
        page.countryCode
      )]: englishUrl,
      [getHreflang(
        'ar',
        page.countryCode
      )]: arabicUrl,
      'x-default': englishUrl,
    };

  return {
    title: {
      absolute:
        page.seo.title,
    },
    description:
      page.seo.description,
    keywords: [
      page.seo.primaryKeyword,
      ...page.seo
        .secondaryKeywords,
    ],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title:
        page.seo.title,
      description:
        page.seo.description,
      url:
        canonical,
      siteName:
        siteConfig.name,
      locale:
        getOpenGraphLocale(
          locale,
          page.countryCode
        ),
      alternateLocale: [
        getOpenGraphLocale(
          locale === 'ar'
            ? 'en'
            : 'ar',
          page.countryCode
        ),
      ],
      type:
        'website',
      ...(imageUrl
        ? {
            images: [
              {
                url:
                  imageUrl,
                width:
                  1200,
                height:
                  630,
                alt:
                  page.seo
                    .imageAlt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: imageUrl
        ? 'summary_large_image'
        : 'summary',
      title:
        page.seo.title,
      description:
        page.seo.description,
      ...(imageUrl
        ? {
            images: [
              imageUrl,
            ],
          }
        : {}),
    },
    robots: {
      index:
        true,
      follow:
        true,
      googleBot: {
        index:
          true,
        follow:
          true,
        'max-image-preview':
          'large',
        'max-snippet':
          -1,
        'max-video-preview':
          -1,
      },
    },
  };
}
