import { PAGE_SEO } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";

const config = PAGE_SEO.aiSolutions;

export function AiSolutions() {
  return (
    <ServiceTemplate
      config={config}
      title="AI Solutions in Rwanda"
      description="IshConnect delivers artificial intelligence and machine learning solutions for African businesses. Our Kigali team builds intelligent automation, predictive analytics, NLP, and computer vision systems."
      features={[
        "Machine learning model development",
        "Natural language processing (NLP)",
        "Computer vision solutions",
        "Predictive analytics",
        "Intelligent process automation",
        "AI consulting & strategy",
      ]}
    />
  );
}
