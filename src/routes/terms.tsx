import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Stafróf" },
      { name: "description", content: "Terms & Conditions for using the Stafróf Intelligence Corporation website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
              Terms & Conditions
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#020718] relative min-h-[50vh]">
        <div className="relative mx-auto max-w-3xl px-6 text-white/80 space-y-8 text-justify">
          <Reveal delay={150}>
            <p className="text-sm text-white/50">Effective Date: June, 2026</p>
            <p className="mt-4">
              Welcome to the Stafróf Intelligence Corporation website. By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this website.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="font-display text-xl font-bold text-white">1. Use of the Website</h3>
            <p className="mt-2.5">
              This website is intended to provide information about Stafróf Intelligence Corporation, its products, services, technologies, and industry expertise. You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <h3 className="font-display text-xl font-bold text-white">2. Intellectual Property</h3>
            <p className="mt-2.5">
              Unless otherwise stated, all content on this website—including text, graphics, logos, product names, software concepts, architecture diagrams, images, documentation, presentations, videos, and design elements—is the exclusive property of Stafróf Intelligence Corporation and is protected by applicable intellectual property laws.
            </p>
            <p className="mt-2.5">
              No content may be copied, reproduced, modified, distributed, published, transmitted, or commercially exploited without prior written permission from Stafróf Intelligence Corporation.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <h3 className="font-display text-xl font-bold text-white">3. Product Information</h3>
            <p className="mt-2.5">
              Descriptions of products, services, capabilities, features, technical specifications, implementation approaches, and future roadmaps are provided for informational purposes only.
            </p>
            <p className="mt-2.5">
              Stafróf Intelligence Corporation reserves the right to modify, enhance, discontinue, or replace any product, feature, specification, pricing, or service without prior notice.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <h3 className="font-display text-xl font-bold text-white">4. No Professional Advice</h3>
            <p className="mt-2.5">
              The information available on this website does not constitute legal, financial, accounting, tax, investment, cybersecurity, or regulatory advice. Visitors should consult qualified professionals before making business, technology, or compliance decisions.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <h3 className="font-display text-xl font-bold text-white">5. User Responsibilities</h3>
            <p className="mt-2.5">By using this website, you agree that you will not:</p>
            <ul className="mt-2.5 pl-5 list-disc space-y-2 text-white/70">
              <li>Use the website for any unlawful or fraudulent activity.</li>
              <li>Attempt to gain unauthorized access to any systems, servers, or networks.</li>
              <li>Upload malicious software, viruses, or harmful code.</li>
              <li>Interfere with the website's functionality or security.</li>
              <li>Copy or misuse proprietary content without authorization.</li>
            </ul>
          </Reveal>

          <Reveal delay={450}>
            <h3 className="font-display text-xl font-bold text-white">6. Third-Party Links</h3>
            <p className="mt-2.5">
              This website may include links to third-party websites for your convenience. Stafróf Intelligence Corporation does not control, endorse, or assume responsibility for the content, privacy practices, or availability of third-party websites.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <h3 className="font-display text-xl font-bold text-white">7. Confidentiality</h3>
            <p className="mt-2.5">
              Information submitted through contact forms, business inquiries, partnership requests, or product demonstrations will be handled in accordance with our Privacy Policy. Submission of information does not create a confidential or contractual relationship unless expressly agreed in writing.
            </p>
          </Reveal>

          <Reveal delay={550}>
            <h3 className="font-display text-xl font-bold text-white">8. Artificial Intelligence and Analytics</h3>
            <p className="mt-2.5">
              Our AI-powered platforms are designed to assist business decision-making and operational efficiency. AI-generated recommendations, analytics, forecasts, and insights should be reviewed and validated by qualified personnel before being used in production or business-critical decisions.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <h3 className="font-display text-xl font-bold text-white">9. Limitation of Liability</h3>
            <p className="mt-2.5">
              To the maximum extent permitted by applicable law, Stafróf Intelligence Corporation shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use of, inability to use, or reliance upon this website or its content.
            </p>
          </Reveal>

          <Reveal delay={650}>
            <h3 className="font-display text-xl font-bold text-white">10. Disclaimer of Warranties</h3>
            <p className="mt-2.5">
              This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <h3 className="font-display text-xl font-bold text-white">11. Privacy</h3>
            <p className="mt-2.5">
              Your use of this website is also governed by our Privacy Policy, which explains how personal information is collected, used, stored, and protected.
            </p>
          </Reveal>

          <Reveal delay={750}>
            <h3 className="font-display text-xl font-bold text-white">12. Changes to These Terms</h3>
            <p className="mt-2.5">
              Stafróf Intelligence Corporation reserves the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website after changes are published constitutes acceptance of the revised terms.
            </p>
          </Reveal>

          <Reveal delay={800}>
            <h3 className="font-display text-xl font-bold text-white">13. Governing Law</h3>
            <p className="mt-2.5">
              These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
            </p>
          </Reveal>

          <Reveal delay={850}>
            <h3 className="font-display text-xl font-bold text-white">14. Contact Us</h3>
            <p className="mt-2.5">
              For questions regarding these Terms & Conditions, please contact Stafróf Intelligence Corporation through the contact information provided on our website.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
