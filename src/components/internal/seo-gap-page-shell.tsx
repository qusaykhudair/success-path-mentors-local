import Link from 'next/link';
import {
  AlertCircle,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
  Sparkles,
} from 'lucide-react';

import { Breadcrumbs } from '@/components/internal/breadcrumbs';
import { InternalCta } from '@/components/internal/internal-cta';
import { InternalFaq } from '@/components/internal/internal-faq';
import { InternalPageShell } from '@/components/internal/internal-page-shell';
import { Container } from '@/components/ui/container';
import type { SeoGapPageContent } from '@/content/pages/seo-gap-pages';
import type { BreadcrumbItem } from '@/types/internal-page';

interface SeoGapPageShellProps {
  content: SeoGapPageContent;
  breadcrumbs: BreadcrumbItem[];
  canonicalUrl: string;
  bookingHref: string;
  schemaData: unknown[];
}

export function SeoGapPageShell({
  content,
  breadcrumbs,
  canonicalUrl,
  bookingHref,
  schemaData,
}: SeoGapPageShellProps) {
  return (
    <InternalPageShell
      schemaId={content.slug}
      breadcrumbs={breadcrumbs}
      faqItems={content.faqs}
      additionalSchemas={schemaData}
    >
      <article className="min-h-screen bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-hero py-12 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-32 -top-32 h-96 w-96 rounded-full bg-accent-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -start-32 h-[28rem] w-[28rem] rounded-full bg-primary-200/45 blur-3xl"
          />

          <Container className="relative">
            <Breadcrumbs items={breadcrumbs} ariaLabel="Page breadcrumbs" />

            <div className="mt-8 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50/85 px-4 py-1.5 text-small font-bold text-accent-800 shadow-xs">
                <BookOpenCheck className="h-4 w-4 shrink-0 text-accent-700" />
                {content.hero.eyebrow}
              </span>

              <h1 className="mt-5 text-h1 font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {content.hero.title}
              </h1>

              <p className="mt-6 text-lead text-muted-foreground">
                {content.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={bookingHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-body font-bold text-accent-foreground shadow-button-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{content.hero.primaryAction}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#curriculum"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-body font-semibold text-foreground transition-all duration-200 hover:border-accent-400 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span>{content.hero.secondaryAction}</span>
                </a>
              </div>

              {content.hero.highlights.length > 0 && (
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {content.hero.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-2xl border border-border/80 bg-card/80 p-5 shadow-xs backdrop-blur-sm"
                    >
                      <p className="text-xl font-black text-primary sm:text-2xl">{h.value}</p>
                      <p className="mt-1 text-small font-medium text-muted-foreground">{h.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-14 sm:py-18 border-t border-border/60 bg-muted/20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <span className="text-caption font-bold uppercase tracking-wider text-accent-700">
                {content.overview.eyebrow}
              </span>
              <h2 className="mt-2 text-h2 font-bold text-foreground">
                {content.overview.title}
              </h2>
              <div className="mt-6 space-y-4 text-body text-muted-foreground leading-relaxed">
                {content.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CURRICULUM TOPICS (IF APPLICABLE) */}
        {content.curriculumContext && (
          <section id="curriculum" className="py-14 sm:py-20 border-t border-border/60">
            <Container>
              <div className="mx-auto max-w-4xl">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
                  <div>
                    <span className="inline-flex items-center gap-2 text-caption font-bold uppercase tracking-wider text-primary">
                      <GraduationCap className="h-4 w-4" />
                      Ontario Curriculum Alignment
                    </span>
                    <h2 className="mt-1 text-h2 font-bold text-foreground">
                      Curriculum Units & Academic Expectations
                    </h2>
                  </div>
                  {content.curriculumContext.courseCode && (
                    <span className="rounded-xl border border-primary-200 bg-primary-50 px-4 py-1.5 text-body font-mono font-bold text-primary-800">
                      {content.curriculumContext.courseCode}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-small text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Grade:</strong> {content.curriculumContext.gradeLevel}
                  </p>
                  {content.curriculumContext.prerequisite && (
                    <p>
                      <strong className="text-foreground">Prerequisite:</strong> {content.curriculumContext.prerequisite}
                    </p>
                  )}
                  <p>
                    <strong className="text-foreground">Standard:</strong> {content.curriculumContext.ministryFramework}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:gap-6">
                  {content.curriculumContext.topics.map((t, index) => (
                    <div
                      key={t.unit}
                      className="rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-accent-300 hover:shadow-card"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-100 text-caption font-bold text-accent-800">
                          {index + 1}
                        </span>
                        <h3 className="text-h3 font-bold text-foreground">{t.title}</h3>
                      </div>
                      <p className="mt-1 text-caption font-semibold text-accent-700">{t.unit}</p>
                      <p className="mt-3 text-body text-muted-foreground">{t.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* COMMON STRUGGLES & TUTORING APPROACH */}
        <section className="py-14 sm:py-20 border-t border-border/60 bg-muted/25">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Struggles */}
              <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-xs">
                <span className="inline-flex items-center gap-2 text-caption font-bold uppercase tracking-wider text-rose-600">
                  <AlertCircle className="h-4 w-4" />
                  {content.commonStruggles.eyebrow}
                </span>
                <h2 className="mt-2 text-h3 font-bold text-foreground">
                  {content.commonStruggles.title}
                </h2>
                <p className="mt-3 text-small text-muted-foreground">
                  {content.commonStruggles.description}
                </p>

                <div className="mt-6 space-y-5">
                  {content.commonStruggles.points.map((pt) => (
                    <div key={pt.title} className="border-l-2 border-rose-300 pl-4">
                      <h4 className="text-body font-bold text-foreground">{pt.title}</h4>
                      <p className="mt-1 text-small text-muted-foreground">{pt.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tutoring Approach */}
              <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-xs">
                <span className="inline-flex items-center gap-2 text-caption font-bold uppercase tracking-wider text-emerald-600">
                  <Sparkles className="h-4 w-4" />
                  {content.tutoringApproach.eyebrow}
                </span>
                <h2 className="mt-2 text-h3 font-bold text-foreground">
                  {content.tutoringApproach.title}
                </h2>
                <p className="mt-3 text-small text-muted-foreground">
                  {content.tutoringApproach.description}
                </p>

                <div className="mt-6 space-y-5">
                  {content.tutoringApproach.features.map((feat) => (
                    <div key={feat.title} className="border-l-2 border-emerald-400 pl-4">
                      <h4 className="text-body font-bold text-foreground">{feat.title}</h4>
                      <p className="mt-1 text-small text-muted-foreground">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* LEARNING OUTCOMES */}
        <section className="py-14 sm:py-20 border-t border-border/60">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-caption font-bold uppercase tracking-wider text-primary">
                {content.outcomes.eyebrow}
              </span>
              <h2 className="mt-2 text-h2 font-bold text-foreground">
                {content.outcomes.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-body text-muted-foreground">
                {content.outcomes.description}
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {content.outcomes.items.map((outcome) => (
                <div
                  key={outcome.category}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent-700 shrink-0" />
                    <h3 className="text-body font-bold text-foreground">{outcome.category}</h3>
                  </div>
                  <p className="mt-3 text-small text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ SECTION */}
        <section className="py-14 sm:py-20 border-t border-border/60 bg-muted/20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <span className="text-caption font-bold uppercase tracking-wider text-primary">
                  Frequently Asked Questions
                </span>
                <h2 className="mt-2 text-h2 font-bold text-foreground">
                  Questions About This Program
                </h2>
              </div>

              <div className="mt-8">
                <InternalFaq items={content.faqs} />
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 border-t border-border/60">
          <Container>
            <InternalCta
              eyebrow="Start With Confidence"
              title={`Begin Personalized Tutoring in ${content.hero.title.replace('Online ', '').split(':')[0]}`}
              description="Connect with our academic coordinator to arrange a diagnostic assessment and match an expert 1-on-1 mentor."
              primaryAction={{
                label: 'Book a Free Trial Session',
                href: bookingHref,
              }}
              secondaryAction={{
                label: 'Inquire on WhatsApp',
                href: '/contact',
              }}
            />
          </Container>
        </section>

        {/* RELATED LINKS */}
        {content.relatedLinks.length > 0 && (
          <section className="py-12 border-t border-border/60 bg-muted/30">
            <Container>
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-body font-bold text-foreground">Related Curriculum & Subjects</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {content.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent-300 hover:shadow-xs"
                  >
                    <p className="text-small font-bold text-foreground group-hover:text-primary">
                      {link.title}
                    </p>
                    <p className="mt-1 text-caption text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>
    </InternalPageShell>
  );
}
