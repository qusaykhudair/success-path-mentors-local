import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { locations } from "@/data/locations";
import { MapPin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  
  if (!location) {
    return {};
  }
  
  return buildMetadata({
    title: `Tutoring in ${location.city}`,
    description: location.description,
    path: `/locations/${slug}`,
    locale: locale as Locale,
  });
}

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <Breadcrumb 
        items={[
          { label: tNav("locations"), href: "/locations" },
          { label: location.city, href: `/locations/${slug}` }
        ]} 
        locale={locale} 
      />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex max-w-4xl flex-col gap-10">
          <div className="flex items-center gap-6">
            <div className="bg-primary/10 text-primary flex size-16 shrink-0 items-center justify-center rounded-xl">
              <MapPin className="size-8" />
            </div>
            <SectionHeading 
              title={`Tutoring in ${location.city}, ${location.region}`} 
              description={location.description} 
              align="start"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
