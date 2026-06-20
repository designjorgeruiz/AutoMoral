import { Section, SectionHeading } from "@/components/ui/Section";
import { ShieldIcon, CheckIcon, GaugeIcon, WhatsAppIcon } from "@/components/icons";

const REASONS = [
  {
    icon: ShieldIcon,
    title: "Compra y venta segura",
    text: "Vehículos verificados y procesos transparentes para que decidas con tranquilidad.",
  },
  {
    icon: GaugeIcon,
    title: "Revisión mecánica",
    text: "Cada auto pasa por una inspección antes de publicarse. Sabes lo que llevas.",
  },
  {
    icon: WhatsAppIcon,
    title: "Atención cercana",
    text: "Respuesta rápida por WhatsApp y teléfono. Aquí siempre hay alguien que te ayuda.",
  },
  {
    icon: CheckIcon,
    title: "Todo en un solo lugar",
    text: "Compra, venta, consignación, financiamiento, gestoría y servicio mecánico.",
  },
];

export function WhyAutoMoral() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Por qué Auto Moral"
        title="La forma confiable de mover tu próximo auto"
        description="Más que un marketplace: un equipo que te acompaña antes, durante y después de la compra o venta."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r) => (
          <div key={r.title} className="am-card p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <r.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
