const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(".planning", "phases", "07-forms", "screenshots");
const BASE = process.env.QIERA_BASE || "http://localhost:3001";

async function shot(page, url, name, w, h) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth + 1,
  );
  console.log(name, "overflow", overflow);
  await page.screenshot({ path: path.join(OUT, name), fullPage: true });
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await shot(page, `${BASE}/contact`, "contact-1440.png", 1440, 1100);
  await shot(page, `${BASE}/contact`, "contact-768.png", 768, 1100);
  await shot(page, `${BASE}/contact`, "contact-390.png", 390, 844);
  await shot(
    page,
    `${BASE}/contact?topic=partnership`,
    "contact-topic-partnership-1440.png",
    1440,
    1100,
  );

  await shot(
    page,
    `${BASE}/start-intelligence-audit`,
    "audit-1440.png",
    1440,
    1200,
  );
  await shot(
    page,
    `${BASE}/start-intelligence-audit`,
    "audit-768.png",
    768,
    1200,
  );
  await shot(
    page,
    `${BASE}/start-intelligence-audit`,
    "audit-390.png",
    390,
    844,
  );

  // Confirm partnership preselect visually (select value)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE}/contact?topic=partnership`, {
    waitUntil: "networkidle",
  });
  const topicValue = await page.evaluate(() => {
    const el = document.querySelector("#contact-topic");
    return el instanceof HTMLSelectElement ? el.value : null;
  });
  console.log("topicPreselect", topicValue);

  await browser.close();
  console.log("consoleErrors", consoleErrors.slice(0, 5));
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
