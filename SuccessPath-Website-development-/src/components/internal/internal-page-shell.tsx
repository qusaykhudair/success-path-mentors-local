import type { ReactNode } from 'react';

import { JsonLd } from '@/components/seo/json-ld';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '@/lib/seo/schemas';
import type {
  BreadcrumbItem,
  FaqItem,
} from '@/types/internal-page';

interface InternalPageShellProps {
  schemaId: string;
  breadcrumbs: BreadcrumbItem[];
  faqItems?: FaqItem[];
  additionalSchemas?: unknown[];
  children: ReactNode;
}

export function InternalPageShell({
  schemaId,
  breadcrumbs,
  faqItems = [],
  additionalSchemas = [],
  children,
}: InternalPageShellProps) {
  return (
    <>
      <JsonLd
        id={`${schemaId}-breadcrumbs-schema`}
        data={buildBreadcrumbSchema(
          breadcrumbs
        )}
      />

      {faqItems.length > 0 && (
        <JsonLd
          id={`${schemaId}-faq-schema`}
          data={buildFaqSchema(faqItems)}
        />
      )}

      {additionalSchemas.map(
        (schema, index) => (
          <JsonLd
            key={`${schemaId}-${index}`}
            id={`${schemaId}-additional-schema-${index + 1}`}
            data={schema}
          />
        )
      )}

      {children}
    </>
  );
}