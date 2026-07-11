const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(".planning", "phases", "03-process", "screenshots");
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

  for (const w of [1440, 768, 390]) {
    await gotoHome(w, w === 390 ? 844 : 1100);
    await overflowCheck(w);
    const process = page.locator("#process");
    await process.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await process.screenshot({ path: path.join(OUT, `process-${w}.png`) });
    console.log("process", w);
  }

  // Discover modal @1440
  await gotoHome(1440, 1100);
  await page.locator("#process").scrollIntoViewIfNeeded();
  await page
    .getByRole("button", { name: "Read more about Discover Opportunities" })
    .click();
  await page.waitForTimeout(400);
  await page
    .getByRole("dialog", { name: "Discover Opportunities" })
    .screenshot({ path: path.join(OUT, "modal-discover-1440.png") });
  console.log("modal-discover-1440");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  // Architect modal @1440
  await page
    .getByRole("button", { name: "Read more about Architect Solutions" })
    .click();
  await page.waitForTimeout(400);
  await page
    .getByRole("dialog", { name: "Architect Solutions" })
    .screenshot({ path: path.join(OUT, "modal-architect-1440.png") });
  console.log("modal-architect-1440");
  await page.keyboard.press("Escape");
  await page
    .getByRole("dialog", { name: "Architect Solutions" })
    .waitFor({ state: "hidden", timeout: 5000 })
    .catch(() => {});
  await page.waitForTimeout(300);

  // Modal @390
  await gotoHome(390, 844);
  await page.locator("#process").scrollIntoViewIfNeeded();
  await page
    .getByRole("button", { name: "Read more about Discover Opportunities" })
    .click();
  await page.waitForTimeout(400);
  await page
    .getByRole("dialog", { name: "Discover Opportunities" })
    .screenshot({ path: path.join(OUT, "modal-390.png") });
  console.log("modal-390");

  console.log("consoleErrors", consoleErrors);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
