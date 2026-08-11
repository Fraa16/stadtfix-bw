/**
 * Cookie-Einwilligung (DSGVO/TTDSG).
 *
 * Die Einwilligung wird in einem First-Party-Cookie `sf_consent` gespeichert
 * (notwendiges Cookie: hält nur die Auswahl fest). Optionale Kategorien sind
 * standardmäßig aus (Opt-in). Wird die Version erhöht, wird erneut gefragt.
 */

export const CONSENT_COOKIE = "sf_consent";
export const CONSENT_VERSION = 2;
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 182; // ~6 Monate in Sekunden

/** Optionale Kategorien (necessary ist immer true und nicht abwählbar). */
export type OptionalCategory = "marketing";

export type Categories = {
  necessary: true;
  marketing: boolean;
};

export type ConsentState = {
  v: number;
  categories: Categories;
  ts: string;
};

export const CONSENT_CHANGED_EVENT = "sf:consent-changed";
export const OPEN_CONSENT_EVENT = "sf:open-consent";

export const denyAll: Categories = {
  necessary: true,
  marketing: false,
};

export const grantAll: Categories = {
  necessary: true,
  marketing: true,
};

/** Liest die gespeicherte Einwilligung; null, wenn keine (gültige) vorliegt. */
export function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;

  try {
    const state = JSON.parse(
      decodeURIComponent(match.slice(CONSENT_COOKIE.length + 1)),
    ) as ConsentState;
    if (state?.v !== CONSENT_VERSION || !state.categories) return null;
    return state;
  } catch {
    return null;
  }
}

/** Ob bereits eine gültige Entscheidung für die aktuelle Version vorliegt. */
export function hasDecision(): boolean {
  return readConsent() !== null;
}

/** Ob eine bestimmte optionale Kategorie freigegeben ist. */
export function isGranted(category: OptionalCategory): boolean {
  return readConsent()?.categories[category] === true;
}

/** Speichert die Auswahl als Cookie und benachrichtigt Abonnenten. */
export function writeConsent(categories: Categories): ConsentState {
  const state: ConsentState = {
    v: CONSENT_VERSION,
    categories: { ...categories, necessary: true },
    ts: new Date().toISOString(),
  };
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(state),
  )}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax`;
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }),
  );
  return state;
}
