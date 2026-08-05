// src/components/sections/home/final-cta.tsx
// Server Component

import { getLocale, getTranslations } from 'next-intl/server';

import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Sparkles,
  UserRoundCheck,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { buttonVariants } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { buildGeneralInquiryMessage, buildWhatsAppHref } from '@/lib/whatsapp';


const TRUST_ICONS: LucideIcon[] = [
  BookOpenCheck,
  UserRoundCheck,
  CalendarCheck2,
];

const NEXT_STEP_ICONS: LucideIcon[] = [
  MessageCircle,
  ClipboardCheck,
  CheckCircle2,
];

export async function FinalCta() {
  const t = await getTranslations('finalCta');
  const locale = (await getLocale()) === 'ar' ? 'ar' : 'en';

  const trustPoints = t.raw(
    'trustPoints'
  ) as string[];

  const nextSteps = t.raw(
    'nextSteps'
  ) as Array<{
    title: string;
    description: string;
  }>;

  const headingId = 'final-cta-heading';

  const whatsappHref = buildWhatsAppHref(
    buildGeneralInquiryMessage(locale, locale === 'ar' ? 'مطابقة المدرس والتسجيل' : 'Tutor matching and enrollment')
  );

  return (
    <Section
      id="final-cta"
      tone="background"
      spacing="md"
      aria-labelledby={headingId}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      <Reveal>
        <div
          className="
            relative
            isolate
            overflow-hidden
            rounded-[2rem]
            border
            border-primary-800/30
            bg-brand-dark
            px-6
            py-8
            text-white
            shadow-2xl
            sm:px-8
            sm:py-10
            lg:px-12
            lg:py-14
            xl:px-16
          "
        >
          {/* Background decorations */}
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
                -end-32
                -top-32
                h-[26rem]
                w-[26rem]
                rounded-full
                bg-accent/20
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-40
                -start-28
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-primary-400/25
                blur-3xl
              "
            />

            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
                [background-image:radial-gradient(white_1px,transparent_1px)]
                [background-size:28px_28px]
              "
            />

            <div
              className="
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-accent-300/70
                to-transparent
                rtl:bg-gradient-to-l
              "
            />
          </div>

          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]
              lg:gap-14
              xl:gap-20
            "
          >
            {/* Main conversion message */}
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
                  backdrop-blur-sm
                "
              >
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />

                {t('eyebrow')}
              </span>

              <h2
                id={headingId}
                className="
                  mt-7
                  max-w-3xl
                  text-h1
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                {t('heading')}
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-body
                  leading-relaxed
                  text-white/70
                  sm:text-lead
                "
              >
                {t('description')}
              </p>

              {/* Trust points */}
              {Array.isArray(trustPoints) &&
                trustPoints.length > 0 && (
                  <ul
                    className="
                      mt-8
                      grid
                      gap-3
                      sm:grid-cols-3
                    "
                  >
                    {trustPoints
                      .slice(0, 3)
                      .map((point, index) => {
                        const Icon =
                          TRUST_ICONS[index] ??
                          CheckCircle2;

                        return (
                          <li
                            key={point}
                            className="
                              flex
                              items-start
                              gap-3
                              rounded-xl
                              border
                              border-white/10
                              bg-white/5
                              p-3.5
                              text-small
                              leading-relaxed
                              text-white/80
                              backdrop-blur-sm
                            "
                          >
                            <Icon
                              className="
                                mt-0.5
                                h-5
                                w-5
                                shrink-0
                                text-accent-300
                              "
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />

                            <span>{point}</span>
                          </li>
                        );
                      })}
                  </ul>
                )}

              {/* CTAs */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-center
                "
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: 'accent',
                    size: 'lg',
                    className: `
                      group
                      w-full
                      justify-center
                      font-bold
                      !text-accent-foreground
                      hover:!text-accent-foreground
                      sm:w-auto
                    `,
                  })}
                >
                  <MessageCircle
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-current
                    "
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  <span className="text-current">
                    {t('primaryCta')}
                  </span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-current
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

              <a
  href="#pricing"
  className="
    group
    inline-flex
    min-h-button
    w-full
    items-center
    justify-center
    gap-2
    rounded-button
    border
    border-white/20
    bg-white/5
    px-6
    py-3
    text-body
    font-bold
    !text-white
    backdrop-blur-sm
    transition-[background-color,border-color,transform]
    duration-200
    hover:-translate-y-0.5
    hover:border-white/30
    hover:bg-white/10
    hover:!text-white
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent
    focus-visible:ring-offset-2
    focus-visible:ring-offset-primary-950
    motion-reduce:transition-none
    motion-reduce:hover:translate-y-0
    sm:w-auto
  "
>
  <span className="text-current">
    {t('secondaryCta')}
  </span>

  <ArrowRight
    className="
      h-4
      w-4
      text-current
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
              </div>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-caption
                  leading-relaxed
                  text-white/45
                "
              >
                {t('reassurance')}
              </p>
            </div>

            {/* What happens next card */}
            <Reveal delay={0.1}>
              <aside
                className="
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/15
                  bg-white/[0.07]
                  p-5
                  shadow-xl
                  backdrop-blur-md
                  sm:p-6
                  lg:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -end-16
                    -top-16
                    h-48
                    w-48
                    rounded-full
                    bg-accent/15
                    blur-3xl
                  "
                />

                <div className="relative">
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-accent
                        text-accent-foreground
                        shadow-lg
                      "
                    >
                      <ClipboardCheck
                        className="h-6 w-6"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p
                        className="
                          text-caption
                          font-bold
                          uppercase
                          tracking-wider
                          text-accent-200
                        "
                      >
                        {t('panelEyebrow')}
                      </p>

                      <h3
                        className="
                          mt-1
                          text-h4
                          font-bold
                          text-white
                        "
                      >
                        {t('panelTitle')}
                      </h3>
                    </div>
                  </div>

                  <ol
                    className="
                      relative
                      mt-7
                      grid
                      gap-4
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-8
                        start-[1.1rem]
                        top-8
                        w-px
                        bg-gradient-to-b
                        from-accent
                        via-accent-300/50
                        to-transparent
                      "
                    />

                    {Array.isArray(nextSteps) &&
                      nextSteps
                        .slice(0, 3)
                        .map((step, index) => {
                          const Icon =
                            NEXT_STEP_ICONS[index] ??
                            Check;

                          return (
                            <li
                              key={step.title}
                              className="
                                relative
                                flex
                                items-start
                                gap-4
                              "
                            >
                              <span
                                className="
                                  relative
                                  z-10
                                  flex
                                  h-9
                                  w-9
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-accent-300/30
                                  bg-primary-900
                                  text-accent-300
                                  shadow-md
                                "
                              >
                                <Icon
                                  className="h-4 w-4"
                                  strokeWidth={1.9}
                                  aria-hidden="true"
                                />
                              </span>

                              <div
                                className="
                                  min-w-0
                                  flex-1
                                  rounded-xl
                                  border
                                  border-white/10
                                  bg-white/5
                                  p-4
                                "
                              >
                                <div
                                  className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-3
                                  "
                                >
                                  <h4
                                    className="
                                      text-small
                                      font-bold
                                      text-white
                                    "
                                  >
                                    {step.title}
                                  </h4>

                                  <span
                                    aria-hidden="true"
                                    className="
                                      shrink-0
                                      text-caption
                                      font-black
                                      text-white/25
                                    "
                                  >
                                    {String(index + 1).padStart(
                                      2,
                                      '0'
                                    )}
                                  </span>
                                </div>

                                <p
                                  className="
                                    mt-2
                                    text-caption
                                    leading-relaxed
                                    text-white/55
                                  "
                                >
                                  {step.description}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                  </ol>

                  <div
                    className="
                      mt-6
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-accent-300/20
                      bg-accent/10
                      p-4
                    "
                  >
                    <Check
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-accent-300
                      "
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />

                    <p
                      className="
                        text-caption
                        leading-relaxed
                        text-white/70
                      "
                    >
                      {t('panelNote')}
                    </p>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </Section>
  );

}