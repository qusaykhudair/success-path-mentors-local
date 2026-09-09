'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Award, UserCheck, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';

export function TeacherQuality() {
  const t = useTranslations('teacherQuality');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="teacher-quality" className="relative scroll-mt-20 bg-white py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Quality Standards */}
          <ScrollReveal className="lg:col-span-6" yOffset={24}>
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
                <Award className="h-3.5 w-3.5 text-accent-600" />
                <span>{t('eyebrow')}</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl leading-[1.15] text-balance">
                {t('headline')}
              </h2>

              <p className="text-base text-primary-700 sm:text-lg leading-relaxed text-balance">
                {t('subheadline')}
              </p>

              <div className="mt-4 flex flex-col gap-3.5">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 rounded-2xl border border-primary-100 bg-slate-50/50 p-4 transition-colors hover:border-accent-200 hover:bg-slate-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span className="text-sm font-semibold text-primary-900 sm:text-base">
                      {t(`points.${index}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Matching Process Card */}
          <ScrollReveal className="lg:col-span-6" delay={0.15} yOffset={24}>
            <div className="relative rounded-3xl border border-primary-200/80 bg-gradient-to-br from-primary-900 to-primary-950 p-8 sm:p-10 text-white shadow-2xl overflow-hidden">
              {/* Background glow orbs */}
              <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -start-20 -bottom-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 text-accent-300">
                  <UserCheck className="h-7 w-7" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-300">
                    {context.locale === 'de' ? 'Unser Matching-Prinzip' : context.locale === 'ar' ? 'آلية التوفيق بين الطالب والمعلم' : 'Our Matching Principle'}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                    {t('matching.title')}
                  </h3>
                </div>

                <p className="text-sm text-primary-200 sm:text-base leading-relaxed">
                  {t('matching.description')}
                </p>

                {/* 3 Step Micro-Timeline inside Matching card */}
                <div className="mt-2 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-400 text-xs font-black text-primary-950">
                      1
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {context.locale === 'de' ? 'Bedarfsanalyse & Lernzielabstimmung' : context.locale === 'ar' ? 'تحديد الأهداف والاحتياجات الدراسية' : 'Needs analysis & goal alignment'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-400 text-xs font-black text-primary-950">
                      2
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {context.locale === 'de' ? 'Persönliche Auswahl der qualifizierten Lehrkraft' : context.locale === 'ar' ? 'اختيار المعلم الأنسب للأسلوب التعليمي' : 'Curated selection of verified tutor'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-400 text-xs font-black text-primary-950">
                      3
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {context.locale === 'de' ? 'Kostenlose Probestunde zum Kennenlernen' : context.locale === 'ar' ? 'حصة تجريبية مجانية للتقييم والتأكد' : 'Free trial lesson to confirm compatibility'}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`/de/${context.locale}/trial`}
                    className="group inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-2xl bg-accent-500 py-3.5 text-sm font-bold text-primary-950 shadow-lg hover:bg-accent-400 transition-colors"
                  >
                    <span>{context.locale === 'de' ? 'Lehrer unverbindlich anfragen' : context.locale === 'ar' ? 'اطلب معلمك الآن مجاناً' : 'Request a Tutor Trial'}</span>
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
