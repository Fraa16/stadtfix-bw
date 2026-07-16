import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Kicker } from "@/components/Kicker";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt: Taubenabwehr anfragen | StadtFix Nürtingen",
  description:
    "Taubenproblem? Beschreiben Sie es kurz: StadtFix antwortet innerhalb von 24 Stunden mit Terminvorschlag. Begehung und Angebot kostenlos. Nürtingen und ganz BW.",
  alternates: { canonical: "/kontakt/" },
};

const followUpSteps = [
  {
    title: "Rückmeldung innerhalb von 24 Stunden.",
    text: "Meist mit konkretem Terminvorschlag.",
  },
  {
    title: "Kostenlose Begehung vor Ort.",
    text: "Wir sehen uns Nistplätze und Zugänge direkt am Gebäude an.",
  },
  {
    title: "Festpreis-Angebot.",
    text: "Schriftlich, mit klarem Leistungsumfang. Sie entscheiden in Ruhe.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <PageHero
        kicker="Kontakt"
        title="Beschreiben Sie das Problem, den Rest übernehmen wir"
        subline="Kurz schildern, was Sie beobachten: wo die Tauben sitzen, seit wann, was schon versucht wurde. Fotos helfen. Sie erhalten innerhalb von 24 Stunden eine Antwort, meist direkt mit Terminvorschlag für die kostenlose Begehung."
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Kontakt", href: "/kontakt/" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="sr-only">Anfrageformular</h2>
            <ContactForm />
          </div>

          <aside className="space-y-10">
            <div className="border border-line bg-mist p-7">
              <h2 className="font-display text-[18px] font-bold tracking-tight">
                Lieber direkt anrufen?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-steel">
                <span className="placeholder-fact">{site.placeholders.phone}</span>, erreichbar{" "}
                <span className="placeholder-fact">{site.placeholders.phoneHours}</span>.
                <br />
                Außerhalb der Zeiten: Sprechen Sie aufs Band oder schreiben Sie
                uns, wir melden uns am nächsten Werktag.
              </p>
              <p className="mt-4 text-[15px] text-steel">
                <strong className="text-ink">Adresse:</strong>{" "}
                <span className="placeholder-fact">{site.placeholders.street}</span>,{" "}
                <span className="placeholder-fact">{site.placeholders.zipCity}</span>
              </p>
            </div>

            <div>
              <Kicker>Nach der Anfrage</Kicker>
              <h2 className="font-display text-[18px] font-bold tracking-tight">
                Wie es nach Ihrer Anfrage weitergeht
              </h2>
              <ol className="mt-5 space-y-5">
                {followUpSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center bg-ink font-display text-[14px] font-bold text-white"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-bold">{s.title}</h3>
                      <p className="text-[14px] text-steel">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Trust-Leiste */}
      <section className="border-t border-line bg-ink py-8 text-white">
        <div className="container-site">
          <p className="text-center text-[14px] text-steel-light">
            3 Jahre Garantie auf jede Montage · Rostfreier Edelstahl ·
            Einsatzgebiet Nürtingen, Stuttgart, Esslingen, Reutlingen, Tübingen
            und ganz Baden-Württemberg
          </p>
        </div>
      </section>
    </>
  );
}
