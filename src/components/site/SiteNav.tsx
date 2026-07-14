import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE, type SectionKey, cleanMenuTitle } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full bg-white transition-all border-b border-black/5 h-16 lg:h-20 flex items-center",
        scrolled && "shadow-sm",
      )}
    >
      <div className="w-full h-full flex items-center justify-between pl-0.5 pr-2 lg:pl-1 lg:pr-4">
        <Link to="/" className="h-full shrink-0 flex items-center brand-logo">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-[clamp(4px,0.5vw,10px)] whitespace-nowrap min-w-0" aria-label="Primary">
          {SITE.sections
            .filter((s) => ["about", "products", "platforms", "solutions", "services", "consulting", "segments", "partners", "insights"].includes(s.key))
            .map((section) => (
              <NavDropdown key={section.key} sectionKey={section.key} align="center" />
            ))}
        </nav>

        <div className="hidden lg:block shrink-0 ml-2 contact-menu-btn">
          <Button asChild size="sm" className="rounded-full px-2 lg:px-3 xl:px-4 text-xs xl:text-sm shrink-0">
            <Link to="/contact">CONTACT US</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-black hover:text-black hover:bg-black/5" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm overflow-y-auto p-0">
            <SheetTitle className="sr-only">Site navigation</SheetTitle>
            <div className="flex items-center justify-between border-b px-5 py-4">
              <Logo />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-5" />
              </Button>
            </div>
            <div className="px-5 py-4">
              {SITE.sections.map((section) => (
                <details key={section.key} className="group border-b py-3 last:border-none">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink">
                    {section.label}
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-3 grid gap-1 pl-1">
                    {section.pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`${section.basePath}/$slug` as never}
                          params={{ slug: p.slug } as never}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-1.5 text-sm text-ink-2 hover:bg-surface hover:text-brand"
                        >
                          {cleanMenuTitle(p.title, section.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <Button asChild className="mt-6 w-full rounded-full" onClick={() => setOpen(false)}>
                <Link to="/contact">CONTACT US</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavDropdown({ sectionKey, align = "center" }: { sectionKey: SectionKey; align?: "start" | "center" | "end" }) {
  const section = SITE.sections.find((s) => s.key === sectionKey)!;
  const [hovering, setHovering] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const isOpen = hovering && !dismissed;

  const close = () => setDismissed(true);

  return (
    <div
      className="relative menu-wrap"
      onMouseEnter={() => {
        setDismissed(false);
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
        setDismissed(false);
      }}
    >
      <Link
        to={section.basePath as never}
        onClick={close}
        className="flex items-center gap-[2px] rounded-full px-1 lg:px-[6px] xl:px-[8px] py-1.5 text-[11px] lg:text-[13px] xl:text-[14px] font-semibold tracking-tight text-black transition-colors hover:bg-black/5 group"
      >
        {section.label}
        <ChevronDown className={cn("size-3 lg:size-4 opacity-90 transition-transform text-black group-hover:text-black", isOpen && "rotate-180")} />
      </Link>
      <div
        className={cn(
          "absolute top-full pt-3 transition-all duration-150 sub-main-menu",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
          align === "start" && "left-0",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "end" && "right-0",
        )}
      >
        <div className="flex flex-col w-max gap-1 rounded-2xl border bg-white p-3 shadow-[0_22px_54px_-12px_oklch(0.18_0.012_270/0.20)] min-w-[240px] max-h-[70vh] overflow-y-auto">
          {section.pages.map((p) => (
            <Link
              key={p.slug}
              to={`${section.basePath}/$slug` as never}
              params={{ slug: p.slug } as never}
              onClick={close}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:bg-surface hover:text-brand"
            >
              {cleanMenuTitle(p.title, section.key)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


function MoreDropdown() {
  const [hovering, setHovering] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const isOpen = hovering && !dismissed;
  const close = () => {
    setDismissed(true);
    setActiveSubMenu(null);
  };

  const moreSections = SITE.sections.filter((s) =>
    ["segments", "partners", "insights"].includes(s.key)
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setDismissed(false);
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
        setDismissed(false);
        setActiveSubMenu(null);
      }}
    >
      <button
        onClick={close}
        className="flex items-center gap-[2px] rounded-full px-1 lg:px-[4px] xl:px-[6px] py-1.5 text-xs lg:text-[15px] font-semibold tracking-tight text-black transition-colors hover:bg-black/5 group cursor-pointer"
      >
        MORE
        <ChevronDown className={cn("size-3 lg:size-4 opacity-90 transition-transform text-black group-hover:text-black", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute top-full right-0 pt-3 transition-all duration-150 z-50",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex flex-col w-max gap-1 rounded-2xl border bg-white p-3 shadow-[0_22px_54px_-12px_oklch(0.18_0.012_270/0.20)] min-w-[200px]">
          {moreSections.map((section) => {
            const hasPages = section.pages && section.pages.length > 0;
            const isSubOpen = activeSubMenu === section.key;

            return (
              <div
                key={section.key}
                className="relative"
                onMouseEnter={() => setActiveSubMenu(section.key)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <Link
                  to={section.basePath as never}
                  onClick={close}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-ink-2 transition-colors hover:bg-surface hover:text-brand w-full text-left"
                >
                  <span>{section.label}</span>
                  {hasPages && (
                    <ChevronDown className="size-4 -rotate-90 text-ink-3 ml-2" />
                  )}
                </Link>

                {hasPages && (
                  <div
                    className={cn(
                      "absolute top-0 right-full pr-3 transition-all duration-150 z-50",
                      isSubOpen ? "visible opacity-100" : "invisible opacity-0",
                    )}
                  >
                    <div className="flex flex-col w-max gap-1 rounded-2xl border bg-white p-3 shadow-[0_22px_54px_-12px_oklch(0.18_0.012_270/0.20)] min-w-[220px] max-h-[70vh] overflow-y-auto">
                      {section.pages.map((p) => (
                        <Link
                          key={p.slug}
                          to={`${section.basePath}/$slug` as never}
                          params={{ slug: p.slug } as never}
                          onClick={close}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:bg-surface hover:text-brand"
                        >
                          {cleanMenuTitle(p.title, section.key)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


function Logo() {
  return (
    <div className="h-full flex items-center justify-start shrink-0 pl-4 py-0">
      <img
        src="/stafrof-logo-header.jpg"
        alt="Stafróf Intelligence Corporation"
        className="w-[140px] lg:w-[220px] h-auto object-contain shrink-0 block"
      />
    </div>
  );
}
