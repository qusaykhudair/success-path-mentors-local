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
import { Pricing } from '@/components/sections/home/pricing';
import { Faq } from '@/components/sections/home/faq';
import { Contact } from '@/components/sections/home/contact';
import { TrustBadges } from '@/components/sections/home/trust-badges';
import { ClosingCta } from '@/components/sections/home/closing-cta';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  const tMeta = await getTranslations({ locale, namespace: 'meta' });

  const url = `${SITE_URL}/${locale}`;
  const title = t('heading');
  const description = t('subheading');
  const ogImage = `${SITE_URL}/og-image.jpg`; // TODO: confirm this asset exists in /public

  return {
    title,
    description,
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
      title: `${tMeta('siteName')} | ${title}`,
      description,
      url,
      siteName: tMeta('siteName'),
      locale,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tMeta('siteName')} | ${title}`,
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

  const tMeta = await getTranslations({ locale, namespace: 'meta' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: tMeta('siteName'),
    url: `${SITE_URL}/${locale}`,
    // TODO: replace with real logo path and social profile URLs
    logo: `${SITE_URL}/logo.png`,
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <Hero />
        <Programs />
        <Testimonials />
        <Steps />
        <Services />
        <Challenges />
        <Pricing />
        <Faq />
        <Contact />
        <TrustBadges />
        <ClosingCta />
      </main>
    </>
  );
}