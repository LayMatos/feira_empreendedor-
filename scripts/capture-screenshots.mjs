import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "docs", "screenshots");
const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:5175";

const shots = [
  { name: "01-hero-desktop", viewport: { width: 1440, height: 900 }, fullPage: false },
  { name: "02-hero-mobile", viewport: { width: 390, height: 844 }, fullPage: false },
  { name: "03-pagina-completa", viewport: { width: 1440, height: 900 }, fullPage: true },
  { name: "04-metricas", selector: "section:has(h2:has-text('Em 2024'))" },
  { name: "05-secao-institucional", selector: "section:has(h2:has-text('Por um Ceará'))" },
  { name: "06-inscricoes", selector: "section:has(h2:has-text('Faça parte agora'))" },
  { name: "07-palestrantes", selector: "section:has(h2:has-text('Palestrantes 2025'))" },
  { name: "08-galeria-carrossel", selector: "#galeria" },
  { name: "09-newsletter", selector: "#novidades" },
  { name: "10-patrocinio", selector: "#patrocinadores" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const shot of shots) {
  const viewport = shot.viewport || { width: 1440, height: 900 };
  await page.setViewportSize(viewport);
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  const filePath = path.join(outDir, `${shot.name}.png`);

  if (shot.fullPage) {
    await page.screenshot({ path: filePath, fullPage: true });
    console.log("OK", shot.name);
    continue;
  }

  if (shot.selector) {
    const el = page.locator(shot.selector).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await el.screenshot({ path: filePath });
    console.log("OK", shot.name);
    continue;
  }

  await page.screenshot({ path: filePath });
  console.log("OK", shot.name);
}

await browser.close();
console.log("Screenshots saved to", outDir);
