// src/components/sections/home/pricing.tsx
// Server Component

import {
  getLocale,
  getTranslations,
} from 'next-intl/server';

import {
  ArrowRight,
  CalendarCheck2,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { buttonVariants } from '@/components/ui/button';

import {
  Section,
  SectionHeading,
} from '@/components/ui/section';

import { cn } from '@/lib/utils';

interface Plan {
  name: string;
  description: string;
  lessons: number;
  price: number;
  features: string[];
  recommended?: boolean;
}

const WHATSAPP_NUMBER = '16477875999';

export async function Pricing() {
  const t = await getTranslations('pricing');
  const locale = await getLocale();

  const plans = t.raw('plans') as Plan[];
  const highlights = t.raw('highlights') as string[];

  const headingId = 'pricing-heading';

  if (!Array.isArray(plans) || plans.length === 0) {
    return null;
  }

  const numberLocale =
    locale === 'ar' ? 'ar-CA' : 'en-CA';

  const currency = new Intl.NumberFormat(
    numberLocale,
    {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  );

  function whatsappHref(plan: Plan): string {
    const message = t('whatsappMessage', {
      plan: plan.name,
      lessons: plan.lessons,
    });

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  }

  return (
    <Section
      id="pricing"
      tone="background"
      spacing="md"
      aria-labelledby={headingId}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -end-40
            top-10
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-accent-100/50
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -start-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-primary-100/50
            blur-3xl
          "
        />
      </div>

      <SectionHeading
        align="center"
        eyebrow={t('eyebrow')}
        heading={
          <span id={headingId}>
            {t('heading')}
          </span>
        }
        subheading={t('subheading')}
        className="
          mx-auto
          max-w-3xl
          text-center
        "
      />

      {/* Shared package highlights */}
      {Array.isArray(highlights) &&
        highlights.length > 0 && (
          <Reveal>
            <div
              className="
                mx-auto
                mt-9
                grid
                max-w-4xl
                gap-3
                rounded-[1.25rem]
                border
                border-border
                bg-surface-sunken
                p-4
                shadow-sm
                sm:grid-cols-3
              "
            >
              {highlights
                .slice(0, 3)
                .map((highlight, index) => {
                  const icons = [
                    CalendarCheck2,
                    Clock3,
                    ShieldCheck,
                  ];

                  const Icon =
                    icons[index] ?? Check;

                  return (
                    <div
                      key={highlight}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2.5
                        rounded-xl
                        px-3
                        py-2.5
                        text-center
                        text-small
                        font-semibold
                        text-foreground
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                          shrink-0
                          text-accent-700
                        "
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                      {highlight}
                    </div>
                  );
                })}
            </div>
          </Reveal>
        )}

      {/* Pricing cards */}
      <div
        className="
          mx-auto
          mt-12
          grid
          max-w-6xl
          items-stretch
          gap-6
          lg:grid-cols-3
        "
      >
        {plans.map((plan, index) => {
          const recommended =
            plan.recommended === true;

          const pricePerLesson =
            plan.lessons > 0
              ? plan.price / plan.lessons
              : 0;

          return (
            <Reveal
              key={`${plan.name}-${plan.lessons}`}
              delay={Math.min(index * 0.07, 0.2)}
              className="h-full"
            >
              <article
                className={cn(
                  `
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    p-6
                    transition-[transform,border-color,box-shadow]
                    duration-300
                    hover:-translate-y-1
                    motion-reduce:transition-none
                    motion-reduce:hover:translate-y-0
                    sm:p-7
                  `,
                  recommended
                    ? `
                        border-primary-800/30
                        bg-brand-dark
                        text-white
                        shadow-2xl
                        lg:-translate-y-3
                        lg:hover:-translate-y-4
                      `
                    : `
                        border-border
                        bg-card
                        text-card-foreground
                        shadow-card
                        hover:border-accent-300
                        hover:shadow-card-hover
                      `
                )}
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className={cn(
                    `
                      pointer-events-none
                      absolute
                      -end-20
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      blur-3xl
                    `,
                    recommended
                      ? 'bg-accent/20'
                      : `
                          bg-accent-100/0
                          transition-colors
                          duration-300
                          group-hover:bg-accent-100/65
                        `
                  )}
                />

                <div className="relative">
                  <div
                    className="
                      flex
                      min-h-9
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <span
                      className={cn(
                        `
                          inline-flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                        `,
                        recommended
                          ? `
                              bg-white/10
                              text-accent-300
                            `
                          : `
                              bg-accent-50
                              text-accent-700
                            `
                      )}
                    >
                      <WalletCards
                        className="h-6 w-6"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    {recommended && (
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-accent-300/30
                          bg-accent/15
                          px-3
                          py-1.5
                          text-caption
                          font-bold
                          text-accent-200
                        "
                      >
                        <Sparkles
                          className="h-3.5 w-3.5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />

                        {t('recommendedBadge')}
                      </span>
                    )}
                  </div>

                  <p
                    className={cn(
                      `
                        mt-6
                        text-caption
                        font-bold
                        uppercase
                        tracking-wider
                      `,
                      recommended
                        ? 'text-accent-300'
                        : 'text-accent-700'
                    )}
                  >
                    {t('packageLabel', {
                      lessons: plan.lessons,
                    })}
                  </p>

                  <h3
                    className={cn(
                      `
                        mt-2
                        text-h3
                        font-bold
                      `,
                      recommended
                        ? 'text-white'
                        : 'text-foreground'
                    )}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={cn(
                      `
                        mt-3
                        min-h-[3.5rem]
                        text-small
                        leading-relaxed
                      `,
                      recommended
                        ? 'text-white/65'
                        : 'text-muted-foreground'
                    )}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-7">
                    <div
                      className="
                        flex
                        flex-wrap
                        items-end
                        gap-x-2
                        gap-y-1
                      "
                    >
                      <span
                        className={cn(
                          `
                            text-5xl
                            font-black
                            tracking-tight
                          `,
                          recommended
                            ? 'text-white'
                            : 'text-primary-950'
                        )}
                      >
                        {currency.format(plan.price)}
                      </span>

                      <span
                        className={cn(
                          `
                            pb-1
                            text-small
                            font-semibold
                          `,
                          recommended
                            ? 'text-white/55'
                            : 'text-muted-foreground'
                        )}
                      >
                        {t('packageTotal')}
                      </span>
                    </div>

                    <div
                      className={cn(
                        `
                          mt-4
                          flex
                          items-center
                          justify-between
                          gap-4
                          rounded-xl
                          border
                          px-4
                          py-3
                        `,
                        recommended
                          ? `
                              border-white/10
                              bg-white/5
                            `
                          : `
                              border-accent-100
                              bg-accent-50/65
                            `
                      )}
                    >
                      <div>
                        <p
                          className={cn(
                            `
                              text-caption
                              font-semibold
                            `,
                            recommended
                              ? 'text-white/55'
                              : 'text-muted-foreground'
                          )}
                        >
                          {t('pricePerLesson')}
                        </p>

                        <p
                          className={cn(
                            `
                              mt-0.5
                              text-body
                              font-bold
                            `,
                            recommended
                              ? 'text-white'
                              : 'text-foreground'
                          )}
                        >
                          {currency.format(
                            pricePerLesson
                          )}
                        </p>
                      </div>

                      <div
                        className={cn(
                          `
                            h-9
                            w-px
                          `,
                          recommended
                            ? 'bg-white/10'
                            : 'bg-accent-100'
                        )}
                        aria-hidden="true"
                      />

                      <div className="text-end">
                        <p
                          className={cn(
                            `
                              text-caption
                              font-semibold
                            `,
                            recommended
                              ? 'text-white/55'
                              : 'text-muted-foreground'
                          )}
                        >
                          {t('lessonCount')}
                        </p>

                        <p
                          className={cn(
                            `
                              mt-0.5
                              text-body
                              font-bold
                            `,
                            recommended
                              ? 'text-white'
                              : 'text-foreground'
                          )}
                        >
                          {plan.lessons}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className={cn(
                      `
                        my-7
                        h-px
                        w-full
                      `,
                      recommended
                        ? 'bg-white/10'
                        : 'bg-border'
                    )}
                  />

                  <p
                    className={cn(
                      `
                        text-small
                        font-bold
                      `,
                      recommended
                        ? 'text-white'
                        : 'text-foreground'
                    )}
                  >
                    {t('includes')}
                  </p>

                  <ul
                    className="
                      mt-4
                      grid
                      gap-3.5
                    "
                  >
                    {plan.features.map(
                      (feature) => (
                        <li
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-3
                            text-small
                            leading-relaxed
                          "
                        >
                          <span
                            className={cn(
                              `
                                mt-0.5
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                              `,
                              recommended
                                ? `
                                    bg-accent/20
                                    text-accent-300
                                  `
                                : `
                                    bg-accent-50
                                    text-accent-700
                                  `
                            )}
                          >
                            <Check
                              className="h-3.5 w-3.5"
                              strokeWidth={2.4}
                              aria-hidden="true"
                            />
                          </span>

                          <span
                            className={
                              recommended
                                ? 'text-white/75'
                                : 'text-muted-foreground'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="relative mt-auto pt-8">
              <a
  href={whatsappHref(plan)}
  target="_blank"
  rel="noopener noreferrer"
  className={buttonVariants({
    variant: recommended
      ? 'accent'
      : 'primary',
    size: 'lg',
    className: cn(
      `
        group/cta
        w-full
        justify-center
        font-bold
      `,
      !recommended &&
        `
          !text-white
          hover:!text-white
          active:!text-white
          visited:!text-white
        `
    ),
  })}
>
  

  <span className="text-current">
    {t('cta')}
  </span>

  <ArrowRight
    className="
      h-4
      w-4
      shrink-0
      text-current
      transition-transform
      duration-200
      group-hover/cta:translate-x-0.5
      rtl:-scale-x-100
      rtl:group-hover/cta:-translate-x-0.5
      motion-reduce:transition-none
    "
    strokeWidth={1.9}
    aria-hidden="true"
  />
</a>
                </div>

                <span
                  aria-hidden="true"
                  className={cn(
                    `
                      absolute
                      bottom-0
                      start-0
                      h-1
                      rounded-e-full
                      bg-gradient-to-r
                      from-accent
                      to-primary-500
                      rtl:bg-gradient-to-l
                    `,
                    recommended
                      ? 'w-32'
                      : `
                          w-0
                          transition-[width]
                          duration-500
                          group-hover:w-24
                          motion-reduce:transition-none
                        `
                  )}
                />
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Pricing information */}
      <Reveal delay={0.15}>
        <div
          className="
            mx-auto
            mt-9
            max-w-5xl
            rounded-[1.25rem]
            border
            border-border
            bg-surface-sunken
            p-5
            text-center
            sm:p-6
          "
        >
          <p
            className="
              text-small
              leading-relaxed
              text-muted-foreground
            "
          >
            {t('note')}
          </p>

          <p
            className="
              mt-2
              text-caption
              leading-relaxed
              text-muted-foreground
            "
          >
            {t('termsNote')}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}