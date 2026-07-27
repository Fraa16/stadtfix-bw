import Image from "next/image";
import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

const methods = [
  {
    title: "Edelstahl-Spikes",
    text: "Verhindern das Landen auf Simsen, Trägern und Dachrinnen. Rostfrei, UV-beständig und für die Tiere ungefährlich: Sie finden schlicht keinen Halt.",
    image: "/images/blog/taubenabwehr-kosten.webp",
    alt: "Montage von Edelstahl-Spikes auf einer Mauerkrone",
  },
  {
    title: "Schutznetze",
    text: "Verschließen Nistbereiche komplett: Balkone, Lichthöfe, Hallendecken, Parkdecks. Fachgerecht gespannt sind sie aus wenigen Metern Entfernung kaum sichtbar.",
    image: "/images/segments/mehrfamilienhaeuser.webp",
    alt: "Kaum sichtbares Balkonschutznetz an einem Wohngebäude",
  },
  {
    title: "Vergrämungssysteme",
    text: "Für Flächen, auf denen Spikes und Netze nicht montierbar sind. Wir setzen sie gezielt ein: nicht als Allheilmittel, sondern als Ergänzung.",
    image: "/images/methods/vergraemung.webp",
    alt: "Taube fliegt unverletzt von einer gesicherten Fläche auf",
  },
];

export function MethodsSection() {
  return (
    <section className="bg-ink bg-grid-dark py-20 text-white md:py-28">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Kicker n="02">Systeme</Kicker>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                Edelstahl-Spikes, Schutznetze, Vergrämung: was wann wirkt
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-steel-light">
              Es gibt kein System, das überall passt. Welches wirkt, hängt von
              Nistdruck, Fläche und Zugänglichkeit ab. Das klären wir bei der
              Begehung.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {methods.map((m, i) => (
            <Reveal key={m.title} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col border border-line-dark bg-ink-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-soft/90 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 pt-5">
                  <span className="mb-3 block h-[2px] w-10 bg-accent" aria-hidden />
                  <h3 className="font-display text-[19px] font-bold tracking-tight">{m.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-steel-light">{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/taubenabwehr/"
            className="mt-12 inline-flex items-center gap-2 font-display text-[14px] font-bold uppercase tracking-[0.12em] text-accent transition-colors hover:text-white"
          >
            Alle Methoden im Detail
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
