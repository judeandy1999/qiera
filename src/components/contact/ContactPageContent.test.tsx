import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { contactCopy } from "@/data/contact-options";

describe("ContactPageContent", () => {
  afterEach(cleanup);

  it("renders contact chrome from reference transcription", () => {
    render(<ContactPageContent />);
    expect(
      screen.getByRole("heading", { level: 1, name: contactCopy.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(contactCopy.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(contactCopy.body)).toBeInTheDocument();
    expect(screen.getByText(contactCopy.privacy)).toBeInTheDocument();
  });
});
