type KickerProps = {
  children: React.ReactNode;
  /** Sektionsnummer, z. B. "01" — stilles Gestaltungsmerkmal */
  n?: string;
};

export function Kicker({ children, n }: KickerProps) {
  return (
    <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent mb-4 flex items-center gap-3">
      {n && <span className="text-steel-light/80">{n}</span>}
      <span className="inline-block h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}
