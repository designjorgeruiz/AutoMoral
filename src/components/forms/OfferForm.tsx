"use client";

import { MockForm } from "./MockForm";
import { TextField } from "@/components/ui/Field";

export function OfferForm({ vehicleLabel }: { vehicleLabel?: string }) {
  return (
    <MockForm cta="Enviar oferta" successTitle="¡Oferta enviada!">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="of-nombre" name="nombre" label="Nombre" placeholder="Tu nombre" required autoComplete="name" />
        <TextField id="of-tel" name="telefono" label="Teléfono" type="tel" placeholder="33 0000 0000" required autoComplete="tel" />
      </div>
      <TextField id="of-email" name="email" label="Correo electrónico" type="email" placeholder="tucorreo@ejemplo.com" required autoComplete="email" />
      <TextField
        id="of-vehiculo"
        name="vehiculo"
        label="Vehículo"
        defaultValue={vehicleLabel}
        readOnly={Boolean(vehicleLabel)}
        placeholder="Auto de interés"
        required
      />
      <TextField id="of-oferta" name="oferta" label="Tu oferta (MXN)" type="number" inputMode="numeric" placeholder="$ 0" min={0} required />
    </MockForm>
  );
}
