// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// export function CEOSection() {
//   return (
//     <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
//       <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
//         <motion.div
//           initial={{ opacity: 0, x: -24 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           className="lg:col-span-5"
//         >
//           <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border border-soft-border/70 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent shadow-elevated">
//             {/* Stylized portrait placeholder */}
//             <div className="absolute inset-0 flex items-end justify-center">
//               <svg viewBox="0 0 200 250" className="h-full w-full text-foreground/85" aria-hidden>
//                 <defs>
//                   <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#FB923C" stopOpacity="0.25" />
//                     <stop offset="100%" stopColor="#F97316" stopOpacity="0.05" />
//                   </linearGradient>
//                 </defs>
//                 <rect width="200" height="250" fill="url(#bg-grad)" />
//                 <circle cx="100" cy="95" r="38" fill="currentColor" opacity="0.92" />
//                 <path
//                   d="M30 250 C 30 180, 75 150, 100 150 S 170 180, 170 250 Z"
//                   fill="currentColor"
//                   opacity="0.92"
//                 />
//                 <circle
//                   cx="100"
//                   cy="95"
//                   r="38"
//                   fill="none"
//                   stroke="#F97316"
//                   strokeWidth="1"
//                   opacity="0.5"
//                 />
//               </svg>
//             </div>
//             <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
//               <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Founder
//             </div>
//             <div className="absolute bottom-4 right-4 rounded-2xl bg-foreground px-3 py-2 text-background">
//               <p className="text-[10px] uppercase tracking-wider opacity-70">Based in</p>
//               <p className="text-xs font-semibold">Kigali, Rwanda</p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 24 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
//           className="lg:col-span-7"
//         >
//           <Quote className="h-8 w-8 text-primary" />
//           <blockquote className="mt-5 font-display text-3xl font-medium leading-snug tracking-tight text-balance sm:text-4xl md:text-[2.6rem]">
//             "We are not just building software. We are building Africa's
//             <span className="text-primary"> digital future.</span>"
//           </blockquote>
//           <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
//             Founder and technology strategist focused on empowering African youth through
//             innovation, software engineering, and digital transformation.
//           </p>
//           <div className="mt-8 flex items-center gap-4">
//             <div className="h-px flex-1 bg-soft-border" />
//             <div className="text-right">
//               <p className="font-display text-xl italic tracking-tight">Ishimwe J. Claude</p>
//               <p className="text-xs uppercase tracking-wider text-muted-foreground">
//                 CEO &amp; Founder
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import ceoImage from "@/assets/team/ceo.jpeg";

export function CEOSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border border-soft-border/70 bg-[#FFF7ED] shadow-elevated">
            {/* CEO Image */}
            <img
              src={ceoImage}
              alt="Ishimwe J. Claude — CEO & Founder of IshConnect (Ishconnlab), a leading software development and AI innovation studio based in Kigali, Rwanda"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* Founder badge */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#111827] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
              Founder
            </div>

            {/* Location */}
            <div className="absolute bottom-4 right-4 rounded-2xl bg-[#111827] px-3 py-2 text-white shadow-lg">
              <p className="text-[10px] uppercase tracking-wider opacity-70">Based in</p>

              <p className="text-xs font-semibold">Kigali, Rwanda</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
          className="lg:col-span-7"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF7ED] text-[#F97316] shadow-soft">
            <Quote className="h-7 w-7" />
          </div>

          <blockquote className="mt-6 font-display text-3xl font-medium leading-snug tracking-tight text-balance sm:text-4xl md:text-[2.6rem]">
            "We are not just building software. We are building Africa's
            <span className="text-[#F97316]"> digital future.</span>"
          </blockquote>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Founder and technology strategist focused on empowering African youth through
            innovation, software engineering, and digital transformation.
          </p>

          {/* Signature */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-soft-border" />

            <div className="text-right">
              <p className="font-display text-2xl italic tracking-tight text-[#111827]">
                Ishimwe J. Claude
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                CEO &amp; Founder
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
