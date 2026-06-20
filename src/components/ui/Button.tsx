import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "whatsapp";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-accent/70 backdrop-blur-md border border-accent/50 text-white hover:bg-accent/85 hover:border-accent/70 shadow-[0_8px_28px_-8px_rgba(28,142,240,0.55),inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,0,0,0.15)]",
  secondary:
    "bg-surface-2 text-foreground border border-border-base hover:border-steel-dim hover:bg-surface",
  outline:
    "border border-steel-dim/60 text-foreground hover:border-foreground hover:bg-white/5",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
  whatsapp: "bg-success text-white hover:brightness-110",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(baseClasses, VARIANTS[variant], SIZES[size], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  "aria-label"?: string;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  href,
  external,
  children,
  ...rest
}: LinkButtonProps) {
  const classes = cn(
    baseClasses,
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
