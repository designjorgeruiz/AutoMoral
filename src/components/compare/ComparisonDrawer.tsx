"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCompare } from "./CompareContext";
import { CloseIcon, ArrowRightIcon } from "@/components/icons";
import { formatPrice, formatMileage, formatYear, cn } from "@/lib/utils";

const ROWS: { label: string; get: (v: import("@/lib/types").Vehicle) => string }[] = [
  { label: "Precio", get: (v) => formatPrice(v.price) },
  { label: "Año", get: (v) => formatYear(v.year) },
  { label: "Kilometraje", get: (v) => formatMileage(v.mileage) },
  { label: "Tipo", get: (v) => v.type },
  { label: "Condición", get: (v) => v.condition },
  { label: "Transmisión", get: (v) => v.transmission },
  { label: "Combustible", get: (v) => v.fuel },
  { label: "Motor", get: (v) => v.engine ?? "—" },
];

export function ComparisonDrawer() {
  const { items, isOpen, remove, clear, closeDrawer } = useCompare();
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0 || !isOpen) return null;

  return (
    <>
      {/* Tabla comparativa expandida */}
      {expanded && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          />
          <div className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-auto rounded-t-2xl border border-border-base bg-background p-5 sm:rounded-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Comparar vehículos</h3>
              <button
                onClick={() => setExpanded(false)}
                aria-label="Cerrar comparación"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="w-28 p-2 text-left text-subtle" />
                    {items.map((v) => (
                      <th key={v.id} className="p-2 text-left align-bottom">
                        <div className="relative mb-2 aspect-[4/3] overflow-hidden rounded-lg bg-surface-2">
                          <Image src={v.images[0]} alt="" fill sizes="160px" className="object-cover" />
                        </div>
                        <p className="font-semibold leading-tight">
                          {v.brand} {v.model}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr key={row.label} className={cn(i % 2 === 0 && "bg-white/[0.02]")}>
                      <td className="p-2 text-xs font-medium uppercase tracking-wide text-subtle">
                        {row.label}
                      </td>
                      {items.map((v) => (
                        <td key={v.id} className="p-2 font-medium text-foreground">
                          {row.get(v)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-2" />
                    {items.map((v) => (
                      <td key={v.id} className="p-2">
                        <Link
                          href={`/inventario/${v.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                        >
                          Ver <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Barra fija inferior */}
      <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-border-base bg-background/95 backdrop-blur-xl">
        <div className="am-container flex items-center gap-3 py-3">
          <div className="flex flex-1 items-center gap-2 overflow-x-auto am-no-scrollbar">
            <span className="hidden shrink-0 text-sm font-semibold text-muted sm:inline">
              Comparar ({items.length}):
            </span>
            {items.map((v) => (
              <span
                key={v.id}
                className="flex shrink-0 items-center gap-2 rounded-full border border-border-base bg-surface px-3 py-1.5 text-xs"
              >
                {v.brand} {v.model}
                <button
                  onClick={() => remove(v.id)}
                  aria-label={`Quitar ${v.brand} ${v.model}`}
                  className="text-subtle hover:text-foreground"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={() => setExpanded(true)}
            disabled={items.length < 2}
            className="shrink-0 rounded-full bg-accent/70 backdrop-blur-md border border-accent/50 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent/85 hover:border-accent/70 shadow-[0_8px_28px_-8px_rgba(28,142,240,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] disabled:opacity-40"
          >
            Comparar
          </button>
          <button
            onClick={clear}
            className="shrink-0 rounded-full px-3 py-2 text-sm text-subtle hover:text-foreground"
          >
            Limpiar
          </button>
          <button
            onClick={closeDrawer}
            aria-label="Ocultar barra de comparación"
            className="shrink-0 text-subtle hover:text-foreground"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}
