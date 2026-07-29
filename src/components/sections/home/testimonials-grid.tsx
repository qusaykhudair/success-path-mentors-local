'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Image from 'next/image';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  Quote,
  Star,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image?: string;
}

interface TestimonialsGridProps {
  items: Testimonial[];

  labels: {
    carousel: string;
    feedback: string;
    rating: string;
    previous: string;
    next: string;
    view: string;
  };
}

const AUTOPLAY_DELAY = 7000;
const PREVIEW_COUNT = 3;

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function formatNumber(value: number): string {
  return String(value).padStart(2, '0');
}

function Rating({
  value,
  labelTemplate,
  inverse = false,
}: {
  value: number;
  labelTemplate: string;
  inverse?: boolean;
}) {
  const rating = Math.max(
    0,
    Math.min(5, Math.round(value))
  );

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={labelTemplate.replace(
        '{rating}',
        String(rating)
      )}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          strokeWidth={1.4}
          className={cn(
            'h-4 w-4',

            index < rating
              ? 'fill-warning-500 text-warning-500'
              : inverse
                ? 'fill-white/20 text-white/20'
                : 'fill-neutral-200 text-neutral-200'
          )}
        />
      ))}
    </div>
  );
}

function Person({
  item,
  inverse = false,
}: {
  item: Testimonial;
  inverse?: boolean;
}) {
  return (
    <figcaption
      className={cn(
        `
          flex
          items-center
          gap-3
          border-t
          pt-5
        `,
        inverse
          ? 'border-white/15'
          : 'border-border'
      )}
    >
      {item.image ? (
        <span
          className="
            relative
            h-12
            w-12
            shrink-0
            overflow-hidden
            rounded-full
            border-2
            border-accent-200
            bg-muted
          "
        >
          <Image
            src={item.image}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            `
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              text-small
              font-bold
            `,
            inverse
              ? 'bg-white/10 text-white'
              : `
                  bg-gradient-to-br
                  from-accent-100
                  to-primary-100
                  text-primary-900
                `
          )}
        >
          {getInitials(item.name)}
        </span>
      )}

      <div className="min-w-0">
        <p
          className={cn(
            'truncate text-small font-bold',
            inverse ? 'text-white' : 'text-foreground'
          )}
        >
          {item.name}
        </p>

        <p
          className={cn(
            'mt-0.5 truncate text-caption',
            inverse
              ? 'text-white/60'
              : 'text-muted-foreground'
          )}
        >
          {item.role}
        </p>
      </div>
    </figcaption>
  );
}

function PreviewCard({
  item,
  active,
  onSelect,
  labels,
  index,
}: {
  item: Testimonial;
  active: boolean;
  onSelect: () => void;
  labels: TestimonialsGridProps['labels'];
  index: number;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? 'true' : undefined}
      aria-label={`${labels.view} ${index + 1}`}
      className={cn(
        `
          group
          relative
          w-full
          overflow-hidden
          rounded-card
          border
          bg-card
          p-5
          text-start
          text-card-foreground
          shadow-card
          transition-[transform,border-color,box-shadow,background-color]
          duration-300
          hover:-translate-y-1
          hover:border-accent-300
          hover:shadow-card-hover
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          motion-reduce:transition-none
          motion-reduce:hover:translate-y-0
        `,
        active
          ? 'border-accent-400 bg-accent-50/70'
          : 'border-border'
      )}
    >
      <Quote
        aria-hidden="true"
        strokeWidth={0}
        className="
          pointer-events-none
          absolute
          -end-2
          -top-2
          h-16
          w-16
          rotate-180
          fill-accent-100/70
          text-accent-100/70
          rtl:-scale-x-100
        "
      />

      <div
        className="
          relative
          flex
          items-center
          justify-between
          gap-3
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-1.5
            text-caption
            font-bold
            text-accent-700
          "
        >
          <MessageSquareQuote
            className="h-4 w-4"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          {labels.feedback}
        </span>

        <Rating
          value={item.rating}
          labelTemplate={labels.rating}
        />
      </div>

      <p
        className="
          relative
          mt-4
          line-clamp-3
          text-small
          leading-relaxed
          text-foreground
        "
      >
        “{item.quote}”
      </p>

      <div className="relative mt-5">
        <Person item={item} />
      </div>

      <span
        aria-hidden="true"
        className={cn(
          `
            absolute
            bottom-0
            start-0
            h-1
            rounded-e-full
            bg-gradient-to-r
            from-accent
            to-primary-500
            transition-[width,opacity]
            duration-300
            rtl:bg-gradient-to-l
          `,
          active
            ? 'w-24 opacity-100'
            : 'w-0 opacity-0'
        )}
      />
    </button>
  );
}

export function TestimonialsGrid({
  items,
  labels,
}: TestimonialsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemCount = items.length;
  const activeItem = items[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      if (itemCount === 0) {
        return;
      }

      setActiveIndex(
        ((index % itemCount) + itemCount) % itemCount
      );
    },
    [itemCount]
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrevious = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (
      paused ||
      shouldReduceMotion ||
      itemCount <= 1
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % itemCount
      );
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    itemCount,
    paused,
    shouldReduceMotion,
  ]);

  const previewIndices = useMemo(() => {
    if (itemCount <= 1) {
      return [];
    }

    const count = Math.min(
      PREVIEW_COUNT,
      itemCount - 1
    );

    return Array.from(
      { length: count },
      (_, offset) =>
        (activeIndex + offset + 1) % itemCount
    );
  }, [activeIndex, itemCount]);

  if (!activeItem) {
    return null;
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setPaused(false);
        }
      }}
      className="
        grid
        items-stretch
        gap-5
        lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]
        lg:gap-6
      "
    >
      {/* Main animated testimonial */}
      <div
        className="
          relative
          min-h-[500px]
          overflow-hidden
          rounded-[1.75rem]
          border
          border-primary-800/30
          bg-brand-dark
          text-white
          shadow-xl
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -end-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-accent/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-28
            -start-20
            h-64
            w-64
            rounded-full
            bg-primary-400/20
            blur-3xl
          "
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={activeIndex}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 18,
                    scale: 0.985,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: -12,
                    scale: 0.99,
                  }
            }
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[500px]
              h-full
              flex-col
              p-7
              sm:p-9
              lg:p-10
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
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-3
                  py-1.5
                  text-caption
                  font-bold
                  text-accent-200
                "
              >
                <MessageSquareQuote
                  className="h-4 w-4"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                {labels.feedback}
              </span>

              <Rating
                value={activeItem.rating}
                labelTemplate={labels.rating}
                inverse
              />
            </div>

            <Quote
              aria-hidden="true"
              strokeWidth={0}
              className="
                mt-10
                h-12
                w-12
                fill-accent-300
                text-accent-300
              "
            />

            <blockquote
              className="
                mt-7
                flex
                flex-1
                items-center
              "
            >
              <p
                className="
                  max-w-3xl
                  text-h3
                  font-bold
                  leading-relaxed
                  text-white
                  sm:text-h2
                "
              >
                “{activeItem.quote}”
              </p>
            </blockquote>

            <div className="mt-10">
              <Person item={activeItem} inverse />
            </div>
          </motion.figure>
        </AnimatePresence>

        {/* Controls */}
        <div
          className="
            absolute
            bottom-6
            end-6
            z-10
            flex
            items-center
            gap-2
          "
        >
          <button
            type="button"
            onClick={goPrevious}
            aria-label={labels.previous}
            className="
              inline-flex
              min-h-touch
              min-w-touch
              items-center
              justify-center
              rounded-button
              border
              border-white/15
              bg-white/5
              text-white
              backdrop-blur-md
              transition-colors
              duration-200
              hover:bg-white/15
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent-300
            "
          >
            <ChevronLeft
              className="
                h-5
                w-5
                rtl:-scale-x-100
              "
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label={labels.next}
            className="
              inline-flex
              min-h-touch
              min-w-touch
              items-center
              justify-center
              rounded-button
              border
              border-white/15
              bg-white/5
              text-white
              backdrop-blur-md
              transition-colors
              duration-200
              hover:bg-white/15
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent-300
            "
          >
            <ChevronRight
              className="
                h-5
                w-5
                rtl:-scale-x-100
              "
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          className="
            absolute
            bottom-7
            start-7
            z-10
            text-caption
            font-bold
            text-white/55
          "
          aria-hidden="true"
        >
          {formatNumber(activeIndex + 1)}
          <span className="mx-1.5 text-white/25">
            /
          </span>
          {formatNumber(itemCount)}
        </div>
      </div>

      {/* Three clickable previews */}
      <div className="grid gap-4">
        {previewIndices.map((index) => {
          const item = items[index];

          if (!item) {
            return null;
          }

          return (
            <PreviewCard
              key={`${item.name}-${index}`}
              item={item}
              index={index}
              active={index === activeIndex}
              onSelect={() => goTo(index)}
              labels={labels}
            />
          );
        })}
      </div>

      {/* Navigation dots for all 8 testimonials */}
      {itemCount > 1 && (
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            lg:col-span-2
            lg:mt-2
          "
        >
          {items.map((item, index) => (
            <button
              key={`${item.name}-dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${labels.view} ${index + 1}`}
              aria-current={
                index === activeIndex
                  ? 'true'
                  : undefined
              }
              className={cn(
                `
                  h-2.5
                  rounded-full
                  transition-[width,background-color,transform]
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  focus-visible:ring-offset-2
                  motion-reduce:transition-none
                `,
                index === activeIndex
                  ? 'w-8 bg-accent'
                  : `
                      w-2.5
                      bg-primary-200
                      hover:scale-110
                      hover:bg-accent-300
                    `
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}