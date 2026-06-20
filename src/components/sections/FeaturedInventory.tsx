import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { ArrowRightIcon } from "@/components/icons";
import { getFeaturedVehicles } from "@/data/vehicles";

export function FeaturedInventory() {
  const vehicles = getFeaturedVehicles(6);

  return (
    <section className="py-16 md:py-24">
      <div className="am-container">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Inventario"
            title="Vehículos destacados"
            description="Explora autos nuevos y usados disponibles en Auto Moral MX, revisados y listos para estrenar."
          />
          <LinkButton href="/inventario" variant="secondary" className="shrink-0">
            Ver todo el inventario
            <ArrowRightIcon className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} priority={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
