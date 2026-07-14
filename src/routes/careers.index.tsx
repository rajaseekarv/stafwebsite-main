import { createFileRoute } from "@tanstack/react-router";
import { SectionOverview } from "@/components/site/SectionPage";
import { findSection } from "@/lib/site-content";

const s = findSection("careers");

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: `${s.label} — Stafróf Intelligence Corporation` },
      { name: "description", content: s.summary },
      { property: "og:title", content: `${s.label} — Stafróf` },
      { property: "og:description", content: s.summary },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: () => <SectionOverview sectionKey="careers" />,
});
