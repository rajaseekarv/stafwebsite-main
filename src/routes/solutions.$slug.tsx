import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { findPage, findSection } from "@/lib/site-content";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const page = findPage("solutions", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.page.title ?? "Solutions";
    const desc = loaderData?.page.tagline ?? findSection("solutions").summary;
    return {
      meta: [
        { title: `${title} — Stafróf` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Stafróf` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/solutions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
  component: () => {
    const { slug } = Route.useParams();
    return <SectionPage sectionKey="solutions" slug={slug} />;
  },
});
