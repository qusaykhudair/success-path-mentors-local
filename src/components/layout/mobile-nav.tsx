'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ButtonLink } from '@/components/ui/button';
import { LocaleSwitcher } from './locale-switcher';
import type { SubjectCategory } from './subjects-menu';

interface SectionLink {
  href: string;
  label: string;
}

export function MobileNav({
  sectionLinks,
  homeLabel,
  homeHref,
  bookLabel,
  subjectsLabel,
  subjectCategories,
}: {
  sectionLinks: SectionLink[];
  homeLabel: string;
  homeHref: string;
  bookLabel: string;
  subjectsLabel: string;
  subjectCategories: SubjectCategory[];
}) {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [open]);

  function closeAll() {
    setOpen(false);
    setOpenCategory(null);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="relative z-50 rounded-full p-2 text-primary transition-colors duration-200 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
      >
        {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
      </button>

      <div
        aria-hidden="true"
        onClick={closeAll}
        className={`fixed inset-0 z-30 bg-primary-950/30 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      <div
        id="mobile-nav-panel"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full z-40 max-h-[calc(100vh-4rem)] origin-top overflow-y-auto rounded-b-2xl border-t border-primary-100 bg-surface p-6 shadow-xl shadow-primary-900/10 transition-all duration-300 ease-out motion-reduce:transition-none ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {/* Home */}
          <a href={homeHref}
            onClick={closeAll}
            tabIndex={open ? 0 : -1}
            className="rounded-lg px-3 py-2.5 text-body font-medium text-primary transition-colors duration-200 hover:bg-accent-50 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          >
            {homeLabel}
          </a>

          {/* Section anchors */}
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={closeAll}
              tabIndex={open ? 0 : -1}
              className="rounded-lg px-3 py-2.5 text-body font-medium text-primary transition-colors duration-200 hover:bg-accent-50 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
            >
              {link.label}
            </a>
          ))}

          {/* Subjects accordion */}
          <div className="mt-1 border-t border-primary-100 pt-1">
            <p className="px-3 pb-1 pt-2 text-caption font-semibold uppercase tracking-wide text-ink-secondary">
              {subjectsLabel}
            </p>

            {subjectCategories.map((cat) => {
              const isOpen = openCategory === cat.key;
              return (
                <div key={cat.key}>
                  <button
                    type="button"
                    onClick={() => setOpenCategory(isOpen ? null : cat.key)}
                    aria-expanded={isOpen}
                    tabIndex={open ? 0 : -1}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-body font-medium text-primary transition-colors duration-200 hover:bg-accent-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>

                  <div className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <ul className="overflow-hidden ps-3">
                      {cat.children.map((child) => (
                        <li key={child.href}>
                          <a href={child.href}
                            onClick={closeAll}
                            tabIndex={open && isOpen ? 0 : -1}
                            className="block rounded-lg px-3 py-2 text-small text-ink-secondary transition-colors duration-200 hover:bg-accent-50 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="mt-5 flex items-center gap-3 border-t border-primary-100 pt-5">
          <div className="shrink-0">
            <LocaleSwitcher />
          </div>
          <ButtonLink
            href="/contact"
            size="sm"
            tabIndex={open ? 0 : -1}
            onClick={closeAll}
            className="group relative flex-1 overflow-hidden bg-gradient-to-r from-accent-600 to-accent-500 text-center font-semibold shadow-md shadow-accent-600/20 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent-600/35 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden" />
            <span className="relative">{bookLabel}</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}