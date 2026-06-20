import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceForm } from "@/components/forms/ServiceForm";
import { ServiceGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "Servicio y reparación de autos",
  description:
    "Mecánica general en Auto Moral MX: diagnóstico, mantenimiento preventivo, reparaciones y más. Agenda tu servicio con un presupuesto claro.",
};

const SERVICES = [
  { t: "Mecánica general", d: "Reparación integral con refacciones de calidad y garantía." },
  { t: "Laminería y pintura", d: "Reparación de carrocería, hojalatería y pintura profesional." },
  { t: "Restauración", d: "Devolvemos tu auto a su mejor estado, dentro y fuera." },
  { t: "Piezas de colisión", d: "Reemplazo de piezas tras un choque, con refacciones confiables." },
  { t: "Diagnóstico", d: "Escaneo computarizado para detectar fallas con precisión." },
  { t: "Direcciones asistidas", d: "Especialistas en reparación de dirección hidráulica y eléctrica." },
];

export default function ServicioPage() {
  return (
    <>
      <PageHero
        breadcrumb="Servicio"
        eyebrow="Servicio y reparación"
        title={<><span className="am-steel-text">Mecánica general </span><span className="text-accent">de confianza</span></>}
        description="Cuidamos tu auto con transparencia: te explicamos qué necesita y cuánto cuesta antes de empezar."
      />

      <section className="py-14 md:py-20">
        <div className="am-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Qué hacemos</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <div key={s.t} className="am-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/12 text-accent">
                    <ServiceGlyph name="repair" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border-base bg-surface p-6">
              <h3 className="font-semibold">¿Por qué con nosotros?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Presupuesto claro antes de iniciar, refacciones de calidad y personal
                capacitado. Sin sorpresas en la cuenta final.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Agenda tu servicio</h2>
            <p className="mb-5 text-sm text-muted">Elige fecha, horario y cuéntanos qué necesita tu auto.</p>
            <ServiceForm />
          </div>
        </div>
      </section>
    </>
  );
}
