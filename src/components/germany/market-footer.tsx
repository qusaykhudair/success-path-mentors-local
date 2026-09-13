'use client';

import Image from 'next/image';
import Link from 'next/link';
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



  return (
    <footer className="border-t border-primary-900 bg-primary-950 text-white pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href={`/de/${locale}`} className="inline-flex w-fit items-center">
              <Image
                src="/images/Success_Path_Mentors_Europe_Logo_Transparent.png"
                alt="Success Path Mentors Europe"
                width={300}
                height={104}
                className="h-14 sm:h-16 w-auto brightness-0 invert object-contain"
              />
            </Link>
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

          {/* Col 2: Tutoring Services & School */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-400">
              {tHeader('tutoringServices', { fallback: 'Tutoring Services' })}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-primary-200">
              <li>
                <Link href={`/de/${locale}/tutoring/one-to-one`} className="hover:text-white transition-colors">
                  {tHeader('tutoringOneToOne', { fallback: 'One-to-One Tutoring' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/tutoring/small-groups`} className="hover:text-white transition-colors">
                  {tHeader('tutoringSmallGroups', { fallback: 'Small Groups (Up to 3)' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/tutoring/language-levels`} className="hover:text-white transition-colors">
                  {tHeader('tutoringLanguageLevels', { fallback: 'Language Support by Level' })}
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10 text-[0.7rem] font-bold uppercase tracking-wider text-primary-400">
                {tHeader('schoolSupport', { fallback: 'School Support' })}
              </li>
              <li>
                <Link href={`/de/${locale}/school/grades-1-6`} className="hover:text-white transition-colors">
                  {tHeader('schoolGrades1To6', { fallback: 'Grades 1–6' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/school/grades-7-9`} className="hover:text-white transition-colors">
                  {tHeader('schoolGrades7To9', { fallback: 'Grades 7–9' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/school/grades-10-12`} className="hover:text-white transition-colors">
                  {tHeader('schoolGrades10To12', { fallback: 'Grades 10–12' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/adults`} className="hover:text-white transition-colors">
                  {tHeader('adults', { fallback: 'Adults' })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Languages & Subjects */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-400">
              {tHeader('languages', { fallback: 'Languages' })}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-primary-200">
              <li>
                <Link href={`/de/${locale}/languages/german`} className="hover:text-white transition-colors">
                  {tHeader('langGerman', { fallback: 'German' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/languages/english`} className="hover:text-white transition-colors">
                  {tHeader('langEnglish', { fallback: 'English' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/languages/french`} className="hover:text-white transition-colors">
                  {tHeader('langFrench', { fallback: 'French' })}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/languages/arabic`} className="hover:text-white transition-colors">
                  {tHeader('langArabic', { fallback: 'Arabic' })}
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10 text-[0.7rem] font-bold uppercase tracking-wider text-primary-400">
                {t('aboutTitle')}
              </li>
              <li>
                <a href={`/de/${locale}#why-spm`} className="hover:text-white transition-colors">
                  {tHeader('whySpm')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}#teacher-quality`} className="hover:text-white transition-colors">
                  {tHeader('teacherQuality')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}#how-it-works`} className="hover:text-white transition-colors">
                  {tHeader('howItWorks')}
                </a>
              </li>
              <li>
                <a href={`/de/${locale}#pricing`} className="hover:text-white transition-colors">
                  {tHeader('pricing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Account & Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-400">
              {t('accountTitle')}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-primary-200">
              <li>
                <Link href={`/de/${locale}/login`} className="hover:text-white transition-colors">
                  {tHeader('login')}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/register`} className="hover:text-white transition-colors">
                  {tHeader('register')}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/trial`} className="hover:text-accent-300 font-semibold transition-colors">
                  {t('freeTrial')}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/privacy`} className="hover:text-white transition-colors">
                  {t('legal.privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/de/${locale}/terms`} className="hover:text-white transition-colors">
                  {t('legal.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

   

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Success Path Mentors. {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-300">
            <Link href={`/de/${locale}/privacy`} className="hover:text-white transition-colors">
              {t('legal.privacy')}
            </Link>
            <span>•</span>
            <Link href={`/de/${locale}/terms`} className="hover:text-white transition-colors">
              {t('legal.terms')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
