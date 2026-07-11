import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import Home from "@/app/page";
import { primaryNav } from "@/data/navigation";

afterEach(cleanup);

test("homepage exposes hash section ids in order", () => {
  const { container } = render(<Home />);

  const ids = [
    "intelligence",
    "process",
    "solutions",
    "leverages",
    "final-cta",
  ] as const;

  for (const id of ids) {
    expect(container.querySelector(`#${id}`)).toBeInTheDocument();
  }

  const positions = ids.map((id) => {
    const el = container.querySelector(`#${id}`);
    expect(el).not.toBeNull();
    return Array.from(container.querySelectorAll("[id]")).indexOf(el!);
  });

  for (let i = 1; i < positions.length; i++) {
    expect(positions[i]).toBeGreaterThan(positions[i - 1]);
  }
});

test("primaryNav hash hrefs match homepage section ids", () => {
  const hashHrefs = primaryNav
    .map((item) => item.href)
    .filter((href) => href.startsWith("/#"));

  expect(hashHrefs).toEqual([
    "/#intelligence",
    "/#process",
    "/#solutions",
    "/#leverages",
  ]);

  expect(primaryNav.some((item) => item.href === "/#final-cta")).toBe(false);
});
