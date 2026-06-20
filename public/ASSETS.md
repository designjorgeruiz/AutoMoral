# Assets de marca — Auto Moral MX

Aquí van los archivos reales que tú proporcionarás. El sitio ya está maquetado
con placeholders editables; sólo reemplaza los archivos y listo.

## 1. Logotipo  → `public/brand/` ✅ INTEGRADO
El logo oficial ya está en uso (`src/components/brand/Logo.tsx`). Se generaron 3
recortes con fondo transparente desde el archivo original:
- `emblem.png` — emblema (doble pico + gota azul). Usado en header, menú, footer, 404.
- `wordmark.png` — tipografía "AUTOMORAL". Acompaña al emblema en el lockup horizontal.
- `logo.png` — lockup vertical completo, para usos grandes/centrados.

Para actualizarlo, reemplaza estos PNG (mismas proporciones) o ajusta las rutas
en `Logo.tsx`.

## 2. Hero  → `public/hero/` ✅ INTEGRADO
El render oficial ya está en uso como fondo del Hero (`src/components/sections/Hero.tsx`):
- `hero.webp` (47 KB) — versión optimizada en uso.
- `hero.jpg` (76 KB) — respaldo.

Para usar **video**, guarda `public/hero/hero.mp4` y sigue el bloque comentado
`ASSET: HERO` en `Hero.tsx` (reemplaza el `<Image>` por el `<video>`).

## 3. Fotos de inventario  → `public/vehicles/`
- Las tarjetas usan `placeholder-1.svg`, `placeholder-2.svg`, `placeholder-3.svg`.
- Reemplaza por fotos reales (`.jpg`/`.webp`) y actualiza las rutas en
  `src/data/vehicles.ts` (campo `images`). Al conectar el CMS/API, este archivo
  se sustituye por la fuente de datos real.

## 4. Favicon / Open Graph (opcional)
- `src/app/icon.png` para el favicon.
- `public/og.jpg` (1200×630) para previsualización al compartir el enlace.
