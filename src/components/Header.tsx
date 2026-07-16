"use client";

import Link from "next/link";
import { useState } from "react";
import { segments } from "@/content/segments";
import { Wordmark } from "@/components/Wordmark";

const navLinks = [
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Ratgeber", href: "/blog/" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white border-b border-line-dark">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="StadtFix – Startseite" onClick={() => setMobileOpen(false)}>
          <Wordmark />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          <div className="group relative">
            <Link
              href="/taubenabwehr/"
              className="flex items-center gap-1.5 py-5 text-[15px] font-medium text-white/90 hover:text-white"
            >
              Taubenabwehr
              <svg
                className="h-3 w-3 text-white/50 transition-transform group-hover:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            {/* Dropdown: alle 9 Einsatzbereiche */}
            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="mt-0 grid grid-cols-2 gap-x-6 border border-line-dark bg-ink-soft p-5 shadow-2xl">
                <Link
                  href="/taubenabwehr/"
                  className="col-span-2 mb-3 border-b border-line-dark pb-3 font-display text-[13px] font-bold uppercase tracking-[0.15em] text-accent hover:text-white"
                >
                  Alle Methoden im Überblick →
                </Link>
                {segments.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/taubenabwehr/${s.slug}/`}
                    className="py-1.5 text-[15px] text-white/85 hover:text-accent"
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-white/90 hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/kontakt/"
            className="rounded-sm bg-accent px-5 py-2.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            Begehung anfragen
          </Link>
        </nav>

        {/* Mobile-Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <div className="flex w-6 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-0.5 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-white ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile-Menü */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-line-dark bg-ink px-5 pb-6 pt-2 max-h-[calc(100dvh-4rem)] overflow-y-auto"
          aria-label="Mobile Navigation"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between py-3 text-left text-[16px] font-medium text-white"
            aria-expanded={mobileSubOpen}
            onClick={() => setMobileSubOpen((v) => !v)}
          >
            Taubenabwehr
            <svg
              className={`h-3.5 w-3.5 text-white/50 transition-transform ${mobileSubOpen ? "rotate-180" : ""}`}
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          {mobileSubOpen && (
            <div className="mb-2 flex flex-col border-l border-line-dark pl-4">
              <Link
                href="/taubenabwehr/"
                className="py-2 text-[15px] font-semibold text-accent"
                onClick={() => setMobileOpen(false)}
              >
                Alle Methoden im Überblick →
              </Link>
              {segments.map((s) => (
                <Link
                  key={s.slug}
                  href={`/taubenabwehr/${s.slug}/`}
                  className="py-2 text-[15px] text-white/85"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.navLabel}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-[16px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt/"
            className="mt-4 block rounded-sm bg-accent px-5 py-3 text-center font-display text-[14px] font-bold uppercase tracking-wide text-white"
            onClick={() => setMobileOpen(false)}
          >
            Begehung anfragen
          </Link>
        </nav>
      )}
    </header>
  );
}
