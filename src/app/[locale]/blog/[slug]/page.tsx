import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  // This would fetch blog post data
  
  return buildMetadata({
    title: `Blog Post ${slug}`,
    description: "Blog post description",
    path: `/blog/${slug}`,
    locale: locale as Locale,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  return (
    <>
      <Breadcrumb 
        items={[
          { label: tNav("blog"), href: "/blog" },
          { label: slug, href: `/blog/${slug}` }
        ]} 
        locale={locale} 
      />
      
      <section className="bg-surface py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-10">
          <SectionHeading 
            title="Blog Post" 
            description="This is a placeholder for a blog post." 
            align="start"
          />
        </Container>
      </section>
    </>
  );
}
