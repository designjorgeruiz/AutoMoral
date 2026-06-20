"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, SearchIcon } from "@/components/icons";
import { BRANDS } from "@/data/brands";
import { VEHICLE_TYPES, YEARS, BUDGET_RANGES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const cellSelect =
  "h-12 w-full appearance-none rounded-xl border border-border-base bg-surface-2 pl-4 pr-9 text-sm text-foreground focus:border-accent focus:outline-none";

function Cell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-subtle">
        {label}
      </span>
      <div className="relative">
        {children}
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
      </div>
    </label>
  );
}

export function VehicleSearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (brand) params.set("brand", brand);
    if (type) params.set("type", type);
    if (year) params.set("year", year);
    if (budget) params.set("budget", budget);
    router.push(`/inventario${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "am-card am-fade-up p-4 shadow-[var(--am-shadow)] md:p-5",
        !compact && "backdrop-blur-sm",
      )}
      aria-label="Buscador de autos"
    >
      {!compact && (
        <p className="mb-4 text-center text-sm font-semibold text-muted">
          Encuentra el auto ideal
        </p>
      )}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-[1fr_1fr_1fr_1.2fr_auto]">
        <Cell label="Marca">
          <select
            aria-label="Marca"
            className={cellSelect}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Todas</option>
            {BRANDS.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        </Cell>

        <Cell label="Tipo">
          <select
            aria-label="Tipo de auto"
            className={cellSelect}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Todos</option>
            {VEHICLE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Cell>

        <Cell label="Año">
          <select
            aria-label="Año"
            className={cellSelect}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Cualquiera</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </Cell>

        <Cell label="Presupuesto">
          <select
            aria-label="Presupuesto"
            className={cellSelect}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Sin límite</option>
            {BUDGET_RANGES.map((r, i) => (
              <option key={r.label} value={i}>
                {r.label}
              </option>
            ))}
          </select>
        </Cell>

        <div className="col-span-2 flex items-end lg:col-span-1">
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent/70 backdrop-blur-md border border-accent/50 px-5 font-semibold text-white transition-all hover:bg-accent/85 hover:border-accent/70 shadow-[0_8px_28px_-8px_rgba(28,142,240,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] lg:w-auto"
          >
            <SearchIcon className="h-4 w-4" />
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}
