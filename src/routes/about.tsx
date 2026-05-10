import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CEOSection } from "@/components/sections/CEOSection";

const config = PAGE_SEO.about;

export function About() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      <div className="pt-28">
        <AboutSection />
        <CEOSection />
        <TeamSection />
      </div>
    </>
  );
}
