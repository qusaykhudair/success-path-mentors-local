import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { StatCard } from "@/components/cards/StatCard";
import { statistics } from "@/data/statistics";

export function HomeStats() {
  const t = useTranslations();

  return (
    <section className="border-border border-y bg-muted/40 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.labelKey)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
