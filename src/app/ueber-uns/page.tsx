import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { Kicker } from "@/components/Kicker";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Über StadtFix | Taubenabwehr aus Nürtingen" },
  description:
    "StadtFix ist ein Fachbetrieb für Taubenabwehr aus Nürtingen: Edelstahl statt Billigmaterial, 3 Jahre Garantie, ein Ansprechpartner von Begehung bis Montage.",
  alternates: { canonical: "/ueber-uns/" },
};

const differences = [
  {
    title: "Rostfreier Edelstahl, ohne Ausnahme.",
    text: "Keine Kunststoff-Spikes, keine verzinkten Kompromisse. Material, das so lange hält wie das Gebäude, an dem es hängt.",
  },
  {
    title: "3 Jahre Garantie auf jede Montage.",
    text: "Löst sich ein Netz, kippt ein Spike-Träger: Wir kommen wieder und beheben es. Ohne Diskussion, ohne Rechnung.",
  },
  {
    title: "Ein Ansprechpartner, von Anfang bis Ende.",
    text: "Begehung, Angebot, Montage, Garantiefall: immer dieselbe Person. Keine Hotline, keine Übergaben, keine „da müsste ich mal nachfragen“.",
  },
  {
    title: "Festpreis nach Begehung.",
    text: "Der Preis im Angebot ist der Preis auf der Rechnung. Zugangstechnik, Reinigung, Entsorgung: alles enthalten, nichts kommt nach.",
  },
  {
    title: "Tierschutzkonform, aus Überzeugung statt als Fußnote.",
    text: "Unsere Systeme verhindern Landen und Nisten, ohne die Tiere zu verletzen. Gift, Klebepasten und scharfe Spitzen setzen wir nicht ein. Punkt.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <PageHero
        kicker="Über StadtFix"
        title="Ein Fachbetrieb für Taubenabwehr: aus Nürtingen, für Baden-Württemberg"
        subline="StadtFix ist ein Fachbetrieb für Taubenabwehr mit Sitz in Nürtingen. Wir montieren Edelstahl-Spikes, Schutznetze und Vergrämungssysteme an Wohn- und Gewerbegebäuden in Stuttgart, Esslingen, Reutlingen, Tübingen und ganz Baden-Württemberg."
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Über uns", href: "/ueber-uns/" },
        ]}
      />

      {/* Werdegang */}
      <section className="py-16 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Kicker n="01">Werdegang</Kicker>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              Wer hinter StadtFix steht
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-steel">
              {site.founder} hat{" "}
              {site.facts.yearsExperience} Jahre{" "}
              in der Taubenabwehr gearbeitet und dabei zahlreiche Montagen an
              Parkhäusern, Industriehallen und Wohnhäusern ausgeführt, bevor er{" "}
              {site.facts.foundingYear}{" "}
              StadtFix gegründet hat. Das heißt für Sie: Bei der Begehung steht
              kein Verkäufer auf Ihrem Dach, sondern jemand, der das System
              hinterher selbst montiert.
            </p>
          </div>
          <div className="relative mr-4 mt-4">
            <div className="absolute -right-4 -top-4 h-full w-full border border-accent" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src="/images/ueber-uns.webp"
              alt="Taubenabwehr-Montage an einer Fassade, Fachbetrieb StadtFix aus Nürtingen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Warum StadtFix */}
      <section className="border-t border-line bg-mist py-16 md:py-24">
        <div className="container-site">
          <Kicker n="02">Warum StadtFix</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            Woran Sie den Unterschied merken
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differences.map((d) => (
              <div key={d.title} className="border border-line bg-white p-7">
                <h3 className="font-display text-[17px] font-bold tracking-tight">{d.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-steel">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl">
          <Kicker n="03">Einsatzgebiet</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            Wo wir im Einsatz sind
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-steel">
            Unser Sitz ist Nürtingen. Von dort sind wir in kurzer Zeit in
            Stuttgart, Esslingen, Reutlingen, Tübingen, Kirchheim, Göppingen
            und dem gesamten mittleren Neckarraum. Für größere Objekte
            übernehmen wir Projekte in ganz Baden-Württemberg.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {site.region.map((city) => (
              <span
                key={city}
                className="border border-line bg-mist px-4 py-1.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-steel"
              >
                {city}
              </span>
            ))}
            <span className="border border-accent bg-white px-4 py-1.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-accent">
              Ganz Baden-Württemberg
            </span>
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="border-t border-line bg-ink py-16 text-white md:py-24">
        <div className="container-site max-w-3xl">
          <Kicker n="04">Arbeitsweise</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            Wie wir arbeiten
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-steel-light">
            Wir schauen uns jedes Gebäude an, bevor wir einen Preis nennen,
            denn Ferndiagnosen führen zu falschen Systemen. Wir empfehlen die
            Lösung, die das Problem löst, nicht die mit der größten
            Auftragssumme: Manchmal reichen zwölf Meter Spikes, manchmal
            braucht es das Netz. Und wir hinterlassen die Baustelle so, dass
            Sie nicht merken, dass wir da waren. Außer daran, dass die Tauben
            weg sind.
          </p>
        </div>
      </section>

      <CtaSection
        lines={["Lernen Sie uns am Gebäude kennen,", "nicht am Telefon."]}
        body="Kostenlose Begehung, festes Angebot, keine Verpflichtung."
        button="Begehung anfragen"
        micro="Antwort innerhalb von 24 Stunden."
      />
    </>
  );
}
