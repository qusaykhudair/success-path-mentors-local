import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Layers3,
} from 'lucide-react';

import {
  Breadcrumbs,
} from '@/components/internal/breadcrumbs';
import {
  MathPathwayIcon,
} from '@/components/subjects/math/math-pathway-icon';
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
  MathGradeTopicGroup,
  MathTopicSummary,
  PublicMathPathwaySummary,
} from '@/types/math-overview';

interface MathPathwayPageContentProps {
  locale: SiteLocale;
  pathway:
    PublicMathPathwaySummary;
  relatedPathways:
    PublicMathPathwaySummary[];
  breadcrumbs:
    BreadcrumbItem[];
  bookingHref: string;
}

const pageCopy = {
  en: {
    eyebrow:
      'Mathematics curriculum pathway',
    completeCoverage:
      'Complete Grade 2–12 map',
    gradesNavigation:
      'Jump to a grade',
    curriculumHeading:
      'Curriculum topics by grade',
    curriculumDescription:
      'Every grade is included. Topic names are taken from the documented Excel roadmap and repeated labels are shown once within the same grade.',
    topicsLabel:
      'documented topics',
    gradeSectionsLabel:
      'grade sections',
    topicOverview:
      'Topic overview',
    sourceNote:
      'Topic names are shown in English as documented in the curriculum source. A grade with no documented topic remains visible for completeness.',
    backToMath:
      'Back to mathematics',
    bookTrial:
      'Find a math tutor',
    relatedHeading:
      'Explore other math pathways',
    relatedAction:
      'Open pathway',
    breadcrumbLabel:
      'Mathematics pathway breadcrumb',
    noTopics:
      'No topic is documented for this pathway in this grade.',
    coverageTitle:
      'Pathway coverage',
    available:
      'Topics documented',
    notAvailable:
      'No topic documented',
  },
  ar: {
    eyebrow:
      'مسار منهج الرياضيات',
    completeCoverage:
      'خريطة كاملة للصفوف 2–12',
    gradesNavigation:
      'انتقل إلى الصف',
    curriculumHeading:
      'موضوعات المنهج حسب الصف',
    curriculumDescription:
      'تم تضمين جميع الصفوف. أسماء الموضوعات مأخوذة من خارطة Excel الموثقة، ويظهر العنوان المكرر مرة واحدة فقط داخل الصف نفسه.',
    topicsLabel:
      'موضوعًا موثقًا',
    gradeSectionsLabel:
      'قسمًا للصفوف',
    topicOverview:
      'نظرة عامة على الموضوع',
    sourceNote:
      'تُعرض أسماء الموضوعات بالإنجليزية كما وردت في مصدر المنهج. يبقى الصف ظاهرًا حتى عندما لا يحتوي المصدر على موضوع موثق ضمن هذا المسار.',
    backToMath:
      'العودة إلى الرياضيات',
    bookTrial:
      'ابحث عن مدرس رياضيات',
    relatedHeading:
      'استكشف مسارات رياضيات أخرى',
    relatedAction:
      'فتح المسار',
    breadcrumbLabel:
      'مسار التنقل لصفحة الرياضيات',
    noTopics:
      'لا يوجد موضوع موثق لهذا المسار في هذا الصف.',
    coverageTitle:
      'تغطية المسار',
    available:
      'توجد موضوعات موثقة',
    notAvailable:
      'لا يوجد موضوع موثق',
  },
} as const;

export function MathPathwayPageContent({
  locale,
  pathway,
  relatedPathways,
  breadcrumbs,
  bookingHref,
}: MathPathwayPageContentProps) {
  const copy =
    pageCopy[locale];

  const grades =
    pathway.stages.flatMap(
      (stage) =>
        stage.grades
    );

  const mathHref =
    routePath.subject(
      locale,
      'math'
    );

  return (
    <>
      <div
        className="
          border-b
          border-[#DCE5EC]
          bg-white
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[82rem]
            px-4
            py-3
            sm:px-6
            lg:px-8
          "
        >
          <Breadcrumbs
            items={breadcrumbs}
            ariaLabel={
              copy.breadcrumbLabel
            }
          />
        </div>
      </div>

      <section
        className="
          relative
          overflow-hidden
          bg-[#071426]
          py-12
          text-white
          sm:py-16
          lg:py-20
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -end-24
            -top-32
            h-96
            w-96
            rounded-full
            bg-[#16C7C7]/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-48
            -start-28
            h-96
            w-96
            rounded-full
            bg-[#2C5774]/35
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-[82rem]
            gap-10
            px-4
            sm:px-6
            lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]
            lg:items-center
            lg:px-8
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
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#16C7C7]
                  text-[#071426]
                  shadow-[0_14px_34px_rgba(22,199,199,0.22)]
                "
              >
                <MathPathwayIcon
                  iconKey={
                    pathway.iconKey
                  }
                  className="h-7 w-7"
                />
              </span>

              <div>
                <p
                  className="
                    text-caption
                    font-black
                    uppercase
                    tracking-[0.13em]
                    text-[#67E8E5]
                  "
                >
                  {copy.eyebrow}
                </p>

                <p
                  className="
                    mt-1
                    text-small
                    font-bold
                    text-white/60
                  "
                >
                  {
                    copy.completeCoverage
                  }
                </p>
              </div>
            </div>

            <h1
              className="
                mt-7
                max-w-4xl
                text-h1
                font-black
                leading-[1.12]
                text-white
              "
            >
              {pathway.title}
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
              {pathway.description}
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
                  transition-[background-color,transform]
                  hover:-translate-y-0.5
                  hover:bg-[#2DD4D1]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                {copy.bookTrial}

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                    rtl:-scale-x-100
                    rtl:group-hover:-translate-x-1
                  "
                />
              </Link>

              <Link
                href={mathHref}
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  py-3
                  text-small
                  font-black
                  text-white
                  transition-colors
                  hover:border-[#67E8E5]
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

                {copy.backToMath}
              </Link>
            </div>
          </div>

          <aside
            className="
              rounded-[1.5rem]
              border
              border-white/12
              bg-white/[0.07]
              p-5
              shadow-[0_24px_70px_rgba(0,0,0,0.22)]
              backdrop-blur-sm
              sm:p-6
            "
            aria-label={
              copy.coverageTitle
            }
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-caption
                    font-black
                    uppercase
                    tracking-[0.1em]
                    text-[#67E8E5]
                  "
                >
                  {copy.coverageTitle}
                </p>

                <h2
                  className="
                    mt-2
                    text-h4
                    font-black
                    text-white
                  "
                >
                  Grades 2–12
                </h2>
              </div>

              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  text-[#67E8E5]
                "
              >
                <GraduationCap
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </span>
            </div>

            <dl
              className="
                mt-5
                grid
                grid-cols-2
                gap-3
              "
            >
              <CoverageMetric
                icon={BookOpen}
                value={
                  pathway.topicCount.toLocaleString()
                }
                label={
                  copy.topicsLabel
                }
              />

              <CoverageMetric
                icon={Layers3}
                value="11"
                label={
                  copy.gradeSectionsLabel
                }
              />
            </dl>

            <div
              className="
                mt-5
                grid
                grid-cols-4
                gap-2
                sm:grid-cols-6
                lg:grid-cols-4
                xl:grid-cols-6
              "
            >
              {grades.map(
                (grade) => {
                  const hasTopics =
                    grade.topicCount > 0;

                  return (
                    <a
                      key={grade.grade}
                      href={
                        `#${pathway.slug}-${grade.grade.toLowerCase()}`
                      }
                      title={
                        hasTopics
                          ? copy.available
                          : copy.notAvailable
                      }
                      className={`
                        inline-flex
                        min-h-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        px-2
                        py-2
                        text-caption
                        font-black
                        transition-colors
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#16C7C7]
                        ${
                          hasTopics
                            ? `
                              border-[#16C7C7]/45
                              bg-[#16C7C7]/15
                              text-[#A4F4F1]
                              hover:bg-[#16C7C7]/25
                            `
                            : `
                              border-white/10
                              bg-white/[0.04]
                              text-white/35
                              hover:bg-white/[0.08]
                            `
                        }
                      `}
                    >
                      {grade.shortLabel}
                    </a>
                  );
                }
              )}
            </div>
          </aside>
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
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[17rem_minmax(0,1fr)]
              lg:gap-10
            "
          >
            <div
              className="
                lg:sticky
                lg:top-24
                lg:self-start
              "
            >
              <p
                className="
                  text-caption
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#108686]
                "
              >
                {
                  copy.completeCoverage
                }
              </p>

              <h2
                className="
                  mt-3
                  text-h2
                  font-black
                  text-[#0B1F3A]
                "
              >
                {
                  copy.curriculumHeading
                }
              </h2>

              <p
                className="
                  mt-4
                  text-small
                  leading-7
                  text-[#475569]
                "
              >
                {
                  copy.curriculumDescription
                }
              </p>

              <nav
                aria-label={
                  copy.gradesNavigation
                }
                className="
                  mt-6
                  hidden
                  rounded-2xl
                  border
                  border-[#DCE5EC]
                  bg-white
                  p-3
                  lg:block
                "
              >
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {grades.map(
                    (grade) => (
                      <a
                        key={
                          grade.grade
                        }
                        href={
                          `#${pathway.slug}-${grade.grade.toLowerCase()}`
                        }
                        className="
                          inline-flex
                          min-h-10
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-[#DCE5EC]
                          bg-[#F8FAFC]
                          px-2
                          py-2
                          text-caption
                          font-black
                          text-[#334155]
                          transition-colors
                          hover:border-[#16C7C7]
                          hover:bg-[#ECFEFD]
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#16C7C7]
                        "
                      >
                        {
                          grade.shortLabel
                        }
                      </a>
                    )
                  )}
                </div>
              </nav>
            </div>

            <div
              className="
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#DCE5EC]
                bg-white
                shadow-[0_16px_44px_rgba(7,20,38,0.06)]
              "
            >
              {grades.map(
                (grade, index) => (
                  <GradeSection
                    key={
                      grade.grade
                    }
                    pathwaySlug={
                      pathway.slug
                    }
                    pathwayTitle={
                      pathway.shortTitle
                    }
                    grade={grade}
                    index={index}
                    copy={copy}
                  />
                )
              )}
            </div>
          </div>

          <p
            className="
              mt-6
              rounded-xl
              border
              border-[#CFFAF8]
              bg-[#ECFEFD]
              px-4
              py-3
              text-small
              leading-7
              text-[#126A6A]
            "
          >
            {copy.sourceNote}
          </p>
        </div>
      </section>

      <section
        className="
          bg-white
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
          <h2
            className="
              text-h3
              font-black
              text-[#0B1F3A]
            "
          >
            {copy.relatedHeading}
          </h2>

          <div
            className="
              mt-7
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {relatedPathways.map(
              (related) => (
                <Link
                  key={related.slug}
                  href={
                    routePath.mathPathway(
                      locale,
                      related.slug
                    )
                  }
                  className="
                    group
                    rounded-2xl
                    border
                    border-[#DCE5EC]
                    bg-[#F8FAFC]
                    p-5
                    transition-[border-color,background-color,transform]
                    hover:-translate-y-0.5
                    hover:border-[#67E8E5]
                    hover:bg-[#ECFEFD]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#16C7C7]
                    focus-visible:ring-offset-2
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-[#108686]
                      ring-1
                      ring-[#CFFAF8]
                    "
                  >
                    <MathPathwayIcon
                      iconKey={
                        related.iconKey
                      }
                      className="h-5 w-5"
                    />
                  </span>

                  <h3
                    className="
                      mt-4
                      text-[1rem]
                      font-black
                      text-[#0B1F3A]
                    "
                  >
                    {related.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      line-clamp-3
                      text-small
                      leading-6
                      text-[#64748B]
                    "
                  >
                    {
                      related.description
                    }
                  </p>

                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-small
                      font-black
                      text-[#108686]
                    "
                  >
                    {copy.relatedAction}

                    <ArrowRight
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                        rtl:-scale-x-100
                        rtl:group-hover:-translate-x-1
                      "
                    />
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function GradeSection({
  pathwaySlug,
  pathwayTitle,
  grade,
  index,
  copy,
}: {
  pathwaySlug: string;
  pathwayTitle: string;
  grade: MathGradeTopicGroup;
  index: number;
  copy:
    (typeof pageCopy)[keyof typeof pageCopy];
}) {
  const hasTopics =
    grade.topics.length > 0;

  return (
    <article
      id={
        `${pathwaySlug}-${grade.grade.toLowerCase()}`
      }
      className={`
        scroll-mt-24
        p-5
        sm:p-7
        lg:p-8
        ${
          index > 0
            ? 'border-t border-[#DCE5EC]'
            : ''
        }
      `}
    >
      <header
        className="
          flex
          flex-col
          gap-3
          border-b
          border-[#E7EDF2]
          pb-5
          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <p
            className="
              text-caption
              font-black
              uppercase
              tracking-[0.1em]
              text-[#108686]
            "
          >
            {pathwayTitle}
          </p>

          <h3
            className="
              mt-1
              text-h3
              font-black
              text-[#0B1F3A]
            "
          >
            {grade.label}
          </h3>
        </div>

        {hasTopics && (
          <span
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              border-[#CFFAF8]
              bg-[#ECFEFD]
              px-3
              py-1.5
              text-caption
              font-black
              text-[#126A6A]
            "
          >
            {
              grade.topicCount.toLocaleString()
            }
            {' '}
            {copy.topicsLabel}
          </span>
        )}
      </header>

      {hasTopics ? (
        <ul
          className="
            mt-5
            grid
            gap-3
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {grade.topics.map(
            (topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                overviewLabel={
                  copy.topicOverview
                }
              />
            )
          )}
        </ul>
      ) : (
        <div
          className="
            mt-5
            rounded-2xl
            border
            border-dashed
            border-[#CBD5E1]
            bg-[#F8FAFC]
            px-5
            py-7
          "
        >
          <p
            className="
              text-small
              font-bold
              leading-7
              text-[#64748B]
            "
          >
            {copy.noTopics}
          </p>
        </div>
      )}
    </article>
  );
}

function TopicCard({
  topic,
  overviewLabel,
}: {
  topic: MathTopicSummary;
  overviewLabel: string;
}) {
  const overviewOnly =
    topic.status ===
    'topic-only';

  return (
    <li
      className="
        flex
        min-h-16
        items-start
        gap-3
        rounded-xl
        border
        border-[#DCE5EC]
        bg-white
        p-4
        shadow-[0_2px_10px_rgba(7,20,38,0.035)]
      "
    >
      <span
        aria-hidden="true"
        className="
          mt-0.5
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#ECFEFD]
          text-[#108686]
        "
      >
        <Check
          className="h-4 w-4"
          strokeWidth={2}
        />
      </span>

      <span className="min-w-0">
        <strong
          className="
            block
            text-small
            font-black
            leading-6
            text-[#0B1F3A]
          "
        >
          {topic.title}
        </strong>

        {overviewOnly && (
          <span
            className="
              mt-1
              inline-flex
              rounded-full
              bg-amber-50
              px-2.5
              py-1
              text-[0.7rem]
              font-bold
              text-amber-900
            "
          >
            {overviewLabel}
          </span>
        )}
      </span>
    </li>
  );
}

function CoverageMetric({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BookOpen;
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-white/[0.06]
        p-4
      "
    >
      <dt
        className="
          flex
          items-center
          gap-2
          text-caption
          font-bold
          text-white/55
        "
      >
        <Icon
          aria-hidden="true"
          className="h-4 w-4 text-[#67E8E5]"
          strokeWidth={1.8}
        />

        {label}
      </dt>

      <dd
        className="
          mt-2
          text-h4
          font-black
          text-white
        "
      >
        {value}
      </dd>
    </div>
  );
}
