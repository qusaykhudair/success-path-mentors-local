import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StatCard } from "@/components/cards/StatCard";
import { ContentPending } from "@/components/feedback/ContentPending";
import type { Statistic } from "@/data/statistics";

type StatsSectionProps = {
  title: string;
  description?: string;
  items: Statistic[];
  pendingMessage: string;
};

/**
 * Cross-page shared section per docs/adr/0002-sections-folder-structure.md
 * — "Statistics" appears with an identical structure on About, Home, and
 * every detail page template (Subject/Service/Location "Success
 * Statistics"). Takes its data as props; never imports src/data itself.
 */
export function StatsSection({
  title,
  description,
  items,
  pendingMessage,
}: StatsSectionProps) {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={title} description={description} />
        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((item) => (
              <StatCard
                key={item.id}
                value={item.value}
                suffix={item.suffix}
                label={t(item.labelKey)}
              />
            ))}
          </div>
        ) : (
          <ContentPending message={pendingMessage} />
        )}
      </Container>
    </section>
  );
}
