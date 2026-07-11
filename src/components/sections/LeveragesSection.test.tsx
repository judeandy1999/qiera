import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LeveragesSection } from "./LeveragesSection";

afterEach(cleanup);

test("renders exactly 11 Learn more buttons", () => {
  render(<LeveragesSection />);

  const buttons = screen.getAllByRole("button", { name: /Learn more about/i });
  expect(buttons).toHaveLength(11);
  expect(
    screen.getByRole("button", { name: "Learn more about Revenue Leverage" }),
  ).toBeInTheDocument();
});

test("section has id=leverages", () => {
  const { container } = render(<LeveragesSection />);
  expect(container.querySelector("#leverages")).toBeInTheDocument();
});

test("opens Revenue Leverage dialog from Learn more", async () => {
  const user = userEvent.setup();
  render(<LeveragesSection />);

  await user.click(
    screen.getByRole("button", {
      name: "Learn more about Revenue Leverage",
    }),
  );

  const dialog = screen.getByRole("dialog", { name: "Revenue Leverage" });
  expect(dialog).toBeVisible();
  expect(
    within(dialog).getByRole("heading", { name: "Revenue Leverage" }),
  ).toBeInTheDocument();
  expect(
    within(dialog).getByRole("link", { name: "Talk to an Expert" }),
  ).toHaveAttribute("href", "/contact");
});

test("dialog has no Share or Download controls", async () => {
  const user = userEvent.setup();
  render(<LeveragesSection />);

  await user.click(
    screen.getByRole("button", {
      name: "Learn more about Revenue Leverage",
    }),
  );

  const dialog = screen.getByRole("dialog", { name: "Revenue Leverage" });
  expect(within(dialog).queryByText(/Share|Download/i)).not.toBeInTheDocument();
  expect(
    within(dialog).queryByRole("button", { name: /Share|Download/i }),
  ).not.toBeInTheDocument();
});

test("Escape closes modal", async () => {
  const user = userEvent.setup();
  render(<LeveragesSection />);

  await user.click(
    screen.getByRole("button", {
      name: "Learn more about Revenue Leverage",
    }),
  );
  const dialog = screen.getByRole("dialog", { name: "Revenue Leverage" });
  expect(dialog).toBeVisible();

  await user.keyboard("{Escape}");
  expect(dialog).not.toBeVisible();
});

test("restores focus to Learn more trigger after close", async () => {
  const user = userEvent.setup();
  render(<LeveragesSection />);

  const trigger = screen.getByRole("button", {
    name: "Learn more about Revenue Leverage",
  });
  trigger.focus();

  await user.click(trigger);
  await user.keyboard("{Escape}");

  expect(trigger).toHaveFocus();
});

test("Back to Leverages closes the dialog", async () => {
  const user = userEvent.setup();
  render(<LeveragesSection />);

  await user.click(
    screen.getByRole("button", {
      name: "Learn more about Revenue Leverage",
    }),
  );
  const dialog = screen.getByRole("dialog", { name: "Revenue Leverage" });

  await user.click(
    within(dialog).getByRole("button", { name: /Back to Leverages/i }),
  );
  expect(dialog).not.toBeVisible();
});
