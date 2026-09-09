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
    <section className="bg-primary-950 py-16 md:py-24 text-center">
      <Container>
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {t('headline')}
            </h2>
            <p className="text-lg text-primary-200 text-balance">
              {t('subheadline')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
            <a
              href={`/de/${context.locale}/trial`}
              className="flex w-full sm:w-auto min-h-[3.5rem] items-center justify-center rounded-button bg-accent px-8 text-base font-bold text-primary-950 shadow-button transition-all duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t('primaryAction')}
            </a>
            
            <a
              href={`https://wa.me/${marketConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto min-h-[3.5rem] items-center justify-center rounded-button border border-primary-700 bg-transparent px-8 text-base font-bold text-white transition-all duration-200 hover:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700"
            >
              {t('secondaryAction')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
