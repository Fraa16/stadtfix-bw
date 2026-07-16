/**
 * Blog-Metadaten. Die Artikel-Inhalte liegen in src/content/blog-articles.ts.
 *
 * Hinweis Veröffentlichungstakt: Die Copy empfiehlt 2 Artikel/Woche über
 * 5 Wochen. Die Daten unten sind entsprechend gestaffelt gesetzt (Platzhalter,
 * beim echten Livegang anpassen).
 */

export type BlogPostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  datePublished: string;
  image: { src: string; alt: string };
  hasFaqSchema: boolean;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "taubenabwehr-kosten",
    title: "Was kostet professionelle Taubenabwehr? Preise und Faktoren im Überblick",
    metaTitle: "Was kostet Taubenabwehr? Preise & Faktoren 2026",
    description:
      "Was professionelle Taubenabwehr kostet, wovon der Preis abhängt und woran Sie ein seriöses Angebot erkennen. Ehrlich erklärt von StadtFix.",
    keyword: "taubenabwehr kosten",
    datePublished: "2026-06-02",
    image: {
      src: "/images/blog/taubenabwehr-kosten.webp",
      alt: "Montage von Taubenabwehr-Spikes von Hand, Aufwand und Kosten",
    },
    hasFaqSchema: true,
  },
  {
    slug: "spikes-oder-netze",
    title: "Taubenabwehr-Spikes vs. Schutznetze: Welche Methode passt zu Ihrem Gebäude?",
    metaTitle: "Spikes oder Netz gegen Tauben? Der ehrliche Vergleich",
    description:
      "Spikes oder Schutznetz: Was wirkt wann gegen Tauben? Der Vergleich nach Einsatzort, Befallsstärke und Haltbarkeit, ohne Verkäufer-Brille.",
    keyword: "taubenabwehr spikes oder netz",
    datePublished: "2026-06-05",
    image: {
      src: "/images/blog/spikes-oder-netze.webp",
      alt: "Schutznetz gegen Tauben im Detail, Taube hinter der Netzbarriere",
    },
    hasFaqSchema: false,
  },
  {
    slug: "taubenabwehr-rechtlich",
    title: "Ist Taubenabwehr genehmigungspflichtig? Rechtliches, Tierschutz und Denkmalschutz",
    metaTitle: "Ist Taubenabwehr erlaubt? Recht, Tierschutz, Denkmalschutz",
    description:
      "Was bei der Taubenabwehr erlaubt ist und was nicht: Tierschutzgesetz, verbotene Methoden, Denkmalschutz-Auflagen. Verständlich zusammengefasst.",
    keyword: "taubenabwehr erlaubt rechtlich",
    datePublished: "2026-06-09",
    image: {
      src: "/images/blog/taubenabwehr-rechtlich.webp",
      alt: "Stadttaube an einer Hausfassade, Taubenabwehr und Tierschutzrecht",
    },
    hasFaqSchema: true,
  },
  {
    slug: "warum-tauben-dach-balkon",
    title: "Warum Tauben Ihr Dach oder Ihren Balkon lieben und wie Sie das ändern",
    metaTitle: "Tauben vom Dach & Balkon vertreiben: was wirklich hilft",
    description:
      "Warum Tauben ausgerechnet Ihr Dach oder Ihren Balkon wählen und welche Maßnahmen dauerhaft wirken. Ohne Hausmittel-Mythen.",
    keyword: "tauben vertreiben dach balkon",
    datePublished: "2026-06-12",
    image: {
      src: "/images/blog/warum-tauben-dach-balkon.webp",
      alt: "Taube auf dem Dach eines Wohnhauses in der Stadt",
    },
    hasFaqSchema: false,
  },
  {
    slug: "taubenkot-gesundheitsrisiko",
    title: "Taubenkot: Gesundheitsrisiken und warum schnelles Handeln wichtig ist",
    metaTitle: "Wie gefährlich ist Taubenkot? Risiken & richtiges Vorgehen",
    description:
      "Welche Krankheitserreger Taubenkot enthalten kann, für wen er riskant ist und warum Sie ihn nie trocken entfernen sollten. Sachlich erklärt.",
    keyword: "taubenkot gesundheitsrisiko",
    datePublished: "2026-06-16",
    image: {
      src: "/images/blog/taubenkot-gesundheitsrisiko.webp",
      alt: "Stadttaube in Nahaufnahme, Gesundheitsrisiken durch Taubenkot",
    },
    hasFaqSchema: false,
  },
  {
    slug: "photovoltaik-tauben",
    title: "Photovoltaik und Tauben: So vermeiden Sie Ertragsverlust und Kabelschäden",
    metaTitle: "Tauben unter der PV-Anlage: Schäden vermeiden",
    description:
      "Warum Tauben unter Solarmodulen nisten, welche Schäden drohen, von Ertragsverlust bis Brandrisiko, und wie Unterflugschutz ohne Bohren funktioniert.",
    keyword: "tauben photovoltaikanlage schaden",
    datePublished: "2026-06-19",
    image: {
      src: "/images/blog/photovoltaik-tauben.webp",
      alt: "Taubenabwehr Photovoltaik, Schutzgitter um Solarmodule auf einem Ziegeldach",
    },
    hasFaqSchema: false,
  },
  {
    slug: "taubenabwehr-weg",
    title: "Taubenabwehr in der Eigentümergemeinschaft: Ablauf, Beschluss und Kostenverteilung",
    metaTitle: "Taubenabwehr in der WEG: Beschluss & Kosten",
    description:
      "Wer in der Eigentümergemeinschaft über Taubenabwehr entscheidet, wer zahlt und wie Sie die Maßnahme durch die Versammlung bringen. Schritt für Schritt.",
    keyword: "taubenabwehr weg kosten verteilen",
    datePublished: "2026-06-23",
    image: {
      src: "/images/blog/taubenabwehr-weg.webp",
      alt: "Taubenabwehr-Spikes an der Fensterbank eines Wohngebäudes, Thema WEG",
    },
    hasFaqSchema: true,
  },
  {
    slug: "tierfreundliche-taubenvergraemung",
    title: "Taubenvergrämung ohne Tierleid: Diese Methoden wirken dauerhaft",
    metaTitle: "Tierfreundliche Taubenvergrämung: Was wirklich wirkt",
    description:
      "Tauben vertreiben ohne Tierleid: welche Methoden wirken, welche verboten sind und warum die tierfreundlichste Lösung auch die dauerhafteste ist.",
    keyword: "taubenvergrämung tierfreundlich",
    datePublished: "2026-06-26",
    image: {
      src: "/images/blog/tierfreundliche-taubenvergraemung.webp",
      alt: "Tierfreundliche Taubenvergrämung, Taube fliegt unverletzt über Spikes auf",
    },
    hasFaqSchema: false,
  },
  {
    slug: "serioeser-anbieter-checkliste",
    title: "Woran erkennen Sie einen seriösen Anbieter für Taubenabwehr? Die Checkliste",
    metaTitle: "Seriöse Taubenabwehr erkennen: die Checkliste",
    description:
      "7 Kriterien, an denen Sie einen seriösen Anbieter für Taubenabwehr erkennen, von der Begehung bis zur Garantie. Mit Warnsignalen.",
    keyword: "taubenabwehr anbieter checkliste",
    datePublished: "2026-06-30",
    image: {
      src: "/images/blog/serioeser-anbieter-checkliste.webp",
      alt: "Fachgerechte Montage von Edelstahl-Spikes, seriöser Anbieter bei der Arbeit",
    },
    hasFaqSchema: false,
  },
  {
    slug: "taubenabwehr-stuttgart-nuertingen",
    title: "Taubenabwehr in Stuttgart, Nürtingen und Umgebung: der regionale Überblick",
    metaTitle: "Taubenabwehr in Stuttgart & Nürtingen: der Überblick",
    description:
      "Taubenabwehr in der Region Stuttgart, Nürtingen, Esslingen und Reutlingen: warum der Befallsdruck hier hoch ist und wie schnell Hilfe vor Ort ist.",
    keyword: "taubenabwehr stuttgart / taubenabwehr nürtingen",
    datePublished: "2026-07-03",
    image: {
      src: "/images/blog/taubenabwehr-stuttgart-nuertingen.webp",
      alt: "Taubenabwehr in der Region Stuttgart, Unterflugschutz an einer Photovoltaikanlage",
    },
    hasFaqSchema: false,
  },
];

export function getPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function latestPosts(n: number): BlogPostMeta[] {
  return [...blogPosts]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, n);
}
