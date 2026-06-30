import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "docs", "screenshots");
const baseUrl = process.env.SCREENSHOT_URL || "http://localhost:5175";

const DESKTOP = { width: 1280, height: 800 };
const MOBILE = { width: 390, height: 844 };

const shots = [
  { name: "01-hero-desktop", viewport: DESKTOP },
  { name: "02-hero-mobile", viewport: MOBILE },
  {
    name: "03-visao-geral",
    viewport: DESKTOP,
    fullPage: true,
    clipHeight: 4200,
  },
  { name: "04-metricas", viewport: DESKTOP, selector: "section:has(h2:has-text('Em 2024'))" },
  { name: "05-secao-institucional", viewport: DESKTOP, selector: "section:has(h2:has-text('Por um Ceará'))" },
  { name: "06-inscricoes", viewport: DESKTOP, selector: "section:has(h2:has-text('Faça parte agora'))" },
  { name: "07-palestrantes", viewport: DESKTOP, selector: "section:has(h2:has-text('Palestrantes 2025'))" },
  { name: "08-galeria-carrossel", viewport: DESKTOP, selector: "#galeria .max-w-5xl" },
  { name: "09-newsletter", viewport: DESKTOP, selector: "#novidades" },
  { name: "10-patrocinio", viewport: DESKTOP, selector: "#patrocinadores" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

async function preparePage(viewport) {
  await page.setViewportSize(viewport);
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.addStyleTag({
    content: `
      html, body, #root { overflow-x: hidden !important; }
      * { scroll-behavior: auto !important; }
    `,
  });
}

for (const shot of shots) {
  const viewport = shot.viewport || DESKTOP;
  await preparePage(viewport);

  const filePath = path.join(outDir, `${shot.name}.png`);

  if (shot.fullPage) {
    const height = Math.min(shot.clipHeight || 4000, await page.evaluate(() => document.body.scrollHeight));
    await page.screenshot({
      path: filePath,
      clip: { x: 0, y: 0, width: viewport.width, height },
    });
    console.log("OK", shot.name, `(${viewport.width}x${height})`);
    continue;
  }

  if (shot.selector) {
    const el = page.locator(shot.selector).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await el.screenshot({ path: filePath, animations: "disabled" });
    console.log("OK", shot.name);
    continue;
  }

  await page.screenshot({ path: filePath, animations: "disabled" });
  console.log("OK", shot.name);
}

await browser.close();
console.log("Screenshots saved to", outDir);
