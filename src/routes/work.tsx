import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { PROJECTS } from "@/lib/projects";
import { WorkSection } from "@/components/sections/WorkSection";
import { TrustStats } from "@/components/sections/TrustStats";

const config = PAGE_SEO.work;

const projectItems = PROJECTS.map((p) => ({
  name: p.title,
  url: `/work/${p.slug}`,
}));

export function Work() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      <ItemListJsonLd items={projectItems} />
      <div className="pt-28">
        <WorkSection />
        <TrustStats />
      </div>
    </>
  );
}
