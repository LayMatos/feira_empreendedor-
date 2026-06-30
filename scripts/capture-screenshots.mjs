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
  { name: "01-hero-desktop", viewport: DESKTOP, hideHeader: false },
  { name: "02-hero-mobile", viewport: MOBILE, hideHeader: false },
  {
    name: "03-visao-geral",
    viewport: DESKTOP,
    fullPage: true,
    clipHeight: 4200,
    hideHeader: true,
  },
  {
    name: "04-metricas",
    viewport: DESKTOP,
    selector: "section:has(h2:has-text('Em 2024'))",
    hideHeader: true,
  },
  {
    name: "05-secao-institucional",
    viewport: DESKTOP,
    selector: "section:has(h2:has-text('Por um Ceará'))",
    hideHeader: true,
  },
  {
    name: "06-inscricoes",
    viewport: DESKTOP,
    selector: "section:has(h2:has-text('Faça parte agora'))",
    hideHeader: true,
  },
  {
    name: "07-palestrantes",
    viewport: DESKTOP,
    selector: "#palestrantes .max-w-6xl",
    hideHeader: true,
  },
  {
    name: "08-galeria-carrossel",
    viewport: DESKTOP,
    selector: "#galeria .max-w-5xl",
    hideHeader: true,
  },
  {
    name: "09-newsletter",
    viewport: DESKTOP,
    selector: "#novidades .max-w-5xl",
    hideHeader: true,
  },
  {
    name: "10-patrocinio",
    viewport: DESKTOP,
    selector: "#patrocinadores .max-w-7xl",
    hideHeader: true,
  },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

async function setHeaderVisible(visible) {
  await page.evaluate((show) => {
    const header = document.querySelector("header");
    if (header) header.style.display = show ? "" : "none";
  }, visible);
}

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
  await setHeaderVisible(shot.hideHeader === false);

  const filePath = path.join(outDir, `${shot.name}.png`);

  if (shot.fullPage) {
    const height = Math.min(
      shot.clipHeight || 4000,
      await page.evaluate(() => document.body.scrollHeight)
    );
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
    await page.evaluate(() => window.scrollBy(0, -8));
    await page.waitForTimeout(500);
    await el.screenshot({ path: filePath, animations: "disabled" });
    console.log("OK", shot.name);
    continue;
  }

  await page.screenshot({ path: filePath, animations: "disabled" });
  console.log("OK", shot.name);
}

await browser.close();
console.log("Screenshots saved to", outDir);
