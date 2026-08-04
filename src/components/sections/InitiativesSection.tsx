import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Sparkles, Users, Heart, CheckCircle, Globe, ArrowUpRight, ExternalLink, Quote, Shield, Award, Code2, GraduationCap, X } from "lucide-react";
import iconnbookImg from "@/assets/projects/iconnbook.png";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";

const DEVQUEENS_PILLARS = [
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

const DEVQUEENS_STATS = [
  { value: 120, suffix: "+", label: "Mentees" },
  { value: 32, suffix: "", label: "Mentors" },
  { value: 9, suffix: "", label: "Cities" },
];

const WEBCARE_FEATURES = [
  "Custom websites built from scratch — no templates",
  "Focused on Rwandan schools, universities, and businesses",
  "12 months of post-launch maintenance included",
  "Fully responsive — optimised for mobile and desktop",
];

const WEBSITES_BUILT = [
  { name: "HelperNet", url: "https://devqueens.ishconnect.rw/" },
  { name: "AgriLink", url: "https://webcare.ishconnect.rw/" },
  { name: "MindCare Connect", url: "https://mindcareconn.vercel.app/" },
  { name: "MissionHub", url: "https://missionhub.andas.dev/" },
  { name: "IshGuard", url: "https://ishguard.ishconnect.rw/" },
  { name: "iConnBook", url: "https://iconnbook.ishconnect.rw/" },
];

const SUCCESS_STORIES = [
  {
    icon: Shield,
    initials: "T",
    name: "Tendani",
    role: "Cybersecurity Internship",
    meta: "Completed · 2025",
    text: "Tendani completed the IshConnect cybersecurity internship in 2025, gaining hands-on experience in network security, threat analysis, and defensive security practices under the direct mentorship of senior security engineers.",
  },
  {
    icon: Code2,
    initials: "RA",
    name: "Ramla Abdullahi",
    role: "Computer Science & Cyber Student",
    meta: "Cyber Internship",
    text: "Ramla Abdullahi is a computer science & cybersecurity student who sharpened her practical skills through the IshConnect cyber internship — bridging academic theory with real-world security challenges on live projects.",
  },
  {
    icon: Award,
    initials: "AM",
    name: "AbdulAziz Memon",
    role: "CEO, Xantrail Studio",
    meta: "Completed Full Stack",
    text: "AbdulAziz Memon, CEO of Xantrail Studio, completed the full-stack program with IshConnect — turning his technical training into a thriving studio that ships web products for real clients.",
  },
];

export type SuccessStory = (typeof SUCCESS_STORIES)[number];

function Counter({ to, suffix, delay = 0 }: { to: number; suffix: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, {
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, mv, to, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function ConstellationLines() {
  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dq-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <path
        d="M 90 260 C 300 120, 420 260, 600 260 S 900 400, 1110 260"
        fill="none"
        stroke="url(#dq-line)"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        className="conn-line"
      />
      <path
        d="M 90 260 C 300 400, 420 260, 600 260 S 900 120, 1110 260"
        fill="none"
        stroke="url(#dq-line)"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        className="conn-line"
      />
      <circle cx="600" cy="260" r="6" fill="#f97316" opacity="0.9" className="animate-pulse" />
      <circle cx="600" cy="260" r="3" fill="#fff" />
    </svg>
  );
}

function SuccessStoryModal({
  story,
  onClose,
}: {
  story: SuccessStory | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {story && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${story.name} success story`}
          className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4"
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-soft-border/70 bg-surface shadow-elevated sm:max-w-lg"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-soft-border/70 bg-background/80 text-foreground/70 backdrop-blur transition-colors hover:text-foreground sm:right-4 sm:top-4 sm:h-9 sm:w-9"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="border-b border-soft-border/60 bg-linear-to-br from-violet-500/10 via-secondary/5 to-transparent px-4 py-5 sm:px-6 sm:py-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-primary/15 font-display text-base font-semibold text-violet-700 sm:h-16 sm:w-16">
                  {story.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-violet-700">{story.role}</p>
                  <h3 className="mt-0.5 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {story.name}
                  </h3>
                  <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                    <story.icon className="h-3 w-3" /> {story.meta}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4 py-5 sm:px-6 sm:py-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-700">
                <Quote className="h-3 w-3" /> Their story
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {story.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function InitiativesSection() {
  const [activeStory, setActiveStory] = useState<SuccessStory | null>(null);

  return (
    <section id="initiatives" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Section>
        <SectionHeading
          eyebrow="Initiatives"
          title={
            <>
              One studio. <span className="text-primary">Two bold missions.</span>
            </>
          }
          description="IshConnect builds the people who build the web — and the web for the people who build Rwanda. Explore DevQueens and WebCare."
        />

        <div className="relative mt-16">
          <ConstellationLines />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* ---------------- DEVQUEENS ---------------- */}
            <Reveal variant="fade-right" duration={700} className="lg:col-span-2">
              <div className="group relative h-full overflow-hidden rounded-[32px] border border-violet-200/70 bg-gradient-to-br from-violet-50 via-surface to-surface p-8 shadow-elevated transition-all duration-500 hover:-translate-y-1 sm:p-10">
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.14),transparent_55%)]" />
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-200/40 blur-2xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative flex h-full flex-col">
                  <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
                    <Quote className="h-3 w-3" /> DevQueens
                  </span>

                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-3xl">
                    Empowering the Next Generation of{" "}
                    <span className="text-violet-600">Women in Technology.</span>
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Closing the gender gap in African tech through mentorship, community, and ambition.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {DEVQUEENS_PILLARS.map((p, i) => (
                      <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="rounded-2xl border border-violet-200/60 bg-white/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                          <p.icon className="h-5 w-5" />
                        </span>
                        <h4 className="mt-3 text-sm font-semibold text-foreground">{p.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-violet-200/60 bg-white/50 p-5 backdrop-blur">
                    {DEVQUEENS_STATS.map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                          <Counter to={s.value} suffix={s.suffix} />
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://chat.whatsapp.com/BIyl1UovWjzLwcGw6vtcUJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#20BD5A]"
                  >
                    Join Our Community <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>

                  {/* Success stories */}
                  <div className="mt-10 border-t border-violet-200/60 pt-7">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs font-medium text-violet-700">
                        <Award className="h-3.5 w-3.5" /> Success Stories
                      </span>
                      <div className="h-px flex-1 bg-violet-200/50" />
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      {SUCCESS_STORIES.map((s, i) => (
                        <motion.button
                          key={s.name}
                          type="button"
                          onClick={() => setActiveStory(s)}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="group/card w-full rounded-2xl border border-violet-200/60 bg-white/70 p-4 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/15 to-primary/15 font-display text-xs font-semibold text-violet-700">
                              {s.initials}
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-foreground">{s.name}</p>
                              <p className="truncate text-xs text-muted-foreground">{s.role}</p>
                            </div>
                          </div>
                          <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                            <s.icon className="h-3 w-3" /> {s.meta}
                          </p>
                          <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-violet-700 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                            Read story <ArrowUpRight className="h-3 w-3" />
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ---------------- WEBCARE ---------------- */}
            <Reveal variant="fade-left" delay={100} duration={700}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-orange-200/70 bg-gradient-to-b from-orange-50 via-surface to-surface p-7 shadow-elevated transition-all duration-500 hover:-translate-y-1">
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_55%)]" />
                <div aria-hidden className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-orange-200/40 blur-2xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative flex flex-1 flex-col">
                  <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                    <Globe className="h-3 w-3" /> About WebCare
                  </span>

                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-tight text-balance">
                    Professional Websites for{" "}
                    <span className="text-primary">Schools & Businesses.</span>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    WebCare is the web development service of ISHCONNECT — designing, building, and
                    maintaining credible, results-driven websites for Rwandan institutions and
                    businesses. <strong className="text-foreground">No templates — every site is built specifically for the client.</strong>
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {WEBCARE_FEATURES.slice(0, 2).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-orange-200/60 pt-5">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-orange-700">
                      <Globe className="h-3 w-3" /> Websites We've Built
                    </p>
                    <ul className="mt-3 space-y-1">
                      {WEBSITES_BUILT.map((w) => (
                        <li key={w.name}>
                          <a
                            href={w.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-orange-100/60 hover:text-foreground"
                          >
                            <span>{w.name}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto border-t border-orange-200/60 pt-5">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-orange-700">
                      <GraduationCap className="h-3 w-3" /> Featured · iConnBook
                    </p>

                    <a
                      href="https://iconnbook.ishconnect.rw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/img mt-3 block overflow-hidden rounded-2xl border border-orange-200/60 bg-orange-50 shadow-soft transition-all duration-300 hover:shadow-elevated"
                    >
                      <span className="block aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={iconnbookImg}
                          alt="iConnBook — centralized digital learning platform"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </span>
                    </a>

                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                      A centralized digital learning platform built to index verified academic
                      references, past examination papers, and digital module handbooks for software
                      development, network engineering, and multimedia technology trades under the
                      Rwanda TVET Board (RTB) syllabus — plus secondary and higher learning resources.
                    </p>

                    <a
                      href="https://iconnbook.ishconnect.rw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                    >
                      View iConnBook
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <SuccessStoryModal story={activeStory} onClose={() => setActiveStory(null)} />
    </section>
  );
}
