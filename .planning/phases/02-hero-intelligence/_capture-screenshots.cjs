const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(
  ".planning",
  "phases",
  "02-hero-intelligence",
  "screenshots",
);
const BASE = "http://localhost:3000";

async function shot(page, name) {
  const file = path.join(OUT, name);
  await page.screenshot({ path: file, fullPage: true });
  console.log("wrote", file, fs.statSync(file).size);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  async function gotoHome(width, height = 900) {
    await page.setViewportSize({ width, height });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
  }

  async function overflowCheck(width) {
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        hasHScroll: doc.scrollWidth > doc.clientWidth + 1,
      };
    });
    console.log(`overflow@${width}`, overflow);
    return overflow;
  }

  // Hero + intelligence full page at each width
  for (const w of [1440, 1024, 390]) {
    await gotoHome(w, w === 390 ? 844 : 1100);
    await overflowCheck(w);

    // Hero-focused crop via section bounding box if possible
    const hero = page.locator("section").first();
    await hero.screenshot({ path: path.join(OUT, `hero-${w}.png`) });
    console.log("hero", w);

    const intel = page.locator("#intelligence");
    await intel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await intel.screenshot({ path: path.join(OUT, `intelligence-${w}.png`) });
    console.log("intelligence", w);
  }

  // Modals at 1440
  await gotoHome(1440, 1100);
  for (const [label, file] of [
    ["Market Intelligence", "modal-market-1440.png"],
    ["Customer Intelligence", "modal-customer-1440.png"],
    ["Brand Intelligence", "modal-brand-1440.png"],
  ]) {
    await page.getByRole("button", { name: `Learn more about ${label}` }).click();
    await page.waitForSelector('dialog[open], dialog:visible', { timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(400);
    const dialog = page.getByRole("dialog");
    await dialog.screenshot({ path: path.join(OUT, file) });
    console.log("modal", file);
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
  }

  // Modal at 390
  await gotoHome(390, 844);
  await page.getByRole("button", { name: "Learn more about Market Intelligence" }).click();
  await page.waitForTimeout(400);
  await page.getByRole("dialog").screenshot({ path: path.join(OUT, "modal-390.png") });
  console.log("modal-390");

  console.log("consoleErrors", consoleErrors);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
