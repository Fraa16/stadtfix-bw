import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

type PageHeroProps = {
  kicker: string;
  title: string;
  subline?: string;
  cta?: string;
  crumbs?: Crumb[];
  /** Optionales Bild rechts (Split-Layout wie auf der Startseite) */
  image?: { src: string; alt: string };
};

export function PageHero({ kicker, title, subline, cta, crumbs, image }: PageHeroProps) {
  const textBlock = (
    <>
      {crumbs && (
        <div className="mb-9">
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <p className="mb-4 flex items-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
        <span className="inline-block h-px w-8 bg-current" aria-hidden />
        {kicker}
      </p>
      <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight md:text-[2.9rem]">
        {title}
      </h1>
      {subline && (
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">{subline}</p>
      )}
      {cta && (
        <div className="mt-9">
          <LinkButton href="/kontakt/">{cta}</LinkButton>
        </div>
      )}
    </>
  );

  if (!image) {
    return (
      <section className="relative overflow-hidden bg-ink bg-grid-dark text-white">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-accent"
          aria-hidden
        />
        <div className="container-site relative py-16 md:py-24">{textBlock}</div>
      </section>
    );
  }

  return (
    <section className="relative bg-ink text-white">
      <div className="grid lg:grid-cols-[1fr_38%]">
        <div className="relative bg-grid-dark">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-accent"
            aria-hidden
          />
          <div className="container-site py-16 md:py-24 lg:max-w-none lg:pl-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-14">
            {textBlock}
          </div>
        </div>
        <div className="relative hidden min-h-full lg:block">
          <div className="absolute inset-0 [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="38vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
