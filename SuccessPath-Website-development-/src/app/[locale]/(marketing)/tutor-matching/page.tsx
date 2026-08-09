import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

import { ContentSection } from '@/components/internal/content-section';
import { FeatureGrid } from '@/components/internal/feature-grid';
import { InternalCta } from '@/components/internal/internal-cta';
import { InternalFaq } from '@/components/internal/internal-faq';
import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { ProcessSteps } from '@/components/internal/process-steps';
import { RelatedPages } from '@/components/internal/related-pages';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import { tutorMatchingPageContent } from '@/content/pages/tutor-matching';
import { buildPageMetadata } from '@/lib/seo/metadata';

interface TutorMatchingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: TutorMatchingPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    tutorMatchingPageContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/tutor-matching',
    },
  });
}

export default async function TutorMatchingPage({
  params,
}: TutorMatchingPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    tutorMatchingPageContent[locale];

  const homeHref = `/${locale}`;
  const pageHref =
    `${homeHref}/tutor-matching`;
  const howItWorksHref =
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

  const localizedRelatedPages =
    content.related.items.map(
      (item) => ({
        ...item,
        href: item.href.replace(
          /^\/(en|ar)/,
          homeHref
        ),
      })
    );

  const pageUrl = new URL(
    pageHref,
    siteConfig.url
  ).toString();

  const pageSchema = {
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
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name:
        content.schema.serviceName,
      serviceType:
        content.schema.serviceType,
      provider: {
        '@type':
          'EducationalOrganization',
        '@id':
          `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName:
          siteConfig.organizationName,
        url: siteConfig.url,
      },
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    url: pageUrl,
    name: content.schema.serviceName,
    description:
      content.seo.description,
    serviceType:
      content.schema.serviceType,
    provider: {
      '@type':
        'EducationalOrganization',
      '@id':
        `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName:
        siteConfig.organizationName,
      url: siteConfig.url,
    },
    audience: {
      '@type':
        'EducationalAudience',
      educationalRole: 'student',
    },
  };

  return (
    <InternalPageShell
      schemaId="tutor-matching"
      breadcrumbs={breadcrumbs}
      faqItems={content.faq.items}
      additionalSchemas={[
        pageSchema,
        serviceSchema,
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
          href: `${pageHref}#matching-information`,
        }}
        secondaryAction={{
          label:
            content.hero.secondaryAction,
          href: howItWorksHref,
        }}
        highlights={
          content.hero.highlights
        }
      />

      <ContentSection
        id="why-fit-matters"
        eyebrow={
          content.importance.eyebrow
        }
        title={content.importance.title}
        description={
          content.importance.description
        }
      >
        <FeatureGrid
          items={content.importance.items}
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="matching-information"
        tone="muted"
        eyebrow={
          content.information.eyebrow
        }
        title={content.information.title}
        description={
          content.information.description
        }
      >
        <FeatureGrid
          items={content.information.items}
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="matching-process"
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
        id="first-lesson-review"
        tone="dark"
        eyebrow={
          content.firstLesson.eyebrow
        }
        title={content.firstLesson.title}
        description={
          content.firstLesson.description
        }
      >
        <FeatureGrid
          items={
            content.firstLesson.items
          }
          columns={3}
          inverse
        />
      </ContentSection>

      <ContentSection
        id="tutor-change"
        tone="muted"
        eyebrow={content.change.eyebrow}
        title={content.change.title}
        description={
          content.change.description
        }
      >
        <FeatureGrid
          items={content.change.items}
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="matching-expectations"
        eyebrow={
          content.expectations.eyebrow
        }
        title={
          content.expectations.title
        }
        description={
          content.expectations.description
        }
      >
        <ul
          className="
            grid
            gap-4
            rounded-card
            border
            border-border
            bg-card
            p-6
            text-body
            leading-8
            text-muted-foreground
            shadow-card
            sm:p-8
          "
        >
          {content.expectations.bullets.map(
            (bullet) => (
              <li
                key={bullet}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-accent-600
                  "
                  strokeWidth={1.8}
                />

                <span>{bullet}</span>
              </li>
            )
          )}
        </ul>
      </ContentSection>

      <ContentSection
        id="tutor-matching-faq"
        tone="muted"
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

      <section
        id="related-pages"
        aria-labelledby="related-pages-heading"
        className="
          bg-background
          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <RelatedPages
            heading={content.related.heading}
            items={localizedRelatedPages}
          />
        </div>
      </section>

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
          href: howItWorksHref,
        }}
      />
    </InternalPageShell>
  );
}