'use server';

import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';

export interface SubmitLeadResult {
  success: boolean;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
}

/**
 * Validates and processes an inbound lead from the contact/assessment form.
 *
 * Delivery integration is intentionally provider-agnostic here: once a CRM
 * or email provider is selected (e.g. HubSpot, SendGrid), send `parsed.data`
 * to it inside the try block below. Validation and the response contract to
 * the client are already production-ready.
 */
export async function submitLead(values: ContactFormValues): Promise<SubmitLeadResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: SubmitLeadResult['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues;
      fieldErrors[key] = issue.message;
    }
    return { success: false, fieldErrors };
  }

  try {
    // Lead delivery destination (CRM/email/webhook) to be wired once selected.
    // parsed.data is fully typed and validated at this point.
    return { success: true };
  } catch {
    return { success: false };
  }
}
