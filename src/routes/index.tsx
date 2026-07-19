import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Coins, Database, Brain, Cpu, ShieldCheck, Users, LineChart, Network } from "lucide-react";
import { SITE, findPage } from "@/lib/site-content";
import { PRODUCT_LOGOS } from "@/lib/product-logos";
import { LogoBox } from "@/components/site/LogoBox";
import { SITE_IMAGES, sectionImage } from "@/lib/section-images";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import HeroVideoCarousel from "@/components/site/HeroVideoCarousel";
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

/* Video Slider */
import heroVideo1 from "@/assets/Videos/hero1.mp4";
import heroVideo2 from "@/assets/Videos/hero2.mp4";
import heroVideo3 from "@/assets/Videos/hero3.mp4";
import heroVideo4 from "@/assets/Videos/hero4.mp4";
import heroVideo5 from "@/assets/Videos/hero5.mp4";
import heroVideo6 from "@/assets/Videos/hero6.mp4";

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
      border:
        "group-hover:border-blue-500/50 group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]",
      accent: "#3b82f6",
    };
  }

  if (slug.includes("data-engineering") || slug.includes("analytics")) {
    return {
      Icon: Database,
      color: "text-cyan-500 dark:text-cyan-400",
      bg: "bg-gradient-to-br from-cyan-500/[0.08] to-cyan-500/[0.02] border-cyan-500/20",
      border:
        "group-hover:border-cyan-500/50 group-hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]",
      accent: "#06b6d4",
    };
  }

  if (slug.includes("ai-intelligence") || slug.includes("ai")) {
    return {
      Icon: Brain,
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-gradient-to-br from-purple-500/[0.08] to-purple-500/[0.02] border-purple-500/20",
      border:
        "group-hover:border-purple-500/50 group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]",
      accent: "#a855f7",
    };
  }

  if (slug.includes("automation") || slug.includes("rpa")) {
    return {
      Icon: Cpu,
      color: "text-violet-500 dark:text-violet-400",
      bg: "bg-gradient-to-br from-violet-500/[0.08] to-violet-500/[0.02] border-violet-500/20",
      border:
        "group-hover:border-violet-500/50 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]",
      accent: "#8b5cf6",
    };
  }

  if (slug.includes("risk") || slug.includes("compliance")) {
    return {
      Icon: ShieldCheck,
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-gradient-to-br from-emerald-500/[0.08] to-emerald-500/[0.02] border-emerald-500/20",
      border:
        "group-hover:border-emerald-500/50 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
      accent: "#10b981",
    };
  }

  if (slug.includes("customer")) {
    return {
      Icon: Users,
      color: "text-pink-500 dark:text-pink-400",
      bg: "bg-gradient-to-br from-pink-500/[0.08] to-pink-500/[0.02] border-pink-500/20",
      border:
        "group-hover:border-pink-500/50 group-hover:shadow-[0_8px_30px_rgba(236,72,153,0.12)]",
      accent: "#ec4899",
    };
  }

  if (slug.includes("business-intelligence") || slug.includes("bi")) {
    return {
      Icon: LineChart,
      color: "text-indigo-500 dark:text-indigo-400",
      bg: "bg-gradient-to-br from-indigo-500/[0.08] to-indigo-500/[0.02] border-indigo-500/20",
      border:
        "group-hover:border-indigo-500/50 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]",
      accent: "#6366f1",
    };
  }

  if (slug.includes("integration") || slug.includes("enterprise")) {
    return {
      Icon: Network,
      color: "text-amber-500 dark:text-amber-400",
      bg: "bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.02] border-amber-500/20",
      border:
        "group-hover:border-amber-500/50 group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]",
      accent: "#f59e0b",
    };
  }

  return {
    Icon: Brain,
    color: "text-brand",
    bg: "bg-gradient-to-br from-brand/10 to-brand/[0.02] border-brand/20",
    border:
      "group-hover:border-brand/50 group-hover:shadow-[0_8px_30px_rgba(0,230,118,0.12)]",
    accent: "#00e676",
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
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
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
  const videos = [
        heroVideo1,
        heroVideo2,
        heroVideo3,
        heroVideo4,
        heroVideo5,
        heroVideo6,
    ];

  useEffect(() => {
  // Don't rotate images while video is playing
  if (showVideo) return;

  const timer = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, 30000);

  return () => clearInterval(timer);
}, [showVideo, slides.length]);

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

    {!showVideo ? (
      <>
        {slides.map((slide, idx) => (
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            aria-hidden
            className={cn(
              "absolute inset-0 size-full object-cover transition-all duration-1000 ease-in-out bg-cosmic",
              activeSlide === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            )}
          />
        ))}
      </>
    ) : (
      <HeroVideoCarousel
        videos={videos}
        onClose={() => setShowVideo(false)}
      />
    )}

    <div className="absolute inset-0 bg-gradient-to-r from-cosmic/90 via-cosmic/40 to-transparent z-10" />

  </div>

  {/* Slide Content Overlay */}
  <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 z-10 pointer-events-none hero-cosmic-content">

    <div className="max-w-5xl text-left flex items-stretch gap-5 sm:gap-7 pl-1 sm:pl-3">

      {/* Elegant vertical colored line */}
      <div className="w-1.5 rounded-full bg-gradient-to-b from-[#ff7a00] via-red-500 to-[#7c3aed] shrink-0 opacity-95" />

      <div>

        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl transition-all duration-700 animate-fade-in whitespace-pre-line leading-[1.2]">
          {slides[activeSlide]?.title}
        </h1>

        <p className="mt-6 max-w-2xl whitespace-pre-line font-sans text-base leading-relaxed text-white/90 transition-all duration-700 sm:text-lg">
          {slides[activeSlide]?.subtitle}
        </p>

        <button
          onClick={() => setShowVideo(true)}
          className="pointer-events-auto mt-8 rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur transition hover:bg-white/30"
        >
          ▶ Play Video
        </button>

      </div>

    </div>

  </div>

  {/* Carousel Indicators */}
  <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">

    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setActiveSlide(idx)}
        className={cn(
          "size-2.5 rounded-full transition-all duration-300 cursor-pointer",
          activeSlide === idx
            ? "bg-brand w-6"
            : "bg-white/40 hover:bg-white/70"
        )}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}

  </div>

</section>

      {/* === WHO WE ARE === */}
      {aboutParas.length > 0 && (
        <section className="relative overflow-hidden border-y border-white/5 bg-white py-24 lg:py-32">
  {/* Background Effects */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,194,255,0.08),_transparent_60%)]" />
  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,194,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,194,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
  <div className="absolute top-1/4 left-10 h-96 w-96 platform-glow-blue opacity-40 blur-[120px] animate-pulse duration-[6000ms]" />
  <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

  <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">

    {/* Left Content */}
    <Reveal className="lg:col-span-7">

      <h2 className="font-display text-4xl font-bold tracking-tight leading-tight text-ink sm:text-5xl lg:text-6xl">
        {whoWeAre?.title}
      </h2>

      <div className="mt-8 space-y-6 text-lg leading-8 text-ink-2 text-justify">
        <p>
          <span className="font-semibold text-ink">
            Stafróf Intelligence Corporation
          </span>{" "}
          is a next-generation enterprise technology company empowering the
          Banking, Financial Services and Capital Markets industry with AI,
          enterprise data and intelligent automation. Our enterprise-grade
          platforms help financial institutions modernize operations, optimize
          revenue, unlock data intelligence and accelerate digital
          transformation.
        </p>

        <div>

          <h3 className="mb-6 font-display text-2xl font-semibold text-ink">
            Our Flagship Platforms
          </h3>

          <div className="space-y-5">

            {/* RevNexure */}
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#020b2d] via-[#040e3d] to-[#020b2d] p-6 shadow-lg transition-all duration-300 hover:border-brand/40">

              <h4 className="font-display text-2xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                RevNexure 360° Suite
              </h4>

              <p className="mt-3 text-base leading-7 text-white/75">
                AI-powered Revenue Assurance Platform that helps identify,
                prevent and recover revenue leakages across banking operations.
              </p>

            </div>

            {/* DataXentra */}
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#020b2d] via-[#040e3d] to-[#020b2d] p-6 shadow-lg transition-all duration-300 hover:border-cyan-400/40">

              <h4 className="font-display text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
                DataXentra
              </h4>

              <p className="mt-3 text-base leading-7 text-white/75">
                Enterprise Data Platform that unifies, governs and transforms
                enterprise data into trusted business intelligence.
              </p>

            </div>

            {/* AgenNova */}
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#020b2d] via-[#040e3d] to-[#020b2d] p-6 shadow-lg transition-all duration-300 hover:border-purple-400/40">

              <h4 className="font-display text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-200 bg-clip-text text-transparent">
                AgenNova
              </h4>

              <p className="mt-3 text-base leading-7 text-white/75">
                AI Intelligence Platform enabling intelligent automation,
                AI agents and enterprise decision intelligence.
              </p>

            </div>

          </div>
        </div>
      </div>

      <div className="mt-10">

        <Link
          to="/about/$slug"
          params={{ slug: "who-we-are" }}
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-brand/90"
        >
          Read More
          <ArrowRight className="ml-2 size-4" />
        </Link>

      </div>

    </Reveal>

    {/* Right Image */}
    <Reveal
      delay={150}
      direction="right"
      className="flex items-center justify-center lg:col-span-5"
    >

      <div className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]">

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand/20 via-transparent to-cyan-400/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

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
      <section className="relative overflow-hidden border-b border-blue-900/30 bg-gradient-to-br from-[#020b2d] via-[#091e5c] to-[#0091ff] py-24 lg:py-32 text-white">

  {/* Background Effects */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,_rgba(0,194,255,0.12),_transparent_50%)]" />
  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-400/20 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="mx-auto mb-16 max-w-4xl text-center">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300 text-center">
        OUR PURPOSE
      </p>

      <h2 className="font-display text-4xl font-bold tracking-tight leading-tight text-white sm:text-5xl lg:text-6xl">
        Next Generation Platforms
      </h2>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl">

        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90 lg:text-xl">
          To empower financial institutions with intelligent technologies that
          simplify complexity, accelerate innovation and create lasting
          business value.
        </p>

      </div>

    </div>

    {/* Platform Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          img: DOC_IMAGES.image3,
          name: "RevNexure",
          desc:
            "AI-powered Revenue Assurance Platform helping identify, prevent and recover revenue leakages.",
        },
        {
          img: DOC_IMAGES.image4,
          name: "DataXentra",
          desc:
            "Enterprise Data Platform unifying and governing enterprise data into trusted business intelligence.",
        },
        {
          img: DOC_IMAGES.image5,
          name: "AgenNova",
          desc:
            "AI Intelligence Platform enabling intelligent automation, AI agents and enterprise decision systems.",
        },
      ].map((item, i) => (
        <Reveal
          key={i}
          delay={i * 120}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_30px_70px_-20px_rgba(0,194,255,.25)]"
        >

          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">

            <h3 className="font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
              {item.name}
            </h3>

            <p className="mt-4 text-base leading-7 text-white/75">
              {item.desc}
            </p>

          </div>

          <div className="relative z-10 mt-8 flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6">

            <ImageViewer
              src={item.img}
              alt={item.name}
              className="h-auto max-w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
            />

          </div>

        </Reveal>
      ))}

    </div>

  </div>

</section>

      {/* === PLATFORMS (image-led dark band) === */}
      <section className="animated-gradient-bg relative overflow-hidden py-24 lg:py-32">
  {/* Background */}
  <div className="absolute inset-0 bg-white pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-b from-[#02061e]/80 via-[#0a1b4d]/40 to-[#02061e]/80 pointer-events-none" />

  {/* Glow Effects */}
  <div className="absolute top-1/4 left-10 h-96 w-96 platform-glow-blue opacity-60 pointer-events-none" />
  <div className="absolute bottom-1/4 right-10 h-96 w-96 platform-glow-orange opacity-30 pointer-events-none" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <Reveal className="mx-auto mb-16 max-w-4xl text-center">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand text-center">
        ENTERPRISE PLATFORM
      </p>

      <h2 className="font-display text-4xl font-bold tracking-tight leading-tight text-white sm:text-5xl lg:text-6xl">
        Our Flagship Platform Capabilities
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75 lg:text-xl text-center">
        Explore the core business capabilities delivered by the Stafróf
        RevNexure Platform. Click any module to view detailed capabilities,
        architecture and business value.
      </p>

    </Reveal>

    {/* Capability Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {PRODUCT_IMAGES.map((item, index) => (

        <Reveal key={index} delay={index * 70}>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-brand/50 hover:bg-white/10 hover:shadow-[0_30px_70px_-20px_rgba(0,230,118,.25)]">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">

              <ImageViewer
                src={item.img}
                alt={item.title}
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Title */}
            <div className="pt-6">

              <h3 className="font-display text-2xl font-bold tracking-tight text-center text-white transition-colors duration-300 group-hover:text-brand">
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
      <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#010414] via-[#05113d] to-[#010414] py-24 lg:py-32 text-white">

  {/* Background Glow */}
  <div className="absolute top-1/3 right-1/4 h-96 w-96 platform-glow-blue opacity-25 pointer-events-none" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Section Header */}
    <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

      <Reveal>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand">
          SOLUTIONS
        </p>

        <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building the Future of Banking with Intelligent Solutions
        </h2>

      </Reveal>

      <Reveal delay={120}>

        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-base font-semibold text-brand transition-all duration-300 hover:text-brand-2"
        >
          View All Solutions
          <ArrowRight className="size-5" />
        </Link>

      </Reveal>

    </div>

    {/* Solution Cards */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {solutions.pages.map((p, i) => {

        const styles = getSolutionStyles(p.slug);
        const IconComp = styles.Icon;

        return (

          <Reveal key={p.slug} delay={(i % 4) * 80}>

            <Link
              to="/solutions/$slug"
              params={{ slug: p.slug }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#020a23] p-8 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_30px_70px_-20px_rgba(0,194,255,.20)]"
            >

              {/* Accent Line */}
              <div
                className="absolute left-0 top-0 h-1 w-0 rounded-t-3xl transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: styles.accent }}
              />

              <div className="flex h-full flex-col">

                {/* Top */}
                <div className="flex items-center justify-between">

                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <IconComp
                      className={`size-7 ${styles.color}`}
                      strokeWidth={2.2}
                    />
                  </div>

                  <ArrowRight className="size-5 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />

                </div>

                {/* Title */}
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-brand">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-5 flex-1 text-base leading-7 text-white/75">
                  {p.tagline}
                </p>

                {/* Footer */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand transition-all duration-300 group-hover:gap-3">

                  Learn More

                  <ArrowRight className="size-4" />

                </div>

              </div>

            </Link>

          </Reveal>

        );

      })}

    </div>

  </div>

</section>

      {/* === BANKING PRODUCTS (image band) === */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#010414] via-[#041440] to-[#08225e] py-24 lg:py-32">

  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08),transparent_70%)] pointer-events-none" />

  <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

  <img
    src={sectionImage("products")}
    alt=""
    aria-hidden
    loading="lazy"
    width={1920}
    height={1080}
    className="absolute inset-0 h-full w-full object-cover opacity-30"
  />

  <div className="cosmic-overlay" />
  <div className="cosmic-particles" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Heading */}

    <Reveal>

      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        BANKING PRODUCT SUITES
      </p>

      <h2 className="mx-auto max-w-5xl text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Our Banking Product Suites
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/75">
        AI-powered enterprise platforms that modernize banking operations,
        optimize revenue, strengthen governance, and accelerate digital
        transformation.
      </p>

    </Reveal>

    {/* Illustration */}

    <Reveal delay={180} direction="right">

      <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_25px_70px_-20px_rgba(0,0,0,.45)]">

        <ImageViewer
          src={DOC_IMAGES.image6}
          alt="Banking Product Suites"
          className="w-full rounded-2xl"
        />

      </div>

    </Reveal>

    {/* Product Grid */}

    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {products.pages.slice(0, 9).map((p, i) => (

        <Reveal key={p.slug} delay={(i % 3) * 80}>

          <Link
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-15px_rgba(0,194,255,.18)]"
          >

            {/* Accent line */}

            <div className="absolute left-0 top-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

            <div>

              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                {p.title}
              </h3>

            </div>

            <ArrowRight className="size-5 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />

          </Link>

        </Reveal>

      ))}

    </div>

    {/* CTA */}

    <div className="mt-16 text-center">

      <Link
        to="/products"
        className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(0,230,118,.35)]"
      >
        View All Banking Products
        <ArrowRight className="size-5" />
      </Link>

    </div>

  </div>

</section>

      {/* === SERVICES, CONSULTING & SEGMENTS === */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030926] via-[#0e2778] to-[#030926] py-24 lg:py-32 text-white">

  {/* Background Effects */}

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.45)_100%)] pointer-events-none" />

  <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

  <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Header */}

    <Reveal>

      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        Expertise & Capabilities
      </p>

      <h2 className="mx-auto max-w-5xl text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Services, Consulting & Industry Segments
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/70">
        Helping financial institutions modernize operations through consulting,
        AI, enterprise data, digital transformation, and industry-focused
        solutions.
      </p>

    </Reveal>

    {/* Consulting Images */}

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      <Reveal delay={100}>

        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_25px_70px_-20px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_30px_80px_-20px_rgba(0,194,255,.25)]">

          <div className="border-b border-white/10 p-6">

            <h3 className="font-display text-2xl font-semibold text-white">
              Our Consulting Approach
            </h3>

          </div>

          <ImageViewer
            src={consultingApproach}
            alt="Our Consulting Approach"
            className="w-full cursor-zoom-in"
          />

        </div>

      </Reveal>

      <Reveal delay={220}>

        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_25px_70px_-20px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_30px_80px_-20px_rgba(0,194,255,.25)]">

          <div className="border-b border-white/10 p-6">

            <h3 className="font-display text-2xl font-semibold text-white">
              Digital Transformation Framework
            </h3>

          </div>

          <ImageViewer
            src={digitalTransformation}
            alt="Digital Transformation"
            className="w-full cursor-zoom-in"
          />

        </div>

      </Reveal>

    </div>

    {/* Capability Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[services, consulting, segments].map((s, idx) => (

        <Reveal key={s.key} delay={idx * 120}>

          <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand/50 hover:shadow-[0_25px_70px_-20px_rgba(0,230,118,.18)]">

            {/* Accent */}

            <div className="absolute left-0 top-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />

            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {s.label}
              </p>

              <h3 className="font-display text-3xl font-bold text-white">
                {s.headline}
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                {s.summary}
              </p>

            </div>

            <div className="mt-8 flex-1">

              <div className="space-y-3">

                {s.pages.slice(0, 5).map((p) => (

                  <Link
                    key={p.slug}
                    to={`${s.basePath}/$slug` as never}
                    params={{ slug: p.slug } as never}
                    className="group/item flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-white/5"
                  >

                    <span className="h-2 w-2 rounded-full bg-brand transition-transform group-hover/item:scale-125" />

                    <span className="text-white/80 transition-colors group-hover/item:text-white">
                      {p.title}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/10">

              <Link
                to={s.basePath as never}
                className="inline-flex items-center gap-2 font-semibold text-brand transition-all hover:gap-3"
              >
                Explore {s.label}
                <ArrowRight className="size-4" />
              </Link>

            </div>

          </div>

        </Reveal>

      ))}

    </div>

  </div>

</section>

      {/* === FINAL CTA & CONTACT FORM === */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#020718] via-[#04112f] to-[#01040d] py-24 lg:py-32">

  {/* Background */}

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,255,.08),transparent_65%)] pointer-events-none" />

  <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">

      <img
        src={SITE_IMAGES.cta}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="cosmic-overlay" />
      <div className="cosmic-particles" />

      <div className="relative grid gap-16 p-10 lg:grid-cols-2 lg:p-16">

        {/* LEFT */}

        <div>

          <Reveal>

            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand">

              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />

              Join Our Journey

            </span>

          </Reveal>

          <Reveal delay={120}>

            <h2 className="mt-8 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

              Let's Build the Future of Banking Together

            </h2>

          </Reveal>

          <Reveal delay={220}>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">

              Partner with <strong>Stafróf Intelligence Corporation</strong> to
              accelerate enterprise innovation across Banking, Financial
              Services and Capital Markets.

            </p>

            <p className="mt-5 max-w-xl leading-8 text-white/65">

              Whether you're exploring Revenue Assurance, Enterprise Data,
              Artificial Intelligence, or Digital Transformation, our experts
              are ready to help you build future-ready financial platforms.

            </p>

          </Reveal>

          <Reveal delay={320}>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Enterprise Banking",
                "AI Intelligence",
                "Digital Transformation",
                "Global Consulting",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur"
                >
                  {item}
                </span>

              ))}

            </div>

          </Reveal>

          <Reveal delay={420}>

            <div className="mt-12">

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-brand px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_50px_-12px_rgba(0,230,118,.35)]"
              >
                Schedule a Consultation

                <ArrowRight className="size-5" />

              </Link>

              <p className="mt-5 text-sm text-white/50">

                Our specialists typically respond within 1–2 business days.

              </p>

            </div>

          </Reveal>

        </div>

        {/* RIGHT */}

        <Reveal delay={220}>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl shadow-[0_25px_80px_-25px_rgba(0,0,0,.55)]">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/15">

                <Sparkles className="size-7 text-brand" />

              </div>

              <h3 className="font-display text-3xl font-bold text-white">

                Why Connect With Us?

              </h3>

            </div>

            <p className="mb-8 leading-7 text-white/70">

              We partner with financial institutions worldwide to deliver
              enterprise AI platforms, intelligent automation, and digital
              transformation strategies that create measurable business value.

            </p>

            <div className="space-y-6">

              {[
                [
                  "Enterprise Strategy Consultation",
                  "Business-aligned transformation roadmap.",
                ],
                [
                  "AI & Intelligent Automation",
                  "Modernize operations with AI-driven platforms.",
                ],
                [
                  "Revenue Assurance & Analytics",
                  "Unlock profitability through trusted enterprise data.",
                ],
                [
                  "Dedicated Business Team",
                  "Fast engagement from experienced specialists.",
                ],
              ].map(([title, desc]) => (

                <div
                  key={title}
                  className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                >

                  <div className="mt-2 h-3 w-3 rounded-full bg-brand shrink-0" />

                  <div>

                    <h4 className="font-semibold text-white">

                      {title}

                    </h4>

                    <p className="mt-1 text-sm leading-6 text-white/60">

                      {desc}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </Reveal>

      </div>

    </div>

    {/* Bottom Illustration */}

    <Reveal delay={180} direction="right">

      <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,.45)]">

        <ImageViewer
          src={DOC_IMAGES.image18}
          alt="Join Our Journey"
          className="w-full rounded-2xl"
        />

      </div>

    </Reveal>

  </div>

</section>
    </>
  );
}
