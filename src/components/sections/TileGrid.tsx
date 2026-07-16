import Image from "next/image";
import Link from "next/link";
import { segments } from "@/content/segments";
import { Kicker } from "@/components/Kicker";

export function TileGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <Kicker>Einsatzbereiche</Kicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Für welche Gebäude eignet sich unsere Taubenabwehr?
          </h2>
          <p className="mt-4 text-steel">
            Jedes Gebäude hat andere Nistplätze, andere Zugänge, andere
            Anforderungen. Deshalb planen wir jede Lösung nach Begehung, nicht
            nach Katalog.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s) => (
            <Link
              key={s.slug}
              href={`/taubenabwehr/${s.slug}/`}
              className="group flex flex-col overflow-hidden border border-line bg-white transition-colors hover:border-ink"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-mist">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[18px] font-bold tracking-tight">
                  {s.navLabel}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-steel">
                  {s.tileText}
                </p>
                <span className="mt-4 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
