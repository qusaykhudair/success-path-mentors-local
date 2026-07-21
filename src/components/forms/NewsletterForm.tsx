"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Loader2, Check } from "lucide-react";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/shared/validators/newsletter";
import { Input } from "@/components/ui/Input";
import { IconButton } from "@/components/ui/IconButton";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

/**
 * Per docs/26 - Forms & Validation Standards.md and
 * docs/25 - Footer Specification.md (Newsletter section).
 *
 * NOTE: no email/backend vendor was specified anywhere in the supplied
 * documentation (see risk log). `onSubmit` is a stub that simulates a
 * network round-trip and shows the success state — wire it to a real
 * endpoint (SendGrid, Resend, a Next.js API route, etc.) once a vendor
 * is chosen. Validation, states, and a11y are fully real, not stubbed.
 */
export function NewsletterForm() {
  const t = useTranslations("forms.newsletter");
  const tFooter = useTranslations("footer");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
  });

  async function onSubmit() {
    try {
      // TODO: replace with a real API call once a backend/email vendor
      // is chosen (see .env.example placeholders).
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-accent flex items-center gap-2 text-sm font-medium">
        <Check className="size-4" aria-hidden="true" />
        {t("success")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2">
      <div className="flex items-stretch gap-2">
        <div className="flex-1">
          <Input
            type="email"
            placeholder={tFooter("newsletterPlaceholder")}
            aria-label={tFooter("newsletterPlaceholder")}
            invalid={!!errors.email}
            {...register("email")}
          />
        </div>
        <IconButton
          type="submit"
          aria-label={tFooter("newsletterSubmit")}
          disabled={isSubmitting}
          className="bg-primary text-primary-foreground hover:bg-primary-hover shrink-0"
          icon={
            isSubmitting ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <ArrowIcon className="size-4" aria-hidden="true" />
            )
          }
        />
      </div>
      {errors.email && (
        <p role="alert" className="text-danger text-xs">
          {t("error")}
        </p>
      )}
    </form>
  );
}
