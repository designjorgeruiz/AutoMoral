import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

const PERKS = [
  "Mensualidades a tu medida",
  "Precalificación sin compromiso",
  "Apoyo con gestoría y trámites",
];

export function FinanceCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="am-container">
        <div className="relative overflow-hidden rounded-3xl border border-border-base bg-[radial-gradient(120%_140%_at_0%_0%,#16314f_0%,#0e131b_55%)] p-8 md:p-12">
          <div className="am-glow absolute inset-0 opacity-70" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <Badge tone="accent">Financiamiento</Badge>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Estrena tu auto con la <span className="text-accent">mensualidad correcta</span>
              </h2>
              <p className="mt-4 max-w-lg text-muted">
                Facilitamos la compra de tu próximo auto con opciones de crédito.
                Precalifícate en minutos y deja que un asesor te guíe.
              </p>
              <ul className="mt-6 space-y-2.5">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/financiamiento" size="lg">
                  Solicitar financiamiento
                  <ArrowRightIcon className="h-4 w-4" />
                </LinkButton>
                <LinkButton href="/inventario" variant="outline" size="lg">
                  Ver autos
                </LinkButton>
              </div>
            </div>

            {/* Tarjeta de ejemplo de mensualidad */}
            <div className="am-card bg-surface/80 p-6 backdrop-blur-sm md:ml-auto md:max-w-sm">
              <p className="text-sm text-subtle">Ejemplo estimado*</p>
              <p className="mt-1 text-sm text-muted">VW Jetta 2020 · $319,000</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-bold am-steel-text">$6,490</span>
                <span className="pb-1 text-sm text-muted">/ mes</span>
              </div>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-subtle">Enganche</dt>
                  <dd className="font-medium">20%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-subtle">Plazo</dt>
                  <dd className="font-medium">48 meses</dd>
                </div>
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-subtle">
                *Cálculo informativo. La mensualidad real depende de tu perfil y la
                institución financiera. No constituye una oferta de crédito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
