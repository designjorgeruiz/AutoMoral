import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PrequalForm } from "@/components/forms/PrequalForm";
import { FAQ } from "@/components/sections/FAQ";
import { CheckIcon } from "@/components/icons";
import type { FaqItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Financiamiento automotriz",
  description:
    "Financia tu próximo auto con Auto Moral MX. Precalifica sin compromiso y recibe opciones de crédito a tu medida con apoyo en trámites.",
};

const OPTIONS = [
  { t: "Crédito de contado diferido", d: "Adquiere tu auto pagando en plazos cómodos." },
  { t: "Enganche flexible", d: "Ajustamos el enganche según tu capacidad de pago." },
  { t: "Plazos a tu medida", d: "Esquemas desde 12 hasta 60 meses según el caso." },
  { t: "Apoyo en trámites", d: "Te acompañamos con la documentación y la gestoría." },
];

const FINANCE_FAQS: FaqItem[] = [
  { question: "¿Qué necesito para precalificar?", answer: "Datos básicos de contacto e ingreso aproximado. Con eso un asesor revisa las opciones disponibles para ti sin compromiso." },
  { question: "¿La precalificación afecta mi historial?", answer: "No. La precalificación es informativa y no representa una consulta formal ni una oferta de crédito." },
  { question: "¿Puedo financiar un auto usado?", answer: "Sí. Manejamos opciones para autos nuevos y usados de nuestro inventario." },
  { question: "¿Cuánto tarda la respuesta?", answer: "Normalmente te contactamos el mismo día o al siguiente día hábil tras enviar tu solicitud." },
];

export default function FinanciamientoPage() {
  return (
    <>
      <PageHero
        breadcrumb="Financiamiento"
        eyebrow="Financiamiento"
        title={<><span className="am-steel-text">Estrena auto con </span><span className="text-accent">crédito a tu medida</span></>}
        description="Precalifica en minutos, sin compromiso, y deja que un asesor te muestre la mejor opción para ti."
      />

      <section className="py-14 md:py-20">
        <div className="am-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Opciones de crédito</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {OPTIONS.map((o) => (
                <div key={o.t} className="am-card p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/12 text-accent">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-semibold">{o.t}</h3>
                  <p className="mt-1 text-sm text-muted">{o.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border-base bg-surface p-6">
              <h3 className="font-semibold">Beneficios</h3>
              <ul className="mt-4 space-y-2.5">
                {["Sin costo por precalificar", "Atención personalizada", "Respuesta rápida", "Acompañamiento en todo el proceso"].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Precalifícate</h2>
            <p className="mb-5 text-sm text-muted">Llena el formulario y un asesor te contacta con tus opciones.</p>
            <PrequalForm />
          </div>
        </div>
      </section>

      <FAQ items={FINANCE_FAQS} />
    </>
  );
}
