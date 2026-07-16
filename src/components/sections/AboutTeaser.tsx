import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Kicker } from "@/components/Kicker";

export function AboutTeaser() {
  return (
    <section className="border-t border-line bg-mist py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Kicker>Über StadtFix</Kicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Ein Fachbetrieb aus Nürtingen, kein anonymer Konzern
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-steel">
            StadtFix ist ein Fachbetrieb für Taubenabwehr mit Sitz in Nürtingen.{" "}
            {site.founder} hat{" "}
            <span className="placeholder-fact">{site.placeholders.yearsExperience} Jahre</span>{" "}
            in der Branche gearbeitet, bevor er StadtFix gegründet hat. Sie
            sprechen bei Begehung, Angebot und Montage mit derselben Person.
            Einsatzgebiet: Nürtingen, Stuttgart, Esslingen, Reutlingen, Tübingen
            und ganz Baden-Württemberg.
          </p>
          <Link
            href="/ueber-uns/"
            className="mt-7 inline-block font-display text-[14px] font-bold uppercase tracking-[0.12em] text-accent hover:text-ink"
          >
            Mehr über uns →
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-white">
          <Image
            src="/images/ueber-uns.jpg"
            alt="StadtFix Fachbetrieb für Taubenabwehr bei der Montage"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
