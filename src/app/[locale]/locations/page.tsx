import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { locations } from "@/data/locations";
import { MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { HomeCta } from "@/features/home/sections/HomeCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "locationsPage.hero" });
  
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/locations",
    locale: locale as Locale,
  });
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "locationsPage" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  return (
    <>
      <Breadcrumb items={[{ label: tNav("locations"), href: "/locations" }]} locale={locale} />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading 
            title={t("hero.title")} 
            description={t("hero.description")} 
            align="start"
          />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <FeatureCard
                key={location.slug}
                icon={MapPin}
                title={location.city}
                description={location.description}
              />
            ))}
          </div>
        </Container>
      </section>
      
      <HomeCta />
    </>
  );
}
