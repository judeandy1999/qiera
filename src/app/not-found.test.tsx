import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import NotFound from "@/app/not-found";

afterEach(cleanup);

describe("NotFound", () => {
  it("renders branded 404 with Home and Audit CTAs", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Home/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(
      screen.getByRole("link", { name: /Start Intelligence Audit/i }),
    ).toHaveAttribute("href", "/start-intelligence-audit");
  });
});
