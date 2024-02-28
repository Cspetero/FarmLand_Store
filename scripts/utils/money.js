export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 1).toFixed(2);
}

export default formatCurrency;