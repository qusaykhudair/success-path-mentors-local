import type {
  ProgrammeFrancaisIconKey,
} from '@/types/programme-francais';

interface ProgrammeFrancaisIconProps {
  iconKey:
    ProgrammeFrancaisIconKey;
  className?: string;
}

export function ProgrammeFrancaisIcon({
  iconKey,
  className,
}: ProgrammeFrancaisIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <IconPath
        iconKey={iconKey}
      />
    </svg>
  );
}

function IconPath({
  iconKey,
}: {
  iconKey:
    ProgrammeFrancaisIconKey;
}) {
  switch (iconKey) {
    case 'francais':
      return (
        <>
          <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z" />
          <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" />
          <path d="M7 7h2M7 11h2M15 7h2M15 11h2" />
        </>
      );

    case 'mathematiques':
      return (
        <>
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
          />
          <path d="M7 7h10M8 11h1M12 11h1M16 11h1M8 15h1M12 15h1M16 15h1M8 19h5M16 19h1" />
        </>
      );

    case 'litteratie':
      return (
        <>
          <path d="M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z" />
          <path d="M8 8h6M8 12h6M8 16h4" />
          <path d="M17 7h2v13h-2" />
        </>
      );

    case 'langue':
      return (
        <>
          <path d="M4 5h8v6H7l-3 3V5Z" />
          <path d="M12 10h8v7h-5l-3 3v-10Z" />
          <path d="M7 8h2M15 13h2" />
        </>
      );

    case 'lecture':
      return (
        <>
          <path d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z" />
          <circle
            cx="12"
            cy="12"
            r="2.5"
          />
        </>
      );

    case 'redaction':
      return (
        <>
          <path d="M4 20h5l10-10-5-5L4 15v5Z" />
          <path d="m12 7 5 5M4 15l5 5M4 4h6" />
        </>
      );

    case 'processus':
      return (
        <>
          <circle
            cx="6"
            cy="12"
            r="2"
          />
          <circle
            cx="18"
            cy="6"
            r="2"
          />
          <circle
            cx="18"
            cy="18"
            r="2"
          />
          <path d="M8 12h4M14 11l2-3M14 13l2 3" />
        </>
      );

    case 'nombres':
      return (
        <>
          <path d="M6 4v16M3 8h6M3 16h6" />
          <path d="M14 7c0-2 1-3 3-3s3 1 3 3c0 4-6 4-6 9h6" />
        </>
      );

    case 'algebre':
      return (
        <>
          <path d="M4 7h7M7.5 3.5v7" />
          <path d="m14 5 6 6M20 5l-6 6" />
          <path d="M4 18h7M15 16h5M15 20h5" />
        </>
      );

    case 'donnees':
      return (
        <>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          <path d="M3 7 9 3l6 6 6-5" />
        </>
      );

    case 'espace':
      return (
        <>
          <rect
            x="4"
            y="4"
            width="7"
            height="7"
          />
          <path d="m14 6 6-2v6l-6 2V6ZM4 15l7-2v7l-7 2v-7ZM15 15h5v5h-5z" />
        </>
      );

    case 'finance':
      return (
        <>
          <circle
            cx="12"
            cy="12"
            r="9"
          />
          <path d="M15.5 8.5c-.7-1-1.8-1.5-3.3-1.5-1.8 0-3.2.9-3.2 2.4 0 3.6 6.6 1.5 6.6 5.2 0 1.5-1.4 2.4-3.4 2.4-1.6 0-2.9-.5-3.8-1.7M12 5v14" />
        </>
      );

    default:
      return (
        <circle
          cx="12"
          cy="12"
          r="9"
        />
      );
  }
}
