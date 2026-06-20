import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { LinkButton } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Auto Moral MX en Guadalajara. Llámanos, escríbenos por WhatsApp o envíanos un mensaje. Estamos para ayudarte.",
};

export default function ContactoPage() {
  const items = [
    { icon: PhoneIcon, label: "Teléfono", value: SITE.contact.phone, href: telUrl(), external: true },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chatea con nosotros", href: whatsappUrl(), external: true },
    { icon: MailIcon, label: "Correo", value: SITE.contact.email, href: `mailto:${SITE.contact.email}`, external: true },
  ];

  return (
    <>
      <PageHero
        breadcrumb="Contacto"
        eyebrow="Contacto"
        title={<><span className="am-steel-text">Hablemos de tu </span><span className="text-accent">próximo auto</span></>}
        description="¿Tienes dudas sobre un auto, financiamiento o servicio? Estamos en Guadalajara y respondemos rápido."
      />

      <section className="py-14 md:py-20">
        <div className="am-container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Información */}
          <div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noopener noreferrer" : undefined}
                  className="am-card flex items-center gap-4 p-5 transition-colors hover:border-accent/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-subtle">{it.label}</span>
                    <span className="font-semibold">{it.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="am-card mt-3 flex items-start gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-subtle">Ubicación</span>
                <span className="font-semibold">{SITE.contact.address}</span>
              </span>
            </div>
            <div className="am-card mt-3 flex items-start gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                <ClockIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-subtle">Horario</span>
                <span className="font-semibold">{SITE.contact.hours}</span>
              </span>
            </div>

            {/* Mapa placeholder */}
            <div className="am-card relative mt-3 flex aspect-[16/9] items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#1b2330_0%,#0b1017_70%)]" />
              <div className="relative text-center">
                <MapPinIcon className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-2 text-sm text-muted">Mapa de ubicación (placeholder)</p>
                <p className="text-xs text-subtle">Inserta aquí un iframe de Google Maps.</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <LinkButton href={whatsappUrl()} external variant="whatsapp">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </LinkButton>
              <LinkButton href={telUrl()} external variant="secondary">
                <PhoneIcon className="h-4 w-4" /> Llamar
              </LinkButton>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">Envíanos un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
