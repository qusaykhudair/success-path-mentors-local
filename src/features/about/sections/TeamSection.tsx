import { useTranslations } from "next-intl";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContentPending } from "@/components/feedback/ContentPending";
import { TeamCard } from "@/features/about/components/TeamCard";
import { team } from "@/data/team";

/**
 * Per docs/11 - About Page Specification.md — Meet Our Team.
 * `src/data/team.ts` is intentionally empty (real tutor photos/bios/
 * positions are business data, not something to invent) — renders a
 * pending-content notice until populated, same pattern as Statistics
 * and Testimonials.
 */
export function TeamSection() {
  const t = useTranslations("about.team");

  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={t("title")} description={t("description")} />
        {team.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <ContentPending message={t("pendingMessage")} />
        )}
      </Container>
    </section>
  );
}
