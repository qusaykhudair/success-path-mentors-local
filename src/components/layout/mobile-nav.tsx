
'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { AppPathname } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { ButtonLink } from '@/components/ui/button';
import { LocaleSwitcher } from './locale-switcher';

interface NavLink {
  href: AppPathname;
  label: string;
}

export function MobileNav({
  links,
  bookLabel,
}: {
  links: readonly NavLink[];
  bookLabel: string;
}) {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the panel is open.
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

      {/* Backdrop — click to close. Always mounted so it can transition,
          pointer-events disabled while closed. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-primary-950/30 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel — anchored with top-full so it always sits exactly under the
          header regardless of the header's own responsive height. */}
      <div
        id="mobile-nav-panel"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full z-40 origin-top rounded-b-2xl border-t border-primary-100 bg-surface p-6 shadow-xl shadow-primary-900/10 transition-all duration-300 ease-out motion-reduce:transition-none ${
          open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="rounded-lg px-3 py-2.5 text-body font-medium text-primary transition-colors duration-200 hover:bg-accent-50 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 flex items-center gap-3 border-t border-primary-100 pt-5">
          <div className="shrink-0">
            <LocaleSwitcher />
          </div>
          <ButtonLink
            href="/contact"
            size="sm"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="group relative flex-1 overflow-hidden bg-gradient-to-r from-accent-600 to-accent-500 text-center font-semibold shadow-md shadow-accent-600/20 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent-600/35 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:transition-none"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
            />
            <span className="relative">{bookLabel}</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}