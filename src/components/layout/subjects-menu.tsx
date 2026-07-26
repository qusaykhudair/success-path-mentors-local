'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

export function SubjectsMenu({ triggerLabel, categories }: SubjectsMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setActiveKey(null);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        setActiveKey(null);
      }
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setActiveKey(null);
    }, 160);
  }

  return (
    <div ref={containerRef} className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        className="group inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-body font-medium text-ink-secondary transition-colors duration-200 hover:bg-accent-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
      >
        {triggerLabel}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={2} aria-hidden="true" />
      </button>

      {/* Panel wrapper — NO overflow here, so the flyout can escape sideways */}
      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={`absolute top-full z-50 mt-2 w-64 rounded-2xl border border-primary-100 bg-white p-2 shadow-2xl shadow-primary-900/10 transition-all duration-200 ease-out motion-reduce:transition-none ${open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1.5 opacity-0'}`}
      >
        <ul role="none" className="flex flex-col gap-0.5">
          {categories.map((cat) => {
            const isActive = activeKey === cat.key;
            return (
              <li
                key={cat.key}
                role="none"
                className="relative"
                onMouseEnter={() => setActiveKey(cat.key)}
              >
                <a href={cat.href}
                  role="menuitem"
                  tabIndex={open ? 0 : -1}
                  onFocus={() => setActiveKey(cat.key)}
                  onClick={() => { setOpen(false); setActiveKey(null); }}
                  className={`flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-small font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ${isActive ? 'bg-accent-50 text-accent-700' : 'text-primary hover:bg-primary-50'}`}
                >
                  <span>{cat.label}</span>
                  {cat.children.length > 0 && (
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform duration-150 rtl:-scale-x-100 ${isActive ? 'translate-x-0.5 text-accent-600' : 'text-primary-300'}`} strokeWidth={2} aria-hidden="true" />
                  )}
                </a>

                {/* Flyout — positioned against THIS row (li is relative), so it
                    aligns to the top of the hovered category and opens beside it.
                    A small negative top nudges it to align with the row visually. */}
                {cat.children.length > 0 && isActive && (
                  <div
                    className="absolute -top-2 start-full z-10 ms-3 w-60 rounded-2xl border border-primary-100 bg-white p-2 shadow-2xl shadow-primary-900/10"
                    role="menu"
                    aria-label={cat.label}
                  >
                    <ul role="none" className="flex flex-col gap-0.5">
                      {cat.children.map((child) => (
                        <li key={child.href} role="none">
                          <a href={child.href}
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => { setOpen(false); setActiveKey(null); }}
                            className="block rounded-xl px-3.5 py-2 text-small text-ink-secondary transition-colors duration-150 hover:bg-accent-50 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
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