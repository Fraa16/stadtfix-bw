import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Ratgeber: Taubenabwehr verständlich erklärt",
  description:
    "Kosten, Methoden, Rechtliches, WEG-Beschluss und mehr: Der StadtFix-Ratgeber beantwortet die häufigsten Fragen zur Taubenabwehr, ehrlich und ohne Verkäufer-Brille.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  return (
    <>
      <PageHero
        kicker="Ratgeber"
        title="Antworten, bevor Sie anfragen"
        subline="Was kostet Taubenabwehr, was ist rechtlich erlaubt, welche Methode passt zu Ihrem Gebäude: Hier beantworten wir die Fragen, die uns am häufigsten gestellt werden."
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Ratgeber", href: "/blog/" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CtaSection
        lines={["Die Antwort nicht gefunden?", "Fragen Sie uns direkt."]}
        button="Kostenlose Begehung anfragen"
        micro="Antwort innerhalb von 24 Stunden."
      />
    </>
  );
}
