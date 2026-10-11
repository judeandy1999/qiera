import { describe, expect, it } from "vitest";

import { isNavEntryActive, isNavItemActive } from "@/lib/nav-active";
import { primaryNav } from "@/data/navigation";

describe("isNavItemActive", () => {
  it("highlights homepage hash links when hash matches", () => {
    expect(isNavItemActive("/", "intelligence", "/#intelligence")).toBe(true);
    expect(isNavItemActive("/", "process", "/#intelligence")).toBe(false);
    expect(isNavItemActive("/network", "intelligence", "/#intelligence")).toBe(
      false,
    );
  });

  it("highlights route links by pathname", () => {
    expect(isNavItemActive("/network", "", "/network")).toBe(true);
    expect(isNavItemActive("/contact", "", "/contact")).toBe(true);
    expect(isNavItemActive("/", "", "/network")).toBe(false);
  });

  it("highlights service routes", () => {
    expect(
      isNavItemActive(
        "/ecommerce-growth-consulting",
        "",
        "/ecommerce-growth-consulting",
      ),
    ).toBe(true);
    expect(
      isNavItemActive(
        "/fractional-ecommerce-cmo",
        "",
        "/fractional-ecommerce-cmo",
      ),
    ).toBe(true);
  });
});

describe("isNavEntryActive", () => {
  it("marks Services active when a child route matches", () => {
    const services = primaryNav.find((item) => item.label === "Services");
    expect(services).toBeDefined();
    expect(
      isNavEntryActive("/ecommerce-growth-consulting", "", services!),
    ).toBe(true);
    expect(isNavEntryActive("/network", "", services!)).toBe(false);
  });
});
