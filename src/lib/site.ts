/**
 * Configuración central del sitio.
 * Edita aquí los datos de contacto, redes y URLs públicas.
 */

export const SITE = {
  name: "Auto Moral MX",
  shortName: "Auto Moral",
  tagline: "La plataforma de compra y venta más grande de México.",
  description:
    "Compra y vende autos nuevos y usados en México con Auto Moral MX. Publica tu auto, agenda prueba de manejo, solicita financiamiento, gestoría o servicio mecánico.",
  url: "https://www.automoral.com",
  locale: "es-MX",

  contact: {
    phone: "+52 33 3479 6112",
    phoneHref: "+523334796112",
    // Número de WhatsApp (sin signos). Editable.
    whatsapp: "523334796112",
    email: "contacto@automoral.com",
    city: "Guadalajara, México",
    address: "Guadalajara, Jalisco, México",
    // Horario placeholder — editar con el real.
    hours: "Lun a Sáb · 9:00 – 19:00",
  },

  social: {
    facebook: "https://facebook.com/automoralmx",
    instagram: "https://instagram.com/automoralmx",
    tiktok: "https://tiktok.com/@automoralmx",
    youtube: "https://youtube.com/@automoralmx",
  },
} as const;

/** Mensaje precargado del botón de WhatsApp. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${SITE.contact.whatsapp}`;
  const text = message ?? "Hola Auto Moral MX, me gustaría recibir más información.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function telUrl(): string {
  return `tel:${SITE.contact.phoneHref}`;
}
