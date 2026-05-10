import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { PROGRAMS } from "@/lib/programs";
import { AcademySection } from "@/components/sections/AcademySection";
import { DevQueensSection } from "@/components/sections/DevQueensSection";

const config = PAGE_SEO.academy;

export function Academy() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      {PROGRAMS.map((program) => (
        <CourseJsonLd key={program.slug} program={program} />
      ))}
      <div className="pt-28">
        <AcademySection />
        <DevQueensSection />
      </div>
    </>
  );
}
