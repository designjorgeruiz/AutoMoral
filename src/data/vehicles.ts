import type { Vehicle, VehicleType } from "@/lib/types";

type VehicleInput = Omit<
  Vehicle,
  "id" | "condition" | "location" | "description" | "highlights" | "featured" | "popular" | "recent"
> & {
  originalPrice?: number;
  featured?: boolean;
  popular?: boolean;
  recent?: boolean;
};

const LOCATION = "Guadalajara, Jal.";

function vehicle({
  slug,
  brand,
  model,
  version,
  year,
  price,
  originalPrice,
  mileage,
  type,
  transmission,
  fuel,
  doors,
  engine,
  color,
  images,
  featured = false,
  popular = false,
  recent = false,
}: VehicleInput): Vehicle {
  const fullName = `${brand} ${model}${version ? ` ${version}` : ""} ${year}`;
  const priceText =
    price > 0
      ? `precio vigente publicado de $${price.toLocaleString("es-MX")}`
      : "precio por confirmar";
  const originalPriceText =
    originalPrice && originalPrice !== price
      ? `; precio anterior publicado: $${originalPrice.toLocaleString("es-MX")}`
      : "";

  return {
    id: slug,
    slug,
    brand,
    model,
    version,
    year,
    price,
    mileage,
    type,
    condition: "Usado",
    transmission,
    fuel,
    doors,
    engine,
    color,
    location: LOCATION,
    images,
    featured,
    popular,
    recent,
    description: `${fullName}. Unidad publicada en el inventario publico de automoral.com con ${mileage.toLocaleString(
      "es-MX",
    )} km, transmision ${transmission.toLowerCase()} y ${priceText}${originalPriceText}. Confirma disponibilidad y precio final antes de apartar.`,
    highlights: [
      "Publicado en automoral.com",
      `${mileage.toLocaleString("es-MX")} km`,
      price > 0 ? "Precio vigente publicado" : "Precio por confirmar",
    ],
  };
}

export const VEHICLES: Vehicle[] = [
  vehicle({
    slug: "kia-rio-ex-2016",
    brand: "Kia",
    model: "Rio",
    version: "EX",
    year: 2016,
    price: 166000,
    originalPrice: 177000,
    mileage: 122000,
    type: "Hatchback",
    transmission: "Manual",
    fuel: "Gasolina",
    color: "Blanco",
    images: [
      "/vehicles/kia-rio-ex-2016-1.webp",
      "/vehicles/kia-rio-ex-2016-2.webp",
      "/vehicles/kia-rio-ex-2016-3.webp",
    ],
    featured: true,
    recent: true,
  }),
  vehicle({
    slug: "bmw-120i-dynamic-2010",
    brand: "BMW",
    model: "120i",
    version: "Dynamic",
    year: 2010,
    price: 128000,
    originalPrice: 139000,
    mileage: 122333,
    type: "Hatchback",
    transmission: "Automática",
    fuel: "Gasolina",
    engine: "2.0 L",
    color: "Rojo",
    images: [
      "/vehicles/bmw-120i-dynamic-2010-1.webp",
      "/vehicles/bmw-120i-dynamic-2010-2.webp",
      "/vehicles/bmw-120i-dynamic-2010-3.webp",
      "/vehicles/bmw-120i-dynamic-2010-4.webp",
    ],
  }),
  vehicle({
    slug: "honda-acoord-2018-touring",
    brand: "Honda",
    model: "Accord",
    version: "Touring",
    year: 2018,
    price: 380000,
    originalPrice: 399000,
    mileage: 99000,
    type: "Sedán",
    transmission: "Automática",
    fuel: "Gasolina",
    engine: "2.0 L",
    images: [
      "/vehicles/honda-acoord-2018-touring-1.webp",
      "/vehicles/honda-acoord-2018-touring-2.webp",
      "/vehicles/honda-acoord-2018-touring-3.webp",
      "/vehicles/honda-acoord-2018-touring-4.webp",
    ],
    featured: true,
    popular: true,
  }),
  vehicle({
    slug: "mazda-cx3-2020",
    brand: "Mazda",
    model: "CX-3",
    year: 2020,
    price: 311000,
    originalPrice: 333000,
    mileage: 54000,
    type: "SUV",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Rojo",
    images: [
      "/vehicles/mazda-cx3-2020-1.webp",
      "/vehicles/mazda-cx3-2020-2.webp",
      "/vehicles/mazda-cx3-2020-3.webp",
      "/vehicles/mazda-cx3-2020-4.webp",
    ],
    featured: true,
    recent: true,
  }),
  vehicle({
    slug: "mitsubishi-lancer-2011",
    brand: "Mitsubishi",
    model: "Lancer",
    year: 2011,
    price: 118000,
    originalPrice: 123000,
    mileage: 88000,
    type: "Sedán",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Blanco",
    images: [
      "/vehicles/mitsubishi-lancer-2011-1.webp",
      "/vehicles/mitsubishi-lancer-2011-2.webp",
      "/vehicles/mitsubishi-lancer-2011-3.webp",
      "/vehicles/mitsubishi-lancer-2011-4.webp",
    ],
  }),
  vehicle({
    slug: "audi-a5-2019",
    brand: "Audi",
    model: "A5",
    year: 2019,
    price: 422000,
    originalPrice: 444000,
    mileage: 66000,
    type: "Coupé",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Gris",
    images: [
      "/vehicles/audi-a5-2019-1.webp",
      "/vehicles/audi-a5-2019-2.webp",
      "/vehicles/audi-a5-2019-3.webp",
      "/vehicles/audi-a5-2019-4.webp",
    ],
    featured: true,
    popular: true,
  }),
  vehicle({
    slug: "mazda-cx3-2017-i-grand-touring",
    brand: "Mazda",
    model: "CX-3",
    version: "i Grand Touring",
    year: 2017,
    price: 266000,
    originalPrice: 279000,
    mileage: 80000,
    type: "SUV",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Rojo",
    images: [
      "/vehicles/mazda-cx3-2017-i-grand-touring-1.webp",
      "/vehicles/mazda-cx3-2017-i-grand-touring-2.webp",
      "/vehicles/mazda-cx3-2017-i-grand-touring-3.webp",
      "/vehicles/mazda-cx3-2017-i-grand-touring-4.webp",
    ],
  }),
  vehicle({
    slug: "kia-rio-ex-2018",
    brand: "Kia",
    model: "Rio",
    version: "EX",
    year: 2018,
    price: 0,
    mileage: 80000,
    type: "Sedán",
    transmission: "Manual",
    fuel: "Gasolina",
    images: [
      "/vehicles/kia-rio-ex-2018-1.jpeg",
      "/vehicles/kia-rio-ex-2018-2.jpeg",
    ],
    recent: true,
  }),
  vehicle({
    slug: "bmw-550-2019",
    brand: "BMW",
    model: "550",
    year: 2019,
    price: 563000,
    originalPrice: 577000,
    mileage: 77000,
    type: "Sedán",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Azul",
    images: [
      "/vehicles/bmw-550-2019-1.webp",
      "/vehicles/bmw-550-2019-2.webp",
      "/vehicles/bmw-550-2019-3.webp",
      "/vehicles/bmw-550-2019-4.webp",
    ],
    featured: true,
    popular: true,
  }),
  vehicle({
    slug: "kia-sorento-ex-2019",
    brand: "Kia",
    model: "Sorento",
    version: "EX",
    year: 2019,
    price: 299000,
    originalPrice: 366000,
    mileage: 88000,
    type: "SUV",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Blanco",
    images: [
      "/vehicles/kia-sorento-ex-2019-1.webp",
      "/vehicles/kia-sorento-ex-2019-2.webp",
      "/vehicles/kia-sorento-ex-2019-3.webp",
      "/vehicles/kia-sorento-ex-2019-4.webp",
    ],
    popular: true,
  }),
  vehicle({
    slug: "honda-civic-2015-exl-navy",
    brand: "Honda",
    model: "Civic",
    version: "EXL Navi",
    year: 2015,
    price: 197000,
    originalPrice: 222000,
    mileage: 122333,
    type: "Sedán",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Gris",
    images: [
      "/vehicles/honda-civic-2015-exl-navy-1.webp",
      "/vehicles/honda-civic-2015-exl-navy-2.webp",
      "/vehicles/honda-civic-2015-exl-navy-3.webp",
      "/vehicles/honda-civic-2015-exl-navy-4.webp",
    ],
  }),
  vehicle({
    slug: "ford-lobo-fx4-2018",
    brand: "Ford",
    model: "Lobo",
    version: "FX4",
    year: 2018,
    price: 500000,
    originalPrice: 555000,
    mileage: 77000,
    type: "Pickups",
    transmission: "Automática",
    fuel: "Gasolina",
    engine: "V6 Turbo",
    color: "Azul",
    images: [
      "/vehicles/ford-lobo-fx4-2018-1.webp",
      "/vehicles/ford-lobo-fx4-2018-2.webp",
      "/vehicles/ford-lobo-fx4-2018-3.webp",
      "/vehicles/ford-lobo-fx4-2018-4.webp",
    ],
    featured: true,
  }),
  vehicle({
    slug: "volkswagen-gti-2017",
    brand: "Volkswagen",
    model: "GTI",
    year: 2017,
    price: 339000,
    originalPrice: 373000,
    mileage: 80000,
    type: "Hatchback",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Blanco",
    images: [
      "/vehicles/volkswagen-gti-2017-1.webp",
      "/vehicles/volkswagen-gti-2017-2.webp",
      "/vehicles/volkswagen-gti-2017-3.webp",
      "/vehicles/volkswagen-gti-2017-4.webp",
    ],
    popular: true,
  }),
  vehicle({
    slug: "chevolet-malibu-lt-2017",
    brand: "Chevrolet",
    model: "Malibu",
    version: "LT",
    year: 2016,
    price: 239000,
    originalPrice: 255000,
    mileage: 77000,
    type: "Sedán",
    transmission: "Automática",
    fuel: "Gasolina",
    color: "Blanco",
    images: [
      "/vehicles/chevolet-malibu-lt-2017-1.webp",
      "/vehicles/chevolet-malibu-lt-2017-2.webp",
      "/vehicles/chevolet-malibu-lt-2017-3.webp",
      "/vehicles/chevolet-malibu-lt-2017-4.webp",
    ],
  }),
  vehicle({
    slug: "ducati-panigale-2016",
    brand: "Ducati",
    model: "Panigale",
    year: 2016,
    price: 189000,
    originalPrice: 222000,
    mileage: 24000,
    type: "Motocicleta",
    transmission: "Manual",
    fuel: "Gasolina",
    engine: "900 cc",
    images: [
      "/vehicles/ducati-panigale-2016-1.jpeg",
      "/vehicles/ducati-panigale-2016-2.jpeg",
    ],
    popular: true,
  }),
  vehicle({
    slug: "mg-rx8-2023",
    brand: "MG",
    model: "RX8",
    year: 2023,
    price: 544000,
    originalPrice: 588900,
    mileage: 23030,
    type: "SUV",
    transmission: "Automática",
    fuel: "Gasolina",
    engine: "6 cilindros",
    color: "Blanco",
    images: [
      "/vehicles/mg-rx8-2023-1.webp",
      "/vehicles/mg-rx8-2023-2.webp",
      "/vehicles/mg-rx8-2023-3.webp",
      "/vehicles/mg-rx8-2023-4.webp",
    ],
    featured: true,
    recent: true,
  }),
  vehicle({
    slug: "bmw-x3-2015",
    brand: "BMW",
    model: "X3",
    year: 2015,
    price: 236000,
    originalPrice: 255000,
    mileage: 122333,
    type: "SUV",
    transmission: "Automática",
    fuel: "Gasolina",
    engine: "2.0 L 4 cilindros",
    color: "Blanco",
    images: [
      "/vehicles/bmw-x3-2015-1.webp",
      "/vehicles/bmw-x3-2015-2.webp",
      "/vehicles/bmw-x3-2015-3.webp",
      "/vehicles/bmw-x3-2015-4.webp",
    ],
    featured: true,
  }),
];

export function getFeaturedVehicles(limit = 6): Vehicle[] {
  const featured = VEHICLES.filter((v) => v.featured);
  return (featured.length ? featured : VEHICLES).slice(0, limit);
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug === slug);
}

export function getSimilarVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  return VEHICLES.filter(
    (v) => v.id !== vehicle.id && (v.type === vehicle.type || v.brand === vehicle.brand),
  ).slice(0, limit);
}

export function getAllSlugs(): string[] {
  return VEHICLES.map((v) => v.slug);
}

export function getVehicleTypes(): VehicleType[] {
  return Array.from(new Set(VEHICLES.map((v) => v.type)));
}
