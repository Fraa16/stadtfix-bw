import Link from "next/link";
import { methods } from "@/content/home";
import { Kicker } from "@/components/Kicker";

const icons = [
  /* Spikes */
  <svg key="spikes" viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-accent" aria-hidden>
    <path d="M4 26h24M7 26l3-14 3 14M14.5 26l3-18 3 18M22 26l2.5-10 2.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* Netz */
  <svg key="netz" viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-accent" aria-hidden>
    <path d="M4 8c8 6 16 6 24 0M4 16c8 6 16 6 24 0M4 24c8 6 16 6 24 0M8 5v22M16 7v22M24 5v22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  /* Vergrämung */
  <svg key="vergraemung" viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-accent" aria-hidden>
    <path d="M16 6v4M16 22v4M6 16h4M22 16h4M9 9l3 3M20 20l3 3M23 9l-3 3M12 20l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
];

export function MethodsSection() {
  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <Kicker>Systeme</Kicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Edelstahl-Spikes, Schutznetze, Vergrämung: was wann wirkt
          </h2>
          <p className="mt-4 text-steel-light">
            Es gibt kein System, das überall passt. Welches wirkt, hängt von
            Nistdruck, Fläche und Zugänglichkeit ab. Das klären wir bei der
            Begehung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {methods.map((m, i) => (
            <div key={m.title} className="border border-line-dark bg-ink-soft p-7">
              {icons[i]}
              <h3 className="mt-5 font-display text-[18px] font-bold tracking-tight">
                {m.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-steel-light">{m.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/taubenabwehr/"
          className="mt-10 inline-block font-display text-[14px] font-bold uppercase tracking-[0.12em] text-accent hover:text-white"
        >
          Alle Methoden im Detail →
        </Link>
      </div>
    </section>
  );
}
