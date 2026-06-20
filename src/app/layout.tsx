import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { CompareProvider } from "@/components/compare/CompareContext";
import { ComparisonDrawer } from "@/components/compare/ComparisonDrawer";
import { JsonLd, autoDealerSchema } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Auto Moral MX | Compra, venta, financiamiento y reparación de autos",
    template: "%s | Auto Moral MX",
  },
  description: SITE.description,
  keywords: [
    "autos usados México",
    "autos nuevos México",
    "venta de autos Guadalajara",
    "compra de autos",
    "consignación de autos",
    "financiamiento automotriz",
    "mecánica general",
    "reparación de autos",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.name,
    title: "Auto Moral MX | Compra, venta, financiamiento y reparación de autos",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Moral MX",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0d12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-dvh antialiased">
        <JsonLd data={autoDealerSchema} />
        <CompareProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <ComparisonDrawer />
        </CompareProvider>
      </body>
    </html>
  );
}
