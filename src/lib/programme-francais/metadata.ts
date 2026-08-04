import type {
  Metadata,
} from 'next';

import {
  siteConfig,
} from '@/config/site';

interface FrenchMetadataInput {
  title: string;
  description: string;
  pathname: string;
}

export function buildFrenchProgramMetadata({
  title,
  description,
  pathname,
}: FrenchMetadataInput): Metadata {
  const canonical =
    new URL(
      `/fr${pathname}`,
      siteConfig.url
    ).toString();

  return {
    title: {
      absolute:
        title,
    },
    description,
    alternates: {
      canonical,
      languages: {
        fr:
          canonical,
      },
    },
    openGraph: {
      title,
      description,
      url:
        canonical,
      siteName:
        siteConfig.name,
      locale:
        'fr_CA',
      type:
        'website',
    },
    twitter: {
      card:
        'summary',
      title,
      description,
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
