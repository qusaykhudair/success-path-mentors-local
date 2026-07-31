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
import { cancellationPolicyContent } from '@/content/legal/cancellation-policy';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface CancellationPolicyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: CancellationPolicyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    cancellationPolicyContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/cancellation-policy',
    },
  });
}

export default async function CancellationPolicyPage({
  params,
}: CancellationPolicyPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    cancellationPolicyContent[locale];

  const homeHref = `/${locale}`;
  const pageHref =
    `${homeHref}/cancellation-policy`;

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

  const cancellationPolicySchema = {
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
      schemaId="cancellation-policy"
      breadcrumbs={breadcrumbs}
      additionalSchemas={[
        cancellationPolicySchema,
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