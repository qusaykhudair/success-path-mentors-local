// programs.tsx
import { getTranslations } from 'next-intl/server';
import {
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Award,
  Compass,
  type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

interface ProgramItem {
  title: string;
  description: string;
  /** Optional explicit icon key from translation data. Falls back to a
   *  rotating set below if omitted, so existing content keeps working. */
  icon?: keyof typeof ICON_MAP;
}

const ICON_MAP: Record<string, LucideIcon> = {
  academic: GraduationCap,
  curriculum: BookOpen,
  mentoring: Users,
  examPrep: Target,
  achievement: Award,
  guidance: Compass,
};

const FALLBACK_ICON_ORDER: LucideIcon[] = Object.values(ICON_MAP);

// Guaranteed-defined resolver — avoids the `LucideIcon | undefined` issue that
// occurs with noUncheckedIndexedAccess when reading from ICON_MAP/array by key or index.
function resolveIcon(icon: ProgramItem['icon'], index: number): LucideIcon {
  const explicit = icon ? ICON_MAP[icon] : undefined;
  const fallback = FALLBACK_ICON_ORDER[index % FALLBACK_ICON_ORDER.length];
  return explicit ?? fallback ?? GraduationCap;
}

export async function Programs() {
  const t = await getTranslations('programs');
  const items = t.raw('items') as ProgramItem[];

  return (
    <Section id="programs">
      <SectionHeading heading={t('heading')} subheading={t('subheading')} />

      <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Icon = resolveIcon(item.icon, i);

          return (
            <li key={item.title}>
              <Card interactive className="h-full">
                {/* soft ambient glow, only visible on hover — same signature
                    treatment used on the Hero stat cards for consistency */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-accent-300/0 blur-2xl transition-colors duration-300 ease-out group-hover:bg-accent-300/30"
                />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 text-accent-600 transition-colors duration-300 ease-out group-hover:bg-accent-600 group-hover:text-white">
                  <Icon
                    className="h-6 w-6 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>

                <h3 className="relative mt-4 text-h4 text-primary">{item.title}</h3>
                <p className="relative mt-2 text-small text-ink-secondary">
                  {item.description}
                </p>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}