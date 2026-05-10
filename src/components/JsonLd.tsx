import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import type { Program } from "@/lib/programs";

function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description:
      "IshConnect delivers world-class software solutions, technology education, and digital transformation services designed for the future of Africa.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
    },
    sameAs: [
      "https://twitter.com/IshConnectRW",
      "https://linkedin.com/company/ishconnect",
      "https://github.com/ishconnect",
    ],
  };

  return <SchemaScript schema={schema} />;
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Software solutions, technology education and digital transformation for the future of Africa.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <SchemaScript schema={schema} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return <SchemaScript schema={schema} />;
}

export function CourseJsonLd({ program }: { program: Program }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.summary,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    timeRequired: program.duration,
    offers: {
      "@type": "Offer",
      category: "Paid",
    },
    teaches: program.tags.join(", "),
  };

  return <SchemaScript schema={schema} />;
}

export function ServiceJsonLd({ name, description }: { name: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    areaServed: {
      "@type": "Country",
      name: "RW",
    },
  };

  return <SchemaScript schema={schema} />;
}
