import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  soft,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  soft?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", soft && "bg-background-soft", className)}
    >
      <div className="am-container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
