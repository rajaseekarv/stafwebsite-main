import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Globe2 } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import contactHero from "@/assets/contact-hero.png";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Stafróf — Talk to our team" },
      {
        name: "description",
        content:
          "Get in touch with Stafróf Intelligence Corporation to discuss revenue assurance, data, AI, and intelligent automation for your institution.",
      },
      { property: "og:title", content: "Contact Stafróf" },
      { property: "og:description", content: "Talk to the Stafróf team about your AI, data, and revenue assurance roadmap." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* Redesigned Hero with Cosmic Glow */}
      <section className="relative hero-cosmic pt-32 pb-24 overflow-hidden">
        <img
          src={contactHero}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-90 saturate-125 brightness-[0.8]"
        />
        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal delay={100}>
            <p className="eyebrow-dark">GET IN TOUCH</p>
          </Reveal>
          <Reveal delay={180}>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
              Solving revenue leakage with <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-2 via-brand to-[#00C2FF]">
                Stafróf Revenue Assurance
              </span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70">
              Tell us a bit about your project. A bit of context lets us connect you with the right
              team faster.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Redesigned Form & Details section */}
      <section className="py-20 bg-[#020718] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
          <Reveal delay={150} className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-brand/35 transition-all group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand-2 group-hover:scale-110 transition-transform">
                <Mail className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">Email Us</h3>
              <a href="mailto:business@Stafrof.com" className="mt-1 block text-sm text-brand-2 hover:underline font-medium">
                business@Stafrof.com
              </a>
            </div>
            
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-brand/35 transition-all group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand-2 group-hover:scale-110 transition-transform">
                <Globe2 className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">Global Reach</h3>
              <p className="mt-1 text-sm text-white/60 leading-relaxed">
                Serving Banking, Financial Services & Capital Markets worldwide.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-brand/35 transition-all group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand-2 group-hover:scale-110 transition-transform">
                <MapPin className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">Headquarters</h3>
              <p className="mt-1 text-sm text-white/60 leading-relaxed">
                Stafróf Intelligence Corporation
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-brand/35 transition-all group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand-2 group-hover:scale-110 transition-transform">
                <Globe2 className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">Corporate Identity</h3>
              <p className="mt-1 text-sm text-brand-2 font-medium tracking-wide">
                CIN: U63119TN2026PTC194765
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="rounded-3xl border border-blue-100 bg-white/95 backdrop-blur-xl p-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)] shadow-blue-500/10 sm:p-10 text-slate-900">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
