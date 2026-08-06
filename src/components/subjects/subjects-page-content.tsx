import Link from 'next/link';
import {
  ArrowRight,
  BookOpenCheck,
  Calculator,
  Check,
  GraduationCap,
  Languages,
  Layers3,
} from 'lucide-react';

import {
  Breadcrumbs,
} from '@/components/internal/breadcrumbs';
import {
  ScienceStrandIcon,
} from '@/components/subjects/science/science-strand-icon';
import type {
  SiteLocale,
} from '@/config/site';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface BranchLink {
  title: string;
  href: string;
}

interface SubjectDirectoryItem {
  key:
    | 'math'
    | 'english'
    | 'chemistry'
    | 'physics'
    | 'general-science'
    | 'programme-francais';
  title: string;
  description: string;
  gradeRange: string;
  unitCount: number;
  unitLabel: string;
  action: string;
  branchesLabel: string;
  href: string;
  branches: BranchLink[];
}

interface SubjectsPageCopy {
  breadcrumb: {
    ariaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    stats: {
      subjects: string;
      pathways: string;
      grades: string;
    };
  };
  directory: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

interface SubjectsPageContentProps {
  locale: SiteLocale;
  copy: SubjectsPageCopy;
  breadcrumbs: BreadcrumbItem[];
  subjects: SubjectDirectoryItem[];
  contactHref: string;
  aboutHref: string;
}

export function SubjectsPageContent({
  locale,
  copy,
  breadcrumbs,
  subjects,
  contactHref,
  aboutHref,
}: SubjectsPageContentProps) {
  const pathwayCount =
    subjects.reduce(
      (total, subject) =>
        total +
        subject.unitCount,
      0
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
              copy.breadcrumb
                .ariaLabel
            }
          />
        </div>
      </div>

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-[#071426]
          py-14
          text-white
          sm:py-18
          lg:py-22
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -end-28
            -top-36
            -z-10
            h-[30rem]
            w-[30rem]
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
            -start-32
            -z-10
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-[#2C5774]/35
            blur-3xl
          "
        />

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[82rem]
            gap-10
            px-4
            sm:px-6
            lg:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)]
            lg:items-center
            lg:px-8
          "
        >
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
              {copy.hero.eyebrow}
            </p>

            <h1
              className="
                mt-4
                max-w-4xl
                text-h1
                font-black
                leading-[1.1]
                text-white
              "
            >
              {copy.hero.title}
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
              {copy.hero.description}
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
              {subjects.map(
                (subject, index) => (
                  <Link
                    key={subject.key}
                    href={subject.href}
                    className={`
                      group
                      inline-flex
                      min-h-12
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      px-6
                      py-3
                      text-small
                      font-black
                      transition-[transform,background-color,border-color]
                      hover:-translate-y-0.5
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#071426]
                      motion-reduce:transition-none
                      motion-reduce:hover:translate-y-0
                      ${
                        index === 0
                          ? 'bg-[#16C7C7] text-[#071426] hover:bg-[#2DD4D1]'
                          : 'border border-white/20 bg-white/[0.06] text-white hover:border-[#67E8E5] hover:bg-white/10'
                      }
                    `}
                  >
                    {subject.action}

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
                )
              )}
            </div>
          </div>

          <div role="list"
            className="
              grid
              gap-3
              rounded-[1.5rem]
              border
              border-white/12
              bg-white/[0.07]
              p-5
              shadow-[0_24px_70px_rgba(0,0,0,0.22)]
              backdrop-blur-sm
              sm:grid-cols-3
              lg:grid-cols-1
              xl:grid-cols-3
            "
          >
            <HeroStat
              icon={BookOpenCheck}
              value={
                subjects.length
                  .toLocaleString(
                    locale
                  )
              }
              label={
                copy.hero.stats
                  .subjects
              }
            />

            <HeroStat
              icon={Layers3}
              value={
                pathwayCount
                  .toLocaleString(
                    locale
                  )
              }
              label={
                copy.hero.stats
                  .pathways
              }
            />

            <HeroStat
              icon={GraduationCap}
              value="1–12"
              label={
                copy.hero.stats
                  .grades
              }
            />
          </div>
        </div>
      </section>

      <section
        id="subject-directory"
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
              {copy.directory.eyebrow}
            </p>

            <h2
              className="
                mt-3
                text-h2
                font-black
                text-[#0B1F3A]
              "
            >
              {copy.directory.title}
            </h2>

            <p
              className="
                mt-4
                text-body
                leading-8
                text-[#64748B]
              "
            >
              {copy.directory.description}
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-7
              xl:grid-cols-2
            "
          >
            {subjects.map(
              (subject) => (
                <SubjectCard
                  key={subject.key}
                  subject={subject}
                  wide={false}
                />
              )
            )}
          </div>
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
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.5rem]
              bg-[linear-gradient(110deg,#071426_0%,#0B1F3A_55%,#108686_100%)]
              p-7
              text-white
              shadow-[0_22px_60px_rgba(7,20,38,0.18)]
              sm:p-9
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -end-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#2DD4D1]/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                max-w-3xl
              "
            >
              <p
                className="
                  text-caption
                  font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#A4F4F1]
                "
              >
                {copy.cta.eyebrow}
              </p>

              <h2
                className="
                  mt-3
                  text-h2
                  font-black
                  text-white
                "
              >
                {copy.cta.title}
              </h2>

              <p
                className="
                  mt-4
                  text-body
                  leading-8
                  text-white/72
                "
              >
                {copy.cta.description}
              </p>
            </div>

            <div
              className="
                relative
                mt-7
                flex
                shrink-0
                flex-col
                gap-3
                sm:flex-row
                lg:mt-0
                lg:flex-col
                xl:flex-row
              "
            >
              <Link
                href={contactHref}
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#16C7C7]
                  px-6
                  py-3
                  text-small
                  font-black
                  text-[#071426]
                  transition-colors
                  hover:bg-[#2DD4D1]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                {copy.cta.primary}
              </Link>

              <Link
                href={aboutHref}
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.06]
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
                {copy.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SubjectCard({
  subject,
  wide,
}: {
  subject: SubjectDirectoryItem;
  wide: boolean;
}) {
  return (
    <article
      className={`
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        border-[#DCE5EC]
        bg-white
        shadow-[0_16px_44px_rgba(7,20,38,0.06)]
        ${
          wide
            ? 'xl:col-span-2'
            : ''
        }
      `}
    >
      <div
        className="
          border-b
          border-[#E7EDF2]
          p-6
          sm:p-7
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-5
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
              bg-[#ECFEFD]
              text-[#108686]
              ring-1
              ring-[#CFFAF8]
            "
          >
            <SubjectIcon
              subjectKey={
                subject.key
              }
            />
          </span>

          <div
            className="
              flex
              flex-wrap
              justify-end
              gap-2
            "
          >
            <span
              className="
                rounded-full
                border
                border-[#DCE5EC]
                bg-[#F8FAFC]
                px-3
                py-1.5
                text-caption
                font-black
                text-[#475569]
              "
            >
              {subject.gradeRange}
            </span>

            <span
              className="
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
                subject.unitCount
                  .toLocaleString()
              }
              {' '}
              {subject.unitLabel}
            </span>
          </div>
        </div>

        <h3
          className="
            mt-6
            text-h3
            font-black
            text-[#0B1F3A]
          "
        >
          {subject.title}
        </h3>

        <p
          className="
            mt-3
            text-small
            leading-7
            text-[#64748B]
          "
        >
          {subject.description}
        </p>

        <Link
          href={subject.href}
          className="
            group
            mt-5
            inline-flex
            min-h-11
            items-center
            gap-2
            rounded-xl
            bg-[#0B1F3A]
            px-5
            py-2.5
            text-small
            font-black
            text-white
            transition-[transform,background-color]
            hover:-translate-y-0.5
            hover:bg-[#123D68]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#16C7C7]
            focus-visible:ring-offset-2
            motion-reduce:transition-none
            motion-reduce:hover:translate-y-0
          "
        >
          {subject.action}

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
      </div>

      <div
        className="
          flex-1
          p-6
          sm:p-7
        "
      >
        <h4
          className="
            text-small
            font-black
            text-[#0B1F3A]
          "
        >
          {subject.branchesLabel}
        </h4>

        <ul
          className={`
            mt-4
            grid
            gap-2.5
            sm:grid-cols-2
            ${
              wide
                ? 'lg:grid-cols-4'
                : ''
            }
          `}
        >
          {subject.branches.map(
            (branch) => (
              <li
                key={branch.href}
              >
                <Link
                  href={branch.href}
                  className="
                    group
                    flex
                    min-h-11
                    items-start
                    gap-2.5
                    rounded-xl
                    border
                    border-[#E2E8F0]
                    bg-[#F8FAFC]
                    px-3
                    py-3
                    text-small
                    font-bold
                    leading-5
                    text-[#334155]
                    transition-[border-color,background-color,color]
                    hover:border-[#67E8E5]
                    hover:bg-[#ECFEFD]
                    hover:text-[#0B1F3A]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#16C7C7]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      mt-0.5
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#108686]
                      ring-1
                      ring-[#CFFAF8]
                    "
                  >
                    <Check
                      className="
                        h-3
                        w-3
                      "
                      strokeWidth={2.2}
                    />
                  </span>

                  <span>
                    {branch.title}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </article>
  );
}

function SubjectIcon({
  subjectKey,
}: {
  subjectKey:
    SubjectDirectoryItem['key'];
}) {
  if (subjectKey === 'math') {
    return (
      <Calculator
        aria-hidden="true"
        className="h-7 w-7"
        strokeWidth={1.8}
      />
    );
  }

  if (
    subjectKey === 'chemistry'
  ) {
    return (
      <ScienceStrandIcon
        iconKey="flask"
        className="h-8 w-8"
      />
    );
  }

  if (
    subjectKey === 'physics'
  ) {
    return (
      <ScienceStrandIcon
        iconKey="physics"
        className="h-8 w-8"
      />
    );
  }

  if (
    subjectKey ===
    'general-science'
  ) {
    return (
      <ScienceStrandIcon
        iconKey="earth"
        className="h-8 w-8"
      />
    );
  }

  if (
    subjectKey ===
    'programme-francais'
  ) {
    return (
      <Languages
        aria-hidden="true"
        className="h-7 w-7"
        strokeWidth={1.8}
      />
    );
  }

  return (
    <BookOpenCheck
      aria-hidden="true"
      className="h-7 w-7"
      strokeWidth={1.8}
    />
  );
}

function HeroStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BookOpenCheck;
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
      <p
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
          className="
            h-4
            w-4
            text-[#67E8E5]
          "
          strokeWidth={1.8}
        />

        {label}
      </p>

      <p
        className="
          mt-2
          text-h4
          font-black
          text-white
        "
      >
        {value}
      </p>
    </div>
  );
}
