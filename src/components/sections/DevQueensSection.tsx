import { motion } from "framer-motion";
import { Heart, Sparkles, Users } from "lucide-react";
import { Section, SectionHeading } from "../Section";

export function DevQueensSection() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Mentorship",
      text: "1:1 guidance from senior women engineers shipping at top companies.",
    },
    {
      icon: Users,
      title: "Community",
      text: "A safe, ambitious sisterhood of builders, founders and creators.",
    },
    {
      icon: Heart,
      title: "Empowerment",
      text: "Scholarships, devices, and pathways into world-class tech careers.",
    },
  ];

  return (
    <section id="devqueens" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <Section>
        <SectionHeading
          eyebrow="DevQueens"
          title={
            <>
              Empowering the Next Generation of{" "}
              <span className="text-primary">Women in Technology</span>.
            </>
          }
          description="DevQueens is our movement to close the gender gap in African tech — through mentorship, community and unapologetic ambition."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-soft-border/70 bg-surface p-7 shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-soft-border/70 bg-foreground p-10 text-background shadow-elevated md:p-14"
        >
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                "When women build technology, the future is fairer, faster, and more human."
              </p>
              <p className="mt-4 text-sm text-background/70">— DevQueens manifesto</p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:col-span-5">
              {[
                { v: "120+", l: "Mentees" },
                { v: "32", l: "Mentors" },
                { v: "9", l: "Cities" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl bg-background/5 p-4 ring-1 ring-background/10"
                >
                  <p className="font-display text-2xl font-semibold">{s.v}</p>
                  <p className="text-xs text-background/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </section>
  );
}
