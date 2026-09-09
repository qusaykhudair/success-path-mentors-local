'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { parseNavigationContext } from '@/lib/market-navigation';
import { getMarketConfig } from '@/config/markets';
import {
  MessageSquare,
  X,
  Calendar,
  Mail,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export function MarketFloatingWidgets() {
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const locale = (context.locale as 'de' | 'en' | 'ar') || 'de';
  const marketConfig = getMarketConfig('germany');
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [assistantOpen, setAssistantOpen] = useState(false);

  const whatsappInquiry =
    locale === 'de'
      ? 'Hallo Success Path Mentors, ich habe eine Frage zum Nachhilfe- und Sprachprogramm in Deutschland.'
      : locale === 'ar'
      ? 'مرحبًا Success Path Mentors، لدي استفسار بخصوص برامج التدريس واللغات في ألمانيا.'
      : 'Hello Success Path Mentors, I have an inquiry regarding tutoring and language programs in Germany.';

  const whatsappUrl = `https://wa.me/${marketConfig.contact.whatsapp}?text=${encodeURIComponent(
    whatsappInquiry
  )}`;

  const assistantCopy = {
    de: {
      title: 'SPM Assistent',
      status: 'Online • Antwortet schnell',
      greeting: 'Willkommen bei Success Path Mentors! Wie können wir Ihnen heute helfen?',
      trialTitle: 'Kostenlose Probestunde anfragen',
      trialDesc: 'Finden Sie unverbindlich den passenden Lehrer.',
      whatsappTitle: 'WhatsApp Support',
      whatsappDesc: '+49 1512 3974353 direkt kontaktieren',
      emailTitle: 'E-Mail Support',
      emailDesc: 'europe@successpathmentors.net',
      faqTitle: 'Häufig gestellte Fragen',
      faqDesc: 'Antworten zu Preisen, Ablauf und Fächern.',
      close: 'Schließen',
    },
    en: {
      title: 'SPM Assistant',
      status: 'Online • Quick response',
      greeting: 'Welcome to Success Path Mentors! How can we assist you today?',
      trialTitle: 'Request Free Trial Lesson',
      trialDesc: 'Match with a certified tutor risk-free.',
      whatsappTitle: 'WhatsApp Support',
      whatsappDesc: 'Contact +49 1512 3974353 directly',
      emailTitle: 'Email Support',
      emailDesc: 'europe@successpathmentors.net',
      faqTitle: 'Frequently Asked Questions',
      faqDesc: 'Answers on pricing, process, and tutors.',
      close: 'Close',
    },
    ar: {
      title: 'مساعد Success Path Mentors',
      status: 'متصل الآن • استجابة سريعة',
      greeting: 'مرحبًا بك في Success Path Mentors! كيف يمكننا مساعدتك اليوم؟',
      trialTitle: 'حجز حصة تجريبية مجانية',
      trialDesc: 'مطابقة المعلم المناسب لك بدون أي التزام.',
      whatsappTitle: 'الدعم عبر واتساب',
      whatsappDesc: 'تواصل مباشرة على +49 1512 3974353',
      emailTitle: 'الدعم عبر البريد الإلكتروني',
      emailDesc: 'europe@successpathmentors.net',
      faqTitle: 'الأسئلة الشائعة',
      faqDesc: 'إجابات حول الأسعار والخطوات والمواد.',
      close: 'إغلاق',
    },
  }[locale];

  const handleAssistantToggle = () => {
    // Check if official n8n chat button exists and toggle it if present
    const n8nButton = document.querySelector<HTMLButtonElement>('#n8n-chat button');
    if (n8nButton) {
      n8nButton.click();
    } else {
      setAssistantOpen((prev) => !prev);
    }
  };

  return (
    <>
      {/* =========================================================================
          1. FLOATING WHATSAPP BUTTON — ALWAYS FIXED ON THE RIGHT
          ========================================================================= */}
      <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-4 z-40 sm:right-6 lg:bottom-8 lg:right-8">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={locale === 'de' ? 'WhatsApp Chat' : locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_38px_rgba(37,211,102,0.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          {/* Pulsing ring */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 animate-ping duration-1000 group-hover:opacity-0"
          />

          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="h-8 w-8 fill-current transition-transform duration-200 group-hover:scale-110"
          >
            <path d="M16.03 3.2A12.55 12.55 0 0 0 5.18 22.04L3.2 28.8l6.93-1.82A12.58 12.58 0 1 0 16.03 3.2Zm0 22.82c-1.84 0-3.64-.5-5.2-1.45l-.37-.22-4.11 1.08 1.1-4-.24-.39a10.26 10.26 0 1 1 8.82 4.98Zm5.63-7.68c-.31-.16-1.83-.9-2.11-1.01-.28-.1-.49-.16-.69.16-.2.31-.8 1.01-.98 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54a9.35 9.35 0 0 1-1.73-2.15c-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.69-1.66-.95-2.27-.25-.6-.51-.52-.69-.53h-.59c-.21 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58 0 1.52 1.11 2.99 1.26 3.2.16.21 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.73.26-1.35.18-1.48-.07-.13-.28-.2-.59-.36Z" />
          </svg>

          {/* Hover tooltip */}
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-10 end-0 hidden whitespace-nowrap rounded-lg bg-primary-950 px-3 py-1 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block"
          >
            WhatsApp
          </span>
        </a>
      </aside>

      {/* =========================================================================
          2. FLOATING CHATBOT WIDGET — ALWAYS FIXED ON THE LEFT
          ========================================================================= */}
      <aside aria-label="Support Assistant" className="fixed bottom-6 left-4 z-40 sm:left-6 lg:bottom-8 lg:left-8">
        <button
          type="button"
          onClick={handleAssistantToggle}
          aria-expanded={assistantOpen}
          aria-label={assistantCopy.title}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-400 bg-primary-900 text-white shadow-[0_10px_30px_rgba(11,31,58,0.45)] transition-all duration-300 hover:scale-105 hover:bg-primary-850 hover:shadow-[0_14px_38px_rgba(45,212,209,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-400/40"
        >
          {/* Active online green indicator */}
          <span
            aria-hidden="true"
            className="absolute top-1 end-1 flex h-3.5 w-3.5 items-center justify-center"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 border border-primary-900" />
          </span>

          <MessageSquare className="h-7 w-7 text-accent-300 transition-transform duration-200 group-hover:scale-110" />

          {/* Hover tooltip */}
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-10 start-0 hidden whitespace-nowrap rounded-lg bg-primary-950 px-3 py-1 text-xs font-bold text-white shadow-lg transition-opacity group-hover:block"
          >
            {assistantCopy.title}
          </span>
        </button>

        {/* Assistant Dialog (Active when clicked if n8n is not mounted) */}
        {assistantOpen && (
          <div
            dir={isRtl ? 'rtl' : 'ltr'}
            className="absolute bottom-18 start-0 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-primary-800/60 bg-primary-950 p-5 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200 z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 text-primary-950 shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {assistantCopy.title}
                  </h3>
                  <p className="text-[0.7rem] text-emerald-400 font-medium">
                    {assistantCopy.status}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAssistantOpen(false)}
                aria-label={assistantCopy.close}
                className="rounded-lg p-1.5 text-primary-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Greeting */}
            <p className="mt-3 text-xs leading-relaxed text-primary-200">
              {assistantCopy.greeting}
            </p>

            {/* Quick Action Cards */}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`/de/${locale}/trial`}
                onClick={() => setAssistantOpen(false)}
                className="flex items-center justify-between gap-3 rounded-xl border border-accent-400/30 bg-accent-500/15 p-3 text-start transition-all hover:bg-accent-500/25 hover:border-accent-400/60"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="h-4 w-4 text-accent-400 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {assistantCopy.trialTitle}
                    </h4>
                    <p className="text-[0.7rem] text-accent-200/90">
                      {assistantCopy.trialDesc}
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-3.5 w-3.5 text-accent-300 shrink-0" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAssistantOpen(false)}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-start transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 items-center justify-center text-emerald-400 shrink-0">
                    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                      <path d="M16.03 3.2A12.55 12.55 0 0 0 5.18 22.04L3.2 28.8l6.93-1.82A12.58 12.58 0 1 0 16.03 3.2Zm0 22.82c-1.84 0-3.64-.5-5.2-1.45l-.37-.22-4.11 1.08 1.1-4-.24-.39a10.26 10.26 0 1 1 8.82 4.98Zm5.63-7.68c-.31-.16-1.83-.9-2.11-1.01-.28-.1-.49-.16-.69.16-.2.31-.8 1.01-.98 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54a9.35 9.35 0 0 1-1.73-2.15c-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.69-1.66-.95-2.27-.25-.6-.51-.52-.69-.53h-.59c-.21 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58 0 1.52 1.11 2.99 1.26 3.2.16.21 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.73.26-1.35.18-1.48-.07-.13-.28-.2-.59-.36Z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {assistantCopy.whatsappTitle}
                    </h4>
                    <p className="text-[0.7rem] text-primary-300">
                      {assistantCopy.whatsappDesc}
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-3.5 w-3.5 text-primary-300 shrink-0" />
              </a>

              <a
                href={`mailto:${marketConfig.contact.publishedEmail}`}
                onClick={() => setAssistantOpen(false)}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-start transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-accent-300 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {assistantCopy.emailTitle}
                    </h4>
                    <p className="text-[0.7rem] text-primary-300">
                      {assistantCopy.emailDesc}
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-3.5 w-3.5 text-primary-300 shrink-0" />
              </a>

              <a
                href="#faq"
                onClick={() => setAssistantOpen(false)}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-start transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="h-4 w-4 text-accent-300 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {assistantCopy.faqTitle}
                    </h4>
                    <p className="text-[0.7rem] text-primary-300">
                      {assistantCopy.faqDesc}
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-3.5 w-3.5 text-primary-300 shrink-0" />
              </a>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
