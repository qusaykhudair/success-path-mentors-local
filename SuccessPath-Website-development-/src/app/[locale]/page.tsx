

import type { Metadata } from 'next';

import {
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';

import { Challenges } from '@/components/sections/home/challenges';
import { Faq } from '@/components/sections/home/faq';
import { FinalCta } from '@/components/sections/home/final-cta';
import { Hero } from '@/components/sections/home/hero';
import { Pricing } from '@/components/sections/home/pricing';
import { Programs } from '@/components/sections/home/programs';
import { Services } from '@/components/sections/home/services';
import { Steps } from '@/components/sections/home/steps';
import { Testimonials } from '@/components/sections/home/testimonials';
import { VideoTestimonials } from '@/components/sections/home/video-testimonials';

import { routing } from '@/i18n/routing';
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

  const languageAlternates =
    Object.fromEntries(
      routing.locales.map(
        (supportedLocale) => [
          supportedLocale,
          new URL(
            `/${supportedLocale}`,
            SITE_URL
          ).toString(),
        ]
      )
    );

  const openGraphLocale =
    locale === 'ar'
      ? 'ar_CA'
      : 'en_CA';

  const alternateOpenGraphLocale =
    locale === 'ar'
      ? 'en_CA'
      : 'ar_CA';

  return {
    /*
     * استخدمنا absolute حتى لا يضيف Layout
     * اسم الأكاديمية مرة ثانية إلى عنوان الصفحة.
     */
    title: {
      absolute: title,
    },

    description,
    keywords,

    alternates: {
      canonical: pageUrl,

      languages: {
        ...languageAlternates,

        'x-default': new URL(
          `/${routing.defaultLocale}`,
          SITE_URL
        ).toString(),
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

  return (
    <>
      <Hero />

      <Programs />

      <Steps />

      <Services />

      <Challenges />

      <Testimonials />

      <VideoTestimonials />

      <Pricing />

      <Faq />

      <FinalCta />
    </>
  );
}