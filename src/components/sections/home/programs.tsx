// programs.tsx  — Server Component
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import {
  GraduationCap, BookOpen, Users, Target, Award, Compass,
  type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/motion/reveal';

interface ProgramItem {
  title: string;
  description: string;
  icon?: keyof typeof ICON_MAP;
}

const ICON_MAP: Record<string, LucideIcon> = {
  academic: GraduationCap,
  curriculum: BookOpen,
  mentoring: Users,
  examPrep: Target,
  achievement: Award,
  guidance: Compass,
};

const FALLBACK_ICON_ORDER: LucideIcon[] = Object.values(ICON_MAP);

function resolveIcon(icon: ProgramItem['icon'], index: number): LucideIcon {
  const explicit = icon ? ICON_MAP[icon] : undefined;
  const fallback = FALLBACK_ICON_ORDER[index % FALLBACK_ICON_ORDER.length];
  return explicit ?? fallback ?? GraduationCap;
}

export async function Programs() {
  const t = await getTranslations('programs');
  const items = t.raw('items') as ProgramItem[];
  const headingId = 'programs-heading';

  // Split programs into two flanking columns around the central image.
  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  function renderCard(item: ProgramItem, globalIndex: number, align: 'start' | 'end') {
    const Icon = resolveIcon(item.icon, globalIndex);
    return (
      <Reveal key={item.title} delay={0.05 * globalIndex}>
        <article
          className={`group relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
            align === 'end' ? 'lg:text-end' : ''
          }`}
        >
          <span aria-hidden="true" className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 ease-out group-hover:bg-accent-300/30" />

          <span
            className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors duration-300 ease-out group-hover:bg-accent-600 group-hover:text-white ${
              align === 'end' ? 'lg:ms-auto' : ''
            }`}
          >
            <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110" strokeWidth={1.75} aria-hidden="true" />
          </span>

          <h3 className="relative mt-4 text-h4 text-primary transition-colors duration-300 ease-out group-hover:text-accent-700">
            {item.title}
          </h3>
          <p className="relative mt-2 text-small text-ink-secondary">{item.description}</p>
        </article>
      </Reveal>
    );
  }

  return (
    <Section id="programs"  aria-labelledby={headingId}>
      {/* Layered decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute start-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-300/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(theme(colors.primary.400)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="relative">
        <SectionHeading heading={t('heading')} />

        {/* Orbital composition: image center, programs flanking */}
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftItems.map((item, i) => renderCard(item, i, 'end'))}
          </div>

       {/* Center image */}
<Reveal className="order-first lg:order-none">
  <div className="group relative mx-auto w-full max-w-sm transition-transform duration-500 ease-out hover:-translate-y-1.5 motion-reduce:transition-none lg:w-[22rem]">
    {/* ambient glow frame — intensifies on hover */}
    <div
      aria-hidden="true"
      className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-accent-300/40 to-primary-300/40 blur-xl transition-all duration-500 ease-out group-hover:-inset-4 group-hover:from-accent-400/50 group-hover:to-primary-400/50 group-hover:blur-2xl motion-reduce:transition-none"
    />

    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-primary-900/5 transition-shadow duration-500 ease-out group-hover:shadow-accent-500/20 motion-reduce:transition-none">
      <Image
        src="/images/programs-showcase.webp"
        alt={t('imageAlt')}
        fill
        sizes="(min-width: 1024px) 22rem, 100vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 motion-reduce:transition-none"
      />

      {/* base gradient for text legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent" />

      {/* diagonal shine sweep on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full motion-reduce:hidden"
      />

     {/* darkening veil — stronger so the large centered stat pops */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 bg-primary-900/0 transition-colors duration-500 ease-out group-hover:bg-primary-900/60 motion-reduce:transition-none"
/>

{/* ---------- Centered stat reveal (hover) — larger & bolder ---------- */}
<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center [text-shadow:0_2px_12px_rgb(0_0_0/0.5)]">
  <span className="flex h-16 w-16 scale-75 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/40 backdrop-blur-sm transition-all delay-100 duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none">
    <Award className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
  </span>
  <p className="mt-4 translate-y-4 text-6xl font-black leading-none text-white opacity-0 transition-all delay-150 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none sm:text-7xl">
    {t('badge.value')}
  </p>
  <p className="mt-3 translate-y-4 text-body font-semibold text-white opacity-0 transition-all delay-200 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
    {t('badge.label')}
  </p>
</div>

      {/* online indicator — drifts up slightly on hover */}
      <div className="absolute end-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 shadow-md backdrop-blur-sm transition-transform duration-500 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="text-[11px] font-semibold text-primary">{t('liveLabel')}</span>
      </div>

      {/* bottom stat badge — fades OUT on hover (its content moves to center) */}
      <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-2 group-hover:opacity-0 motion-reduce:transition-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-h4 font-extrabold leading-none text-primary">{t('badge.value')}</p>
            <p className="mt-0.5 text-[11px] text-ink-secondary">{t('badge.label')}</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-600">
            <Award className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  </div>
</Reveal>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightItems.map((item, i) => renderCard(item, mid + i, 'start'))}
          </div>
        </div>
      </div>
    </Section>
  );
}