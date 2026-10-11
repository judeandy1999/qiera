import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { ServicePageContent } from "@/components/services/ServicePageContent";
import { ecommerceGrowthConsultingPage } from "@/data/ecommerce-growth-consulting";

test("service page renders hero, sections, and final CTA", () => {
  render(<ServicePageContent document={ecommerceGrowthConsultingPage} />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Ecommerce Growth Consulting" }),
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /Book a Free Growth Consultation/i })
      .length,
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole("heading", {
      name: "How QIERA Ecommerce Growth Consulting Works",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Book a Free Growth Consultation" }),
  ).toBeInTheDocument();
  expect(document.getElementById("book-consultation")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Frequently Asked Questions" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Explore Fractional Ecommerce CMO" }),
  ).toHaveAttribute("href", "/fractional-ecommerce-cmo");
});
