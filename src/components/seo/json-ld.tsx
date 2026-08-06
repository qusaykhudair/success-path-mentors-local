import { safeJsonLd } from '@/lib/seo/safe-json-id';

interface JsonLdProps {
  id: string;
  data: unknown;
}

export function JsonLd({
  id,
  data,
}: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd(data),
      }}
    />
  );
}