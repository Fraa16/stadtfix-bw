/**
 * Einmaliges Skript: konvertiert die Kundenfotos aus public/projektbilder/
 * (echtes PV-/Taubenabwehr-Projekt) in die vorhandenen public/images/**.webp-Slots.
 * Aufruf: node scripts/convert-projektbilder.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve(process.cwd(), "public/projektbilder");
const OUT = path.resolve(process.cwd(), "public/images");

/** Ziel-Slot → Quelldatei in public/projektbilder */
const mapping = {
  "segments/photovoltaikanlagen.webp": "PV-Spikes2.jpg",
  "blog/taubenabwehr-kosten.webp": "PV-Spikes.jpg",
  "blog/taubenabwehr-stuttgart-nuertingen.webp": "Projekt-PV.jpg",
  "blog/serioeser-anbieter-checkliste.webp": "Projekt-PV4.jpg",
  "blog/tierfreundliche-taubenvergraemung.webp": "Projekt-PV3.jpg",
  "blog/photovoltaik-tauben.webp": "Projekt-PV2.jpg",
};

for (const [target, source] of Object.entries(mapping)) {
  const out = path.join(OUT, target);
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(path.join(SRC, source))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log("✓", target, "←", source);
}
