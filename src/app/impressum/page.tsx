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
        <div className="container-site max-w-3xl space-y-8 text-[16px] leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3 text-steel">
              {site.legalName}
              <br />
              Inhaber: {site.founder}
              <br />
              {site.contact.street}
              <br />
              {site.contact.zipCity}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Kontakt</h2>
            <p className="mt-3 text-steel">
              Telefon:{" "}
              <a href={`tel:${site.contact.phoneE164}`} className="underline underline-offset-4">
                {site.contact.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4">
                {site.contact.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Umsatzsteuer-ID</h2>
            <p className="mt-3 text-steel">
              <span className="placeholder-fact">{site.placeholders.vatId}</span>
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
