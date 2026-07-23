import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Reveal, FloatingCard } from '@/components/motion/reveal';
import { StatCounter } from './stat-counter';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface HeroProps {
  secondaryCtaTarget?: string;
}

// Clean stroke-based icon set (outline style, strokeWidth 1.5) — replaces the
// previous crude filled paths. Rendered with fill="none" + currentColor stroke.
const STAT_ICONS = [
  // academic cap
  <path
    key="cap"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
  />,
  // open book
  <path
    key="book"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
  />,
  // trophy
  <path
    key="trophy"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35"
  />,
];

export async function Hero({ secondaryCtaTarget = 'programs' }: HeroProps = {}) {
  const t = await getTranslations('hero');
  const stats = t.raw('stats') as Stat[];
  const primaryStat = stats[0];

  const socialProofCount = primaryStat ? `${primaryStat.value}${primaryStat.suffix}` : '500+';
  const ratingValue = t('rating.value');
  const ratingCount = t('rating.count');

  // AggregateRating structured data — the star rating is already shown visually,
  // this makes it eligible for rich results too.
  const ratingSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount: ratingCount.replace(/[^0-9]/g, '') || undefined,
    },
  };

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-primary-50">
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      {/* layered background: gradient field + dot grid, fully decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--tw-gradient-pos,85%_15%),theme(colors.accent.200/50),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(theme(colors.primary.400)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -start-24 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 xl:py-28 2xl:max-w-[1400px]">
        {/* ---------- Content column ---------- */}
        <div className="order-2 max-w-xl lg:order-1">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-small font-semibold text-accent-700 shadow-sm ring-1 ring-primary-100">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              {t('eyebrow')}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 id="hero-heading" className="text-h1 text-primary">
              {t.rich('heading', {
                mark: (chunks) => (
                  <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                    {chunks}
                  </span>
                ),
              })}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-body text-ink-secondary">{t('subheading')}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="/contact"
                size="lg"
                className="group relative w-full overflow-hidden bg-gradient-to-r from-accent-600 to-accent-500 font-semibold shadow-lg shadow-accent-600/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-600/40 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
                />
                <span className="relative">{t('ctaPrimary')}</span>
              </ButtonLink>

              <ButtonLink
                href={`#${secondaryCtaTarget}`}
                variant="outline"
                size="lg"
                className="group w-full border-2 border-primary-200 font-semibold text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-400 hover:bg-white hover:text-accent-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
              >
                <span className="inline-flex items-center gap-1.5">
                  {t('ctaSecondary')}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 shrink-0 fill-current transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M11 4.5 16.5 10 11 15.5 9.9 14.4l3.3-3.4H3.5v-2h9.7L9.9 5.6 11 4.5Z" />
                  </svg>
                </span>
              </ButtonLink>
            </div>
          </Reveal>

          <dl className="mt-10 grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.25 + i * 0.05}>
                <div className="group relative flex h-full flex-col items-start gap-2 overflow-hidden rounded-card bg-white/70 p-2.5 shadow-sm ring-1 ring-primary-100 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-accent-500/15 hover:ring-accent-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:gap-3 sm:p-4">
                  {/* soft ambient glow, only visible on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -end-6 -top-6 h-20 w-20 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 ease-out group-hover:bg-accent-300/40"
                  />

                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 transition-colors duration-300 ease-out group-hover:bg-accent-600 group-hover:text-white sm:h-11 sm:w-11">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 sm:h-[1.35rem] sm:w-[1.35rem]"
                      aria-hidden="true"
                    >
                      {STAT_ICONS[i % STAT_ICONS.length]}
                    </svg>
                  </span>

                  <div className="relative">
                    <dt className="text-[11px] leading-tight text-ink-secondary sm:text-small">{stat.label}</dt>
                    <dd className="text-base font-extrabold text-primary sm:text-h3 sm:text-h2">
                      {/* Real value is server-rendered so crawlers and no-JS users see
                          the actual number; StatCounter only owns the count-up animation. */}
                      <StatCounter end={stat.value} suffix={stat.suffix} />
                      <noscript>
                        {stat.value}
                        {stat.suffix}
                      </noscript>
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* ---------- Visual column ---------- */}
        <div className="relative order-1 mx-auto w-full max-w-md overflow-visible px-3 lg:order-2 lg:max-w-none lg:px-6">
          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-y-4 rounded-[2rem] bg-gradient-to-br from-accent-300 to-primary-300 opacity-40 blur-2xl"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-primary-900/5 sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/images/hero-placeholder.jpg"
                alt={t('imageAlt')}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-900/25 via-transparent to-transparent"
              />
            </div>
          </Reveal>

          {/* Signature floating cards */}
          <FloatingCard
            delay={0.5}
            className="absolute -top-3 end-0 max-w-[10.5rem] rounded-card bg-white p-3 shadow-lg ring-1 ring-primary-100 motion-reduce:transition-none sm:-top-5 sm:end-2 sm:max-w-[12rem] sm:p-4"
          >
            <div
              className="flex flex-col gap-1"
              role="img"
            >
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-accent-500">
                    <path d="M10 1.5 12.4 7l6 .5-4.5 4 1.4 5.9L10 14.5l-5.3 2.9L6.1 11.5l-4.5-4 6-.5L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <p className="text-h3 font-extrabold text-primary" aria-hidden="true">
                {ratingValue}
              </p>
              <p className="text-[11px] text-ink-secondary" aria-hidden="true">
                {ratingCount}
              </p>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={0.65}
            className="absolute -bottom-4 start-0 max-w-[11rem] rounded-card bg-white p-3 shadow-lg ring-1 ring-primary-100 motion-reduce:transition-none sm:-bottom-6 sm:start-2 sm:max-w-[13rem] sm:p-4"
          >
            <p className="text-h3 font-extrabold text-primary">
              <StatCounter end={95} suffix="%" />
              <noscript>95%</noscript>
            </p>
            <p className="text-[11px] text-ink-secondary">{t('achievement.label')}</p>
          </FloatingCard>
        </div>
      </Container>
    </section>
  );
}