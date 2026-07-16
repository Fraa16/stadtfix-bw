"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { segments } from "@/content/segments";
import { site } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

const navLinks = [
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Ratgeber", href: "/blog/" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const desktopLink = (href: string) =>
    `group/nav text-[15px] font-medium transition-colors hover:text-white ${
      isActive(href) ? "text-white" : "text-white/80"
    }`;

  /* Unterstreichung auf einem inneren Span, damit sie bei allen
     Nav-Punkten identisch am Text sitzt — unabhängig vom Link-Padding. */
  const navLabel = (href: string) =>
    `relative after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-accent after:transition-all ${
      isActive(href) ? "after:w-full" : "after:w-0"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      {/* Top-Bar: Direktkontakt + Reaktionsversprechen */}
      <div
        className={`hidden overflow-hidden border-b border-line-dark transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 border-b-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container-site flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6 text-white/70">
            <a
              href={`tel:${site.contact.phoneE164}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 2h3l1.5 3.5L5.8 7a10 10 0 0 0 3.2 3.2l1.5-1.7L14 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              {site.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="hidden items-center gap-2 hover:text-white xl:flex"
            >
              <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="1.5" y="3" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.4" />
                <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              {site.contact.email}
            </a>
          </div>
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/60">
            Antwort innerhalb von 24 Stunden · 3 Jahre Garantie
          </p>
        </div>
      </div>

      {/* Hauptleiste */}
      <div className={`border-b border-line-dark transition-shadow ${scrolled ? "shadow-elevated" : ""}`}>
        <div
          className={`container-site flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled ? "h-14" : "h-[4.25rem]"
          }`}
        >
          <Link href="/" aria-label="StadtFix – Startseite" onClick={() => setMobileOpen(false)}>
            <Wordmark />
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
            <div className="group relative">
              <Link
                href="/taubenabwehr/"
                className={`${desktopLink("/taubenabwehr/")} flex items-center gap-1.5 py-5`}
              >
                <span className={navLabel("/taubenabwehr/")}>Taubenabwehr</span>
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
              <div className="invisible absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-x-2 border border-line-dark bg-ink-soft p-4 shadow-elevated">
                  <Link
                    href="/taubenabwehr/"
                    className="col-span-2 mb-2 flex items-center justify-between border-b border-line-dark px-3 pb-3 pt-1 font-display text-[13px] font-bold uppercase tracking-[0.15em] text-accent hover:text-white"
                  >
                    Alle Methoden im Überblick
                    <span aria-hidden>→</span>
                  </Link>
                  {segments.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/taubenabwehr/${s.slug}/`}
                      className="border-l-2 border-transparent px-3 py-2.5 transition-colors hover:border-accent hover:bg-ink"
                    >
                      <span className="block text-[14.5px] font-semibold text-white/90">
                        {s.navLabel}
                      </span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-steel-light line-clamp-1">
                        {s.tileText}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`${desktopLink(l.href)} py-5`}>
                <span className={navLabel(l.href)}>{l.label}</span>
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
            className="-mr-2 p-2 lg:hidden"
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
      </div>

      {/* Mobile-Menü */}
      {mobileOpen && (
        <nav
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line-dark bg-ink px-5 pb-6 pt-2 lg:hidden"
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
          <a
            href={`tel:${site.contact.phoneE164}`}
            className="mt-2 block py-2 text-[15px] text-white/70"
          >
            Telefon: {site.contact.phoneDisplay}
          </a>
          <Link
            href="/kontakt/"
            className="mt-3 block rounded-sm bg-accent px-5 py-3 text-center font-display text-[14px] font-bold uppercase tracking-wide text-white"
            onClick={() => setMobileOpen(false)}
          >
            Begehung anfragen
          </Link>
        </nav>
      )}
    </header>
  );
}
