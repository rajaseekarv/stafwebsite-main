import dataxentraLogo from "@/assets/dataxentra-logo.png";
import agennovaLogo from "@/assets/agennova-logo.png";

const revnexure = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="24" fill="%230e1324" stroke="%23FF2E93" stroke-width="2"/><path d="M30 65 L45 50 L55 55 L70 35 M30 35 L70 65" stroke="%237000FF" stroke-width="4" stroke-linecap="round"/><path d="M30 65 L45 50 L55 55 L70 35" stroke="%2300C2FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="70" cy="35" r="7" fill="%23FF2E93"/></svg>`;

export const PRODUCT_LOGOS = {
  revnexure: { url: revnexure, alt: "RevNexure — AI Revenue Assurance Platform" },
  agennova: { url: agennovaLogo, alt: "AgenNova — AI Intelligence Platform" },
  dataxentra: { url: dataxentraLogo, alt: "DataXentra — Enterprise Data Platform" },
} as const;

export type ProductLogoKey = keyof typeof PRODUCT_LOGOS;

export function getLogoForPage(sectionKey: string, slug: string): ProductLogoKey | null {
  if (sectionKey === "consulting" || sectionKey === "solutions") return null;

  const s = slug.toLowerCase();
  
  if (s === "dataxentra") return "dataxentra";
  if (s === "agennova") return "agennova";
  
  // DataXentra / Data related topics
  if (
    s.includes("dataxentra") || 
    s.includes("data-consulting") || 
    s === "business-intelligence" || 
    s === "analytics-consulting"
  ) {
    return "dataxentra";
  }
  
  // AgenNova / AI / Intelligence related topics
  if (
    s.includes("agennova") || 
    s.includes("ai-intelligence") || 
    s.includes("intelligent-automation") || 
    s.includes("customer-intelligence") || 
    s.includes("ai-consulting")
  ) {
    return "agennova";
  }
  
  if (sectionKey === "products" || s.includes("revnexure")) {
    return "revnexure";
  }
  
  return null;
}
