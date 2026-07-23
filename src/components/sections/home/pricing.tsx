import { getTranslations, getLocale } from 'next-intl/server';
import { Check } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Plan {
  grade: string;
  price: number;
  features: string[];
}

export async function Pricing() {
  const t = await getTranslations('pricing');
  const locale = await getLocale();
  const plans = t.raw('plans') as Plan[];
  const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <Section id="pricing">
      <SectionHeading heading={t('heading')} />
      <div className="grid gap-8 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto">
        {plans.map((plan, i) => (
          <Card
            key={plan.grade}
            className={cn('flex flex-col', i === 1 && 'border-accent-400 ring-1 ring-accent-400')}
          >
            <p className="text-small font-semibold text-primary/70">{plan.grade}</p>
            <p className="mt-2 text-h1 font-extrabold text-primary">
              {currency.format(plan.price)}
              <span className="text-body font-medium text-ink/60">{t('perMonth')}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-small text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={cn(buttonVariants({ variant: i === 1 ? 'accent' : 'primary' }), 'mt-8 w-full')}>
              {t('cta')}
            </Link>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center text-small text-ink/60">{t('note')}</p>
    </Section>
  );
}
