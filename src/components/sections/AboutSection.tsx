import { motion } from "framer-motion";
import { Section, SectionHeading } from "../Section";

const TIMELINE = [
  {
    year: "2020",
    title: "The Beginning of IshConnect",
    text: "Started as a passion-driven technology initiative focused on software development, innovation, and empowering young African creators through digital skills and real-world projects.",
  },
  {
    year: "2023",
    title: "First Production Project Shipped",
    text: "Successfully delivered the first client-focused software solution, marking the beginning of IshConnect’s journey into professional digital product development.",
  },
  {
    year: "2024",
    title: "Rapid Product Development",
    text: "Built and launched multiple impactful platforms including LMS systems, fintech tools, AI-powered applications, agritech solutions, mobile apps, and smart management systems.",
  },
  {
    year: "2025",
    title: "Training Programs & Innovation Expansion",
    text: "Organized mentorship programs, internships, and expanded into AI, cybersecurity, education technology, and community innovation projects.",
  },
  {
    year: "2026",
    title: "DevQueens & National Tech Impact",
    text: "Launched DevQueens, participated in global hackathons, and scaled impactful digital products across multiple sectors.",
  },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Building Africa’s <span className="text-primary">digital future.</span>
          </>
        }
        description="IshConnect is a technology studio focused on software engineering, innovation, and empowering African tech talent."
      />

      {/* TREE TIMELINE */}
      <div className="mt-24">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Journey</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight">
            Our growth tree — IshConnect timeline
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-gray-600">
            A structured evolution map showing how <strong>IshConnect (Ishconnlab)</strong> grew
            from a passion-driven technology initiative in Kigali, Rwanda into a leading software
            development and AI innovation studio.
          </p>
        </div>

        {/* TREE CONTAINER */}
        <div className="relative">
          {/* TRUNK */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-200" />

          <div className="space-y-14">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex md:justify-between items-center"
              >
                {/* BRANCH DOT */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                  <div className="h-3.5 w-3.5 rounded-full bg-primary shadow-sm" />
                </div>

                {/* LEFT BRANCH (desktop alternating) */}
                {i % 2 === 0 ? (
                  <div className="ml-12 md:ml-0 md:w-[45%]">
                    <CardContent t={t} />
                  </div>
                ) : (
                  <div className="hidden md:block md:w-[45%]" />
                )}

                {/* RIGHT BRANCH */}
                {i % 2 !== 0 ? (
                  <div className="ml-12 md:ml-0 md:w-[45%]">
                    <CardContent t={t} />
                  </div>
                ) : (
                  <div className="hidden md:block md:w-[45%]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* CARD COMPONENT (TREE NODE) */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardContent({ t }: any) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition relative">
      {/* connector branch line */}
      <div className="hidden md:block absolute top-6 w-6 h-0.5 bg-gray-200 -left-6" />

      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {t.year}
      </span>

      <h4 className="mt-3 text-lg font-semibold text-gray-900">{t.title}</h4>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
    </div>
  );
}
