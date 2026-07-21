import { z } from "zod";

/**
 * Become-a-Tutor application schema.
 * Per docs/22 - Become a Tutor Page Specification.md.
 */
export const becomeTutorFormSchema = z.object({
  fullName: z.string().trim().min(2, "forms.validation.required").max(100),
  email: z.string().trim().email("forms.validation.invalidEmail"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s()-]{7,20}$/, "forms.validation.invalidPhone"),
  subjects: z.array(z.string()).min(1, "forms.validation.required"),
  experienceYears: z.coerce.number().min(0).max(60),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type BecomeTutorFormValues = z.infer<typeof becomeTutorFormSchema>;
