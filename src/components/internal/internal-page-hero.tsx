import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

import type {
  BreadcrumbItem,
  PageAction,
  PageHighlight,
} from '@/types/internal-page';

import { Breadcrumbs } from './breadcrumbs';

interface InternalPageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  breadcrumbLabel: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: PageAction;
  secondaryAction?: PageAction;
  highlights?: PageHighlight[];
}

function isExternalHref(
  href: string
): boolean {
  return /^(https?:|mailto:|tel:)/i.test(
    href
  );
}

function HeroAction({
  action,
  primary,
}: {
  action: PageAction;
  primary: boolean;
}) {
  const external =
    action.external ??
    isExternalHref(action.href);

  const className = primary
    ? `
        group
        inline-flex
        min-h-14
        w-full
        items-center
        justify-center
        gap-2
        rounded-full
        bg-accent
        px-8
        py-4
        text-body
        font-bold
        text-accent-foreground
        shadow-button-accent
        transition-[background-color,box-shadow,transform]
        duration-200
        hover:-translate-y-0.5
        hover:bg-accent-600
        hover:shadow-lg
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent-300
        focus-visible:ring-offset-2
        focus-visible:ring-offset-primary-950
        motion-reduce:transition-none
        motion-reduce:hover:translate-y-0
        sm:w-auto
      `
    : `
        inline-flex
        min-h-14
        w-full
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white/5
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
        focus-visible:ring-accent-300
        focus-visible:ring-offset-2
        focus-visible:ring-offset-primary-950
        motion-reduce:transition-none
        motion-reduce:hover:translate-y-0
        sm:w-auto
      `;

  const content = (
    <>
      {action.label}

      {primary && (
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
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={action.href}
        target={
          action.newTab ? '_blank' : undefined
        }
        rel={
          action.newTab
            ? 'noopener noreferrer'
            : undefined
        }
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={action.href}
      className={className}
    >
      {content}
    </Link>
  );
}

export function InternalPageHero({
  breadcrumbs,
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights = [],
}: InternalPageHeroProps) {
  return (
    <header
      className="
        relative
        isolate
        overflow-hidden
        bg-brand-dark
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
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -end-40
            -top-52
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-accent/[0.16]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-56
            -start-32
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-primary-400/[0.14]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:radial-gradient(white_1px,transparent_1px)]
            [background-size:30px_30px]
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
          ariaLabel={breadcrumbLabel}
          inverse
        />

        <div
          className="
            mt-8
            grid
            items-end
            gap-10
            lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]
            lg:gap-14
          "
        >
          <div className="max-w-4xl">
            {eyebrow && (
              <p
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-accent-300/20
                  bg-accent/10
                  px-3.5
                  py-2
                  text-caption
                  font-bold
                  uppercase
                  tracking-wider
                  text-accent-200
                "
              >
                <Sparkles
                  aria-hidden="true"
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />

                {eyebrow}
              </p>
            )}

            <h1
              className="
                mt-5
                max-w-4xl
                text-h1
                font-black
                leading-tight
                text-white
              "
            >
              {title}
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
              {description}
            </p>

            {(primaryAction ||
              secondaryAction) && (
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
                {primaryAction && (
                  <HeroAction
                    action={primaryAction}
                    primary
                  />
                )}

                {secondaryAction && (
                  <HeroAction
                    action={secondaryAction}
                    primary={false}
                  />
                )}
              </div>
            )}
          </div>

          {highlights.length > 0 && (
            <aside
              aria-label={title}
              className="
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.06]
                p-5
                shadow-xl
                backdrop-blur-sm
                sm:p-6
              "
            >
              <ul className="grid gap-4">
                {highlights.map((item) => (
                  <li
                    key={`${item.value}-${item.label}`}
                    className="
                      flex
                      items-start
                      gap-3
                      border-b
                      border-white/10
                      pb-4
                      last:border-0
                      last:pb-0
                    "
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="
                        mt-0.5
                        h-5
                        w-5
                        shrink-0
                        text-accent-300
                      "
                      strokeWidth={1.8}
                    />

                    <span>
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
                          leading-relaxed
                          text-white/65
                        "
                      >
                        {item.label}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </header>
  );
}