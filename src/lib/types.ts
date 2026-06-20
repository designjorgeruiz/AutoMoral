export type VehicleType =
  | "Sedán"
  | "SUV"
  | "Hatchback"
  | "Pickups"
  | "Coupé"
  | "Motocicleta";
export type VehicleCondition = "Nuevo" | "Usado";

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  version?: string;
  year: number;
  price: number;
  mileage: number; // km
  type: VehicleType;
  condition: VehicleCondition;
  transmission: "Automática" | "Manual" | "CVT" | "Eléctrico";
  fuel: "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico";
  doors?: number;
  engine?: string;
  color?: string;
  location: string;
  images: string[]; // rutas a placeholders editables
  featured: boolean;
  popular: boolean;
  recent: boolean;
  description: string;
  highlights?: string[];
}

export interface Brand {
  name: string;
  /** Iniciales/etiqueta para el chip placeholder del logo de marca. */
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIcon;
}

export type ServiceIcon =
  | "buy"
  | "sell"
  | "consign"
  | "finance"
  | "paperwork"
  | "repair";

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  quote: string;
  context: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
