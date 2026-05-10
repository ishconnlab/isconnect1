export const SITE_NAME = "IshConnect";
export const SITE_ALTERNATE_NAME = "IshConnect Lab";
export const SITE_ALTERNATE_NAMES = [
  "IshConnect",
  "Ish Connect",
  "Ishconnect Lab",
  "Ishconnlab",
  "Ishconn",
  "DevQueens",
  "Dev Queens",
  "ISHCONNLAB",
];
export const SITE_LEGAL_NAME = "ISHCONNLAB";
export const SITE_URL = "https://www.ishconnect.rw";
export const SITE_DOMAIN = "ishconnect.rw";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const DEFAULT_OG_IMAGE_ALT =
  "IshConnect & Ishconnlab — Leading Software Development & Innovation Studio in Kigali, Rwanda";
export const TWITTER_HANDLE = "@IshConnectRW";
export const SITE_LOCALE = "en_US";
export const SITE_LANG = "en";
export const SITE_REGION = "RW";
export const SITE_CREATED_YEAR = "2024";

export interface ImageObject {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | ImageObject;
  ogImageAlt?: string;
  ogType?: string;
  canonical: string;
  noindex?: boolean;
  nofollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  themeColor?: string;
  locale?: string;
  keywords?: string[];
}

export interface PageSEOConfig extends SEOProps {
  breadcrumbs: { name: string; url: string }[];
}

function resolveUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function resolveOgImage(image?: string | ImageObject): {
  url: string;
  alt: string;
  width?: number;
  height?: number;
} {
  if (!image) {
    return {
      url: resolveUrl(DEFAULT_OG_IMAGE),
      alt: DEFAULT_OG_IMAGE_ALT,
    };
  }
  if (typeof image === "string") {
    return { url: resolveUrl(image), alt: DEFAULT_OG_IMAGE_ALT };
  }
  return {
    url: resolveUrl(image.url),
    alt: image.alt || DEFAULT_OG_IMAGE_ALT,
    width: image.width,
    height: image.height,
  };
}

export function buildMeta(props: SEOProps) {
  const ogImage = resolveOgImage(props.ogImage);

  return {
    title: props.title,
    description: props.description,
    ogTitle: props.ogTitle || props.title,
    ogDescription: props.ogDescription || props.description,
    ogImage: ogImage.url,
    ogImageAlt: props.ogImageAlt || ogImage.alt,
    ogImageWidth: ogImage.width,
    ogImageHeight: ogImage.height,
    ogUrl: props.canonical,
    ogType: props.ogType || "website",
    canonical: props.canonical,
    noindex: props.noindex || false,
    nofollow: props.nofollow || false,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    themeColor: props.themeColor || "#0a0a0a",
    locale: props.locale || SITE_LOCALE,
    keywords: props.keywords,
  };
}

export const PAGE_SEO: Record<string, PageSEOConfig> = {
  home: {
    title: "IshConnect | Ishconnlab — Software Development & AI Innovation Studio, Kigali Rwanda",
    description:
      "IshConnect (Ishconnlab) is Kigali's leading technology studio for software development, AI training, web development, and tech innovation in Rwanda. We build digital products and empower African tech talent through education and digital transformation.",
    ogTitle: "IshConnect & Ishconnlab — Software Development & AI Innovation Studio, Kigali Rwanda",
    ogDescription:
      "Kigali's leading technology studio for software development, AI training, web development, and tech innovation in Rwanda. Digital products, tech education, and digital transformation by IshConnect (Ishconnlab).",
    canonical: SITE_URL,
    ogType: "website",
    keywords: [
      "IshConnect",
      "Ish Connect",
      "Ishconnlab",
      "Ishconn",
      "Ishconnect Lab",
      "DevQueens",
      "Dev Queens",
      "IshConnect Rwanda",
      "AI Rwanda",
      "web development Rwanda",
      "React developer Rwanda",
      "tech innovation Kigali",
      "software development Kigali",
      "AI training Rwanda",
      "coding school Rwanda",
      "programming Rwanda",
      "software development Rwanda",
      "tech company Rwanda",
      "digital transformation Rwanda",
      "innovation hub Rwanda",
      "Kigali software development",
      "African tech studio",
      "custom software development",
      "IT services Rwanda",
      "software agency Kigali",
    ],
    breadcrumbs: [{ name: "Home", url: "/" }],
  },
  about: {
    title: "About IshConnect & Ishconnlab — Kigali Tech Studio | Software Innovation Rwanda",
    description:
      "Learn about IshConnect (Ishconnlab), Kigali's technology studio driving innovation through software engineering, AI, tech education, and digital transformation in Rwanda. Home of DevQueens.",
    canonical: `${SITE_URL}/about`,
    ogType: "website",
    keywords: [
      "IshConnect",
      "Ishconnlab",
      "Ish Connect",
      "about IshConnect",
      "about Ishconnlab",
      "Kigali software company",
      "Rwanda tech startup",
      "African technology studio",
      "DevQueens Kigali",
      "software development team",
      "technology company Kigali",
      "African innovation studio",
      "digital transformation team",
      "IT company Rwanda",
      "Rwanda software engineers",
      "African tech leadership",
      "tech innovation Kigali",
      "software development Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
  },
  academy: {
    title:
      "IshConnect Academy — Coding School & AI Training in Kigali, Rwanda | Programming Bootcamp",
    description:
      "Join IshConnect Academy for coding bootcamps, AI training, and software engineering programs in Kigali, Rwanda. Learn web development, cybersecurity, UI/UX design, and more at Rwanda's top tech school by Ishconnlab.",
    canonical: `${SITE_URL}/academy`,
    ogType: "website",
    keywords: [
      "coding school Rwanda",
      "AI training Rwanda",
      "programming Rwanda",
      "IshConnect Academy",
      "tech academy Rwanda",
      "programming bootcamp Kigali",
      "software engineering course Rwanda",
      "cybersecurity training Rwanda",
      "UI UX design course Kigali",
      "coding bootcamp Kigali",
      "learn coding Rwanda",
      "tech training Kigali",
      "IT training Rwanda",
      "computer programming Rwanda",
      "developer bootcamp Rwanda",
      "software school Kigali",
      "AI course Rwanda",
      "web development course Rwanda",
      "React developer training",
      "African tech talent",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Academy", url: "/academy" },
    ],
  },
  contact: {
    title: "Contact IshConnect — Web Developers & Tech Studio in Kigali, Rwanda",
    description:
      "Get in touch with IshConnect (Ishconnlab) in Kigali, Rwanda. Start your web development, AI, or software project. Hire React developers and tech innovators in Rwanda. We respond within one business day.",
    canonical: `${SITE_URL}/contact`,
    ogType: "website",
    keywords: [
      "contact IshConnect",
      "contact Ishconnlab",
      "hire developers Rwanda",
      "Kigali software agency",
      "software development quote",
      "tech consultation Rwanda",
      "hire React developer Rwanda",
      "web development Rwanda",
      "AI development Rwanda",
      "mobile app development Kigali",
      "IT consulting Kigali",
      "custom software quote",
      "digital agency Rwanda",
      "technology partners Africa",
      "tech studio Kigali",
      "IshConnect contact",
      "web development quote Kigali",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
  },
  solutions: {
    title: "Software, AI & Web Development Services Kigali | IshConnect Rwanda",
    description:
      "IshConnect (Ishconnlab) provides end-to-end technology services in Kigali, Rwanda: web and mobile development, AI solutions, cloud infrastructure, cybersecurity, and UI/UX design for African businesses.",
    canonical: `${SITE_URL}/solutions`,
    ogType: "website",
    keywords: [
      "IshConnect solutions",
      "web development Rwanda",
      "AI solutions Africa",
      "software services Kigali",
      "cloud services Rwanda",
      "cybersecurity services Africa",
      "mobile app development Kigali",
      "UI UX design services Rwanda",
      "digital platform engineering",
      "backend development Africa",
      "custom software development Africa",
      "cloud computing Rwanda",
      "React development Africa",
      "SaaS development Africa",
      "API development services",
      "DevOps Rwanda",
      "digital transformation services",
      "technology consulting Africa",
      "full stack development",
      "IT solutions Rwanda",
      "tech innovation Kigali",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Solutions", url: "/solutions" },
    ],
  },
  privacy: {
    title: "Privacy Policy — IshConnect & Ishconnlab | Data Protection Rwanda",
    description:
      "Your privacy matters to IshConnect (ISHCONNLAB). Learn how we collect, use, and protect your information in compliance with Rwandan data protection regulations. Privacy policy for Ishconnlab services.",
    canonical: `${SITE_URL}/privacy`,
    ogType: "website",
    keywords: [
      "IshConnect privacy",
      "Ishconnlab privacy",
      "ISHCONNLAB",
      "data protection Rwanda",
      "privacy policy Rwanda",
      "data privacy Rwanda",
      "personal data protection",
      "technology privacy policy Rwanda",
      "software company privacy",
      "information security policy",
      "data handling practices",
      "Rwanda data protection",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Privacy Policy", url: "/privacy" },
    ],
  },
  work: {
    title: "Our Work — Portfolio & Case Studies | IshConnect Rwanda",
    description:
      "Explore IshConnect's portfolio of digital products — fintech, healthtech, agritech, AI, and consumer platforms built for the African market by the Ishconnlab team in Kigali, Rwanda.",
    canonical: `${SITE_URL}/work`,
    ogType: "website",
    keywords: [
      "IshConnect portfolio",
      "Ishconnlab projects",
      "fintech case study Africa",
      "healthtech Rwanda",
      "agritech projects Africa",
      "African tech work",
      "software portfolio Rwanda",
      "AI projects Africa",
      "digital products Africa",
      "fintech development Africa",
      "software projects Kigali",
      "mobile app portfolio",
      "digital transformation case studies",
      "Rwanda software company projects",
      "African innovation examples",
      "web development examples",
      "React projects Africa",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Work", url: "/work" },
    ],
  },
};
