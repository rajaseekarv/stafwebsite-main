/**
 * Stafróf Intelligence Corporation — central content map.
 * ALL copy is sourced verbatim from the uploaded PDF
 * (Copy_of_Website_Creation.docx) via src/data/pdf-content.json.
 * No content is invented in this file.
 */
import raw from "@/data/pdf-content.json";
import docxExtracted from "@/data/docx-content-extracted.json";

export type SectionKey =
  | "about"
  | "products"
  | "platforms"
  | "solutions"
  | "services"
  | "consulting"
  | "segments"
  | "partners"
  | "insights"
  | "careers";

export type NamedItem = { name: string; desc: string };
export type ClosingBlock = { heading: string; paragraphs: string[] };
export type PoweredBy = { paragraphs?: string[]; items?: string[] };

export type SubPage = {
  slug: string;
  title: string;
  tagline: string;
  intro?: string[];
  paragraphs?: string[];
  capabilities?: NamedItem[];
  subitems?: NamedItem[];
  subitemsLabel?: string;
  core?: string[];
  coreLabel?: string;
  coverage?: string[];
  coverageLabel?: string;
  benefits?: string[];
  approach?: string[];
  poweredBy?: PoweredBy;
  poweredByLabel?: string;
  closing?: ClosingBlock[];
  closingTagline?: string;
};

export type Section = {
  key: SectionKey;
  label: string;
  basePath: `/${string}`;
  eyebrow: string;
  headline: string;
  summary: string;
  pages: SubPage[];
};

const rawData = raw as Record<SectionKey, SubPage[]>;

// Extract 'revnexure-360-suite' from products list and move to platforms
const productsList = rawData.products ?? [];
const revnexure360 = productsList.find((p) => p.slug === "revnexure-360-suite");
const filteredProducts = productsList.filter((p) => p.slug !== "revnexure-360-suite");

const platformsList = rawData.platforms ?? [];
const updatedPlatforms = revnexure360 ? [revnexure360, ...platformsList] : platformsList;

const consultingList = rawData.consulting ?? [];
const updatedConsulting = [
  {
    ...(consultingList.find(p => p.slug.includes("banking")) ?? consultingList[0]),
    slug: "core-banking-consulting",
    title: "Core Banking",
  },
  {
    ...(consultingList.find(p => p.slug.includes("ai")) ?? consultingList[1]),
    slug: "agentic-ai-consulting",
    title: "Agentic AI",
  },
  {
    ...(consultingList.find(p => p.slug.includes("data")) ?? consultingList[2]),
    slug: "data-engineering-consulting",
    title: "Data Engineering",
  },
  {
    ...(consultingList.find(p => p.slug.includes("transformation")) ?? consultingList[3]),
    slug: "digital-transformation",
    title: "Digital Transformation",
  },
  {
    ...(consultingList.find(p => p.slug.includes("architecture")) ?? consultingList[4]),
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
  },
  {
    ...(consultingList.find(p => p.slug.includes("analytics")) ?? consultingList[5]),
    slug: "data-analytics-consulting",
    title: "Data Analytics",
  },
  {
    ...(consultingList.find(p => p.slug.includes("risk")) ?? consultingList[6]),
    slug: "risk-compliance-consulting",
    title: "Risk & Compliance",
  }
];

const SEGMENT_PAGES: SubPage[] = [
  {
    slug: "retail-banking",
    title: "Retail Banking",
    tagline: "Intelligent revenue assurance and digital transformation for consumer banking services.",
    paragraphs: [
      "Stafróf's solutions for Retail Banking enable consumer financial institutions to safeguard interest margins, optimize card revenue streams, and automate fraud prevention across retail channels.",
      "By integrating real-time analytics with digital customer journeys, we help institutions deliver secure, seamless, and highly personalized retail banking experiences."
    ],
    capabilities: (docxExtracted as any)["retail-banking"]?.capabilities,
    benefits: (docxExtracted as any)["retail-banking"]?.benefits
  },
  {
    slug: "corporate-banking",
    title: "Corporate Banking",
    tagline: "Enhancing revenue integrity, trade services, and cash management for corporate clients.",
    paragraphs: [
      "Our Corporate Banking systems streamline large-scale commercial relationships, treasury operations, and transaction services.",
      "We provide robust data reconciliation, billing auditing, and fee leakage prevention platforms designed to handle complex corporate credit and trade agreements."
    ],
    capabilities: (docxExtracted as any)["corporate-banking"]?.capabilities,
    benefits: (docxExtracted as any)["corporate-banking"]?.benefits
  },
  {
    slug: "commercial-banking",
    title: "Commercial Banking",
    tagline: "Providing revenue leakage prevention and business intelligence for commercial lending.",
    paragraphs: [
      "Commercial Banking institutions face unique challenges in risk management and interest margin verification.",
      "Stafróf delivers custom intelligence solutions that audit commercial loan fees, monitor collateral compliance, and optimize relationship management processes."
    ],
    capabilities: (docxExtracted as any)["commercial-banking"]?.capabilities,
    benefits: (docxExtracted as any)["commercial-banking"]?.benefits
  },
  {
    slug: "sme-msme-banking",
    title: "SME/MSME Banking",
    tagline: "Supporting growth and financial inclusion for small and medium enterprises.",
    paragraphs: [
      "SME and MSME sectors require flexible, cost-effective digital banking channels and rapid credit decisioning.",
      "Our platforms enable banks to offer tailored SME lending packages, automated working capital financing, and simplified payment systems."
    ]
  },
  {
    slug: "private-banking",
    title: "Private Banking",
    tagline: "Bespoke wealth preservation, advisory, and investment platforms for high-net-worth clients.",
    paragraphs: [
      "Private Banking demands the highest standards of portfolio intelligence, advisory tools, and client relationship management.",
      "We integrate AgenNova's agentic AI to help wealth managers design personalized investment strategies, manage risk, and automate high-value banking operations."
    ]
  },
  {
    slug: "investment-banking",
    title: "Investment Banking",
    tagline: "Advanced analytics, trade reconstruction, and compliance systems for capital markets.",
    paragraphs: [
      "Our platforms support investment banks in complex capital market transaction monitoring, compliance tracking, and advisory support.",
      "We deliver high-frequency data integration engines that reconcile trading systems and prevent billing discrepancies."
    ],
    capabilities: (docxExtracted as any)["investment-banking"]?.capabilities,
    benefits: (docxExtracted as any)["investment-banking"]?.benefits
  },
  {
    slug: "wholesale-banking",
    title: "Wholesale Banking",
    tagline: "Streamlining large-scale treasury, lending, and syndication services.",
    paragraphs: [
      "Wholesale banking operations require powerful multi-currency transaction processing and secure enterprise integration.",
      "Stafróf's platforms orchestrate automated workflows across syndicated loans, global treasury pools, and large-scale currency settlement."
    ]
  },
  {
    slug: "treasury-capital-markets",
    title: "Treasury & Capital Markets",
    tagline: "Comprehensive risk management, liquidity auditing, and trading system reconciliation.",
    paragraphs: [
      "Ensure complete integrity of treasury investments, forex liquidity pools, and bond portfolios.",
      "Stafróf unifies capital market feeds, automates margin calls, and audits transaction fees to eliminate operational leakage."
    ],
    capabilities: (docxExtracted as any)["treasury-capital-markets"]?.capabilities,
    benefits: (docxExtracted as any)["treasury-capital-markets"]?.benefits
  },
  {
    slug: "wealth-management",
    title: "Wealth Management",
    tagline: "Securing assets, automating portfolio reconciliation, and optimizing client advisory.",
    paragraphs: [
      "Empower financial advisors and asset managers with real-time portfolio analysis and automated compliance auditing.",
      "We deliver end-to-end wealth management tools that optimize asset allocation and protect client wealth against operational errors."
    ],
    capabilities: (docxExtracted as any)["wealth-management"]?.capabilities,
    benefits: (docxExtracted as any)["wealth-management"]?.benefits
  },
  {
    slug: "cards-payments",
    title: "Cards & Payments",
    tagline: "Preventing transaction fee leakage and fraud across card networks and payment gateways.",
    paragraphs: [
      "Cards and Payments systems require instantaneous, ultra-secure transaction routing and fee reconciliation.",
      "Our RevNexure Cards module audits interchange fees, monitors merchant settlements, and detects anomalies in real-time."
    ],
    capabilities: (docxExtracted as any)["cards-payments"]?.capabilities,
    benefits: (docxExtracted as any)["cards-payments"]?.benefits
  },
  {
    slug: "trade-finance",
    title: "Trade Finance",
    tagline: "Automating letters of credit, document verification, and global supply chain finance.",
    paragraphs: [
      "Global trade finance transactions involve complex paper trails and multi-party coordination.",
      "Stafróf's intelligent automation digitizes document classification, audits trade billing, and accelerates global transaction approvals."
    ]
  },
  {
    slug: "transaction-banking",
    title: "Transaction Banking",
    tagline: "Securing cash management and global clearing streams for corporate enterprises.",
    paragraphs: [
      "Transaction banking is the lifeblood of corporate liquidity management and automated trade networks.",
      "We deliver robust platforms that reconcile clearing feeds, optimize payment processing routing, and audit deposit billing."
    ],
    capabilities: (docxExtracted as any)["transaction-banking"]?.capabilities,
    benefits: (docxExtracted as any)["transaction-banking"]?.benefits
  },
  {
    slug: "digital-banking",
    title: "Digital Banking",
    tagline: "Next-gen API-led open banking platforms and omni-channel customer intelligence.",
    paragraphs: [
      "Modern digital banking requires hyper-scalable API gateways, secure open banking integration, and responsive mobile interfaces.",
      "We help traditional banks transition to digital-native architectures, providing AI-powered chatbot agents and automated onboarding workflows."
    ]
  },
  {
    slug: "custody-securities-services",
    title: "Custody & Securities Services",
    tagline: "Auditing custody billing, asset servicing, and clearing for institutional holdings.",
    paragraphs: [
      "Institutional custody operations involve large-scale security tracking, dividend administration, and proxy voting services.",
      "Our platforms audit asset management fees, reconcile custodian balances, and automate corporate actions processing."
    ]
  },
  {
    slug: "risk-compliance",
    title: "Risk & Compliance",
    tagline: "Automated regulatory reporting, AML tracking, and operational risk mitigation.",
    paragraphs: [
      "Navigate changing international compliance standards and mitigate operational risk profiles.",
      "We deploy AI-powered risk scoring models, automate audit logs, and monitor transaction streams for regulatory anomalies."
    ]
  },
  {
    slug: "operations-shared-services",
    title: "Operations & Shared Services",
    tagline: "Streamlining back-office workflows, reconciliation, and shared enterprise resources.",
    paragraphs: [
      "Optimize cost-efficiency and performance across centralized back-office hubs and IT services.",
      "Stafróf unifies data flows from legacy core systems, automates manual reconciliation tasks, and standardizes shared resources."
    ]
  }
];

const solutionsList = rawData.solutions ?? [];
const updatedSolutions = [
  {
    ...(solutionsList.find(p => p.slug.includes("revenue")) ?? solutionsList[0]),
    slug: "core-banking-solution",
    title: "Core Banking Solution",
    tagline: "Modernizing core systems, transaction orchestration and digital processing for next-generation banking operations.",
    capabilities: (docxExtracted as any)["core-banking-solution"]?.capabilities,
    subitems: (docxExtracted as any)["core-banking-solution"]?.subitems,
    benefits: (docxExtracted as any)["core-banking-solution"]?.benefits
  },
  {
    ...(solutionsList.find(p => p.slug.includes("data-engineering")) ?? solutionsList[1]),
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
  },
  {
    ...(solutionsList.find(p => p.slug.includes("ai-intelligence")) ?? solutionsList[2]),
    slug: "ai-intelligence",
    title: "AI Intelligence",
  },
  {
    ...(solutionsList.find(p => p.slug.includes("automation")) ?? solutionsList[3]),
    slug: "rpa-automation",
    title: "RPA Automation",
  },
  {
    ...(solutionsList.find(p => p.slug.includes("risk")) ?? solutionsList[4]),
    slug: "compliance",
    title: "Risk & Compliance",
  },
  {
    ...(solutionsList.find(p => p.slug.includes("customer")) ?? solutionsList[5]),
    slug: "customer-intelligence",
    title: "Customer Intelligence",
  },
  {
    ...(solutionsList.find(p => p.slug.includes("business-intelligence")) ?? solutionsList[6]),
    slug: "business-intelligence",
    title: "Business Intelligence",
  },
  {
    ...(solutionsList.find(p => p.slug.includes("integration")) ?? solutionsList[7]),
    slug: "enterprise-intelligence",
    title: "Enterprise Intelligence",
  }
];

const servicesList = rawData.services ?? [];
const updatedServices = [
  {
    ...(servicesList.find(p => p.slug.includes("revenue")) ?? servicesList[0]),
    slug: "revenue-assurance-services",
    title: "Revenue Assurance Services",
  },
  {
    ...(servicesList.find(p => p.slug.includes("training")) ?? servicesList[5]),
    slug: "application-development",
    title: "Application Development",
    tagline: "End-to-end custom application development, architecture design, and modernization for financial systems.",
  },
  {
    ...(servicesList.find(p => p.slug.includes("data")) ?? servicesList[1]),
    slug: "data-agentic-ai",
    title: "Data & Agentic AI",
  },
  {
    ...(servicesList.find(p => p.slug.includes("transformation")) ?? servicesList[2]),
    slug: "digital-transformation",
    title: "Digital Transformation",
  },
  {
    ...(servicesList.find(p => p.slug.includes("implementation")) ?? servicesList[3]),
    slug: "product-implementation",
    title: "Product Implementation",
  },
  {
    ...(servicesList.find(p => p.slug.includes("managed")) ?? servicesList[4]),
    slug: "managed-services",
    title: "Managed Services",
  },
  {
    ...(servicesList.find(p => p.slug.includes("production")) ?? servicesList[6]),
    slug: "production-services",
    title: "Production Services",
  },
  {
    ...(servicesList.find(p => p.slug.includes("training")) ?? servicesList[5]),
    slug: "digital-coe-services",
    title: "Digital COE Services",
    tagline: "Establishing Center of Excellence frameworks, standards, and training for banking technology transformation.",
  }
];

const data: Record<SectionKey, SubPage[]> = {
  ...rawData,
  products: filteredProducts,
  platforms: updatedPlatforms,
  solutions: updatedSolutions,
  services: updatedServices,
  consulting: updatedConsulting,
  insights: [
    ...((rawData as any).insights ?? []),
    {
      slug: "careers",
      title: "Careers",
      tagline: "Join our team of technology innovators and domain experts to shape the future of banking.",
      paragraphs: [
        "At Stafróf, we are building next-generation revenue assurance, data, and AI platforms that empower financial institutions worldwide.",
        "Explore opportunities to grow your career, collaborate with industry leaders, and deliver meaningful impact."
      ]
    }
  ],
  careers: [],
  segments: SEGMENT_PAGES,
};

// Section meta (label / eyebrow / headline / summary) is derived from the PDF —
// using each section's introductory title + tagline lines.
const META: Record<SectionKey, Omit<Section, "key" | "pages">> = {
  about: {
    label: "ABOUT",
    basePath: "/about",
    eyebrow: "About Stafróf Intelligence Corporation",
    headline: "Who We Are",
    summary:
      "Powering Banking, Financial Services & Capital Markets with AI, Data & Intelligent Innovation.",
  },
  products: {
    label: "PRODUCTS",
    basePath: "/products",
    eyebrow: "Banking Product Suites",
    headline: "RevNexure 360° Suite",
    summary:
      "AI-Powered Revenue Assurance Platform for Banking, Financial Services & Capital Markets.",
  },
  platforms: {
    label: "PLATFORMS",
    basePath: "/platforms",
    eyebrow: "Next-Gen Platforms",
    headline: "DataXentra & AgenNova",
    summary:
      "Foundational enterprise data and AI intelligence platforms that power Stafróf's product ecosystem.",
  },
  solutions: {
    label: "SOLUTIONS",
    basePath: "/solutions",
    eyebrow: "Solutions",
    headline: "Intelligent Solutions for Banking, Financial Services & Capital Markets",
    summary:
      "Outcome-led solutions across Revenue Assurance, Data & AI, Intelligent Automation, Risk & Compliance, Customer Intelligence, Business Intelligence and Enterprise Integration.",
  },
  services: {
    label: "SERVICES",
    basePath: "/services",
    eyebrow: "Services",
    headline: "End-to-End Services for AI, Data & Banking Transformation",
    summary:
      "Implementation, managed services, support, training, and transformation services for Stafróf's intelligent platforms.",
  },
  consulting: {
    label: "CONSULTING",
    basePath: "/consulting",
    eyebrow: "Consulting",
    headline: "Strategic Consulting for Modern Banking",
    summary:
      "Banking, AI, Data, Digital Transformation, Architecture, Analytics, Risk & Compliance and Product Advisory consulting.",
  },
  segments: {
    label: "SEGMENTS",
    basePath: "/segments",
    eyebrow: "Industry Segments",
    headline: "Tailored Solutions Across Financial Segments",
    summary: "Outcome-led innovation and revenue assurance across consumer, corporate, investment banking, and capital markets.",
  },
  partners: {
    label: "PARTNERS",
    basePath: "/partners",
    eyebrow: "Partners",
    headline: "Our Global Partner Network",
    summary: "Collaborating with technology leaders, cloud providers, and system integrators to deliver trusted innovation.",
  },
  insights: {
    label: "INSIGHTS",
    basePath: "/insights",
    eyebrow: "Insights",
    headline: "Thought Leadership & Industry Trends",
    summary: "Deep dives, articles, white papers, and webinars exploring the future of AI, data, and intelligent innovation in BFSM.",
  },
  careers: {
    label: "CAREERS",
    basePath: "/careers",
    eyebrow: "Careers",
    headline: "Build Your Career",
    summary: "Join our growing team and help develop enterprise technologies that power the future of financial services.",
  },
};

const ORDER: SectionKey[] = [
  "about",
  "products",
  "platforms",
  "solutions",
  "services",
  "consulting",
  "segments",
  "partners",
  "insights",
  "careers",
];

export const SITE: { sections: Section[] } = {
  sections: ORDER.map((key) => ({
    key,
    ...META[key],
    pages: data[key] ?? [],
  })),
};

export function findSection(key: SectionKey): Section {
  const s = SITE.sections.find((x) => x.key === key);
  if (!s) throw new Error(`Unknown section: ${key}`);
  return s;
}

export function findPage(key: SectionKey, slug: string): SubPage | undefined {
  return findSection(key).pages.find((p) => p.slug === slug);
}

export function cleanMenuTitle(title: string, sectionKey: string): string {
  const exactSolutions = [
    "Core Banking Solution",
    "Data Engineering & Analytics",
    "AI Intelligence",
    "RPA Automation",
    "Risk & Compliance",
    "Customer Intelligence",
    "Business Intelligence",
    "Enterprise Intelligence"
  ];
  const exactServices = [
    "Revenue Assurance Services",
    "Application Development",
    "Data & Agentic AI",
    "Digital Transformation",
    "Product Implementation",
    "Managed Services",
    "Production Services",
    "Digital COE Services"
  ];
  const exactConsulting = [
    "Core Banking",
    "Agentic AI",
    "Data Engineering",
    "Digital Transformation",
    "Enterprise Architecture",
    "Data Analytics",
    "Risk & Compliance"
  ];
  if (sectionKey === "solutions" && exactSolutions.includes(title)) return title;
  if (sectionKey === "services" && exactServices.includes(title)) return title;
  if (sectionKey === "consulting" && exactConsulting.includes(title)) return title;

  let cleaned = title;
  if (sectionKey === "solutions") {
    cleaned = cleaned.replace(/\s+Solutions?$/i, "");
  } else if (sectionKey === "services") {
    cleaned = cleaned.replace(/\s+Services?$/i, "");
  } else if (sectionKey === "consulting") {
    cleaned = cleaned.replace(/\s+Consulting?$/i, "");
    if (cleaned === "Data & Analytics") {
      cleaned = "Data Engineering";
    }
  } else if (sectionKey === "partners") {
    cleaned = cleaned.replace(/\s+Partners?$/i, "");
  }
  return cleaned;
}
