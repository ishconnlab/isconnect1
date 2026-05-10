import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "../Section";

// IMPORT YOUR PNG IMAGES
import greenAfricaImg from "@/assets/projects/green-africa.png";
import healGuardImg from "@/assets/projects/healguard.png";
import agriLinkImg from "@/assets/projects/agrilink.png";
import logisticsImg from "@/assets/projects/logistics.png";
import foodieImg from "@/assets/projects/foodie.png";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  accent: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "GreenAfrica Dashboard",
    category: "Sustainability · Analytics",
    description:
      "A real-time carbon and ESG monitoring platform powering green initiatives across 7 African markets.",
    tech: ["React", "Node", "PostgreSQL", "D3"],
    accent: "from-emerald-200/60 via-primary/10 to-transparent",
    image: greenAfricaImg,
  },
  {
    title: "HealGuard AI",
    category: "Healthcare · AI",
    description:
      "AI-assisted triage and diagnostics aiding under-served clinics with 92% screening accuracy.",
    tech: ["Python", "PyTorch", "FastAPI", "Next.js"],
    accent: "from-sky-200/60 via-primary/10 to-transparent",
    image: healGuardImg,
  },
  {
    title: "AgriLink Rwanda",
    category: "AgriTech · Marketplace",
    description:
      "Connecting 12,000+ smallholder farmers with buyers, finance, and weather intelligence.",
    tech: ["Flutter", "Supabase", "Mapbox"],
    accent: "from-lime-200/60 via-primary/10 to-transparent",
    image: agriLinkImg,
  },
  {
    title: "Logistics Command Center",
    category: "Operations · Real-time",
    description:
      "Fleet & route orchestration cutting last-mile delivery costs by 31% for a regional logistics leader.",
    tech: ["TypeScript", "Kafka", "Redis", "Mapbox"],
    accent: "from-orange-200/60 via-primary/10 to-transparent",
    image: logisticsImg,
  },
  {
    title: "FoodieApp",
    category: "Consumer · Marketplace",
    description:
      "A delightful food discovery & ordering experience reaching 150k MAU within its first year.",
    tech: ["React Native", "Stripe", "Algolia"],
    accent: "from-rose-200/60 via-primary/10 to-transparent",
    image: foodieImg,
  },
];

export function WorkSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            Products that move <span className="text-primary">markets.</span>
          </>
        }
        description="A handful of recent collaborations across fintech, health, agritech, sustainability and consumer."
      />

      <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-20">
        {(compact ? PROJECTS.slice(0, 3) : PROJECTS).map((p, i) => (
          <ProjectRow key={p.title} p={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function ProjectRow({ p, reverse }: { p: Project; reverse: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGE SIDE */}
      <div className="lg:col-span-7">
        <div
          className={`group relative aspect-[16/10] overflow-hidden rounded-3xl border border-soft-border/70 bg-gradient-to-br ${p.accent} shadow-elevated`}
        >
          {/* Browser mockup */}
          <div className="absolute inset-3 rounded-2xl bg-surface/95 p-3 shadow-soft sm:inset-4 sm:p-4">
            {/* Top bar */}
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />

              <span className="ml-3 truncate text-[10px] text-muted-foreground">
                {p.title.toLowerCase().replace(/\s+/g, "")}.app
              </span>
            </div>

            {/* PROJECT IMAGE */}
            <div className="relative mt-3 h-[calc(100%-28px)] overflow-hidden rounded-2xl border border-soft-border/60 bg-muted">
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project built by IshConnect (Ishconnlab), a software development and AI studio in Kigali, Rwanda`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div className="lg:col-span-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-soft-border/70 bg-surface px-3 py-1 text-xs font-medium text-foreground/70">
          {p.category}
        </span>

        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          {p.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {p.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-soft-border/70 bg-muted px-2.5 py-1 text-xs text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          View case study
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}
