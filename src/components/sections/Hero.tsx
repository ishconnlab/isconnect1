import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Activity, Zap, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      {/* soft ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-soft-border/70 bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            African future-tech · est. 2024
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Building Africa's <br className="hidden sm:block" />
            Next Generation of{" "}
            <span className="relative inline-block">
              <span className="text-primary">Digital Innovation</span>
              <span className="sr-only">
                {" "}
                — software development, AI, and technology innovation by IshConnect (Ishconnlab) in
                Kigali, Rwanda
              </span>
              <svg
                className="absolute -bottom-2 left-0 h-2 w-full text-primary/40"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 6 Q 50 0 100 4 T 200 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            <strong>IshConnect</strong> (operated by <strong>ISHCONNLAB</strong>) helps startups
            and enterprises build scalable web apps, mobile applications, AI systems, and digital
            platforms from <strong>Kigali, Rwanda</strong>. We also offer tech training through
            IshConnect Academy and run <strong>DevQueens</strong>, an initiative empowering women in
            African tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background magnetic-btn"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              Explore Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {["#F97316", "#FB923C", "#EA580C", "#1F2937"].map((c, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full ring-2 ring-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span>Trusted by founders, students & enterprises across the continent.</span>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{ willChange: "transform" }}
      className="relative mx-auto aspect-[4/5] w-full max-w-md"
    >
      {/* Big card */}
      <div className="absolute inset-0 rounded-[28px] border border-soft-border/70 bg-surface p-5 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Live · Platform overview
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-soft-border" />
            <span className="h-2 w-2 rounded-full bg-soft-border" />
            <span className="h-2 w-2 rounded-full bg-soft-border" />
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs text-muted-foreground">Total impact</p>
          <p className="font-display text-3xl font-semibold tracking-tight">1,284,920</p>
          <p className="mt-1 text-xs text-primary">+24.6% this quarter</p>
        </div>

        {/* Chart */}
        <svg viewBox="0 0 320 120" className="mt-4 w-full">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 90 C 40 60, 80 100, 120 70 S 200 40, 240 55 S 320 30, 320 30 L 320 120 L 0 120 Z"
            fill="url(#g)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <motion.path
            d="M0 90 C 40 60, 80 100, 120 70 S 200 40, 240 55 S 320 30, 320 30"
            fill="none"
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { l: "Engineers", v: "32" },
            { l: "Programs", v: "10+" },
            { l: "Countries", v: "7" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-muted px-3 py-2">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
              <p className="font-display text-base font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, -8, 0] }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="absolute -left-4 top-10 flex items-center gap-2 rounded-2xl border border-soft-border/70 bg-surface px-3 py-2 shadow-soft motion-reduce:animate-none"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Activity className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Uptime</p>
          <p className="text-xs font-semibold">99.99%</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="absolute -right-4 top-40 flex items-center gap-2 rounded-2xl border border-soft-border/70 bg-surface px-3 py-2 shadow-soft motion-reduce:animate-none"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/15 text-primary-hover">
          <Zap className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Deploys</p>
          <p className="text-xs font-semibold">Edge · Global</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, -6, 0] }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ willChange: "transform" }}
        className="absolute -bottom-2 left-6 flex items-center gap-2 rounded-2xl border border-soft-border/70 bg-foreground px-3 py-2 text-background shadow-elevated motion-reduce:animate-none"
      >
        <Globe className="h-3.5 w-3.5 text-primary" />
        <p className="text-xs font-medium">Made in Kigali · Shipped worldwide</p>
      </motion.div>
    </motion.div>
  );
}
