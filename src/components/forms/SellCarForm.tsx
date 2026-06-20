"use client";

import { MockForm } from "./MockForm";
import { TextField, SelectField } from "@/components/ui/Field";
import { BRANDS } from "@/data/brands";
import { YEARS } from "@/lib/navigation";

export function SellCarForm() {
  return (
    <MockForm
      cta="Publicar mi auto"
      successTitle="¡Recibimos los datos de tu auto!"
      successMessage="Un asesor revisará la información y te contactará para completar tu publicación gratis. También puedes adelantar el proceso por WhatsApp."
      note="Publicar es gratis. Al enviar aceptas ser contactado por Auto Moral MX."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="sc-nombre" name="nombre" label="Nombre" placeholder="Tu nombre" required autoComplete="name" />
        <TextField id="sc-tel" name="telefono" label="Teléfono" type="tel" placeholder="33 0000 0000" required autoComplete="tel" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField id="sc-marca" name="marca" label="Marca" defaultValue="" required>
          <option value="" disabled>Selecciona</option>
          {BRANDS.map((b) => (
            <option key={b.name} value={b.name}>{b.name}</option>
          ))}
        </SelectField>
        <TextField id="sc-modelo" name="modelo" label="Modelo" placeholder="Ej. Jetta" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <SelectField id="sc-anio" name="anio" label="Año" defaultValue="" required>
          <option value="" disabled>Año</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </SelectField>
        <TextField id="sc-km" name="kilometraje" label="Kilometraje" type="number" inputMode="numeric" placeholder="km" min={0} required />
        <TextField id="sc-precio" name="precio" label="Precio esperado" type="number" inputMode="numeric" placeholder="$ MXN" min={0} required />
      </div>
      <div>
        <label htmlFor="sc-fotos" className="mb-1.5 block text-sm font-medium text-muted">
          Fotos del auto
        </label>
        <input
          id="sc-fotos"
          name="fotos"
          type="file"
          multiple
          accept="image/*"
          className="w-full rounded-xl border border-dashed border-border-base bg-surface-2 px-4 py-3 text-sm text-muted file:mr-3 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-accent-strong"
        />
        <p className="mt-1.5 text-xs text-subtle">Sube de 3 a 8 fotos para destacar tu publicación.</p>
      </div>
    </MockForm>
  );
}
