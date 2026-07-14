import { createFileRoute } from "@tanstack/react-router";
import { SectionOverview } from "@/components/site/SectionPage";
import { findSection } from "@/lib/site-content";

const s = findSection("segments");

export const Route = createFileRoute("/segments/")({
  head: () => ({
    meta: [
      { title: `${s.label} — Stafróf Intelligence Corporation` },
      { name: "description", content: s.summary },
      { property: "og:title", content: `${s.label} — Stafróf` },
      { property: "og:description", content: s.summary },
      { property: "og:url", content: "/segments" },
    ],
    links: [{ rel: "canonical", href: "/segments" }],
  }),
  component: () => <SectionOverview sectionKey="segments" />,
});
