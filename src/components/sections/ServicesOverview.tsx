import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceGlyph, CheckIcon, ArrowRightIcon } from "@/components/icons";
import { SERVICE_GROUPS } from "@/data/services";

export function ServicesOverview() {
  return (
    <Section soft id="servicios">
      <SectionHeading
        align="center"
        eyebrow="Todo en un solo lugar"
        title="Lo que hacemos por ti"
        description="Compra, vende, financia, repara y haz tus trámites. Un solo equipo para todo tu auto."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICE_GROUPS.map((g) => (
          <Link
            key={g.title}
            href={g.href}
            className="group am-card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/12 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <ServiceGlyph name={g.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
            <ul className="mt-3 flex-1 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm text-muted">
                  <CheckIcon className="h-4 w-4 shrink-0 text-accent/80" />
                  {it}
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Ver más
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
