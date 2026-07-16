/**
 * Zentrale Website-Konfiguration.
 *
 * ALLE Fakten-Platzhalter der Website werden hier gepflegt.
 * Werte, die mit "TODO:" markiert sind, müssen vom Kunden bestätigt
 * und hier eingetragen werden — sie erscheinen bis dahin als sichtbare,
 * dezente Platzhalter auf der Seite.
 */

export const site = {
  name: "StadtFix",
  /** TODO: echte Domain eintragen, sobald verbunden (auch in Vercel als NEXT_PUBLIC_SITE_URL setzbar) */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stadtfix-bw.vercel.app",

  /** Entity-Satz (GEO) — identisch im Footer und auf /ueber-uns/ */
  entitySentence:
    "StadtFix ist ein Fachbetrieb für Taubenabwehr mit Sitz in Nürtingen. Wir montieren Edelstahl-Spikes, Schutznetze und Vergrämungssysteme an Wohn- und Gewerbegebäuden in Stuttgart, Esslingen, Reutlingen, Tübingen und ganz Baden-Württemberg, tierschutzkonform und mit 3 Jahren Garantie.",

  region: [
    "Nürtingen",
    "Stuttgart",
    "Esslingen",
    "Reutlingen",
    "Tübingen",
    "Kirchheim",
    "Göppingen",
  ],

  /** TODO: vom Kunden bestätigen lassen */
  placeholders: {
    phone: "[Telefonnummer]",
    phoneHours: "[Mo–Fr, Uhrzeiten]",
    email: "[E-Mail-Adresse]",
    street: "[Straße Hausnr.]",
    zipCity: "[PLZ] Nürtingen",
    founderName: "[Name des Gründers]",
    yearsExperience: "[X]",
    foundingYear: "[Jahr]",
  },

  cta: {
    primary: "Kostenlose Vor-Ort-Begehung anfragen",
    micro: "Antwort innerhalb von 24 Stunden. Begehung und Angebot sind kostenlos.",
  },
} as const;

export type Site = typeof site;
