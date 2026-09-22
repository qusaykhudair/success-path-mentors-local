import Link from 'next/link';
import { ArrowRight, BookOpenCheck } from 'lucide-react';

import { routePath } from '@/config/routes';
import type { SiteLocale } from '@/config/site';

type SupportedSubject = 'math' | 'chemistry' | 'physics';

interface OntarioCourseSupportBlockProps {
  locale: SiteLocale;
  subject: SupportedSubject;
}

interface CourseOwner {
  code: string;
  title: string;
  description: string;
  slug: string;
}

const courseOwners: Record<SupportedSubject, CourseOwner[]> = {
  math: [
    {
      code: 'MTH1W',
      title: 'Grade 9 Mathematics',
      description: 'Ontario Grade 9 math support for core concepts, problem solving, and course review.',
      slug: 'math/grade-9-math-mth1w',
    },
    {
      code: 'MPM2D',
      title: 'Grade 10 Mathematics',
      description: 'Ontario Grade 10 academic math support for algebra, analytic geometry, and quadratic relations.',
      slug: 'math/grade-10-math-mpm2d',
    },
    {
      code: 'MCR3U',
      title: 'Grade 11 Functions',
      description: 'Support for functions, transformations, trigonometry, and preparation for senior mathematics.',
      slug: 'math/grade-11-functions-mcr3u',
    },
    {
      code: 'MHF4U',
      title: 'Advanced Functions',
      description: 'Grade 12 support for polynomial, rational, exponential, logarithmic, and trigonometric functions.',
      slug: 'math/grade-12-advanced-functions-mhf4u',
    },
    {
      code: 'MCV4U',
      title: 'Calculus and Vectors',
      description: 'Grade 12 support for rates of change, derivatives, vectors, and university-preparation problem solving.',
      slug: 'math/grade-12-calculus-vectors-mcv4u',
    },
    {
      code: 'MDM4U',
      title: 'Data Management',
      description: 'Grade 12 support for probability, statistics, counting methods, and data analysis.',
      slug: 'math/grade-12-data-management-mdm4u',
    },
  ],
  chemistry: [
    {
      code: 'SCH3U / SCH4U',
      title: 'Senior Chemistry',
      description: 'Ontario Grade 11 and Grade 12 chemistry support across core senior-course concepts and assessments.',
      slug: 'chemistry/senior-chemistry-sch3u-sch4u',
    },
  ],
  physics: [
    {
      code: 'SPH3U / SPH4U',
      title: 'Senior Physics',
      description: 'Ontario Grade 11 and Grade 12 physics support across mechanics, energy, fields, waves, and modern physics.',
      slug: 'physics/senior-physics-sph3u-sph4u',
    },
  ],
};

const subjectNames: Record<SupportedSubject, string> = {
  math: 'Mathematics',
  chemistry: 'Chemistry',
  physics: 'Physics',
};

export function OntarioCourseSupportBlock({
  locale,
  subject,
}: OntarioCourseSupportBlockProps) {
  if (locale !== 'en') {
    return null;
  }

  const courses = courseOwners[subject];
  const subjectName = subjectNames[subject];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-label={`Ontario ${subjectName} course support`}>
      <div className="mx-auto w-full max-w-[82rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-caption font-black uppercase tracking-[0.12em] text-[#108686]">
            Ontario high-school courses
          </p>
          <h2 className="mt-3 text-h2 font-black tracking-tight text-[#0B1F3A]">
            Dedicated {subjectName} support by Ontario course code
          </h2>
          <p className="mt-4 text-body leading-8 text-[#475569]">
            Students searching by Ontario course code can go directly to the matching course-support page. These links use the existing course owners and do not create separate city or duplicate course pages.
          </p>
        </div>

        <div className={`mt-9 grid gap-5 ${courses.length === 1 ? 'md:max-w-2xl' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={routePath.subject(locale, course.slug)}
              className="group flex min-h-44 flex-col rounded-2xl border border-[#DCE5EC] bg-[#F8FAFC] p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[#16C7C7] hover:shadow-[0_14px_36px_rgba(7,20,38,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C7]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFEFD] text-[#108686]">
                <BookOpenCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </span>

              <p className="mt-4 text-caption font-black uppercase tracking-[0.1em] text-[#108686]">
                {course.code}
              </p>
              <h3 className="mt-1 text-h4 font-black text-[#0B1F3A]">{course.title}</h3>
              <p className="mt-2 text-small leading-7 text-[#64748B]">{course.description}</p>

              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-small font-black text-[#108686]">
                View course support
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
