import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Smartphone,
  Cloud,
  ShieldCheck,
  Server,
  Palette,
  ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeading } from "../Section";

const SOLUTIONS = [
  {
    icon: LayoutDashboard,
    title: "Digital Platforms",
    desc: "Web apps, dashboards & SaaS that scale from day one.",
    href: "/software-development-rwanda",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native-quality iOS & Android with React Native and Flutter.",
    href: "/mobile-app-development-rwanda",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Serverless, global edge, and resilient cloud architecture.",
    href: "/cloud-services-rwanda",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Threat modelling, audits, and zero-trust implementation.",
    href: "/cybersecurity-rwanda",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "APIs, data pipelines, and high-performance services.",
    href: "/software-development-rwanda",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Research-led product design with measurable outcomes.",
    href: "/solutions",
  },
];

export function SolutionsSection() {
  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="Solutions"
        title={
          <>
            Engineering <span className="text-primary">excellence</span>, end to end.
          </>
        }
        description="From idea to launch — a multidisciplinary team that ships premium digital products."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-soft-border/70 bg-surface p-6 shadow-soft transition-shadow hover:shadow-elevated"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/15" />
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <Link
              to={s.href}
              className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-foreground/70 transition-colors group-hover:text-primary"
            >
              Learn more about {s.title.toLowerCase()} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
