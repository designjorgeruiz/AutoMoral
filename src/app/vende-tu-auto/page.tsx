import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SellCarForm } from "@/components/forms/SellCarForm";
import { LinkButton } from "@/components/ui/Button";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vende tu auto — publica gratis",
  description:
    "Publica tu auto gratis en Auto Moral MX y conecta con compradores reales. Proceso simple, exposición real y apoyo en cada paso.",
};

const BENEFITS = [
  "Publicar es 100% gratis",
  "Llega a compradores reales en México",
  "Te ayudamos con la documentación",
  "Soporte por WhatsApp en todo el proceso",
];

const STEPS = [
  { t: "Llena tus datos", d: "Comparte la información y fotos de tu auto en minutos." },
  { t: "Te contactamos", d: "Validamos los datos y publicamos tu auto en nuestros canales." },
  { t: "Recibe interesados", d: "Atiende ofertas y agenda pruebas de manejo." },
  { t: "Cierra la venta", d: "Concretamos de forma segura, con trámites en regla." },
];

export default function VendeTuAutoPage() {
  return (
    <>
      <PageHero
        breadcrumb="Vende tu auto"
        eyebrow="Vende tu auto"
        title={<><span className="am-steel-text">Vende tu auto </span><span className="text-accent">sin complicaciones</span></>}
        description="Publica gratis, recibe compradores interesados y cierra la venta con el respaldo de Auto Moral MX."
      />

      <section className="py-14 md:py-20">
        <div className="am-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">¿Por qué vender con nosotros?</h2>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Proceso paso a paso</h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 font-bold text-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.t}</h3>
                    <p className="text-sm text-muted">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-border-base bg-surface p-5">
              <p className="text-sm text-muted">¿Prefieres atención directa?</p>
              <LinkButton
                href={whatsappUrl("Hola, quiero vender mi auto con Auto Moral MX.")}
                external
                variant="whatsapp"
                className="mt-3"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Vender por WhatsApp
              </LinkButton>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Vende tu auto aquí</h2>
            <p className="mb-5 text-sm text-muted">Crea tu cuenta y publica tu auto gratis.</p>
            <SellCarForm />
          </div>
        </div>
      </section>
    </>
  );
}
