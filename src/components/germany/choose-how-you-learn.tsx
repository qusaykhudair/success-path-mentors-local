'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Users, Compass, ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from './scroll-reveal';
import { parseNavigationContext } from '@/lib/market-navigation';
import { getMarketChildPath } from '@/lib/market-routing';
import type { TutoringLocale } from '@/content/germany-tutoring/types';

export function ChooseHowYouLearn() {
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const locale = (context.locale as TutoringLocale) || 'de';
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = {
    badge: locale === 'de' ? 'Flexible Lernformate' : locale === 'ar' ? 'أنماط التعلم' : 'Choose How You Learn',
    headline:
      locale === 'de'
        ? 'Wählen Sie das Lernformat, das zu Ihren Zielen passt'
        : locale === 'ar'
        ? 'اختر طريقة التعلم التي تناسب أهدافك'
        : 'Choose How You Learn',
    subheadline:
      locale === 'de'
        ? 'Ob maximale Individualität im Einzelunterricht, motivierende Minigruppen oder strukturierte Sprachstufen: Wir bieten den richtigen Rahmen.'
        : locale === 'ar'
        ? 'سواء كنت تفضل الدروس الفردية المركزة، أو المجموعات المصغرة التفاعلية، أو الدعم اللغوي المنظم بحسب المستوى: نوفر لك النموذج الأمثل.'
        : 'Whether you prefer individual 1-to-1 attention, motivating micro-groups of up to 3, or diagnostic language progression, we provide the right environment.',
    cards: [
      {
        id: 'one-to-one',
        href: getMarketChildPath('germany', locale, ['tutoring', 'one-to-one']),
        trialHref: `${getMarketChildPath('germany', locale, ['trial'])}?service=one-to-one`,
        icon: User,
        badge: locale === 'de' ? 'Höchste Individualität' : locale === 'ar' ? 'تركيز فردي كامل' : 'Personal Focus',
        title: locale === 'de' ? 'Individuelle Einzelnachhilfe' : locale === 'ar' ? 'دروس فردية خاصة (1 لـ 1)' : 'One-to-One Tutoring',
        description:
          locale === 'de'
            ? 'Persönliche Nachhilfe, exakt abgestimmt auf das Leistungsniveau, das Tempo und die schulischen Ziele eines einzelnen Schülers.'
            : locale === 'ar'
            ? 'تعليم مخصص بالكامل يبنى حول مستوى طالب واحد، بسرعته وأهدافه المدرسية الخاصة.'
            : 'Personal tutoring built around one learner’s exact level, pace, and academic goals.',
        points: [
          locale === 'de' ? 'Feste, qualifizierte Lehrkraft' : locale === 'ar' ? 'معلم متخصص ومخصص للطالب' : 'Dedicated matched tutor',
          locale === 'de' ? '100% individuelles Lerntempo' : locale === 'ar' ? 'سرعة تعلم تناسب الطالب تماماً' : 'Learner-specific pacing',
          locale === 'de' ? 'Gezielte Hausaufgaben- & Prüfungshilfe' : locale === 'ar' ? 'دعم مباشر للواجبات والامتحانات' : 'Homework & exam coaching',
        ],
        cta: locale === 'de' ? 'Einzelunterricht entdecken' : locale === 'ar' ? 'استكشف الدروس الفردية' : 'Explore One-to-One',
        highlight: false,
      },
      {
        id: 'small-groups',
        href: getMarketChildPath('germany', locale, ['tutoring', 'small-groups']),
        trialHref: `${getMarketChildPath('germany', locale, ['trial'])}?service=small-group`,
        icon: Users,
        badge: locale === 'de' ? 'Maximal 3 Lernende' : locale === 'ar' ? 'حتى 3 طلاب فقط' : 'Up to 3 Learners',
        title: locale === 'de' ? 'Smarte Kleingruppen — Bis zu 3' : locale === 'ar' ? 'مجموعات صغيرة — حتى 3 طلاب' : 'Small Groups — Up to 3',
        description:
          locale === 'de'
            ? 'Bezahlbarer Live-Unterricht mit sorgfältig abgestimmten Schülern, hoher Lehrerinteraktion und gegenseitiger Motivation.'
            : locale === 'ar'
            ? 'تعليم مباشر ذكي بتكلفة أقل مع طلاب متقاربين في المستوى وتفاعل عالٍ ومستمر مع المعلم.'
            : 'Affordable live tutoring with carefully matched learners, peer motivation, and strong teacher interaction.',
        points: [
          locale === 'de' ? 'Strikte Obergrenze: maximal 3 Schüler' : locale === 'ar' ? 'حد أقصى 3 طلاب دون أي زيادة' : 'Strict maximum of 3 learners',
          locale === 'de' ? 'Gleiches Leistungsniveau & Ziele' : locale === 'ar' ? 'تقارب تام في المستوى والمنهج' : 'Matched by level & curriculum',
          locale === 'de' ? 'Smarter Preisvorteil pro Schüler' : locale === 'ar' ? 'قيمة تعليمية ممتازة وتكلفة أقل' : 'Smarter value per learner',
        ],
        cta: locale === 'de' ? 'Kleingruppen entdecken' : locale === 'ar' ? 'استكشف المجموعات المصغرة' : 'Explore Small Groups',
        highlight: true,
      },
      {
        id: 'language-levels',
        href: getMarketChildPath('germany', locale, ['tutoring', 'language-levels']),
        trialHref: `${getMarketChildPath('germany', locale, ['trial'])}?service=language-levels`,
        icon: Compass,
        badge: locale === 'de' ? 'Stufenbasiert (A1–C2)' : locale === 'ar' ? 'تدرج مستويات A1–C2' : 'Level-Based (A1–C2)',
        title: locale === 'de' ? 'Sprachförderung nach Stufen' : locale === 'ar' ? 'دعم لغوي منظم حسب المستوى' : 'Language Support by Level',
        description:
          locale === 'de'
            ? 'Deutsch-, Englisch-, Französisch- und Arabischnachhilfe, strukturiert organisiert nach dem aktuellen Sprachstand und individuellen Zielen.'
            : locale === 'ar'
            ? 'دروس تقوية في اللغات الألمانية والإنجليزية والفرنسية والعربية منظمة وفق مستواك الحالي وأهدافك.'
            : 'English, German, French, and Arabic tutoring organized systematically around the learner’s current level and goals.',
        points: [
          locale === 'de' ? 'Einstufungs- & Bedarfsanalyse' : locale === 'ar' ? 'تحديد دقيق للمستوى والاحتياج' : 'Placement & diagnostic assessment',
          // Language level specific here
          locale === 'de' ? 'Orientierung an Referenzstufen' : locale === 'ar' ? 'استرشاد بمعايير المستويات اللغوية' : 'Language level-specific guidance',
          locale === 'de' ? 'Klare Fortschrittsmeilensteine' : locale === 'ar' ? 'مراحل ومحطات تقدم واضحة' : 'Step-by-step milestone reviews',
        ],
        cta: locale === 'de' ? 'Mein Sprachniveau finden' : locale === 'ar' ? 'حدد مستواك اللغوي' : 'Find My Level',
        highlight: false,
      },
    ],
  };

  return (
    <section id="choose-how-you-learn" className="relative scroll-mt-20 bg-primary-50/50 py-20 md:py-32 border-t border-primary-100/60">
      <Container>
        <ScrollReveal className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 shadow-2xs border border-accent-200/70">
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {content.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.id} delay={idx * 0.1} yOffset={20}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                    card.highlight
                      ? 'border-accent-400 ring-2 ring-accent-500/20 shadow-md'
                      : 'border-primary-100 shadow-sm hover:border-accent-300'
                  }`}
                >
                  {card.highlight && (
                    <span className="absolute -top-3.5 start-8 rounded-full bg-accent-600 px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                      {locale === 'de' ? 'Beliebte Wahl' : locale === 'ar' ? 'الخيار الأكثر طلباً' : 'Popular Value Choice'}
                    </span>
                  )}

                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-primary-950 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-base text-primary-600 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="my-6 space-y-2.5 border-t border-primary-50 pt-5">
                      {card.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-primary-800">
                          <CheckCircle2 className="h-4 w-4 text-accent-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary-100/70">
                    <Link
                      href={card.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-950 px-5 py-3 text-sm font-bold text-white shadow-2xs transition-all hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>{card.cta}</span>
                      <ArrowIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
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
