import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { notFound } from 'next/navigation';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import {
  localeDirection,
  routing,
  type Locale,
} from '@/i18n/routing';
import { ORGANIZATION, SITE_URL } from '@/lib/constants';
import { dinNext } from '@/lib/fonts';

import '../globals.css';



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${t('siteName')} | ${t('tagline')}`,
      template: `%s | ${t('siteName')}`,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: { ...languages, 'x-default': `${SITE_URL}/${routing.defaultLocale}` },
    },
    openGraph: {
      siteName: t('siteName'),
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
      url: `${SITE_URL}/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // Enables static rendering for this locale's server components
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = localeDirection[locale as Locale];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: `${SITE_URL}/${locale}`,
    logo: ORGANIZATION.logo,
    sameAs: ORGANIZATION.sameAs,
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORGANIZATION.name,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
  };

  return (
    <html
  lang={locale}
  dir={dir}
  className={dinNext.variable}
>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
<a
  href="#main-content"
  className="
    sr-only
    focus:not-sr-only
    focus:fixed
    focus:start-4
    focus:top-4
    focus:z-[100]
    focus:rounded-lg
    focus:bg-primary
    focus:px-4
    focus:py-3
    focus:text-sm
    focus:font-bold
    focus:text-white
    focus:shadow-lg
  "
>
  {locale === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
</a>
          <SiteHeader />
         <main id="main-content" tabIndex={-1}>
  {children}
</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
