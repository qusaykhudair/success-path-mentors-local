import type { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  tone?: 'background' | 'muted' | 'dark';
  align?: 'start' | 'center';
}

const toneStyles = {
  background:
    'bg-background text-foreground',
  muted:
    'bg-muted text-foreground',
  dark:
    'bg-brand-dark text-white',
} as const;

export function ContentSection({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = 'background',
  align = 'start',
}: ContentSectionProps) {
  const headingId = `${id}-heading`;
  const inverse = tone === 'dark';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`
        py-14
        sm:py-16
        lg:py-20
        ${toneStyles[tone]}
      `}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className={`
            max-w-3xl
            ${
              align === 'center'
                ? 'mx-auto text-center'
                : ''
            }
          `}
        >
          {eyebrow && (
            <p
              className={`
                text-caption
                font-bold
                uppercase
                tracking-wider
                ${
                  inverse
                    ? 'text-accent-200'
                    : 'text-accent-700'
                }
              `}
            >
              {eyebrow}
            </p>
          )}

          <h2
            id={headingId}
            className={`
              mt-3
              text-h2
              font-black
              leading-tight
              ${
                inverse
                  ? 'text-white'
                  : 'text-primary-950'
              }
            `}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`
                mt-5
                text-body
                leading-8
                ${
                  inverse
                    ? 'text-white/70'
                    : 'text-muted-foreground'
                }
              `}
            >
              {description}
            </p>
          )}
        </div>

        {children && (
          <div className="mt-9 sm:mt-10">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}