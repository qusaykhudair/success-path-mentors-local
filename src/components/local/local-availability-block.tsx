import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Sparkles,
} from 'lucide-react';

import { routePath } from '@/config/routes';
import type { SiteLocale } from '@/config/site';

interface LocalAvailabilityBlockProps {
  locale: string;
  subjectName?: string;
  className?: string;
}

export function LocalAvailabilityBlock({
  locale,
  subjectName,
  className = '',
}: LocalAvailabilityBlockProps) {
  const siteLocale: SiteLocale = locale === 'ar' ? 'ar' : 'en';
  const isAr = siteLocale === 'ar';

  const ontarioHref = routePath.location(siteLocale, 'canada', 'ontario');
  const miltonHref = routePath.location(siteLocale, 'canada', 'ontario', 'milton');
  const torontoHref = routePath.location(siteLocale, 'canada', 'ontario', 'toronto');
  const curriculumHref = routePath.location(siteLocale, 'canada', 'ontario', 'curriculum');

  const content = {
    en: {
      badge: 'Ontario Curriculum & Local Online Support',
      heading: subjectName
        ? `Online ${subjectName} Tutoring for Students in Ontario`
        : 'Online Tutoring for Students in Ontario',
      description:
        'Success Path Mentors provides personalized, one-to-one online tutoring tailored directly to the Ontario curriculum. Serving students online in Milton, Toronto, and communities across Ontario, our experienced mentors help learners strengthen foundational knowledge, build study confidence, and prepare for school exams with flexible scheduling from home.',
      curriculumLead: 'Aligned with Ontario Ministry of Education standards: ',
      curriculumLink: 'Ontario curriculum standards',
      communities: [
        {
          name: 'Ontario (Province-Wide)',
          headline: 'Serving students across Ontario',
          description:
            'Comprehensive one-to-one online mentoring covering elementary through Grade 12 senior university preparation.',
          actionText: 'online tutoring in Ontario',
          href: ontarioHref,
        },
        {
          name: 'Milton',
          headline: 'Online tutoring support in Milton',
          description:
            'Dedicated academic guidance for families in Milton seeking personalized help with school coursework and test preparation.',
          actionText: 'tutoring support in Milton',
          href: miltonHref,
        },
        {
          name: 'Toronto & GTA',
          headline: 'Online tutoring in Toronto',
          description:
            'Targeted one-to-one tutoring for students across Toronto looking to master challenging concepts and build lasting study skills.',
          actionText: 'online tutoring in Toronto',
          href: torontoHref,
        },
      ],
    },
    ar: {
      badge: 'منهج أونتاريو ودعم دراسي محلي عبر الإنترنت',
      heading: subjectName
        ? `دروس خصوصية عبر الإنترنت في ${subjectName} للطلاب في أونتاريو`
        : 'دروس خصوصية عبر الإنترنت للطلاب في أونتاريو',
      description:
        'توفر Success Path Mentors تدريسًا فرديًا مخصصًا عبر الإنترنت متوافقًا مع المنهج الدراسي لمقاطعة أونتاريو. نخدم الطلاب عبر الإنترنت في ميلتون، وتورونتو، ومختلف المجتمعات عبر أونتاريو، لمساعدة المتعلمين على استيعاب المفاهيم الأكاديمية وبناء الثقة والاستعداد للاختبارات بمرونة تامة من المنزل.',
      curriculumLead: 'متوافق مع معايير وزارة التعليم في أونتاريو: ',
      curriculumLink: 'معايير منهج أونتاريو',
      communities: [
        {
          name: 'أونتاريو (عموم المقاطعة)',
          headline: 'نخدم الطلاب في جميع أنحاء أونتاريو',
          description:
            'تدريس فردي شامل عبر الإنترنت يغطي جميع المراحل الدراسية من المرحلة الابتدائية وحتى الصف الثاني عشر للتحضير الجامعي.',
          actionText: 'دروس خصوصية في أونتاريو',
          href: ontarioHref,
        },
        {
          name: 'ميلتون',
          headline: 'دعم دراسي عبر الإنترنت في ميلتون',
          description:
            'إشراف دراسي مخصص للعائلات في ميلتون الراغبة في تعزيز مستوى أبنائها في المواد المدرسية والاستعداد للاختبارات.',
          actionText: 'دعم دراسي في ميلتون',
          href: miltonHref,
        },
        {
          name: 'تورونتو ومنطقة تورونتو الكبرى',
          headline: 'دروس خصوصية عبر الإنترنت في تورونتو',
          description:
            'جلسات فردية مركزة للطلاب في تورونتو لمساعدتهم على التغلب على صعوبات المواد وتطوير مهارات دراسية متقدمة.',
          actionText: 'دروس خصوصية في تورونتو',
          href: torontoHref,
        },
      ],
    },
  }[siteLocale];

  return (
    <section
      className={`
        border-t
        border-[#DCE5EC]
        bg-[#F8FAFC]
        py-14
        sm:py-16
        lg:py-20
        ${className}
      `}
      aria-label={content.heading}
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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#16C7C7]/40 bg-[#16C7C7]/10 px-3.5 py-1 text-caption font-black text-[#0f766e]">
            <Sparkles className="h-3.5 w-3.5 text-[#16C7C7]" aria-hidden="true" />
            <span>{content.badge}</span>
          </div>

          <h2 className="mt-4 text-h2 font-black tracking-tight text-[#0B1F3A]">
            {content.heading}
          </h2>

          <p className="mt-4 text-body leading-relaxed text-[#475569]">
            {content.description}
          </p>

          <p className="mt-4 text-small text-[#64748B]">
            <span>{content.curriculumLead}</span>
            <Link
              href={curriculumHref}
              className="font-bold text-[#0f766e] underline decoration-[#16C7C7] underline-offset-4 transition-colors hover:text-[#0D6B6B]"
            >
              {content.curriculumLink}
            </Link>
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.communities.map((comm, idx) => (
            <div
              key={idx}
              className="
                flex
                flex-col
                justify-between
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
              <div>
                <div className="flex items-center gap-2.5 text-[#0f766e]">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-caption font-black uppercase tracking-wider text-[#0f766e]">
                    {comm.name}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-[#0B1F3A]">
                  {comm.headline}
                </h3>

                <p className="mt-2 text-small leading-relaxed text-[#64748B]">
                  {comm.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                <Link
                  href={comm.href}
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-1.5
                    text-small
                    font-bold
                    text-[#0f766e]
                    transition-colors
                    hover:text-[#0D6B6B]
                  "
                >
                  <span>{comm.actionText}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform ${
                      isAr
                        ? '-scale-x-100 group-hover/link:-translate-x-1'
                        : 'group-hover/link:translate-x-1'
                    }`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
