import type {
  LegalPageContent,
  LegalSection,
} from '@/types/legal-page';

interface LegalDocumentProps {
  content: LegalPageContent;
  contactEmail: string;
}

function LegalSectionBlock({
  section,
}: {
  section: LegalSection;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="
        scroll-mt-28
        border-b
        border-border
        pb-10
        last:border-0
        last:pb-0
      "
    >
      <h2
        id={`${section.id}-heading`}
        className="
          text-h2
          font-black
          leading-tight
          text-primary-950
        "
      >
        {section.title}
      </h2>

      {section.paragraphs &&
        section.paragraphs.length > 0 && (
          <div
            className="
              mt-5
              grid
              gap-4
              text-body
              leading-8
              text-muted-foreground
            "
          >
            {section.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </div>
        )}

      {section.bullets &&
        section.bullets.length > 0 && (
          <ul
            className="
              mt-5
              grid
              list-disc
              gap-3
              ps-6
              text-body
              leading-8
              text-muted-foreground
              marker:text-accent-600
            "
          >
            {section.bullets.map(
              (bullet) => (
                <li key={bullet}>
                  {bullet}
                </li>
              )
            )}
          </ul>
        )}

      {section.subsections &&
        section.subsections.length > 0 && (
          <div className="mt-8 grid gap-8">
            {section.subsections.map(
              (subsection) => (
                <div key={subsection.title}>
                  <h3
                    className="
                      text-h3
                      font-bold
                      leading-tight
                      text-primary-900
                    "
                  >
                    {subsection.title}
                  </h3>

                  {subsection.paragraphs &&
                    subsection.paragraphs.length >
                      0 && (
                      <div
                        className="
                          mt-3
                          grid
                          gap-4
                          text-body
                          leading-8
                          text-muted-foreground
                        "
                      >
                        {subsection.paragraphs.map(
                          (paragraph) => (
                            <p key={paragraph}>
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    )}

                  {subsection.bullets &&
                    subsection.bullets.length >
                      0 && (
                      <ul
                        className="
                          mt-4
                          grid
                          list-disc
                          gap-3
                          ps-6
                          text-body
                          leading-8
                          text-muted-foreground
                          marker:text-accent-600
                        "
                      >
                        {subsection.bullets.map(
                          (bullet) => (
                            <li key={bullet}>
                              {bullet}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </div>
              )
            )}
          </div>
        )}
    </section>
  );
}

export function LegalDocument({
  content,
  contactEmail,
}: LegalDocumentProps) {
  return (
    <div
      className="
        mx-auto
        grid
        w-full
        max-w-7xl
        gap-10
        px-4
        py-14
        sm:px-6
        sm:py-16
        lg:grid-cols-[minmax(220px,0.32fr)_minmax(0,1fr)]
        lg:gap-14
        lg:px-8
        lg:py-20
      "
    >
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <nav
          aria-label={
            content.tableOfContentsLabel
          }
          className="
            rounded-card
            border
            border-border
            bg-card
            p-5
            shadow-card
          "
        >
          <h2
            className="
              text-small
              font-black
              uppercase
              tracking-wider
              text-primary-950
            "
          >
            {content.tableOfContentsLabel}
          </h2>

          <ol className="mt-4 grid gap-1">
            {content.sections.map(
              (section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="
                      flex
                      min-h-touch
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2
                      text-small
                      font-semibold
                      text-muted-foreground
                      transition-colors
                      hover:bg-accent-50
                      hover:text-accent-800
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-ring
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        text-caption
                        font-black
                        text-accent-700
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        '0'
                      )}
                    </span>

                    {section.title}
                  </a>
                </li>
              )
            )}
          </ol>
        </nav>
      </aside>

      <article className="min-w-0">
        <div className="grid gap-10">
          {content.sections.map(
            (section) => (
              <LegalSectionBlock
                key={section.id}
                section={section}
              />
            )
          )}
        </div>

        <section
          aria-labelledby="legal-contact-heading"
          className="
            mt-12
            rounded-card
            border
            border-accent-200
            bg-accent-50/70
            p-6
            sm:p-8
          "
        >
          <h2
            id="legal-contact-heading"
            className="
              text-h3
              font-black
              text-primary-950
            "
          >
            {content.closing.title}
          </h2>

          <p
            className="
              mt-3
              text-body
              leading-8
              text-muted-foreground
            "
          >
            {content.closing.description}
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="
              mt-5
              inline-flex
              min-h-touch
              items-center
              break-all
              rounded-lg
              font-bold
              text-accent-800
              underline
              decoration-accent-300
              underline-offset-4
              hover:text-accent-900
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
            "
          >
            {content.closing.contactLabel}
          </a>
        </section>
      </article>
    </div>
  );
}