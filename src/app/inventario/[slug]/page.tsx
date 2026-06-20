import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getVehicleBySlug, getAllSlugs, getSimilarVehicles } from "@/data/vehicles";
import { VehicleGallery } from "@/components/vehicle/VehicleGallery";
import { VehicleContactTabs } from "@/components/vehicle/VehicleContactTabs";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppIcon, PhoneIcon, CheckIcon } from "@/components/icons";
import { formatPrice, formatMileage, formatYear, estimateMonthlyPayment } from "@/lib/utils";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVehicleBySlug(slug);
  if (!v) return { title: "Vehículo no encontrado" };
  const title = `${v.brand} ${v.model}${v.version ? ` ${v.version}` : ""}${v.year > 0 ? ` ${v.year}` : ""}`;
  return {
    title: `${title} — ${formatPrice(v.price)}`,
    description: `${title} ${v.condition.toLowerCase()} en venta. ${v.description}`,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const label = `${vehicle.brand} ${vehicle.model}${vehicle.version ? ` ${vehicle.version}` : ""}${vehicle.year > 0 ? ` ${vehicle.year}` : ""}`;
  const similar = getSimilarVehicles(vehicle);
  const monthly = estimateMonthlyPayment(vehicle.price);
  const hasPrice = vehicle.price > 0;

  const specs: { label: string; value: string }[] = [
    { label: "Año", value: formatYear(vehicle.year) },
    { label: "Kilometraje", value: formatMileage(vehicle.mileage) },
    { label: "Tipo", value: vehicle.type },
    { label: "Transmisión", value: vehicle.transmission },
    { label: "Combustible", value: vehicle.fuel },
    { label: "Motor", value: vehicle.engine ?? "—" },
    { label: "Puertas", value: vehicle.doors ? String(vehicle.doors) : "—" },
    { label: "Color", value: vehicle.color ?? "—" },
    { label: "Condición", value: vehicle.condition },
    { label: "Ubicación", value: vehicle.location },
  ];

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: label,
    brand: { "@type": "Brand", name: vehicle.brand },
    model: vehicle.model,
    ...(vehicle.year > 0 ? { vehicleModelDate: vehicle.year } : {}),
    ...(vehicle.mileage > 0 ? { mileageFromOdometer: { "@type": "QuantitativeValue", value: vehicle.mileage, unitCode: "KMT" } } : {}),
    fuelType: vehicle.fuel,
    vehicleTransmission: vehicle.transmission,
    offers: {
      "@type": "Offer",
      ...(hasPrice ? { price: vehicle.price } : {}),
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: SITE.name },
    },
  };

  return (
    <article className="pt-16 md:pt-18">
      <JsonLd data={vehicleSchema} />

      <div className="am-container py-8">
        <nav className="mb-6 text-sm text-subtle" aria-label="Ruta">
          <Link href="/" className="hover:text-foreground">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/inventario" className="hover:text-foreground">Inventario</Link>
          <span className="mx-2">/</span>
          <span className="text-muted">{label}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Columna principal */}
          <div>
            <VehicleGallery images={vehicle.images} alt={label} />

            <div className="mt-8">
              <h2 className="text-xl font-bold">Descripción</h2>
              <p className="mt-3 leading-relaxed text-muted">{vehicle.description}</p>

              {vehicle.highlights && vehicle.highlights.length > 0 && (
                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {vehicle.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-foreground">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Ficha técnica */}
            <div className="mt-8">
              <h2 className="text-xl font-bold">Ficha técnica</h2>
              <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-base bg-border-base sm:grid-cols-2">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between bg-surface px-4 py-3">
                    <dt className="text-sm text-subtle">{s.label}</dt>
                    <dd className="text-sm font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Sidebar sticky */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="am-card p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={vehicle.condition === "Nuevo" ? "new" : "used"}>{vehicle.condition}</Badge>
                {vehicle.featured && <Badge tone="accent">Destacado</Badge>}
              </div>
              <p className="mt-3 text-sm uppercase tracking-wide text-subtle">{vehicle.brand} · {vehicle.type}</p>
              <h1 className="text-2xl font-bold leading-tight">{vehicle.model} {vehicle.version ?? ""} <span className="text-muted">{formatYear(vehicle.year)}</span></h1>
              <p className="mt-4 text-3xl font-extrabold am-steel-text">{formatPrice(vehicle.price)}</p>

              {hasPrice ? (
                <div className="mt-3 rounded-xl bg-surface-2 px-4 py-3 text-sm">
                  <p className="text-muted">
                    Desde <span className="font-bold text-accent">{formatPrice(monthly)}</span> / mes*
                  </p>
                  <p className="mt-0.5 text-xs text-subtle">Estimado a 48 meses con 20% de enganche.</p>
                </div>
              ) : (
                <div className="mt-3 rounded-xl bg-surface-2 px-4 py-3 text-sm text-muted">
                  Confirma el precio actualizado por WhatsApp.
                </div>
              )}

              <div className="mt-5 space-y-2.5">
                <LinkButton
                  href={whatsappUrl(`Hola, me interesa el ${label} (${formatPrice(vehicle.price)}). ¿Sigue disponible?`)}
                  external
                  variant="whatsapp"
                  fullWidth
                  size="lg"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </LinkButton>
                <div className="grid grid-cols-2 gap-2.5">
                  <LinkButton href={telUrl()} external variant="secondary">
                    <PhoneIcon className="h-4 w-4" /> Llamar
                  </LinkButton>
                  <LinkButton href="#contacto-vehiculo" variant="outline">
                    Prueba de manejo
                  </LinkButton>
                </div>
              </div>
              {hasPrice && (
                <p className="mt-4 text-center text-xs text-subtle">
                  *Cálculo informativo, no es oferta de crédito.
                </p>
              )}
            </div>

            <div className="mt-6">
              <VehicleContactTabs slug={vehicle.slug} vehicleLabel={label} />
            </div>
          </aside>
        </div>
      </div>

      {/* Similares */}
      {similar.length > 0 && (
        <section className="border-t border-border-base py-16">
          <div className="am-container">
            <SectionHeading eyebrow="También te puede interesar" title="Autos similares" />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
