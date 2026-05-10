import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { CEOSection } from "@/components/sections/CEOSection";

const config = PAGE_SEO.solutions;
const services = [
  {
    name: "Digital Platform Engineering",
    description:
      "Full-stack web and mobile platforms built with modern tooling for scale and performance.",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Resilient cloud infrastructure, CI/CD pipelines, and automated deployment strategies.",
  },
  {
    name: "Cybersecurity",
    description:
      "Offensive and defensive security services including audit, penetration testing, and compliance.",
  },
  {
    name: "UI / UX Design",
    description:
      "Research-driven interface design, prototyping, and design systems for digital products.",
  },
];

export function Solutions() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      {services.map((s) => (
        <ServiceJsonLd key={s.name} name={s.name} description={s.description} />
      ))}
      <div className="pt-28">
        <SolutionsSection />
        <CEOSection />
      </div>
    </>
  );
}
