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
        "fixed inset-x-0 top-0 z-50 flex h-[72px] lg:h-[84px] w-full items-center border-b border-white/10 bg-[#020A23] transition-all duration-300",
        scrolled && "shadow-[0_8px_28px_rgba(0,0,0,.25)]",
      )}
    >
      <div className="flex h-full w-full items-center justify-between px-4 lg:px-8">
        <Link to="/" className="h-full shrink-0 flex items-center brand-logo">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-1 whitespace-nowrap min-w-0 px-4">
          {SITE.sections
            .filter((s) => ["about", "products", "platforms", "solutions", "services", "consulting", "segments", "partners", "insights"].includes(s.key))
            .map((section) => (
              <NavDropdown key={section.key} sectionKey={section.key} align="center" />
            ))}
        </nav>

        <div className="hidden xl:block shrink-0 ml-2 contact-menu-btn">
          <Button asChild size="sm" className="h-11 rounded-full px-4 text-[13px] font-semibold tracking-wide shrink-0">
            <Link to="/contact">CONTACT US</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-white/90 xl:hidden text-black hover:text-black hover:bg-white/80" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm overflow-y-auto p-0 bg-[#011c49] border-l border-white/10">
            <SheetTitle className="sr-only">Site navigation</SheetTitle>
            <div className="flex items-center justify-between border-b px-5 py-4">
              <Logo />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-5 text-white" />
              </Button>
            </div>
            <div className="px-5 py-4">
              {SITE.sections.map((section) => (
                <details key={section.key} className="group border-b py-3 last:border-none">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-semibold tracking-wide text-white">
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
                          className="block rounded-lg px-3 py-2 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-[#FF7A00]"
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
        className="flex items-center gap-1 rounded-full px-2 py-2 text-[14px] font-semibold tracking-normal text-white transition-all duration-300 hover:bg-white/10 group"
      >
        {section.label}
        <ChevronDown className={cn("size-3 lg:size-4 opacity-90 transition-transform text-white group-hover:text-white", isOpen && "rotate-180")} />
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
        <div className="flex flex-col w-max gap-1 rounded-2xl border bg-white p-3 shadow-[0_22px_54px_-12px_oklch(0.18_0.012_270/0.20)] min-w-[240px] max-h-[80vh] overflow-y-auto">
          {section.pages.map((p) => (
            <Link
              key={p.slug}
              to={`${section.basePath}/$slug` as never}
              params={{ slug: p.slug } as never}
              onClick={close}
              className="rounded-lg px-4 py-2 text-[15px] font-medium text-ink-2 transition-colors hover:bg-surface hover:text-brand"
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
        className="flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/10 group cursor-pointer"
      >
        MORE
        <ChevronDown
          className={cn(
            "size-4 transition-transform text-white",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-full right-0 pt-3 transition-all duration-150 z-50",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 rounded-2xl border bg-white p-3 shadow-[0_22px_54px_-12px_oklch(0.18_0.012_270/0.20)] min-w-[220px]">
          {moreSections.map((section) => {
            const hasPages = section.pages.length > 0;
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
                  className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-semibold text-ink-2 transition-colors hover:bg-surface hover:text-brand"
                >
                  <span>{section.label}</span>

                  {hasPages && (
                    <ChevronDown className="ml-2 size-4 -rotate-90 text-ink-3" />
                  )}
                </Link>

                {hasPages && (
                  <div
                    className={cn(
                      "absolute top-0 right-full pr-3 transition-all duration-150 z-50",
                      isSubOpen ? "visible opacity-100" : "invisible opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-1 rounded-2xl border bg-white p-3 shadow-[0_22px_54px_-12px_oklch(0.18_0.012_270/0.20)] min-w-[240px] max-h-[70vh] overflow-y-auto">
                      {section.pages.map((p) => (
                        <Link
                          key={p.slug}
                          to={`${section.basePath}/$slug` as never}
                          params={{ slug: p.slug } as never}
                          onClick={close}
                          className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-ink-2 transition-colors hover:bg-surface hover:text-brand"
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
    <div className="h-full flex items-center justify-start shrink-0 pl-3 py-0">
      <img
        src="/stafrof-logo-header.jpg"
        alt="Stafróf Intelligence Corporation"
        className="w-[135px] lg:w-[185px] xl:w-[195px] h-auto object-contain shrink-0 block"
      />
    </div>
  );
}
