import type { Faq } from "@/content/segments";
import { Kicker } from "@/components/Kicker";

type FaqSectionProps = {
  heading: string;
  faqs: Faq[];
  kicker?: string;
};

export function FaqSection({ heading, faqs, kicker = "FAQ" }: FaqSectionProps) {
  // Gleicher name = exklusives Akkordeon: der Browser schließt offene
  // <details> derselben Gruppe automatisch, ganz ohne JavaScript.
  const groupName = `faq-${heading.toLowerCase().replace(/[^a-zä-ü0-9]+/gi, "-")}`;
  return (
    <section className="border-t border-line bg-mist py-20 md:py-28">
      <div className="container-site max-w-3xl">
        <Kicker>{kicker}</Kicker>
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          {heading}
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} name={groupName} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[17px] font-bold tracking-tight [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="text-2xl font-light leading-none text-accent transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-[16px] leading-relaxed text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
