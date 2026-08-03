"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

/**
 * Öffnet den Cookie-Einstellungen-Dialog (z. B. aus dem Footer), damit die
 * Einwilligung jederzeit widerrufen oder geändert werden kann.
 */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
