import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

import type { SiteLocale } from '@/config/site';
import type { OntarioCourseData } from '@/content/subjects/math/ontario-math-course-data';

interface OntarioMathCourseSectionProps {
  locale: SiteLocale;
  data: OntarioCourseData;
  bookingHref: string;
}

export function OntarioMathCourseSection({
  locale,
  data,
  bookingHref,
}: OntarioMathCourseSectionProps) {
  const isRtl = locale === 'ar';

  return (
    <section
      id="ontario-curriculum-course"
      className="
        border-t
        border-[#DCE5EC]
        bg-gradient-to-b
        from-[#F8FAFC]
        to-white
        py-16
        sm:py-20
        lg:py-24
      "
      aria-labelledby="ontario-course-heading"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[82rem]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header Block */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#16C7C7]/40 bg-[#16C7C7]/10 px-3.5 py-1 text-caption font-black text-[#0f766e]">
            <Sparkles className="h-3.5 w-3.5 text-[#16C7C7]" aria-hidden="true" />
            <span>{data.badge}</span>
          </div>

          <h2
            id="ontario-course-heading"
            className="
              mt-4
              text-h2
              font-black
              tracking-tight
              text-[#0B1F3A]
            "
          >
            {data.heading}
          </h2>

          <p className="mt-4 text-body leading-relaxed text-[#475569]">
            {data.subheading}
          </p>

          <div className="mt-6 space-y-4 text-body leading-relaxed text-[#334155]">
            {data.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {data.prerequisiteNote && (
            <div className="mt-6 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-sm">
              <p className="text-small font-medium leading-relaxed text-[#475569]">
                <strong className="font-bold text-[#0B1F3A]">
                  {locale === 'ar' ? 'ملاحظة حول متطلبات القبول:' : 'University Pathways Note:'}{' '}
                </strong>
                {data.prerequisiteNote}
              </p>
            </div>
          )}
        </div>

        {/* Challenges Grid */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E0F2FE] text-[#0369A1]">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-h3 font-black text-[#0B1F3A]">
              {data.challengesHeading}
            </h3>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.challenges.map((item, idx) => (
              <div
                key={idx}
                className="
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  p-6
                  shadow-[0_4px_20px_rgba(7,20,38,0.03)]
                  transition-[transform,border-color]
                  hover:-translate-y-1
                  hover:border-[#16C7C7]
                "
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F5F9] text-small font-black text-[#0B1F3A]">
                  {idx + 1}
                </div>
                <h4 className="mt-4 text-base font-bold text-[#0B1F3A]">
                  {item.title}
                </h4>
                <p className="mt-2 text-small leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How Tutoring Helps & Progression */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Tutoring Points Card */}
          <div className="rounded-2xl border border-[#DCE5EC] bg-white p-7 shadow-sm sm:p-8">
            <h3 className="text-h4 font-black text-[#0B1F3A]">
              {data.tutoringSupportHeading}
            </h3>
            <ul className="mt-6 space-y-4">
              {data.tutoringPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-[#0f766e]"
                    aria-hidden="true"
                  />
                  <span className="text-body leading-relaxed text-[#334155]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Progression & Internal Links Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#CFFAF8] bg-[#F0FDFA] p-7 shadow-sm sm:p-8">
            <div>
              <h3 className="text-h4 font-black text-[#0B1F3A]">
                {data.progressionHeading}
              </h3>
              <p className="mt-4 text-body leading-relaxed text-[#334155]">
                {data.progressionText}
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-small text-[#334155]">
                  <span className="font-bold text-[#0B1F3A]">
                    {locale === 'ar' ? 'المسار المرتبط:' : 'Related Curriculum:'}
                  </span>
                  <Link
                    href={data.relatedLinkHref}
                    className="font-bold text-[#0f766e] underline decoration-[#16C7C7] underline-offset-4 transition-colors hover:text-[#0D6B6B]"
                  >
                    {data.relatedLinkText}
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-small text-[#334155]">
                  <span className="font-bold text-[#0B1F3A]">
                    {locale === 'ar' ? 'الدعم الامتحاني:' : 'Exam Preparation:'}
                  </span>
                  <Link
                    href={data.examLinkHref}
                    className="font-bold text-[#0f766e] underline decoration-[#16C7C7] underline-offset-4 transition-colors hover:text-[#0D6B6B]"
                  >
                    {data.examLinkText}
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#CCFBF1]">
              <p className="text-small font-bold text-[#0B1F3A]">
                {data.ctaHeading}
              </p>
              <div className="mt-4">
                <Link
                  href={bookingHref}
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#16C7C7]
                    px-6
                    py-2.5
                    text-small
                    font-black
                    text-[#071426]
                    transition-all
                    hover:bg-[#2DD4D1]
                    hover:shadow-md
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#16C7C7]
                  "
                >
                  <span>{data.ctaText}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      isRtl ? '-scale-x-100 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706]">
                <HelpCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-h3 font-black text-[#0B1F3A]">
                {data.faqsHeading}
              </h3>
            </div>

            <div className="mt-6 divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0] bg-white">
              {data.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-[#0B1F3A] transition-colors hover:text-[#0f766e] focus-visible:outline-none">
                    <span className="text-base font-bold sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#64748B]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-body leading-relaxed text-[#475569]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
