import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { services } from "@/data/services";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {};
  }
  
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${slug}`,
    locale: locale as Locale,
  });
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Star;

  return (
    <>
      <Breadcrumb 
        items={[
          { label: tNav("services"), href: "/services" },
          { label: service.name, href: `/services/${slug}` }
        ]} 
        locale={locale} 
      />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex max-w-4xl flex-col gap-10">
          <div className="flex items-center gap-6">
            <div className="bg-primary/10 text-primary flex size-16 shrink-0 items-center justify-center rounded-xl">
              <Icon className="size-8" />
            </div>
            <SectionHeading 
              title={service.name} 
              description={service.description} 
              align="start"
            />
          </div>
          
          <div className="mt-8 border-t border-border pt-8">
            <h3 className="text-foreground text-xl font-bold mb-6">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="text-primary size-5 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
