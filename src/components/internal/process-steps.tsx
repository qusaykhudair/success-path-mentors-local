import type { ProcessStep } from '@/types/internal-page';

interface ProcessStepsProps {
  items: ProcessStep[];
}

export function ProcessSteps({
  items,
}: ProcessStepsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ol
      className="
        grid
        gap-5
        lg:grid-cols-3
      "
    >
      {items.map((item, index) => (
        <li
          key={item.title}
          className="
            rounded-card
            border
            border-border
            bg-card
            p-6
            shadow-card
          "
        >
          <span
            aria-hidden="true"
            className="
              inline-flex
              h-11
              min-w-11
              items-center
              justify-center
              rounded-xl
              bg-primary
              px-3
              text-small
              font-black
              text-primary-foreground
            "
          >
            {String(index + 1).padStart(
              2,
              '0'
            )}
          </span>

          <h3
            className="
              mt-5
              text-h3
              font-bold
              text-primary-950
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              text-small
              leading-7
              text-muted-foreground
            "
          >
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}