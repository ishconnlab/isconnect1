import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { sendContact } from "@/lib/email";

import { Section, SectionHeading } from "../Section";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().min(5, "Tell us a little more").max(1500),
});

type Values = z.infer<typeof schema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (v: Values) => {
    try {
      await sendContact(v);
      toast.success("Message sent", { description: "We'll respond within one business day." });
      reset();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error("EmailJS error:", msg);
      toast.error("Could not send", { description: msg });
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let's build something <span className="text-primary">remarkable.</span>
          </>
        }
        description="Tell us about your project, your program, or just say hello — we read every message."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="space-y-4">
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              title="Email"
              value="ishconnlab@gmail.com"
              href="mailto:ishconnlab@gmail.com"
            />

            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              title="Phone"
              value="+250 787 377 750"
              href="tel:+250787377750"
            />

            <ContactCard
              icon={<MapPin className="h-4 w-4" />}
              title="Studio"
              value="KG 11 Ave, Kigali, Rwanda"
            />

            <a
              href="https://wa.me/250787377750"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 rounded-3xl border border-orange-200 bg-[#F97316] p-5 text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white">
                  <MessageCircle className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70">WhatsApp</p>

                  <p className="text-sm font-medium">Chat with our team now</p>
                </div>
              </div>

              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-4 rounded-3xl border border-orange-100 bg-[#FFF7ED] p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" error={errors.name?.message}>
              <input className="contact-input" {...register("name")} placeholder="Jane Mukamana" />
            </Field>

            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                className="contact-input"
                {...register("email")}
                placeholder="you@example.com"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone (optional)" error={errors.phone?.message}>
              <input
                className="contact-input"
                {...register("phone")}
                placeholder="+250 78x xxx xxx"
              />
            </Field>

            <Field label="Subject (optional)">
              <input
                className="contact-input"
                {...register("subject")}
                placeholder="Project · Partnership · Other"
              />
            </Field>
          </div>

          <Field label="Message" error={errors.message?.message}>
            <textarea
              rows={5}
              className="contact-input resize-none"
              {...register("message")}
              placeholder="Tell us what you're building…"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F97316] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#FB923C] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          <style>{`
            .contact-input {
              width: 100%;
              border-radius: 1rem;
              border: 1px solid #fed7aa;
              background: #ffffff;
              padding: 0.78rem 0.95rem;
              font-size: 0.875rem;
              color: #1f2937;
              outline: none;
              transition: border-color .2s, box-shadow .2s, background-color .2s, transform .2s;
            }
            .contact-input:focus {
              border-color: #F97316;
              box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.15);
            }
            .contact-input::placeholder { color: #9ca3af; }
            @media (max-width: 640px) {
              .contact-input { padding: 0.72rem 0.82rem; font-size: 0.82rem; }
            }
          `}</style>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-3xl border border-orange-100 bg-white p-5 shadow-soft transition-all duration-300 hover:border-[#F97316]/40 hover:-translate-y-0.5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-[#F97316]">
        {icon}
      </span>

      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500">{title}</p>

        <p className="text-sm font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-gray-700">{label}</span>

      {children}

      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
