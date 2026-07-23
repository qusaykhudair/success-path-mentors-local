import { getTranslations } from 'next-intl/server';
import {
  Users,
  BookOpenCheck,
  FileBarChart,
  ClipboardList,
  Target,
  CalendarClock,
  type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

interface ServiceItem {
  title: string;
  description: string;
}

const icons: LucideIcon[] = [
  Users,
  BookOpenCheck,
  FileBarChart,
  ClipboardList,
  Target,
  CalendarClock,
];

export async function Services() {
  const t = await getTranslations('services');
  const items = t.raw('items') as ServiceItem[];

  return (
    <Section id="services">
      <SectionHeading heading={t('heading')} subheading={t('subheading')} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length] ?? Users;
          return (
            <Card key={item.title} className="flex flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
              </span>
              <h3 className="mt-4 text-h4">{item.title}</h3>
              <p className="mt-2 text-small text-ink/70">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
