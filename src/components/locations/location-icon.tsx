import {
  BookOpenCheck,
  Check,
  Globe,
  GraduationCap,
  Layers3,
  MessagesSquare,
  ShieldCheck,
} from 'lucide-react';

import type {
  LocationFeature,
} from '@/types/location';

interface LocationIconProps {
  icon: LocationFeature['icon'];
  className?: string;
}

export function LocationIcon({
  icon,
  className,
}: LocationIconProps) {
  const iconMap = {
    book:
      BookOpenCheck,
    check:
      Check,
    globe:
      Globe,
    graduation:
      GraduationCap,
    layers:
      Layers3,
    message:
      MessagesSquare,
    shield:
      ShieldCheck,
  } as const;

  const Icon =
    iconMap[icon] ??
    BookOpenCheck;

  return (
    <Icon
      aria-hidden="true"
      className={className}
      strokeWidth={1.8}
    />
  );
}
