import { PAGE_SEO } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";

const config = PAGE_SEO.cloudServices;

export function CloudServices() {
  return (
    <ServiceTemplate
      config={config}
      title="Cloud Services in Rwanda"
      description="IshConnect offers cloud infrastructure and DevOps services to help businesses scale. From cloud migration to serverless architecture, our Kigali team ensures reliable and cost-effective cloud operations."
      features={[
        "Cloud migration & strategy",
        "Serverless architecture",
        "CI/CD pipeline setup",
        "Infrastructure as code",
        "Cloud cost optimization",
        "Managed cloud services",
      ]}
    />
  );
}
