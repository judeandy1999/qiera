import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

describe("FinalCtaSection", () => {
  it("renders exact UI-SPEC copy, hrefs, and a11y anchors", () => {
    const { container } = render(<FinalCtaSection />);

    const section = container.querySelector("#final-cta");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("aria-labelledby", "final-cta-heading");

    expect(
      screen.getByText("START AN INTELLIGENCE AUDIT"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Begin with clarity. Grow with intelligence.",
      }),
    ).toHaveAttribute("id", "final-cta-heading");
    expect(
      screen.getByText(
        "Our Intelligence Audit identifies what's holding your eCommerce growth back, uncovers your highest-impact opportunities, and gives you a clear roadmap for what to do next.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Takes less than 2 minutes")).toBeInTheDocument();

    const primary = screen.getByRole("link", {
      name: /Start Intelligence Audit/,
    });
    expect(primary).toHaveAttribute("href", "/start-intelligence-audit");

    const secondary = screen.getByRole("link", { name: "Contact" });
    expect(secondary).toHaveAttribute("href", "/contact");

    expect(
      within(container).queryByText(/Start My Intelligence Audit/),
    ).not.toBeInTheDocument();
  });
});
