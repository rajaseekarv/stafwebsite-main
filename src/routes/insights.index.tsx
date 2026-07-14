import { createFileRoute } from "@tanstack/react-router";
import { SectionOverview } from "@/components/site/SectionPage";
import { findSection } from "@/lib/site-content";

const s = findSection("insights");

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: `${s.label} — Stafróf Intelligence Corporation` },
      { name: "description", content: s.summary },
      { property: "og:title", content: `${s.label} — Stafróf` },
      { property: "og:description", content: s.summary },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: () => <SectionOverview sectionKey="insights" />,
});
