import { motion } from "framer-motion";
import { Section, SectionHeading } from "../Section";

const LEADS = [
  {
    name: "Ishimwe J. Claude",
    role: "CEO & Founder",
    initials: "IJ",
  },
  {
    name: "Kevin I.",
    role: "Lead Developer",
    initials: "KI",
  },
  {
    name: "Sandra N.",
    role: "Creative Director",
    initials: "SN",
  },
];

const TEAM = [
  { name: "Tumaine N.", role: "Backend Engineer" },
  { name: "Derick", role: "Mobile Engineer" },
  { name: "Ange U.", role: "Cloud Architect" },
  { name: "Trinita U.", role: "Product Designer" },
  { name: "Alifu S.", role: "Software Engineer" },
  { name: "Cynthia I.", role: "Program Lead" },
  { name: "Dady R.N.", role: "Frontend Engineer" },
  { name: "Divine B.", role: "QA Engineer" },
];

export function TeamSection() {
  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title={
          <>
            The minds behind the <span className="text-primary">mission.</span>
          </>
        }
        description="A multidisciplinary team of engineers, designers, and educators building impactful digital experiences across Africa."
      />

      {/* LEADERS */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {LEADS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
          >
            {/* CARD */}
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-orange-50 to-white">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_60%)]" />

              {/* Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F97316] shadow-sm">
                Leadership
              </div>

              {/* Initials */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] shadow-xl">
                <span className="font-display text-3xl font-bold tracking-tight text-white">
                  {member.initials}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-orange-100 bg-white/90 p-5 backdrop-blur">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TEAM GRID */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.4,
              delay: i * 0.04,
            }}
            className="group flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
              {member.name[0]}
            </span>

            <div>
              <p className="text-sm font-semibold leading-tight text-foreground">{member.name}</p>

              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
