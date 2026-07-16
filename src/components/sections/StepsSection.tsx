import { steps } from "@/content/home";
import { Kicker } from "@/components/Kicker";

export function StepsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <Kicker>So läuft es ab</Kicker>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Wie läuft ein Projekt mit StadtFix ab?
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative border-t-2 border-line pt-6">
              <span
                className="absolute -top-[2px] left-0 h-[2px] w-12 bg-accent"
                aria-hidden
              />
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-steel">
                Schritt {i + 1}
              </span>
              <h3 className="mt-2 font-display text-[18px] font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-steel">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
