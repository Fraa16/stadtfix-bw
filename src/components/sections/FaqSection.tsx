import type { Faq } from "@/content/segments";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

type FaqSectionProps = {
  heading: string;
  faqs: Faq[];
  kicker?: string;
  n?: string;
};

export function FaqSection({ heading, faqs, kicker = "FAQ", n }: FaqSectionProps) {
  // Gleicher name = exklusives Akkordeon: der Browser schließt offene
  // <details> derselben Gruppe automatisch, ganz ohne JavaScript.
  const groupName = `faq-${heading.toLowerCase().replace(/[^a-zä-ü0-9]+/gi, "-")}`;
  return (
    <section className="border-t border-line bg-mist py-20 md:py-28">
      <div className="container-site max-w-3xl">
        <Reveal>
          <Kicker n={n}>{kicker}</Kicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.5rem]">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {faqs.map((f, i) => (
              <details key={f.q} name={groupName} className="group py-1">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 py-5 font-display text-[17.5px] font-bold tracking-tight transition-colors hover:text-accent-deep [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[13px] font-bold text-accent" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{f.q}</span>
                  <span
                    className="text-2xl font-light leading-none text-accent transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pl-[2.35rem] pr-10 text-[16px] leading-relaxed text-steel">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
