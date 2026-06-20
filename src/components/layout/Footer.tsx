import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NAV_ITEMS } from "@/lib/navigation";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, WhatsAppIcon } from "@/components/icons";

const SERVICES_LINKS = [
  { label: "Inventario", href: "/inventario" },
  { label: "Vende tu auto", href: "/vende-tu-auto" },
  { label: "Consignación", href: "/consignacion" },
  { label: "Financiamiento", href: "/financiamiento" },
  { label: "Servicio mecánico", href: "/servicio" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-base bg-background-soft">
      <div className="am-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline}
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-semibold text-success transition-colors hover:bg-success/25"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Navegación */}
          <nav aria-label="Footer — navegación">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label="Footer — servicios">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
                {SITE.contact.address}
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-subtle" />
                <a href={telUrl()} className="hover:text-foreground">{SITE.contact.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-subtle" />
                <a href={`mailto:${SITE.contact.email}`} className="hover:text-foreground">
                  {SITE.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ClockIcon className="h-4 w-4 shrink-0 text-subtle" />
                {SITE.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-base pt-6 text-sm text-subtle md:flex-row">
          <p>© {year} {SITE.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <Link href="/contacto" className="hover:text-foreground">Aviso de privacidad</Link>
            <Link href="/contacto" className="hover:text-foreground">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
