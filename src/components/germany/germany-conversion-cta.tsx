'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { parseNavigationContext } from '@/lib/market-navigation';

export function GermanyConversionCTA() {
  const t = useTranslations('cta');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const marketConfig = getMarketConfig('germany');

  return (
    <section className="bg-primary-950 py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent-600 px-6 py-20 shadow-2xl sm:px-12 md:py-24 lg:px-20 text-center">
          <div className="absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute -left-40 -top-40 -z-10 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 -z-10 h-80 w-80 rounded-full bg-accent-900/30 blur-3xl" />
          
          <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight drop-shadow-sm">
                {t('headline')}
              </h2>
              <p className="text-xl text-accent-50 text-balance leading-relaxed max-w-2xl mx-auto">
                {t('subheadline')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
              <a
                href={`/de/${context.locale}/trial`}
                className="flex w-full sm:w-auto min-h-[4rem] items-center justify-center rounded-2xl bg-white px-10 text-lg font-bold text-accent-700 shadow-md transition-all duration-300 hover:bg-primary-50 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                {t('primaryAction')}
              </a>
              
              <a
                href={`https://wa.me/${marketConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto min-h-[4rem] items-center justify-center rounded-2xl border-2 border-white/30 bg-transparent px-10 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                {t('secondaryAction')}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
