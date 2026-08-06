import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  ChevronDown,
  ClipboardList,
  GraduationCap,
} from 'lucide-react';

import {
  Breadcrumbs,
} from '@/components/internal/breadcrumbs';
import {
  ScienceStrandIcon,
} from '@/components/subjects/science/science-strand-icon';
import {
  routePath,
} from '@/config/routes';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';
import type {
  ScienceMainTopic,
  ScienceSubjectKey,
} from '@/types/science-curriculum';
import type {
  ScienceStrandPageData,
} from '@/types/science-overview';

interface ScienceStrandPageContentProps {
  locale: SiteLocale;
  strand: ScienceStrandPageData;
  breadcrumbs: BreadcrumbItem[];
  bookingHref: string;
  subjectSlug: ScienceSubjectKey;
  subjectTitle: string;
}

const pageCopy = {
  en: {
    common: {
      eyebrow:
        'Curriculum strand',
      coverage:
        'Topics organized by available grade level',
      gradeNavigation:
        'Jump to a grade',
      curriculumHeading:
        'Main Topics and Subtopics by grade',
      expandHint:
        'Open a Main Topic to view its Subtopics.',
      backPrefix:
        'Back to',
      mainTopicLabel:
        'Main Topics',
      skillsLabel:
        'Subtopics',
      breadcrumbLabel:
        'Science strand breadcrumb',
      availableGrades:
        'grade levels with content',
      progression:
        'Grade-based progression',
    },
    chemistry: {
      bookTrial:
        'Find a chemistry tutor',
    },
    physics: {
      bookTrial:
        'Find a physics tutor',
    },
    'general-science': {
      bookTrial:
        'Find a science tutor',
    },
  },
  ar: {
    common: {
      eyebrow:
        'مسار من المنهج',
      coverage:
        'الموضوعات منظمة حسب الصفوف المتاحة',
      gradeNavigation:
        'انتقل إلى الصف',
      curriculumHeading:
        'الموضوعات الرئيسية والفرعية حسب الصف',
      expandHint:
        'افتح الموضوع الرئيسي لعرض الموضوعات الفرعية.',
      backPrefix:
        'العودة إلى',
      mainTopicLabel:
        'الموضوعات الرئيسية',
      skillsLabel:
        'الموضوعات الفرعية',
      breadcrumbLabel:
        'مسار التنقل لمسار العلوم',
      availableGrades:
        'صفوف تحتوي محتوى',
      progression:
        'تدرج حسب الصف',
    },
    chemistry: {
      bookTrial:
        'ابحث عن مدرس كيمياء',
    },
    physics: {
      bookTrial:
        'ابحث عن مدرس فيزياء',
    },
    'general-science': {
      bookTrial:
        'ابحث عن مدرس علوم',
    },
  },
} as const;

export function ScienceStrandPageContent({
  locale,
  strand,
  breadcrumbs,
  bookingHref,
  subjectSlug,
  subjectTitle,
}: ScienceStrandPageContentProps) {
  const labels = {
    ...pageCopy[locale].common,
    ...pageCopy[locale][subjectSlug],
  };

  const grades =
    strand.grades.filter(
      (grade) =>
        grade.topics.length > 0
    );

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-[#071426]
          py-10
          text-white
          sm:py-14
          lg:py-16
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -end-24
            -top-36
            h-96
            w-96
            rounded-full
            bg-[#16C7C7]/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[82rem]
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <Breadcrumbs
            items={breadcrumbs}
            ariaLabel={
              labels.breadcrumbLabel
            }
            inverse
          />

          <div
            className="
              mt-8
              grid
              gap-10
              lg:grid-cols-[minmax(0,1fr)_23rem]
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#16C7C7]
                    text-[#071426]
                  "
                >
                  <ScienceStrandIcon
                    iconKey={
                      strand.iconKey
                    }
                    className="h-8 w-8"
                  />
                </span>

                <div>
                  <p
                    className="
                      text-caption
                      font-black
                      uppercase
                      tracking-[0.12em]
                      text-[#67E8E5]
                    "
                  >
                    {labels.eyebrow}
                  </p>

                  <p
                    className="
                      mt-1
                      text-small
                      font-bold
                      text-white/55
                    "
                  >
                    {labels.coverage}
                  </p>
                </div>
              </div>

              <h1
                className="
                  mt-6
                  text-h1
                  font-black
                  leading-tight
                  text-white
                "
              >
                {strand.title}
              </h1>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-body
                  leading-8
                  text-white/72
                "
              >
                {strand.description}
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:flex-wrap
                "
              >
                <Link
                  href={bookingHref}
                  className="
                    group
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#16C7C7]
                    px-6
                    py-3
                    text-small
                    font-black
                    text-[#071426]
                    hover:bg-[#2DD4D1]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#071426]
                  "
                >
                  {labels.bookTrial}

                  <ArrowRight
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      rtl:-scale-x-100
                    "
                  />
                </Link>

                <Link
                  href={
                    routePath.subject(
                      locale,
                      subjectSlug
                    )
                  }
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-white/[0.06]
                    px-6
                    py-3
                    text-small
                    font-black
                    text-white
                    hover:bg-white/10
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#16C7C7]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#071426]
                  "
                >
                  <ArrowLeft
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      rtl:-scale-x-100
                    "
                  />

                  {labels.backPrefix}
                  {' '}
                  {subjectTitle}
                </Link>
              </div>
            </div>

            <aside
              className="
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.06]
                p-5
                shadow-[0_22px_60px_rgba(0,0,0,0.24)]
                backdrop-blur-sm
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                "
              >
                <GraduationCap
                  aria-hidden="true"
                  className="
                    h-5
                    w-5
                    text-[#67E8E5]
                  "
                />

                <span
                  className="
                    text-small
                    font-black
                    text-white
                  "
                >
                  {
                    grades.length.toLocaleString()
                  }
                  {' '}
                  {labels.availableGrades}
                </span>
              </div>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                "
              >
                <BookOpenCheck
                  aria-hidden="true"
                  className="
                    h-5
                    w-5
                    text-[#67E8E5]
                  "
                />

                <span
                  className="
                    text-small
                    font-black
                    text-white
                  "
                >
                  {labels.progression}
                </span>
              </div>

              <nav
                aria-label={
                  labels.gradeNavigation
                }
                className="
                  mt-5
                  grid
                  grid-cols-4
                  gap-2
                "
              >
                {grades.map(
                  (grade) => (
                    <a
                      key={grade.grade}
                      href={
                        `#${grade.grade.toLowerCase()}`
                      }
                      className="
                        inline-flex
                        min-h-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#16C7C7]/35
                        bg-[#16C7C7]/10
                        px-2
                        py-2
                        text-caption
                        font-black
                        text-[#A4F4F1]
                        hover:bg-[#16C7C7]/20
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#16C7C7]
                      "
                    >
                      {grade.shortLabel}
                    </a>
                  )
                )}
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="
          bg-[#F8FAFC]
          py-14
          sm:py-18
          lg:py-20
        "
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
            <p
              className="
                text-caption
                font-black
                uppercase
                tracking-[0.12em]
                text-[#108686]
              "
            >
              {labels.coverage}
            </p>

            <h2
              className="
                mt-3
                text-h2
                font-black
                text-[#0B1F3A]
              "
            >
              {labels.curriculumHeading}
            </h2>

            <p
              className="
                mt-3
                text-small
                font-bold
                text-[#108686]
              "
            >
              {labels.expandHint}
            </p>
          </div>

          <div
            className="
              mt-10
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#DCE5EC]
              bg-white
              shadow-[0_16px_44px_rgba(7,20,38,0.06)]
            "
          >
            {grades.map(
              (grade, index) => (
                <article
                  key={grade.grade}
                  id={
                    grade.grade.toLowerCase()
                  }
                  className={`
                    scroll-mt-24
                    p-5
                    sm:p-7
                    lg:grid
                    lg:grid-cols-[14rem_minmax(0,1fr)]
                    lg:gap-10
                    lg:p-9
                    ${
                      index > 0
                        ? 'border-t border-[#DCE5EC]'
                        : ''
                    }
                  `}
                >
                  <header
                    className="
                      mb-5
                      lg:sticky
                      lg:top-24
                      lg:mb-0
                      lg:self-start
                    "
                  >
                    <p
                      className="
                        text-caption
                        font-black
                        uppercase
                        tracking-[0.1em]
                        text-[#108686]
                      "
                    >
                      {labels.mainTopicLabel}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-[1.3rem]
                        font-black
                        leading-tight
                        text-[#0B1F3A]
                        sm:text-[1.5rem]
                      "
                    >
                      {grade.label}
                    </h3>
                  </header>

                  <div
                    className="
                      grid
                      gap-3
                    "
                  >
                    {grade.topics.map(
                      (topic) => (
                        <TopicAccordion
                          key={topic.id}
                          topic={topic}
                          skillsLabel={
                            labels.skillsLabel
                          }
                        />
                      )
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function TopicAccordion({
  topic,
  skillsLabel,
}: {
  topic: ScienceMainTopic;
  skillsLabel: string;
}) {
  return (
    <details
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#DCE5EC]
        bg-white
      "
    >
      <summary
        className="
          flex
          min-h-16
          cursor-pointer
          list-none
          items-center
          justify-between
          gap-4
          px-5
          py-4
          font-black
          text-[#0B1F3A]
          transition-colors
          hover:bg-[#F8FAFC]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-[#16C7C7]
          [&::-webkit-details-marker]:hidden
        "
      >
        <span
          className="
            flex
            min-w-0
            items-center
            gap-3
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#ECFEFD]
              text-[#108686]
            "
          >
            <ClipboardList
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={1.8}
            />
          </span>

          <span className="leading-6">
            {topic.title}
          </span>
        </span>

        <ChevronDown
          aria-hidden="true"
          className="
            h-5
            w-5
            shrink-0
            text-[#108686]
            transition-transform
            group-open:rotate-180
            motion-reduce:transition-none
          "
        />
      </summary>

      <div
        className="
          border-t
          border-[#E7EDF2]
          bg-[#F8FAFC]
          px-5
          py-5
        "
      >
        <p
          className="
            text-caption
            font-black
            uppercase
            tracking-[0.09em]
            text-[#64748B]
          "
        >
          {skillsLabel}
        </p>

        <ul
          className="
            mt-4
            grid
            gap-2.5
            sm:grid-cols-2
          "
        >
          {topic.subtopics.map(
            (subtopic) => (
              <li
                key={
                  `${topic.id}-${subtopic.id}`
                }
                className="
                  flex
                  items-start
                  gap-2.5
                  rounded-xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  px-4
                  py-3
                  text-small
                  leading-6
                  text-[#334155]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    mt-2
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#16C7C7]
                  "
                />

                {subtopic.title}
              </li>
            )
          )}
        </ul>
      </div>
    </details>
  );
}
