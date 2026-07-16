import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-ink py-24 text-white md:py-36">
      <div className="container-site max-w-2xl text-center">
        <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
          Fehler 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Diese Seite ist ausgeflogen.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[17px] text-steel-light">
          Die angeforderte Seite gibt es nicht oder nicht mehr. Was es
          verlässlich gibt: Antworten auf Ihr Taubenproblem.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/">Zur Startseite</LinkButton>
          <LinkButton href="/taubenabwehr/" variant="outline-light">
            Taubenabwehr im Überblick
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
