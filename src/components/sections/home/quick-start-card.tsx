import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ButtonLink } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { buildTrialLessonMessage, buildWhatsAppHref } from '@/lib/whatsapp';
import type { WhatsAppLocale } from '@/lib/whatsapp';

export function QuickStartCard({ locale, locationContext }: { locale: string; locationContext?: string }) {
  const t = useTranslations('hero');
  
  const whatsappHref = buildWhatsAppHref(
    buildTrialLessonMessage(locale as WhatsAppLocale, { location: locationContext })
  );

  return (
    <Card padding="md" className="w-full border-accent-200/50 bg-background/95 shadow-xl backdrop-blur-sm sm:max-w-md">
      <div className="space-y-1 pb-4 text-center">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          Quick Start: Get Connected
        </h3>
        <p className="text-sm text-muted-foreground">
          Skip the forms. Talk to our tutoring coordinators directly on WhatsApp to match with the perfect tutor.
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-2 pt-2">
        <ButtonLink
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="whatsapp_cta_clicked"
          data-analytics-surface="quick_start_card"
          variant="accent"
          size="lg"
          className="w-full"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Message us on WhatsApp
        </ButtonLink>
        <p className="text-center text-xs text-muted-foreground">
          Average response time: under 1 hour.
        </p>
      </div>
    </Card>
  );
}
