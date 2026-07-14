import { createFileRoute } from "@tanstack/react-router";
import { SectionOverview } from "@/components/site/SectionPage";
import { findSection } from "@/lib/site-content";

const s = findSection("products");

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: `${s.label} — Stafróf` },
      { name: "description", content: s.summary },
      { property: "og:title", content: `${s.label} — Stafróf` },
      { property: "og:description", content: s.summary },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: () => <SectionOverview sectionKey="products" />,
});
