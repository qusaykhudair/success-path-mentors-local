// src/components/layout/mobile-nav.tsx

'use client';
import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import {
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { LocaleSwitcher } from './locale-switcher';
import type { SubjectCategory } from './subjects-menu';

interface SectionLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  sectionLinks: SectionLink[];
  homeLabel: string;
  homeHref: string;
  bookLabel: string;
  bookingHref: string;
  subjectsLabel: string;
  subjectCategories: SubjectCategory[];
  openMenuLabel: string;
  closeMenuLabel: string;
}

export function MobileNav({
  sectionLinks,
  homeLabel,
  homeHref,
  bookLabel,
  bookingHref,
  subjectsLabel,
  subjectCategories,
  // openMenuLabel,
  // closeMenuLabel,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const [
    openCategory,
    setOpenCategory,
  ] = useState<string | null>(null);

  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function closeAll({
    restoreFocus = false,
  }: {
    restoreFocus?: boolean;
  } = {}) {
    setOpen(false);
    setOpenCategory(null);

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }
  }

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

   function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault();

    closeAll({
      restoreFocus: true,
    });

    return;
  }

  if (
    event.key !== 'Tab' ||
    !panelRef.current
  ) {
    return;
  }

  const focusableElements =
    panelRef.current.querySelectorAll<HTMLElement>(
      [
        'a[href]',
        'button:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(',')
    );

  if (focusableElements.length === 0) {
    return;
  }

  const firstElement = focusableElements.item(0);

  const lastElement = focusableElements.item(
    focusableElements.length - 1
  );

  if (!firstElement || !lastElement) {
    return;
  }

  if (
    event.shiftKey &&
    document.activeElement === firstElement
  ) {
    event.preventDefault();
    lastElement.focus();
  } else if (
    !event.shiftKey &&
    document.activeElement === lastElement
  ) {
    event.preventDefault();
    firstElement.focus();
  }
}

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    window.requestAnimationFrame(() => {
      const firstFocusable =
        panelRef.current?.querySelector<HTMLElement>(
          'a[href], button:not([disabled])'
        );

      firstFocusable?.focus();
    });

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          if (open) {
            closeAll({
              restoreFocus: true,
            });
          } else {
            setOpen(true);
          }
        }}
        aria-expanded={open}
        aria-controls={panelId}
        // aria-label={
        //   open
        //     ? closeMenuLabel
        //     : openMenuLabel
        // }
        className="
          relative
          z-50
          inline-flex
          min-h-touch
          min-w-touch
          items-center
          justify-center
          rounded-button
          text-foreground
          transition-colors
          duration-200
          hover:bg-muted
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
        "
      >
        {open ? (
          <X
            className="h-5 w-5"
            aria-hidden="true"
          />
        ) : (
          <Menu
            className="h-5 w-5"
            aria-hidden="true"
          />
        )}
      </button>

      <div
        aria-hidden="true"
        onClick={() => closeAll()}
        className={cn(
          'fixed',
          'inset-0',
          'z-30',
          'bg-overlay/55',
          'backdrop-blur-sm',
          'transition-opacity',
          'duration-300',
          'motion-reduce:transition-none',

          open
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />

 <div
  ref={panelRef}
  id={panelId}
  role="dialog"
  aria-modal={open ? true : undefined}
  aria-label={subjectsLabel}
  aria-hidden={!open}
  inert={!open}
  className={cn(
    'fixed',
    'inset-x-0',
    'top-16',
    'z-40',
    'max-h-[calc(100dvh-4rem)]',
    'overflow-y-auto',
    'border-t',
    'border-border',
    'bg-background',
    'p-5',
    'shadow-dropdown',
    'transition-[transform,opacity]',
    'duration-300',
    'ease-out',
    'motion-reduce:transition-none',
    'lg:hidden',

    open
      ? 'translate-y-0 opacity-100'
      : 'pointer-events-none -translate-y-2 opacity-0'
  )}
>
        <nav
          aria-label={subjectsLabel}
          className="flex flex-col gap-1"
        >

<a
  href={homeHref}
  onClick={() => closeAll()}
  className="
    flex
    min-h-touch
    items-center
    rounded-button
    px-3
    text-body
    font-bold
    text-foreground
    transition-colors
    duration-200
    hover:bg-muted
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
  "
>
  {homeLabel}
</a>

          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => closeAll()}
              className="
                flex
                min-h-touch
                items-center
                rounded-button
                px-3
                text-body
                font-bold
                text-foreground
                transition-colors
                duration-200
                hover:bg-muted
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
              "
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 border-t border-border pt-3">
            <p
              className="
                px-3
                pb-2
                text-caption
                font-bold
                uppercase
                tracking-wide
                text-muted-foreground
              "
            >
              {subjectsLabel}
            </p>

            {subjectCategories.map((category) => {
              const categoryIsOpen =
                openCategory === category.key;

              const categoryPanelId =
                `${panelId}-${category.key}`;

              return (
                <div key={category.key}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenCategory(
                        categoryIsOpen
                          ? null
                          : category.key
                      );
                    }}
                    aria-expanded={categoryIsOpen}
                    aria-controls={categoryPanelId}
                    className="
                      flex
                      min-h-touch
                      w-full
                      items-center
                      justify-between
                      gap-3
                      rounded-button
                      px-3
                      text-start
                      text-body
                      font-bold
                      text-foreground
                      transition-colors
                      duration-200
                      hover:bg-muted
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-ring
                    "
                  >
                    <span>{category.label}</span>

                    <ChevronDown
                      className={cn(
                        'h-4',
                        'w-4',
                        'shrink-0',
                        'transition-transform',
                        'duration-200',
                        'motion-reduce:transition-none',

                        categoryIsOpen &&
                          'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={categoryPanelId}
                    aria-hidden={!categoryIsOpen}
                    className={cn(
                      'grid',
                      'transition-[grid-template-rows,opacity]',
                      'duration-300',
                      'ease-out',
                      'motion-reduce:transition-none',

                      categoryIsOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <ul className="overflow-hidden ps-3">
                      {category.children.map(
                        (child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              onClick={() =>
                                closeAll()
                              }
                              tabIndex={
                                categoryIsOpen
                                  ? 0
                                  : -1
                              }
                              className="
                                block
                                min-h-touch
                                rounded-button
                                px-3
                                py-2.5
                                text-small
                                text-muted-foreground
                                transition-colors
                                duration-200
                                hover:bg-accent-50
                                hover:text-accent-800
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-ring
                              "
                            >
                              {child.label}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="mt-5 border-t border-border pt-5">
          <div className="mb-4 sm:hidden">
            <LocaleSwitcher />
          </div>

          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => closeAll()}
            className={buttonVariants({
              variant: 'accent',
              size: 'md',
              className: 'w-full',
            })}
          >
            {bookLabel}
          </a>
        </div>
      </div>
    </div>
  );
}