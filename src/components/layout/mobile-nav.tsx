'use client';
import { getDefaultTelephoneHref } from '@/lib/market-display';

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import {
  ChevronDown,
  Menu,
  X,
  Phone,
} from 'lucide-react';

import {
  buttonVariants,
} from '@/components/ui/button';
import {
  cn,
} from '@/lib/utils';

import type {
  SubjectCategory,
} from './subjects-menu';
import type { LocationNavCountry } from '@/content/locations/location-navigation';

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
  subjectsOverviewHref: string;
  subjectsOverviewLabel: string;
  subjectCategories: SubjectCategory[];
  locationsLabel: string;
  locationsOverviewHref: string;
  locationsOverviewLabel: string;
  locationCountries: LocationNavCountry[];
  locale: 'en' | 'ar';
  openMenuLabel: string;
  closeMenuLabel: string;
  phoneLabel: string;
  phoneNumber: string;
  loginLabel: string;
  loginHref: string;
  registerLabel: string;
  registerHref: string;
}

function getFocusableElements(
  container: HTMLElement
): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      [
        'a[href]',
        'button:not([disabled])',
        '[tabindex]',
      ].join(',')
    )
  ).filter(
    (element) =>
      element.tabIndex >= 0 &&
      !element.hasAttribute(
        'disabled'
      ) &&
      element.getAttribute(
        'aria-hidden'
      ) !== 'true'
  );
}

export function MobileNav({
  sectionLinks,
  homeLabel,
  homeHref,
  bookLabel,
  bookingHref,
  subjectsLabel,
  subjectsOverviewHref,
  subjectsOverviewLabel,
  subjectCategories,
  locationsLabel,
  locationsOverviewHref,
  locationsOverviewLabel,
  locationCountries,
  locale,
  openMenuLabel,
  closeMenuLabel,
  phoneLabel,
  phoneNumber,
  loginLabel,
  loginHref,
  registerLabel,
  registerHref,
}: MobileNavProps) {
  const [open, setOpen] =
    useState(false);

  const [
    openCategory,
    setOpenCategory,
  ] = useState<string | null>(
    null
  );

  const [openLocationCountry, setOpenLocationCountry] = useState<string | null>(null);
  const [openLocationRegion, setOpenLocationRegion] = useState<string | null>(null);

  const panelId = useId();

  const triggerRef =
    useRef<HTMLButtonElement>(
      null
    );

  const panelRef =
    useRef<HTMLDivElement>(
      null
    );

  const closeAll = useCallback(
    ({
      restoreFocus = false,
    }: {
      restoreFocus?: boolean;
    } = {}) => {
      setOpen(false);
      setOpenCategory(null);
      setOpenLocationCountry(null);
      setOpenLocationRegion(null);

      if (restoreFocus) {
        window.requestAnimationFrame(
          () => {
            triggerRef.current?.focus();
          }
        );
      }
    },
    []
  );

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    const focusFrame =
      window.requestAnimationFrame(
        () => {
          const panel =
            panelRef.current;

          if (!panel) {
            return;
          }

          getFocusableElements(
            panel
          )[0]?.focus();
        }
      );

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === 'Escape') {
        event.preventDefault();

        closeAll({
          restoreFocus: true,
        });

        return;
      }

      if (
        event.key !== 'Tab' ||
        !panelRef.current ||
        !triggerRef.current
      ) {
        return;
      }

      const panelElements =
        getFocusableElements(
          panelRef.current
        );

      if (
        panelElements.length === 0
      ) {
        event.preventDefault();
        triggerRef.current.focus();
        return;
      }

      const firstElement =
        panelElements.at(0);

      const lastElement =
        panelElements.at(-1);

      if (
        !firstElement ||
        !lastElement
      ) {
        event.preventDefault();
        triggerRef.current.focus();
        return;
      }

      const activeElement =
        document.activeElement;

      if (event.shiftKey) {
        if (
          activeElement ===
          firstElement
        ) {
          event.preventDefault();
          triggerRef.current.focus();
        } else if (
          activeElement ===
          triggerRef.current
        ) {
          event.preventDefault();
          lastElement.focus();
        }

        return;
      }

      if (
        activeElement ===
        lastElement
      ) {
        event.preventDefault();
        triggerRef.current.focus();
      } else if (
        activeElement ===
        triggerRef.current
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.cancelAnimationFrame(
        focusFrame
      );

      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [closeAll, open]);

  return (
    <div
      className="xl:hidden"
      role={
        open
          ? 'dialog'
          : undefined
      }
      aria-modal={
        open
          ? true
          : undefined
      }
      aria-label={
        open
          ? subjectsLabel
          : undefined
      }
    >
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
        aria-label={
          open
            ? closeMenuLabel
            : openMenuLabel
        }
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
          lg:hidden
        "
      >
        {open ? (
          <X
            aria-hidden="true"
            className="h-5 w-5"
          />
        ) : (
          <Menu
            aria-hidden="true"
            className="h-5 w-5"
          />
        )}
      </button>

      <div
        aria-hidden="true"
        onClick={() =>
          closeAll({
            restoreFocus: true,
          })
        }
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
          className="
            flex
            flex-col
            gap-1
          "
        >
          <a
            href={homeHref}
            onClick={() =>
              closeAll()
            }
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

          <div
            className="
              border-y
              border-border
              py-3
            "
          >

            <a
              href={subjectsOverviewHref}
              onClick={() =>
                closeAll()
              }
              className="
                flex
                min-h-touch
                items-center
                rounded-button
                bg-primary-900
                px-3
                text-body
                font-black
                text-white
                transition-colors
                hover:bg-primary-800
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
              "
            >
              {subjectsOverviewLabel}
            </a>

            <div className="mt-2">
              {subjectCategories.map(
                (category) => {
                  const categoryIsOpen =
                    openCategory ===
                    category.key;

                  const categoryPanelId =
                    `${panelId}-${category.key}`;

                  return (
                    <div
                      key={category.key}
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-1
                        "
                      >
                        <a
                          href={
                            category.href
                          }
                          onClick={() =>
                            closeAll()
                          }
                          className="
                            flex
                            min-h-touch
                            min-w-0
                            flex-1
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
                          {
                            category.label
                          }
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            setOpenCategory(
                              categoryIsOpen
                                ? null
                                : category.key
                            );
                          }}
                          aria-expanded={
                            categoryIsOpen
                          }
                          aria-controls={
                            categoryPanelId
                          }
                          aria-label={
                            category.label
                          }
                          className="
                            inline-flex
                            min-h-touch
                            min-w-touch
                            items-center
                            justify-center
                            rounded-button
                            text-muted-foreground
                            transition-colors
                            hover:bg-muted
                            hover:text-foreground
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-ring
                          "
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              'h-4',
                              'w-4',
                              'transition-transform',
                              'duration-200',
                              'motion-reduce:transition-none',
                              categoryIsOpen &&
                                'rotate-180'
                            )}
                          />
                        </button>
                      </div>

                      <div
                        id={
                          categoryPanelId
                        }
                        aria-hidden={
                          !categoryIsOpen
                        }
                        inert={
                          !categoryIsOpen
                        }
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
                        <ul
                          className="
                            grid
                            overflow-hidden
                            ps-3
                            sm:grid-cols-2
                          "
                        >
                          {category.children.map(
                            (child) => (
                              <li
                                key={
                                  child.href
                                }
                              >
                                <a
                                  href={
                                    child.href
                                  }
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
                                    leading-5
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
                                  {
                                    child.label
                                  }
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="border-b border-border py-3">
            <div className="flex items-center gap-1">
              <a
                href={locationsOverviewHref}
                onClick={() => closeAll()}
                className="flex min-h-touch min-w-0 flex-1 items-center rounded-button bg-primary-900 px-3 text-body font-black text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {locationsOverviewLabel}
              </a>
              <span className="sr-only">{locationsLabel}</span>
            </div>

            <div className="mt-2 grid gap-1">
              {locationCountries.map((country) => {
                const countryOpen = openLocationCountry === country.key;
                const countryPanelId = `${panelId}-location-${country.key}`;
                return (
                  <div key={country.key}>
                    <div className="flex items-center gap-1">
                      <a
                        href={`/${locale}${country.href}`}
                        onClick={() => closeAll()}
                        className="flex min-h-touch min-w-0 flex-1 items-center rounded-button px-3 text-body font-bold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {country.label[locale]}
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenLocationCountry(countryOpen ? null : country.key);
                          setOpenLocationRegion(null);
                        }}
                        aria-expanded={countryOpen}
                        aria-controls={countryPanelId}
                        aria-label={country.label[locale]}
                        className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronDown aria-hidden="true" className={cn('h-4 w-4 transition-transform duration-200', countryOpen && 'rotate-180')} />
                      </button>
                    </div>

                    <div id={countryPanelId} aria-hidden={!countryOpen} inert={!countryOpen} className={cn('grid transition-[grid-template-rows,opacity] duration-300', countryOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                      <div className="overflow-hidden ps-3">
                        {country.regions.map((region) => {
                          const regionId = `${country.key}-${region.key}`;
                          const regionOpen = openLocationRegion === regionId;
                          const regionPanelId = `${panelId}-location-${regionId}`;
                          return (
                            <div key={region.key}>
                              <div className="flex items-center gap-1">
                                <a
                                  href={`/${locale}${region.href}`}
                                  onClick={() => closeAll()}
                                  tabIndex={countryOpen ? 0 : -1}
                                  className="flex min-h-touch min-w-0 flex-1 items-center rounded-button px-3 text-small font-bold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                  {region.label[locale]}
                                </a>
                                <button
                                  type="button"
                                  tabIndex={countryOpen ? 0 : -1}
                                  onClick={() => setOpenLocationRegion(regionOpen ? null : regionId)}
                                  aria-expanded={regionOpen}
                                  aria-controls={regionPanelId}
                                  aria-label={region.label[locale]}
                                  className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                  <ChevronDown aria-hidden="true" className={cn('h-4 w-4 transition-transform duration-200', regionOpen && 'rotate-180')} />
                                </button>
                              </div>

                              <div id={regionPanelId} aria-hidden={!regionOpen} inert={!regionOpen} className={cn('grid transition-[grid-template-rows,opacity] duration-300', regionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                                <ul className="grid overflow-hidden ps-3 sm:grid-cols-2">
                                  <li>
                                    <a href={`/${locale}${region.curriculum.href}`} onClick={() => closeAll()} tabIndex={countryOpen && regionOpen ? 0 : -1} className="block min-h-touch rounded-button px-3 py-2.5 text-small font-bold leading-5 text-accent-800 transition-colors hover:bg-accent-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                      {region.curriculum.label[locale]}
                                    </a>
                                  </li>
                                  {region.cities.map((city) => (
                                    <li key={city.href}>
                                      <a href={`/${locale}${city.href}`} onClick={() => closeAll()} tabIndex={countryOpen && regionOpen ? 0 : -1} className="block min-h-touch rounded-button px-3 py-2.5 text-small leading-5 text-muted-foreground transition-colors hover:bg-accent-50 hover:text-accent-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                        {city.label[locale]}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {sectionLinks.map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() =>
                  closeAll()
                }
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
            )
          )}
        </nav>

        <div
          className="
            mt-5
            border-t
            border-border
            pt-5
          "
        >
          <div className="mb-4 grid grid-cols-2 gap-2">
            <a
              href={loginHref}
              onClick={() => closeAll()}
              className={buttonVariants({
                variant: 'outline',
                size: 'md',
                className: 'w-full',
              })}
            >
              {loginLabel}
            </a>
            <a
              href={registerHref}
              onClick={() => closeAll()}
              className={buttonVariants({
                variant: 'accent',
                size: 'md',
                className: 'w-full',
              })}
            >
              {registerLabel}
            </a>
          </div>

          <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
            <a
              href={getDefaultTelephoneHref()}
              onClick={() => closeAll()}
              aria-label={`${phoneLabel} ${phoneNumber}`}
              className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button border border-border bg-background text-accent transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href={getDefaultTelephoneHref()}
              onClick={() => closeAll()}
              className="flex min-h-touch flex-col items-start justify-center rounded-button border border-border bg-background px-3 text-start transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-xs font-semibold text-muted-foreground">{phoneLabel}</span>
              <span dir="ltr" className="text-sm font-black text-foreground">{phoneNumber}</span>
            </a>
          </div>

          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              closeAll()
            }
            className={
              buttonVariants({
                variant: 'accent',
                size: 'md',
                className:
                  'w-full',
              })
            }
          >
            {bookLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
