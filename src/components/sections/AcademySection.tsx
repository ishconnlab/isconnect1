import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Section, SectionHeading } from "../Section";
import { PROGRAMS, type Program } from "@/lib/programs";
import { EnrollModal } from "../EnrollModal";

export function AcademySection() {
  const [active, setActive] = useState<Program | null>(null);

  return (
    <Section id="academy">
      <SectionHeading
        eyebrow="Academy"
        title={
          <>
            Technology Talent <span className="text-primary">Programs</span>.
          </>
        }
        description="Industry-led, project-based programs that prepare African talent for global opportunities."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-soft-border/70 bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground/70">
                <Clock className="h-3 w-3" /> {p.duration}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Cohort 2026
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-soft-border/70 px-2 py-0.5 text-[11px] text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => setActive(p)}
              className="mt-6 inline-flex w-full items-center justify-between rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary"
            >
              Enroll Now
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      <EnrollModal open={!!active} program={active} onClose={() => setActive(null)} />
    </Section>
  );
}
