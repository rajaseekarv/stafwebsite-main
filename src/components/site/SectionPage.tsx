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
  const imgSrc =
    SLUG_DOC_IMAGES["who-we-are"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            WHO WE ARE
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            At Stafróf, we believe that data is the foundation of intelligent
            banking. By transforming data into actionable insights and
            automating complex business processes, we empower financial
            institutions to make faster decisions, improve operational
            efficiency, reduce risk, and unlock sustainable growth.
          </p>

          <p>
            Powering Banking, Financial Services & Capital Markets with AI,
            Data & Intelligent Innovation.
          </p>

          <p>
            Stafróf Intelligence Corporation is a next-generation enterprise
            technology company dedicated to empowering the Banking, Financial
            Services, and Capital Markets industry through innovative AI,
            enterprise data, and intelligent automation platforms.
          </p>

          <p>
            We develop enterprise-grade products that help financial
            institutions modernize operations, optimize revenue, improve data
            intelligence, automate business processes, and accelerate digital
            transformation. Our solutions are designed to solve complex
            business challenges while enabling organizations to operate more
            efficiently, make smarter decisions, and deliver exceptional
            customer experiences.
          </p>

          <p>
            With deep domain expertise in banking and financial services,
            combined with modern engineering and AI capabilities, we develop
            secure, scalable, and enterprise-grade platforms designed to
            address the evolving needs of today's financial ecosystem.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
            Our Flagship Platforms
          </h2>

          <ul className="list-disc space-y-4 pl-6 text-lg leading-8">
            <li>
              <strong>RevNexure</strong> — AI-powered Revenue Assurance Platform
              that helps identify, prevent, and recover revenue leakages across
              banking operations.
            </li>

            <li>
              <strong>DataXentra</strong> — Enterprise Data Platform that
              unifies, governs, and transforms enterprise data into trusted
              business intelligence.
            </li>

            <li>
              <strong>AgenNova</strong> — AI Intelligence Platform enabling
              intelligent automation, AI agents, predictive insights, and
              decision intelligence.
            </li>
          </ul>

          <p>
            As a product-driven organization, our commitment is to deliver
            innovative, secure, and scalable technology solutions that help
            financial institutions thrive in an increasingly digital world.
          </p>

          <p>
            At Stafróf, we embrace customer-centric innovation and design
            thinking to solve complex business challenges. By combining advanced
            analytics, responsible AI, and enterprise technology, we help
            organizations improve operational efficiency, strengthen
            compliance, enhance customer experiences, and drive sustainable
            growth.
          </p>

          <p>
            Our commitment is to empower banks, financial institutions, and
            capital market organizations with intelligent technologies that
            enable them to innovate with confidence, operate with agility, and
            compete successfully in an increasingly digital world.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
            Our Purpose
          </h2>

          <p>
            To empower financial institutions with intelligent technologies
            that simplify complexity, accelerate innovation, and create lasting
            business value.
          </p>
        </Reveal>

        <Reveal delay={250} direction="right" className="mt-14 flex justify-center">
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Who We Are - Stafróf"
              className="h-auto w-full rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
 {/* -------------------- Our Vision -------------------- */}
if (sectionKey === "about" && slug === "vision") {
  const imgSrc =
    SLUG_DOC_IMAGES["vision"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Our Vision
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            To become a globally trusted enterprise technology company,
            empowering the future of Banking, Financial Services, and Capital
            Markets through AI, data, and intelligent innovation.
          </p>

          <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
            Our Mission
          </h2>

          <p>
            To help financial institutions accelerate digital transformation by
            delivering innovative, secure, and scalable AI-powered platforms
            that unlock the value of data, optimize business performance,
            automate operations, and enable intelligent decision-making.
          </p>

          <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
            Our Core Values
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Customer First
              </h3>
              <p className="mt-2">
                We put our customers at the center of everything we do,
                creating solutions that address real business challenges and
                deliver measurable outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Innovation
              </h3>
              <p className="mt-2">
                We embrace curiosity, creativity, and continuous improvement
                to develop technologies that shape the future of financial
                services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Excellence
              </h3>
              <p className="mt-2">
                We strive for the highest standards in engineering, product
                quality, service delivery, and customer experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Security & Trust
              </h3>
              <p className="mt-2">
                We design our platforms with security, privacy, and reliability
                at the core, helping customers operate with confidence.
              </p>
            </div>

          </div>
        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Our Vision - Stafróf"
              className="h-auto w-full rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
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
      <section className="hero-cosmic relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
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

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-4 text-center">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT OUR TEAM
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>
      {/* Content */}
<section className="min-h-screen bg-surface/95 py-24 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 animate-fade-in">

    <Reveal className="mx-auto max-w-5xl text-center">
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Reimagining Banking Intelligence
      </h2>
    </Reveal>

    <Reveal
      delay={150}
      className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
    >
      <p>
        Stafróf Intelligence Corporation was founded with a simple belief:
      </p>

      <p>
        Financial institutions should spend their time serving customers—not
        searching for revenue leakages, fragmented data, and operational
        inefficiencies.
      </p>

      <p>
        After decades of leading large-scale banking transformation programs
        across global financial institutions, we witnessed the same challenges
        repeated everywhere—disconnected systems, inconsistent data, manual
        reconciliations, compliance pressures, and millions of dollars lost
        through unnoticed revenue leakages.
      </p>

      <p>
        Banks were investing heavily in digital transformation, yet critical
        business decisions were still constrained by fragmented data and
        reactive operations.
      </p>

      <p>
        We believed there had to be a better way.
      </p>

      <p>
        That vision became Stafróf Intelligence Corporation.
      </p>

      <h3 className="pt-6 font-display text-2xl font-semibold text-ink">
        Why We Exist
      </h3>

      <p>
        Our mission is to help banks transform their data into intelligence
        and their intelligence into measurable business value.
      </p>

      <p>
        We combine Artificial Intelligence, enterprise data engineering,
        advanced analytics, and intelligent automation into a unified platform
        that continuously protects revenue, improves operational efficiency,
        strengthens compliance, and empowers faster decision-making.
      </p>

      <p>
        Instead of solving isolated problems, we build connected platforms
        that work across the entire banking ecosystem.
      </p>

      <h3 className="pt-6 font-display text-2xl font-semibold text-ink">
        What We Build
      </h3>

      <p>
        Our flagship platform, RevNexure 360° Suite, delivers AI-powered
        Revenue Assurance across twelve major banking business lines,
        including:
      </p>

      <ul className="list-disc space-y-3 pl-6 text-lg leading-8">
        <li>Lending</li>
        <li>Cards & Payments</li>
        <li>ATM & Self-Service Banking</li>
        <li>Corporate Banking</li>
        <li>Trade Finance</li>
        <li>Foreign Exchange</li>
        <li>Securities</li>
        <li>Settlement</li>
        <li>Wealth Management</li>
        <li>Derivatives</li>
        <li>Custody Services</li>
        <li>Merchant Payments</li>
      </ul>

      <h3 className="pt-6 font-display text-2xl font-semibold text-ink">
        Supporting RevNexure
      </h3>

      <p>
        <strong>DataXentra</strong> — Our Enterprise Data Platform that
        unifies, governs, and delivers trusted banking data.
      </p>

      <p>
        <strong>AgenNova</strong> — Our AI Intelligence Platform that provides
        intelligent agents, predictive analytics, automation, and real-time
        decision intelligence.
      </p>

      <p>
        Together, these platforms create a modern banking intelligence
        ecosystem.
      </p>
    </Reveal>

    {/*
    <Reveal
      delay={250}
      direction="right"
      className="mt-14 flex justify-center"
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
        <ImageViewer
          src={imgSrc}
          alt="Our Story"
          className="w-full h-auto rounded-xl object-contain"
        />
      </div>
    </Reveal>
    */}

  </div>
</section>
    </>
  );
}


  {/* -------------------- Our DNA -------------------- */}
if (sectionKey === "about" && slug === "our-dna") {
  const imgSrc =
    SLUG_DOC_IMAGES["our-dna"]?.[0] || topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Our DNA
          </h1>
        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Our DNA - Stafróf"
              className="w-full h-auto rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
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
      <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 animate-fade-in">

    <Reveal>
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
        Board of Directors
      </h1>
    </Reveal>

    <Reveal
      delay={150}
      className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
    >
      <p>
        Stafróf Intelligence Corporation is governed by a distinguished Board
        of Directors with deep expertise in banking, finance, technology, and
        corporate governance.
      </p>

      <p>
        Details of our Board of Directors will be published soon. Our Board
        members play a pivotal role in guiding our long-term strategy,
        ensuring regulatory compliance, strengthening governance, and
        driving sustainable business value for our customers,
        shareholders, and stakeholders.
      </p>
    </Reveal>

    <Reveal
      delay={250}
      direction="right"
      className="mt-14 flex justify-center"
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
        <ImageViewer
          src={imgSrc}
          alt="Board of Directors - Stafróf"
          className="w-full h-auto rounded-xl object-contain"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </Reveal>

  </div>
</section>
    );
  }

  /* -------------------- Leadership Team -------------------- */
if (sectionKey === "about" && slug === "leadership-team") {
  const imgSrc =
    SLUG_DOC_IMAGES["leadership-team"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Leadership Team
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            Our leadership team brings together decades of experience in
            financial technology, enterprise software, artificial intelligence,
            banking transformation, and enterprise innovation.
          </p>

          <p>
            Details of our Leadership Team will be published soon. Under their
            guidance, Stafróf continues to build next-generation platforms that
            help financial institutions automate operations, optimize revenue,
            strengthen data intelligence, and accelerate digital transformation.
          </p>
        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Leadership Team - Stafróf"
              className="w-full h-auto rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

  {/* -------------------- Our Design Thinking Principles -------------------- */}
if (sectionKey === "about" && slug === "design-thinking") {
  const imgSrc =
    SLUG_DOC_IMAGES["design-thinking"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Our Design Thinking Principles
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            At Stafróf, we place people, business value, and innovation at the
            center of every solution we create. Our Design Thinking approach
            helps us solve complex challenges through collaboration,
            creativity, and continuous improvement.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Empathize
            </h3>
            <p className="mt-2">
              Understand customer needs, challenges, and business goals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Define
            </h3>
            <p className="mt-2">
              Identify the right problems before designing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Ideate
            </h3>
            <p className="mt-2">
              Generate innovative ideas that create measurable business value.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Prototype
            </h3>
            <p className="mt-2">
              Design and validate solutions quickly through iterative
              development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Test
            </h3>
            <p className="mt-2">
              Continuously evaluate, refine, and improve based on real-world
              feedback.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Deliver Value
            </h3>
            <p className="mt-2">
              Transform ideas into scalable, secure, and intelligent solutions
              that drive measurable business outcomes.
            </p>
          </div>

          <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
            Our Design Philosophy
          </h2>

          <p className="font-semibold text-ink">
            Human-Centered. Data-Driven. AI-Powered.
          </p>

          <p>
            We combine deep industry expertise, Design Thinking, advanced
            analytics, and Artificial Intelligence to deliver innovative
            enterprise solutions that help financial institutions innovate with
            confidence, improve operational efficiency, and achieve sustainable
            growth.
          </p>

        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Design Thinking Principles - Stafróf"
              className="w-full h-auto rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
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
      <section className="hero-cosmic relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
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

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-4 text-center">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT OUR TEAM
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

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-7 text-center">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-4 max-w-4xl text-center font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mt-6 max-w-3xl text-center text-xl leading-relaxed text-white/75">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex justify-center">
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
  const imgSrc =
    SLUG_DOC_IMAGES["what-we-do"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
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

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-4 text-center">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT OUR TEAM
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Content */}
      <section className="min-h-screen bg-surface/95 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in">

          <Reveal
            delay={150}
            className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
          >
            <p>
              We help Banking, Financial Services, and Capital Markets
              organizations accelerate digital transformation through
              enterprise AI, data, analytics, and intelligent automation.
              Our solutions enable financial institutions to modernize
              operations, optimize revenue, improve decision-making, and
              deliver exceptional customer experiences.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                AI Revenue Assurance
              </h3>
              <p className="mt-2">
                Identify, prevent, and recover revenue leakages across
                banking products, services, and channels.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Enterprise Data Platform
              </h3>
              <p className="mt-2">
                Integrate, govern, and transform enterprise data into
                trusted, AI-ready intelligence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                AI Intelligence & Automation
              </h3>
              <p className="mt-2">
                Deploy intelligent AI agents, predictive analytics, and
                workflow automation to improve business performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Data Engineering & Analytics
              </h3>
              <p className="mt-2">
                Build scalable data foundations, real-time data pipelines,
                and advanced analytics solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Intelligent Decision Support
              </h3>
              <p className="mt-2">
                Empower business leaders with actionable insights,
                executive dashboards, and AI-driven recommendations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Digital Transformation
              </h3>
              <p className="mt-2">
                Modernize legacy systems, streamline operations, and
                accelerate innovation with cloud-native technologies.
              </p>
            </div>

            <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
              Our Product Platforms
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>RevNexure</strong> — AI Revenue Assurance Platform
              </li>
              <li>
                <strong>DataXentra</strong> — Enterprise Data Platform
              </li>
              <li>
                <strong>AgenNova</strong> — AI Intelligence Platform
              </li>
            </ul>

            <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
              Delivering Intelligent Solutions for Financial Services
            </h2>

            <p>
              From data to decisions, and from automation to innovation,
              we build secure, scalable, and enterprise-grade platforms
              that help financial institutions operate smarter, innovate
              faster, and create lasting business value.
            </p>

          </Reveal>

          <Reveal
            delay={250}
            direction="right"
            className="mt-14 flex justify-center"
          >
            <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
              <ImageViewer
                src={imgSrc}
                alt="What We Do - Stafróf"
                className="w-full h-auto rounded-xl object-contain"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
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
  const imgSrc =
    SLUG_DOC_IMAGES["industries"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Industries We Serve
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            Stafróf Intelligence Corporation delivers AI, enterprise data,
            and intelligent automation solutions that help organizations
            modernize operations, improve decision-making, and accelerate
            digital transformation across the financial services ecosystem.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-ink">Banking</h3>
            <p className="mt-2">
              Empowering retail, commercial, corporate, and digital banks
              with AI-driven platforms for revenue assurance, data
              intelligence, and operational excellence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Financial Services
            </h3>
            <p className="mt-2">
              Helping financial institutions optimize operations,
              strengthen governance, automate processes, and unlock
              greater business value through intelligent technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Capital Markets
            </h3>
            <p className="mt-2">
              Supporting capital market firms with advanced data,
              analytics, AI, and automation to improve operational
              efficiency, compliance, and business performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">Fintech</h3>
            <p className="mt-2">
              Enabling fintech companies to build scalable,
              intelligent, and data-driven digital financial
              solutions that accelerate innovation and growth.
            </p>
          </div>

          <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
            Our Industry Focus
          </h2>

          <p>
            We combine deep domain expertise with AI, enterprise data,
            and intelligent automation to help organizations innovate
            with confidence, operate efficiently, and create sustainable
            business value.
          </p>

          <h3 className="text-xl font-semibold text-ink">
            Primary Focus
          </h3>

          <ul className="list-disc space-y-3 pl-6">
            <li>Banking</li>
            <li>Financial Services</li>
            <li>Capital Markets</li>
            <li>Fintech</li>
          </ul>

        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Industries We Serve - Stafróf"
              className="w-full h-auto rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}


/* -------------------- Why Stafróf -------------------- */
if (sectionKey === "about" && slug === "why-Stafróf") {
  const imgSrc =
    SLUG_DOC_IMAGES["why-Stafróf"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Why Stafróf
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            At Stafróf Intelligence Corporation, we combine deep industry
            expertise with AI, enterprise data, and modern engineering to
            help financial institutions solve complex business challenges
            and accelerate digital transformation. Our focus is on
            delivering intelligent, secure, and scalable solutions that
            create measurable business value.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Banking Domain Expertise
            </h3>
            <p className="mt-2">
              Purpose-built solutions for Banking, Financial Services,
              Capital Markets, and Fintech.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              AI-Powered Innovation
            </h3>
            <p className="mt-2">
              Leverage Artificial Intelligence, Machine Learning,
              and Intelligent Automation to drive smarter business
              outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Enterprise Data Intelligence
            </h3>
            <p className="mt-2">
              Transform enterprise data into trusted, AI-ready insights
              for better decision-making.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Product-Led Innovation
            </h3>
            <p className="mt-2">
              Enterprise-grade platforms designed for scalability,
              flexibility, and future growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Secure by Design
            </h3>
            <p className="mt-2">
              Built with security, privacy, governance, and compliance
              at the core.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Scalable Architecture
            </h3>
            <p className="mt-2">
              Cloud-ready, API-first, and designed to integrate
              seamlessly with existing enterprise systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Customer-Centric Approach
            </h3>
            <p className="mt-2">
              We work closely with our customers to understand their
              challenges and deliver practical, value-driven solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Engineering Excellence
            </h3>
            <p className="mt-2">
              Driven by quality, innovation, and continuous improvement
              in every product we build.
            </p>
          </div>

          <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
            Our Commitment
          </h2>

          <p>
            We are committed to helping financial institutions innovate
            with confidence, unlock the full value of their data, and
            build a smarter, more resilient digital future.
          </p>

          <p className="font-semibold text-ink">
            Better Data. Smarter AI. Stronger Tomorrow.
          </p>

        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Why Stafróf"
              className="w-full h-auto rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

{/* -------------------- Innovation & R&D -------------------- */}
if (sectionKey === "about" && slug === "innovation") {
  const imgSrc =
    SLUG_DOC_IMAGES["innovation"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <section className="min-h-screen bg-surface/95 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 animate-fade-in">

        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl text-center">
            Innovation & R&D
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
        >
          <p>
            Innovation is at the heart of everything we do. At Stafróf
            Intelligence Corporation, we continuously invest in research,
            emerging technologies, and product innovation to help financial
            institutions stay ahead in a rapidly evolving digital world.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Artificial Intelligence
            </h3>
            <p className="mt-2">
              Advancing AI solutions that enable intelligent
              decision-making, automation, and business optimization.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Enterprise Data
            </h3>
            <p className="mt-2">
              Building modern data platforms that transform enterprise
              data into trusted, AI-ready intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Intelligent Automation
            </h3>
            <p className="mt-2">
              Developing AI-powered automation to streamline operations,
              improve productivity, and reduce complexity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Advanced Analytics
            </h3>
            <p className="mt-2">
              Delivering predictive insights and data-driven intelligence
              that empower better business decisions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Cloud & Modern Architecture
            </h3>
            <p className="mt-2">
              Designing cloud-native, API-first, and scalable platforms
              for enterprise agility and future growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink">
              Continuous Innovation
            </h3>
            <p className="mt-2">
              Embracing emerging technologies, industry trends, and
              customer feedback to continuously enhance our products and
              solutions.
            </p>
          </div>

          <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
            Our Innovation Commitment
          </h2>

          <p>
            We are committed to creating intelligent, secure, and
            future-ready technologies that empower Banking, Financial
            Services, and Capital Markets organizations to innovate
            faster, operate smarter, and achieve sustainable growth.
          </p>

          <p className="font-semibold text-ink">
            Innovating Today. Empowering Tomorrow.
          </p>

        </Reveal>

        <Reveal
          delay={250}
          direction="right"
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
            <ImageViewer
              src={imgSrc}
              alt="Innovation & R&D - Stafróf"
              className="w-full h-auto rounded-xl object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
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
    SLUG_DOC_IMAGES["commitment"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
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

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-4 text-center">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT OUR TEAM
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Content */}
      <section className="min-h-screen bg-surface/95 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in">

          <Reveal
            delay={150}
            className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
          >
            <p>
              At Stafróf Intelligence Corporation, we are committed to
              delivering innovative, secure, and enterprise-grade
              solutions that help Banking, Financial Services, and
              Capital Markets organizations achieve sustainable
              business success.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Customer Success
              </h3>
              <p className="mt-2">
                We focus on delivering measurable business value and
                building long-term customer relationships.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Innovation
              </h3>
              <p className="mt-2">
                We continuously innovate to solve complex business
                challenges with AI, data, and intelligent automation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Quality
              </h3>
              <p className="mt-2">
                We are committed to engineering excellence,
                reliability, and delivering high-quality products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Trust & Integrity
              </h3>
              <p className="mt-2">
                We conduct our business with honesty, transparency,
                and accountability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Security & Privacy
              </h3>
              <p className="mt-2">
                We design our platforms with security, privacy,
                and compliance at the core.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Continuous Improvement
              </h3>
              <p className="mt-2">
                We embrace learning, feedback, and innovation to
                continuously enhance our products and services.
              </p>
            </div>

            <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
              Our Promise
            </h2>

            <p>
              To be a trusted technology partner, delivering
              intelligent solutions that enable organizations to
              innovate with confidence, operate efficiently, and
              create lasting business value.
            </p>

          </Reveal>

          <Reveal
            delay={250}
            direction="right"
            className="mt-14 flex justify-center"
          >
            <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
              <ImageViewer
                src={imgSrc}
                alt="Our Commitment - Stafróf"
                className="w-full h-auto rounded-xl object-contain"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
 
{/* -------------------- Join Our Journey -------------------- */}
if (sectionKey === "about" && slug === "join") {
  const imgSrc =
    SLUG_DOC_IMAGES["join"]?.[0] ||
    topicImageFor(sectionKey, slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-cosmic relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
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

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <Reveal delay={150}>
            <p className="eyebrow-dark mt-4 text-center">
              {section.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
          </Reveal>

          {page.tagline && (
            <Reveal delay={320}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
                {page.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="premium-btn premium-btn-hover"
              >
                CONTACT OUR TEAM
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Content */}
      <section className="min-h-screen bg-surface/95 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in">

          <Reveal
            delay={150}
            className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-8 text-ink-2"
          >
            <p>
              Be part of the future of Banking, Financial Services,
              and Capital Markets. Whether you're a customer,
              partner, investor, or talented professional,
              we invite you to join us in shaping the next generation
              of AI-powered enterprise solutions.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Partner with Us
              </h3>
              <p className="mt-2">
                Collaborate with us to deliver innovative technologies
                and create lasting business value for financial institutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Explore Our Solutions
              </h3>
              <p className="mt-2">
                Discover how our AI, enterprise data, and intelligent
                automation platforms can accelerate your digital
                transformation journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Build Your Career
              </h3>
              <p className="mt-2">
                Join our growing team and help build enterprise
                technologies that power the future of banking and
                financial services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink">
                Connect with Us
              </h3>
              <p className="mt-2">
                Let's discuss how Stafróf can help your organization
                innovate, transform, and achieve sustainable growth.
              </p>
            </div>

            <h2 className="pt-6 font-display text-2xl font-semibold text-ink">
              Together, Let's Shape the Future
            </h2>

            <p>
              Whether you're looking to modernize your enterprise,
              explore strategic partnerships, or build a rewarding
              career, we're ready to collaborate and create meaningful
              impact together.
            </p>

          </Reveal>

          <Reveal
            delay={250}
            direction="right"
            className="mt-14 flex justify-center"
          >
            <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">
              <ImageViewer
                src={imgSrc}
                alt="Join Our Journey - Stafróf"
                className="w-full h-auto rounded-xl object-contain"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}

  const intro = page.intro ?? page.paragraphs ?? [];
  const related = section.pages.filter((p) => p.slug !== slug).slice(0, 6);
  const logoKey = getLogoForPage(sectionKey, slug);
  const logo = logoKey ? PRODUCT_LOGOS[logoKey] : null;
return (
  <>
    {/* === HERO === */}
    <section className="hero-cosmic relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
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

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        {logo && (
          <Reveal delay={100}>
            <div className="mt-6 flex justify-center">
              <LogoBox logo={logo} size="xl" />
            </div>
          </Reveal>
        )}

        <Reveal delay={150}>
          <p className="eyebrow-dark mt-4 text-center">
            {section.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
        </Reveal>

        {page.tagline && (
          <Reveal delay={320}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
              {page.tagline}
            </p>
          </Reveal>
        )}

        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="premium-btn premium-btn-hover"
            >
              CONTACT OUR TEAM
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
      
{/* Intro + Topic Visual */}
{intro.length > 0 &&
  (() => {
    const isComingSoon =
      intro.some((p) => p.toLowerCase().includes("coming soon")) ||
      (page.paragraphs &&
        page.paragraphs.some((p) =>
          p.toLowerCase().includes("coming soon")
        )) ||
      sectionKey === "insights" ||
      sectionKey === "careers";

    return (
      <section className="bg-surface/100 py-24 lg:py-28">
        {isComingSoon ? (
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="space-y-6 text-left text-lg leading-8 text-ink-2">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                {page.intro &&
                  page.paragraphs &&
                  page.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
              </div>
            </Reveal>
          </div>
        ) : (
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.25fr_1fr] lg:items-center">

            {/* Content */}
            <Reveal>
              <div className="space-y-6 text-left text-lg leading-8 text-ink-2">
                {intro.map((p, i) => {
                  if (
                    sectionKey === "about" &&
                    slug === "who-we-are" &&
                    p.includes("●")
                  ) {
                    return <BulletSplit key={i} text={p} />;
                  }

                  return <p key={i}>{p}</p>;
                })}

                {page.intro &&
                  page.paragraphs &&
                  page.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
              </div>
            </Reveal>

            {/* Image */}
            <Reveal delay={150} direction="right">
              <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">

                <ImageViewer
                  src={topicImageFor(sectionKey, slug)}
                  alt={page.title}
                  className="w-full h-auto rounded-xl object-contain"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />

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
  const docImages =
    SLUG_DOC_IMAGES[slugKey] || SLUG_DOC_IMAGES[slug] || [];

  if (docImages.length === 0) return null;

  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 space-y-10">

        {docImages.map((imgSrc, idx) => (
          <Reveal
            key={idx}
            delay={idx * 120}
            direction="right"
          >
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg">

              <ImageViewer
                src={imgSrc}
                alt={`${page.title} Illustration ${idx + 1}`}
                className="w-full h-auto rounded-xl object-contain"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />

            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
})()}

<NamedGrid
  label="Key Capabilities"
  items={page.capabilities}
  accent="brand"
/>

<NamedGrid
  label={page.subitemsLabel ?? "Our Services"}
  items={page.subitems}
  accent="purple"
/>

<ChipList
  label={page.coreLabel ?? "Core Components"}
  items={page.core}
/>

<Coverage
  label={page.coverageLabel ?? "Coverage"}
  items={page.coverage}
/>

<Benefits items={page.benefits} />

{page.approach && page.approach.length > 0 && (
  <section className="bg-surface py-24 lg:py-28">
    <div className="mx-auto max-w-5xl px-6">

      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Our Approach
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-ink-2">
          {page.approach.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
)}

<PoweredByBlock page={page} />

{page.closing && page.closing.length > 0 && (
  <section className="bg-surface/100 py-24 lg:py-28">
    <div className="mx-auto max-w-5xl px-6 space-y-14">

      {page.closing.map((c, i) => (
        <Reveal key={i}>

          {c.heading && (
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {c.heading}
            </h2>
          )}

          <div className="mt-6 space-y-6 text-lg leading-8 text-ink-2">
            {c.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>

        </Reveal>
      ))}

    </div>
  </section>
)}

{page.closingTagline && (
  <section className="hero-cosmic relative overflow-hidden py-20 lg:py-24 text-center">

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

    <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

      <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {page.closingTagline}
      </p>

    </div>
  </section>
)}

      {/* Final CTA */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">

          <div className="hero-cosmic relative overflow-hidden rounded-[2rem] px-8 py-16 text-center lg:px-16">

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
            <div className="cosmic-grid-overlay" />

            <div className="relative">

              <span className="chip-cosmic">
                <span className="pulse-dot" />
                Ready to Transform?
              </span>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Discover {page.title} in Action
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 text-center">
                Connect with our experts to explore how Stafróf can help
                accelerate your digital transformation journey with
                AI-powered, enterprise-grade solutions.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Link
                  to="/contact"
                  className="premium-btn premium-btn-hover"
                >
                  CONTACT OUR TEAM
                  <ArrowRight className="size-4" />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Pages */}
      {related.length > 0 && (
        <section className="bg-surface py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-6">

            <Reveal>
              <p className="eyebrow">
                Explore More
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Related {section.label}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {related.map((r, i) => (
                <Reveal
                  key={r.slug}
                  delay={(i % 3) * 100}
                >
                  <Link
                    to={`${section.basePath}/$slug` as never}
                    params={{ slug: r.slug } as never}
                    className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl"
                  >

                    <div className="overflow-hidden aspect-[16/9]">

                      <img
                        src={topicImageFor(sectionKey, r.slug)}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        width={1280}
                        height={832}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    </div>

                    <div className="p-6">

                      <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                        {r.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-base leading-7 text-ink-2">
                        {r.tagline}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
                        Learn More
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
    <section className="bg-gradient-to-b from-transparent to-slate-50/50 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="border-l-4 border-brand pl-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-white">
              {label}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {items.map((it, i) => {
            const IconComp = getPremiumIcon(it.name);

            return (
              <Reveal
                key={i}
                delay={(i % 3) * 100}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl">

                  <div
                    className={
                      "flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-all duration-300 group-hover:scale-110 " +
                      (accent === "brand"
                        ? "bg-gradient-to-br from-[#ff7a00] to-orange-500"
                        : "bg-gradient-to-br from-brand-purple to-indigo-600")
                    }
                  >
                    <IconComp className="h-6 w-6 stroke-[2.2]" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                    {it.name}
                  </h3>

                  {it.desc && (
                    <p className="mt-4 flex-1 text-base leading-7 text-ink-2">
                      {it.desc}
                    </p>
                  )}

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}

function ChipList({
  label,
  items,
}: {
  label: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {label}
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-4">
          {items.map((it, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
            >
              {it}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

function Coverage({
  label,
  items,
}: {
  label: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;

  const [first, ...rest] = items;
  const looksLikeIntro =
    first.includes(":") || first.split(" ").length > 4;

  const intro = looksLikeIntro ? first : undefined;
  const list = looksLikeIntro ? rest : items;

  return (
    <section className="bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>

          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {label}
          </h2>

          {intro && (
            <p className="mt-6 max-w-4xl text-lg leading-8 text-ink-2">
              {intro}
            </p>
          )}

        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {list.map((it, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-brand-purple" />

              <span className="text-base leading-7 text-ink">
                {it}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

function Benefits({
  items,
}: {
  items?: string[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-gradient-to-br from-[#FFF8F4] to-[#FFF0E5] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>

          <div className="border-l-4 border-[#ff7a00] pl-5">

            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Business Benefits
            </h2>

          </div>

        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">

          {items.map((b, i) => {
            const IconComp = getPremiumIcon(b);

            return (
              <Reveal
                as="div"
                key={i}
                delay={(i % 2) * 100}
              >
                <div className="group flex h-full gap-5 rounded-2xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#ff7a00] transition-transform duration-300 group-hover:scale-110">
                    <IconComp className="h-6 w-6 stroke-[2.2]" />
                  </div>

                  <p className="text-base leading-7 text-ink-2">
                    {b}
                  </p>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}

function PoweredByBlock({ page }: { page: SubPage }) {
  const pb = page.poweredBy;

  if (!pb || !pb.items || pb.items.length === 0) return null;

  return (
    <section className="bg-surface/100 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {page.poweredByLabel ?? "Powered by Stafróf Platforms"}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6">

          {pb.items.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 70}
            >
              <div className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-purple text-white">
                  ✓
                </div>

                <p className="text-base leading-7 text-ink-2">
                  {it}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export function SectionOverview({ sectionKey }: { sectionKey: SectionKey }) {
  const section = findSection(sectionKey);
  const meta = OVERVIEW_META[sectionKey];

  return (
    <>
      <section className="hero-cosmic relative overflow-hidden pt-32 pb-24 lg:pb-28">
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

  <div className="relative mx-auto max-w-7xl px-6 text-center">

    <Reveal>
      <p className="eyebrow-dark">
        {section.eyebrow}
      </p>
    </Reveal>

    {meta?.logo && (
      <Reveal delay={80}>
        <div className="mt-8 flex justify-center">
          <LogoBox
            logo={PRODUCT_LOGOS[meta.logo]}
            size="xl"
          />
        </div>
      </Reveal>
    )}

    <Reveal delay={160}>
      <h1 className="mx-auto mt-8 max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
        {meta?.headline ?? section.headline}
      </h1>
    </Reveal>

    {(meta?.tagline ?? section.summary) && (
      <Reveal delay={260}>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
          {meta?.tagline ?? section.summary}
        </p>
      </Reveal>
    )}

    {meta?.intro && meta.intro.length > 0 && (
      <Reveal delay={340}>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-8 text-white/75">
          {meta.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>
    )}

    <Reveal delay={440}>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="btn-glow btn-glow-hover"
        >
          CONTACT US
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Reveal>

  </div>
</section>

      <section className="bg-white/95 py-24 lg:py-28">
  <div className="mx-auto max-w-7xl px-6">

    {meta?.gridHeading && (
      <Reveal>
        <div className="mb-14">

          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {meta.gridHeading}
          </h2>

          {meta.gridSubheading && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-2">
              {meta.gridSubheading}
            </p>
          )}

        </div>
      </Reveal>
    )}

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {section.pages.map((p, i) => {
        const logoKey = getLogoForPage(sectionKey, p.slug);
        const logo = logoKey ? PRODUCT_LOGOS[logoKey] : null;

        return (
          <Reveal
            key={p.slug}
            delay={(i % 3) * 100}
          >
            <Link
              to={`${section.basePath}/$slug` as never}
              params={{ slug: p.slug } as never}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl"
            >

              <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="tile-media relative aspect-[16/10] overflow-hidden">

                <img
                  src={topicImageFor(sectionKey, p.slug)}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {logo && (
                  <div className="absolute bottom-4 left-4 z-10 rounded-xl bg-white/95 p-2 shadow-lg backdrop-blur-md">
                    <LogoBox
                      logo={logo}
                      size="md"
                    />
                  </div>
                )}

                <span className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white backdrop-blur-md">
                  {String(i + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="flex flex-1 flex-col p-8">

                <h3 className="font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-brand">
                  {p.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-ink-2 text-left">
                  {(() => {
                    const text = p.tagline || "";
                    const firstPeriod = text.indexOf(".");
                    return firstPeriod === -1
                      ? text
                      : text.substring(0, firstPeriod + 1);
                  })()}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
                  Explore
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
