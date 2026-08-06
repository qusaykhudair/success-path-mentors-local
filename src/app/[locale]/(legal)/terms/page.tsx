import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { LegalDocument } from '@/components/internal/legal-document';
import { legalConfig } from '@/config/legal';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import { termsContent } from '@/content/legal/terms';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface TermsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    termsContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/terms',
    },
  });
}

export default async function TermsPage({
  params,
}: TermsPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    termsContent[locale];

  const homeHref = `/${locale}`;
  const pageHref =
    `${homeHref}/terms`;

  const breadcrumbs = [
    {
      label:
        content.breadcrumbs.home,
      href: homeHref,
    },
    {
      label:
        content.breadcrumbs.current,
    },
  ];

  const pageUrl = new URL(
    pageHref,
    siteConfig.url
  ).toString();

  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.seo.title,
    description:
      content.seo.description,
    inLanguage: locale,
    dateModified: '2026-07-31',
    isPartOf: {
      '@type': 'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
    },
    publisher: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url: siteConfig.url,
    },
  };

  return (
    <InternalPageShell
      schemaId="terms-and-conditions"
      breadcrumbs={breadcrumbs}
      additionalSchemas={[
        termsSchema,
      ]}
    >
      <InternalPageHero
        breadcrumbs={breadcrumbs}
        breadcrumbLabel={
          content.breadcrumbs.ariaLabel
        }
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={
          content.hero.description
        }
        highlights={[
          {
            value:
              content.hero.lastUpdated,
            label:
              content.hero.lastUpdatedLabel,
          },
          {
            value:
              content.hero.appliesTo,
            label:
              content.hero.appliesToLabel,
          },
          {
            value:
              content.hero.contactLabel,
            label:
              locale === 'ar'
                ? 'البريد الإلكتروني'
                : 'Contact email',
          },
        ]}
      />

      <div
        className="
          border-b
          border-border
          bg-surface-sunken
        "
      >
        <nav
          aria-label={
            locale === 'ar'
              ? 'السياسات المرتبطة'
              : 'Related policies'
          }
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-wrap
            items-center
            gap-3
            px-4
            py-5
            sm:px-6
            lg:px-8
          "
        >
          <span
            className="
              text-small
              font-bold
              text-primary-950
            "
          >
            {locale === 'ar'
              ? 'السياسات المرتبطة:'
              : 'Related policies:'}
          </span>

          <Link
            href={`${homeHref}/privacy`}
            className="
              inline-flex
              min-h-touch
              items-center
              rounded-full
              border
              border-border
              bg-background
              px-4
              py-2
              text-small
              font-semibold
              text-primary-900
              transition-colors
              hover:border-accent-300
              hover:bg-accent-50
              hover:text-accent-800
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
            "
          >
            {locale === 'ar'
              ? 'سياسة الخصوصية'
              : 'Privacy Policy'}
          </Link>

          <Link
            href={`${homeHref}/cancellation-policy`}
            className="
              inline-flex
              min-h-touch
              items-center
              rounded-full
              border
              border-border
              bg-background
              px-4
              py-2
              text-small
              font-semibold
              text-primary-900
              transition-colors
              hover:border-accent-300
              hover:bg-accent-50
              hover:text-accent-800
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
            "
          >
            {locale === 'ar'
              ? 'سياسة الإلغاء'
              : 'Cancellation Policy'}
          </Link>
        </nav>
      </div>

      <LegalDocument
        content={content}
        contactEmail={
          legalConfig.contactEmail
        }
      />
    </InternalPageShell>
  );
}