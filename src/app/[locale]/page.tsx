

import type { Metadata } from 'next';
import { getDefaultOpenGraphLocale } from '@/lib/market-display';

import {
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';

import { Challenges } from '@/components/sections/home/challenges';
import { Faq } from '@/components/sections/home/faq';
import { FinalCta } from '@/components/sections/home/final-cta';
import { Hero } from '@/components/sections/home/hero';
import { SupportedCountries } from '@/components/ui/supported-countries';
import { Pricing } from '@/components/sections/home/pricing';
import { Programs } from '@/components/sections/home/programs';
import { Services } from '@/components/sections/home/services';
import { Steps } from '@/components/sections/home/steps';
import { Testimonials } from '@/components/sections/home/testimonials';
import { VideoTestimonials } from '@/components/sections/home/video-testimonials';
import { LocalAvailabilityBlock } from '@/components/local/local-availability-block';

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

  return (
    <>
      <Hero />
      <SupportedCountries locale={locale as 'en' | 'ar'} />

      <Programs />

      <div className="content-auto">
        <Steps />
      </div>

      <div className="content-auto">
        <Services />
      </div>

      <div className="content-auto">
        <Challenges />
      </div>

      <div className="content-auto">
        <Testimonials />
      </div>

      <div className="content-auto">
        <VideoTestimonials />
      </div>

      <div className="content-auto">
        <Pricing />
      </div>

      <div className="content-auto">
        <LocalAvailabilityBlock locale={locale} />
      </div>

      <div className="content-auto">
        <Faq />
      </div>

      <div className="content-auto">
        <FinalCta />
      </div>
    </>
  );
}
