import emailjs from "@emailjs/browser";

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
function ensureInit(): string {
  const missing: string[] = [];
  if (!EMAILJS_PUBLIC_KEY) missing.push("VITE_EMAILJS_PUBLIC_KEY");
  if (!EMAILJS_SERVICE_ID) missing.push("VITE_EMAILJS_SERVICE_ID");

  if (!initialised) {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      initialised = true;
    }
  }

  if (missing.length > 0) {
    const msg = `EmailJS not configured. Set ${missing.join(", ")} in your .env file or Vercel environment variables.`;
    throw new Error(msg);
  }

  return EMAILJS_SERVICE_ID;
}

function getTemplate(slug?: CourseSlug): string {
  if (slug) {
    const t = COURSE_TEMPLATES[slug] ?? DEFAULT_TEMPLATE;
    if (t) return t;
  }
  if (CONTACT_TEMPLATE) return CONTACT_TEMPLATE;
  if (DEFAULT_TEMPLATE) return DEFAULT_TEMPLATE;
  throw new Error(
    "EmailJS template not configured. Set VITE_EMAILJS_TEMPLATE_CONTACT or VITE_EMAILJS_TEMPLATE_DEFAULT.",
  );
}

export interface EnrollPayload {
  name: string;
  email: string;
  phone: string;
  course: string;
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
  const serviceId = ensureInit();
  const template = getTemplate(payload.courseSlug);

  await emailjs.send(serviceId, template, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    course: payload.course,
    course_slug: payload.courseSlug,
    message: payload.message ?? "",
    submitted_at: new Date().toISOString(),
  });
}

export async function sendContact(payload: ContactPayload) {
  const serviceId = ensureInit();
  const template = getTemplate();

  await emailjs.send(serviceId, template, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone ?? "",
    subject: payload.subject ?? "Website inquiry",
    message: payload.message,
    submitted_at: new Date().toISOString(),
  });
}
