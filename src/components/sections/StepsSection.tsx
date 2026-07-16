import { steps } from "@/content/home";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";

export function StepsSection() {
  return (
    <section className="border-b border-line bg-mist py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <Kicker n="03">So läuft es ab</Kicker>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
            Wie läuft ein Projekt mit StadtFix ab?
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative h-full">
              <Reveal delay={i * 90}>
                {/* Verbindungslinie */}
                <span
                  className="absolute left-0 right-0 top-[3.4rem] hidden h-px bg-line md:block"
                  aria-hidden
                />
                <span className="ghost-number relative text-[4.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative mt-3 block h-[3px] w-12 bg-accent" aria-hidden />
                <h3 className="mt-4 font-display text-[18px] font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
