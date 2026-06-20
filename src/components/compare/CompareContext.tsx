"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Vehicle } from "@/lib/types";

const MAX_COMPARE = 3;

interface CompareState {
  items: Vehicle[];
  isOpen: boolean;
  max: number;
  toggle: (v: Vehicle) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CompareCtx = createContext<CompareState | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Vehicle[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback((v: Vehicle) => {
    setItems((prev) => {
      const exists = prev.some((p) => p.id === v.id);
      if (exists) return prev.filter((p) => p.id !== v.id);
      if (prev.length >= MAX_COMPARE) return prev; // límite alcanzado
      const next = [...prev, v];
      // Abre automáticamente la barra al añadir el primero.
      if (prev.length === 0) setIsOpen(true);
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clear = useCallback(() => {
    setItems([]);
    setIsOpen(false);
  }, []);

  const has = useCallback((id: string) => items.some((p) => p.id === id), [items]);

  const value = useMemo<CompareState>(
    () => ({
      items,
      isOpen,
      max: MAX_COMPARE,
      toggle,
      remove,
      clear,
      has,
      openDrawer: () => setIsOpen(true),
      closeDrawer: () => setIsOpen(false),
    }),
    [items, isOpen, toggle, remove, clear, has],
  );

  return <CompareCtx.Provider value={value}>{children}</CompareCtx.Provider>;
}

export function useCompare(): CompareState {
  const ctx = useContext(CompareCtx);
  if (!ctx) throw new Error("useCompare debe usarse dentro de <CompareProvider>");
  return ctx;
}
