import { motion } from "framer-motion";
import { X, Bot } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border/50 bg-background/80 px-4 py-3 backdrop-blur-sm max-sm:px-3 max-sm:py-2.5 lg:px-5 lg:py-3.5">
      <div className="flex items-center gap-3 max-sm:gap-2.5 lg:gap-3.5">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm max-sm:h-8 max-sm:w-8 lg:h-10 lg:w-10">
          <Bot className="h-5 w-5 text-primary-foreground max-sm:h-4.5 max-sm:w-4.5 lg:h-5.5 lg:w-5.5" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background lg:h-3 lg:w-3 lg:-right-1 lg:-top-1"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold leading-tight text-foreground lg:text-[15px]">
            IshConnect AI
          </h3>
          <p className="text-[11px] leading-tight text-muted-foreground/70 max-sm:text-[10px] lg:text-xs">
            Online
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/60 transition-colors hover:bg-muted hover:text-foreground max-sm:h-10 max-sm:w-10 lg:h-9 lg:w-9"
        aria-label="Close chat"
      >
        <X className="h-4 w-4 max-sm:h-4.5 max-sm:w-4.5 lg:h-[18px] lg:w-[18px]" strokeWidth={2} />
      </motion.button>
    </div>
  );
}
