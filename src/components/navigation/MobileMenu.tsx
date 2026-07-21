"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { primaryNavigation } from "@/config/navigation";
import { getDirection } from "@/i18n/direction";
import type { Locale } from "@/i18n/routing";
import { IconButton } from "@/components/ui/IconButton";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";
import { siteConfig } from "@/config/site";
import {
  popularSubjects,
  advancedSubjects,
  services,
  featuredLocations,
} from "@/config/mega-menu";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const socialLinks = [
  { key: "facebook", href: siteConfig.social.facebook, icon: Facebook },
  { key: "instagram", href: siteConfig.social.instagram, icon: Instagram },
  { key: "linkedin", href: siteConfig.social.linkedin, icon: Linkedin },
  { key: "twitter", href: siteConfig.social.twitter, icon: Twitter },
];

/**
 * Per docs/24 - Navigation & Mega Menu Specification.md — Mobile
 * Navigation: "Slide Drawer" with "Logo, Search, Navigation, Expandable
 * Sections, Language Switcher, CTA, Social Links", and the exact
 * "Mobile Navigation Structure" (Subjects/Services/Locations expand to
 * their child items inline, matching the desktop mega menus' content).
 * Slides in from the layout-end edge (right in LTR, left in RTL).
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const dir = getDirection(locale);
  const offscreenX = dir === "rtl" ? "-100%" : "100%";
  const [expanded, setExpanded] = useState<string | null>(null);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const expandableSections: Record<
    string,
    { href: string; items: { slug: string; label: string }[] }
  > = {
    subjects: {
      href: ROUTES.subjects,
      items: [...popularSubjects, ...advancedSubjects].map((s) => ({
        slug: s.slug,
        label: t(`megaMenu.subjects.${s.nameKey}`),
      })),
    },
    services: {
      href: ROUTES.services,
      items: services.map((s) => ({
        slug: s.slug,
        label: t(`megaMenu.services.${s.nameKey}`),
      })),
    },
    locations: {
      href: ROUTES.locations,
      items: featuredLocations.map((l) => ({
        slug: l.slug,
        label: t(`megaMenu.locations.${l.nameKey}`),
      })),
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: offscreenX }}
            animate={{ x: 0 }}
            exit={{ x: offscreenX }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-surface fixed inset-y-0 end-0 z-50 flex w-full max-w-sm flex-col gap-6 overflow-y-auto p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <IconButton
                icon={<X className="size-5" aria-hidden="true" />}
                aria-label="Close menu"
                onClick={onClose}
              />
            </div>

            <nav aria-label="Mobile primary" className="flex flex-col gap-1">
              {primaryNavigation.map((item) => {
                const section = item.megaMenu ? expandableSections[item.megaMenu] : null;
                const isExpanded = expanded === item.megaMenu;

                if (section) {
                  return (
                    <div key={item.href}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={cn(
                            "flex-1 rounded-md px-3 py-3 text-base font-medium transition-colors duration-200",
                            isActive(item.href)
                              ? "text-primary"
                              : "text-foreground hover:bg-background",
                          )}
                        >
                          {t(item.labelKey)}
                        </Link>
                        <IconButton
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${t(item.labelKey)}`}
                          aria-expanded={isExpanded}
                          size="sm"
                          onClick={() =>
                            setExpanded(isExpanded ? null : (item.megaMenu ?? null))
                          }
                          icon={
                            <ChevronDown
                              className={cn(
                                "size-4 transition-transform duration-200",
                                isExpanded && "rotate-180",
                              )}
                              aria-hidden="true"
                            />
                          }
                        />
                      </div>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ps-3"
                          >
                            {section.items.map((child) => (
                              <Link
                                key={child.slug}
                                href={`${section.href}/${child.slug}`}
                                onClick={onClose}
                                className="text-muted-foreground hover:text-primary block rounded-md px-3 py-2 text-sm transition-colors duration-200"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors duration-200",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground hover:bg-background",
                    )}
                  >
                    {t(item.labelKey)}
                  </Link>
                );
              })}
            </nav>

            <div className="border-border mt-auto flex flex-col gap-4 border-t pt-6">
              <div className="flex flex-col gap-3">
                <Button
                  href={ROUTES.becomeTutor}
                  variant="outline"
                  onClick={onClose}
                  className="w-full"
                >
                  {t("navigation.becomeTutor")}
                </Button>
                <Button href={ROUTES.contact} onClick={onClose} className="w-full">
                  {t("common.contactUs")}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3">
                {socialLinks.map(({ key, href, icon: Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="bg-muted text-muted-foreground hover:text-primary inline-flex size-9 items-center justify-center rounded-full transition-colors duration-200"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
