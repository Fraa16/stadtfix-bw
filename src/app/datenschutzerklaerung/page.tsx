import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von StadtFix, Fachbetrieb für Taubenabwehr in Nürtingen.",
  alternates: { canonical: "/datenschutzerklaerung/" },
  robots: { index: false },
};

/**
 * TODO: Datenschutzerklärung der bestehenden Website übernehmen bzw. neu
 * erstellen lassen (DSGVO). Die Struktur unten ist ein Gerüst und keine
 * rechtsgültige Erklärung.
 */
export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Datenschutzerklärung"
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Datenschutzerklärung", href: "/datenschutzerklaerung/" },
        ]}
      />
      <section className="py-16">
        <div className="container-site max-w-3xl !mx-auto space-y-8 text-[16px] leading-relaxed">
          <p className="border border-line bg-mist p-5 text-[14px] text-steel">
            Hinweis: Diese Seite ist ein Platzhalter-Gerüst. Die vollständige
            Datenschutzerklärung wird vor dem Livegang von der bestehenden
            Website übernommen bzw. DSGVO-konform erstellt.
          </p>
          {[
            "Verantwortlicher",
            "Erhebung und Speicherung personenbezogener Daten",
            "Kontaktformular",
            "Hosting",
            "Ihre Rechte",
          ].map((h) => (
            <div key={h}>
              <h2 className="font-display text-xl font-bold">{h}</h2>
              <p className="mt-3 text-steel">
                <span className="placeholder-fact">[Inhalt folgt]</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
