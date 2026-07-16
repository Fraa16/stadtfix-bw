/**
 * Erzeugt Platzhalter-Bilder (JPG) im Industrial-Trust-Look.
 *
 * Diese Dateien werden später 1:1 durch echte Fotos ersetzt —
 * gleiche Pfade, gleiche Dateinamen. Aufruf: node scripts/generate-placeholder-images.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve(process.cwd(), "public/images");

const INK = "#16181c";
const INK2 = "#22262b";
const STEEL = "#8b939c";
const ACCENT = "#f05a1e";

/** Einfache Tauben-Silhouette (Seitenansicht), ca. 24x18 Einheiten */
function pigeon(x, y, s = 1, color = STEEL) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${color}">
    <path d="M2 12 C4 7, 10 5, 15 6 C17 3.5, 20 3, 21 4 C21.5 4.6, 21 5.4, 20 6 C22 6.5, 23 7, 23.5 8 L19 9 C18 13, 12 15.5, 7 14 L4 17 L5.5 13.5 C3.8 13.2, 2.5 12.8, 2 12 Z"/>
    <circle cx="19.2" cy="5" r="0.55" fill="${INK}"/>
  </g>`;
}

const grid = (w, h) => {
  let g = "";
  for (let x = 0; x <= w; x += 80) g += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>`;
  for (let y = 0; y <= h; y += 80) g += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>`;
  return g;
};

const stroke = (extra = "") =>
  `fill="none" stroke="${STEEL}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" ${extra}`;

/**
 * Jedes Motiv zeichnet in eine 800x500-Box (wird zentriert skaliert).
 */
const motifs = {
  hero: () => `
    <g ${stroke()}>
      <path d="M40 420 L40 250 L150 250 L150 420"/>
      <path d="M150 420 L150 180 L300 180 L300 420"/>
      <path d="M300 420 L300 290 L420 290 L420 420"/>
      <path d="M420 420 L420 120 L560 120 L560 420"/>
      <path d="M560 420 L560 230 L700 230 L700 420"/>
      <line x1="10" y1="420" x2="790" y2="420"/>
      ${[470, 500, 530].map((x) => `<line x1="${x}" y1="150" x2="${x}" y2="120" stroke="${ACCENT}"/>`).join("")}
      ${[180, 210, 240, 270].map((x) => `<line x1="${x}" y1="210" x2="${x}" y2="180" stroke="${ACCENT}"/>`).join("")}
    </g>
    ${pigeon(600, 40, 3.2)}
    ${pigeon(120, 90, 2.2)}
  `,
  "fabriken-unternehmen": () => `
    <g ${stroke()}>
      <path d="M80 430 L80 260 L200 200 L200 260 L320 200 L320 260 L440 200 L440 430 Z"/>
      <rect x="500" y="150" width="50" height="280"/>
      <rect x="590" y="220" width="130" height="210"/>
      <line x1="40" y1="430" x2="760" y2="430"/>
      <path d="M525 150 C525 120, 545 115, 545 95" stroke-opacity="0.6"/>
      ${[110, 170, 230, 290, 350].map((x) => `<rect x="${x}" y="300" width="34" height="40"/>`).join("")}
      <line x1="440" y1="200" x2="440" y2="260" stroke="${ACCENT}"/>
    </g>
    ${pigeon(640, 130, 2.4)}
  `,
  parkhaeuser: () => `
    <g ${stroke()}>
      <rect x="120" y="120" width="560" height="310"/>
      ${[190, 260, 330, 400].map((y) => `<line x1="120" y1="${y}" x2="680" y2="${y}"/>`).join("")}
      ${[160, 240, 320, 400, 480, 560, 640].map((x) => `<line x1="${x}" y1="120" x2="${x}" y2="430" stroke-opacity="0.35"/>`).join("")}
      <path d="M120 430 L680 120" stroke="${ACCENT}" stroke-opacity="0.85"/>
    </g>
    <text x="655" y="105" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="${ACCENT}">P</text>
    ${pigeon(300, 60, 2.4)}
  `,
  photovoltaikanlagen: () => `
    <g ${stroke()}>
      <path d="M60 430 L400 180 L740 430 Z" stroke-opacity="0.5"/>
      <g transform="translate(240 240) rotate(-18)">
        <rect x="0" y="0" width="340" height="180"/>
        ${[57, 114, 171, 228, 285].map((x) => `<line x1="${x}" y1="0" x2="${x}" y2="180"/>`).join("")}
        <line x1="0" y1="60" x2="340" y2="60"/>
        <line x1="0" y1="120" x2="340" y2="120"/>
      </g>
      <circle cx="660" cy="120" r="42" stroke="${ACCENT}"/>
      ${[[660, 45], [660, 195], [585, 120], [735, 120]].map(([x, y]) => `<line x1="${x}" y1="${y}" x2="${x === 660 ? x : x > 660 ? x - 14 : x + 14}" y2="${y === 120 ? y : y > 120 ? y - 14 : y + 14}" stroke="${ACCENT}"/>`).join("")}
    </g>
    ${pigeon(120, 100, 2.4)}
  `,
  buerokomplexe: () => `
    <g ${stroke()}>
      <rect x="180" y="90" width="180" height="340"/>
      <rect x="420" y="170" width="220" height="260"/>
      ${[220, 270, 320].map((x) => [140, 200, 260, 320].map((y) => `<rect x="${x}" y="${y}" width="26" height="30" stroke-opacity="0.5"/>`).join("")).join("")}
      ${[455, 515, 575].map((x) => [210, 270, 330].map((y) => `<rect x="${x}" y="${y}" width="30" height="30" stroke-opacity="0.5"/>`).join("")).join("")}
      <line x1="120" y1="430" x2="700" y2="430"/>
      <line x1="180" y1="90" x2="360" y2="90" stroke="${ACCENT}"/>
    </g>
    ${pigeon(560, 90, 2.4)}
  `,
  mehrfamilienhaeuser: () => `
    <g ${stroke()}>
      <rect x="200" y="110" width="400" height="320"/>
      ${[160, 240, 320].map((y) => `<rect x="230" y="${y}" width="110" height="46"/><rect x="460" y="${y}" width="110" height="46"/>`).join("")}
      ${[160, 240, 320].map((y) => `<line x1="230" y1="${y + 46}" x2="340" y2="${y + 46}" stroke="${ACCENT}" stroke-opacity="0.9"/>`).join("")}
      <line x1="140" y1="430" x2="660" y2="430"/>
      <rect x="385" y="360" width="46" height="70"/>
    </g>
    ${pigeon(620, 70, 2.4)}
  `,
  einfamilienhaeuser: () => `
    <g ${stroke()}>
      <path d="M220 430 L220 260 L400 140 L580 260 L580 430 Z"/>
      <path d="M180 285 L400 135 L620 285" stroke="${ACCENT}"/>
      <rect x="270" y="300" width="70" height="60"/>
      <rect x="460" y="300" width="70" height="60"/>
      <rect x="370" y="330" width="60" height="100"/>
      <rect x="500" y="170" width="34" height="70"/>
      <line x1="140" y1="430" x2="660" y2="430"/>
    </g>
    ${pigeon(520, 80, 2.4)}
  `,
  einkaufszentren: () => `
    <g ${stroke()}>
      <path d="M140 430 L140 260 C260 140, 540 140, 660 260 L660 430 Z"/>
      ${[220, 300, 380, 460, 540].map((x) => `<line x1="${x}" y1="430" x2="${x}" y2="${205 - Math.abs(400 - x) * 0.1}" stroke-opacity="0.35"/>`).join("")}
      <path d="M140 260 C260 140, 540 140, 660 260" stroke="${ACCENT}" stroke-opacity="0.9"/>
      <rect x="330" y="340" width="140" height="90"/>
      <line x1="90" y1="430" x2="710" y2="430"/>
    </g>
    ${pigeon(600, 90, 2.4)}
  `,
  stadien: () => `
    <g ${stroke()}>
      <ellipse cx="400" cy="330" rx="300" ry="90"/>
      <ellipse cx="400" cy="290" rx="300" ry="90" stroke-opacity="0.5"/>
      <path d="M100 330 L100 290 M700 330 L700 290"/>
      <line x1="180" y1="230" x2="150" y2="110"/>
      <line x1="620" y1="230" x2="650" y2="110"/>
      <rect x="120" y="80" width="60" height="34" stroke="${ACCENT}"/>
      <rect x="620" y="80" width="60" height="34" stroke="${ACCENT}"/>
    </g>
    ${pigeon(370, 120, 2.4)}
  `,
  innenstadthaeuser: () => `
    <g ${stroke()}>
      <path d="M120 430 L120 200 L200 160 L280 200 L280 430"/>
      <path d="M280 430 L280 170 L400 170 L400 430"/>
      <path d="M400 430 L400 210 L500 165 L600 210 L600 430"/>
      <line x1="120" y1="250" x2="280" y2="250" stroke-opacity="0.5"/>
      <line x1="280" y1="230" x2="400" y2="230" stroke-opacity="0.5"/>
      <line x1="400" y1="260" x2="600" y2="260" stroke-opacity="0.5"/>
      ${[150, 205, 245].map((x) => `<rect x="${x}" y="290" width="30" height="42" stroke-opacity="0.6"/>`).join("")}
      ${[310, 355].map((x) => `<rect x="${x}" y="270" width="30" height="42" stroke-opacity="0.6"/>`).join("")}
      ${[430, 480, 530].map((x) => `<rect x="${x}" y="300" width="30" height="42" stroke-opacity="0.6"/>`).join("")}
      <line x1="80" y1="430" x2="680" y2="430"/>
      <line x1="280" y1="170" x2="400" y2="170" stroke="${ACCENT}"/>
    </g>
    ${pigeon(620, 110, 2.4)}
  `,
  "ueber-uns": () => `
    <g ${stroke()}>
      <circle cx="330" cy="260" r="110"/>
      <path d="M330 175 L330 150 M330 345 L330 370 M245 260 L220 260 M415 260 L440 260" stroke-opacity="0.6"/>
      <path d="M290 260 L320 292 L385 222" stroke="${ACCENT}" stroke-width="7"/>
      <path d="M520 350 L560 310 M560 350 L520 310" stroke-opacity="0"/>
    </g>
    ${pigeon(520, 150, 2.6)}
  `,
  kontakt: () => `
    <g ${stroke()}>
      <path d="M400 130 C330 130, 280 185, 280 250 C280 330, 400 420, 400 420 C400 420, 520 330, 520 250 C520 185, 470 130, 400 130 Z"/>
      <circle cx="400" cy="248" r="42" stroke="${ACCENT}"/>
    </g>
    ${pigeon(560, 140, 2.4)}
  `,
};

const blogMotifs = {
  "taubenabwehr-kosten": () => `
    <g ${stroke()}>
      <rect x="250" y="120" width="300" height="310"/>
      <line x1="285" y1="185" x2="515" y2="185"/>
      ${[240, 295, 350].map((y) => `<line x1="285" y1="${y}" x2="455" y2="${y}" stroke-opacity="0.5"/>`).join("")}
      <line x1="285" y1="395" x2="515" y2="395" stroke="${ACCENT}"/>
    </g>
    <text x="565" y="200" font-family="Arial, sans-serif" font-size="90" font-weight="bold" fill="${ACCENT}">€</text>
    ${pigeon(120, 130, 2.4)}
  `,
  "spikes-oder-netze": () => `
    <g ${stroke()}>
      <line x1="100" y1="400" x2="360" y2="400"/>
      ${[130, 175, 220, 265, 310].map((x) => `<path d="M${x} 400 L${x + 12} 330 M${x} 400 L${x - 12} 330 M${x} 400 L${x} 320" stroke-opacity="0.8"/>`).join("")}
      <line x1="400" y1="120" x2="400" y2="430" stroke="${ACCENT}" stroke-opacity="0.5" stroke-dasharray="4 10"/>
      ${[440, 500, 560, 620, 680].map((x) => `<line x1="${x}" y1="150" x2="${x}" y2="410" stroke-opacity="0.6"/>`).join("")}
      ${[180, 240, 300, 360].map((y) => `<line x1="440" y1="${y}" x2="700" y2="${y}" stroke-opacity="0.6"/>`).join("")}
    </g>
    ${pigeon(180, 180, 2.4)}
  `,
  "taubenabwehr-rechtlich": () => `
    <g ${stroke()}>
      <line x1="400" y1="120" x2="400" y2="380"/>
      <line x1="270" y1="170" x2="530 " y2="170"/>
      <path d="M270 170 L230 260 A45 30 0 0 0 310 260 Z" stroke-opacity="0.7"/>
      <path d="M530 170 L490 260 A45 30 0 0 0 570 260 Z" stroke-opacity="0.7"/>
      <line x1="320" y1="410" x2="480" y2="410" stroke="${ACCENT}"/>
    </g>
    <text x="600" y="330" font-family="Georgia, serif" font-size="120" font-weight="bold" fill="${STEEL}">§</text>
    ${pigeon(150, 130, 2.4)}
  `,
  "warum-tauben-dach-balkon": () => `
    <g ${stroke()}>
      <path d="M160 300 L400 150 L640 300" />
      <path d="M240 260 L240 430 M560 260 L560 430" stroke-opacity="0.6"/>
      <rect x="330" y="300" width="140" height="70"/>
      <line x1="330" y1="370" x2="470" y2="370" stroke="${ACCENT}"/>
      <line x1="120" y1="430" x2="680" y2="430"/>
    </g>
    ${pigeon(390, 95, 2.6)}
    ${pigeon(480, 190, 2.0)}
  `,
  "taubenkot-gesundheitsrisiko": () => `
    <g ${stroke()}>
      <path d="M400 130 L620 400 L180 400 Z" stroke="${ACCENT}"/>
      <line x1="400" y1="220" x2="400" y2="320" stroke-width="7"/>
      <circle cx="400" cy="355" r="4" fill="${STEEL}"/>
      <path d="M160 180 C160 160, 180 150, 180 132 M220 220 C220 200, 240 190, 240 172" stroke-opacity="0.5"/>
    </g>
    ${pigeon(600, 130, 2.4)}
  `,
  "photovoltaik-tauben": () => `
    <g ${stroke()}>
      <g transform="translate(200 220) rotate(-14)">
        <rect x="0" y="0" width="320" height="170"/>
        <line x1="80" y1="0" x2="80" y2="170"/><line x1="160" y1="0" x2="160" y2="170"/><line x1="240" y1="0" x2="240" y2="170"/>
        <line x1="0" y1="57" x2="320" y2="57"/><line x1="0" y1="114" x2="320" y2="114"/>
      </g>
      <path d="M330 415 C400 390, 470 390, 540 415" stroke="${ACCENT}" stroke-opacity="0.8"/>
    </g>
    ${pigeon(590, 150, 2.8)}
  `,
  "taubenabwehr-weg": () => `
    <g ${stroke()}>
      <rect x="180" y="130" width="300" height="300"/>
      ${[175, 245, 315].map((y) => `<rect x="210" y="${y}" width="80" height="40" stroke-opacity="0.6"/><rect x="360" y="${y}" width="80" height="40" stroke-opacity="0.6"/>`).join("")}
      <rect x="540" y="240" width="150" height="190" stroke="${ACCENT}"/>
      <path d="M570 300 L600 330 L660 270" stroke="${ACCENT}" stroke-width="6"/>
      <line x1="140" y1="430" x2="720" y2="430"/>
    </g>
    ${pigeon(560, 130, 2.2)}
  `,
  "tierfreundliche-taubenvergraemung": () => `
    <g ${stroke()}>
      <path d="M400 400 C300 330, 250 260, 290 205 C320 165, 380 175, 400 220 C420 175, 480 165, 510 205 C550 260, 500 330, 400 400 Z" stroke="${ACCENT}"/>
    </g>
    ${pigeon(360, 250, 2.8, "#c3c9cf")}
  `,
  "serioeser-anbieter-checkliste": () => `
    <g ${stroke()}>
      <rect x="260" y="110" width="280" height="330"/>
      ${[170, 240, 310, 380].map((y, i) => `
        <rect x="295" y="${y}" width="36" height="36" ${i < 3 ? `stroke="${ACCENT}"` : ""}/>
        ${i < 3 ? `<path d="M303 ${y + 18} L312 ${y + 27} L326 ${y + 9}" stroke="${ACCENT}" stroke-width="5"/>` : ""}
        <line x1="355" y1="${y + 18}" x2="505" y2="${y + 18}" stroke-opacity="0.5"/>
      `).join("")}
    </g>
    ${pigeon(590, 150, 2.4)}
  `,
  "taubenabwehr-stuttgart-nuertingen": () => `
    <g ${stroke()}>
      <line x1="220" y1="430" x2="220" y2="180"/>
      <ellipse cx="220" cy="150" rx="55" ry="30"/>
      <line x1="220" y1="120" x2="220" y2="85" stroke="${ACCENT}"/>
      <path d="M320 430 L320 320 L400 320 L400 430 M430 430 L430 280 L520 280 L520 430 M550 430 L550 340 L640 340 L640 430"/>
      <line x1="160" y1="430" x2="700" y2="430"/>
    </g>
    ${pigeon(560, 160, 2.4)}
  `,
};

function svgFor(motif, w, h) {
  const box = { w: 800, h: 500 };
  const scale = Math.min((w * 0.72) / box.w, (h * 0.78) / box.h);
  const tx = (w - box.w * scale) / 2;
  const ty = (h - box.h * scale) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${INK2}"/>
      <stop offset="1" stop-color="${INK}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${grid(w, h)}
  <line x1="0" y1="${h - 6}" x2="${w * 0.38}" y2="${h - 6}" stroke="${ACCENT}" stroke-width="12"/>
  <g transform="translate(${tx} ${ty}) scale(${scale})">${motif()}</g>
</svg>`;
}

async function render(file, motif, w, h) {
  const svg = svgFor(motif, w, h);
  const out = path.join(OUT, file);
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(out);
  console.log("✓", file);
}

await render("hero.jpg", motifs.hero, 2000, 1250);
await render("ueber-uns.jpg", motifs["ueber-uns"], 1600, 1200);
await render("kontakt.jpg", motifs.kontakt, 1600, 1200);

for (const slug of [
  "fabriken-unternehmen",
  "parkhaeuser",
  "photovoltaikanlagen",
  "buerokomplexe",
  "mehrfamilienhaeuser",
  "einfamilienhaeuser",
  "einkaufszentren",
  "stadien",
  "innenstadthaeuser",
]) {
  await render(`segments/${slug}.jpg`, motifs[slug], 1500, 1000);
}

for (const [slug, motif] of Object.entries(blogMotifs)) {
  await render(`blog/${slug}.jpg`, motif, 1600, 900);
}

console.log("Fertig.");
