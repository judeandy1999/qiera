import { expect, test } from "vitest";
import { primaryNav, primaryCta, legalNav } from "./navigation";

test("primaryNav contains exactly the locked v1 link set, in order", () => {
  const labels = primaryNav.map((item) => item.label);
  expect(labels).toEqual([
    "Intelligence",
    "Process",
    "Solutions",
    "Leverages",
    "Network",
    "Contact",
  ]);
});

test("primaryNav excludes Pricing, Resources, and Security", () => {
  const labels = primaryNav.map((item) => item.label);
  expect(labels).not.toContain("Pricing");
  expect(labels).not.toContain("Resources");
  expect(labels).not.toContain("Security");
});

test("primaryNav uses the locked spelling 'Leverages' and 'Contact'", () => {
  const labels = primaryNav.map((item) => item.label);
  expect(labels).not.toContain("Leverage");
  expect(labels).not.toContain("Contact Us");
  expect(labels).toContain("Leverages");
  expect(labels).toContain("Contact");
});

test("primaryCta has the locked label and href", () => {
  expect(primaryCta.label).toBe("Start Intelligence Audit");
  expect(primaryCta.href).toBe("/start-intelligence-audit");
});

test("primaryNav homepage hashes target the four section ids", () => {
  const hashes = primaryNav
    .filter((item) => item.href.startsWith("/#"))
    .map((item) => item.href);
  expect(hashes).toEqual([
    "/#intelligence",
    "/#process",
    "/#solutions",
    "/#leverages",
  ]);
});

test("legalNav contains exactly the locked legal link set, in order", () => {
  const labels = legalNav.map((item) => item.label);
  expect(labels).toEqual(["Privacy Policy", "Terms of Use", "Cookie Policy"]);
});
