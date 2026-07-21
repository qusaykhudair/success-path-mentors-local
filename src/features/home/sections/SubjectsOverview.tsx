"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { subjects } from "@/data/subjects";
import { FeatureCard } from "@/components/cards/FeatureCard";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function SubjectsOverview() {
  const t = useTranslations("megaMenu");
  const common = useTranslations("common");

  // Take the first 6 subjects to display on home page
  const displayedSubjects = subjects.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <Container className="flex flex-col gap-10">
        <SectionHeading 
          title={t("columnHeadings.popularSubjects")}
          action={
            <Button href="/subjects" variant="link" className="mt-2">
              {common("viewAll")} &rarr;
            </Button>
          }
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedSubjects.map((subject) => {
            const Icon = (LucideIcons[subject.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.BookOpen;
            
            return (
              <FeatureCard
                key={subject.slug}
                icon={Icon}
                title={subject.name}
                description={subject.shortDescription}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
