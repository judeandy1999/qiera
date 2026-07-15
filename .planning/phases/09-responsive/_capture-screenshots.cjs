const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(".planning", "phases", "09-responsive", "screenshots");
const BASE = process.env.QIERA_BASE || "http://localhost:3001";

const HOME_WIDTHS = [1440, 1280, 1024, 768, 390, 360];
const SECONDARY = [
  ["/network", "network"],
  ["/contact", "contact"],
  ["/start-intelligence-audit", "audit"],
  ["/privacy", "privacy"],
];

async function overflow(page) {
  return page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth + 1,
  );
}

async function shot(page, url, name, w, h = 1100) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(350);
  const ov = await overflow(page);
  console.log(name, "overflow", ov);
  await page.screenshot({ path: path.join(OUT, name), fullPage: true });
  return ov;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));
  const bad = [];

  for (const w of HOME_WIDTHS) {
    const name = `home-${w}.png`;
    if (await shot(page, `${BASE}/`, name, w, w <= 390 ? 844 : 1200)) {
      bad.push(name);
    }
  }

  for (const [route, slug] of SECONDARY) {
    for (const w of [1440, 768, 390]) {
      const name = `${slug}-${w}.png`;
      if (await shot(page, `${BASE}${route}`, name, w, w <= 390 ? 844 : 1100)) {
        bad.push(name);
      }
    }
  }

  // Header check @768 — hamburger visible, desktop nav hidden
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  const headerState = await page.evaluate(() => {
    const open = document.querySelector('button[aria-label="Open menu"]');
    const desktopNav = document.querySelector('header nav[aria-label="Primary"]');
    const style = desktopNav ? getComputedStyle(desktopNav) : null;
    return {
      hamburger: !!open && getComputedStyle(open).display !== "none",
      desktopNavDisplay: style ? style.display : null,
    };
  });
  console.log("header@768", headerState);
  await page.locator("header").screenshot({
    path: path.join(OUT, "header-768.png"),
  });

  await browser.close();
  console.log("overflowFailures", bad);
  console.log("consoleErrors", consoleErrors.slice(0, 5));
  console.log("done");
  if (bad.length) process.exit(2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
