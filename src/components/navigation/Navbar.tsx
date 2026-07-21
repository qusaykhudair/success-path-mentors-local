"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { primaryNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { useScroll } from "@/hooks";
import { cn } from "@/utils/cn";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Search } from "@/components/navigation/Search";

/**
 * Per docs/24 - Navigation & Mega Menu Specification.md — Header
 * Structure: "Logo, Main Navigation, Search, Language Switcher, Primary
 * CTA." Sticky (shadow + solid background on scroll), mega menus for
 * Subjects/Services/Locations, current-page highlighting (Navigation
 * Behavior: "Current Page Highlight ... Active Link State"), a mobile
 * drawer below `lg`.
 */
export function Navbar() {
  const t = useTranslations();
  const { scrolled } = useScroll();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header
      className={cn(
        "bg-surface/95 sticky top-0 z-40 h-(--header-height) border-b backdrop-blur transition-shadow duration-200",
        scrolled ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-4">
        <Link href="/" aria-label="Success Path Mentors — home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNavigation.map((item) =>
            item.megaMenu ? (
              <MegaMenu
                key={item.href}
                item={
                  item as typeof item & { megaMenu: NonNullable<typeof item.megaMenu> }
                }
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                {t(item.labelKey)}
                {isActive(item.href) && (
                  <span className="bg-primary absolute inset-x-0 -bottom-px h-0.5 rounded-full" />
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Search />
          <LanguageSwitcher />
          <Button href={ROUTES.contact} size="sm">
            {t("common.contactUs")}
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Search />
          <IconButton
            icon={<Menu className="size-5" aria-hidden="true" />}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
