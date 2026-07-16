/**
 * Typografische Wortmarke (Platzhalter, bis das finale Logo vorliegt).
 * Zweifarbig: „Stadt" in Weiß/Ink, „Fix" in Signal-Orange.
 */
export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`font-display text-[22px] font-extrabold tracking-tight leading-none ${
        dark ? "text-ink" : "text-white"
      }`}
    >
      Stadt<span className="text-accent">Fix</span>
      <span className="ml-1.5 inline-block h-[9px] w-[9px] bg-accent align-baseline" aria-hidden />
    </span>
  );
}
