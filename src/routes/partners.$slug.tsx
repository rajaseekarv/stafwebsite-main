import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { findPage, findSection } from "@/lib/site-content";

export const Route = createFileRoute("/partners/$slug")({
  loader: ({ params }) => {
    const page = findPage("partners", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.page.title ?? "Partners";
    const desc = loaderData?.page.tagline ?? findSection("partners").summary;
    return {
      meta: [
        { title: `${title} — Stafróf` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Stafróf` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/partners/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/partners/${params.slug}` }],
    };
  },
  component: () => {
    const { slug } = Route.useParams();
    return <SectionPage sectionKey="partners" slug={slug} />;
  },
});
