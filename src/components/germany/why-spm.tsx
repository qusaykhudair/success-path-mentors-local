'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  Globe2,
  Users,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Handshake,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';

export function WhySpm() {
  const t = useTranslations('whySpm');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const pillars = [
    {
      icon: <Globe2 className="h-6 w-6 text-sky-400" />,
      tagColor: 'text-sky-400/80 border-sky-400/20 bg-sky-400/10',
      iconBg: 'bg-sky-400/10 ring-sky-400/20 group-hover:bg-sky-400/20',
      title: t('features.0.title'),
      description: t('features.0.description'),
      pillarNumber: '01',
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      tagColor: 'text-emerald-400/80 border-emerald-400/20 bg-emerald-400/10',
      iconBg: 'bg-emerald-400/10 ring-emerald-400/20 group-hover:bg-emerald-400/20',
      title: t('features.1.title'),
      description: t('features.1.description'),
      pillarNumber: '02',
    },
    {
      icon: <UserCheck className="h-6 w-6 text-indigo-400" />,
      tagColor: 'text-indigo-400/80 border-indigo-400/20 bg-indigo-400/10',
      iconBg: 'bg-indigo-400/10 ring-indigo-400/20 group-hover:bg-indigo-400/20',
      title: t('features.2.title'),
      description: t('features.2.description'),
      pillarNumber: '03',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-400" />,
      tagColor: 'text-amber-400/80 border-amber-400/20 bg-amber-400/10',
      iconBg: 'bg-amber-400/10 ring-amber-400/20 group-hover:bg-amber-400/20',
      title: t('features.3.title'),
      description: t('features.3.description'),
      pillarNumber: '04',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-rose-400" />,
      tagColor: 'text-rose-400/80 border-rose-400/20 bg-rose-400/10',
      iconBg: 'bg-rose-400/10 ring-rose-400/20 group-hover:bg-rose-400/20',
      title: t('features.4.title'),
      description: t('features.4.description'),
      pillarNumber: '05',
    },
    {
      icon: <Handshake className="h-6 w-6 text-accent-400" />,
      tagColor: 'text-accent-400/80 border-accent-400/20 bg-accent-400/10',
      iconBg: 'bg-accent-400/10 ring-accent-400/20 group-hover:bg-accent-400/20',
      title: t('features.5.title'),
      description: t('features.5.description'),
      pillarNumber: '06',
    },
  ];

  return (
    <section
      id="why-spm"
      className="relative scroll-mt-20 overflow-hidden bg-primary-950 py-20 text-white md:py-28 lg:py-32"
    >
      {/* Background glow & brand geometric accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -start-32 -top-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -end-32 h-96 w-96 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <ScrollReveal yOffset={24}>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300">
              <Sparkles className="h-3.5 w-3.5 text-accent-400" />
              <span>{t('eyebrow')}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15] text-balance">
              {t('headline')}
            </h2>

            <p className="mt-4 text-base text-primary-200/90 sm:text-lg leading-relaxed text-balance">
              {t('subheadline')}
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Trust Pillars (3x2 Desktop Grid) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.pillarNumber} delay={idx * 0.07} yOffset={20}>
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-accent-500/5">
                <div>
                  {/* Card Top Row: Icon + Number Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition-all duration-300 group-hover:scale-105 ${pillar.iconBg}`}
                    >
                      {pillar.icon}
                    </div>
                    <span
                      className={`font-mono text-xs font-bold tracking-wider rounded-full border px-2.5 py-1 ${pillar.tagColor}`}
                    >
                      {pillar.pillarNumber}
                    </span>
                  </div>

                  {/* Pillar Title & Description */}
                  <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-accent-300">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-primary-200/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Card Accent Footprint */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-primary-400 font-medium">
                  <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-accent-300">
                    Success Path Mentors
                  </span>
                  <span className="h-1 w-6 rounded-full bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-accent-400" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <ScrollReveal delay={0.3} yOffset={16}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md sm:flex-row sm:justify-between sm:text-start">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-white sm:text-lg">
                {context.locale === 'de'
                  ? 'Bereit für eine persönliche Lernerfahrung?'
                  : context.locale === 'ar'
                    ? 'هل أنت مستعد لبدء تجربة تعليمية مخصصة؟'
                    : 'Ready for a personalized learning journey?'}
              </h4>
              <p className="text-xs text-primary-300 sm:text-sm">
                {context.locale === 'de'
                  ? 'Starten Sie mit einer unverbindlichen, kostenlosen Probestunde.'
                  : context.locale === 'ar'
                    ? 'ابدأ الآن بحصة تجريبية مجانية بدون أي التزام.'
                    : 'Get started with a free, no-commitment trial lesson.'}
              </p>
            </div>

            <a
              href={`/de/${context.locale}/trial`}
              className="group inline-flex min-h-touch shrink-0 items-center gap-2 rounded-2xl bg-accent-500 px-6 py-3 text-sm font-bold text-primary-950 shadow-lg shadow-accent-500/20 transition-all duration-200 hover:bg-accent-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
            >
              <span>{t('cta')}</span>
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
