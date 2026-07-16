/* Screenshot-Helfer für die lokale Sichtprüfung. Aufruf:
   node scripts/screenshot.mjs <url> <outfile> [width] [--full] */
import { chromium } from "playwright-core";

const [url, out, widthArg, fullArg] = process.argv.slice(2);
const width = Number(widthArg ?? 1440);
const fullPage = fullArg === "--full" || widthArg === "--full";

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
  env: { ...process.env, HTTP_PROXY: "", HTTPS_PROXY: "", http_proxy: "", https_proxy: "" },
});
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(600);
// Einmal durchscrollen, damit Reveal-Animationen und Lazy-Images ausgelöst sind
if (fullPage) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    const step = window.innerHeight * 0.7;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}
await page.screenshot({ path: out, fullPage });
await browser.close();
console.log("✓", out);
