/** Formatea un precio en pesos mexicanos sin decimales. */
export function formatPrice(value: number): string {
  if (value <= 0) return "Consultar";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Formatea kilometraje con separadores de miles. */
export function formatMileage(km: number): string {
  if (km <= 0) return "Consultar";
  return `${new Intl.NumberFormat("es-MX").format(km)} km`;
}

/** Formatea año cuando el inventario no publica el dato. */
export function formatYear(year: number): string {
  return year > 0 ? String(year) : "Consultar";
}

/** Une clases condicionalmente (mini clsx). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Estimación simple de mensualidad (sólo informativa, no es oferta de crédito).
 * @param price precio del vehículo
 * @param downPaymentPct porcentaje de enganche (0-1)
 * @param months plazo en meses
 * @param annualRate tasa anual aproximada (0-1)
 */
export function estimateMonthlyPayment(
  price: number,
  downPaymentPct = 0.2,
  months = 48,
  annualRate = 0.13,
): number {
  if (price <= 0) return 0;
  const principal = price * (1 - downPaymentPct);
  const r = annualRate / 12;
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
}
