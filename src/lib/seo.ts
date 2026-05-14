export const SITE_NAME = "IshConnect";
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
  "IshConnect – Software Development & AI Solutions in Kigali, Rwanda";
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
  const canonical = resolveUrl(props.canonical);

  return {
    title: props.title,
    description: props.description,
    ogTitle: props.ogTitle || props.title,
    ogDescription: props.ogDescription || props.description,
    ogImage: ogImage.url,
    ogImageAlt: props.ogImageAlt || ogImage.alt,
    ogImageWidth: ogImage.width,
    ogImageHeight: ogImage.height,
    ogUrl: canonical,
    ogType: props.ogType || "website",
    canonical,
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
    title: "IshConnect – Custom Software Development & AI Solutions in Rwanda",
    description:
      "IshConnect (ISHCONNLAB) is a Kigali-based technology company delivering custom software, AI solutions, web and mobile app development, cloud infrastructure, cybersecurity, and tech training across Rwanda and Africa.",
    ogTitle: "IshConnect – Custom Software Development & AI Solutions in Rwanda",
    ogDescription:
      "Custom software, AI, web and mobile development, cloud, cybersecurity, and tech training by IshConnect (ISHCONNLAB) in Kigali, Rwanda.",
    canonical: SITE_URL,
    ogType: "website",
    keywords: [
      "IshConnect",
      "ISHCONNLAB",
      "software development Rwanda",
      "web development Kigali",
      "AI solutions Rwanda",
      "mobile app development Rwanda",
      "tech training Rwanda",
      "cybersecurity Rwanda",
      "cloud solutions Rwanda",
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
  softwareDevelopment: {
    title: "Software Development Rwanda | Custom Software Company Kigali | IshConnect",
    description:
      "IshConnect offers custom software development in Kigali, Rwanda. We build scalable web apps, enterprise platforms, and SaaS products for African and global businesses.",
    canonical: `${SITE_URL}/software-development-rwanda`,
    ogType: "website",
    keywords: [
      "software development Rwanda",
      "custom software company Kigali",
      "software development services Rwanda",
      "enterprise software Rwanda",
      "SaaS development Africa",
      "software engineering Kigali",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Software Development Rwanda", url: "/software-development-rwanda" },
    ],
  },
  webDevelopment: {
    title: "Web Development Kigali | Website Design Company Rwanda | IshConnect",
    description:
      "Professional web development in Kigali, Rwanda. IshConnect builds modern websites, web applications, and e-commerce platforms for businesses across East Africa.",
    canonical: `${SITE_URL}/web-development-kigali`,
    ogType: "website",
    keywords: [
      "web development Kigali",
      "website design Rwanda",
      "web development services Rwanda",
      "e-commerce development Kigali",
      "web application development Africa",
      "frontend development Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Web Development Kigali", url: "/web-development-kigali" },
    ],
  },
  mobileApps: {
    title: "Mobile App Development Rwanda | iOS & Android Developer Kigali | IshConnect",
    description:
      "Mobile app development in Rwanda by IshConnect. We build iOS and Android apps using React Native and Flutter for startups and enterprises in Kigali and across Africa.",
    canonical: `${SITE_URL}/mobile-app-development-rwanda`,
    ogType: "website",
    keywords: [
      "mobile app development Rwanda",
      "iOS developer Kigali",
      "Android developer Rwanda",
      "React Native development Africa",
      "Flutter developer Kigali",
      "mobile app company Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Mobile App Development Rwanda", url: "/mobile-app-development-rwanda" },
    ],
  },
  aiSolutions: {
    title: "AI Solutions Rwanda | Machine Learning Company Kigali | IshConnect",
    description:
      "AI and machine learning solutions in Rwanda. IshConnect delivers intelligent automation, predictive analytics, NLP, and computer vision systems for African businesses.",
    canonical: `${SITE_URL}/ai-solutions-rwanda`,
    ogType: "website",
    keywords: [
      "AI solutions Rwanda",
      "machine learning company Kigali",
      "artificial intelligence Rwanda",
      "AI consulting Africa",
      "predictive analytics Rwanda",
      "NLP solutions Kigali",
      "computer vision Africa",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "AI Solutions Rwanda", url: "/ai-solutions-rwanda" },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity Services Rwanda | Security Company Kigali | IshConnect",
    description:
      "Cybersecurity services in Rwanda by IshConnect. We offer penetration testing, security audits, threat monitoring, and compliance solutions for businesses in Kigali and East Africa.",
    canonical: `${SITE_URL}/cybersecurity-rwanda`,
    ogType: "website",
    keywords: [
      "cybersecurity Rwanda",
      "cybersecurity services Kigali",
      "penetration testing Rwanda",
      "security audit Kigali",
      "threat monitoring Africa",
      "IT security company Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Cybersecurity Rwanda", url: "/cybersecurity-rwanda" },
    ],
  },
  cloudServices: {
    title: "Cloud Services Rwanda | Cloud Solutions Kigali | IshConnect",
    description:
      "Cloud infrastructure and DevOps services in Rwanda. IshConnect provides cloud migration, serverless architecture, CI/CD pipelines, and managed cloud solutions in Kigali.",
    canonical: `${SITE_URL}/cloud-services-rwanda`,
    ogType: "website",
    keywords: [
      "cloud services Rwanda",
      "cloud solutions Kigali",
      "cloud migration Africa",
      "DevOps services Rwanda",
      "serverless architecture Kigali",
      "cloud consulting Rwanda",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Cloud Services Rwanda", url: "/cloud-services-rwanda" },
    ],
  },
  techTraining: {
    title: "Tech Training Rwanda | Coding Bootcamp Kigali | IshConnect Academy",
    description:
      "Tech training and coding bootcamps in Rwanda by IshConnect Academy. Learn full stack development, AI, cybersecurity, cloud computing, and UI/UX design in Kigali.",
    canonical: `${SITE_URL}/tech-training-rwanda`,
    ogType: "website",
    keywords: [
      "tech training Rwanda",
      "coding bootcamp Kigali",
      "programming courses Rwanda",
      "IT training Kigali",
      "software engineering course Rwanda",
      "tech academy Rwanda",
      "learn coding Kigali",
    ],
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Tech Training Rwanda", url: "/tech-training-rwanda" },
    ],
  },
};
