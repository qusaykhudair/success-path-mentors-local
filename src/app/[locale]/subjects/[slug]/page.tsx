import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/shared/seo/build-metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { subjects } from "@/data/subjects";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const subject = subjects.find((s) => s.slug === slug);
  
  if (!subject) {
    return {};
  }
  
  return buildMetadata({
    title: `${subject.name} Tutoring`,
    description: subject.shortDescription,
    path: `/subjects/${slug}`,
    locale: locale as Locale,
  });
}

export function generateStaticParams() {
  return subjects.map((subject) => ({
    slug: subject.slug,
  }));
}

export default async function SubjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const tNav = await getTranslations({ locale, namespace: "navigation" });

  const subject = subjects.find((s) => s.slug === slug);

  if (!subject) {
    notFound();
  }

  const Icon = (LucideIcons[subject.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.BookOpen;

  return (
    <>
      <Breadcrumb 
        items={[
          { label: tNav("subjects"), href: "/subjects" },
          { label: subject.name, href: `/subjects/${slug}` }
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
              title={`${subject.name} Tutoring`} 
              description={subject.description} 
              align="start"
            />
          </div>
          
          <div className="border-border bg-muted/40 rounded-card mt-8 border p-8">
            <h3 className="text-foreground text-xl font-bold mb-4">Grade Levels</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {subject.gradeLevels.map((grade) => (
                <li key={grade}>{grade}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
