import { afterEach, describe, expect, it, vi } from "vitest";

import { trackConsultationSubmit, trackCtaClick } from "@/lib/analytics";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("analytics", () => {
  it("sends cta_click when gtag is available", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag, location: { pathname: "/test" } });

    trackCtaClick({
      cta_label: "Book",
      cta_location: "service_hero",
      page_path: "/test",
    });

    expect(gtag).toHaveBeenCalledWith("event", "cta_click", {
      cta_label: "Book",
      cta_location: "service_hero",
      page_path: "/test",
    });
  });

  it("no-ops when gtag is missing", () => {
    vi.stubGlobal("window", { location: { pathname: "/test" } });
    expect(() =>
      trackConsultationSubmit({ topic: "growth-consulting" }),
    ).not.toThrow();
  });
});
