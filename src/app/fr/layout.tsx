import type {
  Metadata,
} from 'next';
import type {
  ReactNode,
} from 'react';

import { FloatingWhatsAppButton } from '@/components/layout/floating-whatsapp-button';
import { BackToTopButton } from '@/components/layout/back-to-top-button';
import {
  FrenchProgramFooter,
} from '@/components/programme-francais/french-program-footer';
import {
  FrenchProgramHeader,
} from '@/components/programme-francais/french-program-header';
import {
  siteConfig,
} from '@/config/site';
import {
  dinNext,
} from '@/lib/fonts';

import '../globals.css';

interface FrenchLayoutProps {
  children:
    ReactNode;
}

export const metadata:
  Metadata = {
    metadataBase:
      new URL(
        siteConfig.url
      ),
    title: {
      default:
        'Programme français | Success Path Mentors',
      template:
        '%s | Success Path Mentors',
    },
    description:
      'Programme de français et de mathématiques enseignées en français, de la 1re à la 12e année.',
    openGraph: {
      siteName:
        siteConfig.name,
      locale:
        'fr_CA',
      type:
        'website',
    },
    twitter: {
      card:
        'summary_large_image',
    },
  };

function serializeJsonLd(
  value: object
): string {
  return JSON.stringify(
    value
  ).replace(
    /</g,
    '\\u003c'
  );
}

export default function FrenchLayout({
  children,
}: FrenchLayoutProps) {
  const organizationId =
    `${siteConfig.url}/#organization`;

  const websiteId =
    `${siteConfig.url}/#website`;

  const organizationSchema = {
    '@context':
      'https://schema.org',
    '@type':
      'EducationalOrganization',
    '@id':
      organizationId,
    name:
      siteConfig.name,
    legalName:
      siteConfig.organizationName,
    url:
      siteConfig.url,
    logo:
      new URL(
        '/images/logo.png',
        siteConfig.url
      ).toString(),
  };

  const websiteSchema = {
    '@context':
      'https://schema.org',
    '@type':
      'WebSite',
    '@id':
      websiteId,
    name:
      siteConfig.name,
    url:
      siteConfig.url,
    inLanguage: [
      'en',
      'ar',
      'fr',
    ],
    publisher: {
      '@id':
        organizationId,
    },
  };

  return (
    <html
      lang="fr"
      dir="ltr"
      className={
        dinNext.variable
      }
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
          id="french-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              serializeJsonLd(
                organizationSchema
              ),
          }}
        />

        <script
          id="french-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              serializeJsonLd(
                websiteSchema
              ),
          }}
        />

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
            focus:bg-white
            focus:px-4
            focus:py-3
            focus:font-bold
            focus:text-[#0B1F3A]
            focus:shadow-xl
          "
        >
          Aller au contenu principal
        </a>

        <FrenchProgramHeader />

        <FloatingWhatsAppButton
          locale="fr"
        />

        <BackToTopButton locale="fr" />

        <main
          id="main-content"
        >
          {children}
        </main>

        <FrenchProgramFooter />
      </body>
    </html>
  );
}
