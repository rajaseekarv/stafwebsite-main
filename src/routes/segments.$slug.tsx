import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { findPage, findSection } from "@/lib/site-content";

export const Route = createFileRoute("/segments/$slug")({
  loader: ({ params }) => {
    const page = findPage("segments", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.page.title ?? "Segments";
    const desc = loaderData?.page.tagline ?? findSection("segments").summary;
    return {
      meta: [
        { title: `${title} — Stafróf` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Stafróf` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/segments/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/segments/${params.slug}` }],
    };
  },
  component: () => {
    const { slug } = Route.useParams();
    return <SectionPage sectionKey="segments" slug={slug} />;
  },
});
