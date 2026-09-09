'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { UserCheck, HeartHandshake, Sparkles, Laptop, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { parseNavigationContext } from '@/lib/market-navigation';
import { ScrollReveal } from './scroll-reveal';

export function WhySpm() {
  const t = useTranslations('whySpm');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const features = [
    {
      icon: <UserCheck className="h-6 w-6 text-accent-400" />,
      title: t('features.0.title'),
      description: t('features.0.description'),
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-accent-400" />,
      title: t('features.1.title'),
      description: t('features.1.description'),
    },
    {
      icon: <Sparkles className="h-6 w-6 text-accent-400" />,
      title: t('features.2.title'),
      description: t('features.2.description'),
    },
    {
      icon: <Laptop className="h-6 w-6 text-accent-400" />,
      title: t('features.3.title'),
      description: t('features.3.description'),
    },
  ];

  return (
    <section id="why-spm" className="relative scroll-mt-20 overflow-hidden bg-primary-950 py-24 text-white md:py-36">
      {/* Background glow & brand geometric accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -start-32 -top-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -end-32 h-96 w-96 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Storytelling Statement & Visual Card */}
          <ScrollReveal className="lg:col-span-5" yOffset={24}>
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300">
                <Sparkles className="h-3.5 w-3.5 text-accent-400" />
                <span>{t('eyebrow')}</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15] text-balance">
                {t('headline')}
              </h2>

              <p className="text-base text-primary-200 sm:text-lg leading-relaxed text-balance">
                {t('subheadline')}
              </p>

              {/* Trust Metric Highlight */}
              <div className="mt-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 text-accent-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {context.locale === 'de' ? 'Geprüfte Bildungsqualität' : context.locale === 'ar' ? 'معايير جودة تعليمية موثوقة' : 'Verified Educational Standards'}
                    </h4>
                    <p className="text-xs text-primary-300">
                      {context.locale === 'de' ? '100% persönliche Betreuung ohne Algorithmus-Zufall' : context.locale === 'ar' ? 'تنسيق بشري مباشر وخطة متابعة حقيقية' : 'Dedicated human coordination and verified educators'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`/de/${context.locale}/trial`}
                  className="group inline-flex min-h-touch items-center gap-2 rounded-2xl bg-accent-500 px-6 py-3.5 text-sm font-bold text-primary-950 shadow-lg shadow-accent-500/20 transition-all duration-200 hover:bg-accent-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                >
                  <span>{context.locale === 'de' ? 'Kostenlose Probestunde sichern' : context.locale === 'ar' ? 'احجز حصتك التجريبية المجانية' : 'Book Your Free Trial'}</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 4 Differentiated Benefit Rows */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} yOffset={16}>
                <div className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-200 hover:border-accent-400/40 hover:bg-white/[0.08]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105 group-hover:bg-accent-500/20 group-hover:ring-accent-400/40">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-primary-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
