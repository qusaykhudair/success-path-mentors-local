import Link from 'next/link';

import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Globe,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

import {
  LocationIcon,
} from '@/components/locations/location-icon';
import {
  routePath,
} from '@/config/routes';
import {
  siteConfig,
  type SiteLocale,
} from '@/config/site';
import type {
  LocalizedLocationPage,
} from '@/types/location';
import { buildTrialLessonMessage, buildWhatsAppHref } from '@/lib/whatsapp';

interface LocationPageContentProps {
  locale: SiteLocale;
  page: LocalizedLocationPage;
  ancestors: LocalizedLocationPage[];
  childLocations: LocalizedLocationPage[];
  related: LocalizedLocationPage[];
}

const labels = {
  en: {
    home: 'Home',
    explore: 'Explore locations',
    book: 'Book a free trial',
    howItWorks: 'How tutoring works',
    officialResources: 'Helpful curriculum resources',
    officialDisclaimer:
      'Use these official links to review curriculum expectations, assessments, and school-system information that may help you prepare for tutoring.',
    related: 'Related location pages',
    onlineOnly:
      'Online service — no physical office or local-centre claim',
    stepsTitle: 'How online tutoring works',
    stepsDescription:
      'The same clear matching process is used in every location, while the curriculum and assessment context changes for the student.',
    ctaEyebrow: 'Personalized tutor matching',
    ctaTitle:
      'Tell us the student’s city, grade, subject, and curriculum',
    ctaDescription:
      'The team will review the request, look for an appropriate available tutor, and coordinate a trial or first lesson.',
    contact: 'Send a WhatsApp inquiry',
    subjects: 'View all subjects',
  },
  ar: {
    home: 'الرئيسية',
    explore: 'استكشف المواقع',
    book: 'احجز حصة تجريبية',
    howItWorks: 'آلية العمل',
    officialResources: 'روابط مفيدة للمنهاج والتعليم',
    officialDisclaimer:
      'استخدم هذه الروابط الرسمية للاطلاع على توقعات المنهاج والاختبارات ومعلومات النظام المدرسي التي قد تساعد في التحضير للدروس.',
    related: 'صفحات مواقع مرتبطة',
    onlineOnly:
      'خدمة أونلاين — دون ادعاء وجود مكتب أو مركز محلي',
    stepsTitle: 'كيف تعمل الدروس أونلاين؟',
    stepsDescription:
      'تُستخدم عملية مطابقة واضحة في جميع المواقع، بينما يتغير سياق المنهاج والاختبارات حسب الطالب.',
    ctaEyebrow: 'مطابقة مدرس مخصصة',
    ctaTitle:
      'أخبرنا بمدينة الطالب وصفه ومادته ومنهاجه',
    ctaDescription:
      'يراجع الفريق الطلب ويبحث عن مدرس مناسب متاح وينسق حصة تجريبية أو أول درس.',
    contact: 'أرسل استفسارًا عبر واتساب',
    subjects: 'عرض جميع المواد',
  },
} as const;

const processSteps = {
  en: [
    ['Share the student’s details', 'City, grade, subject, curriculum, current challenge, preferred language, and schedule.'],
    ['Review the local context', 'The team identifies the relevant province or state, course pathway, and assessment needs.'],
    ['Match an appropriate tutor', 'Matching considers subject expertise, grade, curriculum experience, communication, language, and availability.'],
    ['Schedule the first lesson', 'The family receives a suitable online time and joining details.'],
    ['Teach and assess informally', 'The tutor explains the target concept, guides practice, and observes the student’s current understanding.'],
    ['Review progress and continue', 'The family can provide feedback while the ongoing plan, schedule, and package are coordinated.'],
  ],
  ar: [
    ['مشاركة بيانات الطالب', 'المدينة والصف والمادة والمنهاج والصعوبة الحالية واللغة والجدول المفضل.'],
    ['مراجعة السياق المحلي', 'يحدد الفريق المقاطعة أو الولاية ومسار المقرر والاختبارات ذات الصلة.'],
    ['مطابقة مدرس مناسب', 'تراعي المطابقة خبرة المادة والصف والمنهاج والتواصل واللغة والتوفر.'],
    ['تنسيق أول حصة', 'تحصل الأسرة على وقت مناسب أونلاين وتفاصيل الانضمام.'],
    ['التدريس والملاحظة الأولية', 'يشرح المدرس المفهوم ويوجه التدريب ويلاحظ مستوى الفهم الحالي.'],
    ['مراجعة التقدم والاستمرار', 'يمكن للأسرة تقديم ملاحظاتها بينما يُنسق الجدول والخطة والباقة المناسبة.'],
  ],
} as const;

function getBookingHref(
  locale: SiteLocale,
  locationName: string
): string {
  const configured =
    siteConfig.bookingUrl.trim();

  if (configured) {
    return configured;
  }

  return buildWhatsAppHref(
    buildTrialLessonMessage(locale, { location: locationName })
  );
}

function getSubjectHref({
  locale,
  hrefType,
  hrefValue,
}: {
  locale: SiteLocale;
  hrefType:
    | 'localized-subject'
    | 'absolute';
  hrefValue: string;
}): string {
  return hrefType === 'absolute'
    ? hrefValue
    : routePath.subject(
        locale,
        hrefValue
      );
}

export function LocationPageContent({
  locale,
  page,
  ancestors,
  childLocations,
  related,
}: LocationPageContentProps) {
  const copy = labels[locale];
  const bookingHref =
    getBookingHref(
      locale,
      page.shortName
    );

  const breadcrumbs = [
    {
      name: copy.home,
      href: routePath.home(locale),
    },
    ...ancestors.map(
      (item) => ({
        name: item.name,
        href: routePath.location(
          locale,
          ...item.segments
        ),
      })
    ),
    {
      name: page.name,
      href: routePath.location(
        locale,
        ...page.segments
      ),
    },
  ];

  return (
    <>
      <div
        className="border-b border-[#DCE5EC] bg-white"
      >
        <nav
          aria-label={
            locale === 'ar'
              ? 'مسار التنقل'
              : 'Breadcrumb'
          }
          className="mx-auto flex min-h-12 w-full max-w-[82rem] items-center gap-2 overflow-x-auto px-4 text-caption text-[#64748B] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8"
        >
          {breadcrumbs.map(
            (item, index) => (
              <span
                key={item.href}
                className="inline-flex shrink-0 items-center gap-2"
              >
                {index > 0 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className="h-4 w-4 rtl:-scale-x-100"
                  />
                ) : null}

                {index ===
                breadcrumbs.length - 1 ? (
                  <span
                    aria-current="page"
                    className="font-black text-[#0B1F3A]"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-bold transition-colors hover:text-[#108686]"
                  >
                    {item.name}
                  </Link>
                )}
              </span>
            )
          )}
        </nav>
      </div>

      <section
        className="relative isolate overflow-hidden bg-[#071426] py-14 text-white sm:py-18 lg:py-22"
      >
        <div
          aria-hidden="true"
          className="absolute -end-32 -top-44 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#16C7C7]/22 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-52 -start-36 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#2C5774]/35 blur-3xl"
        />

        <div
          className="mx-auto grid w-full max-w-[82rem] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(21rem,0.72fr)] lg:items-center lg:px-8"
        >
          <div>
            <p
              className="text-caption font-black uppercase tracking-[0.13em] text-[#67E8E5]"
            >
              {page.eyebrow}
            </p>

            <h1
              className="mt-4 max-w-4xl text-h1 font-black leading-[1.08] text-white"
            >
              {page.heroTitle}
            </h1>

            <p
              className="mt-5 max-w-3xl text-body leading-8 text-white/74"
            >
              {page.heroDescription}
            </p>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#16C7C7] px-6 py-3 text-small font-black text-[#071426] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#2DD4D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
              >
                {copy.book}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                />
              </a>

              <Link
                href={
                  routePath.howItWorks(
                    locale
                  )
                }
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3 text-small font-black text-white transition-colors hover:border-[#67E8E5] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
              >
                {copy.howItWorks}
              </Link>
            </div>
          </div>

          <aside
            className="rounded-[1.5rem] border border-white/12 bg-white/[0.07] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm"
          >
            <div
              className="flex items-center gap-3"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16C7C7] text-[#071426]"
              >
                <Globe
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </span>
              <div>
                <p
                  className="text-caption font-bold text-white/55"
                >
                  {copy.explore}
                </p>
                <p
                  className="mt-0.5 text-h4 font-black text-white"
                >
                  {page.name}
                </p>
              </div>
            </div>

            <ul
              className="mt-5 grid gap-2.5"
            >
              {page.trustPoints.map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-3 text-small leading-6 text-white/76"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#67E8E5]"
                      strokeWidth={2.2}
                    />
                    {item}
                  </li>
                )
              )}
            </ul>

            <p
              className="mt-4 flex items-start gap-2 rounded-xl bg-[#16C7C7]/10 px-3.5 py-3 text-caption leading-6 text-[#A4F4F1]"
            >
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0"
              />
              {copy.onlineOnly}
            </p>
          </aside>
        </div>
      </section>

      {childLocations.length > 0 ? (
        <section
          className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-20"
        >
          <div
            className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
          >
            <SectionHeading
              eyebrow={copy.explore}
              title={page.localGuideTitle}
              description={
                page.localGuideDescription
              }
            />

            <div
              className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {childLocations.map(
                (child) => (
                  <LocationLinkCard
                    key={child.id}
                    locale={locale}
                    page={child}
                  />
                )
              )}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="bg-white py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto grid w-full max-w-[82rem] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:px-8"
        >
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.introductionTitle}
            description={page.introduction}
          />

          <div
            className="grid gap-3 sm:grid-cols-2"
          >
            {page.trustPoints.map(
              (item) => (
                <div
                  key={item}
                  className="flex min-h-24 items-start gap-3 rounded-2xl border border-[#DCE5EC] bg-[#F8FAFC] p-4"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]"
                  >
                    <Check
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </span>
                  <p
                    className="pt-1 text-small font-bold leading-6 text-[#334155]"
                  >
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section
        className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={
              locale === 'ar'
                ? 'الخدمات'
                : 'Services'
            }
            title={page.servicesTitle}
            description={
              page.servicesDescription
            }
          />

          <div
            className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {page.services.map(
              (service) => (
                <FeatureCard
                  key={service.title}
                  title={service.title}
                  description={
                    service.description
                  }
                  icon={service.icon}
                />
              )
            )}
          </div>
        </div>
      </section>

      <section
        className="bg-white py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow={
                locale === 'ar'
                  ? 'المواد'
                  : 'Subjects'
              }
              title={page.subjectsTitle}
              description={
                page.subjectsDescription
              }
            />

            <Link
              href={
                routePath.subjects(
                  locale
                )
              }
              className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-xl border border-[#C9DDEA] bg-white px-4 py-2.5 text-small font-black text-[#0B1F3A] transition-colors hover:border-[#16C7C7] hover:bg-[#ECFEFD] lg:self-auto"
            >
              {copy.subjects}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 rtl:-scale-x-100"
              />
            </Link>
          </div>

          <div
            className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {page.subjects.map(
              (subject) => (
                <Link
                  key={`${subject.hrefType}-${subject.hrefValue}`}
                  href={getSubjectHref({
                    locale,
                    hrefType:
                      subject.hrefType,
                    hrefValue:
                      subject.hrefValue,
                  })}
                  className="group flex min-h-40 flex-col rounded-2xl border border-[#DCE5EC] bg-white p-5 shadow-[0_8px_28px_rgba(7,20,38,0.04)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[#16C7C7] hover:shadow-[0_16px_38px_rgba(7,20,38,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C7]"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]"
                  >
                    <BookOpenCheck
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </span>
                  <h3
                    className="mt-4 text-h4 font-black text-[#0B1F3A]"
                  >
                    {subject.label}
                  </h3>
                  <p
                    className="mt-2 text-caption leading-6 text-[#64748B]"
                  >
                    {subject.description}
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-small font-black text-[#108686]"
                  >
                    {locale === 'ar'
                      ? 'استكشف المادة'
                      : 'Explore subject'}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                    />
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section
        className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto grid w-full max-w-[82rem] gap-7 px-4 sm:px-6 xl:grid-cols-2 lg:px-8"
        >
          <InfoPanel
            eyebrow={
              locale === 'ar'
                ? 'المنهاج المحلي'
                : 'Local curriculum'
            }
            title={page.curriculumTitle}
            description={
              page.curriculumDescription
            }
            points={
              page.curriculumPoints
            }
            icon="layers"
          />

          <div
            className="rounded-[1.5rem] border border-[#DCE5EC] bg-white p-6 shadow-[0_12px_36px_rgba(7,20,38,0.05)] sm:p-7"
          >
            <p
              className="text-caption font-black uppercase tracking-[0.11em] text-[#108686]"
            >
              {locale === 'ar'
                ? 'الاختبارات'
                : 'Assessments'}
            </p>
            <h2
              className="mt-3 text-h3 font-black text-[#0B1F3A]"
            >
              {page.assessmentsTitle}
            </h2>
            <p
              className="mt-3 text-small leading-7 text-[#64748B]"
            >
              {page.assessmentsDescription}
            </p>

            <div
              className="mt-5 grid gap-3"
            >
              {page.assessments.map(
                (assessment) => (
                  <div
                    key={assessment.name}
                    className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4"
                  >
                    <h3
                      className="text-small font-black text-[#0B1F3A]"
                    >
                      {assessment.name}
                    </h3>
                    <p
                      className="mt-2 text-caption leading-6 text-[#64748B]"
                    >
                      {assessment.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={
              locale === 'ar'
                ? 'المراحل الدراسية'
                : 'Grade support'
            }
            title={page.gradesTitle}
            description={
              page.gradesDescription
            }
          />
          <div
            className="mt-9 grid gap-5 md:grid-cols-3"
          >
            {page.grades.map(
              (grade) => (
                <FeatureCard
                  key={grade.title}
                  title={grade.title}
                  description={
                    grade.description
                  }
                  icon={grade.icon}
                />
              )
            )}
          </div>
        </div>
      </section>

      <section
        className="bg-[#071426] py-14 text-white sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto grid w-full max-w-[82rem] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:px-8"
        >
          <div>
            <p
              className="text-caption font-black uppercase tracking-[0.12em] text-[#67E8E5]"
            >
              {locale === 'ar'
                ? 'التواصل مع الأسرة'
                : 'Family support'}
            </p>
            <h2
              className="mt-3 text-h2 font-black text-white"
            >
              {page.familyTitle}
            </h2>
            <p
              className="mt-4 text-body leading-8 text-white/72"
            >
              {page.familyDescription}
            </p>
          </div>

          <ul
            className="grid gap-3 sm:grid-cols-2"
          >
            {page.familyPoints.map(
              (item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-small leading-7 text-white/78"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[#67E8E5]"
                    strokeWidth={1.8}
                  />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section
        className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={
              locale === 'ar'
                ? 'الدليل المحلي'
                : 'Local guide'
            }
            title={page.localGuideTitle}
            description={
              page.localGuideDescription
            }
          />

          <div
            className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.8fr)]"
          >
            <div
              className="rounded-[1.5rem] border border-[#DCE5EC] bg-white p-6 shadow-[0_12px_36px_rgba(7,20,38,0.05)] sm:p-7"
            >
              <h3
                className="text-h4 font-black text-[#0B1F3A]"
              >
                {locale === 'ar'
                  ? 'معلومات محلية مفيدة'
                  : 'Useful local context'}
              </h3>
              <ul
                className="mt-5 grid gap-3"
              >
                {page.localContext.map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-small leading-7 text-[#475569]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-[#108686]"
                      />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {page.resources.length > 0 ? (
              <aside
                className="rounded-[1.5rem] border border-[#C9DDEA] bg-white p-6 shadow-[0_12px_36px_rgba(7,20,38,0.05)] sm:p-7"
              >
                <div
                  className="flex items-center gap-3"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]"
                  >
                    <ClipboardList
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </span>
                  <h3
                    className="text-h4 font-black text-[#0B1F3A]"
                  >
                    {copy.officialResources}
                  </h3>
                </div>

                <div
                  className="mt-5 grid gap-3"
                >
                  {page.resources.map(
                    (resource) => (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-colors hover:border-[#16C7C7] hover:bg-[#ECFEFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C7]"
                      >
                        <span
                          className="flex items-center justify-between gap-3"
                        >
                          <strong
                            className="text-small text-[#0B1F3A]"
                          >
                            {resource.name}
                          </strong>
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#108686] transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                          />
                        </span>
                        <span
                          className="mt-2 block text-caption leading-6 text-[#64748B]"
                        >
                          {resource.description}
                        </span>
                      </a>
                    )
                  )}
                </div>

                <p
                  className="mt-5 rounded-xl bg-[#FFF8E8] px-4 py-3 text-caption leading-6 text-[#775A18]"
                >
                  {copy.officialDisclaimer}
                </p>
              </aside>
            ) : null}
          </div>

        </div>
      </section>

      <section
        className="bg-white py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={copy.howItWorks}
            title={copy.stepsTitle}
            description={
              copy.stepsDescription
            }
          />

          <ol
            className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {processSteps[locale].map(
              ([title, description], index) => (
                <li
                  key={title}
                  className="rounded-2xl border border-[#DCE5EC] bg-[#F8FAFC] p-5"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B1F3A] text-caption font-black text-white"
                  >
                    {index + 1}
                  </span>
                  <h3
                    className="mt-4 text-small font-black text-[#0B1F3A]"
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-2 text-caption leading-6 text-[#64748B]"
                  >
                    {description}
                  </p>
                </li>
              )
            )}
          </ol>
        </div>
      </section>

      <section
        className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={
              locale === 'ar'
                ? 'الأسئلة الشائعة'
                : 'FAQs'
            }
            title={page.faqTitle}
            description={
              page.faqDescription
            }
          />

          <div
            className="mt-9 grid gap-3"
          >
            {page.faqs.map(
              (item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-2xl border border-[#DCE5EC] bg-white"
                >
                  <summary
                    className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-black text-[#0B1F3A] transition-colors hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#16C7C7] [&::-webkit-details-marker]:hidden"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-[#108686] transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p
                    className="border-t border-[#E7EDF2] bg-[#F8FAFC] px-5 py-4 text-small leading-7 text-[#475569]"
                  >
                    {item.answer}
                  </p>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section
          className="bg-white py-14 sm:py-18"
        >
          <div
            className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
          >
            <h2
              className="text-h3 font-black text-[#0B1F3A]"
            >
              {copy.related}
            </h2>
            <div
              className="mt-6 grid gap-4 md:grid-cols-3"
            >
              {related.map(
                (item) => (
                  <LocationLinkCard
                    key={item.id}
                    locale={locale}
                    page={item}
                    compact
                  />
                )
              )}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-20"
      >
        <div
          className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8"
        >
          <div
            className="rounded-[1.75rem] bg-[linear-gradient(112deg,#071426_0%,#0B1F3A_58%,#108686_100%)] p-7 text-white shadow-[0_22px_60px_rgba(7,20,38,0.18)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
          >
            <div
              className="max-w-3xl"
            >
              <p
                className="text-caption font-black uppercase tracking-[0.12em] text-[#A4F4F1]"
              >
                {copy.ctaEyebrow}
              </p>
              <h2
                className="mt-3 text-h2 font-black text-white"
              >
                {copy.ctaTitle}
              </h2>
              <p
                className="mt-4 text-body leading-8 text-white/72"
              >
                {copy.ctaDescription}
              </p>
            </div>

            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16C7C7] px-6 py-3 text-small font-black text-[#071426] hover:bg-[#2DD4D1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] lg:mt-0"
            >
              {copy.contact}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 rtl:-scale-x-100"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="max-w-3xl"
    >
      <p
        className="text-caption font-black uppercase tracking-[0.12em] text-[#108686]"
      >
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-h2 font-black text-[#0B1F3A]"
      >
        {title}
      </h2>
      <p
        className="mt-4 text-body leading-8 text-[#64748B]"
      >
        {description}
      </p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon:
    | 'book'
    | 'check'
    | 'globe'
    | 'graduation'
    | 'layers'
    | 'message'
    | 'shield';
}) {
  return (
    <article
      className="rounded-2xl border border-[#DCE5EC] bg-white p-5 shadow-[0_8px_28px_rgba(7,20,38,0.04)]"
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]"
      >
        <LocationIcon
          icon={icon}
          className="h-5 w-5"
        />
      </span>
      <h3
        className="mt-4 text-h4 font-black text-[#0B1F3A]"
      >
        {title}
      </h3>
      <p
        className="mt-2 text-caption leading-6 text-[#64748B]"
      >
        {description}
      </p>
    </article>
  );
}

function InfoPanel({
  eyebrow,
  title,
  description,
  points,
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  icon:
    | 'layers'
    | 'book';
}) {
  return (
    <div
      className="rounded-[1.5rem] border border-[#DCE5EC] bg-white p-6 shadow-[0_12px_36px_rgba(7,20,38,0.05)] sm:p-7"
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]"
      >
        <LocationIcon
          icon={icon}
          className="h-5 w-5"
        />
      </span>
      <p
        className="mt-5 text-caption font-black uppercase tracking-[0.11em] text-[#108686]"
      >
        {eyebrow}
      </p>
      <h2
        className="mt-3 text-h3 font-black text-[#0B1F3A]"
      >
        {title}
      </h2>
      <p
        className="mt-3 text-small leading-7 text-[#64748B]"
      >
        {description}
      </p>
      <ul
        className="mt-5 grid gap-3"
      >
        {points.map(
          (item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-small leading-7 text-[#475569]"
            >
              <Check
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-[#108686]"
              />
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

function LocationLinkCard({
  locale,
  page,
  compact = false,
}: {
  locale: SiteLocale;
  page: LocalizedLocationPage;
  compact?: boolean;
}) {
  return (
    <Link
      href={
        routePath.location(
          locale,
          ...page.segments
        )
      }
      className={`group flex flex-col rounded-2xl border border-[#DCE5EC] bg-white p-5 shadow-[0_8px_28px_rgba(7,20,38,0.04)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[#16C7C7] hover:shadow-[0_16px_38px_rgba(7,20,38,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C7] ${
        compact
          ? 'min-h-40'
          : 'min-h-56'
      }`}
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]"
      >
        {page.level === 'city' ? (
          <GraduationCap
            aria-hidden="true"
            className="h-5 w-5"
            strokeWidth={1.8}
          />
        ) : (
          <Globe
            aria-hidden="true"
            className="h-5 w-5"
            strokeWidth={1.8}
          />
        )}
      </span>
      <p
        className="mt-4 text-caption font-black uppercase tracking-[0.1em] text-[#108686]"
      >
        {page.eyebrow}
      </p>
      <h3
        className="mt-2 text-h4 font-black text-[#0B1F3A]"
      >
        {page.name}
      </h3>
      {!compact ? (
        <p
          className="mt-2 line-clamp-3 text-caption leading-6 text-[#64748B]"
        >
          {page.heroDescription}
        </p>
      ) : null}
      <span
        className="mt-auto inline-flex items-center gap-2 pt-5 text-small font-black text-[#108686]"
      >
        {locale === 'ar'
          ? 'فتح الصفحة'
          : 'Open page'}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
        />
      </span>
    </Link>
  );
}
