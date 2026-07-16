import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von StadtFix, Fachbetrieb für Taubenabwehr in Nürtingen.",
  alternates: { canonical: "/impressum/" },
  robots: { index: false },
};

/**
 * TODO: Inhalte des bestehenden Impressums der alten Website übernehmen
 * bzw. rechtlich prüfen lassen. Die Struktur unten ist ein Gerüst.
 */
export default function ImpressumPage() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Impressum"
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Impressum", href: "/impressum/" },
        ]}
      />
      <section className="py-16">
        <div className="container-site max-w-3xl !mx-auto space-y-8 text-[16px] leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3 text-steel">
              StadtFix
              <br />
              Inhaber: <span className="placeholder-fact">{site.placeholders.founderName}</span>
              <br />
              <span className="placeholder-fact">{site.placeholders.street}</span>
              <br />
              <span className="placeholder-fact">{site.placeholders.zipCity}</span>
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Kontakt</h2>
            <p className="mt-3 text-steel">
              Telefon: <span className="placeholder-fact">{site.placeholders.phone}</span>
              <br />
              E-Mail: <span className="placeholder-fact">{site.placeholders.email}</span>
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Umsatzsteuer-ID</h2>
            <p className="mt-3 text-steel">
              <span className="placeholder-fact">[USt-IdNr. bzw. Hinweis Kleinunternehmerregelung]</span>
            </p>
          </div>
          <p className="border border-line bg-mist p-5 text-[14px] text-steel">
            Hinweis: Dieses Impressum ist ein Platzhalter-Gerüst. Die
            vollständigen Angaben werden vor dem Livegang von der bestehenden
            Website übernommen und rechtlich geprüft.
          </p>
        </div>
      </section>
    </>
  );
}
