import { Section, SectionHeading } from "@/components/ui/Section";
import { StarIcon } from "@/components/icons";
import { TESTIMONIALS } from "@/data/services";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Testimonios"
        title="Lo que dicen nuestros clientes"
        description="Personas reales que compraron, vendieron o atendieron su auto con Auto Moral MX."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="am-card flex flex-col p-6">
            <div className="flex gap-0.5 text-accent" aria-label={`${t.rating} de 5 estrellas`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-border-soft pt-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-subtle">
                {t.city} · {t.context}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
