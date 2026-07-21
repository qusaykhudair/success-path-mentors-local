"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { FeatureCard } from "@/components/cards/FeatureCard";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ServicesOverview() {
  const common = useTranslations("common");

  // Take the first 4 services to display on home page
  const displayedServices = services.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <Container className="flex flex-col gap-10">
        <SectionHeading 
          title={common("getStarted")}
          action={
            <Button href="/services" variant="link" className="mt-2">
              {common("viewAll")} &rarr;
            </Button>
          }
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayedServices.map((service) => {
            const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Star;
            
            return (
              <FeatureCard
                key={service.slug}
                icon={Icon}
                title={service.name}
                description={service.shortDescription}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
