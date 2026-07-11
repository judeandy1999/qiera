import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SolutionsSection } from "./SolutionsSection";

afterEach(cleanup);

test("renders exactly 10 challenge tabs", () => {
  render(<SolutionsSection />);
  expect(screen.getAllByRole("tab")).toHaveLength(10);
});

test("defaults to Revenue-Leaks selected", () => {
  render(<SolutionsSection />);
  const tab = screen.getByRole("tab", { name: /Revenue-Leaks/i });
  expect(tab).toHaveAttribute("aria-selected", "true");
  expect(screen.getByRole("heading", { name: /Stop Revenue Leaks/i })).toBeInTheDocument();
});

test("clicking Conversion-Problems updates panel content", async () => {
  const user = userEvent.setup();
  render(<SolutionsSection />);

  await user.click(screen.getByRole("tab", { name: /Conversion-Problems/i }));
  expect(
    screen.getByRole("tab", { name: /Conversion-Problems/i }),
  ).toHaveAttribute("aria-selected", "true");
  expect(
    screen.getByRole("heading", { name: /Solve Conversion Problems/i }),
  ).toBeInTheDocument();
});

test("ArrowRight from first tab selects Growth-Constraints", async () => {
  const user = userEvent.setup();
  render(<SolutionsSection />);

  const first = screen.getByRole("tab", { name: /Revenue-Leaks/i });
  first.focus();
  await user.keyboard("{ArrowRight}");

  expect(
    screen.getByRole("tab", { name: /Growth-Constraints/i }),
  ).toHaveAttribute("aria-selected", "true");
});

test("section has id=solutions", () => {
  const { container } = render(<SolutionsSection />);
  expect(container.querySelector("#solutions")).toBeTruthy();
  expect(within(container).getByText("SOLUTIONS")).toBeInTheDocument();
});
