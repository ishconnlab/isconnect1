import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { CEOSection } from "@/components/sections/CEOSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { DevQueensSection } from "@/components/sections/DevQueensSection";

const config = PAGE_SEO.home;

const faqQuestions = [
  {
    question: "What is IshConnect (Ishconnlab)?",
    answer:
      "IshConnect, operated by ISHCONNLAB, is a Kigali-based technology studio specializing in software development, AI solutions, web development, and tech education in Rwanda. We also run DevQueens, a program empowering women in African tech.",
  },
  {
    question: "What services does IshConnect offer in Rwanda?",
    answer:
      "IshConnect offers web and mobile app development, AI and machine learning solutions, cloud infrastructure, cybersecurity, UI/UX design, and technology training through IshConnect Academy in Kigali, Rwanda.",
  },
  {
    question: "Does IshConnect offer coding bootcamps in Kigali?",
    answer:
      "Yes, IshConnect Academy offers industry-led coding bootcamps and tech training programs including full stack engineering, Python programming, cybersecurity, mobile development, cloud and DevOps, and UI/UX design in Kigali, Rwanda.",
  },
  {
    question: "What is DevQueens by IshConnect?",
    answer:
      "DevQueens is an IshConnect initiative that empowers women in African technology through mentorship, community building, scholarships, and pathways into world-class tech careers.",
  },
  {
    question: "Where is IshConnect located?",
    answer:
      "IshConnect is based in Kigali, Rwanda at KG 11 Ave, serving clients across Rwanda and the African continent with software development, AI, and digital transformation services.",
  },
];

export function Home() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      <FaqJsonLd questions={faqQuestions} />
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
