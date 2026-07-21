"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Search as SearchIcon, X } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { IconButton } from "@/components/ui/IconButton";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/cn";
import { primaryNavigation } from "@/config/navigation";
import {
  popularSubjects,
  advancedSubjects,
  services,
  featuredLocations,
} from "@/config/mega-menu";
import { ROUTES } from "@/constants/routes";

type SearchResult = { label: string; href: string; category: string };

/**
 * Per docs/24 - Navigation & Mega Menu Specification.md — Search:
 * "Search should be available globally", with instant search,
 * suggestions, keyboard navigation, and a no-results state.
 *
 * Indexes real, existing site structure (primary nav + mega menu
 * items) rather than a fabricated content index — most subject/
 * service/location detail pages don't exist yet, so search only
 * surfaces destinations that are genuinely part of the site's
 * navigation today. "Recent searches" and full content indexing
 * (articles, FAQs, tutors) are explicitly marked "Future" in the spec.
 */
export function Search() {
  const t = useTranslations();
  const tNav = useTranslations("navigation");
  const tSearch = useTranslations("search");
  const locale = useLocale();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo<SearchResult[]>(() => {
    const pages: SearchResult[] = primaryNavigation.map((item) => ({
      label: tNav(item.labelKey.replace("navigation.", "")),
      href: item.href,
      category: tSearch("categories.pages"),
    }));
    const subjects: SearchResult[] = [...popularSubjects, ...advancedSubjects].map(
      (s) => ({
        label: t(`megaMenu.subjects.${s.nameKey}`),
        href: `${ROUTES.subjects}/${s.slug}`,
        category: tSearch("categories.subjects"),
      }),
    );
    const servicesList: SearchResult[] = services.map((s) => ({
      label: t(`megaMenu.services.${s.nameKey}`),
      href: `${ROUTES.services}/${s.slug}`,
      category: tSearch("categories.services"),
    }));
    const locations: SearchResult[] = featuredLocations.map((l) => ({
      label: t(`megaMenu.locations.${l.nameKey}`),
      href: `${ROUTES.locations}/${l.slug}`,
      category: tSearch("categories.locations"),
    }));
    return [...pages, ...subjects, ...servicesList, ...locations];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query, index]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (!open && event.key === "/" && document.activeElement?.tagName !== "INPUT") {
        event.preventDefault();
        setOpen(true);
      } else if (open && event.key === "Escape") {
        setOpen(false);
      } else if (open && event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (open && event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (open && event.key === "Enter" && results[activeIndex]) {
        navigateTo(results[activeIndex].href);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, results, activeIndex]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function navigateTo(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <IconButton
        icon={<SearchIcon className="size-5" aria-hidden="true" />}
        aria-label={tSearch("trigger")}
        onClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={tSearch("trigger")}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-surface rounded-card fixed inset-x-4 top-20 z-50 mx-auto max-w-xl overflow-hidden shadow-lg sm:inset-x-0 sm:top-24"
            >
              <div className="border-border flex items-center gap-2 border-b p-3">
                <SearchIcon
                  className="text-muted-foreground ms-1 size-4 shrink-0"
                  aria-hidden="true"
                />
                <Input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={tSearch("placeholder")}
                  aria-label={tSearch("placeholder")}
                  aria-activedescendant={
                    results[activeIndex] ? `search-result-${activeIndex}` : undefined
                  }
                  role="combobox"
                  aria-expanded={results.length > 0}
                  aria-controls="search-results-list"
                  autoComplete="off"
                  className="border-0 focus:ring-0"
                />
                <IconButton
                  icon={<X className="size-4" aria-hidden="true" />}
                  aria-label={t("common.back")}
                  size="sm"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {query.trim() === "" && (
                  <p className="text-muted-foreground px-3 py-6 text-center text-sm">
                    {tSearch("startTyping")}
                  </p>
                )}
                {query.trim() !== "" && results.length === 0 && (
                  <p className="text-muted-foreground px-3 py-6 text-center text-sm">
                    {tSearch("noResults")}
                  </p>
                )}
                {results.length > 0 && (
                  <ul id="search-results-list" role="listbox">
                    {results.map((result, index) => (
                      <li
                        key={result.href + result.label}
                        role="option"
                        aria-selected={index === activeIndex}
                      >
                        <button
                          id={`search-result-${index}`}
                          type="button"
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => navigateTo(result.href)}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-start text-sm transition-colors duration-150",
                            index === activeIndex
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground",
                          )}
                        >
                          <span>{result.label}</span>
                          <span
                            className={cn(
                              "text-xs",
                              index === activeIndex
                                ? "text-white/70"
                                : "text-muted-foreground",
                            )}
                          >
                            {result.category}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
