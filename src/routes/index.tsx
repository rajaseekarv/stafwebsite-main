import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Coins, Database, Brain, Cpu, ShieldCheck, Users, LineChart, Network } from "lucide-react";
import { SITE, findPage } from "@/lib/site-content";
import { PRODUCT_LOGOS } from "@/lib/product-logos";
import { LogoBox } from "@/components/site/LogoBox";
import { SITE_IMAGES, sectionImage } from "@/lib/section-images";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import aboutWhoWeAre from "@/assets/about-who-we-are.jpg";
import platformShowcase from "@/assets/platform-showcase.png";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";
import { DOC_IMAGES } from "@/lib/doc-images-map";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { PRODUCT_IMAGES } from "@/lib/product-images";
import ImageViewer from "@/components/site/ImageViewer";
import consultingApproach from "@/assets/doc_extracted/Consulting-approach.png";
import digitalTransformation from "@/assets/doc_extracted/Digital-Transformation-Consulting.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stafrof Intelligence Corporation — AI, Data & Intelligent Innovation for BFSM" },
      {
        name: "description",
        content:
          "Powering Banking, Financial Services & Capital Markets with AI, Data & Intelligent Innovation.",
      },
      { property: "og:title", content: "Stafrof Intelligence Corporation" },
      {
        property: "og:description",
        content:
          "Powering Banking, Financial Services & Capital Markets with AI, Data & Intelligent Innovation.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function getSolutionStyles(slug: string) {
  if (slug.includes("core-banking") || slug.includes("revenue")) {
    return {
      Icon: Coins,
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-gradient-to-br from-blue-500/[0.08] to-blue-500/[0.02] border-blue-500/20",
      border: "group-hover:border-blue-500/50 group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]",
      accent: "#3b82f6"
    };
  }
  if (slug.includes("data-engineering") || slug.includes("analytics")) {
    return {
      Icon: Database,
      color: "text-cyan-500 dark:text-cyan-400",
      bg: "bg-gradient-to-br from-cyan-500/[0.08] to-cyan-500/[0.02] border-cyan-500/20",
      border: "group-hover:border-cyan-500/50 group-hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]",
      accent: "#06b6d4"
    };
  }
  if (slug.includes("ai-intelligence") || slug.includes("ai")) {
    return {
      Icon: Brain,
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-gradient-to-br from-purple-500/[0.08] to-purple-500/[0.02] border-purple-500/20",
      border: "group-hover:border-purple-500/50 group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]",
      accent: "#a855f7"
    };
  }
  if (slug.includes("automation") || slug.includes("rpa")) {
    return {
      Icon: Cpu,
      color: "text-violet-500 dark:text-violet-400",
      bg: "bg-gradient-to-br from-violet-500/[0.08] to-violet-500/[0.02] border-violet-500/20",
      border: "group-hover:border-violet-500/50 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]",
      accent: "#8b5cf6"
    };
  }
  if (slug.includes("risk") || slug.includes("compliance")) {
    return {
      Icon: ShieldCheck,
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-gradient-to-br from-emerald-500/[0.08] to-emerald-500/[0.02] border-emerald-500/20",
      border: "group-hover:border-emerald-500/50 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
      accent: "#10b981"
    };
  }
  if (slug.includes("customer")) {
    return {
      Icon: Users,
      color: "text-pink-500 dark:text-pink-400",
      bg: "bg-gradient-to-br from-pink-500/[0.08] to-pink-500/[0.02] border-pink-500/20",
      border: "group-hover:border-pink-500/50 group-hover:shadow-[0_8px_30px_rgba(236,72,153,0.12)]",
      accent: "#ec4899"
    };
  }
  if (slug.includes("business-intelligence") || slug.includes("bi")) {
    return {
      Icon: LineChart,
      color: "text-indigo-500 dark:text-indigo-400",
      bg: "bg-gradient-to-br from-indigo-500/[0.08] to-indigo-500/[0.02] border-indigo-500/20",
      border: "group-hover:border-indigo-500/50 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]",
      accent: "#6366f1"
    };
  }
  if (slug.includes("integration") || slug.includes("enterprise")) {
    return {
      Icon: Network,
      color: "text-amber-500 dark:text-amber-400",
      bg: "bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.02] border-amber-500/20",
      border: "group-hover:border-amber-500/50 group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]",
      accent: "#f59e0b"
    };
  }
  return {
    Icon: Brain,
    color: "text-brand",
    bg: "bg-gradient-to-br from-brand/10 to-brand/[0.02] border-brand/20",
    border: "group-hover:border-brand/50 group-hover:shadow-[0_8px_30px_rgba(0,230,118,0.12)]",
    accent: "#00e676"
  };
}


function Home() {
  const products = SITE.sections.find((s) => s.key === "products")!;
  const platforms = SITE.sections.find((s) => s.key === "platforms")!;
  const solutions = SITE.sections.find((s) => s.key === "solutions")!;
  const services = SITE.sections.find((s) => s.key === "services")!;
  const consulting = SITE.sections.find((s) => s.key === "consulting")!;
  const segments = SITE.sections.find((s) => s.key === "segments")!;

  const whoWeAre = findPage("about", "who-we-are");
  const aboutParas = (whoWeAre?.paragraphs ?? whoWeAre?.intro ?? []).slice(0, 2);
  const join = findPage("about", "join");

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: heroSlide1,
      title: "Empowering Financial Institutions\nwith Intelligent Platforms for\nthe Future of Banking",
      subtitle: "Intelligent technology. Trusted data. Smarter decisions\nDriving efficiency, growth, and trust in every interaction"
    },
    {
      image: heroSlide2,
      title: "Future-Ready Banking\nPowered by Intelligence",
      subtitle: "AI-driven platforms. Trusted data\nAccelerating innovation for modern financial institutions"
    },
    {
      image: heroSlide3,
      title: "Delivering the Next Generation of\nEnterprise Banking Technology",
      subtitle: "Transforming data into intelligence\nPowering decisions. Driving impact"
    },
    {
      image: heroSlide4,
      title: "Intelligent Data\nSmarter AI\nStronger Results",
      subtitle: "Empowering Financial Institutions with\nIntelligent Platforms for the Future of Banking"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderTitle = (title: string) => {
    if (!title) return null;
    const highlights = [
      "Intelligent Platforms",
      "the Future of Banking",
      "Enterprise Banking Technology",
      "Intelligent Data",
      "Smarter AI",
      "Stronger Results",
      "Future-Ready Banking",
      "Powered by Intelligence",
      "Banking",
      "Intelligence"
    ];
    let elements: (string | React.ReactElement)[] = [title];
    highlights.forEach((keyword) => {
      const newElements: (string | React.ReactElement)[] = [];
      elements.forEach((el) => {
        if (typeof el === "string") {
          const parts = el.split(new RegExp(`(${keyword})`, "gi"));
          parts.forEach((part) => {
            if (part.toLowerCase() === keyword.toLowerCase()) {
              newElements.push(
                <span key={part + Math.random()} className="text-[#ff7a00] font-bold">
                  {part}
                </span>
              );
            } else {
              newElements.push(part);
            }
          });
        } else {
          newElements.push(el);
        }
      });
      elements = newElements;
    });
    return <>{elements}</>;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const numParticles = 80;
    const colors = ["rgba(0, 194, 255, ", "rgba(234, 88, 12, ", "rgba(122, 43, 245, "];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < numParticles; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color + alpha + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.6)";
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* === CINEMATIC HERO === */}
      <section className="hero-cosmic min-h-[92vh] pt-32 pb-24 flex items-center relative">
        {/* Dynamic Image Carousel Background */}
        <div className="absolute inset-0 size-full overflow-hidden bg-cosmic">
          {slides.map((slide, idx) => (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              aria-hidden
              className={cn(
                "absolute inset-0 size-full object-cover transition-all duration-1000 ease-in-out bg-cosmic",
                activeSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            />
          ))}
          {/* Subtle dark gradient overlay to make text highly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic/90 via-cosmic/40 to-transparent z-10" />
        </div>

        {/* Slide Content Overlay */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 z-10 pointer-events-none hero-cosmic-content">
          <div className="max-w-5xl text-left flex items-stretch gap-5 sm:gap-7 pl-1 sm:pl-3">
            {/* Elegant vertical colored line on the left */}
            <div className="w-1.5 rounded-full bg-gradient-to-b from-[#ff7a00] via-red-500 to-[#7c3aed] shrink-0 opacity-95" />
            
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl transition-all duration-700 animate-fade-in whitespace-pre-line leading-[1.2]">
                {slides[activeSlide]?.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg transition-all duration-700 max-w-2xl whitespace-pre-line font-sans">
                {slides[activeSlide]?.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={cn(
                "size-2.5 rounded-full transition-all duration-300 cursor-pointer",
                activeSlide === idx ? "bg-brand w-6" : "bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* === WHO WE ARE === */}
      {aboutParas.length > 0 && (
        <section className="py-24 sm:py-32 bg-gradient-to-b from-[#020b2d] via-[#040e3d] to-[#020b2d] text-white border-t border-b border-white/5 relative overflow-hidden">
          {/* Cyber AI Network Lines & Particle Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,194,255,0.08),_transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,194,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,194,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="absolute top-1/4 left-10 w-96 h-96 platform-glow-blue opacity-40 blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 items-center relative z-10">
            <Reveal className="lg:col-span-7">
              <h2 className="font-display text-4xl font-bold text-white sm:text-6xl tracking-tight leading-tight">
                {whoWeAre?.title}
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-white/80 text-justify">
                <p>
                  <span className="font-semibold text-white">Stafróf Intelligence Corporation</span> is a next-generation enterprise technology company empowering the Banking, Financial and Capital Markets industry with AI, enterprise data, and intelligent automation. Our enterprise-grade platforms help financial institutions modernize operations, optimize revenue, unlock data intelligence, and accelerate digital transformation.
                </p>
                
                <div className="text-base text-white/85 text-left">
                  <p className="font-semibold text-white mb-4 text-lg">Our flagship platforms include:</p>
                  <div className="space-y-4">
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-brand/40 transition-all shadow-md group">
                      <span className="font-bold text-lg block mb-1 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent group-hover:brightness-110 transition-all">RevNexure 360° Suite</span>
                      <span className="text-sm text-white/70">AI-powered Revenue Assurance Platform that helps identify, prevent, and recover revenue leakages across banking operations.</span>
                    </div>
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-[#00C2FF]/40 transition-all shadow-md group">
                      <span className="font-bold text-lg block mb-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent group-hover:brightness-110 transition-all">DataXentra</span>
                      <span className="text-sm text-white/70">Enterprise Data Platform that unifies, governs, and transforms enterprise data into trusted business intelligence.</span>
                    </div>
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-xl hover:border-[#8644ff]/40 transition-all shadow-md group">
                      <span className="font-bold text-lg block mb-1 bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-200 bg-clip-text text-transparent group-hover:brightness-110 transition-all">AgenNova</span>
                      <span className="text-sm text-white/70">AI Intelligence Platform that enables intelligent automation, AI agents, and decision intelligence.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/about/$slug"
                  params={{ slug: "who-we-are" }}
                  className="inline-flex items-center gap-1.5 text-brand hover:text-brand-2 font-medium transition-colors"
                >
                  Read more <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150} direction="right" className="lg:col-span-5 w-full flex justify-center items-center">
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-2 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-transparent to-[#00C2FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
                <ImageViewer
                    src={DOC_IMAGES.image1}
                    alt="Who We Are"
                    className="w-full rounded-2xl"
                />
                </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* === OUR PURPOSE === */}
      <section className="py-24 bg-gradient-to-br from-[#020b2d] via-[#091e5c] to-[#0091ff] text-white border-b border-blue-900/30 relative">
        {/* Floating Light Effects & Particle overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(0,194,255,0.12),_transparent_50%)] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 relative z-10">
            <p className="eyebrow text-cyan-300">Our Purpose</p>
            <h2 className="font-display text-4xl font-bold text-white sm:text-6xl tracking-tight">
              Nex Gen Platforms
            </h2>
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
              <p className="text-lg leading-relaxed text-white/90 text-center">
                To empower financial institutions with intelligent technologies that simplify complexity, accelerate innovation, and create lasting business value.
              </p>
            </div>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { img: DOC_IMAGES.image3, name: "RevNexure", desc: "AI-powered Revenue Assurance Platform helping identify, prevent, and recover revenue leakages." },
              { img: DOC_IMAGES.image4, name: "DataXentra", desc: "Enterprise Data Platform unifying and governing enterprise data into trusted business intelligence." },
              { img: DOC_IMAGES.image5, name: "AgenNova", desc: "AI Intelligence Platform enabling intelligent automation, AI agents, and decision systems." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120} className="group relative flex flex-col justify-between overflow-hidden p-6 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_-12px_rgba(0,194,255,0.25)] hover:border-blue-400/60 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="text-left mb-4 relative z-10">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{item.name}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
                <div className="overflow-hidden rounded-2xl bg-black/20 p-4 flex justify-center items-center h-full min-h-[220px] border border-white/5 relative z-10">
                  <ImageViewer
                    src={item.img}
                    alt={item.name}
                    className="max-w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === PLATFORMS (image-led dark band) === */}
      <section className="animated-gradient-bg relative overflow-hidden py-24 sm:py-32">
        {/* Animated grid pattern & Cyber Banking effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,194,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,194,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02061e]/80 via-[#0a1b4d]/40 to-[#02061e]/80 pointer-events-none" />
        
        {/* Custom Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 platform-glow-blue opacity-60 pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 platform-glow-orange opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">

  <Reveal className="text-center mb-14">
    <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
      Our Flagship Platform Capabilities
    </h2>

    <p className="mt-4 text-white/70 max-w-3xl mx-auto">
      Explore the core business capabilities delivered by the Stafróf
      RevNexure Platform. Click any module to view it in detail.
    </p>
  </Reveal>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {PRODUCT_IMAGES.map((item, index) => (

      <Reveal key={index} delay={index * 50}>

        <div className="px-3 group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-brand hover:bg-white/[0.05] transition-all duration-300 shadow-lg">

          <ImageViewer
            src={item.img}
            alt={item.title}
            className="w-full aspect-[4/3] object-cover cursor-zoom-in"
          />

          <div className="pt-2 pb-4">

            <h3 className="font-display text-lg font-semibold text-white group-hover:text-brand transition-colors">
              {item.title}
            </h3>

          </div>

        </div>

      </Reveal>

    ))}

  </div>

</div>
      </section>

      {/* === SOLUTIONS === */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#010414] via-[#05113d] to-[#010414] text-white border-t border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 platform-glow-blue opacity-25 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className="eyebrow-dark">Solutions</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-6xl tracking-tight">
                Building the Future of Banking with Intelligent Solutions
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-1.5 text-brand hover:text-brand-2 font-medium transition-colors"
              >
                All solutions <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.pages.map((p, i) => {
              const styles = getSolutionStyles(p.slug);
              const IconComp = styles.Icon;

              return (
                <Reveal key={p.slug} delay={(i % 3) * 100}>
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: p.slug }}
                    className="group relative block overflow-hidden p-7 h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-transparent transition-all duration-500 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,194,255,0.15)]"
                  >
                    {/* Glowing border gradient on hover */}
                    <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-[1px] bg-[#020a23] rounded-[15px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                    {/* Top colored indicator glow border */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 opacity-0 transition-all duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: styles.accent }}
                    />

                    <div className="slide-content h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <IconComp className="size-6 stroke-[2]" />
                          </div>
                          <ArrowRight className="size-4 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-white" />
                        </div>

                        <h3 className="mt-6 font-display text-lg font-bold transition-colors text-white group-hover:text-brand">
                          {p.title}
                        </h3>
                        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-white/70">{p.tagline}</p>
                      </div>

                      <span className="slide-reveal mt-6 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-colors text-brand/80 group-hover:text-brand">
                        Learn more
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === BANKING PRODUCTS (image band) === */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#010414] via-[#041440] to-[#08225e] overflow-hidden">
        {/* Cyan lighting overlay for dashboard feeling */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <img
          src={sectionImage("products")}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="cosmic-overlay" />
        <div className="cosmic-particles" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow-dark">Banking Product Suites</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-6xl tracking-tight">
              Our Banking Product Suites
            </h2>
            <div className="mt-7 flex justify-center">
              <LogoBox logo={PRODUCT_LOGOS.revnexure} size="xl" />
            </div>
            <p className="mt-5 max-w-3xl text-lg text-white/75">
              AI-Powered Revenue Assurance Platform for Banking, Financial Services &amp; Capital Markets.
            </p>
            <Reveal delay={180} direction="right" className="mt-8 flex justify-center">
              <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-lg">
                <ImageViewer
                  src={DOC_IMAGES.image6}
                  alt="Banking Product Suites Illustration"
                  className="w-full h-auto object-contain rounded-xl"
                  style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </Reveal>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {products.pages.slice(0, 9).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition-all hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <span className="font-medium text-white/90 group-hover:text-white">{p.title}</span>
                  <ArrowRight className="size-4 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/products" className="btn-ghost-dark btn-ghost-dark-hover">
              See all banking products <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* === SERVICES, CONSULTING & SEGMENTS === */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#030926] via-[#0e2778] to-[#030926] text-white border-t border-white/5 relative overflow-hidden">
        {/* Depth shadow vignette & floating shapes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-[90px] pointer-events-none animate-bounce duration-[10000ms]" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        
        <div className="mx-auto max-w-6xl px-6 mb-16 relative z-10 text-center">
  <p className="eyebrow-dark">Expertise & Capabilities</p>

  <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl tracking-tight">
    Services, Consulting & Industry Segments
  </h2>
</div>

{/* Consulting Images */}

<div className="mx-auto max-w-6xl px-6 mb-20 relative z-10">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    <Reveal delay={100}>
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl hover:border-brand transition-all duration-300">

        <div className="p-5 border-b border-white/10">
          <h3 className="font-display text-2xl font-semibold text-white">
            Our Consulting Approach
          </h3>
        </div>

        <ImageViewer
          src={consultingApproach}
          alt="Our Consulting Approach"
          className="w-full h-auto object-contain cursor-zoom-in"
        />

      </div>
    </Reveal>

    <Reveal delay={250}>
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl hover:border-brand transition-all duration-300">

        <div className="p-5 border-b border-white/10">
          <h3 className="font-display text-2xl font-semibold text-white">
            Our Digital Transformation Approach
          </h3>
        </div>

        <ImageViewer
          src={digitalTransformation}
          alt="Our Digital Transformation Approach"
          className="w-full h-auto object-contain cursor-zoom-in"
        />

      </div>
    </Reveal>

  </div>

</div>

        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative z-10">
          {[services, consulting, segments].map((s, idx) => (
            <Reveal key={s.key} delay={idx * 150}>
              <div className="group relative h-full flex flex-col justify-between overflow-hidden p-8 premium-card-dark premium-card-dark-hover bg-white/[0.02] border border-white/10 hover:border-brand/40 shadow-lg rounded-2xl">
                <div className="absolute -right-20 -top-20 size-64 rounded-full bg-gradient-to-br from-brand/10 to-brand-purple/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div>
                  <p className="eyebrow-dark">{s.label}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">{s.headline}</h3>
                  <p className="mt-3 text-white/70">{s.summary}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/70">
                    {s.pages.slice(0, 5).map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`${s.basePath}/$slug` as never}
                          params={{ slug: p.slug } as never}
                          className="inline-flex items-center gap-2 text-white/80 hover:text-brand transition-colors"
                        >
                          <span className="size-1.5 rounded-full bg-brand" />
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    to={s.basePath as never}
                    className="inline-flex items-center gap-1.5 text-brand hover:text-brand-2 font-medium transition-colors"
                  >
                    View all {s.label.toLowerCase()} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === FINAL CTA & CONTACT FORM === */}
      <section className="py-24 bg-gradient-to-b from-[#020718] via-[#050e26] to-[#01040d] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 platform-glow-blue opacity-15 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="hero-cosmic relative overflow-hidden rounded-[2rem] p-8 sm:p-16">
            <img
              src={SITE_IMAGES.cta}
              alt=""
              aria-hidden
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 size-full object-cover opacity-60"
            />
            <div className="cosmic-overlay" />
            <div className="cosmic-particles" />
            
            <div className="relative grid gap-12 lg:grid-cols-12 items-center">
              {/* Left Column: CTA Text */}
              <div className="lg:col-span-6 text-left space-y-6">
                <Reveal>
                  <span className="chip-cosmic">
                    <span className="pulse-dot" />
                    Join our journey
                  </span>
                </Reveal>
                <Reveal delay={120}>
                  <h2 className="font-display text-3xl font-bold text-white sm:text-5xl tracking-tight leading-tight">
                    {join?.title ?? "Join Our Journey"}
                  </h2>
                </Reveal>
                {join?.tagline && (
                  <Reveal delay={220}>
                    <p className="text-lg text-white/80 leading-relaxed text-justify">{join.tagline}</p>
                  </Reveal>
                )}
                <Reveal delay={320}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/contact" className="btn-ghost-dark btn-ghost-dark-hover">
                      CONTACT US <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href="mailto:business@stafrof.com"
                      className="premium-btn premium-btn-hover inline-flex items-center gap-2"
                    >
                      Book a Demo <ArrowRight className="size-4" />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Embedded Contact Form */}
              <div className="lg:col-span-6">
                <Reveal delay={240}>
                  <div className="bg-gradient-to-b from-[#061233]/95 to-[#030a1f]/98 backdrop-blur-xl border border-blue-500/25 p-6 sm:p-8 rounded-3xl shadow-2xl text-left">
                    <h3 className="font-display text-xl font-bold text-white mb-6">Send us a message</h3>
                    
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();

                        const fd = new FormData(e.currentTarget);
                        const name = fd.get("name") as string;
                        const company = fd.get("company") as string;
                        const email = fd.get("email") as string;
                        const phone = fd.get("phone") as string;
                        const message = fd.get("message") as string;

                        if (!name || !company || !email || !phone || !message) {
                          toast.error("Please fill all required fields");
                          return;
                        }

                        const target = e.currentTarget;

                        fetch("https://formsubmit.co/ajax/business@stafrof.com", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          body: JSON.stringify({
                            Name: name,
                            Company: company,
                            Email: email,
                            Phone: phone,
                            Message: message,
                            Subject: `Business Inquiry from ${company}`,
                          }),
                        })
                          .then((res) => {
                            if (!res.ok) throw new Error("Failed to submit inquiry");

                            toast.success(
                              "Thank you! Your inquiry has been sent to business@stafrof.com."
                            );

                            target.reset();
                          })
                          .catch(() => {
                            toast.error(
                              "Failed to submit. Please try again or email business@stafrof.com directly."
                            );
                          });
                      }}
                      className="space-y-5"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                          Name *
                        </label>

                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                          Company *
                        </label>

                        <input
                          name="company"
                          type="text"
                          required
                          placeholder="Company name"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                            Email *
                          </label>

                          <input
                            name="email"
                            type="email"
                            required
                            placeholder="Business email"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                            Phone *
                          </label>

                          <input
                            name="phone"
                            type="tel"
                            required
                            placeholder="Phone number"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                          Message *
                        </label>

                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder="Your message..."
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full premium-btn premium-btn-hover justify-center py-4 text-sm font-semibold uppercase tracking-wider"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
