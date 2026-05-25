import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ArrowRight, CheckCircle2, Code2, Lightbulb, Target } from "lucide-react";

export interface ChallengeDetail {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  skills: string[];
  duration: string;
  whatYouBuild: string;
  keyFeatures: string[];
  outcomes: string[];
  techStack?: string;
}

const levelStyles: Record<string, string> = {
  Beginner: "bg-primary/10 text-primary",
  Intermediate: "bg-foreground/5 text-foreground/80",
  Advanced: "bg-foreground text-background",
};

export function ChallengeModal({
  open,
  challenge,
  onClose,
  onStart,
}: {
  open: boolean;
  challenge: ChallengeDetail | null;
  onClose: () => void;
  onStart: () => void;
}) {
  if (!challenge) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4"
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-soft-border/70 bg-surface shadow-elevated sm:max-w-lg max-h-[92vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-soft-border/70 bg-background/80 text-foreground/70 backdrop-blur transition-colors hover:text-foreground sm:right-4 sm:top-4 sm:h-9 sm:w-9"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="border-b border-soft-border/60 bg-linear-to-br from-primary/10 via-secondary/5 to-transparent px-4 py-4 sm:px-6 sm:py-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-soft-border/60 bg-surface px-3 py-1 text-[11px] font-medium text-foreground/70 shadow-soft sm:text-xs">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {challenge.duration}
              </span>

              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {challenge.title}
                </h3>
                <span
                  className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${levelStyles[challenge.level]}`}
                >
                  {challenge.level}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {challenge.description}
              </p>
            </div>

            {/* Body */}
            <div className="space-y-5 px-4 py-5 sm:px-6 sm:py-6">
              {/* What You'll Build */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Code2 className="h-4 w-4" />
                  </span>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    What You'll Build
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {challenge.whatYouBuild}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Target className="h-4 w-4" />
                  </span>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    Key Features
                  </h4>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {challenge.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {challenge.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-soft-border/70 px-2.5 py-1 text-xs text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-4 w-4" />
                  </span>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    What You'll Learn
                  </h4>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {challenge.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-soft-border/60 px-4 py-4 sm:px-6 sm:py-4">
              <button
                onClick={onStart}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#f97316]/25 transition-all duration-300 hover:bg-[#ea580c] hover:shadow-xl hover:shadow-[#f97316]/35 active:scale-[0.98]"
              >
                Start Building
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
