import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const dotVariants: Variants = {
  initial: { y: 0 },
  animate: (i: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.12,
      ease: "easeInOut" as const,
    },
  }),
};

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2.5 px-1 max-sm:gap-2 lg:gap-3"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 max-sm:h-6 max-sm:w-6 lg:h-8 lg:w-8">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary max-sm:h-3 max-sm:w-3 lg:h-3.5 lg:w-3.5"
        >
          <path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M16 14H8a4 4 0 0 0-4 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a4 4 0 0 0-4-4z" />
        </svg>
      </div>

      <div className="flex items-center gap-1 rounded-2xl border border-soft-border/60 bg-surface px-3.5 py-3 shadow-soft rounded-tl-sm motion-reduce:gap-1.5 lg:px-4 lg:py-3.5 lg:gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            custom={i}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            className="h-1.5 w-1.5 rounded-full bg-primary/60 motion-reduce:animate-none motion-reduce:bg-primary/40 lg:h-2 lg:w-2"
          />
        ))}
      </div>
    </motion.div>
  );
}
