import Image from "next/image";
import { LinkButton } from "@/components/Button";

type CtaSectionProps = {
  lines: string[];
  body?: string;
  button: string;
  micro: string;
  /** Optionales Hintergrundfoto (stark abgedunkelt) */
  image?: string;
};

export function CtaSection({ lines, body, button, micro, image }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      {image ? (
        <div className="absolute inset-0" aria-hidden>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-[0.18]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
        </div>
      ) : (
        <div
          className="pointer-events-none absolute -right-24 top-0 h-full w-1/3 -skew-x-12 bg-ink-soft"
          aria-hidden
        />
      )}
      <div className="container-site relative">
        <span className="mb-8 block h-[3px] w-14 bg-accent" aria-hidden />
        <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
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
        {body && <p className="mt-6 max-w-xl text-[17px] text-steel-light">{body}</p>}
        <div className="mt-9">
          <LinkButton href="/kontakt/">{button}</LinkButton>
        </div>
        <p className="mt-4 text-[14px] text-white/50">{micro}</p>
      </div>
    </section>
  );
}
