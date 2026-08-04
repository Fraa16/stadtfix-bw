import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von StadtFix, Fachbetrieb für Taubenabwehr in Nürtingen.",
  alternates: { canonical: "/impressum/" },
  robots: { index: false },
};

const h2 = "font-display text-xl font-bold text-ink";
const p = "mt-3 text-steel";

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
            <h2 className={h2}>Angaben gemäß § 5 DDG</h2>
            <p className={p}>
              {site.legalName}
              <br />
              Inhaber: {site.founder}
              <br />
              {site.contact.street}
              <br />
              {site.contact.zipCity}
              <br />
              Unternehmensform: Einzelunternehmen
            </p>
          </div>
          <div>
            <h2 className={h2}>Kontakt</h2>
            <p className={p}>
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
            <h2 className={h2}>Umsatzsteuer</h2>
            <p className={p}>
              Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer
              berechnet und daher keine Umsatzsteuer-Identifikationsnummer
              ausgewiesen.
            </p>
          </div>
          <div>
            <h2 className={h2}>Redaktionell verantwortlich</h2>
            <p className={p}>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
              <br />
              {site.founder}
              <br />
              {site.contact.street}, {site.contact.zipCity}
            </p>
          </div>
          <div>
            <h2 className={h2}>Verbraucherstreitbeilegung</h2>
            <p className={p}>
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen (§ 36 VSBG).
            </p>
          </div>
          <div>
            <h2 className={h2}>Haftung für Inhalte</h2>
            <p className={p}>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Die Inhalte dieser Website wurden mit größter
              Sorgfalt erstellt; für die Richtigkeit, Vollständigkeit und Aktualität
              können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>
          <div>
            <h2 className={h2}>Haftung für Links</h2>
            <p className={p}>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites
              Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden
              Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>
          <div>
            <h2 className={h2}>Urheberrecht</h2>
            <p className={p}>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
              als solche gekennzeichnet. Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
              bedürfen unserer schriftlichen Zustimmung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
