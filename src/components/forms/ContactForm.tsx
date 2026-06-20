"use client";

import { MockForm } from "./MockForm";
import { TextField, TextAreaField } from "@/components/ui/Field";

export function ContactForm({
  cta = "Enviar mensaje",
  messageLabel = "¿En qué te ayudamos?",
  messagePlaceholder = "Cuéntanos brevemente lo que necesitas…",
}: {
  cta?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
}) {
  return (
    <MockForm cta={cta}>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="ct-nombre" name="nombre" label="Nombre" placeholder="Tu nombre" required autoComplete="name" />
        <TextField id="ct-tel" name="telefono" label="Teléfono" type="tel" placeholder="33 0000 0000" required autoComplete="tel" />
      </div>
      <TextField id="ct-email" name="email" label="Correo electrónico" type="email" placeholder="tucorreo@ejemplo.com" required autoComplete="email" />
      <TextAreaField id="ct-msg" name="mensaje" label={messageLabel} placeholder={messagePlaceholder} required />
    </MockForm>
  );
}
