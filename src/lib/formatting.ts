export function formatPrice(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatArea(sqft: number): string {
  return `${new Intl.NumberFormat("en-US").format(sqft)} sq ft`;
}

