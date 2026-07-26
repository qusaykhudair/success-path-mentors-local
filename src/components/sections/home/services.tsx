import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import {
  Users, BookOpenCheck, FileBarChart, ClipboardList, Target, CalendarClock,
  BadgeCheck, Clock, type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/motion/reveal';

interface ServiceItem {
  title: string;
  description: string;
}

const icons: LucideIcon[] = [
  Users, BookOpenCheck, FileBarChart, ClipboardList, Target, CalendarClock,
];

// WhatsApp business number in international format, digits only.
const WHATSAPP_NUMBER = '16477875999';

export async function Services() {
  const t = await getTranslations('services');
  const items = t.raw('items') as ServiceItem[];
  const headingId = 'services-heading';

  // Pre-filled message in the user's current browsing language.
  const waMessage = t('whatsappMessage');
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <Section id="services" tone="tint" aria-labelledby={headingId}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute end-1/3 top-0 h-96 w-96 translate-x-1/2 rounded-full bg-accent-300/12 blur-3xl" />
        <div className="absolute start-0 bottom-0 h-80 w-80 rounded-full bg-primary-300/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(theme(colors.primary.400)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative">
        <SectionHeading  heading={t('heading')} />

        {/* image column slightly wider now (was 1fr/1fr) */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ============ Services list ============ */}
          <ol className="relative order-last flex flex-col gap-3 lg:order-first">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length] ?? Users;
              const featured = i === 0;

              return (
                <li key={item.title}>
                  <Reveal delay={0.06 * i}>
                    <article
                      className={`group/item relative flex items-start gap-4 overflow-hidden rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                        featured
                          ? 'border-accent-200 bg-gradient-to-br from-white to-accent-50/40 p-5 shadow-lg shadow-accent-500/10 sm:p-6'
                          : 'border-primary-100 bg-white/70 p-4 shadow-card backdrop-blur-sm hover:border-accent-200 hover:bg-white hover:shadow-lg sm:p-5'
                      }`}
                    >
                      <span aria-hidden="true" className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 group-hover/item:bg-accent-300/25" />

                      <span
                        className={`relative flex shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ease-out ${
                          featured
                            ? 'h-14 w-14 bg-accent-600 text-white'
                            : 'h-11 w-11 bg-accent-50 text-accent-600 group-hover/item:bg-accent-600 group-hover/item:text-white'
                        }`}
                      >
                        <Icon
                          className={`transition-transform duration-300 ease-out group-hover/item:scale-110 ${featured ? 'h-7 w-7' : 'h-5 w-5'}`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </span>

                      <div className="relative min-w-0 flex-1">
                        <h3 className={`text-primary transition-colors duration-300 group-hover/item:text-accent-700 ${featured ? 'text-h3' : 'text-h4'}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-1.5 text-ink-secondary ${featured ? 'text-small' : 'text-caption'}`}>
                          {item.description}
                        </p>
                      </div>

                      {/* index number — darkens on hover */}
                      <span
                        aria-hidden="true"
                        className="relative shrink-0 self-start text-h4 font-black text-primary-100 transition-colors duration-300 group-hover/item:text-accent-300"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          {/* ============ Hero image ============ */}
          <Reveal className="order-first lg:order-last">
            <div className="group relative mx-auto w-full max-w-lg px-4 sm:px-8 lg:px-2">
              <div aria-hidden="true" className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-400/30 to-primary-400/30 blur-2xl transition-all duration-500 group-hover:inset-4 group-hover:blur-3xl motion-reduce:transition-none" />

              <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-primary-900/5">
                <Image
                  src="/images/services-showcase.webp"
                  alt={t('imageAlt')}
                  fill
                  sizes="(min-width: 1024px) 48vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary-900/45 via-transparent to-transparent" />

                {/* WhatsApp overlay — fades in on hover/focus-within */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary-900/0 opacity-0 transition-all duration-300 ease-out group-hover:bg-primary-900/40 group-hover:opacity-100 focus-within:bg-primary-900/40 focus-within:opacity-100 motion-reduce:transition-none">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex translate-y-3 items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-body font-bold text-white shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:transition-none"
                    aria-label={t('whatsappCta')}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t('whatsappCta')}
                  </a>
                </div>
              </div>

              {/* floating glass cards */}
              <div className="absolute -end-2 top-8 rounded-2xl bg-white/85 p-3 shadow-xl ring-1 ring-white/60 backdrop-blur-md transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none sm:-end-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <BadgeCheck className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-h4 font-extrabold leading-none text-primary">{t('float.satisfaction.value')}</p>
                    <p className="text-[11px] text-ink-secondary">{t('float.satisfaction.label')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -start-2 bottom-10 rounded-2xl bg-white/85 p-3 shadow-xl ring-1 ring-white/60 backdrop-blur-md transition-transform duration-500 ease-out group-hover:translate-y-1 motion-reduce:transition-none sm:-start-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <Clock className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-small font-bold leading-none text-primary">{t('float.flexible.value')}</p>
                    <p className="text-[11px] text-ink-secondary">{t('float.flexible.label')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}