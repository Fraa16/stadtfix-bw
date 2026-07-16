import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Kicker } from "@/components/Kicker";
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
    title: `${segment.metaTitle} | StadtFix`,
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
        crumbs={[
          { name: "Startseite", href: "/" },
          { name: "Taubenabwehr", href: "/taubenabwehr/" },
          { name: segment.navLabel, href: `/taubenabwehr/${segment.slug}/` },
        ]}
      />

      {/* Problem */}
      <section className="py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <Kicker>Das Problem</Kicker>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              {segment.problem.h2}
            </h2>
            <div className="mt-8 space-y-7">
              {segment.problem.items.map((item) => (
                <div key={item.title} className="border-l-2 border-accent pl-5">
                  <h3 className="font-display text-[17px] font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-steel">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden aspect-[3/4] overflow-hidden border border-line lg:block">
            <Image
              src={segment.image.src}
              alt={segment.image.alt}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Lösung */}
      <section className="border-t border-line bg-mist py-16 md:py-24">
        <div className="container-site">
          <Kicker>Unsere Lösung</Kicker>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            {segment.solution.h2}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {segment.solution.items.map((item) => (
              <div key={item.title} className="border border-line bg-white p-7">
                <h3 className="font-display text-[17px] font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-steel">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection heading="Häufige Fragen" faqs={segment.faq} />

      <CtaSection
        lines={segment.cta.lines}
        button={segment.cta.button}
        micro={segment.cta.micro}
      />

      {/* Interne Links */}
      <section className="border-t border-line py-12">
        <div className="container-site">
          <p className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-steel">
            Weiterlesen
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/taubenabwehr/"
                className="text-[15px] font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                Alle Methoden der Taubenabwehr im Überblick
              </Link>
            </li>
            {segment.blogLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[15px] font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
