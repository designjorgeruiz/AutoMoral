import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Consignación de autos",
  description:
    "Deja tu auto en consignación con Auto Moral MX: mayor exposición, atención de interesados y una venta segura. Tú te enfocas en recibir tu pago.",
};

const BENEFITS = [
  { t: "Mayor exposición", d: "Tu auto aparece en nuestros canales y llega a más compradores." },
  { t: "Nosotros lo atendemos", d: "Filtramos interesados, mostramos el auto y negociamos por ti." },
  { t: "Venta más segura", d: "Acompañamiento en trámites, pagos y documentación." },
  { t: "Sin perder tu tiempo", d: "Olvídate de llamadas y citas: tú sólo recibes tu pago." },
];

const STEPS = [
  { t: "Evaluación", d: "Revisamos tu auto y acordamos un precio de venta competitivo." },
  { t: "Preparación", d: "Lo preparamos y publicamos con buenas fotos y descripción." },
  { t: "Promoción y atención", d: "Atraemos compradores y gestionamos pruebas de manejo." },
  { t: "Cierre y pago", d: "Concretamos la venta de forma segura y te entregamos tu dinero." },
];

export default function ConsignacionPage() {
  return (
    <>
      <PageHero
        breadcrumb="Consignación"
        eyebrow="Consignación"
        title={<><span className="am-steel-text">Deja que vendamos </span><span className="text-accent">tu auto por ti</span></>}
        description="Tú entregas el auto, nosotros lo exponemos, atendemos a los interesados y cerramos la venta de forma segura."
      />

      <section className="py-14 md:py-20">
        <div className="am-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Beneficios</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b.t} className="am-card p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/12 text-accent">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-semibold">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted">{b.d}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Cómo funciona</h2>
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
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Solicita tu consignación</h2>
            <p className="mb-5 text-sm text-muted">Déjanos tus datos y un asesor te explica todo el proceso.</p>
            <ContactForm
              cta="Solicitar consignación"
              messageLabel="Cuéntanos sobre tu auto"
              messagePlaceholder="Marca, modelo, año, kilometraje y precio esperado…"
            />
          </div>
        </div>
      </section>
    </>
  );
}
