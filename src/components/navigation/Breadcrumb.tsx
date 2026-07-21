import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/common/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/shared/seo/json-ld";
import { siteConfig } from "@/config/site";

type BreadcrumbProps = {
  items: { label: string; href: string }[];
  locale: string;
};

/**
 * Per docs/04 - SEO Strategy Specification.md: "Every page except Home
 * must include breadcrumbs" + BreadcrumbList structured data.
 * Emits both the visible nav and its matching JSON-LD in one place so
 * they can never drift out of sync.
 */
export function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const schemaItems: BreadcrumbItem[] = allItems.map((item) => ({
    name: item.label,
    url: `${siteConfig.url}/${locale}${item.href === "/" ? "" : item.href}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="border-border border-b">
        <ol className="text-muted-foreground mx-auto flex max-w-(--container-content) items-center gap-1.5 px-4 py-3 text-sm sm:px-6 lg:px-8">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className="size-3.5 shrink-0 rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-foreground font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
