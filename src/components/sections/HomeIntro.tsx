import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { ArrowRightIcon, ShieldIcon, StarIcon } from "@/components/icons";
import { VehicleSearchBar } from "./VehicleSearchBar";

export function HomeIntro() {
  return (
    <Section className="pt-0" soft>
      <div className="am-fade-up flex flex-col items-center py-10 text-center md:py-16">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge tone="accent">
            <ShieldIcon className="h-3.5 w-3.5" /> Compra y venta con confianza
          </Badge>
          <Badge tone="steel">
            <StarIcon className="h-3 w-3 text-accent" /> +1,000 clientes satisfechos
          </Badge>
        </div>

        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
          <span className="am-steel-text">Compra, vende o repara tu auto </span>
          <span className="text-accent">con confianza.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
          Encuentra vehículos seleccionados, publica tu auto gratis, agenda una
          prueba de manejo o recibe apoyo con financiamiento, gestoría y mecánica
          general. Todo en un solo lugar.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <LinkButton href="/inventario" size="lg" className="w-full sm:w-auto">
            Ver inventario
            <ArrowRightIcon className="h-4 w-4" />
          </LinkButton>
          <LinkButton
            href="/vende-tu-auto"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Vender mi auto
          </LinkButton>
        </div>

        <div className="mt-12 w-full max-w-5xl">
          <VehicleSearchBar />
        </div>
      </div>
    </Section>
  );
}
