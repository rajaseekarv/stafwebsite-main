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

  if (sectionKey === "about" && slug === "who-we-are") {
    const imgSrc = SLUG_DOC_IMAGES["who-we-are"]?.[0] || topicImageFor(sectionKey, slug);
    return (
      <section className="py-32 min-h-screen bg-surface/30">
        <div className="mx-auto max-w-4xl px-6 space-y-12 text-center animate-fade-in">
          <Reveal>
            <h1 className="font-display text-5xl font-bold text-ink sm:text-6xl md:text-7xl tracking-tight uppercase">
              WHO WE ARE
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xl leading-relaxed text-ink-2 max-w-3xl mx-auto text-justify">
              At Stafróf, we believe that data is the foundation of intelligent banking. By transforming data into actionable insights and automating complex business processes, we empower financial institutions to make faster decisions, improve operational efficiency, reduce risk, and unlock sustainable growth.
            </p>
          </Reveal>
          <Reveal delay={250} direction="right" className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border/10 bg-white/40 p-2 shadow-lg max-w-3xl">
              <img
                src={imgSrc}
                alt="Who We Are - Stafróf"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
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
          <section className="py-20">
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
        <section className="py-20">
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
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl tracking-tight border-l-4 border-brand pl-4 mb-2">{label}</h2>
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
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-4xl">{label}</h2>
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
    <section className="py-20 bg-gradient-to-br from-[#FFF8F4] to-[#FFF0E5]">
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
    <section className="py-20">
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
        <div className="relative mx-auto max-w-5xl px-6">
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

      <section className="py-20">
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
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">
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
