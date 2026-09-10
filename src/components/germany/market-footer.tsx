'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { parseNavigationContext } from '@/lib/market-navigation';
import { Phone, Mail } from 'lucide-react';

export function MarketFooter() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  const marketConfig = getMarketConfig('germany');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const locale = (context.locale as 'de' | 'en' | 'ar') || 'de';

  const authLocale = locale === 'ar' ? 'ar' : 'en';

  return (
    <footer className="border-t border-primary-900 bg-primary-950 text-white pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <a href={`/de/${locale}`} className="inline-flex w-fit items-center">
              <Image
                src="/images/logo.png"
                alt="Success Path Mentors"
                width={160}
                height={52}
                className="h-9 w-auto brightness-0 invert object-contain"
              />
            </a>
            <p className="max-w-sm text-sm text-primary-200 leading-relaxed">
              {t('brandDescription')}
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-primary-300 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-400 shrink-0" />
                <span dir="ltr">{marketConfig.contact.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-400 shrink-0" />
                <span dir="ltr">{marketConfig.contact.publishedEmail}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-400">
              {t('servicesTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-200">
              <li>
                <a href={`/de/${locale}/trial?subject=german`} className="hover:text-white transition-colors">
                  {t('services.german')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}/trial?subject=english`} className="hover:text-white transition-colors">
                  {t('services.english')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}/trial?subject=arabic`} className="hover:text-white transition-colors">
                  {t('services.arabic')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}/trial?subject=french`} className="hover:text-white transition-colors">
                  {t('services.french')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Explore */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-400">
              {t('aboutTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-200">
              <li>
                <a href="#why-spm" className="hover:text-white transition-colors">
                  {tHeader('whySpm')}
                </a>
              </li>
              <li>
                <a href="#teacher-quality" className="hover:text-white transition-colors">
                  {tHeader('teacherQuality')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {tHeader('howItWorks')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {tHeader('pricing')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {tHeader('faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Account & Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-400">
              {t('accountTitle')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-200">
              <li>
                <a href={`/de/${locale}/login`} className="hover:text-white transition-colors">
                  {tHeader('login')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}/register`} className="hover:text-white transition-colors">
                  {tHeader('register')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}/trial`} className="hover:text-accent-300 font-semibold transition-colors">
                  {t('freeTrial')}
                </a>
              </li>
              <li>
                <a href={`/${authLocale}/privacy`} className="hover:text-white transition-colors">
                  {t('legal.privacy')}
                </a>
              </li>
              <li>
                <a href={`/${authLocale}/terms`} className="hover:text-white transition-colors">
                  {t('legal.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Success Path Mentors. {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-300">
            <a href={`/${authLocale}/privacy`} className="hover:text-white transition-colors">
              {t('legal.privacy')}
            </a>
            <span>•</span>
            <a href={`/${authLocale}/terms`} className="hover:text-white transition-colors">
              {t('legal.terms')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
