'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from '@/components/germany/scroll-reveal';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ClipboardList,
  UserCheck,
  GraduationCap,
} from 'lucide-react';

export function GermanyConversionCTA() {
  const t = useTranslations('cta');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const locale = (context.locale as 'de' | 'en' | 'ar') || 'de';
  const marketConfig = getMarketConfig('germany');
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const trustPoints = [
    t('trustPoints.0'),
    t('trustPoints.1'),
    t('trustPoints.2'),
  ];

  const nextSteps = [
    {
      title: t('nextSteps.0.title'),
      desc: t('nextSteps.0.description'),
      icon: ClipboardList,
    },
    {
      title: t('nextSteps.1.title'),
      desc: t('nextSteps.1.description'),
      icon: UserCheck,
    },
    {
      title: t('nextSteps.2.title'),
      desc: t('nextSteps.2.description'),
      icon: GraduationCap,
    },
  ];

  const whatsappInquiryText =
    locale === 'de'
      ? 'Hallo Success Path Mentors Team, ich interessiere mich für eine kostenlose Probestunde in Deutschland.'
      : locale === 'ar'
      ? 'مرحبًا فريق Success Path Mentors، أود الاستفسار عن حجز حصة تجريبية مجانية في ألمانيا.'
      : 'Hello Success Path Mentors team, I would like to inquire about a free trial lesson in Germany.';

  const whatsappUrl = `https://wa.me/${marketConfig.contact.whatsapp}?text=${encodeURIComponent(
    whatsappInquiryText
  )}`;

  return (
    <section className="relative isolate overflow-hidden bg-primary-950 py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-primary-800/40 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            {/* Background Ambient Effects */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute -end-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-accent-500/20 blur-3xl" />
              <div className="absolute -bottom-40 -start-28 h-[28rem] w-[28rem] rounded-full bg-primary-600/25 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent rtl:bg-gradient-to-l" />
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-14 xl:gap-18">
              {/* Left Column: Conversion Message */}
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-accent-400" />
                  {t('eyebrow')}
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-sm">
                  {t('headline')}
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-200 sm:text-lg">
                  {t('subheadline')}
                </p>

                {/* 3 Key Trust Badges */}
                <ul className="mt-8 grid w-full gap-3 sm:grid-cols-3">
                  {trustPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-xs font-semibold text-primary-100 backdrop-blur-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-9 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
                  <a
                    href={`/de/${locale}/trial`}
                    className="inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-3.5 text-sm font-bold text-primary-950 shadow-lg shadow-accent-500/25 transition-all duration-200 hover:bg-accent-400 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 sm:w-auto whitespace-nowrap"
                  >
                    <span>{t('primaryAction')}</span>
                    <ArrowIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 sm:w-auto whitespace-nowrap"
                  >
                    <MessageCircle className="h-4 w-4 text-accent-300" />
                    <span>{t('secondaryAction')}</span>
                  </a>
                </div>

                {/* Reassurance Microcopy */}
                <div className="mt-4 flex items-center gap-2 text-xs text-primary-300">
                  <ShieldCheck className="h-4 w-4 text-accent-400 shrink-0" />
                  <span>{t('reassurance')}</span>
                </div>
              </div>

              {/* Right Column: "What happens next?" step card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-xl backdrop-blur-md sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full bg-accent-500/15 blur-2xl"
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-primary-950 shadow-md">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-accent-300">
                        {t('panelEyebrow')}
                      </p>
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {t('panelTitle')}
                      </h3>
                    </div>
                  </div>

                  <ol className="relative mt-7 flex flex-col gap-4">
                    {/* Vertical connecting line */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-6 start-4 top-6 w-px bg-gradient-to-b from-accent-400 via-accent-300/40 to-transparent"
                    />

                    {nextSteps.map((step, idx) => {
                      const StepIcon = step.icon;
                      return (
                        <li key={step.title} className="relative flex items-start gap-4">
                          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-400/40 bg-primary-900 text-accent-300 shadow-md text-xs font-bold">
                            {idx + 1}
                          </span>
                          <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 p-3.5">
                            <h4 className="text-xs font-bold text-white sm:text-sm">
                              {step.title}
                            </h4>
                            <p className="mt-1 text-xs text-primary-200 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>

                  {/* Panel Guarantee Note */}
                  <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-accent-400/20 bg-accent-500/10 p-3 text-xs text-primary-200">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-accent-400 mt-0.5" />
                    <span>{t('panelNote')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
