import Image from "next/image";
import { LinkButton } from "@/components/Button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Hintergrundbild, stark abgedunkelt */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      </div>

      <div className="container-site relative py-24 md:py-36">
        <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent mb-5 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-current" aria-hidden />
          Taubenabwehr in Baden-Württemberg
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Tauben nisten. Kot frisst Substanz.{" "}
          <span className="text-accent">Taubenabwehr, die dauerhaft hält.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/80 md:text-lg">
          StadtFix montiert Edelstahl-Spikes und Schutznetze an Wohn- und
          Gewerbegebäuden in Nürtingen, Stuttgart und ganz Baden-Württemberg:
          tierschutzkonform, sauber ausgeführt, mit 3 Jahren Garantie auf jede
          Montage.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <LinkButton href="/kontakt/">Kostenlose Vor-Ort-Begehung anfragen</LinkButton>
          <LinkButton href="/taubenabwehr/" variant="outline-light">
            Einsatzbereiche ansehen →
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
