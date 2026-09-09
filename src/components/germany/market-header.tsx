'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Globe, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

import {
  parseNavigationContext,
  getLanguageNavigationOptions,
} from '@/lib/market-navigation';

import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { GlobalLanguageSelector } from '@/components/layout/global-language-selector';

export function MarketHeader() {
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  
  // Exclude French programme
  const languageOptions = context.isFrenchProgramme ? [] : getLanguageNavigationOptions(context);
  const currentLanguage = languageOptions.find((opt) => opt.isActive);
  
  const marketConfig = getMarketConfig('germany');
  const t = useTranslations('nav'); // Assume nav translations are available in market-scoped dictionary

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 shadow-xs backdrop-blur-xl">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-2 xl:min-h-[5rem]">
        {/* Logo */}
        <a
          href={`/de/${context.locale}`}
          aria-label={t('home')}
          className="group inline-flex shrink-0 items-center rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src="/images/logo.png"
            alt="Success Path Mentors"
            width={160}
            height={52}
            priority
            sizes="(max-width: 1024px) 130px, 160px"
            className="h-9 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] xl:h-10"
          />
        </a>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-4 xl:flex">
            <GlobalLanguageSelector isGermanyContext={true} />
          </div>

          <div className="xl:hidden">
            <GlobalLanguageSelector isGermanyContext={true} />
          </div>

          <a
            href={`https://wa.me/${marketConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-2 text-[0.78rem] font-bold text-foreground shadow-xs transition-colors hover:bg-muted focus-visible:outline-none 2xl:inline-flex"
          >
            <Phone className="h-4 w-4 text-accent" />
            <span dir="ltr" className="whitespace-nowrap">{marketConfig.contact.whatsappDisplay}</span>
          </a>

          {/* CTA */}
          <a
            href={`/de/${context.locale}/trial`}
            className="inline-flex min-h-touch items-center justify-center rounded-button bg-primary px-4 text-sm font-bold text-primary-foreground shadow-button hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('bookFreeSession')}
          </a>
        </div>
      </Container>
    </header>
  );
}
