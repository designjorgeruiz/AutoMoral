import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "accent" | "steel" | "success" | "new" | "used" | "featured" | "neutral";

const TONES: Record<Tone, string> = {
  accent: "bg-accent/15 text-accent border-accent/30",
  steel: "bg-white/8 text-steel border-white/15",
  success: "bg-success/15 text-success border-success/30",
  new: "bg-accent text-white border-transparent",
  used: "bg-black/60 backdrop-blur-sm text-white border-white/20",
  featured: "bg-white/90 backdrop-blur-sm text-accent border-transparent",
  neutral: "bg-surface-2 text-muted border-border-base",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
