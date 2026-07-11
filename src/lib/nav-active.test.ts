import { describe, expect, it } from "vitest";

import { isNavItemActive } from "@/lib/nav-active";

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
});
