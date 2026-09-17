
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import {
  BookOpenCheck,
  CalendarCheck2,
  ClipboardCheck,
  Languages,
  Route,
  School,
  UserRoundCheck,
  MonitorPlay,
  GraduationCap,    type LucideIcon,
} from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { Card } from '@/components/ui/card';
import {
  Section,
  SectionHeading,
} from '@/components/ui/section';

interface ProgramItem {
  title: string;
  description: string;
  icon?: keyof typeof ICON_MAP;
}

const ICON_MAP = {
  canadianCurriculum: BookOpenCheck,
  americanCurriculum: School,
  languages: Languages,
  mentoring: UserRoundCheck,
  examPrep: ClipboardCheck,
  guidance: Route,
} satisfies Record<string, LucideIcon>;

const FALLBACK_ICONS: LucideIcon[] = [
  BookOpenCheck,
  School,
  Languages,
  UserRoundCheck,
  ClipboardCheck,
  Route,
];

function resolveIcon(
  iconName: ProgramItem['icon'],
  index: number
): LucideIcon {
  if (iconName && ICON_MAP[iconName]) {
    return ICON_MAP[iconName];
  }

  return (
    FALLBACK_ICONS[index % FALLBACK_ICONS.length] ??
    GraduationCap
  );
}

export async function Programs() {
  const t = await getTranslations('programs');

  const items = t.raw('items') as ProgramItem[];
  const headingId = 'programs-heading';

  return (
    <Section
      id="programs"
      tone="background"
      spacing="md"
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        <div
          className="
            absolute
            -end-32
            top-12
            h-80
            w-80
            rounded-full
            bg-accent-100/60
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -start-32
            bottom-12
            h-80
            w-80
            rounded-full
            bg-primary-100/55
            blur-3xl
          "
        />
      </div>

      <SectionHeading
        eyebrow={t('eyebrow')}
        heading={
          <span id={headingId}>
            {t('heading')}
          </span>
        }
        subheading={t('subheading')}
      />

      <div
        className="
          mt-12
          grid
          items-stretch
          gap-8
          lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.15fr)]
          lg:gap-12
          xl:gap-16
        "
      >
        <Reveal>
          <div
            className="
              group
              relative
              mx-auto
              w-full
              max-w-lg
              overflow-hidden
              rounded-image
              border
              border-border
              bg-card
              shadow-xl
              lg:sticky
              lg:top-28
            "
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/programs-showcase.webp"
                alt={t('imageAlt')}
                fill
                sizes="
                  (min-width: 1280px) 460px,
                  (min-width: 1024px) 38vw,
                  90vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                  motion-reduce:transition-none
                  motion-reduce:group-hover:scale-100
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-primary-950/75
                  via-primary-900/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  inset-x-5
                  bottom-5
                  rounded-card
                  border
                  border-white/20
                  bg-primary-950/72
                  p-5
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  sm:inset-x-6
                  sm:bottom-6
                "
              >
                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent
                      text-accent-foreground
                    "
                  >
                    <CalendarCheck2
                      className="h-6 w-6"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-h3 font-bold text-white">
                      {t('badge.value')}
                    </p>

                    <p className="mt-1 text-small text-white/75">
                      {t('badge.label')}
                    </p>
                  </div>
                </div>
              </div>
<div
  className="
    absolute
    end-4
    top-4
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-white/30
    bg-white/90
    px-3
    py-1.5
    text-caption
    font-bold
    text-primary-900
    shadow-sm
    backdrop-blur-md
  "
>
  <MonitorPlay
    className="h-4 w-4 text-accent-700"
    strokeWidth={1.9}
    aria-hidden="true"
  />

  {t('liveLabel')}
</div>
            </div>
          </div>
        </Reveal>

        <div
          className="
            grid
            content-start
            gap-4
            sm:grid-cols-2
            lg:gap-5
          "
        >
          {items.map((item, index) => {
            const Icon = resolveIcon(item.icon, index);

            return (
              <Reveal
                key={item.title}
                delay={Math.min(index * 0.06, 0.3)}
              >
                <Card
                  padding="lg"
                  className="
                  group
                    h-full
                    transition-[border-color,box-shadow]
                    duration-300
                    hover:border-accent-300
                    hover:shadow-card-hover
                    motion-reduce:transition-none
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
    ease-out
    group-hover:scale-110
    motion-reduce:transition-none
    motion-reduce:group-hover:scale-100
  "
  strokeWidth={1.8}
  aria-hidden="true"
/>
                  </span>

                  <h3
                    className="
                      mt-5
                      text-h4
                      text-foreground
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-small
                      text-muted-foreground
                    "
                  >
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}