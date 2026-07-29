// Client Component

'use client';

import {
  type KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import {
  ChevronDown,
  MessageCircleQuestion,
} from 'lucide-react';

import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({
  items,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const baseId = useId();

  const buttonRefs = useRef<
    Array<HTMLButtonElement | null>
  >([]);

  useEffect(() => {
    if (
      openIndex !== null &&
      openIndex >= items.length
    ) {
      setOpenIndex(
        items.length > 0 ? 0 : null
      );
    }
  }, [items.length, openIndex]);

  function toggleItem(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  function focusQuestion(index: number) {
    const normalizedIndex =
      (index + items.length) %
      items.length;

    buttonRefs.current[
      normalizedIndex
    ]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusQuestion(index + 1);
        break;

      case 'ArrowUp':
        event.preventDefault();
        focusQuestion(index - 1);
        break;

      case 'Home':
        event.preventDefault();
        focusQuestion(0);
        break;

      case 'End':
        event.preventDefault();
        focusQuestion(items.length - 1);
        break;

      default:
        break;
    }
  }

  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div
        className="
          flex
          min-h-64
          flex-col
          items-center
          justify-center
          gap-3
          rounded-card
          border
          border-dashed
          border-border
          bg-card
          px-6
          py-14
          text-center
        "
      >
        <MessageCircleQuestion
          className="
            h-9
            w-9
            text-muted-foreground
          "
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-3
        sm:gap-4
      "
    >
      {items.map((item, index) => {
        const isOpen =
          openIndex === index;

        const buttonId =
          `${baseId}-question-${index}`;

        const panelId =
          `${baseId}-answer-${index}`;

        return (
          <article
            key={`${item.question}-${index}`}
            className={cn(
              `
                group
                relative
                overflow-hidden
                rounded-card
                border
                bg-card
                text-card-foreground
                shadow-card
                transition-[border-color,box-shadow,transform]
                duration-300
                motion-reduce:transition-none
              `,
              isOpen
                ? `
                    border-accent-300
                    shadow-card-hover
                  `
                : `
                    border-border
                    hover:-translate-y-0.5
                    hover:border-accent-200
                    hover:shadow-card-hover
                    motion-reduce:hover:translate-y-0
                  `
            )}
          >
            <h3>
              <button
                ref={(element) => {
                  buttonRefs.current[index] =
                    element;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  toggleItem(index)
                }
                onKeyDown={(event) =>
                  handleKeyDown(
                    event,
                    index
                  )
                }
                className="
                  relative
                  flex
                  min-h-touch
                  w-full
                  items-center
                  gap-4
                  px-5
                  py-5
                  text-start
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-ring
                  sm:px-6
                  sm:py-6
                "
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    `
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      text-caption
                      font-black
                      transition-[background-color,color,transform]
                      duration-300
                      motion-reduce:transition-none
                    `,
                    isOpen
                      ? `
                          bg-accent
                          text-accent-foreground
                        `
                      : `
                          bg-accent-50
                          text-accent-700
                          group-hover:bg-accent-100
                        `
                  )}
                >
                  {String(index + 1).padStart(
                    2,
                    '0'
                  )}
                </span>

                <span
                  className={cn(
                    `
                      min-w-0
                      flex-1
                      text-small
                      font-bold
                      leading-relaxed
                      transition-colors
                      duration-300
                      sm:text-body
                    `,
                    isOpen
                      ? 'text-primary-900'
                      : `
                          text-foreground
                          group-hover:text-primary-800
                        `
                  )}
                >
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    `
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-[transform,background-color,border-color,color]
                      duration-300
                      motion-reduce:transition-none
                    `,
                    isOpen
                      ? `
                          rotate-180
                          border-accent-200
                          bg-accent-50
                          text-accent-800
                        `
                      : `
                          border-border
                          bg-surface-sunken
                          text-muted-foreground
                          group-hover:border-accent-200
                          group-hover:text-accent-700
                        `
                  )}
                >
                  <ChevronDown
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={cn(
                `
                  grid
                  transition-[grid-template-rows,opacity]
                  duration-300
                  ease-out
                  motion-reduce:transition-none
                `,
                isOpen
                  ? `
                      grid-rows-[1fr]
                      opacity-100
                    `
                  : `
                      grid-rows-[0fr]
                      opacity-0
                    `
              )}
            >
              <div className="overflow-hidden">
                <div
                  className="
                    mx-5
                    border-t
                    border-border
                    pb-6
                    pt-5
                    sm:mx-6
                  "
                >
                  <p
                    className="
                      whitespace-pre-line
                      text-small
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
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
                  transition-[width]
                  duration-500
                  rtl:bg-gradient-to-l
                  motion-reduce:transition-none
                `,
                isOpen
                  ? 'w-24'
                  : 'w-0'
              )}
            />
          </article>
        );
      })}
    </div>
  );
}