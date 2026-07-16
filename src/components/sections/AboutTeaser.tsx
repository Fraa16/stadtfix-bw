import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Kicker n="04">Über StadtFix</Kicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
            Ein Fachbetrieb aus Nürtingen, kein anonymer Konzern
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-steel">
            StadtFix ist ein Fachbetrieb für Taubenabwehr mit Sitz in Nürtingen.{" "}
            {site.founder} hat{" "}
            <span className="placeholder-fact">{site.placeholders.yearsExperience} Jahre</span>{" "}
            in der Branche gearbeitet, bevor er StadtFix gegründet hat. Sie
            sprechen bei Begehung, Angebot und Montage mit derselben Person.
          </p>
          <div className="mt-7 border-l-2 border-accent pl-5">
            <p className="font-display text-[17px] font-bold">{site.founder}</p>
            <p className="text-[14px] text-steel">Gründer & Ihr Ansprechpartner, von Begehung bis Garantie</p>
          </div>
          <p className="mt-7 text-[15px] text-steel">
            <strong className="font-semibold text-ink">Einsatzgebiet:</strong>{" "}
            Nürtingen, Stuttgart, Esslingen, Reutlingen, Tübingen und ganz
            Baden-Württemberg.
          </p>
          <Link
            href="/ueber-uns/"
            className="mt-8 inline-flex items-center gap-2 font-display text-[14px] font-bold uppercase tracking-[0.12em] text-accent transition-colors hover:text-ink"
          >
            Mehr über uns
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
        <Reveal delay={120}>
          {/* Foto mit versetztem Rahmen */}
          <div className="relative mr-3 mt-3 lg:mr-5 lg:mt-5">
            <div
              className="absolute -right-3 -top-3 h-full w-full border border-accent lg:-right-5 lg:-top-5"
              aria-hidden
            />
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src="/images/ueber-uns.webp"
                alt="Montage von Taubenabwehr an einer Gebäudefassade mit Hubbühne und Seilzugang"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
