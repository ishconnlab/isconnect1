import { PAGE_SEO } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";

const config = PAGE_SEO.softwareDevelopment;

export function SoftwareDevelopment() {
  return (
    <ServiceTemplate
      config={config}
      title="Custom Software Development in Rwanda"
      description="IshConnect builds scalable web applications, enterprise platforms, and SaaS products for startups and businesses across Africa. Our Kigali-based engineering team delivers production-ready software using modern architectures."
      features={[
        "Web application development",
        "Enterprise software platforms",
        "SaaS product engineering",
        "API development & integration",
        "Legacy system modernization",
        "Cloud-native applications",
      ]}
    />
  );
}
