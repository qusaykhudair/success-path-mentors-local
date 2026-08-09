import { getTranslations } from 'next-intl/server';
import { ShieldCheck, Zap, MessageCircle } from 'lucide-react';

export async function TrustBadges() {
  const t = await getTranslations('trustBadges');

  const badges = [
    { icon: ShieldCheck, label: t('moneyBack') },
    { icon: Zap, label: t('fastReply') },
    { icon: MessageCircle, label: t('contactUs') },
  ];

  return (
    <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-8">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2 text-small font-semibold text-primary/80">
          <Icon className="h-5 w-5 text-accent-600" aria-hidden />
          {label}
        </div>
      ))}
    </div>
  );
}
