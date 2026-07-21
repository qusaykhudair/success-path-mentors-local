import { Star } from "lucide-react";
import type { Review } from "@/types";

type TestimonialCardProps = {
  review: Review;
};

/**
 * Per docs/07 - Component Library Specification.md — Testimonial Card:
 * "Avatar, Name, Role, Location, Rating, Review, Date."
 */
export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <figure className="border-border bg-surface rounded-card flex h-full flex-col gap-4 border p-6">
      <div
        className="flex items-center gap-0.5"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className={
              index < review.rating
                ? "fill-accent text-accent size-4"
                : "text-border size-4"
            }
          />
        ))}
      </div>
      <blockquote className="text-foreground flex-1 text-sm leading-relaxed">
        “{review.content}”
      </blockquote>
      <figcaption className="border-border flex items-center gap-3 border-t pt-4">
        <div className="bg-muted text-muted-foreground flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
          {review.authorName.charAt(0)}
        </div>
        <div>
          <p className="text-foreground text-sm font-semibold">{review.authorName}</p>
          <p className="text-muted-foreground text-xs">
            {[review.authorRole, review.location].filter(Boolean).join(" · ")}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
