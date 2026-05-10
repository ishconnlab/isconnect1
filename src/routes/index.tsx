import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { CEOSection } from "@/components/sections/CEOSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { DevQueensSection } from "@/components/sections/DevQueensSection";

const config = PAGE_SEO.home;

export function Home() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      <Hero />
      <TrustStats />
      <CEOSection />
      <SolutionsSection />
      <WorkSection compact />
      <AcademySection />
      <DevQueensSection />
    </>
  );
}
