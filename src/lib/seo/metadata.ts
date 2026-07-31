import type { Metadata } from 'next';

import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import type { PageSeo } from '@/types/internal-page';

import {
  buildAbsoluteUrl,
  buildLanguageAlternates,
} from './urls';

function getOpenGraphLocale(
  locale: string
): string {
  return locale === 'ar'
    ? 'ar_CA'
    : 'en_CA';
}

function getAlternateOpenGraphLocale(
  locale: string
): string {
  return locale === 'ar'
    ? 'en_CA'
    : 'ar_CA';
}

export function buildPageMetadata({
  locale,
  seo,
}: {
  locale: string;
  seo: PageSeo;
}): Metadata {
  const canonical = buildAbsoluteUrl(
    locale,
    seo.pathname
  );

  const shouldIndex =
    isSupportedLocale(locale) &&
    !seo.noIndex;

  const imagePath =
    seo.imagePath?.trim() ||
    siteConfig.defaultOgImage;

  const imageUrl = imagePath
    ? new URL(
        imagePath,
        siteConfig.url
      ).toString()
    : undefined;

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,

    alternates: {
      canonical,
      languages: buildLanguageAlternates(
        seo.pathname
      ),
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: getOpenGraphLocale(locale),
      alternateLocale: [
        getAlternateOpenGraphLocale(locale),
      ],
      type: 'website',
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: seo.title,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: imageUrl
        ? 'summary_large_image'
        : 'summary',
      title: seo.title,
      description: seo.description,
      ...(imageUrl
        ? {
            images: [imageUrl],
          }
        : {}),
    },

    robots: {
      index: shouldIndex,
      follow: shouldIndex,
      googleBot: {
        index: shouldIndex,
        follow: shouldIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}