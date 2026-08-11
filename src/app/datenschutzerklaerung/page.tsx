import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von StadtFix, Fachbetrieb für Taubenabwehr in Nürtingen.",
  alternates: { canonical: "/datenschutzerklaerung/" },
  robots: { index: false },
};

const h2 = "font-display text-xl font-bold text-ink";
const p = "mt-3 text-steel";
const ul = "mt-3 list-disc space-y-1 pl-5 text-steel";
const strong = "font-semibold text-ink";

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
          <p className="text-steel">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie darüber, welche Daten beim Besuch dieser Website
            verarbeitet werden, zu welchem Zweck und auf welcher Rechtsgrundlage.
          </p>

          <div>
            <h2 className={h2}>1. Verantwortlicher</h2>
            <p className={p}>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className={p}>
              {site.legalName}
              <br />
              Inhaber: {site.founder}
              <br />
              {site.contact.street}
              <br />
              {site.contact.zipCity}
              <br />
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
            <h2 className={h2}>2. Allgemeines zur Datenverarbeitung</h2>
            <p className={p}>
              Personenbezogene Daten sind alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen. Wir
              verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung
              der Website und unserer Leistungen erforderlich ist oder Sie
              eingewilligt haben.
            </p>
            <p className={p}>
              Rechtsgrundlagen der Verarbeitung sind insbesondere Ihre Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO), die Erfüllung eines Vertrags oder
              vorvertraglicher Maßnahmen (lit. b) sowie unsere berechtigten
              Interessen an einem sicheren, funktionsfähigen Webauftritt (lit. f).
            </p>
          </div>

          <div>
            <h2 className={h2}>3. Ihre Rechte</h2>
            <p className={p}>Ihnen stehen gegenüber uns folgende Rechte zu:</p>
            <ul className={ul}>
              <li>Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO),</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
              <li>Löschung (Art. 17 DSGVO),</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
            </ul>
            <p className={p}>
              Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Zudem haben Sie das Recht,
              sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig
              ist:
            </p>
            <p className={p}>
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg
              <br />
              Königstraße 10a, 70173 Stuttgart
              <br />
              <a
                href="https://www.baden-wuerttemberg.datenschutz.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                www.baden-wuerttemberg.datenschutz.de
              </a>
            </p>
          </div>

          <div>
            <h2 className={h2}>4. Websitebesuch, Server-Logfiles und Hosting</h2>
            <p className={p}>
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter
              automatisch Informationen erfasst, die Ihr Browser übermittelt und die
              technisch erforderlich sind, um Ihnen die Website anzuzeigen und die
              Stabilität und Sicherheit zu gewährleisten (Server-Logfiles): IP-Adresse,
              Datum und Uhrzeit der Anfrage, aufgerufene Seite/Datei, übertragene
              Datenmenge, Referrer-URL sowie Browsertyp und Betriebssystem.
            </p>
            <p className={p}>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an einer sicheren und zuverlässigen Bereitstellung der Website).
            </p>
            <p className={p}>
              Die Website wird gehostet bei der{" "}
              <span className={strong}>Vercel Inc.</span>, 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA. Vercel verarbeitet die vorgenannten Daten in
              unserem Auftrag als Auftragsverarbeiter (Art. 28 DSGVO). Dabei kann es
              zu einer Übermittlung in die USA kommen; diese ist durch den Abschluss
              der EU-Standardvertragsklauseln (Art. 46 DSGVO) sowie ergänzende
              Maßnahmen abgesichert.
            </p>
          </div>

          <div>
            <h2 className={h2}>5. SSL-/TLS-Verschlüsselung</h2>
            <p className={p}>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie am „https://" in der Adresszeile
              Ihres Browsers.
            </p>
          </div>

          <div>
            <h2 className={h2}>6. Cookies</h2>
            <p className={p}>
              Diese Website verwendet keine Cookies und speichert ohne Ihr Zutun
              keine Informationen auf Ihrem Endgerät. Es werden weder
              Analyse- noch Marketing-Cookies gesetzt. Die eingesetzte
              Reichweitenmessung (siehe Ziffer 9) arbeitet cookiefrei.
            </p>
          </div>

          <div>
            <h2 className={h2}>7. Kontaktaufnahme</h2>
            <p className={p}>
              <span className={strong}>Kontaktformular.</span> Das Formular auf dieser
              Website speichert Ihre Eingaben nicht auf unseren Servern. Beim Absenden
              wird aus Ihren Angaben eine Nachricht zusammengestellt und – je nach
              Ihrer Wahl – Ihr WhatsApp oder Ihr E-Mail-Programm mit dieser
              vorbereiteten Nachricht geöffnet. Der eigentliche Versand erfolgt erst
              durch Sie. Rechtsgrundlage für die anschließende Bearbeitung Ihrer
              Anfrage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO.
            </p>
            <p className={p}>
              <span className={strong}>Kontakt über WhatsApp.</span> Wenn Sie uns über
              den WhatsApp-Button oder das Formular via WhatsApp kontaktieren, werden
              die übermittelten Daten (u. a. Ihre Telefonnummer, der Nachrichteninhalt
              und Metadaten) durch die WhatsApp Ireland Limited bzw. Meta Platforms
              Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland, verarbeitet.
              Dabei kann es zu einer Übermittlung in die USA kommen. Für diese
              Verarbeitung gilt die{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Datenschutzrichtlinie von WhatsApp/Meta
              </a>
              . Die Nutzung von WhatsApp erfolgt auf Ihre Initiative; Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. a und lit. b DSGVO. Möchten Sie dies vermeiden,
              erreichen Sie uns jederzeit auch per E-Mail oder Telefon.
            </p>
            <p className={p}>
              <span className={strong}>E-Mail und Telefon.</span> Bei einer
              Kontaktaufnahme per E-Mail oder Telefon verarbeiten wir Ihre Angaben zur
              Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b und lit. f DSGVO). Wir
              löschen diese Daten, sobald sie für die Zweckerreichung nicht mehr
              erforderlich sind, und beachten gesetzliche Aufbewahrungsfristen.
            </p>
          </div>

          <div>
            <h2 className={h2}>8. Schriftarten</h2>
            <p className={p}>
              Diese Website bindet Schriftarten lokal ein. Sie werden von unserem
              Server ausgeliefert; beim Aufruf der Website wird keine Verbindung zu
              Servern von Google oder anderen Dritten hergestellt. Es werden hierfür
              keine personenbezogenen Daten an Dritte übertragen.
            </p>
          </div>

          <div>
            <h2 className={h2}>9. Reichweitenmessung (Vercel Web Analytics)</h2>
            <p className={p}>
              Zur statistischen Auswertung der Websitenutzung setzen wir Vercel Web
              Analytics ein, einen Dienst der Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA. Der Dienst arbeitet{" "}
              <span className={strong}>cookiefrei</span>: Es werden keine Cookies
              gesetzt und keine Informationen auf Ihrem Endgerät gespeichert oder
              ausgelesen. Erfasst werden ausschließlich aggregierte, anonymisierte
              Nutzungsdaten (z. B. aufgerufene Seiten, ungefähre Herkunft,
              verwendeter Gerätetyp); es findet kein geräteübergreifendes Tracking
              und keine Bildung von Nutzerprofilen statt. IP-Adressen werden nicht
              dauerhaft gespeichert.
            </p>
            <p className={p}>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes
              Interesse liegt in der anonymen, datensparsamen Messung der
              Reichweite und der Verbesserung unseres Angebots. Da die Verarbeitung
              cookiefrei und anonymisiert erfolgt, ist hierfür keine Einwilligung
              nach § 25 TDDDG erforderlich. Sie haben das Recht, dieser
              Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, jederzeit zu widersprechen (Art. 21 DSGVO). Eine Übermittlung
              in die USA ist durch EU-Standardvertragsklauseln abgesichert.
            </p>
            <p className={p}>
              Darüber hinaus setzen wir keine weiteren Tracking- oder
              Profiling-Dienste ein und führen keine automatisierte
              Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22
              DSGVO durch.
            </p>
          </div>

          <div>
            <h2 className={h2}>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className={p}>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die
              Weiterentwicklung der Website oder geänderte gesetzliche Vorgaben kann
              es notwendig werden, sie anzupassen.
            </p>
            <p className={p}>Stand: August 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
