import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";

import { HeroSection } from "@/features/home/sections/HeroSection";
import { HomeStats } from "@/features/home/sections/HomeStats";
import { SubjectsOverview } from "@/features/home/sections/SubjectsOverview";
import { ServicesOverview } from "@/features/home/sections/ServicesOverview";
import { WhyChooseUs } from "@/features/about/sections/WhyChooseUs";
import { TestimonialsCarousel } from "@/features/home/sections/TestimonialsCarousel";
import { HomeCta } from "@/features/home/sections/HomeCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  
  return buildMetadata({
    title: t("defaultTitle"),
    description: t("defaultDescription"),
    path: "/",
    locale: locale as Locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <HeroSection />
      <HomeStats />
      <SubjectsOverview />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <HomeCta />
    </>
  );
}
