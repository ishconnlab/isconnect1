import { PAGE_SEO } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";

const config = PAGE_SEO.cybersecurity;

export function Cybersecurity() {
  return (
    <ServiceTemplate
      config={config}
      title="Cybersecurity Services in Rwanda"
      description="IshConnect provides comprehensive cybersecurity services to protect your business. Our Kigali-based security team offers penetration testing, security audits, threat monitoring, and compliance solutions."
      features={[
        "Penetration testing",
        "Security audits & assessments",
        "Threat monitoring & response",
        "Compliance & governance",
        "Zero-trust architecture",
        "Security awareness training",
      ]}
    />
  );
}
