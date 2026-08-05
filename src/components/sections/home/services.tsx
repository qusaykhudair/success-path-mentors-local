// src/components/sections/home/services.tsx
// Server Component

import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import {
  BrainCircuit,
  BadgeCheck,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  LineChart,
  MessageCircle,
  Target,
  UserRoundCheck,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { buttonVariants } from '@/components/ui/button';
import {
  Section,
  SectionHeading,
} from '@/components/ui/section';
import { cn } from '@/lib/utils';

import { buildGeneralInquiryMessage, buildWhatsAppHref } from '@/lib/whatsapp';

interface ServiceItem {
  title: string;
  description: string;
}

const SERVICE_ICONS: LucideIcon[] = [
  UserRoundCheck,
  BookOpenCheck,
  LineChart,
  ClipboardCheck,
  Target,
  CalendarClock,
  BrainCircuit,
];


export async function Services() {
  const t = await getTranslations('services');
  const locale = (await getLocale()) === 'ar' ? 'ar' : 'en';
  const items = t.raw('items') as ServiceItem[];

  const headingId = 'services-heading';

  const whatsappHref = buildWhatsAppHref(
    buildGeneralInquiryMessage(locale, locale === 'ar' ? 'خدمات التدريس' : 'Tutoring services')
  );

  return (
    <Section
      id="services"
      tone="background"
      spacing="md"
      aria-labelledby={headingId}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      {/* Subtle section background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-background
          via-surface-sunken/65
          to-background
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -end-40
          top-20
          -z-10
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-accent-100/45
          blur-3xl
        "
      />

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
          items-stretch
          gap-8
          lg:grid-cols-[minmax(340px,0.88fr)_minmax(0,1.12fr)]
          lg:gap-10
          xl:gap-14
        "
      >
        {/* ==================================================
            Premium image panel
            ================================================== */}

        <Reveal>
          <div
            className="
              relative
              h-full
              min-h-[540px]
              overflow-hidden
              rounded-[1.75rem]
              border
              border-primary-800/15
              bg-primary-950
              shadow-xl
              lg:sticky
              lg:top-28
            "
          >
            <Image
              src="/images/services-showcase.webp"
              alt={t('imageAlt')}
              fill
              sizes="
                (min-width: 1280px) 460px,
                (min-width: 1024px) 40vw,
                92vw
              "
              className="
                object-cover
                object-center
              "
            />

            {/* Controlled overlays */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-primary-950/5
                via-primary-950/15
                to-primary-950/95
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-primary-950/35
                via-transparent
                to-transparent
                rtl:bg-gradient-to-l
              "
            />

            {/* Top badge */}
            <div
              className="
                absolute
                start-5
                top-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-primary-950/65
                px-3
                py-2
                text-caption
                font-bold
                text-white
                shadow-sm
                backdrop-blur-md
              "
            >
              <BadgeCheck
                className="h-4 w-4 text-accent-300"
                strokeWidth={1.8}
                aria-hidden="true"
              />

              {t('panelBadge')}
            </div>

            {/* Bottom content */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-5
                sm:p-7
              "
            >
              <div
                className="
                  rounded-card
                  border
                  border-white/15
                  bg-primary-950/72
                  p-5
                  text-white
                  shadow-lg
                  backdrop-blur-xl
                  sm:p-6
                "
              >
                <p
                  className="
                    text-h3
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  {t('panelTitle')}
                </p>

                <p
                  className="
                    mt-3
                    text-small
                    leading-relaxed
                    text-white/75
                  "
                >
                  {t('panelDescription')}
                </p>

                {/* Benefits */}
                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-accent/15
                        text-accent-300
                      "
                    >
                      <BadgeCheck
                        className="h-4 w-4"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p
                        className="
                          text-small
                          font-bold
                          text-white
                        "
                      >
                        {t('float.satisfaction.value')}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-caption
                          text-white/60
                        "
                      >
                        {t('float.satisfaction.label')}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-accent/15
                        text-accent-300
                      "
                    >
                      <CalendarClock
                        className="h-4 w-4"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p
                        className="
                          text-small
                          font-bold
                          text-white
                        "
                      >
                        {t('float.flexible.value')}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-caption
                          text-white/60
                        "
                      >
                        {t('float.flexible.label')}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: 'accent',
                    size: 'lg',
                    className:
                      'mt-5 w-full justify-center',
                  })}
                >
                  <MessageCircle
                    className="h-5 w-5 shrink-0"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  {t('whatsappCta')}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ==================================================
            Services bento grid
            ================================================== */}

        <ol
          className="
            grid
            auto-rows-fr
            gap-4
            sm:grid-cols-2
            lg:gap-5
          "
        >
          {items.map((item, index) => {
            const Icon =
              SERVICE_ICONS[index] ?? UserRoundCheck;

            const isFeatured = index === 0;

            return (
              <li
                key={item.title}
                className={cn(
                  isFeatured && 'sm:col-span-2'
                )}
              >
                <Reveal
                  delay={Math.min(index * 0.05, 0.25)}
                  className="h-full"
                >
                  <article
                    className={cn(
                      `
                        group
                        relative
                        h-full
                        overflow-hidden
                        rounded-card
                        border
                        border-border
                        bg-card
                        text-card-foreground
                        shadow-card
                        transition-[transform,box-shadow,border-color]
                        duration-300
                        hover:-translate-y-1
                        hover:border-accent-300
                        hover:shadow-card-hover
                        motion-reduce:transition-none
                        motion-reduce:hover:translate-y-0
                      `,
                      isFeatured
                        ? 'p-6 sm:p-7'
                        : 'p-5 sm:p-6'
                    )}
                  >
                    {/* Decorative corner */}
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
                        group-hover:bg-accent-100/65
                      "
                    />

                    <div
                      className={cn(
                        `
                          relative
                          flex
                          h-full
                          gap-4
                        `,
                        isFeatured
                          ? `
                              flex-col
                              sm:flex-row
                              sm:items-center
                              sm:gap-6
                            `
                          : 'flex-col'
                      )}
                    >
                      <span
                        className={cn(
                          `
                            flex
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-accent-50
                            text-accent-700
                            transition-[background-color,color,transform]
                            duration-300
                            group-hover:scale-105
                            group-hover:bg-accent
                            group-hover:text-accent-foreground
                            motion-reduce:transition-none
                          `,
                          isFeatured
                            ? 'h-14 w-14'
                            : 'h-12 w-12'
                        )}
                      >
                        <Icon
                          className={cn(
                            isFeatured
                              ? 'h-7 w-7'
                              : 'h-6 w-6'
                          )}
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
  className={cn(
    `
      font-bold
      text-foreground
      transition-colors
      duration-300
      group-hover:text-primary-800
    `,
    isFeatured
      ? 'text-h3'
      : 'text-h4'
  )}
>
                            {item.title}
                          </h3>

                          <span
                            aria-hidden="true"
                            className="
                              shrink-0
                              font-bold
                              text-primary-200
                              transition-colors
                              duration-300
                              group-hover:text-accent-400
                            "
                          >
                            {String(index + 1).padStart(
                              2,
                              '0'
                            )}
                          </span>
                        </div>

                        <p
                          className={cn(
                            `
                              mt-3
                              leading-relaxed
                              text-muted-foreground
                            `,
                            isFeatured
                              ? 'max-w-2xl text-body'
                              : 'text-small'
                          )}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {isFeatured && (
                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          bottom-0
                          start-0
                          h-1
                          w-24
                          rounded-e-full
                          bg-gradient-to-r
                          from-accent
                          to-primary-500
                          rtl:bg-gradient-to-l
                        "
                      />
                    )}
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