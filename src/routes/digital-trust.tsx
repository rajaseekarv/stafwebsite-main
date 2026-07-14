import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/digital-trust")({
  head: () => ({
    meta: [
      { title: "Digital Trust — Stafróf" },
      { name: "description", content: "Building confidence through secure, responsible, and intelligent technology." },
    ],
  }),
  component: DigitalTrustPage,
});

function DigitalTrustPage() {
  return (
    <>
      <section className="relative hero-cosmic pt-32 pb-20 overflow-hidden">
        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal delay={100}>
            <p className="eyebrow-dark">TRUST & RESPONSIBILITY</p>
          </Reveal>
          <Reveal delay={180}>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl tracking-tight">
              Digital Trust
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Building Confidence Through Secure, Responsible, and Intelligent Technology
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#020718] relative min-h-[50vh]">
        <div className="relative mx-auto max-w-3xl px-6 text-white/80 space-y-8 text-justify">
          <Reveal delay={150}>
            <p>
              At Stafróf Intelligence Corporation, digital trust is the foundation of everything we build. We help banks, financial institutions, fintechs, and capital market organizations confidently embrace digital transformation by delivering secure, resilient, transparent, and responsible technology solutions.
            </p>
            <p className="mt-2.5">
              Our commitment to digital trust extends across our AI platforms, enterprise data solutions, analytics, intelligent automation, and digital banking technologies.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="font-display text-2xl font-bold text-white border-b border-white/10 pb-2">Our Digital Trust Principles</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-brand">Security by Design</h3>
                <p className="mt-1 text-sm text-white/70">
                  Security is integrated into every stage of our solution lifecycle. We apply secure architecture, encryption, identity and access management, continuous monitoring, and proactive risk management to help protect business-critical systems and data.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-[#00C2FF]">Privacy by Design</h3>
                <p className="mt-1 text-sm text-white/70">
                  We embed privacy into our products and services from the outset. Our solutions are designed to support responsible data handling, minimize unnecessary data collection, and help organizations meet applicable privacy and regulatory requirements.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-brand">Responsible AI</h3>
                <p className="mt-1 text-sm text-white/70">
                  Our AI solutions are developed with fairness, accountability, transparency, and human oversight. We strive to ensure AI supports informed decision-making while reducing bias and maintaining ethical standards.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-[#00C2FF]">Trusted Data</h3>
                <p className="mt-1 text-sm text-white/70">
                  Reliable AI begins with trusted data. Our enterprise data platforms help organizations improve data quality, governance, lineage, and consistency, enabling confident business decisions and regulatory compliance.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-brand">Transparency & Explainability</h3>
                <p className="mt-1 text-sm text-white/70">
                  We believe organizations should understand how intelligent systems generate insights and recommendations. We promote explainable AI and transparent analytics to strengthen confidence in business outcomes.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-[#00C2FF]">Resilience & Reliability</h3>
                <p className="mt-1 text-sm text-white/70">
                  Our platforms are designed for enterprise-grade availability, scalability, and operational resilience, helping organizations maintain business continuity and deliver consistent performance.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-brand">Compliance & Governance</h3>
                <p className="mt-1 text-sm text-white/70">
                  We help organizations strengthen governance through robust controls, auditability, data stewardship, and support for regulatory compliance across banking and financial services environments.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-[#00C2FF]">Customer Trust</h3>
                <p className="mt-1 text-sm text-white/70">
                  Long-term relationships are built on integrity, accountability, and measurable results. We work closely with our customers to deliver secure, reliable, and innovative solutions that create lasting business value.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <h2 className="font-display text-2xl font-bold text-white border-b border-white/10 pb-2">Our Commitment</h2>
            <p className="mt-4">
              Stafróf Intelligence Corporation is committed to developing technologies that:
            </p>
            <ul className="mt-2.5 pl-5 list-disc space-y-1.5 text-white/70">
              <li>Protect customer and enterprise data.</li>
              <li>Strengthen cybersecurity and operational resilience.</li>
              <li>Promote responsible and ethical AI adoption.</li>
              <li>Deliver transparent and explainable insights.</li>
              <li>Support regulatory compliance and governance.</li>
              <li>Enable secure digital transformation.</li>
              <li>Create measurable business value through trusted innovation.</li>
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <h3 className="font-display text-lg font-bold text-white">Trust as a Competitive Advantage</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                Digital trust is more than security—it is the confidence that technology will perform reliably, protect critical information, support responsible innovation, and enable better business outcomes. At Stafróf Intelligence Corporation, we are committed to helping organizations build that confidence through intelligent, secure, and future-ready solutions.
              </p>
              <p className="mt-4 text-sm font-semibold text-brand">
                Building Trust. Enabling Innovation. Transforming Financial Services.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
