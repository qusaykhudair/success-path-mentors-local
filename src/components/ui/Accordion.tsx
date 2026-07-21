"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

type AccordionItemData = {
  id: string;
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItemData[];
  className?: string;
  /** Allow more than one item open at once. Default: false (single-open). */
  allowMultiple?: boolean;
};

/**
 * Per docs/07 - Component Library Specification.md — FAQ Accordion:
 * "Expand Animation, Structured Data Support, Keyboard Navigation."
 * Keyboard support here comes for free from using real <button> triggers
 * (Tab/Enter/Space all work natively) rather than custom key handling.
 */
export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set<string>();
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div
      className={cn(
        "divide-border border-border rounded-card divide-y border",
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-trigger-${item.id}`}
                onClick={() => toggle(item.id)}
                className="text-foreground focus-visible:outline-primary flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "text-muted-foreground size-5 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
