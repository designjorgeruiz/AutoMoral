"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { LinkButton } from "@/components/ui/Button";
import { MenuIcon, WhatsAppIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/lib/navigation";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border-base bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent",
        )}
      >
        <div className="am-container flex h-16 items-center justify-between md:h-18">
          <Link href="/" aria-label="Auto Moral MX — Inicio" className="shrink-0 py-2">
            <Logo priority wordmarkClassName="hidden sm:block" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden lg:block">
              <LinkButton
                href={whatsappUrl("Hola Auto Moral MX, quiero más información.")}
                external
                variant="ghost"
                size="sm"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4 text-success" />
                WhatsApp
              </LinkButton>
            </div>
            <LinkButton href="/vende-tu-auto" size="sm">
              Publica tu auto
            </LinkButton>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-white/10 lg:hidden"
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
