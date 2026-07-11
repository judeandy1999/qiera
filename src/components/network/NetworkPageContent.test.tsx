import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NetworkPageContent } from "@/components/network/NetworkPageContent";
import { networkPage } from "@/data/network";

describe("NetworkPageContent", () => {
  it("renders hero copy and seven partners from Network.png transcription", () => {
    render(<NetworkPageContent />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Stronger Together. Greater Impact.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("NETWORK")).toBeInTheDocument();
    expect(screen.getByText(networkPage.body)).toBeInTheDocument();

    for (const partner of networkPage.partners) {
      expect(
        screen.getByRole("heading", { level: 2, name: partner.title }),
      ).toBeInTheDocument();
    }
    expect(networkPage.partners).toHaveLength(7);
  });

  it("links Become a Partner to contact with partnership topic", () => {
    render(<NetworkPageContent />);

    const ctas = screen.getAllByRole("link", { name: /Become a Partner/ });
    expect(ctas[0]).toHaveAttribute("href", "/contact?topic=partnership");
    expect(ctas[0]).toHaveTextContent("→");
  });

  it("shows BENEFITS lists with three items each", () => {
    const { container } = render(<NetworkPageContent />);
    const articles = container.querySelectorAll("article");
    expect(articles).toHaveLength(7);

    articles.forEach((article, index) => {
      const benefits = within(article as HTMLElement).getAllByRole("listitem");
      expect(benefits).toHaveLength(3);
      expect(
        within(article as HTMLElement).getByText("BENEFITS"),
      ).toBeInTheDocument();
      expect(benefits[0]).toHaveTextContent(
        networkPage.partners[index].benefits[0],
      );
    });
  });
});
