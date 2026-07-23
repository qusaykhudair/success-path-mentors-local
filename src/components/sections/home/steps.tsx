import { getTranslations } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/ui/section';

interface StepItem {
  number: number;
  title: string;
  description: string;
}

export async function Steps() {
  const t = await getTranslations('steps');
  const items = t.raw('items') as StepItem[];
  const headingId = 'steps-heading';
  const total = items.length;

  return (
    <Section tone="tint" aria-labelledby={headingId}>
      <SectionHeading heading={t('heading')} />

      <ol aria-label={t('heading')} className="flex flex-col gap-8 lg:flex-row lg:gap-6">
        {items.map((step, i) => {
          const isLast = i === total - 1;
          const stepLabel = String(step.number).padStart(2, '0');
          const totalLabel = String(total).padStart(2, '0');

          return (
            <li key={step.number} className="group relative lg:min-w-0 lg:flex-1">
              {/* ============ Mobile / Tablet — vertical timeline (below lg) ============ */}
              <div className="flex gap-5 lg:hidden">
                <div className="relative flex shrink-0 flex-col items-center">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-600 text-lg font-bold text-white shadow-md shadow-primary/20 ring-4 ring-primary-50 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-0.5 flex-1 rounded-full bg-gradient-to-b from-primary-300 to-primary-100"
                    />
                  )}
                </div>

                <div className={isLast ? 'flex-1 pb-0' : 'flex-1 pb-2'}>
              
                  <h3 className="mt-1 text-h4 text-primary">{step.title}</h3>
                  <p className="mt-2 text-small text-ink-secondary">{step.description}</p>
                </div>
              </div>

              {/* ============ Desktop — big numeral card (lg and up) ============ */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-9 start-[calc(50%+2.75rem)] end-[calc(-50%+2.75rem)] hidden h-px bg-[repeating-linear-gradient(90deg,theme(colors.primary.300)_0,theme(colors.primary.300)_6px,transparent_6px,transparent_12px)] lg:block"
                />
              )}

              <div
                className="
                  relative hidden h-full flex-col overflow-hidden rounded-2xl border border-primary-100
                  bg-surface p-6 pt-7 shadow-card transition-all duration-300 ease-out
                  hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/10
                  motion-reduce:transition-none motion-reduce:hover:translate-y-0
                  lg:flex
                "
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 ease-out group-hover:bg-accent-300/25"
                />

             

                <span
                  aria-hidden="true"
                  className="relative -mt-1 bg-gradient-to-br from-primary to-accent-600 bg-clip-text text-6xl font-black leading-none text-transparent transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none sm:text-7xl"
                >
                  {stepLabel}
                </span>

                <span
                  aria-hidden="true"
                  className="relative mt-4 block h-px w-10 rounded-full bg-primary-200 transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-accent-400 motion-reduce:transition-none"
                />

                <h3 className="relative mt-4 text-h4 text-primary transition-colors duration-300 ease-out group-hover:text-accent-700">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-small text-ink-secondary">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}