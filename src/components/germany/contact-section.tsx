'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, Clock, Headphones, ArrowRight, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { getMarketConfig } from '@/config/markets';
import { usePathname } from 'next/navigation';
import { parseNavigationContext } from '@/lib/market-navigation';

export function ContactSection() {
  const t = useTranslations('contactSection');
  const marketConfig = getMarketConfig('germany');
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const isRtl = context.locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="relative scroll-mt-20 bg-white py-20 md:py-28 border-t border-primary-100/60">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <Headphones className="h-3.5 w-3.5 text-accent-600" />
            <span>{t('eyebrow')}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {t('headline')}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg text-balance">
            {t('subheadline')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* WhatsApp Direct */}
          <div className="flex flex-col justify-between rounded-3xl border border-primary-100 bg-slate-50/60 p-8 shadow-xs hover:border-accent-200 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/80">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary-950">{t('whatsappTitle')}</h3>
              <p className="mt-2 text-sm text-primary-600 leading-relaxed">{t('whatsappDesc')}</p>
              <div className="mt-4 font-mono text-sm font-bold text-primary-900 dir-ltr text-start">
                {marketConfig.contact.whatsappDisplay}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-primary-100">
              <a
                href={`https://wa.me/${marketConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 transition-colors"
              >
                <span>{t('whatsappAction')}</span>
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </div>

          {/* Email Support */}
          <div className="flex flex-col justify-between rounded-3xl border border-primary-100 bg-slate-50/60 p-8 shadow-xs hover:border-accent-200 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-200/80">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary-950">{t('emailTitle')}</h3>
              <p className="mt-2 text-sm text-primary-600 leading-relaxed">{t('emailDesc')}</p>
              <div className="mt-4 font-mono text-sm font-bold text-primary-900 dir-ltr text-start">
                {marketConfig.contact.publishedEmail}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-primary-100">
              <a
                href={`mailto:${marketConfig.contact.publishedEmail}`}
                className="group inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border border-primary-200 bg-white px-5 py-3 text-sm font-bold text-primary-900 shadow-xs hover:bg-primary-50 transition-colors"
              >
                <span>{t('emailAction')}</span>
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </div>

          {/* Service Hours & Team */}
          <div className="flex flex-col justify-between rounded-3xl border border-primary-100 bg-slate-50/60 p-8 shadow-xs hover:border-accent-200 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-200/80">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary-950">{t('hoursTitle')}</h3>
              <p className="mt-2 text-sm text-primary-600 leading-relaxed">{t('hoursDesc')}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary-100/60 px-3.5 py-1.5 text-xs font-bold text-primary-800">
                <span>{t('coordinatorBadge')}</span>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-primary-100">
              <a
                href={`/de/${context.locale}/trial`}
                className="group inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl bg-primary-900 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-800 transition-colors"
              >
                <span>{t('whatsappAction') ? (context.locale === 'de' ? 'Probestunde vereinbaren' : context.locale === 'ar' ? 'طلب جلسة تجريبية' : 'Book a Trial') : 'Book a Trial'}</span>
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
