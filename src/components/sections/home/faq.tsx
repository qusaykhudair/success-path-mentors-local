// src/components/sections/home/faq.tsx
// Server Component

import { getTranslations } from 'next-intl/server';

import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { buttonVariants } from '@/components/ui/button';

import {
  Section,
  SectionHeading,
} from '@/components/ui/section';

import { FaqAccordion } from './faq-accordion';

interface FaqItem {
  question: string;
  answer: string;
}

const WHATSAPP_NUMBER = '16477875999';

export async function Faq() {
  const t = await getTranslations('faq');

  const rawItems = t.raw('items') as FaqItem[];
  const supportPoints = t.raw('supportPoints') as string[];

  const items = Array.isArray(rawItems)
    ? rawItems.filter(
        (item) =>
          typeof item?.question === 'string' &&
          typeof item?.answer === 'string' &&
          item.question.trim().length > 0 &&
          item.answer.trim().length > 0
      )
    : [];

  const headingId = 'faq-heading';

  if (items.length === 0) {
    return null;
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const serializedJsonLd = JSON.stringify(
    faqJsonLd
  ).replace(/</g, '\\u003c');

  const whatsappMessage = encodeURIComponent(
    t('whatsappMessage')
  );

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const supportIcons = [
    BookOpenCheck,
    Clock3,
    ShieldCheck,
  ];

  return (
    <Section
      id="faq"
      tone="muted"
      spacing="md"
      aria-labelledby={headingId}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializedJsonLd,
        }}
      />

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

      <div
        className="
          mt-12
          grid
          items-start
          gap-7
          lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)]
          lg:gap-10
          xl:gap-14
        "
      >
        {/* Support panel */}
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
                <MessageCircle
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

              {Array.isArray(supportPoints) &&
                supportPoints.length > 0 && (
                  <ul
                    className="
                      mt-7
                      grid
                      gap-3
                    "
                  >
                    {supportPoints
                      .slice(0, 3)
                      .map((point, index) => {
                        const Icon =
                          supportIcons[index] ??
                          ShieldCheck;

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

                            {point}
                          </li>
                        );
                      })}
                  </ul>
                )}

              <div
                className="
                  mt-8
                  border-t
                  border-white/10
                  pt-7
                "
              >
                <p
                  className="
                    text-small
                    font-bold
                    text-white
                  "
                >
                  {t('ctaTitle')}
                </p>

                <p
                  className="
                    mt-2
                    text-small
                    leading-relaxed
                    text-white/60
                  "
                >
                  {t('ctaDescription')}
                </p>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: 'accent',
                    size: 'lg',
                    className:
                      'group mt-6 w-full justify-center font-bold',
                  })}
                >
                  <MessageCircle
                    className="h-5 w-5"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  {t('cta')}

                  <ArrowRight
                    className="
                      h-4
                      w-4
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
            </div>
          </aside>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={0.08}>
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </Section>
  );
}