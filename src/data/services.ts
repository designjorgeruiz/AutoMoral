import type { Service, FaqItem, Testimonial, ServiceIcon } from "@/lib/types";

/**
 * Servicios reales de Auto Moral MX (según material de la marca), agrupados
 * para una lectura clara y simple.
 */
export interface ServiceGroup {
  title: string;
  icon: ServiceIcon;
  items: string[];
  href: string;
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Compra y venta",
    icon: "buy",
    items: ["Venta de autos", "Compra de autos", "Consignación"],
    href: "/inventario",
  },
  {
    title: "Crédito y garantías",
    icon: "finance",
    items: ["Auto financiamiento", "Garantía prendaria", "Garantía extendida", "Seguro"],
    href: "/financiamiento",
  },
  {
    title: "Taller y reparación",
    icon: "repair",
    items: ["Mecánica general", "Laminería y pintura", "Restauración", "Refacciones", "Piezas de colisión"],
    href: "/servicio",
  },
  {
    title: "Trámites y gestoría",
    icon: "paperwork",
    items: ["Gestoría de placas", "Legalización", "Direcciones asistidas"],
    href: "/contacto",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "compra",
    title: "Compra de autos",
    description:
      "Encuentra vehículos nuevos y usados con una experiencia clara, rápida y confiable.",
    href: "/inventario",
    icon: "buy",
  },
  {
    slug: "venta",
    title: "Venta y publicación",
    description:
      "Publica tu auto gratis y conecta con compradores realmente interesados.",
    href: "/vende-tu-auto",
    icon: "sell",
  },
  {
    slug: "consignacion",
    title: "Consignación",
    description:
      "Deja que Auto Moral venda tu vehículo con mayor seguridad y exposición.",
    href: "/consignacion",
    icon: "consign",
  },
  {
    slug: "financiamiento",
    title: "Financiamiento",
    description:
      "Facilita la compra de tu próximo auto con opciones de crédito a tu medida.",
    href: "/financiamiento",
    icon: "finance",
  },
  {
    slug: "gestoria",
    title: "Gestoría",
    description:
      "Apoyo en trámites de compra, venta y documentación del vehículo.",
    href: "/contacto",
    icon: "paperwork",
  },
  {
    slug: "mecanica",
    title: "Mecánica general",
    description:
      "Servicio, reparación y mantenimiento para mantener tu auto impecable.",
    href: "/servicio",
    icon: "repair",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Daniela R.",
    city: "Guadalajara",
    rating: 5,
    quote:
      "Vendí mi auto en consignación más rápido de lo que esperaba y sin preocuparme por los trámites. Todo súper transparente.",
    context: "Vendió un Mazda 3 2019",
  },
  {
    name: "Carlos M.",
    city: "Zapopan",
    rating: 5,
    quote:
      "Encontré la camioneta que buscaba, me ayudaron con el financiamiento y la prueba de manejo el mismo día. Excelente trato.",
    context: "Compró una Ford Ranger 2020",
  },
  {
    name: "Mariana L.",
    city: "Tlaquepaque",
    rating: 5,
    quote:
      "Llevé mi auto al servicio mecánico y me explicaron todo con claridad antes de cobrar. Quedé muy tranquila.",
    context: "Servicio de mantenimiento mayor",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Publicar mi auto tiene algún costo?",
    answer:
      "No. Crear tu cuenta y publicar tu auto en Auto Moral MX es gratis. Sólo necesitas algunos datos del vehículo y buenas fotos para destacar.",
  },
  {
    question: "¿Cómo funciona la consignación?",
    answer:
      "Recibimos tu auto, lo preparamos, lo publicamos en nuestros canales y nos encargamos de atender a los interesados y cerrar la venta de forma segura. Tú sólo te enfocas en recibir tu pago.",
  },
  {
    question: "¿Puedo solicitar financiamiento aunque no tenga historial?",
    answer:
      "Trabajamos con distintas opciones de crédito. Llena la precalificación y un asesor te contacta para revisar la alternativa que mejor se ajuste a tu perfil.",
  },
  {
    question: "¿Ofrecen garantía o revisión en los autos usados?",
    answer:
      "Los vehículos pasan por una revisión mecánica antes de publicarse. En el detalle de cada auto encontrarás su estado, kilometraje y características verificadas.",
  },
  {
    question: "¿Atienden fuera de Guadalajara?",
    answer:
      "Nuestra base está en Guadalajara, Jalisco, pero coordinamos compra, venta y envío de vehículos a distintas partes del país. Escríbenos por WhatsApp para ver tu caso.",
  },
];
