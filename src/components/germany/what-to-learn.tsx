'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from './scroll-reveal';
import { LANGUAGE_BADGES } from './language-icons';
import { parseNavigationContext } from '@/lib/market-navigation';
import type { TutoringLocale } from '@/content/germany-tutoring/types';

export function WhatToLearn() {
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const locale = (context.locale as TutoringLocale) || 'de';
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = {
    badge: locale === 'de' ? 'Umfassendes Förderangebot' : locale === 'ar' ? 'ماذا تريد أن تتعلم؟' : 'What Do You Want to Learn?',
    headline:
      locale === 'de'
        ? 'Finden Sie genau das passende Fachgebiet'
        : locale === 'ar'
        ? 'اختر المادة أو المرحلة الدراسية المناسبة لك'
        : 'What Do You Want to Learn?',
    subheadline:
      locale === 'de'
        ? 'Gezielte Sprachförderung und schulische Unterstützung von der 1. Klasse bis zum Schulabschluss und für Erwachsene.'
        : locale === 'ar'
        ? 'تعليم اللغات ودعم المناهج المدرسية من المرحلة الابتدائية حتى الثانوية والشهادات العامة وتعليم الكبار.'
        : 'Targeted language tutoring and academic school support from primary years through graduation and adult life.',
    cards: [
      {
        id: 'english',
        href: `/de/${locale}/languages/english`,
        badgeType: 'badge',
        BadgeComponent: LANGUAGE_BADGES.english,
        tag: locale === 'de' ? 'Sprachen' : locale === 'ar' ? 'لغات' : 'Languages',
        title: locale === 'de' ? 'Englisch' : locale === 'ar' ? 'اللغة الإنجليزية' : 'English',
        description:
          locale === 'de'
            ? 'Schulenglisch, Grammatik, flüssige Konversation und Vorbereitung auf MSA und Abitur.'
            : locale === 'ar'
            ? 'دعم المنهج المدرسي، المحادثة والطلاقة الشفوية، القواعد، واختبارات اللغة.'
            : 'School curriculum, conversational fluency, grammar, homework, and exam preparation.',
        cta: locale === 'de' ? 'Englisch entdecken' : locale === 'ar' ? 'استكشف الإنجليزية' : 'Explore English',
      },
      {
        id: 'german',
        href: `/de/${locale}/languages/german`,
        badgeType: 'badge',
        BadgeComponent: LANGUAGE_BADGES.german,
        tag: locale === 'de' ? 'Sprachen' : locale === 'ar' ? 'لغات' : 'Languages',
        title: locale === 'de' ? 'Deutsch' : locale === 'ar' ? 'اللغة الألمانية' : 'German',
        description:
          locale === 'de'
            ? 'Schuldeutsch, Rechtschreibung, Aufsatztraining und Goethe/telc Prüfungsvorbereitung.'
            : locale === 'ar'
            ? 'مناهج المدارس الألمانية، القواعد، المحادثة، والتدريب لامتحانات Goethe و telc.'
            : 'School German, spelling, essay writing, conversation, and Goethe/telc prep tutoring.',
        cta: locale === 'de' ? 'Deutsch entdecken' : locale === 'ar' ? 'استكشف الألمانية' : 'Explore German',
      },
      {
        id: 'french',
        href: `/de/${locale}/languages/french`,
        badgeType: 'badge',
        BadgeComponent: LANGUAGE_BADGES.french,
        tag: locale === 'de' ? 'Sprachen' : locale === 'ar' ? 'لغات' : 'Languages',
        title: locale === 'de' ? 'Französisch' : locale === 'ar' ? 'اللغة الفرنسية' : 'French',
        description:
          locale === 'de'
            ? '2. und 3. Fremdsprache in der Schule, Zeitenfolge, Aussprache und DELF-Vorbereitung.'
            : locale === 'ar'
            ? 'اللغة الأجنبية للمدارس، تصريف الأفعال، المحادثة، والتدريب لاختبارات DELF.'
            : 'Second school language, grammar mechanics, pronunciation, and DELF prep tutoring.',
        cta: locale === 'de' ? 'Französisch entdecken' : locale === 'ar' ? 'استكشف الفرنسية' : 'Explore French',
      },
      {
        id: 'arabic',
        href: `/de/${locale}/languages/arabic`,
        badgeType: 'badge',
        BadgeComponent: LANGUAGE_BADGES.arabic,
        tag: locale === 'de' ? 'Sprachen' : locale === 'ar' ? 'لغات' : 'Languages',
        title: locale === 'de' ? 'Arabisch' : locale === 'ar' ? 'اللغة العربية' : 'Arabic',
        description:
          locale === 'de'
            ? 'Arabisch als Herkunftssprache für Kinder in Europa, Schrift, Lesen und Hocharabisch.'
            : locale === 'ar'
            ? 'تعليم القراءة والكتابة لأبناء الجاليات في أوروبا، الفصحى، والمحادثة اليومية.'
            : 'Heritage literacy, phonics, reading, Modern Standard Arabic, and conversation.',
        cta: locale === 'de' ? 'Arabisch entdecken' : locale === 'ar' ? 'استكشف العربية' : 'Explore Arabic',
      },
      {
        id: 'grades-1-6',
        href: `/de/${locale}/school/grades-1-6`,
        badgeType: 'icon',
        Icon: BookOpen,
        tag: locale === 'de' ? 'Schule' : locale === 'ar' ? 'المدرسة' : 'School',
        title: locale === 'de' ? 'Klassen 1–6' : locale === 'ar' ? 'الصفوف 1–6' : 'Grades 1–6',
        description:
          locale === 'de'
            ? 'Grundschule & Orientierungsstufe: Mathe-Grundlagen, Lesen, Rechtschreibung und Hausaufgaben.'
            : locale === 'ar'
            ? 'المرحلة الابتدائية والتأسيس: أساسيات الرياضيات، القراءة، ومتابعة الواجبات.'
            : 'Foundation years: math foundations, early literacy, reading, and steady homework habits.',
        cta: locale === 'de' ? 'Klassen 1–6 entdecken' : locale === 'ar' ? 'استكشف الصفوف 1–6' : 'Explore Grades 1–6',
      },
      {
        id: 'grades-7-9',
        href: `/de/${locale}/school/grades-7-9`,
        badgeType: 'icon',
        Icon: GraduationCap,
        tag: locale === 'de' ? 'Schule' : locale === 'ar' ? 'المدرسة' : 'School',
        title: locale === 'de' ? 'Klassen 7–9' : locale === 'ar' ? 'الصفوف 7–9' : 'Grades 7–9',
        description:
          locale === 'de'
            ? 'Mittelstufe: Mathe, Naturwissenschaften, Sprachen und Schließen wichtiger Lernlücken.'
            : locale === 'ar'
            ? 'المرحلة المتوسطة: الجبر والهندسة، العلوم، اللغات، وسد الفجوات المتراكمة.'
            : 'Middle years: algebra, sciences, languages, study skills, and closing learning gaps.',
        cta: locale === 'de' ? 'Klassen 7–9 entdecken' : locale === 'ar' ? 'استكشف الصفوف 7–9' : 'Explore Grades 7–9',
      },
      {
        id: 'grades-10-12',
        href: `/de/${locale}/school/grades-10-12`,
        badgeType: 'icon',
        Icon: Award,
        tag: locale === 'de' ? 'Schule' : locale === 'ar' ? 'المدرسة' : 'School',
        title: locale === 'de' ? 'Klassen 10–12' : locale === 'ar' ? 'الصفوف 10–12' : 'Grades 10–12',
        description:
          locale === 'de'
            ? 'Oberstufe & Abitur: Analysis, Physik, Chemie, Biologie und gezieltes Prüfungstraining.'
            : locale === 'ar'
            ? 'المرحلة الثانوية والشهادات: التفاضل والتكامل، العلوم المتقدمة، والاستعداد الجامعي.'
            : 'Senior school: advanced calculus, physics, chemistry, biology, and graduation exam prep.',
        cta: locale === 'de' ? 'Klassen 10–12 entdecken' : locale === 'ar' ? 'استكشف الصفوف 10–12' : 'Explore Grades 10–12',
      },
      {
        id: 'adults',
        href: `/de/${locale}/adults`,
        badgeType: 'icon',
        Icon: Briefcase,
        tag: locale === 'de' ? 'Erwachsene' : locale === 'ar' ? 'البالغين' : 'Adults',
        title: locale === 'de' ? 'Erwachsenenbildung' : locale === 'ar' ? 'تعليم الكبار' : 'Adults',
        description:
          locale === 'de'
            ? 'Sprachen für Beruf, Alltag und Karriere: Business English, Deutsch für den Beruf, Alltagssprache.'
            : locale === 'ar'
            ? 'لغات العمل والحياة اليومية: ألماني وظيفي، إنجليزي أعمال، ومحادثة للاندماج والمهنة.'
            : 'Language for life, work, and relocation: business English, vocational German, and dialogue.',
        cta: locale === 'de' ? 'Erwachsenenbildung entdecken' : locale === 'ar' ? 'استكشف برامج الكبار' : 'Explore Adults',
      },
    ],
  };

  return (
    <section id="what-to-learn" className="relative scroll-mt-20 bg-white py-20 md:py-32">
      <Container>
        <ScrollReveal className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200/80">
            <Sparkles className="h-3.5 w-3.5 text-accent-600" />
            <span>{content.badge}</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl md:text-5xl text-balance">
            {content.headline}
          </h2>

          <p className="max-w-2xl text-base text-primary-700 sm:text-lg leading-relaxed text-balance">
            {content.subheadline}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card, idx) => {
            return (
              <ScrollReveal key={card.id} delay={idx * 0.05} yOffset={15}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-primary-100 bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-accent-300 hover:shadow-md">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      {card.badgeType === 'badge' && card.BadgeComponent ? (
                        <div className="flex h-12 w-12 items-center justify-center transition-transform duration-200 group-hover:scale-105">
                          <card.BadgeComponent className="h-10 w-10 drop-shadow-xs" />
                        </div>
                      ) : card.Icon ? (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                          <card.Icon className="h-6 w-6" />
                        </div>
                      ) : null}

                      <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-[0.7rem] font-bold text-primary-600 uppercase">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-primary-950 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-sm text-primary-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary-100/60">
                    <Link
                      href={card.href}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-800 transition-colors"
                    >
                      <span>{card.cta}</span>
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
