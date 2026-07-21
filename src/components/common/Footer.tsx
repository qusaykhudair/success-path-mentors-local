import { useTranslations } from "next-intl";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { siteConfig } from "@/config/site";
import { footerLegalNavigation, primaryNavigation } from "@/config/navigation";
import { ROUTES } from "@/constants/routes";
import { subjects } from "@/data/subjects";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const socialLinks = [
  { key: "facebook", href: siteConfig.social.facebook, icon: Facebook },
  { key: "instagram", href: siteConfig.social.instagram, icon: Instagram },
  { key: "linkedin", href: siteConfig.social.linkedin, icon: Linkedin },
  { key: "twitter", href: siteConfig.social.twitter, icon: Twitter },
];

type FooterColumnProps = {
  title: string;
  viewAllHref: string;
  items: { slug: string; label: string }[];
};

/**
 * Renders a link column that lists individual items when the underlying
 * data array has content, and degrades to a single "view all" link when
 * it doesn't — see the same pattern/rationale in MegaMenu.tsx. No item
 * names are fabricated here.
 */
function FooterColumn({ title, viewAllHref, items }: FooterColumnProps) {
  const t = useTranslations("common");

  return (
    <div>
      <h3 className="text-foreground mb-4 text-sm font-semibold">{title}</h3>
      {items.length > 0 ? (
        <ul className="flex flex-col gap-2.5">
          {items.slice(0, 6).map((item) => (
            <li key={item.slug}>
              <Link
                href={`${viewAllHref}/${item.slug}`}
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={viewAllHref}
        className="text-primary mt-2.5 inline-block text-sm font-medium hover:underline"
      >
        {t("viewAll")}
      </Link>
    </div>
  );
}

/**
 * Per docs/25 - Footer Specification.md.
 */
export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <Container className="grid grid-cols-1 gap-y-10 gap-x-6 py-12 sm:grid-cols-2 sm:gap-10 sm:py-16 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/70">{t("companyDescription")}</p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ key, href, icon: Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors duration-200 hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold">{t("quickLinks")}</h3>
          <ul className="flex flex-col gap-2.5">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {tNav(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn
          title={t("subjects")}
          viewAllHref={ROUTES.subjects}
          items={subjects.map((s) => ({ slug: s.slug, label: s.name }))}
        />
        <FooterColumn
          title={t("services")}
          viewAllHref={ROUTES.services}
          items={services.map((s) => ({ slug: s.slug, label: s.name }))}
        />
        <FooterColumn
          title={t("locations")}
          viewAllHref={ROUTES.locations}
          items={locations.map((l) => ({ slug: l.slug, label: l.city }))}
        />

        <div className="sm:col-span-2 lg:col-span-6 lg:border-t lg:border-white/10 lg:pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">{t("newsletterTitle")}</h3>
              <p className="mt-1 max-w-sm text-sm text-white/70">
                {t("newsletterDescription")}
              </p>
            </div>
            <div className="w-full sm:max-w-xs">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/60">{t("copyright", { year })}</p>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4">
              {footerLegalNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-white/60 transition-colors duration-200 hover:text-white"
                >
                  {tNav(item.labelKey)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher tone="inverted" />
          </div>
        </Container>
      </div>
    </footer>
  );
}
