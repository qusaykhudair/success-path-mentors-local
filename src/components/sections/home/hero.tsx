
// Server Component

import {
  ArrowRight,
  BookOpenCheck,
  MessageCircle,
} from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';

import {
  ButtonLink,
} from '@/components/ui/button';
import { Container } from '@/components/ui/container';

import { EnrollmentCard } from './enrollment-card';

import { buildTrialLessonMessage, buildWhatsAppHref } from '@/lib/whatsapp';

interface HeroProps {
  secondaryCtaTarget?: string;
}

export async function Hero({
  secondaryCtaTarget = 'programs',
}: HeroProps = {}) {
  const t = await getTranslations('hero');
  const locale = (await getLocale()) === 'ar' ? 'ar' : 'en';

  const whatsappHref = buildWhatsAppHref(
    buildTrialLessonMessage(locale)
  );

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
          hidden
          h-96
          w-96
          rounded-full
          bg-accent-200/40
          blur-3xl
          sm:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -start-32
          hidden
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-primary-200/45
          blur-3xl
          sm:block
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

          {/* CTAs */}
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
        </div>
      </Container>
    </section>
  );
}
