import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileNav } from "./MobileNav";

vi.mock("next/navigation", () => ({
  usePathname: () => "/network",
}));

test("mobile nav opens on toggle and closes on Escape", async () => {
  const user = userEvent.setup();
  render(<MobileNav items={[{ href: "/network", label: "Network" }]} />);

  await user.click(screen.getByRole("button", { name: "Open menu" }));
  const dialog = screen.getByRole("dialog", { name: "Mobile navigation" });
  expect(dialog).toBeVisible();
  expect(
    screen.getByRole("link", { name: /Start Intelligence Audit/i }),
  ).toHaveAttribute("href", "/start-intelligence-audit");

  await user.keyboard("{Escape}");
  expect(dialog).not.toBeVisible();
});
