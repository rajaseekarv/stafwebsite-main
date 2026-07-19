import { Link } from "@tanstack/react-router";
import { SITE, cleanMenuTitle } from "@/lib/site-content";

export function SiteFooter() {
  const renderSection = (key: string) => {
    const s = SITE.sections.find((sec) => sec.key === key);
    if (!s) return null;

    return (
      <div key={s.key} className="flex flex-col">
        <h4 className="font-display text-[15px] font-semibold uppercase tracking-wide text-white">
          {s.label}
        </h4>

        <ul className="mt-5 space-y-3">
          {s.pages.slice(0, 6).map((p) => (
            <li key={p.slug}>
              <Link
                to={`${s.basePath}/$slug` as never}
                params={{ slug: p.slug } as never}
                className="block text-[15px] leading-7 text-white/65 transition-colors duration-300 hover:text-brand"
              >
                {cleanMenuTitle(p.title, s.key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="border-t border-white/10 bg-[#020718] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-white/5 pb-10 md:flex-row md:items-center">
          <div>
            <img
              src="/stafrof-logo-footer.png"
              alt="Stafróf Intelligence Corporation"
              className="block h-auto w-[200px] lg:w-[320px] object-contain"
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 gap-12 text-left sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Column 1 */}
          <div className="space-y-10">
            {renderSection("about")}
            {renderSection("platforms")}
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            {renderSection("products")}
            {renderSection("partners")}
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            {renderSection("solutions")}
            {renderSection("services")}
          </div>

          {/* Column 4 */}
          <div className="space-y-10">
            {renderSection("segments")}
          </div>

          {/* Column 5 */}
          <div className="space-y-10">
            {renderSection("consulting")}
            {renderSection("insights")}
          </div>
        </div>

                {/* Bottom Section: Legal & Social */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white/50">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors duration-300 hover:text-brand"
            >
              <svg className="size-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="transition-colors duration-300 hover:text-brand"
            >
              <svg className="size-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-300 hover:text-brand"
            >
              <svg className="size-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-300 hover:text-brand"
            >
              <svg className="size-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors duration-300 hover:text-brand"
            >
              <svg className="size-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.003 3.003 0 00-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 002.11 2.108c1.868.555 9.388.555 9.388.555s7.52 0 9.388-.555a3.003 3.003 0 002.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-white/60">

            <Link to="/disclaimer" className="transition-colors duration-300 hover:text-white">
              Disclaimer
            </Link>

            <Link to="/terms" className="transition-colors duration-300 hover:text-white">
              Terms & Conditions
            </Link>

            <Link to="/privacy" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/digital-trust" className="transition-colors duration-300 hover:text-white">
              Digital Trust
            </Link>

            <Link to="/contact" className="transition-colors duration-300 hover:text-brand">
              Contact
            </Link>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-[13px] text-white/40 lg:flex-row">

          <div>
            © {new Date().getFullYear()} Stafróf Intelligence Corporation. All rights reserved.
          </div>

          <div>
            CIN: U63119TN2026PTC194765
          </div>

        </div>

      </div>
    </footer>
  );
}
