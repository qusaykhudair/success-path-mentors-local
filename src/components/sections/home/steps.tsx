// src/components/sections/home/steps.tsx
// Server Component

import { getTranslations } from 'next-intl/server';
import {
  ArrowRight,
  ChartNoAxesCombined,
  Check,
  ClipboardCheck,
  MessageCircle,
  MessagesSquare,
  MonitorPlay,
  UserRoundSearch,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { buttonVariants } from '@/components/ui/button';
import {
  Section,
  SectionHeading,
} from '@/components/ui/section';


interface StepItem {
  number: number;
  title: string;
  description: string;
}

const STEP_ICONS: LucideIcon[] = [
  MessagesSquare,
  ClipboardCheck,
  UserRoundSearch,
  MonitorPlay,
  ChartNoAxesCombined,
];

const WHATSAPP_NUMBER = '16477875999';

export async function Steps() {
  const t = await getTranslations('steps');
  const items = t.raw('items') as StepItem[];

  const headingId = 'steps-heading';

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    t('whatsappMessage')
  );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <Section
      id="steps"
      tone="muted"
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
            top-16
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-accent-100/50
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -start-36
            bottom-0
            h-96
            w-96
            rounded-full
            bg-primary-100/55
            blur-3xl
          "
        />
      </div>

      <SectionHeading
        align="start"
        eyebrow={t('eyebrow')}
        heading={
          <span id={headingId}>
            {t('heading')}
          </span>
        }
        subheading={t('subheading')}
        className="
          mb-12
          max-w-3xl
          md:mb-14
        "
      />

      <div
        className="
          grid
          items-start
          gap-8
          lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]
          lg:gap-12
          xl:gap-16
        "
      >
        {/* ================================================
            Overview panel
            ================================================ */}

        <Reveal>
          <aside
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-primary-800/30
              bg-brand-dark
              p-6
              text-white
              shadow-xl
              sm:p-8
              lg:sticky
              lg:top-28
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -end-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-accent/20
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-28
                -start-20
                h-64
                w-64
                rounded-full
                bg-primary-400/20
                blur-3xl
              "
            />

            <div className="relative">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-3
                  py-1.5
                  text-caption
                  font-bold
                  text-accent-200
                "
              >
                <ClipboardCheck
                  className="h-4 w-4"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                {t('panelBadge')}
              </span>

              <h3
                className="
                  mt-7
                  text-h2
                  font-bold
                  text-white
                "
              >
                {t('panelTitle')}
              </h3>

              <p
                className="
                  mt-4
                  text-body
                  leading-relaxed
                  text-white/70
                "
              >
                {t('panelDescription')}
              </p>

              <ul
                className="
                  mt-7
                  grid
                  gap-3
                "
              >
                {(t.raw('benefits') as string[]).map(
                  (benefit) => (
                    <li
                      key={benefit}
                      className="
                        flex
                        items-start
                        gap-3
                        text-small
                        leading-relaxed
                        text-white/80
                      "
                    >
                      <span
                        className="
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-accent/15
                          text-accent-300
                        "
                      >
                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </span>

                      {benefit}
                    </li>
                  )
                )}
              </ul>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: 'accent',
                  size: 'lg',
                  className:
                    'group mt-8 w-full justify-center',
                })}
              >
                <MessageCircle
                  className="h-5 w-5 shrink-0"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />

                {t('cta')}

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
              </a>

              <p
                className="
                  mt-4
                  text-center
                  text-caption
                  text-white/50
                "
              >
                {t('ctaReassurance')}
              </p>
            </div>
          </aside>
        </Reveal>

        {/* ================================================
            Timeline
            ================================================ */}

        <ol
          aria-label={t('heading')}
          className="
            relative
            grid
            gap-5
          "
        >
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="
              absolute
              bottom-12
              start-6
              top-12
              w-px
              bg-gradient-to-b
              from-accent
              via-primary-300
              to-border
              sm:start-7
            "
          />

          {items.map((step, index) => {
            const Icon =
              STEP_ICONS[index] ??
              ChartNoAxesCombined;

            const displayNumber =
              step.number || index + 1;

            return (
              <li
                key={`${displayNumber}-${step.title}`}
                className="
                  relative
                  ps-16
                  sm:ps-[4.5rem]
                "
              >
                {/* Timeline node */}
                <Reveal delay={index * 0.05}>
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      start-0
                      top-6
                      z-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border-4
                      border-surface-sunken
                      bg-primary
                      text-white
                      shadow-md
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      strokeWidth={1.8}
                    />
                  </span>
                </Reveal>

                <Reveal delay={0.05 + index * 0.06}>
                  <article
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-card
                      border
                      border-border
                      bg-card
                      p-5
                      text-card-foreground
                      shadow-card
                      transition-[transform,border-color,box-shadow]
                      duration-300
                      hover:-translate-y-1
                      hover:border-accent-300
                      hover:shadow-card-hover
                      motion-reduce:transition-none
                      motion-reduce:hover:translate-y-0
                      sm:p-6
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -end-12
                        -top-12
                        h-32
                        w-32
                        rounded-full
                        bg-accent-100/0
                        blur-2xl
                        transition-colors
                        duration-300
                        group-hover:bg-accent-100/70
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        items-start
                        gap-4
                      "
                    >
                      {/* Icon with shared site hover */}
                      <span
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-accent-50
                          text-accent-700
                          transition-[transform,background-color,color,box-shadow]
                          duration-300
                          ease-out
                          group-hover:scale-105
                          group-hover:bg-accent
                          group-hover:text-accent-foreground
                          group-hover:shadow-button-accent
                          motion-reduce:transition-none
                          motion-reduce:group-hover:scale-100
                        "
                      >
                        <Icon
                          className="
                            h-6
                            w-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                            motion-reduce:transition-none
                            motion-reduce:group-hover:scale-100
                          "
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >
                          <h3
                            className="
                              text-h4
                              font-bold
                              text-foreground
                              transition-colors
                              duration-300
                              group-hover:text-primary-800
                            "
                          >
                            {step.title}
                          </h3>

                          <span
                            aria-hidden="true"
                            className="
                              shrink-0
                              text-caption
                              font-bold
                              tracking-wider
                              text-primary-200
                              transition-colors
                              duration-300
                              group-hover:text-accent-500
                            "
                          >
                            {String(displayNumber).padStart(
                              2,
                              '0'
                            )}
                          </span>
                        </div>

                        <p
                          className="
                            mt-3
                            text-small
                            leading-relaxed
                            text-muted-foreground
                          "
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-0
                        start-0
                        h-1
                        w-0
                        rounded-e-full
                        bg-gradient-to-r
                        from-accent
                        to-primary-500
                        transition-[width]
                        duration-500
                        group-hover:w-24
                        rtl:bg-gradient-to-l
                        motion-reduce:transition-none
                      "
                    />
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}