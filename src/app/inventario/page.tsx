import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { InventoryView } from "@/components/vehicle/InventoryView";

export const metadata: Metadata = {
  title: "Inventario de autos nuevos y usados",
  description:
    "Explora el inventario de Auto Moral MX: autos nuevos y usados con filtros por marca, tipo, año y presupuesto. Compara y agenda tu prueba de manejo.",
};

export default function InventarioPage() {
  return (
    <>
      <PageHero
        breadcrumb="Inventario"
        eyebrow="Inventario"
        title={<><span className="am-steel-text">Encuentra tu </span><span className="text-accent">próximo auto</span></>}
        description="Autos nuevos y usados revisados, con filtros claros para que encuentres justo lo que buscas."
      />
      <Suspense fallback={<div className="am-container py-20 text-center text-muted">Cargando inventario…</div>}>
        <InventoryView />
      </Suspense>
    </>
  );
}
