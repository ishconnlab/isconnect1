import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Students Empowered" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Technology Programs" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function TrustStats() {
  return (
    <section
      className="border-y border-soft-border/60 bg-surface-elevated"
      aria-label="IshConnect impact statistics"
    >
      <h2 className="sr-only">
        IshConnect by the numbers — students empowered, projects delivered, programs launched, and
        client satisfaction in Kigali, Rwanda
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 sm:py-20 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
