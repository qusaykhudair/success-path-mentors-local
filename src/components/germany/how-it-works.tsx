'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { MousePointerClick, CalendarCheck, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const steps = [
    {
      stepNumber: '01',
      icon: <MousePointerClick className="h-7 w-7" />,
      title: t('steps.step1.title', { fallback: 'Kostenlos anmelden' }),
      description: t('steps.step1.description', { fallback: 'Füllen Sie unser kurzes Formular aus und teilen Sie uns Ihre Lernziele mit.' }),
    },
    {
      stepNumber: '02',
      icon: <CalendarCheck className="h-7 w-7" />,
      title: t('steps.step2.title', { fallback: 'Lehrer finden' }),
      description: t('steps.step2.description', { fallback: 'Wir stimmen Ihre Anforderungen ab und organisieren eine unverbindliche Probestunde.' }),
    },
    {
      stepNumber: '03',
      icon: <GraduationCap className="h-7 w-7" />,
      title: t('steps.step3.title', { fallback: 'Erfolgreich lernen' }),
      description: t('steps.step3.description', { fallback: 'Starten Sie flexibel mit Ihrem 1-zu-1 Online-Unterricht und erreichen Sie Ihre Ziele.' }),
    },
  ];

  return (
    <section id="how-it-works" className="relative scroll-mt-20 bg-primary-50/40 py-20 md:py-32 border-y border-primary-100/60">
      <Container>
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <span>{t('eyebrow', { fallback: 'Einfach loslegen' })}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline', { fallback: 'In 3 Schritten zum Erfolg' })}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline', { fallback: 'Der schnellste Weg zum passenden Lehrer.' })}
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Connecting line between cards on desktop */}
          <div className="absolute left-[15%] right-[15%] top-16 hidden h-0.5 border-t-2 border-dashed border-primary-200/80 md:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.12} yOffset={20}>
                <div className="group relative flex h-full flex-col items-center rounded-3xl border border-primary-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl">
                  {/* Step Number Tag */}
                  <div className="absolute -top-3.5 rounded-full bg-primary-950 px-3 py-0.5 text-xs font-black text-white shadow-xs">
                    {step.stepNumber}
                  </div>

                  {/* Icon Orb */}
                  <div className="relative z-10 mt-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-200/80 transition-transform duration-200 group-hover:scale-105 group-hover:bg-accent-100/70">
                    {step.icon}
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-primary-950">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`/de/${context.locale}/trial`}
              className="group inline-flex min-h-touch items-center gap-2 rounded-2xl bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-accent-500 hover:shadow-lg transition-all"
            >
              <span>{context.locale === 'de' ? 'Jetzt unverbindlich starten' : context.locale === 'ar' ? 'ابدأ الآن مجاناً' : 'Get Started for Free'}</span>
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
