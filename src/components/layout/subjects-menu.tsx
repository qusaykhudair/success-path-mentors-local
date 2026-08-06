'use client';

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

import {
  cn,
} from '@/lib/utils';

export interface SubjectChild {
  label: string;
  href: string;
}

export interface SubjectCategory {
  key: string;
  label: string;
  href: string;
  children: SubjectChild[];
}

interface SubjectsMenuProps {
  triggerLabel: string;
  overviewHref: string;
  overviewLabel: string;
  categories: SubjectCategory[];
}

export function SubjectsMenu({
  triggerLabel,
  overviewHref,
  overviewLabel,
  categories,
}: SubjectsMenuProps) {
  const [open, setOpen] =
    useState(false);

  const [
    activeKey,
    setActiveKey,
  ] = useState<string | null>(
    categories[0]?.key ?? null
  );

  const containerRef =
    useRef<HTMLDivElement>(null);

  const triggerRef =
    useRef<HTMLButtonElement>(null);

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const menuId = useId();

  const activeCategory =
    categories.find(
      (category) =>
        category.key === activeKey
    ) ?? categories[0];

  const clearCloseTimer =
    useCallback(() => {
      if (closeTimer.current) {
        clearTimeout(
          closeTimer.current
        );

        closeTimer.current = null;
      }
    }, []);

  const closeMenu =
    useCallback(({
      restoreFocus = false,
    }: {
      restoreFocus?: boolean;
    } = {}) => {
      clearCloseTimer();
      setOpen(false);

      if (restoreFocus) {
        window.requestAnimationFrame(
          () => {
            triggerRef.current?.focus();
          }
        );
      }
    }, [clearCloseTimer]);

  const openMenu =
    useCallback(() => {
      clearCloseTimer();
      setActiveKey(
        (current) =>
          current ??
          categories[0]?.key ??
          null
      );
      setOpen(true);
    }, [
      categories,
      clearCloseTimer,
    ]);

  const scheduleClose =
    useCallback(() => {
      clearCloseTimer();

      closeTimer.current =
        setTimeout(
          () => {
            closeMenu();
          },
          180
        );
    }, [
      clearCloseTimer,
      closeMenu,
    ]);

  useEffect(() => {
    function handlePointerDown(
      event: PointerEvent
    ) {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node
        )
      ) {
        closeMenu();
      }
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key === 'Escape' &&
        open
      ) {
        event.preventDefault();

        closeMenu({
          restoreFocus: true,
        });
      }
    }

    document.addEventListener(
      'pointerdown',
      handlePointerDown
    );

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      clearCloseTimer();

      document.removeEventListener(
        'pointerdown',
        handlePointerDown
      );

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [
    clearCloseTimer,
    closeMenu,
    open,
  ]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          if (open) {
            closeMenu();
          } else {
            openMenu();
          }
        }}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        className="
          group
          inline-flex
          min-h-touch
          items-center
          gap-1.5
          rounded-button
          px-2.5
          text-small
          font-bold
          text-muted-foreground
          transition-colors
          duration-200
          hover:bg-muted
          hover:text-foreground
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
        "
      >
        {triggerLabel}

        <ChevronDown
          aria-hidden="true"
          className={cn(
            'h-4',
            'w-4',
            'transition-transform',
            'duration-200',
            'motion-reduce:transition-none',
            open && 'rotate-180'
          )}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={cn(
          'fixed',
          'left-1/2',
          'top-[5.5rem]',
          'z-[60]',
          'grid',
          'w-[min(58rem,calc(100vw-2rem))]',
          'max-h-[calc(100dvh-6.5rem)]',
          '-translate-x-1/2',
          'grid-cols-[15rem_minmax(0,1fr)]',
          'overflow-hidden',
          'rounded-[1.25rem]',
          'border',
          'border-border',
          'bg-popover',
          'text-popover-foreground',
          'shadow-[0_24px_70px_rgba(7,20,38,0.18)]',
          'transition-[transform,opacity]',
          'duration-200',
          'ease-out',
          'motion-reduce:transition-none',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        )}
      >
        <div
          className="
            overflow-y-auto
            overscroll-contain
            border-e
            border-border
            bg-muted/45
            p-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <a
            href={overviewHref}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() =>
              closeMenu()
            }
            className="
              group
              flex
              min-h-touch
              items-center
              justify-between
              gap-3
              rounded-xl
              bg-primary-900
              px-3.5
              text-small
              font-black
              text-white
              transition-colors
              hover:bg-primary-800
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
            "
          >
            <span>{overviewLabel}</span>

            <ArrowRight
              aria-hidden="true"
              className="
                h-4
                w-4
                shrink-0
                transition-transform
                group-hover:translate-x-0.5
                rtl:-scale-x-100
                rtl:group-hover:-translate-x-0.5
              "
            />
          </a>

          <ul
            role="none"
            className="mt-3 grid gap-1"
          >
            {categories.map(
              (category) => {
                const categoryIsActive =
                  activeCategory?.key ===
                  category.key;

                return (
                  <li
                    key={category.key}
                    role="none"
                    onMouseEnter={() =>
                      setActiveKey(
                        category.key
                      )
                    }
                  >
                    <a
                      href={category.href}
                      role="menuitem"
                      tabIndex={open ? 0 : -1}
                      onFocus={() =>
                        setActiveKey(
                          category.key
                        )
                      }
                      onClick={() =>
                        closeMenu()
                      }
                      className={cn(
                        'flex',
                        'min-h-touch',
                        'items-center',
                        'justify-between',
                        'gap-3',
                        'rounded-xl',
                        'px-3.5',
                        'text-small',
                        'font-bold',
                        'transition-colors',
                        'focus-visible:outline-none',
                        'focus-visible:ring-2',
                        'focus-visible:ring-ring',
                        categoryIsActive
                          ? 'bg-accent-50 text-accent-800 shadow-sm'
                          : 'text-foreground hover:bg-background'
                      )}
                    >
                      <span>
                        {category.label}
                      </span>

                      <ChevronRight
                        aria-hidden="true"
                        className={cn(
                          'h-4',
                          'w-4',
                          'shrink-0',
                          'text-muted-foreground',
                          'rtl:-scale-x-100',
                          categoryIsActive &&
                            'text-accent-700'
                        )}
                      />
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div
          className="
            min-h-0
            overflow-y-auto
            overscroll-contain
            p-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <ul
            role="none"
            className="
              grid
              grid-cols-2
              content-start
              gap-1.5
            "
          >
            {activeCategory?.children.map(
              (child) => (
                <li
                  key={child.href}
                  role="none"
                >
                  <a
                    href={child.href}
                    role="menuitem"
                    tabIndex={open ? 0 : -1}
                    onClick={() =>
                      closeMenu()
                    }
                    className="
                      group
                      flex
                      min-h-touch
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-transparent
                      px-3.5
                      py-2.5
                      text-small
                      font-semibold
                      leading-5
                      text-muted-foreground
                      transition-[background-color,border-color,color]
                      hover:border-accent-100
                      hover:bg-accent-50
                      hover:text-accent-800
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-ring
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-accent-500
                        transition-transform
                        group-hover:scale-125
                      "
                    />

                    <span>
                      {child.label}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
