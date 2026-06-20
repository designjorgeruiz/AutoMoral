"use client";

import { MockForm } from "./MockForm";
import { TextField, SelectField } from "@/components/ui/Field";
import { VEHICLES } from "@/data/vehicles";
import { formatYear } from "@/lib/utils";

export function TestDriveForm({ defaultVehicle }: { defaultVehicle?: string }) {
  return (
    <MockForm cta="Solicitar prueba" successTitle="¡Prueba de manejo solicitada!">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="td-nombre" name="nombre" label="Nombre" placeholder="Tu nombre" required autoComplete="name" />
        <TextField id="td-tel" name="telefono" label="Teléfono" type="tel" placeholder="33 0000 0000" required autoComplete="tel" />
      </div>
      <TextField id="td-email" name="email" label="Correo electrónico" type="email" placeholder="tucorreo@ejemplo.com" required autoComplete="email" />
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField id="td-vehiculo" name="vehiculo" label="Vehículo de interés" defaultValue={defaultVehicle ?? ""} required>
          <option value="" disabled>Selecciona un auto</option>
          {VEHICLES.map((v) => (
            <option key={v.id} value={v.slug}>
              {v.brand} {v.model} {formatYear(v.year)}
            </option>
          ))}
        </SelectField>
        <SelectField id="td-horario" name="horario" label="Mejor horario" required>
          <option value="" disabled>Elige un horario</option>
          <option>Mañana (9:00 – 12:00)</option>
          <option>Mediodía (12:00 – 15:00)</option>
          <option>Tarde (15:00 – 19:00)</option>
        </SelectField>
      </div>
    </MockForm>
  );
}
