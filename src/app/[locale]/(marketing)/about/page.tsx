import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ContentSection } from '@/components/internal/content-section';
import { FeatureGrid } from '@/components/internal/feature-grid';
import { InternalCta } from '@/components/internal/internal-cta';
import { InternalFaq } from '@/components/internal/internal-faq';
import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { ProcessSteps } from '@/components/internal/process-steps';
import { getDefaultMarket } from '@/config/markets';
import { routePath } from '@/config/routes';
import {
  isSupportedLocale,
  siteConfig,
} from '@/config/site';
import { aboutPageContent } from '@/content/pages/about';
import { trustTransparencyContent } from '@/content/pages/trust-transparency';
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
  const trustContent =
    trustTransparencyContent[locale];

  const homeHref =
    routePath.home(locale);

  const bookingHref =
    siteConfig.bookingUrl.trim() ||
    `${homeHref}#pricing`;

  const emailHref =
    `mailto:${siteConfig.email}`;

  const legalOrganizationName =
    getDefaultMarket().organization.legalName ??
    siteConfig.organizationName;

  const heroDescription =
    locale === 'ar'
      ? 'تقدم Success Path Mentors حصصًا فردية أونلاين تراعي مادة الطالب وصفه الدراسي وأهدافه التعليمية وواجباته المدرسية والوقت المناسب للأسرة.'
      : 'Success Path Mentors provides one-to-one online tutoring designed around the student’s subject, grade, learning goals, schoolwork, and preferred schedule.';

  const trustLinks = [
    {
      href: routePath.howItWorks(locale),
      title: trustContent.links.process.title,
      description:
        trustContent.links.process.description,
      action: trustContent.links.process.action,
    },
    {
      href: routePath.contact(locale),
      title: trustContent.links.contact.title,
      description:
        trustContent.links.contact.description,
      action: trustContent.links.contact.action,
    },
    {
      href: routePath.terms(locale),
      title: trustContent.links.terms.title,
      description:
        trustContent.links.terms.description,
      action: trustContent.links.terms.action,
    },
    {
      href: routePath.privacy(locale),
      title: trustContent.links.privacy.title,
      description:
        trustContent.links.privacy.description,
      action: trustContent.links.privacy.action,
    },
  ];

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
        description={heroDescription}
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
        id="trust-transparency"
        eyebrow={trustContent.eyebrow}
        title={trustContent.title}
        description={trustContent.description}
      >
        <div
          className="
            mb-7
            rounded-card
            border
            border-accent-200
            bg-accent-50/70
            p-6
            sm:p-7
          "
        >
          <p
            className="
              text-caption
              font-bold
              uppercase
              tracking-wider
              text-accent-800
            "
          >
            {trustContent.legalLabel}
          </p>

          <p
            className="
              mt-2
              text-body
              font-black
              text-primary-950
            "
          >
            {legalOrganizationName}
          </p>

          <p
            className="
              mt-2
              max-w-3xl
              text-small
              leading-7
              text-muted-foreground
            "
          >
            {trustContent.legalDescription}
          </p>
        </div>

        <div
          className="
            grid
            gap-5
            md:grid-cols-2
          "
        >
          {trustLinks.map((item) => (
            <article
              key={item.href}
              className="
                rounded-card
                border
                border-border
                bg-background
                p-6
                shadow-sm
                sm:p-7
              "
            >
              <h3
                className="
                  text-h4
                  font-black
                  text-primary-950
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-small
                  leading-7
                  text-muted-foreground
                "
              >
                {item.description}
              </p>

              <Link
                href={item.href}
                className="
                  mt-5
                  inline-flex
                  min-h-touch
                  items-center
                  font-bold
                  text-accent-800
                  underline
                  decoration-accent-300
                  underline-offset-4
                  hover:text-accent-900
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                "
              >
                {item.action}
              </Link>
            </article>
          ))}
        </div>
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
