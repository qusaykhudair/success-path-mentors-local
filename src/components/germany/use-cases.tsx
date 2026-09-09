'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Home, GraduationCap, Briefcase, ArrowRight, ArrowLeft, Users } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';

export function UseCases() {
  const t = useTranslations('useCases');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const cases = [
    {
      icon: <Home className="h-7 w-7 text-accent-600" />,
      tag: context.locale === 'de' ? 'Familien' : context.locale === 'ar' ? 'العائلات' : 'Families',
      title: t('cases.0.title'),
      description: t('cases.0.description'),
    },
    {
      icon: <GraduationCap className="h-7 w-7 text-accent-600" />,
      tag: context.locale === 'de' ? 'Schüler' : context.locale === 'ar' ? 'الطلاب' : 'Students',
      title: t('cases.1.title'),
      description: t('cases.1.description'),
    },
    {
      icon: <Briefcase className="h-7 w-7 text-accent-600" />,
      tag: context.locale === 'de' ? 'Erwachsene' : context.locale === 'ar' ? 'البالغون' : 'Adults',
      title: t('cases.2.title'),
      description: t('cases.2.description'),
    },
  ];

  return (
    <section id="use-cases" className="relative scroll-mt-20 bg-slate-50/80 py-20 md:py-32 border-y border-slate-200/60">
      <Container>
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <Users className="h-3.5 w-3.5 text-accent-600" />
            <span>{t('eyebrow')}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline')}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline')}
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} yOffset={20}>
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-200/70 transition-transform duration-200 group-hover:scale-105 group-hover:bg-accent-100/60">
                      {item.icon}
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-800">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-primary-950 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary-600 leading-relaxed sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary-100/60">
                  <a
                    href={`/de/${context.locale}/trial`}
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-accent-700 hover:text-accent-800"
                  >
                    <span>{context.locale === 'de' ? 'Probestunde vereinbaren' : context.locale === 'ar' ? 'احجز جلستك الآن' : 'Start Your Trial'}</span>
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
