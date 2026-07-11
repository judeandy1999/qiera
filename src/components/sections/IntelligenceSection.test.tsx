import { afterEach, expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntelligenceSection } from "./IntelligenceSection";

afterEach(cleanup);

test("renders all 12 Learn more buttons", () => {
  render(<IntelligenceSection />);
  const buttons = screen.getAllByRole("button", { name: /Learn more about/i });
  expect(buttons).toHaveLength(12);
});

test("next/prev advance the carousel counter; Prev disabled at start", async () => {
  const user = userEvent.setup();
  render(<IntelligenceSection />);

  const counter = screen.getByTestId("carousel-counter");

  // Counter starts at 1 / 12
  expect(counter).toHaveTextContent("1 / 12");

  // Prev is disabled at position 1
  const prevButton = screen.getByRole("button", {
    name: "Previous intelligence dimension",
  });
  expect(prevButton).toBeDisabled();

  // Click Next → counter should advance to 2 / 12
  const nextButton = screen.getByRole("button", {
    name: "Next intelligence dimension",
  });
  await user.click(nextButton);
  expect(counter).toHaveTextContent("2 / 12");

  // Prev should now be enabled
  expect(prevButton).not.toBeDisabled();

  // Click Prev → counter returns to 1 / 12
  await user.click(prevButton);
  expect(counter).toHaveTextContent("1 / 12");

  // Prev disabled again
  expect(prevButton).toBeDisabled();
});
