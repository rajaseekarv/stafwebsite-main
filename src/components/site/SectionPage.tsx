import { Link } from "@tanstack/react-router";
import { 
  Check, ArrowRight, Coins, ShieldCheck, Database, Brain, Cpu, Users, 
  LineChart, Network, Settings, Lock, Activity, Zap, Award, Globe, 
  Briefcase, Key, CheckCircle2, ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { findSection, type SectionKey, type SubPage } from "@/lib/site-content";
import { PRODUCT_LOGOS, getLogoForPage } from "@/lib/product-logos";
import { LogoBox } from "@/components/site/LogoBox";
import { sectionImage, SITE_IMAGES, topicImageFor } from "@/lib/section-images";
import { Reveal } from "@/components/site/Reveal";
import { SLUG_DOC_IMAGES } from "@/lib/doc-images-map";
import ImageViewer from "@/components/site/ImageViewer";

function getPremiumIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("revenue") || n.includes("leakage") || n.includes("billing") || n.includes("deposit") || n.includes("interest") || n.includes("pricing") || n.includes("fee") || n.includes("charge")) return Coins;
  if (n.includes("security") || n.includes("identity") || n.includes("access") || n.includes("encrypt") || n.includes("auth") || n.includes("zero trust")) return Lock;
  if (n.includes("data") || n.includes("db") || n.includes("warehouse") || n.includes("storage") || n.includes("lineage") || n.includes("governance")) return Database;
  if (n.includes("ai") || n.includes("intelligence") || n.includes("smart") || n.includes("cognitive") || n.includes("model") || n.includes("copilot") || n.includes("agent") || n.includes("predictive")) return Brain;
  if (n.includes("automation") || n.includes("rpa") || n.includes("process") || n.includes("workflow") || n.includes("engine") || n.includes("stream")) return Cpu;
  if (n.includes("risk") || n.includes("compliance") || n.includes("aml") || n.includes("fraud") || n.includes("audit") || n.includes("rule") || n.includes("sanction")) return ShieldCheck;
  if (n.includes("customer") || n.includes("user") || n.includes("client") || n.includes("relationship") || n.includes("onboard") || n.includes("cif") || n.includes("kyc")) return Users;
  if (n.includes("analytics") || n.includes("chart") || n.includes("report") || n.includes("measure") || n.includes("kpi") || n.includes("dashboard")) return LineChart;
  if (n.includes("integration") || n.includes("api") || n.includes("middleware") || n.includes("connection") || n.includes("network") || n.includes("kafka")) return Network;
  if (n.includes("speed") || n.includes("fast") || n.includes("real-time") || n.includes("performance") || n.includes("accelerat") || n.includes("teller")) return Zap;
  if (n.includes("global") || n.includes("cross-border") || n.includes("multi-currency") || n.includes("payment")) return Globe;
  if (n.includes("consulting") || n.includes("strategy") || n.includes("advisory") || n.includes("business") || n.includes("partner")) return Briefcase;
  return Check;
}

type Props = {
  sectionKey: SectionKey;
  slug: string;
};

function BulletSplit({ text }: { text: string }) {
  const segments = text.split(/(?=●)/);
  const before = segments[0].trim();
  const rest = segments.slice(1);
  const bullets: string[] = [];
  let after = "";
  for (let i = 0; i < rest.length; i++) {
    const seg = rest[i].replace(/^●\s*/, "").trim();
    if (i === rest.length - 1) {
      const m = seg.match(/^(.+?\.\s+)([A-Z].+)$/);
      if (m) {
        bullets.push(m[1].trim());
        after = m[2].trim();
      } else {
        bullets.push(seg);
      }
    } else {
      bullets.push(seg);
    }
  }
  return (
    <>
      {before && <p>{before}</p>}
      <ul className="my-4 list-disc space-y-2 pl-6">
        {bullets.map((b, idx) => (
          <li key={idx} className="text-lg leading-relaxed text-ink-2">{b}</li>
        ))}
      </ul>
      {after && <p className="text-lg leading-relaxed text-ink-2">{after}</p>}
    </>
  );
}

export function SectionPage({ sectionKey, slug }: Props) {
  const section = findSection(sectionKey);
  const page = section.pages.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you’re looking for doesn’t exist in {section.label}.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Go home</Link>
        </Button>
      </div>
    );
  }

{/* -------------------- Who We Are -------------------- */}
  if (sectionKey === "about" && slug === "who-we-are") {
    const imgSrc = SLUG_DOC_IMAGES["who-we-are"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              WHO WE ARE
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>
              At Stafróf, we believe that data is the foundation of intelligent banking. By transforming data into actionable insights and automating complex business processes, we empower financial institutions to make faster decisions, improve operational efficiency, reduce risk, and unlock sustainable growth.
            </p>
            <br /><p>Powering Banking, Financial Services & Capital Markets with AI, Data & Intelligent Innovation</p>
            <br /><p>Stafróf Intelligence Corporation is a next-generation enterprise technology company dedicated to empowering the Banking, Financial Services, and Capital Markets industry through innovative AI, enterprise data, and intelligent automation platforms.</p>
            <br /><p>We develop enterprise-grade products that help financial institutions modernize operations, optimize revenue, improve data intelligence, automate business processes, and accelerate digital transformation. Our solutions are designed to solve complex business challenges while enabling organizations to operate more efficiently, make smarter decisions, and deliver exceptional customer experiences.</p>
            <br /><p>With deep domain expertise in banking and financial services, combined with modern engineering and AI capabilities, we develop secure, scalable, and enterprise-grade platforms designed to address the evolving needs of today's financial ecosystem.</p>
            <br /><p><b>Our flagship platforms include:</b></p>
            <ul className="mt-3 list-disc pl-6">
              <li><b>RevNexure</b> - AI-powered Revenue Assurance Platform that helps identify, prevent, and recover revenue leakages across banking operations.</li>
              <li><b>DataXentra</b> - Enterprise Data Platform that unifies, governs, and transforms enterprise data into trusted business intelligence. </li>
              <li><b>AgenNova</b> - AI Intelligence Platform that enables intelligent automation, AI agents, predictive insights, and decision intelligence. </li>
            </ul>
            <br /><p>As a product-driven organization, our commitment is to deliver innovative, secure, and scalable technology solutions that help financial institutions thrive in an increasingly digital world.</p>
            <br /><p>At Stafróf, we embrace customer-centric innovation and design thinking to solve complex business challenges. By combining advanced analytics, responsible AI, and enterprise technology, we help organizations improve operational efficiency, strengthen compliance, enhance customer experiences, and drive sustainable growth.</p>
            <br /><p>Our commitment is to empower banks, financial institutions, and capital market organizations with intelligent technologies that enable them to innovate with confidence, operate with agility, and compete successfully in an increasingly digital world.</p>
            <br /><p><b>Our Purpose</b></p>
            <p>To empower financial institutions with intelligent technologies that simplify complexity, accelerate innovation, and create lasting business value.</p>              
          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  {/* -------------------- Our Vision -------------------- */}
  if (sectionKey === "about" && slug === "vision") {
    const imgSrc = SLUG_DOC_IMAGES["vision"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Our Vision
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>To become a globally trusted enterprise technology company, empowering the future of Banking, Financial Services, and Capital Markets through AI, data, and intelligent innovation.</p>
            <br /><p><b>Mission</b></p>
            <p>To help financial institutions accelerate digital transformation by delivering innovative, secure, and scalable AI-powered platforms that unlock the value of data, optimize business performance, automate operations, and enable intelligent decision-making.</p>
            <br /><br /><p className="text-2xl font-semibold mb-3">Our Core Values: </p>
            <p><b>Customer First</b></p>
            <p>We put our customers at the center of everything we do, creating solutions that address real business challenges and deliver measurable outcomes.</p>
            <br /><p><b>Innovation</b></p>
            <p>We embrace curiosity, creativity, and continuous improvement to develop technologies that shape the future of financial services.</p>
            <br /><p><b>Excellence</b></p>
            <p>We strive for the highest standards in engineering, product quality, service delivery, and customer experience.</p>
            <br /><p><b>Security & Trust</b></p>
            <p>We design our platforms with security, privacy, and reliability at the core, helping customers operate with confidence.</p>

          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

{/* -------------------- Our Story -------------------- */}
if (sectionKey === "about" && slug === "our-story") {
  const imgSrc =
    SLUG_DOC_IMAGES["our-story"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic pt-32 pb-20 relative overflow-hidden">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />

        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT US
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-19 pb-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-6xl text-left px-6 space-y-12 text-center animate-fade-in">

          <Reveal className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Reimagining Banking Intelligence 
            </h2>
          </Reveal>

          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>Stafrof Intelligence Corporation was founded with a simple belief:</p>
            <br /><p>Financial institutions should spend their time serving customers—not searching for revenue leakages, fragmented data, and operational inefficiencies.</p>
            <br /><p>After decades of leading large-scale banking transformation programs across global financial institutions, we witnessed the same challenges repeated everywhere—disconnected systems, inconsistent data, manual reconciliations, compliance pressures, and millions of dollars lost through unnoticed revenue leakages.</p>
            <br /><p>Banks were investing heavily in digital transformation, yet critical business decisions were still constrained by fragmented data and reactive operations.</p>
            <br /><p>We believed there had to be a better way.</p>
            <br /><p>That vision became Stafrof Intelligence Corporation.</p>
            <br /><br /><p className="text-2xl font-semibold mb-3">Why We Exist</p>
            <p>Our mission is to help banks transform their data into intelligence and their intelligence into measurable business value.</p>
            <br /><p>We combine Artificial Intelligence, enterprise data engineering, advanced analytics, and intelligent automation into a unified platform that continuously protects revenue, improves operational efficiency, strengthens compliance, and empowers faster decision-making.</p>
            <br /><p>Instead of solving isolated problems, we build connected platforms that work across the entire banking ecosystem.</p>
            <br /><br /><p className="text-2xl font-semibold mb-3">What We Build</p>
            <p>Our flagship platform, RevNexure 360° Suite, delivers AI-powered Revenue Assurance across twelve major banking business lines, including:</p>
            <ul className="mt-3 list-disc pl-6">
              <li>Lending </li>
              <li>Cards & Payments </li>
              <li>ATM & Self-Service Banking </li>
              <li>Corporate Banking </li>
              <li>Trade Finance </li>
              <li>Foreign Exchange </li>
              <li>Securities </li>
              <li>Settlement </li>
              <li>Wealth Management </li>
              <li>Derivatives </li>
              <li>Custody Services </li>
              <li>Merchant Payments</li>
            </ul>
            <br /><br /><p className="text-2xl font-semibold mb-3">Supporting RevNexure are two enterprise platforms:</p>
            <p><b>DataXentra</b> — Our Enterprise Data Platform that unifies, governs, and delivers trusted banking data.</p>
            <br /><p><b>AgenNova</b> — Our AI Intelligence Platform that provides intelligent agents, predictive analytics, automation, and real-time decision intelligence.</p>
            <br /><p>Together, these platforms create a modern banking intelligence ecosystem.</p>

          </Reveal>

          {/* <Reveal
            delay={250}
            direction="right"
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Our Vision - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </Reveal> */}

        </div>
      </section>
    </>
  );
}


  {/* -------------------- Our DNA -------------------- */}
  if (sectionKey === "about" && slug === "our-dna") {
    const imgSrc = SLUG_DOC_IMAGES["our-dna"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Our DNA
            </h1>
          </Reveal>
          
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  {/* -------------------- Board of Directors  -------------------- */}
  if (sectionKey === "about" && slug === "board-of-directors") {
    const imgSrc = SLUG_DOC_IMAGES["board-of-directors"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Board of Directors
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>Stafróf Intelligence Corporation is governed by a distinguished board of directors with deep expertise in banking, finance, technology, and corporate governance.</p>
            <br /><p>Details of our Board of Directors will be published soon. Our board members play a pivotal role in guiding our long-term strategy, ensuring regulatory compliance, and driving sustainable business value for our stakeholders.</p>

          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  {/* -------------------- Leadership Team  -------------------- */}
  if (sectionKey === "about" && slug === "leadership-team") {
    const imgSrc = SLUG_DOC_IMAGES["leadership-team"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Leadership Team
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>Our leadership team brings together decades of experience in financial technology, enterprise software, and artificial intelligence.</p>
            <br /><p>Details of our Leadership Team will be published soon. Under their guidance, Stafróf continues to build next-generation platforms that help financial institutions automate operations, optimize revenue, and accelerate digital transformation.</p>

          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  {/* -------------------- Our Design Thinking Principles -------------------- */}
  if (sectionKey === "about" && slug === "design-thinking") {
    const imgSrc = SLUG_DOC_IMAGES["design-thinking"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Our Design Thinking Principles
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>At Stafróf, we place people, business value, and innovation at the center of every solution we create. Our design thinking approach helps us solve complex challenges through collaboration, creativity, and continuous improvement.</p>
            <br /><p><b>Empathize</b></p>
            <p>Understand customer needs, challenges, and business goals.</p>
            <br /><p><b>Define</b></p>
            <p>Identify the right problems before designing solutions.</p>
            <br /><p><b>Ideate</b></p>
            <p>Generate innovative ideas that create measurable business value.</p>
            <br /><p><b>Prototype</b></p>
            <p>Design and validate solutions quickly through iterative development.</p>
            <br /><p><b>Test</b></p>
            <p>Continuously evaluate, refine, and improve based on real-world feedback.</p>
            <br /><p><b>Deliver Value</b></p>
            <p>Transform ideas into scalable, secure, and intelligent solutions that drive business outcomes.</p>
            <br /><br /><p className="text-2xl font-semibold mb-3">Our Design Philosophy</p>
            <br /><p><b>Human-Centered. Data-Driven. AI-Powered.</b></p>
            <p>We combine deep industry expertise, design thinking, advanced analytics, and artificial intelligence to deliver innovative solutions that help financial institutions innovate with confidence and achieve sustainable growth.</p>

          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  {/* -------------------- Our AI Intelligence Principles -------------------- */}
if (sectionKey === "about" && slug === "ai-principles") {
  const imgSrc =
    SLUG_DOC_IMAGES["ai-principles"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic pt-32 pb-20 relative overflow-hidden">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />

        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT US
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-19 pb-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-6xl text-left px-6 space-y-12 text-center animate-fade-in">

          <Reveal delay={150} className="text-xl text-ink-2 max-w-5xl mx-auto text-justify">
            <p>At Stafróf, we believe Artificial Intelligence should be responsible, transparent, secure, and focused on delivering measurable business value. Our AI principles guide how we design, develop, and deploy intelligent solutions for the Banking, Financial Services, and Capital Markets industry.</p>
            <br /><p><b>Human-Centered AI</b></p>
            <p>AI is designed to empower people and support better decision-making.</p>
            <br /><p><b>Responsible AI</b></p>
            <p>We develop AI solutions with fairness, accountability, and ethical considerations.</p>
            <br /><p><b>Explainable AI</b></p>
            <p>We promote transparency by enabling understandable and trustworthy AI-driven insights.</p>
            <br /><p><b>Secure & Private</b></p>
            <p>Security, privacy, and data protection are embedded into every AI solution.</p>
            <br /><p><b>Reliable & Scalable</b></p>
            <p>Our AI platforms are built for enterprise-grade performance, resilience, and scalability.</p>
            <br /><p><b>Business Value</b></p>
            <p>We focus on delivering measurable outcomes that improve efficiency, reduce risk, and accelerate innovation.</p>
            <br /><br /><p className="text-2xl font-semibold mb-3">Our AI Commitment</p>
            <br /><p><b>Building Trusted AI for Smarter Financial Services</b></p>
            <p>We are committed to developing AI solutions that are secure, responsible, and designed to help financial institutions make better decisions, automate intelligently, and innovate with confidence.</p>

          </Reveal>

          { <Reveal
            delay={250}
            direction="right"
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Our Vision - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </Reveal> }

        </div>
      </section>
    </>
  );
}
  
  {/* -------------------- Our Enterprise Data Strategy -------------------- */}
if (sectionKey === "about" && slug === "data-strategy") {
  const imgSrc =
    SLUG_DOC_IMAGES["data-strategy"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic pt-32 pb-20 relative overflow-hidden">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />

        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT US
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-19 pb-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-6xl text-left px-6 space-y-12 text-center animate-fade-in">

          <Reveal delay={150} className="text-xl text-ink-2 max-w-5xl mx-auto text-justify">
            <p>At Stafróf, we believe data is the foundation of intelligent enterprises. Our data strategy enables organizations to transform fragmented data into trusted, governed, and actionable insights that drive better business decisions and accelerate digital transformation.</p>
            <br /><p><b>Unified Data</b></p>
            <p>Integrate enterprise data across systems to create a single, trusted source of truth.</p>
            <br /><p><b>Data Quality</b></p>
            <p>Ensure data is accurate, consistent, complete, and reliable for business-critical decisions.</p>
            <br /><p><b>Data Governance</b></p>
            <p>Establish strong governance, stewardship, and compliance to maximize the value of enterprise data.</p>
            <br /><p><b>Real-Time Intelligence</b></p>
            <p>Enable timely insights with real-time data integration, analytics, and monitoring.</p>
            <br /><p><b>AI-Ready Data</b></p>
            <p>Build high-quality, governed data foundations that power AI, analytics, and intelligent automation.</p>
            <br /><p><b>Security & Privacy</b></p>
            <p>Protect enterprise data through robust security, privacy, and regulatory compliance.</p>
            <br /><br /><p className="text-2xl font-semibold mb-3">Our Data Commitment</p>
            <br /><p><b>Transforming Data into Trusted Intelligence</b></p>
            <p>We help organizations unlock the full value of their data by delivering secure, scalable, and intelligent data platforms that empower innovation, operational excellence, and sustainable business growth.</p>

          </Reveal>

        </div>
      </section>
    </>
  );
}

  {/* -------------------- What We Do -------------------- */}
if (sectionKey === "about" && slug === "what-we-do") {
  const imgSrc = SLUG_DOC_IMAGES["what-we-do"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic pt-32 pb-20 relative overflow-hidden">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />

        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT US
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-19 pb-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-6xl text-left px-6 space-y-12 text-center animate-fade-in">

          <Reveal delay={150} className="text-xl text-ink-2 max-w-5xl mx-auto text-justify">
            <p>We help Banking, Financial Services, and Capital Markets organizations accelerate digital transformation through enterprise AI, data, analytics, and intelligent automation. Our solutions enable financial institutions to modernize operations, optimize revenue, improve decision-making, and deliver exceptional customer experiences.</p>
            <br /><p>AI Revenue Assurance</p>
            <p>Identify, prevent, and recover revenue leakages across banking products, services, and channels.</p>
            <br /><p>Enterprise Data Platform</p>
            <p>Integrate, govern, and transform enterprise data into trusted, AI-ready intelligence.</p>
            <br /><p>AI Intelligence & Automation</p>
            <p>Deploy intelligent AI agents, predictive analytics, and workflow automation to improve business performance.</p>
            <br /><p>Data Engineering & Analytics</p>
            <p>Build scalable data foundations, real-time data pipelines, and advanced analytics solutions.</p>
            <br /><p>Intelligent Decision Support</p>
            <p>Empower business leaders with actionable insights, executive dashboards, and AI-driven recommendations.</p>
            <br /><p>Digital Transformation</p>
            <p>Modernize legacy systems, streamline operations, and accelerate innovation with cloud-native technologies.</p>
            <br /><p className="text-2xl font-semibold mb-3">Our Product Platforms</p>
            <ul className="mt-3 list-disc pl-6">
              <li>RevNexure - AI Revenue Assurance Platform </li>
              <li>DataXentra - Enterprise Data Platform </li>
              <li>AgenNova - AI Intelligence Platform</li>
            </ul>
            <br /><p>Delivering Intelligent Solutions for Financial Services</p>
            <br /><p>From data to decisions, and from automation to innovation, we build secure, scalable, and enterprise-grade platforms that help financial institutions operate smarter, innovate faster, and create lasting business value.</p>

          </Reveal>

          <Reveal
            delay={250}
            direction="right"
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Our Vision - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}

  {/* -------------------- Industries We Serve -------------------- */}
  if (sectionKey === "about" && slug === "industries") {
    const imgSrc = SLUG_DOC_IMAGES["industries"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Industries We Serve
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>Stafróf Intelligence Corporation delivers AI, data, and intelligent automation solutions that help organizations modernize operations, improve decision-making, and accelerate digital transformation across the financial services ecosystem.</p>
            <br /><p><b>Banking</b></p>
            <p>Empowering retail, commercial, corporate, and digital banks with AI-driven platforms for revenue assurance, data intelligence, and operational excellence.</p>
            <br /><p><b>Financial Services</b></p>
            <p>Helping financial institutions optimize operations, strengthen governance, automate processes, and unlock greater business value through intelligent technologies.</p>
            <br /><p><b>Capital Markets</b></p>
            <p>Supporting capital market firms with advanced data, analytics, AI, and automation to improve operational efficiency, compliance, and business performance.</p>
            <br /><p><b>Fintech</b></p>
            <p>Enabling fintech companies to build scalable, intelligent, and data-driven digital financial solutions that accelerate innovation and growth.</p>
            <br /><p><b>Our Industry Focus</b></p>
            <p>We combine deep domain expertise with AI, enterprise data, and intelligent automation to help organizations innovate with confidence, operate efficiently, and create sustainable business value.</p>
            <br /><p><b>Primary Focus:</b></p>
            <ul className="mt-3 list-disc pl-6">
              <li>Banking</li>
              <li>Financial Services</li>
              <li>Capital Markets</li>
              <li>Fintech</li>
            </ul>
          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

    {/* --------------------  Why Stafróf -------------------- */}
  if (sectionKey === "about" && slug === "why-Stafróf") {
    const imgSrc = SLUG_DOC_IMAGES["why-Stafróf"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Why Stafróf
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>At Stafróf Intelligence Corporation, we combine deep industry expertise with AI, enterprise data, and modern engineering to help financial institutions solve complex business challenges and accelerate digital transformation. Our focus is on delivering intelligent, secure, and scalable solutions that create measurable business value.</p>
            <br /><p><b>Banking Domain Expertise</b></p>
            <p>Purpose-built solutions for Banking, Financial Services, Capital Markets, and Fintech.</p>
            <br /><p><b>AI-Powered Innovation</b></p>
            <p>Leverage Artificial Intelligence, Machine Learning, and Intelligent Automation to drive smarter business outcomes.</p>
            <br /><p><b>Enterprise Data Intelligence</b></p>
            <p>Transform enterprise data into trusted, AI-ready insights for better decision-making.</p>
            <br /><p><b>Product-Led Innovation</b></p>
            <p>Enterprise-grade platforms designed for scalability, flexibility, and future growth.</p>
            <br /><p><b>Secure by Design</b></p>
            <p>Built with security, privacy, governance, and compliance at the core.</p>
            <br /><p><b>Scalable Architecture</b></p>
            <p>Cloud-ready, API-first, and designed to integrate seamlessly with existing enterprise systems.</p>
            <br /><p><b>Customer-Centric Approach</b></p>
            <p>We work closely with our customers to understand their challenges and deliver practical, value-driven solutions.</p>
            <br /><p><b>Engineering Excellence</b></p>
            <p>Driven by quality, innovation, and continuous improvement in every product we build.</p>
            <br /><br /><p><b>Our Commitment</b></p>
            <p>We are committed to helping financial institutions innovate with confidence, unlock the full value of their data, and build a smarter, more resilient digital future.</p>
            <br /><p>Better Data. Smarter AI. Stronger Tomorrow.</p>

          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

    {/* -------------------- Innovation & R&D -------------------- */}
  if (sectionKey === "about" && slug === "innovation") {
    const imgSrc = SLUG_DOC_IMAGES["innovation"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Innovation and R&D
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>Innovation is at the heart of everything we do. At Stafróf Intelligence Corporation, we continuously invest in research, emerging technologies, and product innovation to help financial institutions stay ahead in a rapidly evolving digital world.</p>
            <br /><p><b>Artificial Intelligence</b></p>
            <p>Advancing AI solutions that enable intelligent decision-making, automation, and business optimization.</p>
            <br /><p><b>Enterprise Data</b></p>
            <p>Building modern data platforms that transform enterprise data into trusted, AI-ready intelligence.</p>
            <br /><p><b>Intelligent Automation</b></p>
            <p>Developing AI-powered automation to streamline operations, improve productivity, and reduce complexity.</p>
            <br /><p><b>Advanced Analytics</b></p>
            <p>Delivering predictive insights and data-driven intelligence that empower better business decisions.</p>
            <br /><p><b>Cloud & Modern Architecture</b></p>
            <p>Designing cloud-native, API-first, and scalable platforms for enterprise agility and future growth.</p>
            <br /><p><b>Continuous Innovation</b></p>
            <p>Embracing emerging technologies, industry trends, and customer feedback to continuously enhance our products and solutions.</p>
            <br /><br /><p><b>Our Innovation Commitment</b></p>
            <p>We are committed to creating intelligent, secure, and future-ready technologies that empower Banking, Financial Services, and Capital Markets organizations to innovate faster, operate smarter, and achieve sustainable growth.</p>
            <br /><p>Innovating Today. Empowering Tomorrow.</p>

          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  {/* -------------------- Our Commitment -------------------- */}
if (sectionKey === "about" && slug === "commitment") {
  const imgSrc =
    SLUG_DOC_IMAGES["commitment"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic pt-32 pb-20 relative overflow-hidden">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />

        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT US
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-19 pb-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-6xl text-left px-6 space-y-12 text-center animate-fade-in">

          <Reveal delay={150} className="text-xl text-ink-2 max-w-5xl mx-auto text-justify">
            <p>At Stafróf Intelligence Corporation, we are committed to delivering innovative, secure, and enterprise-grade solutions that help Banking, Financial Services, and Capital Markets organizations achieve sustainable business success.</p>
            <br /><p><b>Customer Success</b></p>
            <p>We focus on delivering measurable business value and building long-term customer relationships.</p>
            <br /><p><b>Innovation</b></p>
            <p>We continuously innovate to solve complex business challenges with AI, data, and intelligent automation.</p>
            <br /><p><b>Quality</b></p>
            <p>We are committed to engineering excellence, reliability, and delivering high-quality products.</p>
            <br /><p><b>Trust & Integrity</b></p>
            <p>We conduct our business with honesty, transparency, and accountability.</p>
            <br /><p><b>Security & Privacy</b></p>
            <p>We design our platforms with security, privacy, and compliance at the core.</p>
            <br /><p><b>Continuous Improvement</b></p>
            <p>We embrace learning, feedback, and innovation to continuously enhance our products and services.</p>
            <br /><br /><p><b>Our Promise</b></p>
            <p>To be a trusted technology partner, delivering intelligent solutions that enable organizations to innovate with confidence, operate efficiently, and create lasting business value.</p>

          </Reveal>

        </div>
      </section>
    </>
  );
}

    {/* -------------------- Join Our Journey -------------------- */}
  if (sectionKey === "about" && slug === "join") {
    const imgSrc = SLUG_DOC_IMAGES["join"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/95">
        <div className="mx-auto max-w-8xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight uppercase">
              Join Our Journey
            </h1>
          </Reveal>
          <Reveal delay={150} className="text-xl leading-relaxed text-ink-2 max-w-5xl mx-auto text-justify">
            <p>Be part of the future of Banking, Financial Services, and Capital Markets. Whether you're a customer, partner, investor, or talented professional, we invite you to join us in shaping the next generation of AI-powered enterprise solutions.</p>
            <br /><p><b>Partner with Us</b></p>
            <p>Collaborate to deliver innovative technologies and create lasting business value.</p>
            <br /><p><b>Explore Our Solutions</b></p>
            <p>Discover how our AI, data, and intelligent automation platforms can accelerate your digital transformation.</p>
            <br /><p><b>Build Your Career</b></p>
            <p>Join our growing team and help develop enterprise technologies that power the future of financial services.</p>
            <br /><p><b>Connect with Us</b></p>
            <p>Let's discuss how Stafróf can help your organization innovate, transform, and grow.</p>


          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-5xl">
              <ImageViewer
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }


  const intro = page.intro ?? page.paragraphs ?? [];
  const related = section.pages.filter((p) => p.slug !== slug).slice(0, 6);
  const logoKey = getLogoForPage(sectionKey, slug);
  const logo = logoKey ? PRODUCT_LOGOS[logoKey] : null;

  return (
    <>
      {/* === CINEMATIC HERO === */}
      <section className="hero-cosmic pt-32 pb-20">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />
        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6">

          {logo && (
            <Reveal delay={100}>
              <div className="mt-8 flex justify-center">
                <LogoBox logo={logo} size="xl" />
              </div>
            </Reveal>
          )}

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7">{section.eyebrow}</p>
          </Reveal>
          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {page.title}
            </h1>
          </Reveal>
          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">{page.tagline}</p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="premium-btn premium-btn-hover">
                CONTACT US <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro + topic visual */}
      {intro.length > 0 && (() => {
        const isComingSoon = intro.some(p => p.toLowerCase().includes("coming soon")) || 
                             (page.paragraphs && page.paragraphs.some(p => p.toLowerCase().includes("coming soon"))) ||
                             sectionKey === "insights" || sectionKey === "careers";
        return (
          <section className="py-20 bg-surface/100">
            {isComingSoon ? (
              <div className="mx-auto max-w-3xl px-6">
                <Reveal>
                  <div className="space-y-5 text-lg leading-relaxed text-ink-2">
                    {intro.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {page.intro && page.paragraphs && page.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              </div>
            ) : (
              <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <Reveal>
                  <div className="space-y-5 text-lg leading-relaxed text-ink-2">
                    {intro.map((p, i) => {
                      if (sectionKey === "about" && slug === "who-we-are" && p.includes("●")) {
                        return <BulletSplit key={i} text={p} />;
                      }
                      return <p key={i}>{p}</p>;
                    })}
                    {page.intro && page.paragraphs && page.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={120} direction="right">
                  <div className="tile-media group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-20px_oklch(0.55_0.22_263/0.35)]">
                    <img
                      src={topicImageFor(sectionKey, slug)}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      width={1280}
                      height={832}
                      className="absolute inset-0 size-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-cosmic/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80">
                      <span className="pulse-dot" /> {section.label}
                    </div>
                  </div>
                </Reveal>
              </div>
            )}
          </section>
        );
      })()}

      {/* Document Inline Illustrations */}
      {(() => {
        const slugKey = slug.toLowerCase();
        const docImages = SLUG_DOC_IMAGES[slugKey] || SLUG_DOC_IMAGES[slug] || [];
        if (docImages.length === 0) return null;
        return (
          <section className="py-12 bg-[#020718]/30">
            <div className="mx-auto max-w-5xl px-6 space-y-8 flex flex-col items-center">
              {docImages.map((imgSrc, idx) => (
                <Reveal key={idx} delay={idx * 100} direction="right" className="w-full">
                  <div className="w-full overflow-hidden rounded-2xl border border-border/10 bg-white/[0.02] p-2 shadow-lg">
                    <ImageViewer
                      src={imgSrc}
                      alt={`Document illustration for ${page.title}`}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })()}

      <NamedGrid label="Key Capabilities" items={page.capabilities} accent="brand" />
      <NamedGrid label={page.subitemsLabel ?? "Our Services"} items={page.subitems} accent="purple" />
      <ChipList label={page.coreLabel ?? "Core Components"} items={page.core} />
      <Coverage label={page.coverageLabel ?? "Coverage"} items={page.coverage} />
      <Benefits items={page.benefits} />

      {page.approach && page.approach.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl">Our Approach</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-2">
                {page.approach.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <PoweredByBlock page={page} />

      {page.closing && page.closing.length > 0 && (
        <section className="py-20 bg-surface/100">
          <div className="mx-auto max-w-4xl px-6 space-y-10">
            {page.closing.map((c, i) => (
              <Reveal key={i}>
                {c.heading && (
                  <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl">{c.heading}</h2>
                )}
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-2">
                  {c.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {page.closingTagline && (
        <section className="hero-cosmic py-20 text-center">
          <img
            src={SITE_IMAGES.cta}
            alt=""
            aria-hidden
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 size-full object-cover opacity-95 saturate-125 brightness-110"
          />
          <div className="cosmic-overlay" />
          <div className="relative mx-auto max-w-4xl px-6">
            <p className="font-display text-2xl font-semibold text-white sm:text-4xl">
              {page.closingTagline}
            </p>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="hero-cosmic relative overflow-hidden rounded-[2rem] p-12 text-center sm:p-16">
            <img
              src={SITE_IMAGES.cta}
              alt=""
              aria-hidden
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 size-full object-cover opacity-95 saturate-125 brightness-110"
            />
            <div className="cosmic-overlay" />
            <div className="relative">
              <span className="chip-cosmic">
                <span className="pulse-dot" />
                Ready to talk
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-5xl">
                See {page.title} in action
              </h2>
              <Link to="/contact" className="premium-btn premium-btn-hover mt-8 inline-flex">
                CONTACT US <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="eyebrow">More in {section.label}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Related</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={(i % 3) * 90}>
                  <Link
                    to={`${section.basePath}/$slug` as never}
                    params={{ slug: r.slug } as never}
                    className="group tile-media-hover card-spotlight block h-full overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-20px_oklch(0.55_0.22_263/0.35)]"
                  >
                    <div className="tile-media aspect-[16/9]">
                      <img
                        src={topicImageFor(sectionKey, r.slug)}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        width={1280}
                        height={832}
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                    <div className="relative p-6">
                      <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.tagline}</p>
                      <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                        Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function NamedGrid({
  label,
  items,
  accent,
}: {
  label: string;
  items?: { name: string; desc: string }[];
  accent: "brand" | "purple";
}) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-slate-50/50">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl tracking-tight border-l-4 border-brand pl-4 mb-2 text-white">{label}</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const IconComp = getPremiumIcon(it.name);
            return (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="group relative h-full overflow-hidden p-8 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,230,118,0.12)] hover:border-brand/40 transition-all duration-300">
                  <div
                    className={
                      "flex size-12 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 " +
                      (accent === "brand" 
                        ? "bg-gradient-to-br from-[#ff7a00] to-orange-500 shadow-orange-500/20" 
                        : "bg-gradient-to-br from-brand-purple to-indigo-600 shadow-purple-500/20")
                    }
                  >
                    <IconComp className="size-5 stroke-[2.5]" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink group-hover:text-brand transition-colors duration-200">{it.name}</h3>
                  {it.desc && <p className="mt-3 text-sm leading-relaxed text-ink-2/80 text-justify">{it.desc}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChipList({ label, items }: { label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl">{label}</h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {items.map((it, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-brand/40 hover:text-brand"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage({ label, items }: { label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  const [first, ...rest] = items;
  const looksLikeIntro = first.includes(":") || first.split(" ").length > 4;
  const intro = looksLikeIntro ? first : undefined;
  const list = looksLikeIntro ? rest : items;
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl text-white">{label}</h2>
          {intro && <p className="mt-4 text-lg text-ink-2">{intro}</p>}
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((it, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink transition-all hover:border-brand/40 hover:translate-x-1"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-brand-purple" />
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8F4] to-[#FFF0E5] border-b-2 border-orange-500">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl tracking-tight border-l-4 border-[#ff7a00] pl-4 mb-2">Business Benefits</h2>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((b, i) => {
            const IconComp = getPremiumIcon(b);
            return (
              <Reveal as="li" key={i} delay={(i % 2) * 80}>
                <div className="flex gap-4 p-6 bg-white border border-orange-100 rounded-2xl shadow-[0_6px_24px_-6px_rgba(234,88,12,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(234,88,12,0.15)] hover:border-orange-300 transition-all duration-300 group">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#ff7a00] group-hover:scale-110 transition-transform">
                    <IconComp className="size-5 stroke-[2.5]" />
                  </div>
                  <span className="text-base font-medium text-ink-2/90 leading-relaxed text-justify">{b}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function PoweredByBlock({ page }: { page: SubPage }) {
  const pb = page.poweredBy;
  if (!pb || !pb.items || pb.items.length === 0) return null;
  return (
    <section className="py-20 bg-surface/100">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl">
            {page.poweredByLabel ?? "Powered by Stafróf Platforms"}
          </h2>
        </Reveal>
        <ul className="mt-6 space-y-3">
          {pb.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-ink-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-purple" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SectionOverview({ sectionKey }: { sectionKey: SectionKey }) {
  const section = findSection(sectionKey);
  const meta = OVERVIEW_META[sectionKey];

  return (
    <>
      <section className="hero-cosmic pt-32 pb-20">
        <img
          src={sectionImage(sectionKey)}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-110"
        />
        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow-dark">{section.eyebrow}</p>
          </Reveal>
          {meta?.logo && (
            <Reveal delay={80}>
              <div className="mt-6 flex justify-center">
                <LogoBox logo={PRODUCT_LOGOS[meta.logo]} size="xl" />
              </div>
            </Reveal>
          )}
          <Reveal delay={160}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {meta?.headline ?? section.headline}
            </h1>
          </Reveal>
          {(meta?.tagline ?? section.summary) && (
            <Reveal delay={260}>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75">{meta?.tagline ?? section.summary}</p>
            </Reveal>
          )}
          {meta?.intro && meta.intro.length > 0 && (
            <Reveal delay={340}>
              <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-white/70">
                {meta.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          )}
          <Reveal delay={440}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-glow btn-glow-hover">
                CONTACT US <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white/95">
        <div className="mx-auto max-w-7xl px-6">
          {meta?.gridHeading && (
            <Reveal>
              <div className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl">{meta.gridHeading}</h2>
                {meta.gridSubheading && (
                  <p className="mt-3 text-ink-2">{meta.gridSubheading}</p>
                )}
              </div>
            </Reveal>
          )}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.pages.map((p, i) => {
              const logoKey = getLogoForPage(sectionKey, p.slug);
              const logo = logoKey ? PRODUCT_LOGOS[logoKey] : null;
              return (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <Link
                    to={`${section.basePath}/$slug` as never}
                    params={{ slug: p.slug } as never}
                    className="group tile-media-hover card-spotlight relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-20px_oklch(0.55_0.22_263/0.35)]"
                  >
                    <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="tile-media aspect-[16/9]">
                      <img
                        src={topicImageFor(sectionKey, p.slug)}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        width={1280}
                        height={832}
                        className="absolute inset-0 size-full object-cover"
                      />
                      {logo && (
                        <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-md rounded-lg p-1.5 shadow-md">
                          <LogoBox logo={logo} size="md" />
                        </div>
                      )}
                      <span className="absolute top-3 right-3 z-10 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-white/85 backdrop-blur-md">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="relative flex flex-1 flex-col p-7">
                      <h3 className="font-display text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-1 leading-relaxed text-ink-2 text-left">
                        {(() => {
                          const text = p.tagline || "";
                          const firstPeriod = text.indexOf(".");
                          return firstPeriod === -1 ? text : text.substring(0, firstPeriod + 1);
                        })()}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand">
                        Explore <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

type OverviewMeta = {
  headline?: string;
  tagline?: string;
  intro?: string[];
  logo?: keyof typeof PRODUCT_LOGOS;
  gridHeading?: string;
  gridSubheading?: string;
};

const OVERVIEW_META: Partial<Record<SectionKey, OverviewMeta>> = {
  products: {
    logo: "revnexure",
    headline: "Transform Revenue Assurance into a Strategic Advantage",
    tagline: "RevNexure 360° Suite — AI-Powered Revenue Assurance Platform for Banking, Financial Services & Capital Markets.",
    intro: [
      "RevNexure 360° Suite empowers financial institutions to move beyond traditional controls by leveraging AI, enterprise data, and intelligent automation to protect revenue, improve operational resilience, and deliver measurable business value.",
    ],
    gridHeading: "Explore the RevNexure 360° Suite",
    gridSubheading: "The 360° Suite overview plus twelve domain-specific revenue assurance products.",
  },
  platforms: {
    headline: "Next-Gen Platforms powering the Stafróf Ecosystem",
    tagline: "DataXentra & AgenNova — the enterprise data and AI intelligence foundations behind every Stafróf product.",
    intro: [
      "DataXentra unifies enterprise data into a trusted, AI-ready foundation. AgenNova activates that foundation with Agentic AI, machine learning, and intelligent automation — together they power decisioning, automation, and intelligence across the Stafróf ecosystem.",
    ],
    gridHeading: "Choose a Platform",
  },
  solutions: {
    gridHeading: "Outcome-led Solutions",
    gridSubheading: "Eight intelligent solution domains across Banking, Financial Services & Capital Markets.",
  },
  services: {
    gridHeading: "End-to-End Services",
    gridSubheading: "Implementation, managed services, support, training, and transformation services.",
  },
  consulting: {
    gridHeading: "Strategic Consulting Practices",
    gridSubheading: "Advisory across Banking, AI, Data, Digital, Architecture, Analytics, Risk & Compliance and Product.",
  },
  about: {
    gridHeading: "Get to know Stafróf",
  },
};
