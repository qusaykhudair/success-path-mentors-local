import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { HomeCta } from "@/features/home/sections/HomeCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.faq" });
  
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/faq",
    locale: locale as Locale,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "about.faq" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  const faqItems = [
    {
      id: "howAreTutorsSelected",
      question: t("items.howAreTutorsSelected.question"),
      answer: t("items.howAreTutorsSelected.answer"),
    },
    {
      id: "howDoesLearningProcessWork",
      question: t("items.howDoesLearningProcessWork.question"),
      answer: t("items.howDoesLearningProcessWork.answer"),
    },
    {
      id: "whichSubjectsAreOffered",
      question: t("items.whichSubjectsAreOffered.question"),
      answer: t("items.whichSubjectsAreOffered.answer"),
    },
    {
      id: "whichLocationsAreServed",
      question: t("items.whichLocationsAreServed.question"),
      answer: t("items.whichLocationsAreServed.answer"),
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: tNav("faq"), href: "/faq" }]} locale={locale} />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-10">
          <SectionHeading 
            title={t("title")} 
            description={t("description")} 
          />
          
          <Accordion items={faqItems} />
        </Container>
      </section>
      
      <HomeCta />
    </>
  );
}
