import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContentPending } from "@/components/feedback/ContentPending";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogPage.hero" });
  
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/blog",
    locale: locale as Locale,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "blogPage" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  return (
    <>
      <Breadcrumb items={[{ label: tNav("blog"), href: "/blog" }]} locale={locale} />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading 
            title={t("hero.title")} 
            description={t("hero.description")} 
          />
          
          <ContentPending message={t("comingSoon")} />
        </Container>
      </section>
    </>
  );
}
