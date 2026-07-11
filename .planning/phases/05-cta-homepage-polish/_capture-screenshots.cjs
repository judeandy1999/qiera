const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(
  ".planning",
  "phases",
  "05-cta-homepage-polish",
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
    await page.waitForTimeout(500);
  }

  async function measureHeader(label) {
    const h = await page.evaluate(() => {
      const el = document.querySelector("header");
      return el ? Math.round(el.getBoundingClientRect().height) : null;
    });
    console.log(`header@${label}`, h);
    return h;
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

  // homepage-1440 — scroll so Final CTA is in view, full page screenshot tall
  await goto(1440, 1600);
  await measureHeader(1440);
  await overflow(1440);
  await page.locator("#final-cta").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT, "homepage-1440.png"),
    fullPage: false,
  });
  await page.locator("#final-cta").screenshot({
    path: path.join(OUT, "final-cta-1440.png"),
  });

  await goto(1280, 1400);
  await measureHeader(1280);
  await overflow(1280);
  await page.locator("#final-cta").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT, "homepage-1280.png"),
    fullPage: false,
  });

  await goto(768, 1200);
  await measureHeader(768);
  await overflow(768);
  await page.locator("#final-cta").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT, "homepage-768.png"),
    fullPage: false,
  });

  await goto(390, 844);
  await measureHeader(390);
  await overflow(390);
  await page.locator("#final-cta").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT, "homepage-390.png"),
    fullPage: false,
  });

  // hash-intelligence — navigate with hash and verify clearance
  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto(`${BASE}/#intelligence`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const clearance = await page.evaluate(() => {
    const header = document.querySelector("header");
    const section = document.querySelector("#intelligence");
    if (!header || !section) return null;
    const hb = header.getBoundingClientRect();
    const sb = section.getBoundingClientRect();
    return {
      headerHeight: Math.round(hb.height),
      sectionTop: Math.round(sb.top),
      gap: Math.round(sb.top - hb.bottom),
    };
  });
  console.log("hash-intelligence clearance", clearance);
  await page.screenshot({
    path: path.join(OUT, "hash-intelligence-1440.png"),
    fullPage: false,
  });

  await browser.close();
  if (consoleErrors.length) {
    console.log("consoleErrors", consoleErrors.slice(0, 10));
  } else {
    console.log("consoleErrors none");
  }
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
