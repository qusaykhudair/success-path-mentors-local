import { getTranslations } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/motion/reveal';

interface StepItem {
  number: number;
  title: string;
  description: string;
}

export async function Steps() {
  const t = await getTranslations('steps');
  const items = t.raw('items') as StepItem[];
  const headingId = 'steps-heading';

  return (
    <Section id="steps" aria-labelledby={headingId}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-300/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(theme(colors.primary.400)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="relative">
        <SectionHeading  heading={t('heading')} />

        <ol aria-label={t('heading')} className="relative mx-auto mt-14 max-w-3xl">
          {/* spine — explicit position, matches nodes exactly */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 top-3 left-6 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-400 via-primary-300 to-transparent lg:left-1/2"
          />

          {items.map((step, i) => {
            const alignEnd = i % 2 === 1;

            return (
              <li
                key={step.number}
                className={`relative pb-12 last:pb-0 ps-16 lg:ps-0 ${
                  alignEnd ? 'lg:pe-[calc(50%+3.5rem)]' : 'lg:ps-[calc(50%+3.5rem)]'
                }`}
              >
                {/*
                  node — position fixed via explicit classes (left-6 / lg:left-1/2),
                  so it NEVER drifts horizontally. The only animation is a vertical
                  drop-in (steps-drop) staggered per index, applied to an INNER span
                  so it can't fight the outer positioning transform.
                */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-6 z-10 -translate-x-1/2 -translate-y-1/2 lg:left-1/2"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-600 text-lg font-black text-white shadow-lg shadow-primary/30 ring-4 ring-primary-50 [animation:steps-drop_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both] motion-reduce:[animation:none]"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    {step.number}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full ring-2 ring-accent-400/50 [animation:steps-pulse_2.5s_ease-out_infinite] motion-reduce:hidden"
                      style={{ animationDelay: `${i * 0.15 + 0.6}s` }}
                    />
                  </span>
                </span>

                <Reveal delay={0.1 * i}>
                  <div className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-surface p-5 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6">
                    <span aria-hidden="true" className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 ease-out group-hover:bg-accent-300/25" />
                    <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent-500 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                    <span
                      aria-hidden="true"
                      className={`block h-1 w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-300 transition-all duration-300 ease-out group-hover:w-16 motion-reduce:transition-none ${
                        alignEnd ? 'lg:ms-auto' : ''
                      }`}
                    />

                    <h3 className={`mt-4 text-h4 text-primary transition-colors duration-300 ease-out group-hover:text-accent-700 ${alignEnd ? 'lg:text-end' : ''}`}>
                      {step.title}
                    </h3>
                    <p className={`mt-2 text-small text-ink-secondary ${alignEnd ? 'lg:text-end' : ''}`}>
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}