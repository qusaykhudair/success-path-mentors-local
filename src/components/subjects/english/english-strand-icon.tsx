import {
  BookOpenCheck,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  MessagesSquare,
} from 'lucide-react';

import type {
  EnglishStrandIconKey,
} from '@/types/english-overview';

interface EnglishStrandIconProps {
  iconKey: EnglishStrandIconKey;
  className?: string;
}

/**
 * Compatibility-safe icon map.
 *
 * These icon exports are already used by the existing Mustafa
 * Academy source and are therefore safe for the installed
 * lucide-react version. The fallback prevents an undefined
 * React element even when an unexpected icon key reaches the
 * component at runtime.
 */
const iconMap: Record<
  EnglishStrandIconKey,
  typeof BookOpenCheck
> = {
  'book-open-check': BookOpenCheck,
  braces: ClipboardList,
  library: BookOpenCheck,
  'book-search': BookOpenCheck,
  'audio-lines': GraduationCap,
  'messages-square': MessagesSquare,
  'spell-check': ClipboardList,
  'clipboard-list': ClipboardList,
  'pen-line': FileCheck2,
  'file-check': FileCheck2,
  'panels-top-left': GraduationCap,
};

export function EnglishStrandIcon({
  iconKey,
  className,
}: EnglishStrandIconProps) {
  const Icon =
    iconMap[iconKey] ??
    BookOpenCheck;

  return (
    <Icon
      aria-hidden="true"
      className={className}
      strokeWidth={1.8}
    />
  );
}
