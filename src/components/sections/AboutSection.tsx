import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";

const TIMELINE = [
  {
    year: "2020",
    title: "The Beginning of IshConnect",
    text: "Started as a passion-driven technology initiative focused on software development, innovation, and empowering young African creators through digital skills and real-world projects.",
  },
  {
    year: "2023",
    title: "First Production Project Shipped",
    text: "Successfully delivered the first client-focused software solution, marking the beginning of IshConnect's journey into professional digital product development.",
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
            Building Africa's <span className="text-primary">digital future.</span>
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
            A structured evolution map showing how <strong>IshConnect</strong> grew
            from a passion-driven technology initiative in Kigali, Rwanda into a leading software
            development and AI company.
          </p>
        </div>

        {/* TREE CONTAINER */}
        <div className="relative">
          {/* TRUNK */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gray-200 sm:-translate-x-px" />

          <div className="space-y-14">
            {TIMELINE.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal
                  key={t.title}
                  variant="fade-up"
                  delay={i * 50}
                  duration={500}
                >
                  <div className="relative flex flex-col sm:flex-row sm:items-center">
                    {/* BRANCH DOT */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className="h-3.5 w-3.5 rounded-full bg-primary shadow-sm" />
                    </div>

                    {/* Content - left side on desktop for even items */}
                    <div className={`ml-12 sm:ml-0 sm:w-[45%] ${isLeft ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                      <CardContent t={t} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

function CardContent({ t }: { t: TimelineItem }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {t.year}
      </span>
      <h4 className="mt-3 text-lg font-semibold text-gray-900">{t.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
    </div>
  );
}
