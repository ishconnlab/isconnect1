import { memo } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, LogIn } from "lucide-react";

import { Logo } from "./Logo";

const SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "Home", to: "/" as const },
      { label: "About", to: "/about" as const },
      { label: "Founder", to: "/founder" as const },
      { label: "Team", to: "/team" as const },
      { label: "Work", to: "/work" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Services Overview", to: "/solutions" as const },
      { label: "Software Development", to: "/software-development-rwanda" as const },
      { label: "Web Development", to: "/web-development-kigali" as const },
      { label: "Mobile App Development", to: "/mobile-app-development-rwanda" as const },
      { label: "AI Solutions", to: "/ai-solutions-rwanda" as const },
      { label: "Cloud Infrastructure", to: "/cloud-services-rwanda" as const },
      { label: "Cybersecurity", to: "/cybersecurity-rwanda" as const },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Academy", to: "/academy" as const },
      { label: "WebCare", to: "/webcare" as const },
      { label: "Community", to: "/community" as const },
      { label: "DevQueens", to: "/devqueens" as const },
      { label: "Challenges", to: "/challenges" as const },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", to: "/privacy" as const },
      { label: "Start a Project", to: "/contact" as const },
    ],
  },
];

export const Footer = memo(function Footer() {
  return (
    <footer className="border-t border-soft-border/60 bg-surface-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-12">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-4">
          <Link to="/" aria-label="IshConnect Home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            IshConnect is a software development and AI innovation studio based in Kigali, Rwanda. We build web applications, mobile platforms, AI systems, and technology education programs that empower businesses and future tech talent across Africa.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a
              href="https://x.com/IConnlab"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-border/60 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ishconnlab"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-border/60 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ishconnlab"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-border/60 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/ish.connect"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-border/60 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        {SECTIONS.map((s) => (
          <div key={s.title} className="md:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {s.title}
            </h4>
            <ul className="space-y-2.5">
              {s.links.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA */}
        <div className="md:col-span-2">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Start
          </h4>
          <Link
            to="/contact"
            className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:bg-primary-hover"
          >
            Start a Project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-soft-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} <Link to="/" className="hover:text-primary transition-colors">IshConnect</Link>. Operated by <span className="font-semibold text-foreground">ISHCONNLAB</span>.
          </p>
          <button
            type="button"
            aria-label="Admin login"
            title="Admin login"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-soft-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => void import("@/lib/events").then(({ useEventsStore }) => useEventsStore.getState().openEditor())}
          >
            <LogIn aria-hidden="true" className="h-4 w-4" />
          </button>
          <p className="text-muted-foreground/60">
            <Link to="/solutions" className="hover:text-primary transition-colors">Software Development</Link> &middot;
            <Link to="/ai-solutions-rwanda" className="hover:text-primary transition-colors"> AI Solutions</Link> &middot;
            <Link to="/academy" className="hover:text-primary transition-colors"> Tech Training</Link> &middot;
            <Link to="/about" className="hover:text-primary transition-colors"> About</Link> &middot;
            <Link to="/founder" className="hover:text-primary transition-colors"> Founder</Link> &middot;
            <Link to="/team" className="hover:text-primary transition-colors"> Team</Link>
          </p>
          <p className="text-muted-foreground/40">
            Kigali, Rwanda &middot; Global Reach
          </p>
        </div>
      </div>
    </footer>
  );
});
