export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Autos", href: "/inventario" },
  { label: "Vende tu auto", href: "/vende-tu-auto" },
  { label: "Servicios", href: "/servicio" },
  { label: "Financiamiento", href: "/financiamiento" },
  { label: "Contacto", href: "/contacto" },
];

export const VEHICLE_TYPES = [
  "Sedán",
  "SUV",
  "Hatchback",
  "Pickups",
  "Coupé",
  "Motocicleta",
] as const;

export const YEARS = [
  2023, 2020, 2019, 2018, 2017, 2016, 2015, 2011, 2010,
] as const;

export const BUDGET_RANGES = [
  { label: "Hasta $200,000", min: 0, max: 200000 },
  { label: "$200,000 – $350,000", min: 200000, max: 350000 },
  { label: "$350,000 – $500,000", min: 350000, max: 500000 },
  { label: "$500,000 – $800,000", min: 500000, max: 800000 },
  { label: "Más de $800,000", min: 800000, max: Infinity },
] as const;
