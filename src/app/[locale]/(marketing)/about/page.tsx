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
import { aboutPageContent } from '@/content/pages/about';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { buildAboutPageSchema } from '@/lib/seo/schemas';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content =
    aboutPageContent[locale];

  return buildPageMetadata({
    locale,
    seo: {
      title: content.seo.title,
      description:
        content.seo.description,
      pathname: '/about',
    },
  });
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content =
    aboutPageContent[locale];

  /*
   * Keep the page independent from a shared routes object.
   * This avoids runtime failures when an existing routes.ts
   * in the project uses a different export shape.
   */
  const homeHref = `/${locale}`;

  const bookingHref =
    siteConfig.bookingUrl.trim() ||
    `${homeHref}#pricing`;

  const emailHref =
    `mailto:${siteConfig.email}`;

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

  const aboutSchema =
    buildAboutPageSchema({
      locale,
      pathname: '/about',
      title: content.seo.title,
      description:
        content.seo.description,
    });

  return (
    <InternalPageShell
      schemaId="about"
      breadcrumbs={breadcrumbs}
      faqItems={content.faq.items}
      additionalSchemas={[
        aboutSchema,
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
          href: `${homeHref}#how-it-works`,
        }}
        secondaryAction={{
          label:
            content.hero.secondaryAction,
          href: emailHref,
          external: true,
        }}
        highlights={
          content.hero.highlights
        }
      />

      <ContentSection
        id="our-purpose"
        eyebrow={content.story.eyebrow}
        title={content.story.title}
        description={
          content.story.description
        }
      >
        <div
          className="
            grid
            gap-6
            lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]
            lg:gap-12
          "
        >
          <div
            className="
              rounded-card
              border
              border-accent-200
              bg-accent-50/70
              p-6
              text-small
              font-semibold
              leading-7
              text-primary-900
              sm:p-7
            "
          >
            {content.story.description}
          </div>

          <div
            className="
              grid
              gap-5
              text-body
              leading-8
              text-muted-foreground
            "
          >
            {content.story.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </ContentSection>

      <ContentSection
        id="our-values"
        tone="muted"
        eyebrow={content.values.eyebrow}
        title={content.values.title}
        description={
          content.values.description
        }
      >
        <FeatureGrid
          items={content.values.items}
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="learning-model"
        eyebrow={content.model.eyebrow}
        title={content.model.title}
        description={
          content.model.description
        }
      >
        <FeatureGrid
          items={content.model.items}
          columns={3}
        />
      </ContentSection>

      <ContentSection
        id="tutor-quality"
        tone="muted"
        eyebrow={content.quality.eyebrow}
        title={content.quality.title}
        description={
          content.quality.description
        }
      >
        <ProcessSteps
          items={content.quality.steps}
        />
      </ContentSection>

      <ContentSection
        id="about-faq"
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
          href: emailHref,
          external: true,
        }}
      />
    </InternalPageShell>
  );
}