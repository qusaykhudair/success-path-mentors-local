"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, BookOpen, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import {
  popularSubjects,
  advancedSubjects,
  popularResources,
  services,
  featuredLocations,
} from "@/config/mega-menu";
import { ROUTES } from "@/constants/routes";
import type { NavItem } from "@/config/navigation";

type MegaMenuProps = {
  item: NavItem & { megaMenu: NonNullable<NavItem["megaMenu"]> };
};

/**
 * Per docs/24 - Navigation & Mega Menu Specification.md — the three
 * mega menus have genuinely different layouts (Subjects: 4 columns;
 * Services: single list + CTA; Locations: featured grid + footer
 * link), so this renders per `item.megaMenu` type rather than forcing
 * one generic shape. The interactive shell (open state, outside click,
 * Escape, hover) is shared.
 */
export function MegaMenu({ item }: MegaMenuProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const panelWidth =
    item.megaMenu === "subjects"
      ? "w-[640px]"
      : item.megaMenu === "locations"
        ? "w-96"
        : "w-72";

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="text-foreground hover:text-primary focus-visible:outline-primary inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {t(item.labelKey)}
        <ChevronDown
          aria-hidden="true"
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "border-border bg-surface rounded-card absolute start-0 top-full z-40 mt-2 border p-6 shadow-lg",
              panelWidth,
            )}
          >
            {item.megaMenu === "subjects" && (
              <div className="grid grid-cols-4 gap-6">
                <MegaMenuColumn heading={t("megaMenu.columnHeadings.popularSubjects")}>
                  {popularSubjects.map((s) => (
                    <MegaMenuLinkItem
                      key={s.slug}
                      href={`${ROUTES.subjects}/${s.slug}`}
                      onNavigate={() => setOpen(false)}
                    >
                      {t(`megaMenu.subjects.${s.nameKey}`)}
                    </MegaMenuLinkItem>
                  ))}
                </MegaMenuColumn>
                <MegaMenuColumn heading={t("megaMenu.columnHeadings.advancedSubjects")}>
                  {advancedSubjects.map((s) => (
                    <MegaMenuLinkItem
                      key={s.slug}
                      href={`${ROUTES.subjects}/${s.slug}`}
                      onNavigate={() => setOpen(false)}
                    >
                      {t(`megaMenu.subjects.${s.nameKey}`)}
                    </MegaMenuLinkItem>
                  ))}
                </MegaMenuColumn>
                <MegaMenuColumn heading={t("megaMenu.columnHeadings.popularResources")}>
                  {popularResources.map((r) => (
                    <MegaMenuLinkItem
                      key={r.nameKey}
                      href={r.href}
                      onNavigate={() => setOpen(false)}
                    >
                      {t(`megaMenu.resources.${r.nameKey}`)}
                    </MegaMenuLinkItem>
                  ))}
                </MegaMenuColumn>
                <div className="bg-primary/5 rounded-card flex flex-col gap-3 p-4">
                  <BookOpen className="text-primary size-6" aria-hidden="true" />
                  <p className="text-foreground text-sm font-semibold">
                    {t("megaMenu.columnHeadings.featuredCta")}
                  </p>
                  <Button href={ROUTES.contact} size="sm" onClick={() => setOpen(false)}>
                    {t("megaMenu.cta.bookATutor")}
                  </Button>
                  <Link
                    href={ROUTES.subjects}
                    onClick={() => setOpen(false)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    {t("megaMenu.cta.browseAllSubjects")}
                  </Link>
                </div>
              </div>
            )}

            {item.megaMenu === "services" && (
              <div className="flex flex-col gap-4">
                <ul className="grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <MegaMenuLinkItem
                        href={`${ROUTES.services}/${s.slug}`}
                        onNavigate={() => setOpen(false)}
                      >
                        {t(`megaMenu.services.${s.nameKey}`)}
                      </MegaMenuLinkItem>
                    </li>
                  ))}
                </ul>
                <div className="border-border border-t pt-4">
                  <Button
                    href={ROUTES.contact}
                    size="sm"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    {t("megaMenu.cta.bookConsultation")}
                  </Button>
                </div>
              </div>
            )}

            {item.megaMenu === "locations" && (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-1">
                  {featuredLocations.map((l) => (
                    <MegaMenuLinkItem
                      key={l.slug}
                      href={`${ROUTES.locations}/${l.slug}`}
                      onNavigate={() => setOpen(false)}
                      icon={
                        <MapPin
                          className="text-muted-foreground size-3.5"
                          aria-hidden="true"
                        />
                      }
                    >
                      {t(`megaMenu.locations.${l.nameKey}`)}
                    </MegaMenuLinkItem>
                  ))}
                </div>
                <Link
                  href={ROUTES.locations}
                  onClick={() => setOpen(false)}
                  className="border-border text-primary border-t pt-4 text-sm font-medium hover:underline"
                >
                  {t("megaMenu.cta.viewAllLocations")} →
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MegaMenuColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wide uppercase">
        {heading}
      </p>
      {children}
    </div>
  );
}

function MegaMenuLinkItem({
  href,
  onNavigate,
  icon,
  children,
}: {
  href: string;
  onNavigate: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="text-foreground hover:text-primary hover:bg-muted flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors duration-200"
    >
      {icon}
      {children}
    </Link>
  );
}
