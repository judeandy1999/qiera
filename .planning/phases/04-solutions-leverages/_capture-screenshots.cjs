const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(
  ".planning",
  "phases",
  "04-solutions-leverages",
  "screenshots",
);
const BASE = "http://localhost:3000";

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  async function goto(width, height = 1100) {
    await page.setViewportSize({ width, height });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
  }

  async function overflow(width) {
    const o = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasHScroll:
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
    }));
    console.log(`overflow@${width}`, o);
  }

  // solutions overview @1440 (default revenue)
  await goto(1440);
  await overflow(1440);
  await page.locator("#solutions").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page
    .locator("#solutions")
    .screenshot({ path: path.join(OUT, "solutions-1440.png") });

  // conversion tab @1440
  await page.getByRole("tab", { name: /Conversion-Problems/i }).click();
  await page.waitForTimeout(400);
  await page
    .locator("#solutions")
    .screenshot({ path: path.join(OUT, "solutions-tab-conversion-1440.png") });

  for (const w of [1024, 390]) {
    await goto(w, w === 390 ? 844 : 1100);
    await overflow(w);
    await page.locator("#solutions").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page
      .locator("#solutions")
      .screenshot({ path: path.join(OUT, `solutions-${w}.png`) });
  }

  for (const w of [1440, 1024, 390]) {
    await goto(w, w === 390 ? 844 : 1100);
    await overflow(w);
    await page.locator("#leverages").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page
      .locator("#leverages")
      .screenshot({ path: path.join(OUT, `leverages-${w}.png`) });
  }

  await goto(1440);
  await page.locator("#leverages").scrollIntoViewIfNeeded();
  await page
    .getByRole("button", { name: "Learn more about Revenue Leverage" })
    .click();
  await page.waitForTimeout(500);
  await page
    .getByRole("dialog", { name: "Revenue Leverage" })
    .screenshot({ path: path.join(OUT, "modal-revenue-leverage-1440.png") });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  await goto(390, 844);
  await page.locator("#leverages").scrollIntoViewIfNeeded();
  await page
    .getByRole("button", { name: "Learn more about Revenue Leverage" })
    .click();
  await page.waitForTimeout(500);
  await page
    .getByRole("dialog", { name: "Revenue Leverage" })
    .screenshot({ path: path.join(OUT, "modal-leverage-390.png") });

  console.log("consoleErrors", consoleErrors);
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
