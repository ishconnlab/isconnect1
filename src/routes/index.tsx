import { SEOHead } from "@/components/SEOHead";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { InitiativesSection } from "@/components/sections/InitiativesSection";
import { BootcampSection } from "@/components/sections/BootcampSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const config = PAGE_SEO.home;

const faqQuestions = [
  {
    question: "What is IshConnect?",
    answer:
      "IshConnect is a Kigali-based technology studio specializing in software development, AI solutions, and tech education in Rwanda. We also run DevQueens, a program empowering women in African tech, offer WebCare website maintenance, and host a thriving tech community.",
  },
  {
    question: "What services does IshConnect offer in Rwanda?",
    answer:
      "IshConnect offers web and mobile app development, AI and machine learning solutions, cloud infrastructure, cybersecurity, UI/UX design, WebCare website maintenance services, and technology training through IshConnect Academy in Kigali, Rwanda.",
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
  {
    question: "Who is the founder of IshConnect?",
    answer:
      "IshConnect was founded in 2020 by Ishimwe J. Claude, a software engineer and entrepreneur based in Kigali, Rwanda. Learn more about the founder.",
  },
  {
    question: "How big is the IshConnect team?",
    answer:
      "IshConnect has a multidisciplinary team of engineers, designers, and educators including leadership, backend engineers, mobile engineers, cloud architects, product designers, and QA engineers based in Kigali, Rwanda. Meet the full team.",
  },
];

export function Home() {
  return (
    <>
      <SEOHead {...config} />
      <BreadcrumbJsonLd items={config.breadcrumbs} />
      <FaqJsonLd questions={faqQuestions} />
      <Hero />
      <PartnersSection />
      <SolutionsSection />
      <WorkSection compact />
      <AcademySection />
      <InitiativesSection />
      <TestimonialsSection compact />
      <BootcampSection />
    </>
  );
}
