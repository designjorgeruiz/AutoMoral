"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { VehicleCard } from "./VehicleCard";
import { LinkButton } from "@/components/ui/Button";
import { ChevronDownIcon, CloseIcon, SearchIcon, WhatsAppIcon } from "@/components/icons";
import { VEHICLES } from "@/data/vehicles";
import { BRANDS } from "@/data/brands";
import { VEHICLE_TYPES, BUDGET_RANGES } from "@/lib/navigation";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type SortKey = "recientes" | "populares" | "precio-asc" | "precio-desc" | "anio-desc";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "recientes", label: "Más recientes" },
  { key: "populares", label: "Más populares" },
  { key: "precio-asc", label: "Precio: menor a mayor" },
  { key: "precio-desc", label: "Precio: mayor a menor" },
  { key: "anio-desc", label: "Año: más nuevo" },
];

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border-soft py-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-subtle">{title}</h3>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-1 text-sm text-muted hover:text-foreground">
      <span
        className={cn(
          "flex h-4.5 w-4.5 items-center justify-center rounded border transition-colors",
          checked ? "border-accent bg-accent" : "border-border-base bg-surface-2",
        )}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );
}

export function InventoryView() {
  const params = useSearchParams();

  const [brands, setBrands] = useState<string[]>(
    params.get("brand") ? [params.get("brand") as string] : [],
  );
  const [types, setTypes] = useState<string[]>(
    params.get("type") ? [params.get("type") as string] : [],
  );
  const [conditions, setConditions] = useState<string[]>([]);
  const [budgetIdx, setBudgetIdx] = useState<string>(params.get("budget") ?? "");
  const [year, setYear] = useState<string>(params.get("year") ?? "");
  const [sort, setSort] = useState<SortKey>("recientes");
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  function clearAll() {
    setBrands([]);
    setTypes([]);
    setConditions([]);
    setBudgetIdx("");
    setYear("");
  }

  const filtered = useMemo(() => {
    const budget = budgetIdx !== "" ? BUDGET_RANGES[Number(budgetIdx)] : null;
    const result = VEHICLES.filter((v) => {
      if (brands.length && !brands.includes(v.brand)) return false;
      if (types.length && !types.includes(v.type)) return false;
      if (conditions.length && !conditions.includes(v.condition)) return false;
      if (year && v.year !== Number(year)) return false;
      if (budget && (v.price < budget.min || v.price > budget.max)) return false;
      return true;
    });

    result.sort((a, b) => {
      switch (sort) {
        case "precio-asc": return a.price - b.price;
        case "precio-desc": return b.price - a.price;
        case "anio-desc": return b.year - a.year;
        case "populares": return Number(b.popular) - Number(a.popular);
        default: return Number(b.recent) - Number(a.recent);
      }
    });
    return result;
  }, [brands, types, conditions, budgetIdx, year, sort]);

  const activeCount = brands.length + types.length + conditions.length + (budgetIdx ? 1 : 0) + (year ? 1 : 0);

  const filtersPanel = (
    <div>
      <div className="flex items-center justify-between pb-2">
        <span className="text-sm font-semibold">Filtros</span>
        {activeCount > 0 && (
          <button onClick={clearAll} className="text-xs font-semibold text-accent hover:underline">
            Limpiar ({activeCount})
          </button>
        )}
      </div>
      <FilterGroup title="Marca">
        {BRANDS.map((b) => (
          <Check key={b.name} label={b.name} checked={brands.includes(b.name)} onChange={() => toggle(brands, setBrands, b.name)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Tipo">
        {VEHICLE_TYPES.map((t) => (
          <Check key={t} label={t} checked={types.includes(t)} onChange={() => toggle(types, setTypes, t)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Condición">
        {["Nuevo", "Usado"].map((c) => (
          <Check key={c} label={c} checked={conditions.includes(c)} onChange={() => toggle(conditions, setConditions, c)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Presupuesto">
        <div className="relative">
          <select
            value={budgetIdx}
            onChange={(e) => setBudgetIdx(e.target.value)}
            aria-label="Presupuesto"
            className="h-11 w-full appearance-none rounded-xl border border-border-base bg-surface-2 pl-3 pr-9 text-sm focus:border-accent focus:outline-none"
          >
            <option value="">Sin límite</option>
            {BUDGET_RANGES.map((r, i) => (
              <option key={r.label} value={i}>{r.label}</option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
        </div>
      </FilterGroup>
    </div>
  );

  return (
    <section className="py-10 md:py-14">
      <div className="am-container">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Filtros escritorio */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 am-card p-4">{filtersPanel}</div>
          </aside>

          <div>
            {/* Barra de control */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted">
                <span className="font-semibold text-foreground">{filtered.length}</span> vehículos
                {activeCount > 0 ? " encontrados" : " disponibles"}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-border-base px-4 py-2 text-sm font-medium lg:hidden"
                >
                  Filtros {activeCount > 0 && <span className="rounded-full bg-accent px-1.5 text-xs text-white">{activeCount}</span>}
                </button>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    aria-label="Ordenar por"
                    className="h-10 appearance-none rounded-full border border-border-base bg-surface-2 pl-4 pr-9 text-sm focus:border-accent focus:outline-none"
                  >
                    {SORTS.map((s) => (
                      <option key={s.key} value={s.key}>{s.label}</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
                </div>
              </div>
            </div>

            {/* Grid o estado vacío */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((v, i) => (
                  <VehicleCard key={v.id} vehicle={v} priority={i < 3} />
                ))}
              </div>
            ) : (
              <div className="am-card flex flex-col items-center px-6 py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-2 text-subtle">
                  <SearchIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">No encontramos autos con esos filtros</h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Prueba ajustando los filtros o cuéntanos qué buscas y te avisamos cuando llegue.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button onClick={clearAll} className="rounded-full bg-surface-2 px-5 py-2.5 text-sm font-semibold hover:bg-surface">
                    Limpiar filtros
                  </button>
                  <LinkButton href={whatsappUrl("Hola, busco un auto que no veo en su inventario.")} external variant="whatsapp" size="sm">
                    <WhatsAppIcon className="h-4 w-4" />
                    Dinos qué buscas
                  </LinkButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Drawer de filtros móvil */}
      <div className={cn("fixed inset-0 z-[60] lg:hidden", drawerOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn("absolute inset-0 bg-black/60 transition-opacity", drawerOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-background shadow-2xl transition-transform",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Filtros"
        >
          <div className="flex items-center justify-between border-b border-border-base px-4 py-4">
            <span className="font-semibold">Filtros</span>
            <button onClick={() => setDrawerOpen(false)} aria-label="Cerrar filtros" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10">
              <CloseIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4">{filtersPanel}</div>
          <div className="border-t border-border-base p-4">
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-full rounded-full bg-accent/70 backdrop-blur-md border border-accent/50 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/85 hover:border-accent/70 shadow-[0_8px_28px_-8px_rgba(28,142,240,0.55),inset_0_1px_0_rgba(255,255,255,0.22)]"
            >
              Ver {filtered.length} vehículos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
