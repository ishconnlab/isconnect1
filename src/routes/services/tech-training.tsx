import { PAGE_SEO } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";

const config = PAGE_SEO.techTraining;

export function TechTraining() {
  return (
    <ServiceTemplate
      config={config}
      title="Tech Training & Coding Bootcamps in Rwanda"
      description="IshConnect Academy offers industry-led tech training programs and coding bootcamps in Kigali, Rwanda. Learn full stack development, AI, cybersecurity, cloud computing, and UI/UX design from experienced engineers."
      features={[
        "Full stack web development",
        "Python & AI programming",
        "Cybersecurity fundamentals",
        "Cloud & DevOps training",
        "Mobile app development",
        "UI/UX design bootcamp",
      ]}
    />
  );
}
