"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { LinkButton } from "@/components/ui/Button";
import { CloseIcon, WhatsAppIcon, PhoneIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/lib/navigation";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  // Cierra al navegar.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Bloquea scroll de fondo cuando está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between border-b border-border-base px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-white/10"
            aria-label="Cerrar menú"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Móvil">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                  active
                    ? "bg-accent/12 text-accent"
                    : "text-foreground hover:bg-white/5",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-3 border-t border-border-base p-5">
          <LinkButton href="/vende-tu-auto" fullWidth>
            Publica tu auto
          </LinkButton>
          <div className="grid grid-cols-2 gap-3">
            <LinkButton href={whatsappUrl()} external variant="whatsapp" size="sm">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </LinkButton>
            <LinkButton href={telUrl()} external variant="secondary" size="sm">
              <PhoneIcon className="h-4 w-4" />
              Llamar
            </LinkButton>
          </div>
          <p className="pt-1 text-center text-xs text-subtle">{SITE.contact.phone}</p>
        </div>
      </aside>
    </div>
  );
}
