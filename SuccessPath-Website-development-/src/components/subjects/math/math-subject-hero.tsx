import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ChartSpline,
  Sigma,
  Sparkles,
} from 'lucide-react';

import {
  Breadcrumbs,
} from '@/components/internal/breadcrumbs';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';
import type {
  MathHeroCopy,
} from '@/types/math-overview';

interface MathSubjectHeroProps {
  copy: MathHeroCopy;
  breadcrumbs:
    BreadcrumbItem[];
  primaryHref: string;
  secondaryHref: string;
  curriculumStats: {
    topicCount: number;
    pathwayCount: number;
    gradeRange: string;
  };
}

export function MathSubjectHero({
  copy,
  breadcrumbs,
  primaryHref,
  secondaryHref,
  curriculumStats,
}: MathSubjectHeroProps) {
  return (
    <header
      className="
        relative
        isolate
        overflow-hidden
        bg-[#071426]
        text-white
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        <div
          className="
            absolute
            -end-40
            -top-56
            h-[38rem]
            w-[38rem]
            rounded-full
            bg-[#16C7C7]/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-64
            -start-40
            h-[36rem]
            w-[36rem]
            rounded-full
            bg-[#4F89AB]/25
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:radial-gradient(white_1px,transparent_1px)]
            [background-size:28px_28px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-12
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        <Breadcrumbs
          items={breadcrumbs}
          ariaLabel={
            copy.breadcrumbLabel
          }
          inverse
        />

        <div
          className="
            mt-8
            grid
            items-center
            gap-12
            lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)]
            lg:gap-16
          "
        >
          <div className="max-w-4xl">
            <p
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#67E8E5]/25
                bg-[#16C7C7]/10
                px-4
                py-2
                text-caption
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#A4F4F1]
              "
            >
              <Sparkles
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={1.8}
              />

              {copy.eyebrow}
            </p>

            <h1
              className="
                mt-6
                max-w-4xl
                text-h1
                font-black
                leading-tight
                text-white
              "
            >
              {copy.title}
            </h1>

            <p
              className="
                mt-6
                max-w-3xl
                text-body
                leading-8
                text-white/75
                sm:text-lg
              "
            >
              {copy.description}
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
                href={primaryHref}
                className="
                  group
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#16C7C7]
                  px-8
                  py-4
                  text-body
                  font-bold
                  text-[#071426]
                  shadow-[0_12px_35px_rgba(22,199,199,0.22)]
                  transition-[background-color,box-shadow,transform]
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#0FA8A8]
                  hover:shadow-[0_18px_42px_rgba(22,199,199,0.28)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#67E8E5]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                {copy.primaryAction}

                <ArrowDown
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-y-0.5
                    motion-reduce:transition-none
                  "
                />
              </Link>

              <Link
                href={secondaryHref}
                className="
                  group
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-8
                  py-4
                  text-body
                  font-bold
                  text-white
                  transition-[background-color,border-color,transform]
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-white/30
                  hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#67E8E5]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                {copy.secondaryAction}

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-0.5
                    rtl:-scale-x-100
                    rtl:group-hover:-translate-x-0.5
                    motion-reduce:transition-none
                  "
                />
              </Link>
            </div>

            <ul
              className="
                mt-10
                grid
                gap-4
                sm:grid-cols-3
              "
            >
              {copy.highlights.map(
                (item) => (
                  <li
                    key={item.value}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      p-4
                    "
                  >
                    <strong
                      className="
                        block
                        text-small
                        text-white
                      "
                    >
                      {item.value}
                    </strong>

                    <span
                      className="
                        mt-1
                        block
                        text-caption
                        leading-5
                        text-white/60
                      "
                    >
                      {item.label}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <aside
            aria-label={
              copy.visualLabel
            }
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.07]
              p-6
              shadow-[0_30px_80px_rgba(2,6,23,0.28)]
              backdrop-blur-md
              sm:p-8
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -end-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-[#16C7C7]/15
                blur-2xl
              "
            />

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
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#A4F4F1]
                  "
                >
                  {copy.visualLabel}
                </p>

                <h2
                  className="
                    mt-3
                    text-h3
                    font-black
                    text-white
                  "
                >
                  {copy.visualTitle}
                </h2>
              </div>

              <div
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
                "
              >
                <Sigma
                  aria-hidden="true"
                  className="h-7 w-7"
                  strokeWidth={1.9}
                />
              </div>
            </div>

            <p
              className="
                mt-4
                text-small
                leading-7
                text-white/65
              "
            >
              {copy.visualDescription}
            </p>

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-3
                lg:grid-cols-1
                xl:grid-cols-3
              "
            >
              <StatCard
                value={
                  curriculumStats
                    .gradeRange
                }
                label={copy.visualStats.grades}
              />

              <StatCard
                value={
                  curriculumStats
                    .topicCount
                    .toLocaleString()
                }
                label={copy.visualStats.topics}
              />

              <StatCard
                value={
                  curriculumStats
                    .pathwayCount
                    .toLocaleString()
                }
                label={copy.visualStats.pathways}
              />
            </div>

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-3
              "
            >
              <VisualTile
                icon={ChartSpline}
                label={copy.visualTiles.functions}
              />

              <VisualTile
                icon={Sigma}
                label={copy.visualTiles.advancedMath}
              />
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#071426]/45
        p-4
      "
    >
      <strong
        className="
          block
          text-h4
          font-black
          text-white
        "
      >
        {value}
      </strong>

      <span
        className="
          mt-1
          block
          text-caption
          text-white/55
        "
      >
        {label}
      </span>
    </div>
  );
}

function VisualTile({
  icon: Icon,
  label,
}: {
  icon:
    typeof ChartSpline;
  label: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-4
      "
    >
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#16C7C7]/15
          text-[#67E8E5]
        "
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5"
          strokeWidth={1.8}
        />
      </span>

      <span
        className="
          text-small
          font-bold
          text-white/80
        "
      >
        {label}
      </span>
    </div>
  );
}