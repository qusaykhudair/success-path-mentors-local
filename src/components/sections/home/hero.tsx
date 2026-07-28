// components/sections/hero.tsx  — Server Component
import { getTranslations } from 'next-intl/server';
import { ButtonLink } from '../../ui/button';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';
import { StatCounter } from './stat-counter';
import { EnrollmentCard } from './enrollment-card';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface HeroProps {
  secondaryCtaTarget?: string;
}

const STAT_ICONS = [
  <path key="cap" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
  <path key="book" strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
  <path key="trophy" strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35" />,
];

export async function Hero({ secondaryCtaTarget = 'programs' }: HeroProps = {}) {
  const t = await getTranslations('hero');
  const stats = t.raw('stats') as Stat[];


  const ratingValue = t('rating.value');
  const ratingCount = t('rating.count');

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
<section
  aria-labelledby="hero-heading"
  className="
    relative
    isolate
    overflow-hidden
    bg-hero
  "
>   
      <script
        type="application/ld+json"
   
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      {/* Decorative layered background */}
     <div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-0
    bg-mesh
  "
/>

<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -end-32
    -top-32
    h-96
    w-96
    rounded-full
    bg-accent-200/40
    blur-3xl
  "
/>

<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -bottom-40
    -start-32
    h-[28rem]
    w-[28rem]
    rounded-full
    bg-primary-200/45
    blur-3xl
  "
/>
<Container
  className="
    relative
    grid
    min-h-hero
    items-center
    gap-12
    py-14
    sm:py-16
    lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]
    lg:gap-16
    lg:py-20
    xl:gap-20
  "
>
        {/* ---------- Content column ---------- */}
        {/* order-1 on mobile so text appears first; back to its normal side on lg */}
        <div className="order-1 max-w-xl lg:order-1">
          <Reveal>
<p
  className="
    mb-5
    inline-flex
    min-h-9
    items-center
    gap-2
    rounded-full
    border
    border-accent-200
    bg-accent-50/85
    px-4
    py-1.5
    text-small
    font-bold
    text-accent-800
    shadow-xs
    backdrop-blur-sm
  "
>
<span
  className="
    h-2
    w-2
    rounded-full
    bg-accent
    shadow-[0_0_0_4px_rgba(22,199,199,0.14)]
  "
  aria-hidden="true"
/>
              {t('eyebrow')}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
          <h1
  id="hero-heading"
  className="
    max-w-[18ch]
    text-h1
    text-foreground
  "
>
              {t.rich('heading', {
                mark: (chunks) => (
<span
  className="
    bg-gradient-to-r
    from-primary
    via-primary-700
    to-accent-700
    bg-clip-text
    text-transparent
  "
>
                  {chunks}
                  </span>
                ),
              })}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
        <p
  className="
    mt-6
    max-w-content
    text-lead
    text-muted-foreground
  "
>{t('subheading')}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="https://wa.me/16477875999"
                size="lg"
                className="group relative w-full overflow-hidden bg-gradient-to-r from-accent-600 to-accent-500 font-semibold shadow-lg shadow-accent-600/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-600/40 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 active:translate-y-0 active:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto text-white"
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden " />
                <span className="relative">{t('ctaPrimary')}</span>
              </ButtonLink>

          <ButtonLink
  href={`#${secondaryCtaTarget}`}
  variant="outline"
  size="lg"
  className="group w-full sm:w-auto"
>
  <span className="inline-flex items-center gap-2">
    {t('ctaSecondary')}

    <svg
      viewBox="0 0 20 20"
      className="
        h-4
        w-4
        shrink-0
        fill-current
        transition-transform
        duration-200
        group-hover:translate-x-0.5
        rtl:-scale-x-100
        rtl:group-hover:-translate-x-0.5
        motion-reduce:transition-none
      "
      aria-hidden="true"
    >
      <path d="M11 4.5 16.5 10 11 15.5 9.9 14.4l3.3-3.4H3.5v-2h9.7L9.9 5.6 11 4.5Z" />
    </svg>
  </span>
</ButtonLink>
            </div>
          </Reveal>

          {/* Social proof — rating + reviews */}
          <Reveal delay={0.2}>
            <div
  className="
    mt-8
    flex
    flex-wrap
    items-center
    gap-x-3
    gap-y-2
  "
>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-warning-500">
                      <path d="M10 1.5 12.4 7l6 .5-4.5 4 1.4 5.9L10 14.5l-5.3 2.9L6.1 11.5l-4.5-4 6-.5L10 1.5Z" />
                    </svg>
                  ))}
                </div>
               <span className="text-body font-bold text-foreground">{ratingValue}</span>
              </div>
              <p className="text-small text-muted-foreground">{ratingCount}</p>
            </div>
          </Reveal>

          {/* Stat cards */}
<dl
  className="
    mt-9
    grid
    grid-cols-1
    gap-3
    sm:grid-cols-3
  "
>            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.25 + i * 0.05}>
<div
  className="
    group
    relative
    flex
    h-full
    items-center
    gap-3
    overflow-hidden
    rounded-card
    border
    border-border
    bg-card/85
    p-4
    text-card-foreground
    shadow-card
    backdrop-blur-sm
    transition-[transform,box-shadow,border-color]
    duration-300
    hover:-translate-y-1
    hover:border-accent-300
    hover:shadow-card-hover
    motion-reduce:transition-none
    motion-reduce:hover:translate-y-0
    sm:flex-col
    sm:items-start
  "
>
                    <span aria-hidden="true" className="pointer-events-none absolute -end-6 -top-6 h-20 w-20 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 ease-out group-hover:bg-accent-300/40" />
<span
  className="
    relative
    flex
    h-11
    w-11
    shrink-0
    items-center
    justify-center
    rounded-xl
    bg-accent-50
    text-accent-700
    transition-[transform,background-color,color]
    duration-300
    group-hover:scale-105
    group-hover:bg-accent
    group-hover:text-accent-foreground
    motion-reduce:transition-none
  "
>                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 sm:h-[1.35rem] sm:w-[1.35rem]" aria-hidden="true">
                      {STAT_ICONS[i % STAT_ICONS.length]}
                    </svg>
                  </span>
                  <div className="relative">
                    <dt className="text-small leading-snug text-muted-foreground">{stat.label}</dt>
                    <dd className="mt-1 text-h3 font-bold text-foreground">
                      <StatCounter end={stat.value} suffix={stat.suffix} />
                     
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* ---------- Interactive enrollment card column ---------- */}
        {/* order-2 on mobile so the form sits below the text; back to the right on lg */}
        <div className="relative order-2 mx-auto w-full max-w-md overflow-visible lg:order-2 lg:max-w-none">
          <Reveal delay={0.1}>
            <EnrollmentCard
              copy={{
                title: t('enrollment.title'),
                reassurance: t('enrollment.reassurance'),
                next: t('enrollment.next'),
                back: t('enrollment.back'),
                submit: t('enrollment.submit'),
                submitting: t('enrollment.submitting'),
                successTitle: t('enrollment.successTitle'),
                successBody: t('enrollment.successBody'),
                stepOf: t('enrollment.stepOf'),
                labels: t.raw('enrollment.labels'),
                placeholders: t.raw('enrollment.placeholders'),
                errors: t.raw('enrollment.errors'),
                countries: t.raw('enrollment.countries'),
                subjectOptions: t.raw('enrollment.subjectOptions'),
                languages: t.raw('enrollment.languages'),
              }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}