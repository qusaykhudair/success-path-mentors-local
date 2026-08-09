import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { LegalDocument } from '@/components/internal/legal-document';
import { legalConfig } from '@/config/legal';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import { privacyPolicyContent } from '@/content/legal/privacy-policy';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface PrivacyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    privacyPolicyContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/privacy',
    },
  });
}

export default async function PrivacyPage({
  params,
}: PrivacyPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    privacyPolicyContent[locale];

  const homeHref = `/${locale}`;
  const pageHref =
    `${homeHref}/privacy`;

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

  const privacySchema = {
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
      schemaId="privacy-policy"
      breadcrumbs={breadcrumbs}
      additionalSchemas={[
        privacySchema,
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

      <LegalDocument
        content={content}
        contactEmail={
          legalConfig.contactEmail
        }
      />
    </InternalPageShell>
  );
}