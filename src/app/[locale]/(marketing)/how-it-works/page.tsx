import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ContentSection } from '@/components/internal/content-section';
import { FeatureGrid } from '@/components/internal/feature-grid';
import { InternalCta } from '@/components/internal/internal-cta';
import { InternalFaq } from '@/components/internal/internal-faq';
import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { ProcessSteps } from '@/components/internal/process-steps';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import { howItWorksPageContent } from '@/content/pages/how-it-works';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface HowItWorksPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: HowItWorksPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    howItWorksPageContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/how-it-works',
    },
  });
}

export default async function HowItWorksPage({
  params,
}: HowItWorksPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    howItWorksPageContent[locale];

  const homeHref = `/${locale}`;
  const pageHref =
    `${homeHref}/how-it-works`;

  const bookingHref =
    siteConfig.bookingUrl.trim() ||
    `${homeHref}#pricing`;

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

  const howItWorksSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.seo.title,
    description:
      content.seo.description,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id':
        `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
    },
    about: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url: siteConfig.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      name: content.process.title,
      numberOfItems:
        content.process.items.length,
      itemListElement:
        content.process.items.map(
          (item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            description:
              item.description,
          })
        ),
    },
  };

  return (
    <InternalPageShell
      schemaId="how-it-works"
      breadcrumbs={breadcrumbs}
      faqItems={content.faq.items}
      additionalSchemas={[
        howItWorksSchema,
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
        primaryAction={{
          label:
            content.hero.primaryAction,
          href: `${pageHref}#process`,
        }}
        secondaryAction={{
          label:
            content.hero.secondaryAction,
          href: `${homeHref}/about`,
        }}
        highlights={
          content.hero.highlights
        }
      />

      <ContentSection
        id="overview"
        eyebrow={
          content.introduction.eyebrow
        }
        title={
          content.introduction.title
        }
        description={
          content.introduction.description
        }
        align="center"
      />

      <ContentSection
        id="process"
        tone="muted"
        eyebrow={content.process.eyebrow}
        title={content.process.title}
        description={
          content.process.description
        }
      >
        <ProcessSteps
          items={content.process.items}
        />
      </ContentSection>

      <ContentSection
        id="prepare"
        eyebrow={
          content.preparation.eyebrow
        }
        title={
          content.preparation.title
        }
        description={
          content.preparation.description
        }
      >
        <FeatureGrid
          items={
            content.preparation.items
          }
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="during-the-lesson"
        tone="dark"
        eyebrow={content.lesson.eyebrow}
        title={content.lesson.title}
        description={
          content.lesson.description
        }
      >
        <FeatureGrid
          items={content.lesson.items}
          columns={3}
          inverse
        />
      </ContentSection>

      <ContentSection
        id="after-the-lesson"
        tone="muted"
        eyebrow={
          content.followUp.eyebrow
        }
        title={content.followUp.title}
        description={
          content.followUp.description
        }
      >
        <FeatureGrid
          items={content.followUp.items}
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="how-it-works-faq"
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        description={
          content.faq.description
        }
      >
        <InternalFaq
          items={content.faq.items}
        />
      </ContentSection>

      <InternalCta
        eyebrow={content.cta.eyebrow}
        title={content.cta.title}
        description={
          content.cta.description
        }
        primaryAction={{
          label:
            content.cta.primaryAction,
          href: bookingHref,
          external:
            /^(https?:)/i.test(
              bookingHref
            ),
          newTab:
            /^(https?:)/i.test(
              bookingHref
            ),
        }}
        secondaryAction={{
          label:
            content.cta.secondaryAction,
          href: `${homeHref}/about`,
        }}
      />
    </InternalPageShell>
  );
}