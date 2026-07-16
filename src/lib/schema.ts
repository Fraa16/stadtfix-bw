import { site } from "@/content/site";
import type { Faq } from "@/content/segments";

/**
 * JSON-LD-Builder. NAP-Daten (Telefon, Straße) werden erst ausgegeben,
 * wenn sie in site.ts eingetragen sind — Platzhalter gehören nicht ins Schema.
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.entitySentence,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nürtingen",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    areaServed: site.region.map((city) => ({ "@type": "City", name: city })),
    knowsAbout: [
      "Taubenabwehr",
      "Taubenvergrämung",
      "Edelstahl-Spikes",
      "Schutznetze",
      "Unterflugschutz Photovoltaik",
    ],
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToSchema(
  name: string,
  steps: { title: string; text: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${site.url}/blog/${post.slug}/`,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
    author: {
      "@type": "Person",
      name: site.placeholders.founderName, // TODO: echten Gründernamen in site.ts eintragen
    },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    inLanguage: "de-DE",
  };
}
