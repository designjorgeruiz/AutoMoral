"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

interface MockFormProps {
  /** Texto del botón de envío. */
  cta: string;
  children: ReactNode;
  successTitle?: string;
  successMessage?: string;
  /** Nota legal/aclaración bajo el botón. */
  note?: string;
}

/**
 * Envoltura de formulario para la demo: valida required del navegador,
 * simula el envío y muestra un estado de éxito.
 * Conecta `onSubmit` a tu API/CRM cuando esté listo.
 */
export function MockForm({
  cta,
  children,
  successTitle = "¡Listo! Recibimos tu solicitud",
  successMessage = "Un asesor de Auto Moral MX te contactará muy pronto. Si prefieres, escríbenos por WhatsApp para una respuesta inmediata.",
  note,
}: MockFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simula latencia de red. Reemplaza por tu fetch/POST real.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="am-card flex flex-col items-center p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold">{successTitle}</h3>
        <p className="mt-2 max-w-md text-sm text-muted">{successMessage}</p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-accent hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="am-card p-5 md:p-6" noValidate={false}>
      <div className="grid gap-4">{children}</div>
      <Button type="submit" fullWidth size="lg" className="mt-5" disabled={loading}>
        {loading ? "Enviando…" : cta}
      </Button>
      {note && <p className="mt-3 text-center text-xs text-subtle">{note}</p>}
    </form>
  );
}
