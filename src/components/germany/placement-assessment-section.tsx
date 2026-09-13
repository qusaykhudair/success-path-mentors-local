'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowLeft, Phone, Compass, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from './scroll-reveal';
import { getMarketConfig } from '@/config/markets';
import { parseNavigationContext } from '@/lib/market-navigation';
import type { TutoringLocale } from '@/content/germany-tutoring/types';

export function PlacementAssessmentSection() {
  const pathname = usePathname() || '';
  const context = parseNavigationContext(pathname);
  const locale = (context.locale as TutoringLocale) || 'de';
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const marketConfig = getMarketConfig('germany');

  const trialAssessmentHref = `/de/${locale}/trial?intent=assessment`;
  const whatsappUrl = `https://wa.me/${marketConfig.contact.whatsapp}?text=${encodeURIComponent(
    locale === 'de'
      ? 'Hallo, ich möchte eine unverbindliche Einstufungsempfehlung erhalten.'
      : locale === 'ar'
      ? 'مرحباً، أود الحصول على تقييم وتوصية بالمستوى التعليمي المناسب.'
      : 'Hello, I would like to get a free level recommendation.'
  )}`;

  const content = {
    badge: locale === 'de' ? 'Kostenlose Orientierung' : locale === 'ar' ? 'توجيه وتشخيص مجاني' : 'Free Guidance & Assessment',
    headline:
      locale === 'de'
        ? 'Nicht sicher, wo Sie anfangen sollen? Wir finden das richtige Niveau.'
        : locale === 'ar'
        ? 'لست متأكداً من أين تبدأ؟ سنساعدك في تحديد المستوى والمسار الأنسب.'
        : 'Not Sure Where to Start? We’ll Help You Find the Right Level.',
    subheadline:
      locale === 'de'
        ? 'Unsere didaktische Standortbestimmung hilft dabei, den aktuellen Leistungsstand, vorhandene Stärken und Wissenslücken zu erfassen und das beste Lernformat zu empfehlen — ganz ohne Prüfungsdruck.'
        : locale === 'ar'
        ? 'يساعد التقييم التشخيصي في تحديد المستوى الحالي ونقاط القوة والفجوات الدراسية والتوصية بنمط التعلم الأنسب — في أجواء ودية مريحة وبعيداً عن ضغوط الامتحانات.'
        : 'Our diagnostic evaluation identifies current ability, individual strengths, and learning gaps to recommend the ideal tutoring approach — completely stress-free.',
    benefits: [
      locale === 'de' ? 'Objektive Erfassung des aktuellen Leistungsstands' : locale === 'ar' ? 'تحديد دقيق للمستوى الدراسي الحالي' : 'Accurate assessment of current ability',
      locale === 'de' ? 'Identifikation konkreter Wissenslücken' : locale === 'ar' ? 'تشخيص الفجوات التعليمية المتراكمة' : 'Pinpointing specific learning gaps',
      locale === 'de' ? 'Klarer, individueller Förderfahrplan' : locale === 'ar' ? 'خارطة طريق تعليمية واضحة ومخصصة' : 'Clear, tailored tutoring roadmap',
      locale === 'de' ? 'Kein offizieller Test — 100% beratend und ermutigend' : locale === 'ar' ? 'ليس اختباراً رسمياً بل جلسة تشخيصية مشجعة' : 'Diagnostic and supportive, not an official exam',
    ],
    steps: [
      {
        num: '1',
        title: locale === 'de' ? '1. Über den Lernenden sprechen' : locale === 'ar' ? '1. أخبرنا عن الطالب' : '1. Tell Us About the Learner',
        desc: locale === 'de' ? 'Schulform, Fach, Klasse und bisherige Erfahrungen kurz schildern.' : locale === 'ar' ? 'شاركنا الصف والمادة وأهم الصعوبات والتطلعات.' : 'Share the grade, subject, and learning background.',
      },
      {
        num: '2',
        title: locale === 'de' ? '2. Kurze Einstufung' : locale === 'ar' ? '2. جلسة تشخيصية قصيرة' : '2. Complete Short Assessment',
        desc: locale === 'de' ? 'Ein entspanntes, freundliches Gespräch mit einer Fachlehrkraft.' : locale === 'ar' ? 'محادثة ودية مريحة مع معلم متخصص لتشخيص المعارف.' : 'A friendly, low-stress conversation with a subject tutor.',
      },
      {
        num: '3',
        title: locale === 'de' ? '3. Empfehlung erhalten' : locale === 'ar' ? '3. استلام التوصية' : '3. Receive Recommendation',
        desc: locale === 'de' ? 'Wir schlagen das passende Lernformat und den richtigen Einstieg vor.' : locale === 'ar' ? 'نحدد المستوى ونمط التدريس الملائم وخطة البداية.' : 'Get a personalized level and learning format recommendation.',
      },
      {
        num: '4',
        title: locale === 'de' ? '4. Lehrkraft kennenlernen' : locale === 'ar' ? '4. لقاء المعلم' : '4. Meet the Teacher',
        desc: locale === 'de' ? 'Eine kostenfreie 1-zu-1 Schnupperstunde zum Wohlfühlen.' : locale === 'ar' ? 'حصة تجريبية مباشرة للتعرف على طريقة التدريس.' : 'An interactive trial session to test chemistry and flow.',
      },
      {
        num: '5',
        title: locale === 'de' ? '5. Mit Plan starten' : locale === 'ar' ? '5. الانطلاق بخطة واضحة' : '5. Begin with Clear Plan',
        desc: locale === 'de' ? 'Strukturierter Unterricht mit kontinuierlichem Fortschritts-Feedback.' : locale === 'ar' ? 'بدء الدروس بانتظام مع تقارير ومتابعة دورية.' : 'Begin focused tutoring with regular progress reviews.',
      },
    ],
    primaryCta: locale === 'de' ? 'Einstufungsempfehlung anfordern' : locale === 'ar' ? 'احصل على توصية بمستواك' : 'Get My Level Recommendation',
    secondaryCta: locale === 'de' ? 'Per WhatsApp beraten lassen' : locale === 'ar' ? 'استشرنا عبر واتساب' : 'Chat on WhatsApp',
  };

  return (
    <section id="assessment" className="relative scroll-mt-20 bg-gradient-to-b from-white via-primary-50/40 to-white py-20 md:py-32 border-t border-primary-100/70">
      <Container>
        <div className="rounded-3xl border border-primary-100 bg-white p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-3.5 py-1 text-xs font-bold text-accent-800 border border-accent-200/70">
                <Compass className="h-3.5 w-3.5 text-accent-600" />
                <span>{content.badge}</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl lg:text-5xl text-balance leading-tight">
                {content.headline}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-primary-600 leading-relaxed">
                {content.subheadline}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {content.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-primary-800">
                    <CheckCircle2 className="h-4 w-4 text-accent-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
              <Link
                href={trialAssessmentHref}
                className="inline-flex min-h-[3.25rem] w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-accent-600 px-8 text-base font-bold text-white shadow-md hover:bg-accent-700 transition-all"
              >
                <span>{content.primaryCta}</span>
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3rem] w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-primary-200 bg-white px-6 text-sm font-semibold text-primary-900 hover:bg-primary-50 transition-colors shadow-2xs"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>{content.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="mt-14 pt-12 border-t border-primary-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-8 text-center sm:text-start">
              {locale === 'de' ? 'Der 5-Schritte-Ablauf zur idealen Förderung' : locale === 'ar' ? 'مسار التقييم في 5 خطوات ميسرة' : 'The 5-Step Path to Ideal Support'}
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {content.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col rounded-2xl bg-primary-50/60 p-5 border border-primary-100/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-600 text-xs font-black text-white mb-3">
                    {step.num}
                  </span>
                  <h4 className="text-sm font-bold text-primary-950 mb-1">{step.title}</h4>
                  <p className="text-xs text-primary-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
