import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Stafróf" },
      { name: "description", content: "Privacy Policy for Stafróf Intelligence Corporation." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-[#020718] relative min-h-[50vh]">
        <div className="relative mx-auto max-w-3xl px-6 text-white/80 space-y-8 text-justify">
          <Reveal delay={150}>
            <p className="text-sm text-white/50">Effective Date: July 2026</p>
            <p className="mt-4">
              Stafróf Intelligence Corporation ("Stafróf", "we", "our", or "us") is committed to protecting your privacy and safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you visit our website or interact with our products and services.
            </p>
            <p className="mt-2.5">
              By using our website, you agree to the practices described in this Privacy Policy.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="font-display text-xl font-bold text-white">1. Information We Collect</h3>
            <p className="mt-2.5">We may collect the following categories of information:</p>
            <p className="mt-2.5 font-semibold text-white/90">Personal Information</p>
            <ul className="pl-5 list-disc space-y-1.5 text-white/70">
              <li>Name</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Business email address</li>
              <li>Phone number</li>
              <li>Country or region</li>
              <li>Information you provide through contact forms or inquiries</li>
            </ul>
            <p className="mt-4 font-semibold text-white/90">Technical Information</p>
            <ul className="pl-5 list-disc space-y-1.5 text-white/70">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Website usage data</li>
              <li>Referral source</li>
              <li>Pages visited</li>
              <li>Date and time of access</li>
            </ul>
            <p className="mt-4 font-semibold text-white/90">Cookies and Analytics</p>
            <p className="mt-2">
              We may use cookies and similar technologies to improve website functionality, understand visitor behavior, analyze website performance, and enhance the user experience.
            </p>
          </Reveal>

          <Reveal delay={255}>
            <h3 className="font-display text-xl font-bold text-white">2. How We Use Your Information</h3>
            <p className="mt-2.5">We use your information to:</p>
            <ul className="pl-5 list-disc space-y-1.5 text-white/70">
              <li>Respond to inquiries and requests.</li>
              <li>Provide product demonstrations and business information.</li>
              <li>Deliver customer support.</li>
              <li>Improve our products, services, and website.</li>
              <li>Communicate updates, newsletters, and marketing communications (where permitted by law or with your consent).</li>
              <li>Analyze website usage and performance.</li>
              <li>Protect our systems against fraud, misuse, and cybersecurity threats.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <h3 className="font-display text-xl font-bold text-white">3. Information Sharing</h3>
            <p className="mt-2.5">
              We do not sell, rent, or trade your personal information. We may share information with:
            </p>
            <ul className="pl-5 list-disc space-y-1.5 text-white/70">
              <li>Authorized service providers that support our business operations.</li>
              <li>Cloud hosting and infrastructure providers.</li>
              <li>Professional advisors, auditors, or legal consultants.</li>
              <li>Government or regulatory authorities when required by applicable law.</li>
              <li>Successors in connection with a merger, acquisition, or business reorganization.</li>
            </ul>
            <p className="mt-2.5">
              All third parties are expected to protect personal information in accordance with applicable privacy and security requirements.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <h3 className="font-display text-xl font-bold text-white">4. Data Security</h3>
            <p className="mt-2.5">
              We implement appropriate administrative, technical, and organizational safeguards to help protect personal information against unauthorized access, disclosure, alteration, loss, or destruction. While we strive to use commercially reasonable security measures, no method of transmission or electronic storage can be guaranteed to be completely secure.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <h3 className="font-display text-xl font-bold text-white">5. Data Retention</h3>
            <p className="mt-2.5">
              We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements, and support legitimate business operations.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <h3 className="font-display text-xl font-bold text-white">6. International Data Transfers</h3>
            <p className="mt-2.5">
              Depending on the services used, your information may be processed or stored in countries other than your country of residence. Where applicable, we implement appropriate safeguards to protect personal information during international data transfers.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <h3 className="font-display text-xl font-bold text-white">7. Your Privacy Rights</h3>
            <p className="mt-2.5">Subject to applicable law, you may have the right to:</p>
            <ul className="pl-5 list-disc space-y-1.5 text-white/70">
              <li>Access your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of personal information.</li>
              <li>Restrict or object to certain processing activities.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Request a copy of your personal information in a portable format.</li>
            </ul>
            <p className="mt-2.5">
              Requests will be handled in accordance with applicable legal requirements.
            </p>
          </Reveal>

          <Reveal delay={550}>
            <h3 className="font-display text-xl font-bold text-white">8. Cookies</h3>
            <p className="mt-2.5">Our website may use cookies and similar technologies to:</p>
            <ul className="pl-5 list-disc space-y-1.5 text-white/70">
              <li>Remember user preferences.</li>
              <li>Improve website functionality.</li>
              <li>Measure website performance.</li>
              <li>Analyze visitor interactions.</li>
              <li>Enhance user experience.</li>
            </ul>
            <p className="mt-2.5">
              You may control or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <h3 className="font-display text-xl font-bold text-white">9. Children's Privacy</h3>
            <p className="mt-2.5">
              Our website and services are intended for business and professional use. We do not knowingly collect personal information from individuals under the age required by applicable law. If we become aware that such information has been collected, we will take appropriate steps to delete it.
            </p>
          </Reveal>

          <Reveal delay={650}>
            <h3 className="font-display text-xl font-bold text-white">10. Third-Party Websites</h3>
            <p className="mt-2.5">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of those websites. We encourage you to review their privacy policies before providing personal information.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <h3 className="font-display text-xl font-bold text-white">11. Changes to This Privacy Policy</h3>
            <p className="mt-2.5">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. Continued use of the website after such updates constitutes acceptance of the revised Privacy Policy.
            </p>
          </Reveal>

          <Reveal delay={750}>
            <h3 className="font-display text-xl font-bold text-white">12. Contact Us</h3>
            <p className="mt-2.5">
              If you have questions, requests, or concerns regarding this Privacy Policy or our privacy practices, please contact Stafróf Intelligence Corporation using the contact information provided on our website.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
