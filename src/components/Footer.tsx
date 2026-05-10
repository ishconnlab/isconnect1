// import { Link } from "react-router-dom";
// import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
// import { Logo } from "./Logo";

// export function Footer() {
//   const sections = [
//     {
//       title: "Company",
//       links: [
//         { label: "About", to: "/about" as const },
//         { label: "Work", to: "/work" as const },
//         { label: "Contact", to: "/contact" as const },
//       ],
//     },
//     {
//       title: "Solutions",
//       links: [
//         { label: "Digital Platforms", to: "/solutions" as const },
//         { label: "Mobile Apps", to: "/solutions" as const },
//         { label: "Cloud", to: "/solutions" as const },
//         { label: "Cybersecurity", to: "/solutions" as const },
//       ],
//     },
//     {
//       title: "Academy",
//       links: [
//         { label: "Programs", to: "/academy" as const },
//         { label: "DevQueens", to: "/academy" as const },
//         { label: "Enroll", to: "/academy" as const },
//       ],
//     },
//   ];

//   return (
//     <footer className="border-t border-soft-border/60 bg-surface-elevated">
//       <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12">
//         <div className="md:col-span-5">
//           <Logo />
//           <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
//             We design, build, and ship world-class digital products that move Africa's innovation
//             economy forward.
//           </p>
//           <div className="mt-6 flex items-center gap-2">
//             {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 aria-label="Social link"
//                 className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-soft-border/60 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
//               >
//                 <Icon className="h-4 w-4" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {sections.map((s) => (
//           <div key={s.title} className="md:col-span-2">
//             <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//               {s.title}
//             </h4>
//             <ul className="space-y-2.5">
//               {s.links.map((l, i) => (
//                 <li key={i}>
//                   <Link to={l.to} className="text-sm text-foreground/80 hover:text-primary">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className="md:col-span-3">
//           <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//             Start
//           </h4>
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background magnetic-btn"
//           >
//             Start a Project
//             <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>
//         </div>
//       </div>

//       <div className="border-t border-soft-border/60">
//         <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
//           <p>© {new Date().getFullYear()} IshConnect. Building Africa's digital future.</p>
//           <p>Kigali · Rwanda · Worldwide</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { memo } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

import { Logo } from "./Logo";

export const Footer = memo(function Footer() {
  const sections = [
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" as const },
        { label: "Work", to: "/work" as const },
        { label: "Contact", to: "/contact" as const },
        { label: "Privacy", to: "/privacy" as const },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Digital Platforms", to: "/solutions" as const },
        { label: "Mobile Apps", to: "/solutions" as const },
        { label: "Cloud", to: "/solutions" as const },
        { label: "Cybersecurity", to: "/solutions" as const },
      ],
    },
    {
      title: "Academy",
      links: [
        { label: "Programs", to: "/academy" as const },
        { label: "DevQueens", to: "/academy" as const },
        { label: "Enroll", to: "/academy" as const },
      ],
    },
  ];

  return (
    <footer className="border-t border-soft-border/60 bg-surface-elevated">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Logo />

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We design, build, and ship world-class digital products that move Africa's innovation
            economy forward.
          </p>

          {/* Legal */}
          <div className="mt-5 rounded-2xl border border-orange-200 bg-[#FFF7ED] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]">
              Registered Business
            </p>

            <p className="mt-1 text-sm font-medium text-foreground">IshConnect by ISHCONNLAB</p>

            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Registered in Rwanda · Technology & Innovation Company
            </p>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-2">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-soft-border/60 text-foreground/70 transition-colors hover:border-[#F97316] hover:text-[#F97316]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {sections.map((s) => (
          <div key={s.title} className="md:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {s.title}
            </h4>

            <ul className="space-y-2.5">
              {s.links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-[#F97316]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA */}
        <div className="md:col-span-3">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Start
          </h4>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#F97316] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FB923C]"
          >
            Start a Project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-soft-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            <p>
              © {new Date().getFullYear()} IshConnect. Operated by{" "}
              <span className="font-semibold text-foreground">ISHCONNLAB</span>.
            </p>

            <p className="mt-1">Registered in Rwanda · All rights reserved.</p>
          </div>

          <p>Kigali · Rwanda · Worldwide</p>
        </div>
      </div>
    </footer>
  );
});
