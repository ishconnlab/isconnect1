import emailjs from "@emailjs/browser";

/**
 * EmailJS configuration via Vite env vars.
 * Set the following in `.env` (or via Lovable secrets exposed as VITE_*):
 *
 *   VITE_EMAILJS_PUBLIC_KEY
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_CONTACT
 *   VITE_EMAILJS_TEMPLATE_FULLSTACK
 *   VITE_EMAILJS_TEMPLATE_PYTHON
 *   VITE_EMAILJS_TEMPLATE_CYBERSECURITY
 *   VITE_EMAILJS_TEMPLATE_MOBILE
 *   VITE_EMAILJS_TEMPLATE_CLOUD
 *   VITE_EMAILJS_TEMPLATE_UIUX
 *   VITE_EMAILJS_TEMPLATE_DEFAULT (fallback)
 *
 * Each course can have its OWN EmailJS template — the resolver below
 * maps a course slug to its template id.
 */

interface ImportMetaEnv {
  VITE_EMAILJS_PUBLIC_KEY?: string;
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_CONTACT?: string;
  VITE_EMAILJS_TEMPLATE_FULLSTACK?: string;
  VITE_EMAILJS_TEMPLATE_PYTHON?: string;
  VITE_EMAILJS_TEMPLATE_CYBERSECURITY?: string;
  VITE_EMAILJS_TEMPLATE_MOBILE?: string;
  VITE_EMAILJS_TEMPLATE_CLOUD?: string;
  VITE_EMAILJS_TEMPLATE_UIUX?: string;
  VITE_EMAILJS_TEMPLATE_DEFAULT?: string;
}

const env = import.meta.env as ImportMetaEnv;

export const EMAILJS_PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY ?? "";
export const EMAILJS_SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID ?? "";

export type CourseSlug =
  | "full-stack"
  | "python"
  | "cybersecurity"
  | "mobile"
  | "cloud-devops"
  | "ui-ux";

export const COURSE_TEMPLATES: Record<CourseSlug, string | undefined> = {
  "full-stack": env.VITE_EMAILJS_TEMPLATE_FULLSTACK,
  python: env.VITE_EMAILJS_TEMPLATE_PYTHON,
  cybersecurity: env.VITE_EMAILJS_TEMPLATE_CYBERSECURITY,
  mobile: env.VITE_EMAILJS_TEMPLATE_MOBILE,
  "cloud-devops": env.VITE_EMAILJS_TEMPLATE_CLOUD,
  "ui-ux": env.VITE_EMAILJS_TEMPLATE_UIUX,
};

const DEFAULT_TEMPLATE = env.VITE_EMAILJS_TEMPLATE_DEFAULT;
const CONTACT_TEMPLATE = env.VITE_EMAILJS_TEMPLATE_CONTACT;

let initialised = false;
function ensureInit() {
  if (!initialised && EMAILJS_PUBLIC_KEY) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    initialised = true;
  }
}

export interface EnrollPayload {
  name: string;
  email: string;
  phone: string;
  course: string; // human-readable course name
  courseSlug: CourseSlug;
  message?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function sendEnrollment(payload: EnrollPayload) {
  ensureInit();
  const template = COURSE_TEMPLATES[payload.courseSlug] ?? DEFAULT_TEMPLATE;

  if (!EMAILJS_SERVICE_ID || !template) {
    // Dev fallback: no EmailJS configured yet — simulate success so UX stays smooth.
    await new Promise((r) => setTimeout(r, 700));
    console.warn("[EmailJS] Not configured. Simulated send:", { template, payload });
    return { ok: true, simulated: true as const };
  }

  await emailjs.send(EMAILJS_SERVICE_ID, template, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    course: payload.course,
    course_slug: payload.courseSlug,
    message: payload.message ?? "",
    submitted_at: new Date().toISOString(),
  });
  return { ok: true as const };
}

export async function sendContact(payload: ContactPayload) {
  ensureInit();
  if (!EMAILJS_SERVICE_ID || !CONTACT_TEMPLATE) {
    await new Promise((r) => setTimeout(r, 700));
    console.warn("[EmailJS] Not configured. Simulated send:", payload);
    return { ok: true, simulated: true as const };
  }
  await emailjs.send(EMAILJS_SERVICE_ID, CONTACT_TEMPLATE, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone ?? "",
    subject: payload.subject ?? "Website inquiry",
    message: payload.message,
    submitted_at: new Date().toISOString(),
  });
  return { ok: true as const };
}
