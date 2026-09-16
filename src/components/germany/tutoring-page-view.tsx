'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock,
  Users,
  User,
  Target,
  BookOpen,
  Sparkles,
  Compass,
  Calendar,
  Award,
  ChevronDown,
  Info,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from './scroll-reveal';
import { getMarketConfig } from '@/config/markets';
import { getMarketChildPath, getMarketLocalePath } from '@/lib/market-routing';
import { CEFR_DISCLAIMER } from '@/content/germany-tutoring/pages';
import type { TutoringLocale, TutoringPageContent } from '@/content/germany-tutoring/types';
import { cn } from '@/lib/utils';

interface TutoringPageViewProps {
  readonly page: TutoringPageContent;
  readonly locale: TutoringLocale;
}

const ICON_MAP = {
  user: User,
  users: Users,
  target: Target,
  book: BookOpen,
  award: Award,
  clock: Clock,
  sparkles: Sparkles,
  compass: Compass,
  calendar: Calendar,
  shield: ShieldCheck,
};

export function TutoringPageView({ page, locale }: TutoringPageViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const marketConfig = getMarketConfig('germany');

  const trialHref = `${getMarketChildPath('germany', locale, ['trial'])}?service=${encodeURIComponent(page.serviceId)}`;
  const assessmentHref = `${getMarketChildPath('germany', locale, ['trial'])}?service=${encodeURIComponent(page.serviceId)}&intent=assessment`;
  const whatsappUrl = `https://wa.me/${marketConfig.contact.whatsapp}?text=${encodeURIComponent(
    locale === 'de'
      ? `Hallo, ich interessiere mich für: ${page.hero.title}`
      : locale === 'ar'
      ? `مرحباً، أود الاستفسار عن: ${page.hero.title}`
      : `Hello, I would like to inquire about: ${page.hero.title}`
  )}`;

  const categoryLabels: Record<string, Record<TutoringLocale, string>> = {
    format: { en: 'Learning Format', de: 'Lernformat', ar: 'نمط التعلم' },
    language: { en: 'Language Tutoring', de: 'Sprachnachhilfe', ar: 'تعليم اللغات' },
    school: { en: 'School Support', de: 'Schulnachhilfe', ar: 'الدعم المدرسي' },
    adults: { en: 'Adult Education', de: 'Erwachsenenbildung', ar: 'تعليم الكبار' },
  };

  const breadcrumbCategory = categoryLabels[page.category]?.[locale] || page.category;

  const placementSteps = [
    {
      step: '1',
      title: locale === 'de' ? 'Bedarf mitteilen' : locale === 'ar' ? 'أخبرنا عن الطالب' : 'Tell Us About the Learner',
      desc: locale === 'de' ? 'Klasse, Fach und aktuelle Hürden angeben.' : locale === 'ar' ? 'حدد الصف والمادة وأهم الصعوبات الحالية.' : 'Share grade, subject, and current challenges.',
    },
    {
      step: '2',
      title: locale === 'de' ? 'Kurze Einstufung' : locale === 'ar' ? 'تقييم تشخيصي موجز' : 'Complete Short Assessment',
      desc: locale === 'de' ? 'Kostenloses Gespräch zur Standortermittlung.' : locale === 'ar' ? 'جلسة ودية لتشخيص المستوى والفجوات.' : 'Friendly diagnostic check of level and gaps.',
    },
    {
      step: '3',
      title: locale === 'de' ? 'Empfehlung erhalten' : locale === 'ar' ? 'استلام توصية الخطة' : 'Receive Recommendation',
      desc: locale === 'de' ? 'Passendes Lernformat & Zielvorgaben.' : locale === 'ar' ? 'تحديد المستوى ونمط التعلم الأنسب.' : 'Tailored tutoring format and level plan.',
    },
    {
      step: '4',
      title: locale === 'de' ? 'Lehrer kennenlernen' : locale === 'ar' ? 'لقاء المعلم المخصص' : 'Meet Your Teacher',
      desc: locale === 'de' ? 'Unverbindliche 1-zu-1 Probestunde.' : locale === 'ar' ? 'حصة تجريبية مباشرة للتعارف والشرح.' : 'Interactive 1-to-1 live trial session.',
    },
    {
      step: '5',
      title: locale === 'de' ? 'Mit Plan durchstarten' : locale === 'ar' ? 'الانطلاق بخطة محكمة' : 'Begin with Clear Plan',
      desc: locale === 'de' ? 'Strukturierter Unterricht & Fortschrittschecks.' : locale === 'ar' ? 'دروس منتظمة ومتابعة مستمرة للتفوق.' : 'Structured lessons and regular progress reviews.',
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/70 via-white to-white pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-primary-500">
            <Link href={getMarketLocalePath('germany', locale)} className="hover:text-primary-900 transition-colors">
              {locale === 'de' ? 'Startseite' : locale === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-primary-600">{breadcrumbCategory}</span>
            <span>/</span>
            <span className="text-accent-700 font-bold">{page.hero.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-200 bg-accent-50/80 px-4 py-1.5 text-xs font-bold text-accent-800 shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-accent-600" />
                <span>{page.hero.badge}</span>
              </div>

              {/* H1 Main Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight text-primary-950 sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                {page.hero.headline}
              </h1>

              {/* Subheadline */}
              <p className="max-w-2xl text-lg text-primary-700 sm:text-xl leading-relaxed">
                {page.hero.subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={trialHref}
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-2xl bg-accent-600 px-7 text-base font-bold text-white shadow-md transition-all hover:bg-accent-700 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{page.hero.primaryCta}</span>
                  <ArrowIcon className="h-4 w-4 shrink-0" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-primary-200 bg-white px-6 text-sm font-bold text-primary-900 shadow-2xs transition-all hover:border-accent-300 hover:bg-accent-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{page.hero.secondaryCta}</span>
                </a>
              </div>

              {/* Value Signals */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-primary-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-600 shrink-0" />
                  <span>{locale === 'de' ? 'Geprüfte Fachlehrer' : locale === 'ar' ? 'معلمون مؤهلون ومعتمدون' : 'Screened Subject Tutors'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-600 shrink-0" />
                  <span>{locale === 'de' ? 'Kostenlose Probestunde' : locale === 'ar' ? 'حصة تجريبية مجانية 100%' : '100% Free Trial Session'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-600 shrink-0" />
                  <span>{locale === 'de' ? 'Flexible Unterrichtszeiten' : locale === 'ar' ? 'أوقات دراسية مرنة' : 'Flexible Scheduling'}</span>
                </div>
              </div>
            </div>

            {/* Right Card / Summary Panel */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="relative rounded-3xl border border-primary-100 bg-white p-6 sm:p-8 shadow-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-primary-50 px-3 py-1 text-xs font-bold text-primary-800">
                  <Layers className="h-4 w-4 text-accent-600" />
                  <span>{locale === 'de' ? 'Überblick & Eckdaten' : locale === 'ar' ? 'ملخص الخدمة' : 'Service Overview'}</span>
                </div>

                <h2 className="text-xl font-bold text-primary-950">
                  {page.hero.title}
                </h2>
                <p className="mt-2 text-sm text-primary-600 leading-relaxed">
                  {locale === 'de'
                    ? 'Gezielte pädagogische Förderung, persönlicher Ansprechpartner und messbare Lernfortschritte.'
                    : locale === 'ar'
                    ? 'دعم تعليمي متخصص، وإشراف تربوي متكامل، ونتائج دراسية ملموسة.'
                    : 'Targeted pedagogical guidance, personalized coordination, and tangible academic growth.'}
                </p>

                <div className="my-6 space-y-3 border-t border-b border-primary-100/70 py-4 text-xs font-medium text-primary-800">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500">{locale === 'de' ? 'Unterrichtsform:' : locale === 'ar' ? 'نمط الحصة:' : 'Format:'}</span>
                    <span className="font-bold text-primary-900">
                      {page.serviceId === 'small-group'
                        ? locale === 'de' ? 'Minigruppe (max. 3 Schüler)' : locale === 'ar' ? 'مجموعة مصغرة (حتى 3 طلاب)' : 'Small Group (Max 3)'
                        : locale === 'de' ? '1-zu-1 Einzelunterricht' : locale === 'ar' ? 'فردي مباشر (1 لـ 1)' : '1-to-1 Live Online'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500">{locale === 'de' ? 'Unterrichtsort:' : locale === 'ar' ? 'المكان:' : 'Delivery:'}</span>
                    <span className="font-bold text-primary-900">{locale === 'de' ? 'Online (Live & interaktiv)' : locale === 'ar' ? 'أونلاين (تفاعلي مباشر)' : 'Online (Live & Interactive)'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500">{locale === 'de' ? 'Betreuung:' : locale === 'ar' ? 'المتابعة:' : 'Support:'}</span>
                    <span className="font-bold text-primary-900">{locale === 'de' ? 'Feste Lehrkraft & Koordination' : locale === 'ar' ? 'معلم مخصص وفريق دعم' : 'Dedicated Tutor & Coordinator'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500">{locale === 'de' ? 'Kennenlernen:' : locale === 'ar' ? 'التجربة الأولى:' : 'First Step:'}</span>
                    <span className="font-bold text-emerald-700">{locale === 'de' ? '100% Kostenfreie Probestunde' : locale === 'ar' ? 'حصة تجريبية مجانية' : '100% Free Trial'}</span>
                  </div>
                </div>

                <Link
                  href={trialHref}
                  className="flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-xl bg-primary-950 px-5 text-sm font-bold text-white shadow-xs transition-colors hover:bg-accent-600"
                >
                  <span>{locale === 'de' ? 'Jetzt unverbindlich anfragen' : locale === 'ar' ? 'احجز حصتك التجريبية الآن' : 'Request Trial Now'}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CEFR / ACCREDITATION DISCLAIMER BANNER */}
      {page.showCefrDisclaimer && (
        <section className="border-y border-amber-200/60 bg-amber-50/70 py-4">
          <Container>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-amber-950">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="font-bold">
                  {locale === 'de' ? 'Hinweis zum Referenzrahmen: ' : locale === 'ar' ? 'تنويه هام: ' : 'Framework Notice: '}
                </span>
                {CEFR_DISCLAIMER[locale]}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 3. HIGHLIGHTS & PILLARS GRID */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <ScrollReveal className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-3 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl md:text-4xl text-balance">
              {page.highlightsTitle}
            </h2>
            {page.highlightsSubheadline && (
              <p className="text-base text-primary-600 sm:text-lg leading-relaxed text-balance">
                {page.highlightsSubheadline}
              </p>
            )}
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.highlights.map((item, idx) => {
              const Icon = item.iconName ? ICON_MAP[item.iconName] || CheckCircle2 : CheckCircle2;
              return (
                <ScrollReveal key={idx} delay={idx * 0.06} yOffset={15}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-primary-100 bg-white p-7 shadow-xs transition-all duration-200 hover:border-accent-300 hover:shadow-md hover:-translate-y-1">
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      {item.badge && (
                        <span className="mb-2 inline-block text-xs font-bold text-accent-700 uppercase tracking-wide">
                          {item.badge}
                        </span>
                      )}

                      <h3 className="mb-2.5 text-lg font-bold text-primary-950">
                        {item.title}
                      </h3>

                      <p className="text-sm text-primary-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. CURRICULUM & CORE FOCUS AREAS */}
      <section className="bg-primary-50/50 py-20 md:py-28 border-y border-primary-100">
        <Container>
          <ScrollReveal className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-bold text-primary-700 shadow-2xs border border-primary-200/80">
              <BookOpen className="h-3.5 w-3.5 text-accent-600" />
              <span>{locale === 'de' ? 'Strukturierter Lehrplan' : locale === 'ar' ? 'المحتوى والمسارات التعليمية' : 'Curriculum Structure'}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl md:text-4xl text-balance">
              {page.curriculumTitle}
            </h2>
            <p className="text-base text-primary-600 sm:text-lg leading-relaxed text-balance">
              {page.curriculumSubheadline}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {page.curriculumPillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} yOffset={20}>
                <div className="flex h-full flex-col rounded-2xl border border-primary-200/80 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary-950">
                      {pillar.title}
                    </h3>
                    {pillar.badge && (
                      <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-700 border border-accent-200/80">
                        {pillar.badge}
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-3.5 text-sm text-primary-700 flex-1">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-accent-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-primary-100">
                    <Link
                      href={trialHref}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-800 transition-colors"
                    >
                      <span>{locale === 'de' ? 'Hierzu beraten lassen' : locale === 'ar' ? 'استفسر عن هذا المسار' : 'Inquire About This Track'}</span>
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. DIAGNOSTIC ASSESSMENT JOURNEY */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1 text-xs font-bold text-accent-300 border border-accent-400/30 mb-4">
                {locale === 'de' ? 'Nicht sicher, wo Sie starten sollen?' : locale === 'ar' ? 'لست متأكداً من أين تبدأ؟' : 'Not Sure Where to Start?'}
              </span>

              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-balance leading-tight">
                {locale === 'de'
                  ? 'Wir finden gemeinsam das passende Leistungsniveau.'
                  : locale === 'ar'
                  ? 'سنساعدك في تحديد المستوى والمسار الأنسب بدقة.'
                  : 'We’ll Help You Find the Right Level.'}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-primary-200 leading-relaxed">
                {locale === 'de'
                  ? 'Unser unverbindlicher Einstufungs- und Beratungsprozess klärt Stärken, Wissenslücken und das ideale Lernformat in 5 einfachen Schritten:'
                  : locale === 'ar'
                  ? 'عملية التقييم والتوجيه المبدئي تساعد في تحديد نقاط القوة والفجوات التعليمية ونمط التدريس الملائم في 5 خطوات واضحة:'
                  : 'Our friendly placement and advisory flow identifies strengths, knowledge gaps, and the recommended tutoring format in 5 straightforward steps:'}
              </p>
            </div>

            {/* Steps Row */}
            <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {placementSteps.map((s, idx) => (
                <div key={idx} className="flex flex-col rounded-2xl bg-white/10 p-5 backdrop-blur-xs border border-white/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-black text-white mb-3">
                    {s.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-1.5">{s.title}</h4>
                  <p className="text-xs text-primary-200 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={assessmentHref}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-accent-500 px-8 text-base font-bold text-white shadow-lg hover:bg-accent-400 transition-all"
              >
                <span>
                  {locale === 'de'
                    ? 'Einstufungsempfehlung anfordern'
                    : locale === 'ar'
                    ? 'احصل على توصية بمستواك التعليمي'
                    : 'Get My Level Recommendation'}
                </span>
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{locale === 'de' ? 'Direkt auf WhatsApp beraten lassen' : locale === 'ar' ? 'استشارة فورية عبر واتساب' : 'Chat with an Advisor on WhatsApp'}</span>
              </a>
            </div>

            {/* Background glow */}
            <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl pointer-events-none" />
          </div>
        </Container>
      </section>

      {/* 6. TRUST SECTION — MANAGED LEARNING JOURNEY */}
      <section className="py-20 md:py-28 bg-primary-50/40 border-t border-primary-100">
        <Container>
          <ScrollReveal className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-3 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
              {locale === 'de' ? 'Ganzheitliche Betreuung' : locale === 'ar' ? 'رعاية تعليمية شاملة' : 'Quality Assurance'}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl md:text-4xl text-balance">
              {locale === 'de'
                ? 'Mehr als eine Nachhilfestunde — Eine verlässliche Lernbegleitung'
                : locale === 'ar'
                ? 'أكثر من مجرد درس — رحلة تعليمية متكاملة بإشراف دائم'
                : 'More Than a Lesson — A Managed Learning Journey'}
            </h2>
            <p className="text-base text-primary-600 sm:text-lg leading-relaxed text-balance">
              {locale === 'de'
                ? 'Wir überlassen Ihren Lernerfolg nicht dem Zufall, sondern begleiten jeden Schritt mit persönlicher Koordination.'
                : locale === 'ar'
                ? 'لا نترك نجاح الطالب للصدفة، بل نتابع كل خطوة بتنسيق تربوي مستمر يضمن أقصى استفادة.'
                : 'We don’t leave learning progress to chance. Our dedicated coordination team actively manages every stage.'}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: locale === 'de' ? 'Strenge Lehrerauswahl' : locale === 'ar' ? 'فحص دقيق للمعلمين' : 'Screened Qualified Tutors',
                desc: locale === 'de' ? 'Fachliche Prüfung, didaktische Eignung und verlässliche Methoden.' : locale === 'ar' ? 'تدقيق مؤهلات المعلم الأكاديمية والتربوية وخبرته العملية.' : 'Pedagogical vetting and proven subject expertise.',
                icon: ShieldCheck,
              },
              {
                title: locale === 'de' ? 'Passgenaues Matching' : locale === 'ar' ? 'توافق شخصي وأكاديمي' : 'Targeted Tutor Matching',
                desc: locale === 'de' ? 'Zuteilung nach Fachgebiet, Lerntyp und Persönlichkeit.' : locale === 'ar' ? 'اختيار المعلم الأنسب لطباع الطالب واحتياجاته الخاصة.' : 'Matching by subject need, personality, and learning pace.',
                icon: Target,
              },
              {
                title: locale === 'de' ? 'Regelmäßige Lernchecks' : locale === 'ar' ? 'تقييم دوري ومتابعة' : 'Progress Checks',
                desc: locale === 'de' ? 'Transparente Rückmeldungen für Eltern nach Lernabschnitten.' : locale === 'ar' ? 'تقارير دورية تطلع الأسرة على التطور الأكاديمي أولاً بأول.' : 'Ongoing feedback summaries for parents and adult learners.',
                icon: Award,
              },
              {
                title: locale === 'de' ? 'Lehrerwechsel-Garantie' : locale === 'ar' ? 'ضمان استبدال المعلم' : 'Tutor Replacement Support',
                desc: locale === 'de' ? 'Reibungsloser, kostenfreier Wechsel, falls die Chemie nicht stimmt.' : locale === 'ar' ? 'إمكانية تغيير المعلم بسلاسة وبدون أي رسوم إذا دعت الحاجة.' : 'Seamless, free tutor re-matching if compatibility isn’t ideal.',
                icon: Users,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="flex flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-2xs">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-primary-950 mb-1.5">{p.title}</h4>
                  <p className="text-xs text-primary-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 7. FAQS */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="max-w-4xl">
          <ScrollReveal className="mx-auto mb-14 flex flex-col items-center gap-3 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl md:text-4xl">
              {locale === 'de' ? 'Häufig gestellte Fragen' : locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-base text-primary-600 sm:text-lg">
              {locale === 'de' ? 'Alles Wichtige zu unserem Unterricht und Ablauf.' : locale === 'ar' ? 'إجابات واضحة عن كل ما يخص الدروس والتنسيق.' : 'Clear answers about our tutoring model and structure.'}
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {page.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-primary-100 bg-white p-6 shadow-2xs transition-colors hover:border-primary-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-start font-bold text-primary-950 gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={cn('h-5 w-5 text-primary-400 shrink-0 transition-transform duration-200', isOpen && 'rotate-180 text-accent-600')}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-4 border-t border-primary-50 pt-4 text-sm text-primary-600 leading-relaxed animate-in fade-in-50 duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. BOTTOM CONVERSION CTA */}
      <section className="bg-primary-950 py-16 text-white text-center">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight leading-tight">
            {locale === 'de'
              ? 'Bereit für den nächsten Lernschritt?'
              : locale === 'ar'
              ? 'هل أنت مستعد للانطلاق وتحقيق أفضل النتائج؟'
              : 'Ready to Start Your Learning Journey?'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary-200 leading-relaxed">
            {locale === 'de'
              ? 'Testen Sie unseren Unterricht ganz entspannt in einer kostenlosen Probestunde ohne Risiko oder Vertragsbindung.'
              : locale === 'ar'
              ? 'جرب حصتك الأولى مجاناً دون أي التزام مالي أو تعاقدي وتعرف على أسلوبنا المتميز.'
              : 'Experience our supportive tutoring firsthand with a 100% free trial session. No commitment required.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={trialHref}
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-accent-500 px-8 text-base font-bold text-white shadow-lg hover:bg-accent-400 transition-all"
            >
              <span>{page.hero.primaryCta}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>{locale === 'de' ? 'Fragen per WhatsApp stellen' : locale === 'ar' ? 'تحدث معنا عبر واتساب' : 'Ask on WhatsApp'}</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
