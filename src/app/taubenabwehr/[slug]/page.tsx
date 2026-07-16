import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Kicker } from "@/components/Kicker";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { getSegment, segments } from "@/content/segments";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) return {};
  return {
    title: { absolute: `${segment.metaTitle} | StadtFix` },
    description: segment.metaDescription,
    alternates: { canonical: `/taubenabwehr/${segment.slug}/` },
  };
}

export default async function SegmentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) notFound();

  return (
    <>
      <JsonLd data={faqPageSchema(segment.faq)} />

      <PageHero
        kicker={segment.kicker}
        title={segment.h1}
        subline={segment.subline}
        cta={segment.heroCta}
        image={segment.image}
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Taubenabwehr", href: "/taubenabwehr/" },
          { name: segment.navLabel, href: `/taubenabwehr/${segment.slug}/` },
        ]}
      />

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_380px]">
          <div>
            <Reveal>
              <Kicker n="01">Das Problem</Kicker>
              <h2 className="max-w-xl font-display text-2xl font-extrabold tracking-tight md:text-[2.25rem] md:leading-[1.12]">
                {segment.problem.h2}
              </h2>
            </Reveal>
            <div className="mt-12 space-y-10">
              {segment.problem.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex gap-6">
                    <span className="ghost-number pt-1 text-[2.6rem]" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="border-l border-line pl-6">
                      <h3 className="font-display text-[17.5px] font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-steel">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="hidden lg:block" delay={150}>
            <div className="sticky top-28">
              <div className="relative mr-4 mt-4">
                <div
                  className="absolute -right-4 -top-4 h-full w-full border border-accent"
                  aria-hidden
                />
                <div className="relative aspect-[3/2] overflow-hidden bg-mist">
                  <Image
                    src={segment.image.src}
                    alt={segment.image.alt}
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-7 border-l-2 border-accent pl-4 text-[14px] leading-relaxed text-steel">
                Kostenlose Begehung, Festpreis-Angebot, 3 Jahre Garantie auf
                die Montage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lösung */}
      <section className="border-t border-line bg-mist py-20 md:py-28">
        <div className="container-site">
          <Reveal>
            <Kicker n="02">Unsere Lösung</Kicker>
            <h2 className="max-w-2xl font-display text-2xl font-extrabold tracking-tight md:text-[2.25rem] md:leading-[1.12]">
              {segment.solution.h2}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {segment.solution.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80} className="h-full">
                <div className="group h-full border border-line bg-white p-8 transition-all duration-300 hover:border-ink hover:shadow-elevated">
                  <span className="mb-4 block h-[3px] w-10 bg-accent" aria-hidden />
                  <h3 className="font-display text-[17.5px] font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-steel">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection heading="Häufige Fragen" faqs={segment.faq} n="03" />

      <CtaSection
        lines={segment.cta.lines}
        button={segment.cta.button}
        micro={segment.cta.micro}
        image={segment.image.src}
      />

      {/* Interne Links */}
      <section className="border-t border-line py-16">
        <div className="container-site">
          <p className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-steel">
            Weiterlesen
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Alle Methoden der Taubenabwehr im Überblick",
                href: "/taubenabwehr/",
                label: "Übersicht",
              },
              ...segment.blogLinks.map((l) => ({
                title: l.title,
                href: l.href,
                label: l.href.startsWith("/blog/") ? "Ratgeber" : "Einsatzbereich",
              })),
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between gap-6 border border-line bg-white p-6 transition-all duration-300 hover:border-ink hover:shadow-elevated"
              >
                <div>
                  <p className="font-display text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                    {l.label}
                  </p>
                  <p className="mt-1.5 font-display text-[16px] font-bold leading-snug tracking-tight">
                    {l.title}
                  </p>
                </div>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-steel transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                  aria-hidden
                >
                  <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h11M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
