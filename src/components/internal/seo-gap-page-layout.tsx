import { ContentSection } from '@/components/internal/content-section';
import { FeatureGrid } from '@/components/internal/feature-grid';
import { InternalCta } from '@/components/internal/internal-cta';
import { InternalFaq } from '@/components/internal/internal-faq';
import { InternalPageHero } from '@/components/internal/internal-page-hero';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { ProcessSteps } from '@/components/internal/process-steps';
import { RelatedPages } from '@/components/internal/related-pages';
import { siteConfig } from '@/config/site';
import type { SeoGapPageContent } from '@/content/pages/seo-gap-pages';

interface SeoGapPageLayoutProps {
  content: SeoGapPageContent;
  locale: string;
}

export function SeoGapPageLayout({
  content,
  locale,
}: SeoGapPageLayoutProps) {
  const pageUrl = new URL(
    `/${locale}${content.pathname}`,
    siteConfig.url
  ).toString();

  const isCoursePage = content.pathname.includes('/subjects/math/grade-') || content.pathname.includes('/senior-');

  const mainSchema = isCoursePage
    ? {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${pageUrl}#course`,
        url: pageUrl,
        name: content.hero.title,
        description: content.seo.description,
        inLanguage: locale,
        provider: {
          '@type': 'EducationalOrganization',
          '@id': `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Online',
          courseWorkload: 'PT1H',
        },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        url: pageUrl,
        name: content.hero.title,
        description: content.seo.description,
        serviceType: 'Online Academic Tutoring',
        provider: {
          '@type': 'EducationalOrganization',
          '@id': `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Canada',
        },
      };

  return (
    <InternalPageShell
      schemaId={content.slug}
      breadcrumbs={content.breadcrumbs}
      faqItems={content.faq.items}
      additionalSchemas={[mainSchema]}
    >
      <InternalPageHero
        breadcrumbs={content.breadcrumbs}
        breadcrumbLabel={content.breadcrumbLabel}
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        primaryAction={content.hero.primaryAction}
        secondaryAction={content.hero.secondaryAction}
        highlights={content.hero.highlights}
      />

      <ContentSection
        id={content.overview.id}
        eyebrow={content.overview.eyebrow}
        title={content.overview.title}
        description={content.overview.description}
      >
        <div className="prose prose-lg max-w-none text-foreground/80">
          {content.overview.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mb-4 text-body sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id={content.struggles.id}
        eyebrow={content.struggles.eyebrow}
        title={content.struggles.title}
        description={content.struggles.description}
        tone="muted"
      >
        <FeatureGrid items={content.struggles.items} columns={2} />
      </ContentSection>

      <ContentSection
        id={content.howWeHelp.id}
        eyebrow={content.howWeHelp.eyebrow}
        title={content.howWeHelp.title}
        description={content.howWeHelp.description}
      >
        <ProcessSteps items={content.howWeHelp.steps} />
      </ContentSection>

      <ContentSection
        id={content.outcomes.id}
        eyebrow={content.outcomes.eyebrow}
        title={content.outcomes.title}
        description={content.outcomes.description}
        tone="muted"
      >
        <FeatureGrid items={content.outcomes.items} columns={3} />
      </ContentSection>

      <ContentSection
        id={`${content.slug}-related`}
        title={content.relatedPages.heading}
      >
        <RelatedPages
          heading={content.relatedPages.heading}
          items={content.relatedPages.items}
        />
      </ContentSection>

      <ContentSection
        id={`${content.slug}-faq`}
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        description={content.faq.description}
        tone="muted"
      >
        <InternalFaq items={content.faq.items} />
      </ContentSection>

      <InternalCta
        eyebrow={content.cta.eyebrow}
        title={content.cta.title}
        description={content.cta.description}
        primaryAction={content.cta.primaryAction}
        secondaryAction={content.cta.secondaryAction}
      />
    </InternalPageShell>
  );
}
