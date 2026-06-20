"use client";

import { MockForm } from "./MockForm";
import { TextField, SelectField, TextAreaField } from "@/components/ui/Field";

const SERVICE_TYPES = [
  "Mecánica general",
  "Laminería y pintura",
  "Restauración",
  "Piezas de colisión",
  "Diagnóstico",
  "Direcciones asistidas",
  "Otro",
];

export function ServiceForm() {
  return (
    <MockForm cta="Agendar servicio" successTitle="¡Servicio agendado!" successMessage="Recibimos tu solicitud de servicio. Un asesor confirmará la fecha y hora contigo a la brevedad.">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="sv-nombre" name="nombre" label="Nombre" placeholder="Tu nombre" required autoComplete="name" />
        <TextField id="sv-tel" name="telefono" label="Teléfono" type="tel" placeholder="33 0000 0000" required autoComplete="tel" />
      </div>
      <TextField id="sv-vehiculo" name="vehiculo" label="Vehículo (marca, modelo y año)" placeholder="Ej. Mazda CX-5 2019" required />
      <SelectField id="sv-tipo" name="tipo" label="Tipo de servicio" defaultValue="" required>
        <option value="" disabled>Selecciona</option>
        {SERVICE_TYPES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </SelectField>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="sv-fecha" name="fecha" label="Fecha preferida" type="date" required />
        <SelectField id="sv-hora" name="hora" label="Horario" defaultValue="" required>
          <option value="" disabled>Elige un horario</option>
          <option>Mañana (9:00 – 12:00)</option>
          <option>Mediodía (12:00 – 15:00)</option>
          <option>Tarde (15:00 – 18:00)</option>
        </SelectField>
      </div>
      <TextAreaField id="sv-problema" name="problema" label="Describe el problema o servicio" placeholder="Ej. Ruido al frenar, servicio de los 60,000 km…" required />
    </MockForm>
  );
}
