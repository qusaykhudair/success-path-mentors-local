import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';
import { Hero } from '@/components/sections/home/hero';
import { Programs } from '@/components/sections/home/programs';
import { Testimonials } from '@/components/sections/home/testimonials';
import { Steps } from '@/components/sections/home/steps';
import { Services } from '@/components/sections/home/services';
import { Challenges } from '@/components/sections/home/challenges';
import { VideoTestimonials } from '@/components/sections/home/video-testimonials';
import { Pricing } from '@/components/sections/home/pricing';
import { Faq } from '@/components/sections/home/faq';
import { FinalCta } from '@/components/sections/home/final-cta';
import {
  SITE
} from '@/lib/constants';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;


  const url = `${SITE_URL}/${locale}`;
const ogImage = `${SITE_URL}${SITE.ogImage}`;
const tMeta = await getTranslations({
  locale,
  namespace: 'meta',
});

const tSeo = await getTranslations({
  locale,
  namespace: 'seo.home',
});

const title = tSeo('title');
const description = tSeo('description');
const keywords = tSeo('keywords')
  .split(',')
  .map((keyword) => keyword.trim());

return {
  title,
  description,

  keywords,

  alternates: {
    canonical: url,
    languages: {
      ...Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
      ),
      'x-default': `${SITE_URL}/${routing.defaultLocale}`,
    },
  },

  openGraph: {
    title,
    description,
    url,
    siteName: tMeta('siteName'),
    locale: locale === 'ar' ? 'ar_EG' : 'en_US',
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
};
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
 <>
  <Hero />
  <Programs />
  <Steps />
  <Services />
  <Challenges />
  <Testimonials/>
  <VideoTestimonials />
  <Pricing />
  <Faq />
   <FinalCta />
</>
  );
}