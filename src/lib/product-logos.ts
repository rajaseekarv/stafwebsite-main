const revnexure = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="24" fill="%230e1324" stroke="%23FF2E93" stroke-width="2"/><path d="M30 65 L45 50 L55 55 L70 35 M30 35 L70 65" stroke="%237000FF" stroke-width="4" stroke-linecap="round"/><path d="M30 65 L45 50 L55 55 L70 35" stroke="%2300C2FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="70" cy="35" r="7" fill="%23FF2E93"/></svg>`;

export const PRODUCT_LOGOS = {
  revnexure: {
    url: revnexure,
    alt: "RevNexure — AI Revenue Assurance Platform",
  },
} as const;

export type ProductLogoKey = keyof typeof PRODUCT_LOGOS;

export function getLogoForPage(
  sectionKey: string,
  slug: string
): ProductLogoKey | null {
  // Don't show logos for these sections
  if (sectionKey === "consulting" || sectionKey === "solutions") {
    return null;
  }

  const s = slug.toLowerCase();

  // Show RevNexure logo only
  if (sectionKey === "products" || s.includes("revnexure")) {
    return "revnexure";
  }

  // No logo for any other page
  return null;
}