import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

const SERVICES = [
  "Diagnóstico computarizado",
  "Mantenimiento preventivo",
  "Afinación y frenos",
  "Suspensión y dirección",
  "Reparación de motor",
  "Servicio eléctrico",
];

export function RepairServiceSection() {
  return (
    <section className="bg-background-soft py-16 md:py-24">
      <div className="am-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Servicio y reparación"
            title="Mecánica general que sí da confianza"
            description="Mantén tu auto en óptimas condiciones con un servicio claro: te explicamos qué necesita y cuánto cuesta antes de empezar."
          />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-sm text-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LinkButton href="/servicio" size="lg">
              Agenda tu servicio
              <ArrowRightIcon className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>

        <div className="am-card relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#1b2330_0%,#0b1017_70%)]" />
          <div className="am-glow absolute inset-0" />
          <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-subtle">
              Placeholder
            </span>
            <p className="mt-3 max-w-xs text-pretty text-muted">
              Imagen del taller / servicio mecánico. Reemplázala con una foto real
              en <code className="text-steel">/public/</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
