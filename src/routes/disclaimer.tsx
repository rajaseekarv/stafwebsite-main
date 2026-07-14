import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Stafróf" },
      { name: "description", content: "Disclaimer for Stafróf Intelligence Corporation website and materials." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <section className="relative hero-cosmic pt-32 pb-20 overflow-hidden">
        <div className="cosmic-overlay" />
        <div className="cosmic-grid-overlay" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal delay={100}>
            <p className="eyebrow-dark">LEGAL INFORMATION</p>
          </Reveal>
          <Reveal delay={180}>
            <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl tracking-tight">
              Disclaimer
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#020718] relative min-h-[50vh]">
        <div className="relative mx-auto max-w-3xl px-6 text-white/80 space-y-6 text-justify">
          <Reveal delay={150}>
            <p>
              The information contained in this website, presentation, proposal, and all related materials is provided by Stafróf Intelligence Corporation for general informational purposes only. While we make every effort to ensure the accuracy and completeness of the information presented, it is provided "as is" without any express or implied warranty.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              The products, services, capabilities, features, roadmaps, architectures, screenshots, demonstrations, and product illustrations described herein are intended to communicate our strategic vision and technology direction. Certain features or capabilities may be under development, subject to change, or available only in specific editions or future releases.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p>
              All product names, logos, trademarks, service marks, and registered trademarks are the property of their respective owners. Any references to third-party companies, technologies, financial institutions, or software platforms are used solely for identification or interoperability purposes and do not imply any affiliation, endorsement, or partnership unless explicitly stated.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              Stafróf Intelligence Corporation shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or reliance upon, the information contained in these materials.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p>
              The information provided does not constitute legal, financial, regulatory, tax, investment, or professional advice. Organizations should seek independent professional guidance before making business or technology decisions.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              All intellectual property, including product concepts, software, documentation, graphics, architecture diagrams, methodologies, and content presented in these materials, is the exclusive property of Stafróf Intelligence Corporation unless otherwise stated. Unauthorized reproduction, distribution, modification, or commercial use of any material without prior written permission is strictly prohibited.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
