import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceGlyph, ArrowRightIcon } from "@/components/icons";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <Section soft id="servicios">
      <SectionHeading
        align="center"
        eyebrow="Todo en un solo lugar"
        title="Servicios Auto Moral"
        description="Desde encontrar tu próximo auto hasta mantenerlo impecable, te acompañamos en cada paso."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={s.href}
            className="group am-card relative flex flex-col gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <ServiceGlyph name={s.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{s.description}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent">
              Conocer más
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
