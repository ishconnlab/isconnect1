export const SITE_NAME = "IshConnect";
export const SITE_URL = "https://www.ishconnect.rw";
export const SITE_DOMAIN = "ishconnect.rw";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const DEFAULT_OG_IMAGE_ALT =
  "IshConnect — Leading Software Development & Innovation Studio in Kigali, Rwanda";
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
    title: "IshConnect — Software Development & Innovation Studio, Kigali",
    description:
      "IshConnect is a leading African software development studio in Kigali, Rwanda. We build digital products, offer tech training, and drive digital transformation across Africa.",
    ogTitle: "IshConnect — Software Development & Innovation Studio, Kigali",
    ogDescription:
      "Leading African software development studio in Kigali, Rwanda. Digital products, tech education, and digital transformation for the future of Africa.",
    canonical: SITE_URL,
    ogType: "website",
    keywords: [
      "software development Rwanda",
      "tech company Rwanda",
      "web development Kigali",
      "digital transformation Rwanda",
      "innovation hub Rwanda",
      "African tech studio",
      "software solutions Africa",
      "Kigali software development",
      "technology consulting Rwanda",
      "digital products Africa",
      "custom software development",
      "IT services Rwanda",
      "software agency Kigali",
      "enterprise software Africa",
      "startup development Africa",
    ],
    breadcrumbs: [{ name: "Home", url: "/" }],
  },
  about: {
    title: "About IshConnect — African Software Company, Kigali Rwanda",
    description:
      "Learn about IshConnect's mission to build Africa's digital future. We are a Kigali-based technology studio driving innovation through software engineering, education, and digital transformation.",
    canonical: `${SITE_URL}/about`,
    ogType: "website",
    keywords: [
      "tech company Rwanda",
      "about IshConnect",
      "Kigali software company",
      "African technology studio",
      "Rwanda tech startup",
      "software development team",
      "technology company Kigali",
      "African innovation studio",
      "digital transformation team",
      "IT company Rwanda",
      "East African tech",
      "technology solutions provider",
      "Rwanda software engineers",
      "African tech leadership",
      "Kigali based tech company",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
  },
  academy: {
    title: "IshConnect Academy — Tech Training & Coding Bootcamp Rwanda",
    description:
      "Join IshConnect Academy for industry-led tech training in Rwanda. Software engineering, cybersecurity, UI/UX design, and programming bootcamps to launch your career in African tech.",
    canonical: `${SITE_URL}/academy`,
    ogType: "website",
    keywords: [
      "tech academy Rwanda",
      "programming bootcamp",
      "software engineering course",
      "cybersecurity training",
      "UI UX design course",
      "coding bootcamp Kigali",
      "African tech talent",
      "learn coding Rwanda",
      "tech training Kigali",
      "IT training Rwanda",
      "computer programming Rwanda",
      "technology education Africa",
      "developer bootcamp",
      "coding academy Africa",
      "software school Kigali",
      "IT certification Rwanda",
      "cyber security course Africa",
      "design course Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Academy", url: "/academy" },
    ],
  },
  contact: {
    title: "Contact IshConnect — Start Your Tech Project in Rwanda",
    description:
      "Start a project, ask a question, or join our community. Contact IshConnect — the leading software development studio in Kigali, Rwanda. We respond within one business day.",
    canonical: `${SITE_URL}/contact`,
    ogType: "website",
    keywords: [
      "contact IshConnect",
      "start a tech project",
      "hire developers Africa",
      "Kigali software agency",
      "software development quote",
      "tech consultation Rwanda",
      "hire software developers Rwanda",
      "web development quote",
      "mobile app development cost",
      "IT consulting Kigali",
      "custom software quote",
      "digital agency Rwanda",
      "technology partners Africa",
      "tech studio contact",
      "Rwanda development agency",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
  },
  solutions: {
    title: "Solutions — Software, Cloud & Cybersecurity Services Rwanda",
    description:
      "End-to-end technology services by IshConnect in Kigali, Rwanda: web and mobile development, cloud infrastructure, cybersecurity, UI/UX design, and backend engineering for African businesses.",
    canonical: `${SITE_URL}/solutions`,
    ogType: "website",
    keywords: [
      "software solutions Africa",
      "cloud services Africa",
      "cybersecurity services",
      "mobile app development",
      "UI UX design services",
      "web development Rwanda",
      "digital platform engineering",
      "backend development Africa",
      "custom software development Africa",
      "cloud computing Rwanda",
      "cyber security Africa",
      "mobile application development Kigali",
      "SaaS development Africa",
      "API development services",
      "DevOps Rwanda",
      "digital transformation services",
      "technology consulting Africa",
      "full stack development",
      "enterprise software Africa",
      "IT solutions Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Solutions", url: "/solutions" },
    ],
  },
  privacy: {
    title: "Privacy Policy — IshConnect | Data Protection Rwanda",
    description:
      "Your privacy matters to IshConnect. Learn how we collect, use, and protect your information in compliance with Rwandan data protection regulations. Read our privacy policy.",
    canonical: `${SITE_URL}/privacy`,
    ogType: "website",
    keywords: [
      "privacy policy",
      "IshConnect privacy",
      "ISHCONNLAB",
      "data protection Rwanda",
      "privacy policy Africa",
      "data privacy Rwanda",
      "personal data protection",
      "technology privacy policy",
      "African data regulations",
      "software company privacy",
      "information security policy",
      "data handling practices",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Privacy Policy", url: "/privacy" },
    ],
  },
  work: {
    title: "Our Work — Portfolio & Case Studies | IshConnect Rwanda",
    description:
      "Explore IshConnect's portfolio of digital products — fintech, healthtech, agritech, and consumer platforms built for the African market. See how we drive results through technology.",
    canonical: `${SITE_URL}/work`,
    ogType: "website",
    keywords: [
      "IshConnect portfolio",
      "fintech case study",
      "healthtech Africa",
      "agritech projects",
      "African tech work",
      "software portfolio Rwanda",
      "digital products Africa",
      "fintech development Africa",
      "health technology Rwanda",
      "agricultural technology Africa",
      "software projects Kigali",
      "mobile app portfolio",
      "digital transformation case studies",
      "Rwanda software company projects",
      "African innovation examples",
      "tech startup portfolio",
      "web development examples",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Work", url: "/work" },
    ],
  },
};
