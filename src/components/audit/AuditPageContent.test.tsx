import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { AuditPageContent } from "@/components/audit/AuditPageContent";
import { auditCopy, auditSecondaryGoals } from "@/data/audit-options";

describe("AuditPageContent", () => {
  afterEach(cleanup);

  it("renders hero copy, outcomes, and five how-it-works steps", () => {
    render(<AuditPageContent />);

    expect(
      screen.getByRole("heading", { level: 1, name: auditCopy.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(auditCopy.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: auditCopy.howHeading }),
    ).toBeInTheDocument();

    for (const outcome of auditCopy.outcomes) {
      expect(screen.getByText(outcome.label)).toBeInTheDocument();
    }
    for (const step of auditCopy.steps) {
      expect(
        screen.getByRole("heading", { level: 3, name: step }),
      ).toBeInTheDocument();
    }
    for (const goal of auditSecondaryGoals) {
      expect(screen.getByLabelText(goal)).toBeInTheDocument();
    }
    expect(
      screen.getByRole("button", { name: /Start My Intelligence Audit/i }),
    ).toBeInTheDocument();
  });
});
