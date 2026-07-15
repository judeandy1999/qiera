import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/forms/ContactForm";
import { contactCopy } from "@/data/contact-options";

describe("ContactForm", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("preselects partnership topic when provided", () => {
    render(<ContactForm initialTopic="partnership" />);
    const select = screen.getByLabelText(/What can we help you with/i);
    expect(select).toHaveValue("partnership");
  });

  it("shows client validation errors for empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /Send Message/i }));
    expect(await screen.findByText(/Full Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Work Email is required/i)).toBeInTheDocument();
  });

  it("shows honest success banner after accepted submit", async () => {
    const user = userEvent.setup();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      }),
    );

    render(<ContactForm />);
    await user.type(
      screen.getByLabelText(/Full Name/i),
      "Ada Lovelace",
    );
    await user.type(
      screen.getByLabelText(/Work Email/i),
      "ada@example.com",
    );
    await user.selectOptions(
      screen.getByLabelText(/What can we help you with/i),
      "general",
    );
    await user.type(
      screen.getByLabelText(/^Message/i),
      "Looking for help.",
    );
    await user.click(screen.getByRole("button", { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByText(contactCopy.success)).toBeInTheDocument();
    });
    expect(screen.queryByText(/email sent/i)).not.toBeInTheDocument();
  });
});
