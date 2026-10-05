

import type { Metadata } from 'next';
import { getDefaultOpenGraphLocale } from '@/lib/market-display';

import {
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';

import { HomePageContent } from '@/components/sections/home/home-page-content';
import { SITE, SITE_URL } from '@/lib/constants';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const tMeta = await getTranslations({
    locale,
    namespace: 'meta',
  });

  const tSeo = await getTranslations({
    locale,
    namespace: 'seo.home',
  });

  const pageUrl = new URL(
    `/${locale}`,
    SITE_URL
  ).toString();

  const ogImage = new URL(
    SITE.ogImage,
    SITE_URL
  ).toString();

  const title = tSeo('title');
  const description = tSeo('description');

  const keywords = tSeo('keywords')
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  const openGraphLocale =
    getDefaultOpenGraphLocale(locale);

  const alternateOpenGraphLocale =
    getDefaultOpenGraphLocale(locale === 'ar' ? 'en' : 'ar');

  return {
    /*
     * استخدمنا absolute حتى لا يضيف Layout
     * اسم المنصة مرة ثانية إلى عنوان الصفحة.
     */
    title: {
      absolute: title,
    },

    description,
    keywords,

    alternates: {
      canonical: pageUrl,

      languages: {
        'en-CA': new URL('/en', SITE_URL).toString(),
        'ar-CA': new URL('/ar', SITE_URL).toString(),
        'x-default': new URL('/en', SITE_URL).toString(),
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: tMeta('siteName'),
      locale: openGraphLocale,
      alternateLocale: [
        alternateOpenGraphLocale,
      ],
      type: 'website',

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <HomePageContent locale={locale} />;
}
