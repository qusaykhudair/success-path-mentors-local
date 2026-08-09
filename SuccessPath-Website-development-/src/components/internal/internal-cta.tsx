import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import type { PageAction } from '@/types/internal-page';

interface InternalCtaProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: PageAction;
  secondaryAction?: PageAction;
}

function isExternalHref(
  href: string
): boolean {
  return /^(https?:|mailto:|tel:)/i.test(
    href
  );
}

function Action({
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
        whitespace-nowrap
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
        whitespace-nowrap
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
      {primary && (
        <MessageCircle
          aria-hidden="true"
          className="h-5 w-5"
          strokeWidth={1.8}
        />
      )}

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

export function InternalCta({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: InternalCtaProps) {
  return (
    <section
      aria-labelledby="internal-cta-heading"
      className="
        bg-background
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            relative
            isolate
            overflow-hidden
            rounded-[1.75rem]
            border
            border-primary-800/25
            bg-brand-dark
            px-6
            py-8
            text-white
            shadow-xl
            sm:px-8
            sm:py-10
            lg:grid
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:items-center
            lg:gap-12
            lg:px-10
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -end-20
              -top-24
              -z-10
              h-64
              w-64
              rounded-full
              bg-accent/[0.16]
              blur-3xl
            "
          />

          <div className="max-w-3xl">
            {eyebrow && (
              <p
                className="
                  text-caption
                  font-bold
                  uppercase
                  tracking-wider
                  text-accent-200
                "
              >
                {eyebrow}
              </p>
            )}

            <h2
              id="internal-cta-heading"
              className="
                mt-3
                text-h2
                font-black
                leading-tight
                text-white
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-4
                text-body
                leading-8
                text-white/70
              "
            >
              {description}
            </p>
          </div>

          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
              lg:mt-0
            "
          >
            <Action
              action={primaryAction}
              primary
            />

            {secondaryAction && (
              <Action
                action={secondaryAction}
                primary={false}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}