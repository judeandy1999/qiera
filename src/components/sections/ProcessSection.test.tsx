import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProcessSection } from "./ProcessSection";

afterEach(cleanup);

test("renders exactly 6 Read more buttons and no Orchestrate step", () => {
  render(<ProcessSection />);

  const buttons = screen.getAllByRole("button", { name: /Read more about/i });
  expect(buttons).toHaveLength(6);

  expect(screen.queryByText(/Orchestrate/i)).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "A Proven 6-Step Methodology" }),
  ).toBeInTheDocument();
});

test("opens Discover Opportunities modal from step 1 Read more", async () => {
  const user = userEvent.setup();
  render(<ProcessSection />);

  await user.click(
    screen.getByRole("button", { name: "Read more about Discover Opportunities" }),
  );

  const dialog = screen.getByRole("dialog", { name: "Discover Opportunities" });
  expect(dialog).toBeVisible();
  expect(
    within(dialog).getByRole("heading", { name: "Discover Opportunities" }),
  ).toBeInTheDocument();
  expect(within(dialog).getByText(/STEP 1 OF 6/i)).toBeInTheDocument();
});

test("Next Step advances modal content to Identify Constraints", async () => {
  const user = userEvent.setup();
  render(<ProcessSection />);

  await user.click(
    screen.getByRole("button", { name: "Read more about Discover Opportunities" }),
  );

  const dialog = screen.getByRole("dialog");
  await user.click(
    within(dialog).getByRole("button", { name: /Next Step: Identify Constraints/i }),
  );

  expect(
    within(dialog).getByRole("heading", { name: "Identify Constraints" }),
  ).toBeInTheDocument();
  expect(within(dialog).getByText(/STEP 2 OF 6/i)).toBeInTheDocument();
});

test("Escape closes modal", async () => {
  const user = userEvent.setup();
  render(<ProcessSection />);

  await user.click(
    screen.getByRole("button", { name: "Read more about Discover Opportunities" }),
  );
  const dialog = screen.getByRole("dialog", { name: "Discover Opportunities" });
  expect(dialog).toBeVisible();

  await user.keyboard("{Escape}");
  expect(dialog).not.toBeVisible();
});

test("restores focus to Read more trigger after close", async () => {
  const user = userEvent.setup();
  render(<ProcessSection />);

  const trigger = screen.getByRole("button", {
    name: "Read more about Discover Opportunities",
  });
  trigger.focus();

  await user.click(trigger);
  await user.keyboard("{Escape}");

  expect(trigger).toHaveFocus();
});
