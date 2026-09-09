'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';

export function MarketFooter() {
  const t = useTranslations('footer');
  const marketConfig = getMarketConfig('germany');

  return (
    <footer className="border-t border-border bg-muted/20 pb-8 pt-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo.png"
              alt="Success Path Mentors"
              width={145}
              height={47}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground">
              {t('brandDescription')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-foreground">{t('servicesTitle')}</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.german')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.english')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.arabic')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.french')}</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-foreground">{t('contactTitle')}</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span dir="ltr">{marketConfig.contact.whatsappDisplay}</span>
              </li>
              <li>
                <a href={`mailto:${marketConfig.contact.publishedEmail}`} className="hover:text-primary transition-colors">
                  {marketConfig.contact.publishedEmail}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-foreground">{t('legalTitle')}</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('legal.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('legal.terms')}</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Success Path Mentors. {t('allRightsReserved')}
        </div>
      </Container>
    </footer>
  );
}
