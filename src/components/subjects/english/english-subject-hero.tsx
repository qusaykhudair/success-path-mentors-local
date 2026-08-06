import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  FileCheck2,
  GraduationCap,
  MessagesSquare,
} from 'lucide-react';

import {
  Breadcrumbs,
} from '@/components/internal/breadcrumbs';
import type {
  BreadcrumbItem,
} from '@/types/internal-page';

interface EnglishSubjectHeroProps {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    breadcrumbLabel: string;
    highlights: ReadonlyArray<{
      value: string;
      label: string;
    }>;
  };
  breadcrumbs:
    BreadcrumbItem[];
  primaryHref: string;
  secondaryHref: string;
}

export function EnglishSubjectHero({
  copy,
  breadcrumbs,
  primaryHref,
  secondaryHref,
}: EnglishSubjectHeroProps) {
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
          max-w-[82rem]
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
            lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.72fr)]
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
              <GraduationCap
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
                  hover:-translate-y-0.5
                  hover:bg-[#0FA8A8]
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
                  className="h-4 w-4"
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
                  className="h-4 w-4 rtl:-scale-x-100"
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
            aria-label="English learning map"
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.06]
              p-6
              shadow-[0_28px_80px_rgba(0,0,0,0.26)]
              backdrop-blur-sm
              sm:p-8
            "
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
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#67E8E5]
                  "
                >
                  English Skills
                </p>

                <p
                  className="
                    mt-2
                    text-h3
                    font-black
                    text-white
                  "
                >
                  Aa · Read · Write
                </p>
              </div>

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
                <BookOpenCheck
                  aria-hidden="true"
                  className="h-7 w-7"
                  strokeWidth={1.8}
                />
              </span>
            </div>

            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-3
                lg:grid-cols-1
              "
            >
              <VisualTile
                icon={BookOpenCheck}
                title="Reading"
                text="Decode and understand"
              />

              <VisualTile
                icon={FileCheck2}
                title="Writing"
                text="Organize and express"
              />

              <VisualTile
                icon={MessagesSquare}
                title="Communication"
                text="Listen and speak clearly"
              />
            </div>

            <blockquote
              className="
                mt-6
                rounded-2xl
                border
                border-[#67E8E5]/20
                bg-[#16C7C7]/10
                p-5
                text-small
                leading-7
                text-white/80
              "
            >
              “Progressive support from foundational reading to advanced academic English.”
            </blockquote>
          </aside>
        </div>
      </div>
    </header>
  );
}

function VisualTile({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof BookOpenCheck;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        p-4
      "
    >
      <span
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white/10
          text-[#67E8E5]
        "
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5"
          strokeWidth={1.8}
        />
      </span>

      <div>
        <strong className="block text-small text-white">
          {title}
        </strong>

        <span className="mt-1 block text-caption text-white/55">
          {text}
        </span>
      </div>
    </div>
  );
}
