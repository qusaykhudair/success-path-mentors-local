
// Server Component

import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck2,
  GraduationCap,
  MessageCircle,
  Star,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Reveal } from '@/components/motion/reveal';
import {
  ButtonLink,
} from '@/components/ui/button';
import { Container } from '@/components/ui/container';

import { EnrollmentCard } from './enrollment-card';
import { StatCounter } from './stat-counter';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface HeroProps {
  secondaryCtaTarget?: string;
}

const WHATSAPP_NUMBER = '16477875999';

const STAT_ICONS: LucideIcon[] = [
  UsersRound,
  CalendarCheck2,
  GraduationCap,
];

export async function Hero({
  secondaryCtaTarget = 'programs',
}: HeroProps = {}) {
  const t = await getTranslations('hero');

  const stats = t.raw('stats') as Stat[];

  const ratingValue = t('rating.value');
  const ratingCount = t('rating.count');

  const whatsappMessage = encodeURIComponent(
    t('whatsappBookingMessage')
  );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

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
      {/* Decorative background */}
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
        {/* Content column */}
        <div className="order-1 max-w-xl">
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
              <BookOpenCheck
                className="h-4 w-4 shrink-0"
                strokeWidth={1.8}
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
            >
              {t('subheading')}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.15}>
            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <ButtonLink
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                size="lg"
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  sm:w-auto
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-sheen
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                    motion-reduce:hidden
                  "
                />

                <MessageCircle
                  className="relative h-5 w-5 shrink-0"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />

                <span className="relative">
                  {t('ctaPrimary')}
                </span>
              </ButtonLink>

              <ButtonLink
                href={`#${secondaryCtaTarget}`}
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  {t('ctaSecondary')}

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      rtl:-scale-x-100
                      rtl:group-hover:-translate-x-0.5
                      motion-reduce:transition-none
                    "
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </span>
              </ButtonLink>
            </div>
          </Reveal>

          {/* Rating */}
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
                <div
                  className="flex items-center gap-0.5"
                  role="img"
                  aria-label={`${ratingValue} / 5`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="
                        h-4
                        w-4
                        fill-warning-500
                        text-warning-500
                      "
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <span className="text-body font-bold text-foreground">
                  {ratingValue}
                </span>
              </div>

              <p className="text-small text-muted-foreground">
                {ratingCount}
              </p>
            </div>
          </Reveal>

          {/* Statistics */}
          <dl
            className="
              mt-9
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {stats.map((stat, index) => {
              const StatIcon =
                STAT_ICONS[index] ?? GraduationCap;

              return (
                <Reveal
                  key={stat.label}
                  delay={0.25 + index * 0.05}
                >
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
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -end-6
                        -top-6
                        h-20
                        w-20
                        rounded-full
                        bg-accent-300/0
                        blur-2xl
                        transition-colors
                        duration-300
                        group-hover:bg-accent-300/35
                      "
                    />

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
                    >
                      <StatIcon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="relative">
                      <dt
                        className="
                          text-small
                          leading-snug
                          text-muted-foreground
                        "
                      >
                        {stat.label}
                      </dt>

                      <dd
                        className="
                          mt-1
                          text-h3
                          font-bold
                          text-foreground
                        "
                      >
                        <StatCounter
                          end={stat.value}
                          suffix={stat.suffix}
                        />
                      </dd>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>

        {/* Enrollment card */}
        <div
          className="
            relative
            order-2
            mx-auto
            w-full
            max-w-md
            overflow-visible
            lg:max-w-none
          "
        >
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
                placeholders: t.raw(
                  'enrollment.placeholders'
                ),
                errors: t.raw('enrollment.errors'),
                countries: t.raw('enrollment.countries'),
                subjectOptions: t.raw(
                  'enrollment.subjectOptions'
                ),
                languages: t.raw('enrollment.languages'),
              }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}