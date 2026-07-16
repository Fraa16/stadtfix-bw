import { LinkButton } from "@/components/Button";

type CtaSectionProps = {
  lines: string[];
  body?: string;
  button: string;
  micro: string;
};

export function CtaSection({ lines, body, button, micro }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      {/* diagonale Akzentfläche */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-1/3 -skew-x-12 bg-ink-soft"
        aria-hidden
      />
      <div className="container-site relative">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {i === lines.length - 1 ? (
                <span className="text-accent">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </h2>
        {body && <p className="mt-5 max-w-xl text-[17px] text-steel-light">{body}</p>}
        <div className="mt-8">
          <LinkButton href="/kontakt/">{button}</LinkButton>
        </div>
        <p className="mt-4 text-[14px] text-white/50">{micro}</p>
      </div>
    </section>
  );
}
