import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/shared/seo/build-metadata";
import type { Locale } from "@/i18n/routing";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { AboutHero } from "@/features/about/sections/AboutHero";
import { OurStory } from "@/features/about/sections/OurStory";
import { MissionVision } from "@/features/about/sections/MissionVision";
import { CoreValues } from "@/features/about/sections/CoreValues";
import { WhyChooseUs } from "@/features/about/sections/WhyChooseUs";
import { TeachingMethodology } from "@/features/about/sections/TeachingMethodology";
import { TeamSection } from "@/features/about/sections/TeamSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { aboutFaqIds } from "@/features/about/data/about-content";
import { statistics } from "@/data/statistics";
import { testimonials } from "@/data/testimonials";
import { ROUTES } from "@/constants/routes";

type PageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Per docs/11 - About Page Specification.md — Metadata (exact title/
 * description as specified in the doc, not paraphrased).
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "About Success Path Mentors | Professional Tutoring Across Canada",
    description:
      "Learn about Success Path Mentors, our mission, values, experienced tutors, and commitment to helping students achieve academic success.",
    path: ROUTES.about,
    locale: locale as Locale,
  });
}

/**
 * Per docs/11 - About Page Specification.md — Page Structure (order is
 * the spec's own numbering 1–12; Statistics/Testimonials/FAQ/CTA reuse
 * the cross-page shared sections per docs/adr/0002).
 */
export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations();
  const tFaq = await getTranslations("about.faq.items");

  const faqItems = aboutFaqIds.map((id) => ({
    id,
    question: tFaq(`${id}.question`),
    answer: tFaq(`${id}.answer`),
  }));

  return (
    <>
      <Breadcrumb
        items={[{ label: t("navigation.about"), href: ROUTES.about }]}
        locale={locale}
      />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <TeachingMethodology />
      <StatsSection
        title={t("about.stats.title")}
        description={t("about.stats.description")}
        items={statistics}
        pendingMessage={t("about.stats.pendingMessage")}
      />
      <TeamSection />
      <TestimonialsSection
        title={t("about.testimonials.title")}
        description={t("about.testimonials.description")}
        items={testimonials}
        pendingMessage={t("about.testimonials.pendingMessage")}
      />
      <FAQSection
        title={t("about.faq.title")}
        description={t("about.faq.description")}
        items={faqItems}
      />
      <CTASection
        title={t("about.cta.title")}
        description={t("about.cta.description")}
        actions={[
          { label: t("about.cta.bookConsultation"), href: ROUTES.contact },
          {
            label: t("about.cta.becomeTutor"),
            href: ROUTES.becomeTutor,
            variant: "outline",
          },
        ]}
      />
    </>
  );
}
