import * as React from 'react';

interface LanguageIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function GermanLanguageBadge({ className = 'h-8 w-8', ...props }: LanguageIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="German Language"
      role="img"
      {...props}
    >
      <defs>
        <clipPath id="langClipDE">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
        <filter id="langDropDE" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
        </filter>
      </defs>
      <g clipPath="url(#langClipDE)">
        <rect width="100" height="33.34" fill="#1C1C1C" />
        <rect y="33.34" width="100" height="33.34" fill="#D32F2F" />
        <rect y="66.68" width="100" height="33.34" fill="#FFC107" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="2"
      />
    </svg>
  );
}

export function EnglishLanguageBadge({ className = 'h-8 w-8', ...props }: LanguageIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="English Language"
      role="img"
      {...props}
    >
      <defs>
        <clipPath id="langClipEN">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>
      <g clipPath="url(#langClipEN)">
        {/* Blue background */}
        <rect width="100" height="100" fill="#0A3161" />
        {/* White diagonals */}
        <line x1="0" y1="0" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#FFFFFF" strokeWidth="18" />
        {/* Red diagonals */}
        <line x1="0" y1="0" x2="100" y2="100" stroke="#CC0000" strokeWidth="6" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#CC0000" strokeWidth="6" />
        {/* White central cross */}
        <rect x="38" width="24" height="100" fill="#FFFFFF" />
        <rect y="38" width="100" height="24" fill="#FFFFFF" />
        {/* Red central cross */}
        <rect x="43" width="14" height="100" fill="#CC0000" />
        <rect y="43" width="100" height="14" fill="#CC0000" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ArabicLanguageBadge({ className = 'h-8 w-8', ...props }: LanguageIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="Arabic Language"
      role="img"
      {...props}
    >
      <defs>
        <linearGradient id="langGradAR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#langGradAR)" />
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
        strokeOpacity="0.4"
      />
      {/* Decorative inner ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#FCD34D"
        strokeWidth="1"
        strokeDasharray="3 3"
        strokeOpacity="0.6"
      />
      {/* Calligraphic letter "ض" (Language of Dhad / لغة الضاد) */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="serif, 'Amiri', 'Traditional Arabic', 'Noto Naskh Arabic', sans-serif"
        fontWeight="bold"
        fontSize="54"
        fill="#FFFFFF"
        filter="drop-shadow(0px 2px 3px rgba(0,0,0,0.25))"
      >
        ض
      </text>
    </svg>
  );
}

export function FrenchLanguageBadge({ className = 'h-8 w-8', ...props }: LanguageIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="French Language"
      role="img"
      {...props}
    >
      <defs>
        <clipPath id="langClipFR">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>
      <g clipPath="url(#langClipFR)">
        <rect width="33.34" height="100" fill="#002654" />
        <rect x="33.34" width="33.34" height="100" fill="#FFFFFF" />
        <rect x="66.68" width="33.34" height="100" fill="#ED2939" />
      </g>
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="2"
      />
    </svg>
  );
}

export const LANGUAGE_BADGES = {
  german: GermanLanguageBadge,
  english: EnglishLanguageBadge,
  arabic: ArabicLanguageBadge,
  french: FrenchLanguageBadge,
} as const;
