import Image from "next/image";
import Link from "next/link";
import { segments } from "@/content/segments";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

export function TileGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Kicker n="01">Einsatzbereiche</Kicker>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                Für welche Gebäude eignet sich unsere Taubenabwehr?
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-steel">
              Jedes Gebäude hat andere Nistplätze, andere Zugänge, andere
              Anforderungen. Deshalb planen wir jede Lösung nach Begehung,
              nicht nach Katalog.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 3) * 90}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
              <Link
                href={`/taubenabwehr/${s.slug}/`}
                className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:border-ink hover:shadow-elevated"
              >
                <div
                  className={`relative overflow-hidden bg-mist ${
                    i === 0 ? "aspect-[3/2] sm:aspect-[21/9]" : "aspect-[3/2]"
                  }`}
                >
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes={
                      i === 0
                        ? "(min-width: 1024px) 66vw, 100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 font-display text-[12px] font-bold tracking-[0.15em] text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-[20px] font-extrabold tracking-tight text-white">
                    {s.navLabel}
                  </h3>
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 p-5">
                  <p className="text-[14.5px] leading-relaxed text-steel">{s.tileText}</p>
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-line text-steel transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                    aria-hidden
                  >
                    <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7h11M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
