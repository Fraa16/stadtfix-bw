/**
 * Einmaliges Skript: konvertiert die hochgeladenen PNGs (Repo-Root)
 * nach public/images/**.webp und erzeugt das OG-Bild (JPEG).
 * Aufruf: node scripts/convert-images.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve(process.cwd(), "public/images");

/** Ziel-Slot → Quelldatei im Repo-Root */
const mapping = {
  "hero.webp": "Hero.png",
  "ueber-uns.webp": "Taubenabwehr-fuer-Gebaude.png",
  "segments/fabriken-unternehmen.webp": "Taubenabwehr-fuer-Fabriken.png",
  "segments/parkhaeuser.webp": "Taubenabwehr-Lagerhalle.png",
  "segments/photovoltaikanlagen.webp": "Taubenabwehr-fuer-Photovoltaik.png",
  "segments/buerokomplexe.webp": "Taubenabwehr-fuer-Bueros.png",
  "segments/mehrfamilienhaeuser.webp": "Taubenabwehr-fuer-Mehrfamilienhauuser.png",
  "segments/einfamilienhaeuser.webp": "Taubenabwehr-fuer-Einfamilienhauuser.png",
  "segments/einkaufszentren.webp": "Taubenabwehr-Einkaufszentrum.png",
  "segments/stadien.webp": "Schutznetze-fuer-Lagerhallen.png",
  "segments/innenstadthaeuser.webp": "Taubenabwehr-am-Fenster.png",
  "blog/taubenabwehr-kosten.webp": "Taubenabwehr-spikes.png",
  "blog/spikes-oder-netze.webp": "Schutznetze-fuer-Voegel.png",
  "blog/taubenabwehr-rechtlich.webp": "Taube-close-up.png",
  "blog/warum-tauben-dach-balkon.webp": "Taube-auf-dem-Dach.png",
  "blog/taubenkot-gesundheitsrisiko.webp": "Taube.png",
  "blog/photovoltaik-tauben.webp": "Taubenabwehr-fuer-Solarplatten.png",
  "blog/taubenabwehr-weg.webp": "Taubenabwehr-fuer-Unternehmen.png",
  "blog/tierfreundliche-taubenvergraemung.webp": "Spikes-und-Taube.png",
  "blog/serioeser-anbieter-checkliste.webp": "Spikes-auf-dem-Dach.png",
  "blog/taubenabwehr-stuttgart-nuertingen.webp": "Draht-Abwehrsystem.png",
};

for (const [target, source] of Object.entries(mapping)) {
  const width = target === "hero.webp" ? 2400 : 1600;
  const out = path.join(OUT, target);
  await mkdir(path.dirname(out), { recursive: true });
  await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log("✓", target, "←", source);
}

// OG-Bild als JPEG (WhatsApp & ältere Scraper mögen kein WebP)
await sharp("Hero.png")
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 82 })
  .toFile(path.join(OUT, "og-image.jpg"));
console.log("✓ og-image.jpg");
