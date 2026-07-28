// src/components/layout/subjects-menu.tsx

'use client';

import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import {
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

import { cn } from '@/lib/utils';

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
  categories: SubjectCategory[];
}

export function SubjectsMenu({
  triggerLabel,
  categories,
}: SubjectsMenuProps) {
  const [open, setOpen] = useState(false);

  const [
    activeKey,
    setActiveKey,
  ] = useState<string | null>(null);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const triggerRef =
    useRef<HTMLButtonElement>(null);

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const menuId = useId();

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function closeMenu({
    restoreFocus = false,
  }: {
    restoreFocus?: boolean;
  } = {}) {
    clearCloseTimer();
    setOpen(false);
    setActiveKey(null);

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }
  }

  function openMenu() {
    clearCloseTimer();
    setOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      closeMenu();
    }, 180);
  }

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
      if (event.key === 'Escape' && open) {
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
  }, [open]);

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
          px-3
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
          className={cn(
            'h-4',
            'w-4',
            'transition-transform',
            'duration-200',
            'motion-reduce:transition-none',

            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={cn(
          'absolute',
          'top-full',
          'z-50',
          'mt-2',
          'w-64',
          'rounded-card',
          'border',
          'border-border',
          'bg-popover',
          'p-2',
          'text-popover-foreground',
          'shadow-dropdown',
          'transition-[transform,opacity]',
          'duration-200',
          'ease-out',
          'motion-reduce:transition-none',

          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        )}
      >
        <ul
          role="none"
          className="flex flex-col gap-0.5"
        >
          {categories.map((category) => {
            const categoryIsActive =
              activeKey === category.key;

            return (
              <li
                key={category.key}
                role="none"
                className="relative"
                onMouseEnter={() =>
                  setActiveKey(category.key)
                }
              >
                <a
                  href={category.href}
                  role="menuitem"
                  tabIndex={open ? 0 : -1}
                  onFocus={() =>
                    setActiveKey(category.key)
                  }
                  onClick={() => closeMenu()}
                  className={cn(
                    'flex',
                    'min-h-touch',
                    'items-center',
                    'justify-between',
                    'gap-2',
                    'rounded-button',
                    'px-3',
                    'text-small',
                    'font-bold',
                    'transition-colors',
                    'duration-150',
                    'focus-visible:outline-none',
                    'focus-visible:ring-2',
                    'focus-visible:ring-ring',

                    categoryIsActive
                      ? 'bg-accent-50 text-accent-800'
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  <span>{category.label}</span>

                  {category.children.length > 0 && (
                    <ChevronRight
                      className={cn(
                        'h-4',
                        'w-4',
                        'shrink-0',
                        'text-muted-foreground',
                        'transition-transform',
                        'duration-150',
                        'rtl:-scale-x-100',

                        categoryIsActive &&
                          'translate-x-0.5 text-accent-700 rtl:-translate-x-0.5'
                      )}
                      aria-hidden="true"
                    />
                  )}
                </a>

                {category.children.length > 0 &&
                  categoryIsActive && (
                    <div
                      role="menu"
                      aria-label={category.label}
                      className="
                        absolute
                        -top-2
                        start-full
                        z-10
                        ms-3
                        w-64
                        rounded-card
                        border
                        border-border
                        bg-popover
                        p-2
                        text-popover-foreground
                        shadow-dropdown
                      "
                    >
                      <ul
                        role="none"
                        className="flex flex-col gap-0.5"
                      >
                        {category.children.map(
                          (child) => (
                            <li
                              key={child.href}
                              role="none"
                            >
                              <a
                                href={child.href}
                                role="menuitem"
                                onClick={() =>
                                  closeMenu()
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
                                  duration-150
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
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}