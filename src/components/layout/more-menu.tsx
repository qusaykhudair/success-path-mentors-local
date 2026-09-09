'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MoreMenuItem {
  label: string;
  href: string;
}

interface MoreMenuProps {
  label: string;
  items: MoreMenuItem[];
}

export function MoreMenu({ label, items }: MoreMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, close]);

  return (
    <div ref={containerRef} className="relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          'inline-flex min-h-touch items-center gap-1 rounded-button px-2.5 py-1.5 text-[0.78rem] font-bold transition-[color,background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          open
            ? 'bg-muted text-foreground'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
        )}
      >
        <span className="whitespace-nowrap">{label}</span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-200 text-muted-foreground',
            open && 'rotate-180 text-foreground'
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute start-0 top-full z-50 mt-1 min-w-[170px] rounded-xl border border-border/80 bg-background/95 p-1.5 shadow-xl backdrop-blur-md transition-all duration-150 animate-in fade-in-0 zoom-in-95"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              role="menuitem"
              className="flex items-center rounded-lg px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
