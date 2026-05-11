import { PAGE_SEO } from "@/lib/seo";
import { ServiceTemplate } from "@/components/ServiceTemplate";

const config = PAGE_SEO.mobileApps;

export function MobileApps() {
  return (
    <ServiceTemplate
      config={config}
      title="Mobile App Development in Rwanda"
      description="IshConnect builds iOS and Android mobile applications using React Native and Flutter. Our Kigali-based developers create native-quality apps for startups, enterprises, and organizations across Africa."
      features={[
        "iOS app development",
        "Android app development",
        "Cross-platform apps (React Native)",
        "Cross-platform apps (Flutter)",
        "App UI/UX design",
        "App store deployment & maintenance",
      ]}
    />
  );
}
