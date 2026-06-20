import { SITE } from "@/lib/site";

/** Inserta un bloque <script type="application/ld+json"> de forma segura. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro, controlado en servidor.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const autoDealerSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.contact.phone,
  email: SITE.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  areaServed: "MX",
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-19:00",
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.tiktok],
};
