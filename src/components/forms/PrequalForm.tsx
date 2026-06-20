"use client";

import { MockForm } from "./MockForm";
import { TextField, SelectField } from "@/components/ui/Field";

export function PrequalForm() {
  return (
    <MockForm
      cta="Precalificar sin compromiso"
      successTitle="¡Solicitud de precalificación recibida!"
      successMessage="Un asesor revisará tu información y te contactará con las opciones de financiamiento disponibles para ti."
      note="La precalificación no afecta tu historial ni representa una oferta de crédito."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="pq-nombre" name="nombre" label="Nombre completo" placeholder="Tu nombre" required autoComplete="name" />
        <TextField id="pq-tel" name="telefono" label="Teléfono" type="tel" placeholder="33 0000 0000" required autoComplete="tel" />
      </div>
      <TextField id="pq-email" name="email" label="Correo electrónico" type="email" placeholder="tucorreo@ejemplo.com" required autoComplete="email" />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="pq-ingreso" name="ingreso" label="Ingreso mensual aprox. (MXN)" type="number" inputMode="numeric" placeholder="$ 0" min={0} required />
        <SelectField id="pq-enganche" name="enganche" label="Enganche disponible" defaultValue="" required>
          <option value="" disabled>Selecciona</option>
          <option>Menos del 10%</option>
          <option>10% – 20%</option>
          <option>20% – 30%</option>
          <option>Más del 30%</option>
        </SelectField>
      </div>
      <TextField id="pq-auto" name="auto" label="Auto que te interesa (opcional)" placeholder="Ej. Kia Sportage 2023" />
    </MockForm>
  );
}
