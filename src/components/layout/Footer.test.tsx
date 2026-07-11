import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { primaryNav, legalNav } from "@/data/navigation";

test("footer renders the single-source nav set, copyright, and legal links, with no Pricing/Resources/Security", () => {
  render(<Footer />);

  for (const item of primaryNav) {
    expect(screen.getAllByText(item.label).length).toBeGreaterThan(0);
  }

  expect(screen.getByText("© 2026 QIERA. All rights reserved.")).toBeInTheDocument();

  for (const item of legalNav) {
    expect(screen.getByText(item.label)).toBeInTheDocument();
  }

  expect(screen.queryByText("Pricing")).not.toBeInTheDocument();
  expect(screen.queryByText("Resources")).not.toBeInTheDocument();
  expect(screen.queryByText("Security")).not.toBeInTheDocument();
});
