const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUT = path.join(".planning", "phases", "06-network", "screenshots");
const BASE = "http://localhost:3000/network";

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  for (const [w, h, name] of [
    [1440, 1100, "network-1440.png"],
    [768, 1100, "network-768.png"],
    [390, 844, "network-390.png"],
  ]) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
    );
    console.log(name, "overflow", overflow);
    await page.screenshot({ path: path.join(OUT, name), fullPage: true });
  }

  // Active nav check @1440
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  const active = await page.evaluate(() => {
    const link = document.querySelector('a[href="/network"][aria-current="page"]');
    return link ? link.textContent : null;
  });
  console.log("activeNetwork", active);
  await page.locator("header").screenshot({
    path: path.join(OUT, "network-header-active-1440.png"),
  });

  await browser.close();
  console.log("consoleErrors", consoleErrors.slice(0, 5));
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
