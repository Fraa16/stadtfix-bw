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
        <div className="container-site max-w-3xl space-y-8 text-[16px] leading-relaxed">
          <p className="border border-line bg-mist p-5 text-[14px] text-steel">
            Hinweis: Diese Seite ist ein Platzhalter-Gerüst. Die vollständige
            Datenschutzerklärung wird vor dem Livegang von der bestehenden
            Website übernommen bzw. DSGVO-konform erstellt.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold">Cookies und Einwilligung</h2>
            <p className="mt-3 text-steel">
              Diese Website verwendet standardmäßig ausschließlich technisch
              notwendige Cookies. Dazu gehört ein Cookie, das Ihre
              Cookie-Auswahl speichert:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-steel">
              <li>
                <strong className="font-semibold text-ink">sf_consent</strong>{" "}
                (notwendig): speichert Ihre Einwilligungs-Entscheidung, damit der
                Cookie-Hinweis nicht bei jedem Besuch erneut erscheint.
                Speicherdauer: rund 6 Monate.
              </li>
            </ul>
            <p className="mt-3 text-steel">
              Optionale Cookies und Dienste teilen wir in die Kategorien{" "}
              <strong className="font-semibold text-ink">Statistik</strong> und{" "}
              <strong className="font-semibold text-ink">Marketing / Externe
              Medien</strong> ein. Diese werden erst gesetzt bzw. geladen, wenn
              Sie im Cookie-Banner ausdrücklich zustimmen (Opt-in). Ohne Ihre
              Einwilligung findet in diesen Kategorien keine Verarbeitung statt.
            </p>
            <p className="mt-3 text-steel">
              Ihre Einwilligung ist freiwillig und jederzeit mit Wirkung für die
              Zukunft widerrufbar. Sie können Ihre Auswahl über den Link{" "}
              <strong className="font-semibold text-ink">
                „Cookie-Einstellungen"
              </strong>{" "}
              im Footer jederzeit anpassen. Rechtsgrundlage ist § 25 Abs. 1 TDDDG
              in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO (Einwilligung); für
              notwendige Cookies § 25 Abs. 2 TDDDG.
            </p>
          </div>
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
