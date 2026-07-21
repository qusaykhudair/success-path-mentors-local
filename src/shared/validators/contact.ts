import { z } from "zod";

/**
 * Contact form schema. Per docs/26 - Forms & Validation Standards.md and
 * docs/21 - Contact Page Specification.md.
 *
 * Validation messages are translation keys (namespace: "forms.validation"),
 * resolved in the form component via next-intl — never hardcode message
 * strings here.
 */
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "forms.validation.required").max(100),
  email: z.string().trim().email("forms.validation.invalidEmail"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s()-]{7,20}$/, "forms.validation.invalidPhone")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "forms.validation.minLength")
    .max(2000, "forms.validation.maxLength"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
