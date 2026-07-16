import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Taubenabwehr: Methoden, Kosten, Ablauf | StadtFix" },
  description:
    "Welche Taubenabwehr wirkt bei welchem Gebäude? Spikes, Netze, Vergrämung im Überblick: tierschutzkonform, mit 3 Jahren Garantie. Von StadtFix aus Nürtingen.",
  alternates: { canonical: "/taubenabwehr/" },
};

const methodDetails = [
  {
    title: "Edelstahl-Spikes",
    text: "Stumpfe Spitzen aus rostfreiem Edelstahl verhindern das Landen auf Simsen, Trägern, Dachrinnen und Werbetafeln. Für die Tiere ungefährlich: Sie finden keinen Halt und weichen aus. Geeignet für schmale Landeflächen, nicht für geschlossene Nistbereiche.",
  },
  {
    title: "Schutznetze",
    text: "Verschließen ganze Bereiche: Balkone, Lichthöfe, Hallendecken, Parkdecks, Unterdachkonstruktionen. Fachgerecht gespannt sind sie kaum sichtbar und die wirksamste Lösung bei starkem Befall. Entscheidend ist die Montage: Schlecht gespannte Netze werden zur Falle für die Tiere und sind damit ein Tierschutzproblem.",
  },
  {
    title: "Drahtsysteme",
    text: "Gespannte Edelstahldrähte auf Geländern und Simsen machen das Absitzen instabil. Optisch die dezenteste Lösung, wirksam aber nur bei korrekter Spannhöhe: Sonst fliegen Tauben darüber oder schlüpfen darunter durch.",
  },
  {
    title: "Vergrämungssysteme",
    text: "Optische und akustische Systeme für Flächen, auf denen mechanischer Schutz nicht montierbar ist. Wir setzen sie als Ergänzung ein, nicht als Hauptlösung, denn Tauben gewöhnen sich an Reize, die keine physische Barriere haben.",
  },
  {
    title: "Reinigung & Desinfektion",
    text: "Vor der Montage entfernen wir Kot und Nistmaterial fachgerecht und desinfizieren die Flächen. Ohne diesen Schritt bleibt der Geruch, und mit ihm der Rückkehr-Anreiz für die Tiere.",
  },
];

const tableRows = [
  { area: "Fabriken & Unternehmen", systems: "Hallennetze, Spikes auf Trägern", slug: "fabriken-unternehmen" },
  { area: "Parkhäuser", systems: "Netzsysteme, Spikes auf Simsen", slug: "parkhaeuser" },
  { area: "Photovoltaikanlagen", systems: "Unterflugschutz, PV-Clips", slug: "photovoltaikanlagen" },
  { area: "Bürokomplexe", systems: "Dezente Spikes, Innenhof-Netze", slug: "buerokomplexe" },
  { area: "Mehrfamilienhäuser", systems: "Balkonnetze, Spikes an Dachrinnen", slug: "mehrfamilienhaeuser" },
  { area: "Einfamilienhäuser", systems: "Kompakte Spikes, punktuelle Netze", slug: "einfamilienhaeuser" },
  { area: "Einkaufszentren", systems: "Atrium-Netze, Spikes an Vordächern", slug: "einkaufszentren" },
  { area: "Stadien", systems: "Großflächen-Netze, Träger-Spikes", slug: "stadien" },
  { area: "Innenstadthäuser & Altbau", systems: "Farblich angepasste, denkmalkonforme Systeme", slug: "innenstadthaeuser" },
];

const hubFaqs = [
  {
    q: "Warum ist Taubenabwehr am Gebäude notwendig?",
    a: "Taubenkot ist säurehaltig und greift Beton, Naturstein und Metall an. Getrocknet kann er Krankheitserreger über die Atemluft übertragen, auf Gehwegen und Treppen wird er zur Rutschgefahr. Nistmaterial verstopft Dachrinnen und liegt an PV-Kabeln. Je länger ein Nistplatz besteht, desto stärker der Besiedlungsdruck, denn Tauben kehren an etablierte Plätze zurück.",
  },
  {
    q: "Was ist bei der Taubenabwehr erlaubt?",
    a: "Tauben dürfen vertrieben, aber nicht verletzt oder getötet werden, denn sie stehen unter Tierschutz. Zulässig sind Systeme, die das Landen und Nisten verhindern: Spikes, Netze, Drähte, Vergrämung. Verboten sind Gift, Klebepasten und scharfe Spitzen. Bei denkmalgeschützten Gebäuden kommen Auflagen der Denkmalbehörde hinzu.",
  },
];

export default function TaubenabwehrHubPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(hubFaqs)} />

      <PageHero
        kicker="Methoden & Einsatzbereiche"
        title="Taubenabwehr für jedes Gebäude: welche Methode wann wirkt"
        subline="Spikes, Netze, Drahtsysteme, Vergrämung: Jedes System hat einen klaren Anwendungsfall und klare Grenzen. Hier finden Sie den Überblick und die passende Lösung für Ihr Gebäude."
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Taubenabwehr", href: "/taubenabwehr/" },
        ]}
        image={{
          src: "/images/hero.webp",
          alt: "Taube landet auf Edelstahl-Spikes einer gesicherten Mauer",
        }}
      />

      {/* Direct-Answer (GEO) */}
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl">
          <Kicker n="01">Warum überhaupt?</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-[2.25rem]">
            Warum ist Taubenabwehr am Gebäude notwendig?
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-steel">
            Taubenkot ist säurehaltig und greift Beton, Naturstein und Metall
            an. Getrocknet kann er Krankheitserreger über die Atemluft
            übertragen, auf Gehwegen und Treppen wird er zur Rutschgefahr.
            Nistmaterial verstopft Dachrinnen und liegt an PV-Kabeln. Je länger
            ein Nistplatz besteht, desto stärker der Besiedlungsdruck, denn
            Tauben kehren an etablierte Plätze zurück.
          </p>
        </div>
      </section>

      {/* Methodenüberblick */}
      <section className="border-t border-line bg-mist py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <Kicker n="02">Systeme</Kicker>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-[2.25rem]">
              Welche Methoden zur Taubenabwehr gibt es?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methodDetails.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 80} className="h-full">
                <div className="group h-full border border-line bg-white p-8 transition-all duration-300 hover:border-ink hover:shadow-elevated">
                  <span className="mb-4 block h-[3px] w-10 bg-accent" aria-hidden />
                  <h3 className="font-display text-[18px] font-bold tracking-tight">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zuordnungstabelle */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <Kicker n="03">Einsatzbereiche</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-[2.25rem]">
            Welche Methode passt zu welchem Gebäude?
          </h2>
          <div className="mt-10 overflow-x-auto border border-line">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em]">
                    Einsatzbereich
                  </th>
                  <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em]">
                    Empfohlene Systeme
                  </th>
                  <th className="px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.12em]">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {tableRows.map((row) => (
                  <tr key={row.slug} className="bg-white hover:bg-mist">
                    <td className="px-6 py-4 font-semibold">{row.area}</td>
                    <td className="px-6 py-4 text-steel">{row.systems}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/taubenabwehr/${row.slug}/`}
                        className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-accent hover:text-ink"
                      >
                        Zur Lösung →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rechtliches */}
      <section className="border-t border-line bg-mist py-16 md:py-24">
        <div className="container-site max-w-3xl">
          <Kicker n="04">Rechtliches</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-[2.25rem]">
            Was ist bei der Taubenabwehr erlaubt?
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-steel">
            Tauben dürfen vertrieben, aber nicht verletzt oder getötet werden,
            denn sie stehen unter Tierschutz. Zulässig sind Systeme, die das
            Landen und Nisten verhindern: Spikes, Netze, Drähte, Vergrämung.
            Verboten sind Gift, Klebepasten und scharfe Spitzen. Bei
            denkmalgeschützten Gebäuden kommen Auflagen der Denkmalbehörde
            hinzu.
          </p>
          <Link
            href="/blog/taubenabwehr-rechtlich/"
            className="mt-6 inline-block font-display text-[14px] font-bold uppercase tracking-[0.12em] text-accent hover:text-ink"
          >
            Ausführlich im Ratgeber: Ist Taubenabwehr genehmigungspflichtig? →
          </Link>
        </div>
      </section>

      <CtaSection
        lines={["Unsicher, welches System passt?", "Das klären wir am Gebäude."]}
        body="Kostenlose Begehung, festes Angebot, 3 Jahre Garantie auf die Montage."
        button="Begehung anfragen"
        micro="Antwort innerhalb von 24 Stunden."
      />
    </>
  );
}
