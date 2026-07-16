import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { TileGrid } from "@/components/sections/TileGrid";
import { MethodsSection } from "@/components/sections/MethodsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, faqPageSchema, howToSchema } from "@/lib/schema";
import { homeFaqs, steps } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Taubenabwehr Baden-Württemberg | 3 Jahre Garantie | StadtFix" },
  description:
    "Taubenabwehr für Gewerbe und Privat in Nürtingen, Stuttgart und ganz Baden-Württemberg. Edelstahl-Spikes und Netze, tierschutzkonform, 3 Jahre Garantie. Jetzt anfragen.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqPageSchema(homeFaqs)} />
      <JsonLd data={howToSchema("Wie läuft ein Projekt mit StadtFix ab?", steps)} />

      <HomeHero />
      <StatsBand />
      <TileGrid />
      <MethodsSection />
      <StepsSection />
      <AboutTeaser />
      <BlogTeaser />
      <FaqSection heading="Häufige Fragen zur Taubenabwehr" faqs={homeFaqs} n="06" />
      <CtaSection
        lines={["Tauben am Gebäude?", "Klären wir vor Ort."]}
        body="Kostenlose Begehung, festes Angebot, keine Verpflichtung. Beschreiben Sie kurz das Problem. Wir melden uns innerhalb von 24 Stunden."
        button="Begehung anfragen"
        micro="Antwort innerhalb von 24 Stunden. Begehung und Angebot sind kostenlos."
        image="/images/ueber-uns.webp"
      />
    </>
  );
}
