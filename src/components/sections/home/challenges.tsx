// src/components/sections/home/challenges.tsx
// Server Component

import { getTranslations } from 'next-intl/server';

import {
  BrainCircuit,
  CalendarCheck2,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  MessageCircle,
  MessagesSquare,
  SearchCheck,
  UserRoundSearch,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import {
  Section,
  SectionHeading,
} from '@/components/ui/section';

interface ChallengeItem {
  title: string;
  challenge: string;
  solution: string;
}

const CHALLENGE_ICONS: LucideIcon[] = [
  BrainCircuit,
  SearchCheck,
  UserRoundSearch,
  ClipboardCheck,
  CalendarCheck2,
  MessagesSquare,
];

const WHATSAPP_NUMBER = '16477875999';

export async function Challenges() {
  const t = await getTranslations('whyMustafa');

  const items = t.raw('items') as ChallengeItem[];
  const headingId = 'why-mustafa-heading';

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
      id="why-mustafa"
      tone="muted"
      spacing="md"
      aria-labelledby={headingId}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      {/* Background */}
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
            top-12
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
            bg-primary-100/50
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

      {/* Problem → Solution cards */}
      <div
        className="
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {items.map((item, index) => {
          const Icon =
            CHALLENGE_ICONS[index] ?? BrainCircuit;

          return (
            <Reveal
              key={item.title}
              delay={Math.min(index * 0.05, 0.25)}
              className="h-full"
            >
              <Card
                padding="lg"
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  transition-[transform,border-color,box-shadow]
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent-300
                  hover:shadow-card-hover
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
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
                    justify-between
                    gap-4
                  "
                >
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

                  <span
                    aria-hidden="true"
                    className="
                      text-caption
                      font-bold
                      tracking-wider
                      text-primary-200
                      transition-colors
                      duration-300
                      group-hover:text-accent-500
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="
                    relative
                    mt-5
                    text-h4
                    font-bold
                    text-foreground
                    transition-colors
                    duration-300
                    group-hover:text-primary-800
                  "
                >
                  {item.title}
                </h3>

                {/* Challenge */}
                <div
                  className="
                    relative
                    mt-5
                    rounded-xl
                    border
                    border-warning-100
                    bg-warning-50/70
                    p-4
                  "
                >
                  <p
                    className="
                      flex
                      items-center
                      gap-2
                      text-caption
                      font-bold
                      uppercase
                      tracking-wide
                      text-warning-700
                    "
                  >
                    <CircleAlert
                      className="h-4 w-4"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />

                    {t('challengeLabel')}
                  </p>

                  <p
                    className="
                      mt-2
                      text-small
                      leading-relaxed
                      text-muted-foreground
                    "
                  >
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div
                  className="
                    relative
                    mt-3
                    rounded-xl
                    border
                    border-accent-100
                    bg-accent-50/70
                    p-4
                  "
                >
                  <p
                    className="
                      flex
                      items-center
                      gap-2
                      text-caption
                      font-bold
                      uppercase
                      tracking-wide
                      text-accent-800
                    "
                  >
                    <CheckCircle2
                      className="h-4 w-4"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />

                    {t('solutionLabel')}
                  </p>

                  <p
                    className="
                      mt-2
                      text-small
                      leading-relaxed
                      text-foreground
                    "
                  >
                    {item.solution}
                  </p>
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
              </Card>
            </Reveal>
          );
        })}
      </div>

      {/* CTA */}
      <Reveal delay={0.15}>
        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[1.5rem]
            border
            border-primary-800/25
            bg-brand-dark
            p-6
            text-white
            shadow-xl
            sm:p-8
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -end-20
              -top-24
              h-64
              w-64
              rounded-full
              bg-accent/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-6
              lg:flex-row
              lg:items-center
            "
          >
            <div className="max-w-2xl">
              <h3
                className="
                  text-h3
                  font-bold
                  text-white
                "
              >
                {t('ctaTitle')}
              </h3>

              <p
                className="
                  mt-3
                  text-body
                  leading-relaxed
                  text-white/70
                "
              >
                {t('ctaDescription')}
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: 'accent',
                size: 'lg',
                className:
                  'w-full shrink-0 justify-center lg:w-auto',
              })}
            >
              <MessageCircle
                className="h-5 w-5"
                strokeWidth={1.9}
                aria-hidden="true"
              />

              {t('cta')}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}