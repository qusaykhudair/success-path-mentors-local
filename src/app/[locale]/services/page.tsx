import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { services } from "@/data/services";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { HomeCta } from "@/features/home/sections/HomeCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage.hero" });
  
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/services",
    locale: locale as Locale,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  return (
    <>
      <Breadcrumb items={[{ label: tNav("services"), href: "/services" }]} locale={locale} />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading 
            title={t("hero.title")} 
            description={t("hero.description")} 
            align="start"
          />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Star;
              
              return (
                <FeatureCard
                  key={service.slug}
                  icon={Icon}
                  title={service.name}
                  description={service.description}
                />
              );
            })}
          </div>
        </Container>
      </section>
      
      <HomeCta />
    </>
  );
}
