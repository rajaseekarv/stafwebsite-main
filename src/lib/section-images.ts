/**
 * Cinematic background imagery per section and per topic.
 * Images are bundled via Vite (src/assets/*.jpg).
 */
import heroCosmic from "@/assets/hero-cosmic.jpg";
import bgProducts from "@/assets/bg-products.jpg";
import bgPlatforms from "@/assets/bg-platforms.jpg";
import bgSolutions from "@/assets/bg-solutions.jpg";
import bgServices from "@/assets/bg-services.jpg";
import bgConsulting from "@/assets/bg-consulting.jpg";
import bgAbout from "@/assets/bg-about.jpg";
import bgCta from "@/assets/bg-cta.jpg";

import contactHero from "@/assets/contact-hero.png";
import solutionCoreBanking from "@/assets/solution-core-banking.png";
import servicesAppDev from "@/assets/services-app-dev.png";
import servicesDataEng from "@/assets/services-data-eng.png";
import servicesDataGov from "@/assets/services-data-gov.png";

import topicRevenue from "@/assets/topic-revenue.jpg";
import topicFraud from "@/assets/topic-fraud.jpg";
import topicLending from "@/assets/topic-lending.jpg";
import topicTreasury from "@/assets/topic-treasury.jpg";
import topicData from "@/assets/topic-data.jpg";
import topicAi from "@/assets/topic-ai.jpg";
import topicRisk from "@/assets/topic-risk.jpg";
import topicPayments from "@/assets/topic-payments.jpg";
import topicCustomer from "@/assets/topic-customer.jpg";
import topicAdvisory from "@/assets/topic-advisory.jpg";
import topicServices from "@/assets/topic-services.jpg";
import topicAbout from "@/assets/topic-about.jpg";

// New unique topic images
import topicCards from "@/assets/topic-cards.jpg";
import topicAtm from "@/assets/topic-atm.jpg";
import topicCorporate from "@/assets/topic-corporate.jpg";
import topicTradeFinance from "@/assets/topic-trade-finance.jpg";
import topicForex from "@/assets/topic-forex.jpg";
import topicSecurities from "@/assets/topic-securities.jpg";
import topicMerchant from "@/assets/topic-merchant.jpg";
import topicWealth from "@/assets/topic-wealth.jpg";
import topicDerivatives from "@/assets/topic-derivatives.jpg";
import topicSettlement from "@/assets/topic-settlement.jpg";
import topicAutomation from "@/assets/topic-automation.jpg";
import topicImplementation from "@/assets/topic-implementation.jpg";
import topicManaged from "@/assets/topic-managed.jpg";
import topicSupport from "@/assets/topic-support.jpg";
import topicTraining from "@/assets/topic-training.jpg";
import topicTechPartners from "@/assets/topic-tech-partners.jpg";
import topicBankingPartners from "@/assets/topic-banking-partners.jpg";
import topicCloudPartners from "@/assets/topic-cloud-partners.jpg";
import topicChannelPartners from "@/assets/topic-channel-partners.jpg";
import topicStrategicAlliances from "@/assets/topic-strategic-alliances.jpg";
import topicAiPartners from "@/assets/topic-ai-partners.jpg";
import topicSiPartners from "@/assets/topic-si-partners.jpg";
import topicConsultingPartners from "@/assets/topic-consulting-partners.jpg";
import topicArticles from "@/assets/topic-articles.jpg";
import topicBlogs from "@/assets/topic-blogs.jpg";
import topicWhitePapers from "@/assets/topic-white-papers.jpg";
import topicCaseStudies from "@/assets/topic-case-studies.jpg";
import topicResearch from "@/assets/topic-research.jpg";
import topicWebinars from "@/assets/topic-webinars.jpg";
import topicNews from "@/assets/topic-news.jpg";
import topicEvents from "@/assets/topic-events.jpg";
import topicDataAnalytics from "@/assets/topic-data-analytics.jpg";
import topicAiIntelligence from "@/assets/topic-ai-intelligence.jpg";
import topicBi from "@/assets/topic-bi.jpg";
import topicIntegration from "@/assets/topic-integration.jpg";

// About — per-card cinematic imagery
import aboutWhoWeAre from "@/assets/about-who-we-are.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutBoard from "@/assets/about-board.jpg";
import aboutLeadership from "@/assets/about-leadership.jpg";
import aboutDesignThinking from "@/assets/about-design-thinking.jpg";
import aboutAiPrinciples from "@/assets/about-ai-principles.jpg";
import aboutDataStrategy from "@/assets/about-data-strategy.jpg";
import aboutWhatWeDo from "@/assets/about-what-we-do.jpg";
import aboutIndustries from "@/assets/about-industries.jpg";
import aboutWhy from "@/assets/about-why.jpg";
import aboutInnovation from "@/assets/about-innovation.jpg";
import aboutCommitment from "@/assets/about-commitment.jpg";
import aboutJoin from "@/assets/about-join.jpg";

const ABOUT_SLUG_IMAGES: Record<string, string> = {
  "who-we-are": aboutWhoWeAre,
  "vision": aboutVision,
  "our-story": topicAbout,
  "board-of-directors": aboutBoard,
  "leadership-team": aboutLeadership,
  "design-thinking": aboutDesignThinking,
  "ai-principles": aboutAiPrinciples,
  "data-strategy": aboutDataStrategy,
  "what-we-do": aboutWhatWeDo,
  "industries": aboutIndustries,
  "why-stafrof": aboutWhy,
  "innovation": aboutInnovation,
  "commitment": aboutCommitment,
  "join": aboutJoin,
};


import type { SectionKey } from "@/lib/site-content";

export const SITE_IMAGES = {
  hero: heroCosmic,
  cta: bgCta,
  products: bgProducts,
  platforms: bgPlatforms,
  solutions: bgSolutions,
  services: bgServices,
  consulting: bgConsulting,
  segments: bgSolutions,
  about: bgAbout,
  partners: bgAbout,
  insights: bgConsulting,
  careers: bgAbout,
} as const;

export function sectionImage(key: SectionKey): string {
  return SITE_IMAGES[key];
}

export const TOPIC_IMAGES = {
  revenue: topicRevenue,
  fraud: topicFraud,
  lending: topicLending,
  treasury: topicTreasury,
  data: topicData,
  ai: topicAi,
  risk: topicRisk,
  payments: topicPayments,
  customer: topicCustomer,
  advisory: topicAdvisory,
  services: topicServices,
  about: topicAbout,
  cards: topicCards,
  atm: topicAtm,
  corporate: topicCorporate,
  tradeFinance: topicTradeFinance,
  forex: topicForex,
  securities: topicSecurities,
  merchant: topicMerchant,
  wealth: topicWealth,
  derivatives: topicDerivatives,
  settlement: topicSettlement,
  automation: topicAutomation,
  implementation: topicImplementation,
  managed: topicManaged,
  support: topicSupport,
  training: topicTraining,
  techPartners: topicTechPartners,
  bankingPartners: topicBankingPartners,
  cloudPartners: topicCloudPartners,
  channelPartners: topicChannelPartners,
  strategicAlliances: topicStrategicAlliances,
  aiPartners: topicAiPartners,
  siPartners: topicSiPartners,
  consultingPartners: topicConsultingPartners,
  articles: topicArticles,
  blogs: topicBlogs,
  whitePapers: topicWhitePapers,
  caseStudies: topicCaseStudies,
  research: topicResearch,
  webinars: topicWebinars,
  news: topicNews,
  events: topicEvents,
  dataAnalytics: topicDataAnalytics,
  aiIntelligence: topicAiIntelligence,
  bi: topicBi,
  integration: topicIntegration,
} as const;

export type TopicKey = keyof typeof TOPIC_IMAGES;

/** Deterministic slug → topic image mapping. */
export function topicImageFor(sectionKey: SectionKey, slug: string): string {
  const s = slug.toLowerCase();

  // About — explicit per-card imagery
  if (sectionKey === "about" && ABOUT_SLUG_IMAGES[s]) return ABOUT_SLUG_IMAGES[s];

  // Specific high-fidelity unique 3D illustrations
  if (s === "revnexure-lending") return TOPIC_IMAGES.lending;
  if (s === "revnexure-cards") return TOPIC_IMAGES.cards;
  if (s === "revnexure-atm-channels") return TOPIC_IMAGES.atm;
  if (s === "revnexure-corporate") return TOPIC_IMAGES.corporate;
  if (s === "revnexure-trade-finance") return TOPIC_IMAGES.tradeFinance;
  if (s === "revnexure-forex") return TOPIC_IMAGES.forex;
  if (s === "revnexure-wealth-management") return TOPIC_IMAGES.wealth;
  if (s === "revnexure-derivatives") return TOPIC_IMAGES.derivatives;
  if (s === "revnexure-settlement") return TOPIC_IMAGES.settlement;
  if (s === "revnexure-securities") return TOPIC_IMAGES.securities;
  if (s === "revnexure-merchant-payments") return TOPIC_IMAGES.merchant;
  
  if (s === "revnexure-360-suite") return TOPIC_IMAGES.revenue;
  if (s === "dataxentra") return TOPIC_IMAGES.data;
  if (s === "agennova") return TOPIC_IMAGES.ai;

  if (s === "intelligent-automation") return TOPIC_IMAGES.automation;

  if (s === "digital-transformation") return TOPIC_IMAGES.services;
  if (s === "product-implementation") return TOPIC_IMAGES.implementation;
  if (s === "managed-services") return TOPIC_IMAGES.managed;
  if (s === "production-support") return TOPIC_IMAGES.support;
  if (s === "training-and-enablement") return TOPIC_IMAGES.training;
  if (s === "revenue-assurance-services") return TOPIC_IMAGES.revenue;
  if (s === "data-and-ai-services") return TOPIC_IMAGES.data;

  // Additional Products
  if (s === "revnexure-custody-services") return TOPIC_IMAGES.treasury;

  // Segment Based Menu Mappings
  if (s === "retail-banking") return TOPIC_IMAGES.customer;
  if (s === "corporate-banking") return TOPIC_IMAGES.corporate;
  if (s === "commercial-banking") return TOPIC_IMAGES.lending;
  if (s === "sme-msme-banking") return TOPIC_IMAGES.merchant;
  if (s === "private-banking") return TOPIC_IMAGES.wealth;
  if (s === "investment-banking") return TOPIC_IMAGES.securities;
  if (s === "wholesale-banking") return TOPIC_IMAGES.treasury;
  if (s === "treasury-capital-markets") return TOPIC_IMAGES.treasury;
  if (s === "wealth-management") return TOPIC_IMAGES.wealth;
  if (s === "cards-payments") return TOPIC_IMAGES.cards;
  if (s === "trade-finance") return TOPIC_IMAGES.tradeFinance;
  if (s === "transaction-banking") return TOPIC_IMAGES.settlement;
  if (s === "digital-banking") return TOPIC_IMAGES.payments;
  if (s === "custody-securities-services") return TOPIC_IMAGES.securities;
  if (s === "risk-compliance") return TOPIC_IMAGES.risk;
  if (s === "operations-shared-services") return TOPIC_IMAGES.services;

  // Consulting Pages Mappings (Fixed to match slugs in site-content)
  if (s === "core-banking-consulting") return TOPIC_IMAGES.advisory;
  if (s === "agentic-ai-consulting") return TOPIC_IMAGES.ai;
  if (s === "data-engineering-consulting") return TOPIC_IMAGES.data;
  if (s === "enterprise-architecture") return TOPIC_IMAGES.integration;
  if (s === "data-analytics-consulting") return TOPIC_IMAGES.dataAnalytics;
  if (s === "risk-compliance-consulting") return TOPIC_IMAGES.risk;
  if (s === "product-advisory") return TOPIC_IMAGES.advisory;

  // Partnership Pages Mappings
  if (s === "technology-partners") return TOPIC_IMAGES.techPartners;
  if (s === "banking-platform-partners") return TOPIC_IMAGES.bankingPartners;
  if (s === "cloud-partners") return TOPIC_IMAGES.cloudPartners;
  if (s === "channel-partners") return TOPIC_IMAGES.channelPartners;
  if (s === "strategic-alliances") return TOPIC_IMAGES.strategicAlliances;
  if (s === "ai-ecosystem-partners") return TOPIC_IMAGES.aiPartners;
  if (s === "system-integration-partners") return TOPIC_IMAGES.siPartners;
  if (s === "consulting-partners") return TOPIC_IMAGES.consultingPartners;

  // Insights Pages Mappings
  if (s === "articles") return TOPIC_IMAGES.articles;
  if (s === "blogs") return TOPIC_IMAGES.blogs;
  if (s === "white-papers") return TOPIC_IMAGES.whitePapers;
  if (s === "case-studies") return TOPIC_IMAGES.caseStudies;
  if (s === "research") return TOPIC_IMAGES.research;
  if (s === "webinars") return TOPIC_IMAGES.webinars;
  if (s === "news") return TOPIC_IMAGES.news;
  if (s === "events") return TOPIC_IMAGES.events;

  // Services Pages Mappings (Fixed to match slugs in site-content)
  if (s === "revenue-assurance-services") return TOPIC_IMAGES.revenue;
  if (s === "application-development") return servicesAppDev;
  if (s === "data-agentic-ai") return TOPIC_IMAGES.aiIntelligence;
  if (s === "product-implementation") return TOPIC_IMAGES.implementation;
  if (s === "managed-services") return TOPIC_IMAGES.managed;
  if (s === "production-services" || s === "production-support") return TOPIC_IMAGES.support;
  if (s === "digital-coe-services" || s === "training-and-enablement") return TOPIC_IMAGES.training;

  // Solutions Pages Mappings (Fixed to match slugs in site-content)
  if (s === "core-banking-solution") return solutionCoreBanking;
  if (s === "data-engineering-analytics" || s === "data-engineering-and-analytics" || s === "data-and-ai") return TOPIC_IMAGES.dataAnalytics;
  if (s === "ai-intelligence") return TOPIC_IMAGES.aiIntelligence;
  if (s === "rpa-automation") return TOPIC_IMAGES.automation;
  if (s === "compliance" || s === "risk-and-compliance") return TOPIC_IMAGES.risk;
  if (s === "customer-intelligence") return TOPIC_IMAGES.customer;
  if (s === "business-intelligence") return TOPIC_IMAGES.bi;
  if (s === "enterprise-intelligence" || s === "enterprise-integration") return TOPIC_IMAGES.integration;

  // Generates a completely unique, glowing, high-tech vector graphic themed in our brand colors
  return generateSvgDataUrl(s);
}

function generateSvgDataUrl(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const primaryHue = Math.abs(hash % 360);
  const secondaryHue = (primaryHue + 40) % 360;
  
  const bgStart = `hsl(${primaryHue}, 60%, 6%)`;
  const bgEnd = `hsl(${secondaryHue}, 65%, 3%)`;
  
  let elements = "";
  
  // Tech grid lines
  elements += `<path d="M0,25 L400,25 M0,75 L400,75 M0,125 L400,125 M0,175 L400,175 M0,225 L400,225 M0,275 L400,275 M25,0 L25,300 M75,0 L75,300 M125,0 L125,300 M175,0 L175,300 M225,0 L225,300 M275,0 L275,300" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>`;
  
  const type = Math.abs(hash) % 4;
  if (type === 0) {
    // Glowing concentric orbital rings (Networks, AI, Partners)
    elements += `<circle cx="200" cy="150" r="70" stroke="url(#grad1)" stroke-width="1.5" fill="none" opacity="0.4"/>`;
    elements += `<circle cx="200" cy="150" r="100" stroke="url(#grad2)" stroke-width="1" stroke-dasharray="6,4" fill="none" opacity="0.3"/>`;
    elements += `<circle cx="200" cy="150" r="45" stroke="url(#grad1)" stroke-width="2" fill="none" opacity="0.6"/>`;
    elements += `<circle cx="130" cy="150" r="5" fill="#00C2FF" filter="url(#glow)"/>`;
    elements += `<circle cx="270" cy="150" r="5" fill="#FF2E93" filter="url(#glow)"/>`;
    elements += `<circle cx="200" cy="80" r="6" fill="#EA580C" filter="url(#glow)"/>`;
  } else if (type === 1) {
    // Data mesh network / interconnected nodes (Consulting, Analytics, Platforms)
    elements += `<path d="M110,90 L210,130 L290,100 L240,210 L140,190 Z" stroke="url(#grad1)" stroke-width="1.5" fill="none" opacity="0.5"/>`;
    elements += `<path d="M110,90 L140,190 M210,130 L240,210 M290,100 L140,190" stroke="url(#grad2)" stroke-width="1" fill="none" opacity="0.3"/>`;
    elements += `<circle cx="110" cy="90" r="6" fill="#00C2FF" filter="url(#glow)"/>`;
    elements += `<circle cx="210" cy="130" r="8" fill="#7A2BF5" filter="url(#glow)"/>`;
    elements += `<circle cx="290" cy="100" r="6" fill="#00C2FF" filter="url(#glow)"/>`;
    elements += `<circle cx="240" cy="210" r="7" fill="#EA580C" filter="url(#glow)"/>`;
    elements += `<circle cx="140" cy="190" r="6" fill="#FF2E93" filter="url(#glow)"/>`;
  } else if (type === 2) {
    // Fintech growth trend chart (Strategy, Revenue Assurance, Insights)
    elements += `<path d="M60,230 L110,180 L160,200 L210,140 L260,160 L310,90 L340,110" stroke="url(#grad1)" stroke-width="3.5" fill="none" stroke-linecap="round" filter="url(#glow)"/>`;
    elements += `<path d="M60,230 L110,180 L160,200 L210,140 L260,160 L310,90 L340,110 L340,260 L60,260 Z" fill="url(#areaGrad)" opacity="0.15"/>`;
    elements += `<circle cx="310" cy="90" r="6" fill="#FF2E93" filter="url(#glow)"/>`;
    elements += `<circle cx="210" cy="140" r="5" fill="#00C2FF"/>`;
  } else {
    // Cyber-shield / Secure data block (Security, Risk, Architecture)
    elements += `<rect x="150" y="100" width="100" height="100" rx="15" stroke="url(#grad1)" stroke-width="2" fill="none" opacity="0.6"/>`;
    elements += `<rect x="130" y="80" width="140" height="140" rx="20" stroke="url(#grad2)" stroke-width="1.5" stroke-dasharray="6,4" fill="none" opacity="0.4"/>`;
    elements += `<circle cx="200" cy="150" r="22" fill="none" stroke="#FF2E93" stroke-width="1.5" filter="url(#glow)"/>`;
  }
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgStart}" />
        <stop offset="100%" stop-color="${bgEnd}" />
      </linearGradient>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00C2FF" />
        <stop offset="100%" stop-color="#7A2BF5" />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#EA580C" />
        <stop offset="100%" stop-color="#FF2E93" />
      </linearGradient>
      <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#00C2FF" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#00C2FF" stop-opacity="0"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGrad)" />
    \${elements}
  </svg>`;
  
  const base64 = typeof btoa === 'function'
    ? btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}
