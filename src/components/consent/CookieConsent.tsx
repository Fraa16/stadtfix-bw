"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  denyAll,
  grantAll,
  hasDecision,
  OPEN_CONSENT_EVENT,
  readConsent,
  writeConsent,
  type Categories,
} from "@/lib/consent";

const optionalCategories: {
  key: "statistics" | "marketing";
  title: string;
  text: string;
}[] = [
  {
    key: "statistics",
    title: "Statistik",
    text: "Anonyme Auswertung der Seitennutzung, damit wir die Website verbessern können. Wird nur mit Ihrer Einwilligung geladen.",
  },
  {
    key: "marketing",
    title: "Marketing / Externe Medien",
    text: "Inhalte von Drittanbietern (z. B. eingebettete Karten oder Videos). Diese können Daten an die Anbieter übertragen.",
  },
];

const btnBase =
  "inline-flex items-center justify-center rounded-sm px-5 py-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors";
const btnPrimary = `${btnBase} bg-accent text-white hover:bg-accent-deep`;
const btnSolid = `${btnBase} bg-ink text-white hover:bg-ink-soft`;
const btnGhost = `${btnBase} border border-line text-ink hover:bg-mist`;

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [decided, setDecided] = useState(true); // assume decided until mount → no flash
  const [open, setOpen] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const syncFromStore = useCallback(() => {
    const c = readConsent();
    setStatistics(c?.categories.statistics ?? false);
    setMarketing(c?.categories.marketing ?? false);
  }, []);

  // Initial state + footer "Cookie-Einstellungen" trigger.
  useEffect(() => {
    setMounted(true);
    setDecided(hasDecision());
    syncFromStore();

    const openSettings = () => {
      syncFromStore();
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openSettings);
  }, [syncFromStore]);

  const persist = useCallback((categories: Categories) => {
    writeConsent(categories);
    setDecided(true);
    setOpen(false);
  }, []);

  const acceptAll = () => persist(grantAll);
  const rejectAll = () => persist(denyAll);
  const saveSelection = () =>
    persist({ necessary: true, statistics, marketing });

  // Dialog: focus management, Esc, focus trap.
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    const node = dialogRef.current;
    const focusables = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lastFocused.current?.focus?.();
    };
  }, [open]);

  if (!mounted) return null;

  const showBanner = !decided && !open;

  return (
    <>
      {showBanner && (
        <div
          role="region"
          aria-label="Cookie-Hinweis"
          className="fixed inset-x-4 bottom-4 z-[70] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[400px]"
        >
          <div className="border border-line bg-white p-6 shadow-elevated">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-accent"
                aria-hidden
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01" />
              </svg>
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink">
                Datenschutz
              </h2>
            </div>
            <p className="mt-3 text-[13.5px] leading-relaxed text-steel">
              Wir verwenden nur technisch notwendige Cookies. Optionale Cookies
              für Statistik und externe Medien setzen wir ausschließlich mit
              Ihrer Einwilligung. Mehr dazu in der{" "}
              <Link
                href="/datenschutzerklaerung/"
                className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={rejectAll}
                className={`${btnSolid} w-full whitespace-nowrap !px-3 !text-[12px] !tracking-[0.06em]`}
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className={`${btnPrimary} w-full whitespace-nowrap !px-3 !text-[12px] !tracking-[0.06em]`}
              >
                Akzeptieren
              </button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 w-full text-center font-display text-[11.5px] font-semibold uppercase tracking-[0.12em] text-steel underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              Einstellungen anpassen
            </button>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consent-title"
            className="relative m-0 max-h-[90vh] w-full overflow-y-auto border border-line bg-white p-6 shadow-elevated sm:m-4 sm:max-w-lg md:p-8"
          >
            <h2
              id="consent-title"
              className="font-display text-xl font-extrabold tracking-tight text-ink"
            >
              Cookie-Einstellungen
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-steel">
              Wählen Sie, welche Cookies Sie zulassen. Notwendige Cookies sind
              für den Betrieb der Website erforderlich. Ihre Auswahl können Sie
              jederzeit über den Link im Footer ändern.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start justify-between gap-4 border border-line bg-mist p-4">
                <div>
                  <p className="font-display text-[15px] font-bold text-ink">Notwendig</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-steel">
                    Für Grundfunktionen erforderlich, u. a. das Speichern dieser
                    Cookie-Auswahl. Immer aktiv.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Notwendige Cookies (immer aktiv)"
                  className="mt-1 h-5 w-5 accent-accent"
                />
              </div>

              {optionalCategories.map((c) => {
                const value = c.key === "statistics" ? statistics : marketing;
                const setValue =
                  c.key === "statistics" ? setStatistics : setMarketing;
                return (
                  <label
                    key={c.key}
                    className="flex cursor-pointer items-start justify-between gap-4 border border-line p-4 transition-colors hover:bg-mist"
                  >
                    <div>
                      <p className="font-display text-[15px] font-bold text-ink">{c.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-steel">{c.text}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setValue(e.target.checked)}
                      className="mt-1 h-5 w-5 accent-accent"
                    />
                  </label>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={saveSelection} className={btnPrimary}>
                Auswahl speichern
              </button>
              <button type="button" onClick={acceptAll} className={btnSolid}>
                Alle akzeptieren
              </button>
              <button type="button" onClick={rejectAll} className={btnGhost}>
                Alle ablehnen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
