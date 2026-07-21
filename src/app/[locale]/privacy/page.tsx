import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/privacy",
    locale: locale as Locale,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "privacy" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  return (
    <>
      <Breadcrumb items={[{ label: tNav("privacy"), href: "/privacy" }]} locale={locale} />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="prose prose-sm sm:prose-base dark:prose-invert mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
          <div className="mt-8 border-t border-border pt-8">
            <p>{t("content")}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
