import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectionPage } from "@/components/site/SectionPage";
import { findPage, findSection } from "@/lib/site-content";

export const Route = createFileRoute("/about/$slug")({
  loader: ({ params }) => {
    const page = findPage("about", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.page.title ?? "About";
    const desc = loaderData?.page.tagline ?? findSection("about").summary;
    return {
      meta: [
        { title: `${title} — Stafróf` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Stafróf` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/about/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/about/${params.slug}` }],
    };
  },
  component: () => {
    const { slug } = Route.useParams();
    return <SectionPage sectionKey="about" slug={slug} />;
  },
});
