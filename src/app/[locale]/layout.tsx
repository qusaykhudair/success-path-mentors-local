// src/app/[locale]/layout.tsx

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

import {
  ORGANIZATION,
  SITE_URL,
} from '@/lib/constants';

import { dinNext } from '@/lib/fonts';

import '../globals.css';

interface LocaleLayoutProps {
  children: ReactNode;

  params: Promise<{
    locale: string;
  }>;
}

function serializeJsonLd(
  value: object
): string {
  /*
   * منع الرمز < من التأثير داخل script
   * عند وجود محتوى مترجم أو بيانات ديناميكية.
   */
  return JSON.stringify(value).replace(
    /</g,
    '\\u003c'
  );
}

export function generateStaticParams() {
  return routing.locales.map(
    (locale) => ({
      locale,
    })
  );
}

export async function generateMetadata({
  params,
}: Omit<
  LocaleLayoutProps,
  'children'
>): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'meta',
  });

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: `${t('siteName')} | ${t(
        'tagline'
      )}`,

      template: `%s | ${t('siteName')}`,
    },

    /*
     * لا نضع canonical أو hreflang هنا.
     * كل صفحة يجب أن تحددهما وفق مسارها.
     *
     * وإلا ستشير صفحات مثل:
     * /privacy
     * /terms
     * /subjects/math
     *
     * إلى الصفحة الرئيسية كـcanonical.
     */

    openGraph: {
      siteName: t('siteName'),

      locale:
        locale === 'ar'
          ? 'ar_CA'
          : 'en_CA',

      alternateLocale: [
        locale === 'ar'
          ? 'en_CA'
          : 'ar_CA',
      ],

      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  const isSupportedLocale = (
    routing.locales as readonly string[]
  ).includes(locale);

  if (!isSupportedLocale) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const tAccessibility =
    await getTranslations({
      locale,
      namespace: 'accessibility',
    });

  const dir =
    localeDirection[locale as Locale];

  const organizationId =
    `${SITE_URL}/#organization`;

  const websiteId =
    `${SITE_URL}/#website`;

  const absoluteLogo = new URL(
    ORGANIZATION.logo,
    SITE_URL
  ).toString();

  const socialProfiles = Array.isArray(
    ORGANIZATION.sameAs
  )
    ? ORGANIZATION.sameAs.filter(
        (url): url is string =>
          typeof url === 'string' &&
          url.trim().length > 0
      )
    : [];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': organizationId,

    name: ORGANIZATION.name,

    ...(ORGANIZATION.legalName
      ? {
          legalName:
            ORGANIZATION.legalName,
        }
      : {}),

    /*
     * المؤسسة نفسها لها رابط أساسي واحد،
     * وليس رابطًا مختلفًا لكل لغة.
     */
    url: SITE_URL,

    logo: {
      '@type': 'ImageObject',
      url: absoluteLogo,
    },

    ...(socialProfiles.length > 0
      ? {
          sameAs: socialProfiles,
        }
      : {}),
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,

    name: ORGANIZATION.name,
    url: SITE_URL,

    inLanguage: routing.locales,

    publisher: {
      '@id': organizationId,
    },
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={dinNext.variable}
    >
      <body
        className="
          min-h-screen
          bg-background
          text-foreground
          antialiased
        "
      >
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              organizationJsonLd
            ),
          }}
        />

        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              websiteJsonLd
            ),
          }}
        />

        <NextIntlClientProvider
          messages={messages}
        >
          <a
            href="#main-content"
            className="
              sr-only
              focus:not-sr-only
              focus:fixed
              focus:start-4
              focus:top-4
              focus:z-[100]
              focus:inline-flex
              focus:min-h-touch
              focus:items-center
              focus:rounded-button
              focus:bg-primary
              focus:px-4
              focus:py-3
              focus:text-small
              focus:font-bold
              focus:text-primary-foreground
              focus:shadow-lg
              focus:outline-none
              focus:ring-2
              focus:ring-ring
              focus:ring-offset-2
            "
          >
            {tAccessibility(
              'skipToContent'
            )}
          </a>

          <SiteHeader />

          <main
            id="main-content"
            tabIndex={-1}
            className="min-h-screen"
          >
            {children}
          </main>

          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}