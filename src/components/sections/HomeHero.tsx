import Image from "next/image";
import { LinkButton } from "@/components/Button";

export function HomeHero() {
  return (
    <section className="relative bg-ink text-white">
      <div className="grid lg:grid-cols-[1fr_44%]">
        {/* Textseite */}
        <div className="relative bg-grid-dark">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-accent"
            aria-hidden
          />
          <div className="container-site py-20 lg:max-w-none lg:py-32 lg:pl-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-16">
            <p className="mb-5 flex items-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
              <span className="inline-block h-px w-8 bg-current" aria-hidden />
              Fachbetrieb aus Nürtingen
            </p>
            <h1 className="max-w-2xl font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-tight md:text-[2.9rem] xl:text-[3.3rem]">
              Taubenabwehr in Baden-Württemberg:{" "}
              <span className="text-accent">
                dauerhafte Lösungen für Dach, Balkon und Gewerbe.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/75 md:text-lg">
              StadtFix montiert Edelstahl-Spikes und Schutznetze an Wohn- und
              Gewerbegebäuden in Nürtingen, Stuttgart und ganz
              Baden-Württemberg: tierschutzkonform, sauber ausgeführt, mit 3
              Jahren Garantie auf jede Montage.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <LinkButton href="/kontakt/">Kostenlose Begehung anfragen</LinkButton>
              <LinkButton href="/taubenabwehr/" variant="outline-light">
                Einsatzbereiche ansehen
              </LinkButton>
            </div>
            <p className="mt-6 text-[13px] text-white/45">
              Kostenlos und unverbindlich · Antwort innerhalb von 24 Stunden
            </p>
          </div>
        </div>

        {/* Bildseite */}
        <div className="relative min-h-[300px] lg:min-h-0">
          <div className="absolute inset-0 lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src="/images/hero.webp"
              alt="Stadttaube in Nahaufnahme an einer Hausfassade"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-ink/45 via-transparent to-transparent"
              aria-hidden
            />
          </div>
          {/* Garantie-Badge */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto lg:bottom-10 lg:left-[14%]">
            <div className="flex items-center gap-4 border border-line bg-white px-5 py-4 text-ink shadow-elevated">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent font-display text-[17px] font-extrabold text-white"
                aria-hidden
              >
                3
              </span>
              <div className="leading-tight">
                <p className="font-display text-[15px] font-bold">Jahre Garantie</p>
                <p className="text-[13px] text-steel">auf jede Montage, schriftlich</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
