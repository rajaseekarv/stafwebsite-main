import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { findPage, findSection } from "@/lib/site-content";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const page = findPage("insights", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.page.title ?? "Insights";
    const desc = loaderData?.page.tagline ?? findSection("insights").summary;
    return {
      meta: [
        { title: `${title} — Stafróf` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Stafróf` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
    };
  },
  component: () => {
    const { slug } = Route.useParams();
    return <SectionPage sectionKey="insights" slug={slug} />;
  },
});
