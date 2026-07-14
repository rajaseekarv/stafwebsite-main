import { createFileRoute } from "@tanstack/react-router";
import { SectionOverview } from "@/components/site/SectionPage";
import { findSection } from "@/lib/site-content";

const s = findSection("platforms");

export const Route = createFileRoute("/platforms/")({
  head: () => ({
    meta: [
      { title: `${s.label} — Stafróf` },
      { name: "description", content: s.summary },
      { property: "og:title", content: `${s.label} — Stafróf` },
      { property: "og:description", content: s.summary },
      { property: "og:url", content: "/platforms" },
    ],
    links: [{ rel: "canonical", href: "/platforms" }],
  }),
  component: () => <SectionOverview sectionKey="platforms" />,
});
