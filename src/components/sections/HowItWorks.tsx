"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type FlowKey = "comprar" | "vender" | "consignar";

const FLOWS: Record<FlowKey, { label: string; steps: { t: string; d: string }[] }> = {
  comprar: {
    label: "Comprar",
    steps: [
      { t: "Explora el inventario", d: "Filtra por marca, tipo, año y presupuesto hasta encontrar tu auto ideal." },
      { t: "Agenda prueba de manejo", d: "Reserva un horario y maneja el auto antes de decidir." },
      { t: "Financia o paga de contado", d: "Te ayudamos con opciones de crédito y con toda la gestoría." },
      { t: "Llévate tu auto", d: "Cerramos la compra de forma segura y con la documentación en regla." },
    ],
  },
  vender: {
    label: "Vender",
    steps: [
      { t: "Publica gratis", d: "Crea tu cuenta y sube los datos y fotos de tu auto en minutos." },
      { t: "Recibe interesados", d: "Conecta con compradores reales y recibe ofertas." },
      { t: "Agenda y negocia", d: "Coordina pruebas de manejo y elige la mejor oferta." },
      { t: "Cierra la venta", d: "Te apoyamos con trámites y documentación para una venta segura." },
    ],
  },
  consignar: {
    label: "Consignar",
    steps: [
      { t: "Entrega tu auto", d: "Lo evaluamos, acordamos precio y lo preparamos para venta." },
      { t: "Lo publicamos por ti", d: "Tu auto aparece en nuestros canales con mayor exposición." },
      { t: "Nosotros atendemos", d: "Filtramos interesados, mostramos el auto y negociamos." },
      { t: "Recibe tu pago", d: "Cerramos la venta de forma segura y te entregamos tu dinero." },
    ],
  },
};

export function HowItWorks() {
  const [active, setActive] = useState<FlowKey>("comprar");
  const flow = FLOWS[active];

  return (
    <section className="py-16 md:py-24">
      <div className="am-container">
        <SectionHeading
          align="center"
          eyebrow="Cómo funciona"
          title="Comprar, vender o consignar es muy simple"
          description="Elige lo que quieres hacer y mira lo fácil que es con Auto Moral MX."
        />

        <div className="mx-auto mt-8 flex max-w-md items-center gap-1 rounded-full border border-border-base bg-surface p-1">
          {(Object.keys(FLOWS) as FlowKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                active === key ? "bg-accent text-white" : "text-muted hover:text-foreground",
              )}
              aria-pressed={active === key}
            >
              {FLOWS[key].label}
            </button>
          ))}
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flow.steps.map((step, i) => (
            <li key={step.t} className="am-card relative p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/12 text-base font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
