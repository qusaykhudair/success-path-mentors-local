import type {
  ScienceStrandIconKey,
} from '@/types/science-overview';

interface ScienceStrandIconProps {
  iconKey: ScienceStrandIconKey;
  className?: string;
}

export function ScienceStrandIcon({
  iconKey,
  className,
}: ScienceStrandIconProps) {
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
      <ScienceIconPath
        iconKey={iconKey}
      />
    </svg>
  );
}

function ScienceIconPath({
  iconKey,
}: {
  iconKey: ScienceStrandIconKey;
}) {
  switch (iconKey) {
    case 'atom':
      return (
        <>
          <circle cx="12" cy="12" r="1.7" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(120 12 12)"
          />
        </>
      );

    case 'balance':
      return (
        <>
          <path d="M12 3v17" />
          <path d="M5 6h14" />
          <path d="M7 6 3.5 13h7L7 6Z" />
          <path d="m17 6-3.5 7h7L17 6Z" />
          <path d="M7 21h10" />
        </>
      );

    case 'battery':
      return (
        <>
          <rect x="4" y="6" width="15" height="12" rx="2" />
          <path d="M19 10h2v4h-2" />
          <path d="M8 12h4M10 10v4M14.5 12h2.5" />
        </>
      );

    case 'beaker':
      return (
        <>
          <path d="M8 3h8" />
          <path d="M10 3v5l-5 9a2.5 2.5 0 0 0 2.2 3.7h9.6A2.5 2.5 0 0 0 19 17l-5-9V3" />
          <path d="M7.5 15h9M9 12h6" />
        </>
      );

    case 'calculator':
      return (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8M8 11h1M12 11h1M16 11h1M8 15h1M12 15h1M16 15h1M8 19h5M16 19h1" />
        </>
      );

    case 'circuit':
      return (
        <>
          <path d="M4 7h5M15 7h5M4 17h5M15 17h5" />
          <path d="M9 4v6M15 4v6M9 14v6M15 14v6" />
          <path d="M9 7h6M9 17h6" />
          <circle cx="4" cy="7" r="1" />
          <circle cx="20" cy="7" r="1" />
          <circle cx="4" cy="17" r="1" />
          <circle cx="20" cy="17" r="1" />
        </>
      );

    case 'droplet':
      return (
        <>
          <path d="M12 3s6 6.3 6 11a6 6 0 1 1-12 0c0-4.7 6-11 6-11Z" />
          <path d="M9.5 15.5c.7 1.2 1.7 1.8 3.2 1.8" />
        </>
      );

    case 'earth':
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 10h17M3.5 14h17" />
          <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21" />
          <path d="M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21" />
        </>
      );

    case 'energy':
      return (
        <>
          <path d="m13 2-7 12h6l-1 8 7-12h-6l1-8Z" />
        </>
      );

    case 'flame':
      return (
        <path d="M13 3c1.5 3-1 4.5 1 6.5 1.2 1.2 3 .7 3.5-.8 1.8 3.5.8 8.6-3 11a6.4 6.4 0 0 1-8.8-2.2C3.8 14 5.4 9.9 9 7c-.1 2.1.6 3.5 1.8 4.3C11 8.3 12.8 6.5 13 3Z" />
      );

    case 'flask':
      return (
        <>
          <path d="M9 3h6" />
          <path d="M10 3v6l-5.2 8.5A2.3 2.3 0 0 0 6.8 21h10.4a2.3 2.3 0 0 0 2-3.5L14 9V3" />
          <path d="M7.5 16h9" />
          <circle cx="11" cy="13" r=".7" />
          <circle cx="14.5" cy="17.5" r=".7" />
        </>
      );

    case 'force':
      return (
        <>
          <rect x="5" y="8" width="8" height="8" rx="1.5" />
          <path d="M13 12h7" />
          <path d="m17 9 3 3-3 3" />
          <path d="M5 6v12" />
        </>
      );

    case 'formula':
      return (
        <>
          <path d="M4 6h7M7.5 3v6M14 5l6 6M20 5l-6 6M4 17h7M15 15h5M15 19h5" />
        </>
      );

    case 'gas':
      return (
        <>
          <path d="M4 9c2-2 4-2 6 0s4 2 6 0 3-2 4-1" />
          <path d="M4 14c2-2 4-2 6 0s4 2 6 0 3-2 4-1" />
          <circle cx="6" cy="5" r="1" />
          <circle cx="17" cy="18" r="1" />
        </>
      );

    case 'gauge':
      return (
        <>
          <path d="M4 18a8 8 0 1 1 16 0" />
          <path d="m12 13 4-4M6 18h12M7 10l1 1M17 10l-1 1" />
        </>
      );

    case 'lab':
      return (
        <>
          <path d="M8 3h8" />
          <path d="M10 3v6l-5 8.5A2.3 2.3 0 0 0 7 21h10a2.3 2.3 0 0 0 2-3.5L14 9V3" />
          <path d="M7.5 16h9" />
          <path d="M9 13h6" />
          <circle cx="12" cy="11" r=".7" />
        </>
      );

    case 'leaf':
      return (
        <>
          <path d="M20 4C11 4 5 8.5 5 15a5 5 0 0 0 5 5c6.5 0 10-6 10-16Z" />
          <path d="M5 19c3-4 7-7 12-10" />
        </>
      );

    case 'layers':
      return (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
        </>
      );

    case 'magnet':
      return (
        <>
          <path d="M5 5v8a7 7 0 0 0 14 0V5" />
          <path d="M5 9h5V5H5v4ZM14 9h5V5h-5v4Z" />
        </>
      );

    case 'molecule':
      return (
        <>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="17.5" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="m8.2 10.8 7-3.7M8.4 13.1l7.2 3.7M17.7 8.5l.3 7" />
        </>
      );

    case 'momentum':
      return (
        <>
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M9 12h6M12 9l3 3-3 3" />
        </>
      );

    case 'motion':
      return (
        <>
          <path d="M4 18 9 8l4 5 3-8 4 13" />
          <path d="M4 20h16" />
          <circle cx="9" cy="8" r="1" />
          <circle cx="13" cy="13" r="1" />
          <circle cx="16" cy="5" r="1" />
        </>
      );

    case 'optics':
      return (
        <>
          <path d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 3v2M12 19v2M3 5l2 2M19 17l2 2" />
        </>
      );

    case 'oscillation':
      return (
        <>
          <path d="M3 12h3c1.5 0 1.5-6 3-6s1.5 12 3 12 1.5-12 3-12 1.5 6 3 6h3" />
        </>
      );

    case 'physics':
      return (
        <>
          <circle cx="12" cy="12" r="2" />
          <path d="M4 12h4M16 12h4M12 4v4M12 16v4" />
          <path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
        </>
      );

    case 'quantum':
      return (
        <>
          <circle cx="12" cy="12" r="2" />
          <path d="M4 12c2-6 6-8 8-8s6 2 8 8c-2 6-6 8-8 8s-6-2-8-8Z" />
          <path d="M12 4c6 2 8 6 8 8s-2 6-8 8c-6-2-8-6-8-8s2-6 8-8Z" />
        </>
      );

    case 'radiation':
      return (
        <>
          <circle cx="12" cy="12" r="2" />
          <path d="M12 4a8 8 0 0 1 6.9 4l-4.3 2.5A3 3 0 0 0 12 9V4Z" />
          <path d="M5.1 8A8 8 0 0 0 5 16l4.3-2.5A3 3 0 0 1 9.4 10L5.1 8Z" />
          <path d="M12 20a8 8 0 0 0 6.9-4l-4.3-2.5A3 3 0 0 1 12 15v5Z" />
        </>
      );

    case 'reaction':
      return (
        <>
          <path d="M4 8h11M12 5l3 3-3 3M20 16H9M12 13l-3 3 3 3" />
          <circle cx="5" cy="16" r="1.5" />
          <circle cx="19" cy="8" r="1.5" />
        </>
      );

    case 'structure':
      return (
        <>
          <path d="M4 21V9l8-5 8 5v12" />
          <path d="M8 21v-6h8v6" />
          <path d="M4 11h16" />
          <path d="M8 11v4M16 11v4" />
          <path d="M12 4v7" />
        </>
      );

    case 'thermometer':
      return (
        <>
          <path d="M10 5a2 2 0 0 1 4 0v8.2a4 4 0 1 1-4 0V5Z" />
          <path d="M12 8v8" />
          <circle cx="12" cy="17" r="1.5" />
        </>
      );

    case 'vector':
      return (
        <>
          <path d="M4 18 18 4M13 4h5v5" />
          <path d="M4 18h8M4 18v-8" />
        </>
      );

    case 'wave':
      return (
        <path d="M3 12c2.5-7 5.5-7 8 0s5.5 7 10 0" />
      );

    default:
      return (
        <>
          <path d="M9 3h6" />
          <path d="M10 3v6l-5 8.5A2.3 2.3 0 0 0 7 21h10a2.3 2.3 0 0 0 2-3.5L14 9V3" />
          <path d="M7.5 16h9" />
        </>
      );
  }
}
