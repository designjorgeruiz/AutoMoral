"use client";

import { useState } from "react";
import { TestDriveForm } from "@/components/forms/TestDriveForm";
import { OfferForm } from "@/components/forms/OfferForm";
import { cn } from "@/lib/utils";

export function VehicleContactTabs({
  slug,
  vehicleLabel,
}: {
  slug: string;
  vehicleLabel: string;
}) {
  const [tab, setTab] = useState<"prueba" | "oferta">("prueba");

  return (
    <div id="contacto-vehiculo">
      <div className="mb-4 flex items-center gap-1 rounded-full border border-border-base bg-surface p-1">
        <button
          onClick={() => setTab("prueba")}
          className={cn(
            "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
            tab === "prueba" ? "bg-accent text-white" : "text-muted hover:text-foreground",
          )}
        >
          Agendar prueba
        </button>
        <button
          onClick={() => setTab("oferta")}
          className={cn(
            "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
            tab === "oferta" ? "bg-accent text-white" : "text-muted hover:text-foreground",
          )}
        >
          Hacer oferta
        </button>
      </div>
      {tab === "prueba" ? <TestDriveForm defaultVehicle={slug} /> : <OfferForm vehicleLabel={vehicleLabel} />}
    </div>
  );
}
