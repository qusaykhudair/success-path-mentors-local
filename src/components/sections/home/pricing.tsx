import { getTranslations, getLocale } from 'next-intl/server';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/motion/reveal';

interface Plan {
  grade: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const WHATSAPP_NUMBER = '16477875999';

export async function Pricing() {
  const t = await getTranslations('pricing');
  const locale = await getLocale();
  const plans = t.raw('plans') as Plan[];
  const headingId = 'pricing-heading';

  const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  // Build a WhatsApp link per plan, message localized to current browsing language.
  function waHref(planName: string): string {
    const msg = t('whatsappMessage', { plan: planName });
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <Section  tone="tint" id="pricing" aria-labelledby={headingId}>
      {/* decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute start-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-300/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(theme(colors.primary.400)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative">
        <SectionHeading  heading={t('heading')}   />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => {
            const popular = plan.popular ?? i === 1;

            return (
              <Reveal key={plan.grade} delay={0.08 * i}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 ${
                    popular
                      ? 'bg-gradient-to-br from-primary to-primary-800 text-white shadow-2xl ring-1 ring-primary-900/10'
                      : 'border border-primary-100 bg-white text-primary shadow-card hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/10'
                  }`}
                >
                  {/* popular badge */}
                  {popular && (
                    <span className="absolute end-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1 text-caption font-bold text-white shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                      {t('popularBadge')}
                    </span>
                  )}

                  {/* decorative glow for popular */}
                  {popular && (
                    <span aria-hidden="true" className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-accent-400/30 blur-3xl" />
                  )}

                  <p className={`relative text-small font-semibold ${popular ? 'text-white/80' : 'text-ink-secondary'}`}>
                    {plan.grade}
                  </p>

                  <div className="relative mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight">
                      {currency.format(plan.price)}
                    </span>
                    <span className={`text-body font-medium ${popular ? 'text-white/70' : 'text-ink-secondary'}`}>
                      {t('perMonth')}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`relative mt-6 block h-px w-full ${popular ? 'bg-white/15' : 'bg-primary-100'}`}
                  />

                  <ul className="relative mt-6 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-small">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            popular ? 'bg-accent-500 text-white' : 'bg-accent-50 text-accent-600'
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className={popular ? 'text-white/90' : 'text-ink-secondary'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp subscribe CTA */}
                  <a
                    href={waHref(plan.grade)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative mt-8 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-body font-semibold shadow-lg transition-all duration-300 ease-out hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none ${
                      popular
                        ? 'bg-white text-primary hover:bg-accent-50 focus-visible:ring-white focus-visible:ring-offset-primary'
                        : 'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:shadow-accent-600/40 focus-visible:ring-accent-400'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full motion-reduce:hidden"
                    />
                    <span className="relative">{t('cta')}</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 rtl:-scale-x-100 motion-reduce:transition-none" strokeWidth={2.5} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-small text-ink-secondary">{t('note')}</p>
      </div>
    </Section>
  );
}