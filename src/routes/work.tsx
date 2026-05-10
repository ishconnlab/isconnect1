import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { WorkSection } from "@/components/sections/WorkSection";
import { TrustStats } from "@/components/sections/TrustStats";

const config = PAGE_SEO.work;

export function Work() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      <div className="pt-28">
        <WorkSection />
        <TrustStats />
      </div>
    </>
  );
}
