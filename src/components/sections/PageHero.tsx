import { LinkButton } from "@/components/Button";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

type PageHeroProps = {
  kicker: string;
  title: string;
  subline?: string;
  cta?: string;
  crumbs?: Crumb[];
};

export function PageHero({ kicker, title, subline, cta, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-full w-1/3 -skew-x-12 bg-ink-soft"
        aria-hidden
      />
      <div className="container-site relative py-16 md:py-24">
        {crumbs && (
          <div className="mb-8">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent mb-4 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-current" aria-hidden />
          {kicker}
        </p>
        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
          {title}
        </h1>
        {subline && (
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/80">{subline}</p>
        )}
        {cta && (
          <div className="mt-8">
            <LinkButton href="/kontakt/">{cta}</LinkButton>
          </div>
        )}
      </div>
    </section>
  );
}
