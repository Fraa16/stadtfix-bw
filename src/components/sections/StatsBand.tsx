import { Reveal } from "@/components/Reveal";

const stats = [
  {
    value: "24h",
    label: "Antwortzeit",
    text: "Anfrage heute, Rückmeldung morgen. Meist mit Terminvorschlag.",
  },
  {
    value: "3",
    unit: "Jahre",
    label: "Garantie auf jede Montage",
    text: "Hält ein System nicht, kommen wir wieder. Ohne Diskussion.",
  },
  {
    value: "100%",
    label: "Rostfreier Edelstahl",
    text: "Plastik-Spikes verspröden nach zwei Wintern. Unsere Systeme nicht.",
  },
  {
    value: "BW",
    unit: "-weit",
    label: "Im Einsatz",
    text: "Von Nürtingen aus in der Region und ganz Baden-Württemberg.",
  },
];

export function StatsBand() {
  return (
    <section aria-label="Unsere Qualitätsversprechen" className="border-b border-line bg-white">
      <div className="container-site grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className={`py-10 pr-6 ${i > 0 ? "border-l border-line pl-6 lg:pl-10" : ""} ${
              i === 2 ? "max-lg:border-l-0 max-lg:pl-0 max-lg:border-t" : ""
            } ${i === 3 ? "max-lg:border-t" : ""}`}
          >
            <p className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              {s.value}
              {s.unit && <span className="text-accent">{s.unit}</span>}
              {!s.unit && <span className="text-accent">.</span>}
            </p>
            <p className="mt-2 font-display text-[14px] font-bold uppercase tracking-[0.1em]">
              {s.label}
            </p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-steel">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
