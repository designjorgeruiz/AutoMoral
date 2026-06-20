"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/Section";
import { ChevronDownIcon } from "@/components/icons";
import { FAQS } from "@/data/services";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/types";

export function FAQ({ items = FAQS, soft = true }: { items?: FaqItem[]; soft?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={cn("py-16 md:py-24", soft && "bg-background-soft")}>
      <div className="am-container">
        <SectionHeading
          align="center"
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
        />
        <div className="mx-auto mt-10 max-w-2xl divide-y divide-border-base overflow-hidden rounded-2xl border border-border-base bg-surface">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDownIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-subtle transition-transform",
                      isOpen && "rotate-180 text-accent",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
