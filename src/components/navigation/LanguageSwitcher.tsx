"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/utils/cn";

const localeLabels: Record<string, string> = {
  en: "EN",
  ar: "AR",
};

/**
 * Per docs/24 - Navigation & Mega Menu Specification.md and
 * docs/05 - Internationalization (i18n) Specification.md: swaps locale
 * while preserving the current path (next-intl handles the redirect).
 */
export function LanguageSwitcher({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverted";
}) {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5",
        tone === "inverted" ? "border-white/20" : "border-border",
        className,
      )}
    >
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            aria-pressed={isActive}
            onClick={() => router.replace(pathname, { locale })}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
              tone === "inverted"
                ? isActive
                  ? "text-secondary bg-white"
                  : "text-white/70 hover:text-white focus-visible:outline-white"
                : isActive
                  ? "bg-primary text-primary-foreground focus-visible:outline-primary"
                  : "text-muted-foreground hover:text-foreground focus-visible:outline-primary",
            )}
          >
            {localeLabels[locale] ?? locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
