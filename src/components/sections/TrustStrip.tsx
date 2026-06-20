import { ShieldIcon, WhatsAppIcon, GaugeIcon } from "@/components/icons";

const ITEMS = [
  { icon: ShieldIcon, title: "Compra y venta segura", text: "Autos revisados y trato transparente." },
  { icon: GaugeIcon, title: "Revisión mecánica", text: "Cada auto se inspecciona antes de venderse." },
  { icon: WhatsAppIcon, title: "Atención cercana", text: "Te respondemos rápido por WhatsApp." },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border-base bg-background-soft">
      <div className="am-container grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
        {ITEMS.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <it.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{it.title}</p>
              <p className="text-xs text-muted">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
