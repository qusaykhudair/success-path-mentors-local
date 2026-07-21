/**
 * Primary navigation structure.
 * Per docs/24 - Navigation & Mega Menu Specification.md.
 *
 * Labels are translation keys (namespace: "navigation"), resolved at
 * render time via next-intl — never hardcode display text here.
 */
export type NavItem = {
  labelKey: string;
  href: string;
  megaMenu?: "subjects" | "services" | "locations";
};

export const primaryNavigation: NavItem[] = [
  { labelKey: "navigation.home", href: "/" },
  { labelKey: "navigation.about", href: "/about" },
  { labelKey: "navigation.subjects", href: "/subjects", megaMenu: "subjects" },
  { labelKey: "navigation.services", href: "/services", megaMenu: "services" },
  { labelKey: "navigation.locations", href: "/locations", megaMenu: "locations" },
  { labelKey: "navigation.blog", href: "/blog" },
  { labelKey: "navigation.becomeTutor", href: "/become-tutor" },
  { labelKey: "navigation.faq", href: "/faq" },
  { labelKey: "navigation.contact", href: "/contact" },
];

export const footerLegalNavigation: NavItem[] = [
  { labelKey: "navigation.privacy", href: "/privacy" },
  { labelKey: "navigation.terms", href: "/terms" },
];
