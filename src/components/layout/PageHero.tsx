import type { ReactNode } from "react";
import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border-base pt-16 md:pt-18">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_-20%,#1a2536_0%,#0a0d12_60%)]" />
      <div className="absolute inset-0 -z-10 am-glow opacity-70" />
      <div className="am-container py-12 md:py-16">
        <nav className="mb-4 text-sm text-subtle" aria-label="Ruta de navegación">
          <Link href="/" className="hover:text-foreground">Inicio</Link>
          {breadcrumb && <span className="mx-2">/</span>}
          {breadcrumb && <span className="text-muted">{breadcrumb}</span>}
        </nav>
        {eyebrow && (
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-base text-muted md:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
