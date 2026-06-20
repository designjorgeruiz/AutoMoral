# Auto Moral MX — Sitio web

Marketplace automotriz premium para **Auto Moral MX**: compra, venta, consignación,
financiamiento, gestoría y mecánica general de autos en México.

Construido con **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4**, mobile-first,
accesible, optimizado para SEO y orientado a conversión (WhatsApp, teléfono y formularios).

---

## 🚀 Empezar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build
```

> Node 18.18+ recomendado.

---

## 🎨 Personalización rápida

| Quiero cambiar… | Archivo |
| --- | --- |
| Colores, tipografía, radios, sombras | `src/app/globals.css` (variables `--am-*`) |
| Teléfono, WhatsApp, correo, horario, redes | `src/lib/site.ts` |
| Navegación, tipos de auto, años, presupuestos | `src/lib/navigation.ts` |
| Marcas | `src/data/brands.ts` |
| Servicios, testimonios, FAQ | `src/data/services.ts` |
| Inventario (mock) | `src/data/vehicles.ts` |

La paleta es **dark premium** (acero/plata + azul eléctrico) inspirada en la marca.
Para cambiar el tema completo basta editar las variables `--am-*` en `globals.css`.

---

## 🖼️ Assets del usuario (logo y hero)

Todo está maquetado con **placeholders editables**. Sustitúyelos siguiendo
[`public/ASSETS.md`](public/ASSETS.md):

- **Logo** → `public/brand/logo.svg` y ajusta `src/components/brand/Logo.tsx`.
- **Hero (imagen o video)** → `public/hero/` y descomenta el bloque marcado
  `ASSET: HERO` en `src/components/sections/Hero.tsx`.
- **Fotos de inventario** → `public/vehicles/` (referencias en `src/data/vehicles.ts`).

---

## 📂 Estructura

```
src/
├─ app/                      # Rutas (App Router)
│  ├─ page.tsx               # Home
│  ├─ inventario/            # Listado + detalle [slug]
│  ├─ vende-tu-auto/         # Publicar auto
│  ├─ consignacion/
│  ├─ financiamiento/
│  ├─ servicio/              # Mecánica / agenda
│  ├─ contacto/
│  ├─ layout.tsx             # Layout, fuentes, metadata, schema
│  ├─ sitemap.ts / robots.ts
│  └─ globals.css            # Design tokens
├─ components/
│  ├─ layout/                # Header, MobileMenu, Footer, WhatsApp flotante, PageHero
│  ├─ sections/              # Hero, buscador, destacados, servicios, etc.
│  ├─ vehicle/               # VehicleCard, InventoryView, galería, detalle
│  ├─ compare/               # Contexto + barra comparadora
│  ├─ forms/                 # Formularios (mock submit)
│  ├─ ui/                    # Button, Badge, Section, Field
│  ├─ brand/Logo.tsx         # Placeholder de logo
│  └─ seo/JsonLd.tsx
├─ data/                     # Datos mock (brands, services, vehicles)
└─ lib/                      # Tipos, utils, site config, navegación
```

---

## 🔌 Conectar datos reales

El inventario usa el tipo `Vehicle` (`src/lib/types.ts`). Para conectar un CMS/API,
reemplaza las funciones de `src/data/vehicles.ts`
(`getFeaturedVehicles`, `getVehicleBySlug`, `getSimilarVehicles`, `getAllSlugs`)
por llamadas a tu fuente de datos manteniendo la misma forma de datos.

Los formularios usan un envío simulado en `src/components/forms/MockForm.tsx`.
Conecta el `handleSubmit` a tu API/CRM cuando esté listo.

---

## ✅ Incluido

- Home completa: hero, buscador, destacados, servicios, por qué, cómo funciona,
  financiamiento, servicio mecánico, testimonios, FAQ, CTA final.
- Inventario con filtros (marca, tipo, condición, año, presupuesto), orden,
  estado vacío y drawer de filtros en móvil.
- Detalle de vehículo con galería, ficha técnica, estimación de mensualidad,
  formularios de prueba de manejo y oferta, y autos similares.
- Comparador de vehículos (hasta 3) con barra inferior y tabla comparativa.
- WhatsApp flotante, CTAs visibles, header sticky transparente→sólido.
- SEO: metadata por página, Open Graph, schema `AutoDealer` y `Vehicle`,
  `sitemap.xml` y `robots.txt`.
- Accesibilidad: HTML semántico, labels, focus visible, navegación por teclado,
  `prefers-reduced-motion`.
