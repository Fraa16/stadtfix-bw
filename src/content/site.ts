/**
 * Zentrale Website-Konfiguration.
 *
 * Bestätigte Eckdaten stehen in `facts` und werden direkt ausgegeben.
 */

export const site = {
  name: "StadtFix",
  legalName: "StadtFix – Taubenabwehr & Gebäudeschutz",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stadtfix-bw.de",

  contact: {
    phoneDisplay: "0176 66854960",
    phoneE164: "+4917666854960",
    email: "nazari@stadtfix-bw.de",
    street: "Bocksberg 2",
    zipCity: "72622 Nürtingen",
  },

  founder: "Khalil Nazari",

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

  /** Bestätigte Eckdaten */
  facts: {
    phoneHours: "Mo–Fr 8–17 Uhr, Sa 8–14 Uhr",
    yearsExperience: "8",
    foundingYear: "2026",
  },

  /** Nebengewerbe, Kleinunternehmer nach § 19 UStG — keine USt-IdNr. */
  smallBusiness: true,

  cta: {
    primary: "Kostenlose Vor-Ort-Begehung anfragen",
    micro: "Antwort innerhalb von 24 Stunden. Begehung und Angebot sind kostenlos.",
  },
} as const;

export type Site = typeof site;
