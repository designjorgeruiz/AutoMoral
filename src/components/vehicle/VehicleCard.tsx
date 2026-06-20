"use client";

import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/lib/types";
import { CalendarIcon, GaugeIcon, GearIcon, CheckIcon, ArrowRightIcon, StarIcon } from "@/components/icons";
import { formatMileage, formatPrice, formatYear, cn } from "@/lib/utils";
import { useCompare } from "@/components/compare/CompareContext";

export function VehicleCard({ vehicle, priority = false }: { vehicle: Vehicle; priority?: boolean }) {
  const { toggle, has, items, max } = useCompare();
  const selected = has(vehicle.id);
  const disabled = !selected && items.length >= max;

  return (
    <article className="group am-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-steel-dim/70 hover:shadow-[var(--am-shadow)]">
      <Link href={`/inventario/${vehicle.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
          <Image
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model} ${formatYear(vehicle.year)}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Info bar */}
      <div className="flex items-center justify-between border-t border-border-soft bg-surface-2/50 px-4 py-2">
        <span className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.12em]",
          vehicle.condition === "Nuevo" ? "text-accent" : "text-muted"
        )}>
          {vehicle.condition}
        </span>
        {vehicle.featured && (
          <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
            <StarIcon className="h-3 w-3" /> Destacado
          </span>
        )}
        {vehicle.recent && !vehicle.featured && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-dim">
            Reciente
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-subtle">
              {vehicle.brand} · {vehicle.type}
            </p>
            <h3 className="truncate text-base font-semibold leading-tight">
              <Link href={`/inventario/${vehicle.slug}`} className="hover:text-accent">
                {vehicle.model} {vehicle.version ?? ""}
              </Link>
            </h3>
          </div>
        </div>

        <p className="mt-2 text-xl font-bold am-steel-text">{formatPrice(vehicle.price)}</p>

        <ul className="mt-3 grid grid-cols-3 gap-2 text-xs text-muted">
          <li className="flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5 text-subtle" /> {formatYear(vehicle.year)}
          </li>
          <li className="flex items-center gap-1.5">
            <GaugeIcon className="h-3.5 w-3.5 text-subtle" /> {formatMileage(vehicle.mileage)}
          </li>
          <li className="flex items-center gap-1.5">
            <GearIcon className="h-3.5 w-3.5 text-subtle" /> {vehicle.transmission}
          </li>
        </ul>

        <div className="mt-4 flex items-center gap-2 border-t border-border-soft pt-3">
          <Link
            href={`/inventario/${vehicle.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-surface-2 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-white"
          >
            Ver detalles
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => toggle(vehicle)}
            disabled={disabled}
            aria-pressed={selected}
            title={disabled ? `Máximo ${max} autos para comparar` : "Comparar"}
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors",
              selected
                ? "border-accent bg-accent/15 text-accent"
                : "border-border-base text-muted hover:border-steel-dim hover:text-foreground",
              disabled && "cursor-not-allowed opacity-40",
            )}
          >
            {selected ? <CheckIcon className="h-4 w-4" /> : null}
            Comparar
          </button>
        </div>
      </div>
    </article>
  );
}
