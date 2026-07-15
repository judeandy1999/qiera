import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { cookiesDocument } from "@/data/cookies";
import { privacyDocument } from "@/data/privacy";
import { termsDocument } from "@/data/terms";

afterEach(cleanup);

describe("LegalPageContent", () => {
  it("renders privacy chrome, provisional notice, TOC targets, and contact email", () => {
    render(<LegalPageContent document={privacyDocument} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Privacy Policy" }),
    ).toBeInTheDocument();
    expect(screen.getByText("LEGAL")).toBeInTheDocument();
    expect(
      screen.getByText("Provisional copy — pending legal review."),
    ).toBeInTheDocument();

    const toc = screen.getByRole("navigation", { name: "On this page" });
    expect(within(toc).getByText("ON THIS PAGE")).toBeInTheDocument();
    expect(privacyDocument.sections).toHaveLength(12);

    for (const section of privacyDocument.sections) {
      expect(within(toc).getByRole("link", { name: new RegExp(section.title) })).toHaveAttribute(
        "href",
        `#${section.id}`,
      );
      expect(document.getElementById(section.id)).not.toBeNull();
    }

    expect(
      screen.getByRole("link", { name: "privacy@qiera.com" }),
    ).toHaveAttribute("href", "mailto:privacy@qiera.com");
  });

  it("renders terms of service with fifteen sections", () => {
    render(<LegalPageContent document={termsDocument} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Terms of Service" }),
    ).toBeInTheDocument();
    expect(termsDocument.sections).toHaveLength(15);
    expect(
      screen.getByRole("link", { name: "legal@qiera.com" }),
    ).toHaveAttribute("href", "mailto:legal@qiera.com");
  });

  it("renders cookie policy table", () => {
    render(<LegalPageContent document={cookiesDocument} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Cookie Policy" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Cookie Category" })).toBeInTheDocument();
    expect(screen.getByText("Essential Cookies")).toBeInTheDocument();
    expect(cookiesDocument.sections).toHaveLength(9);
  });
});
