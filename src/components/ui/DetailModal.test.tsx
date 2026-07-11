import { useState } from "react";
import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DetailModal } from "./DetailModal";

afterEach(cleanup);

function Harness() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <DetailModal
        open={open}
        onClose={() => setOpen(false)}
        title="Market Intelligence"
        labelledById="modal-heading"
      >
        <h2 id="modal-heading">Market Intelligence</h2>
        <button type="button">Inside</button>
      </DetailModal>
    </>
  );
}

test("opens on trigger click", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  await user.click(screen.getByRole("button", { name: "Open" }));
  const dialog = screen.getByRole("dialog", { name: "Market Intelligence" });
  expect(dialog).toBeVisible();
});

test("closes on Escape", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  await user.click(screen.getByRole("button", { name: "Open" }));
  const dialog = screen.getByRole("dialog", { name: "Market Intelligence" });
  expect(dialog).toBeVisible();

  await user.keyboard("{Escape}");
  expect(dialog).not.toBeVisible();
});

test("closes on close button click", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  await user.click(screen.getByRole("button", { name: "Open" }));
  const dialog = screen.getByRole("dialog", { name: "Market Intelligence" });
  expect(dialog).toBeVisible();

  await user.click(screen.getByRole("button", { name: "Close" }));
  expect(dialog).not.toBeVisible();
});

test("restores focus to trigger on close", async () => {
  const user = userEvent.setup();
  render(<Harness />);

  const trigger = screen.getByRole("button", { name: "Open" });
  trigger.focus();

  await user.click(trigger);
  await user.keyboard("{Escape}");

  expect(trigger).toHaveFocus();
});
