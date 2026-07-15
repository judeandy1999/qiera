"use client";

import { useState, type FormEvent } from "react";

import {
  FieldError,
  FieldLabel,
  FormBanner,
  SubmitButton,
  fieldControlClassName,
} from "@/components/forms/FormPrimitives";
import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import {
  auditChallengeOptions,
  auditCopy,
  auditEmployeeOptions,
  auditIndustryOptions,
  auditPrimaryGoalOptions,
  auditRevenueOptions,
  auditRoleOptions,
  auditSecondaryGoals,
} from "@/data/audit-options";
import { cn } from "@/lib/cn";
import type { FieldErrors } from "@/lib/form-validation";
import { isValidEmail, trim } from "@/lib/form-validation";

function SelectField({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  error?: string;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldControlClassName, "appearance-none pr-10")}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
        aria-hidden="true"
      >
        ▾
      </span>
    </div>
  );
}

function StepHeader({ index, title }: { index: number; title: string }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-text-primary)]">
        {index}
      </span>
      <h3 className="pt-1 text-base font-semibold leading-snug text-[var(--color-text-primary)]">
        {title}
      </h3>
    </div>
  );
}

export function AuditForm() {
  const { labels, placeholders, steps, submit, caption, privacy, success, failure, moreGoals } =
    auditCopy;

  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [industry, setIndustry] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [secondaryGoals, setSecondaryGoals] = useState<string[]>([]);
  const [biggestChallenge, setBiggestChallenge] = useState("");
  const [challengeNotes, setChallengeNotes] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [employees, setEmployees] = useState("");
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  function toggleSecondary(goal: string) {
    setSecondaryGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
  }

  function validateClient(): FieldErrors {
    const next: FieldErrors = {};
    if (!trim(companyName)) next.companyName = "Company Name is required.";
    if (!trim(websiteUrl)) next.websiteUrl = "Website URL is required.";
    if (!trim(industry)) next.industry = "Industry / Category is required.";
    if (!trim(primaryGoal)) {
      next.primaryGoal = "Primary growth priority is required.";
    }
    if (!trim(biggestChallenge)) {
      next.biggestChallenge = "Biggest challenge is required.";
    }
    if (!trim(fullName)) next.fullName = "Full Name is required.";
    if (!trim(workEmail)) next.workEmail = "Work Email is required.";
    else if (!isValidEmail(trim(workEmail))) {
      next.workEmail = "Enter a valid email address.";
    }
    if (challengeNotes.length > 500) {
      next.challengeNotes = "Notes must be 500 characters or fewer.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/start-intelligence-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          websiteUrl,
          industry,
          primaryGoal,
          secondaryGoals,
          biggestChallenge,
          challengeNotes,
          monthlyRevenue,
          employees,
          role,
          fullName,
          workEmail,
        }),
      });
      const json = (await res.json()) as {
        ok: boolean;
        errors?: FieldErrors;
      };
      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-0">
        {/* Step 1 */}
        <fieldset className="min-w-0 border-0 p-0 lg:border-r lg:border-[var(--color-border)] lg:pr-5">
          <legend className="sr-only">{steps[0]}</legend>
          <StepHeader index={1} title={steps[0]} />
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="audit-companyName" required>
                {labels.companyName}
              </FieldLabel>
              <input
                id="audit-companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={placeholders.companyName}
                className={fieldControlClassName}
                autoComplete="organization"
              />
              <FieldError
                id="audit-companyName-error"
                message={errors.companyName}
              />
            </div>
            <div>
              <FieldLabel htmlFor="audit-websiteUrl" required>
                {labels.websiteUrl}
              </FieldLabel>
              <input
                id="audit-websiteUrl"
                name="websiteUrl"
                type="url"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder={placeholders.websiteUrl}
                className={fieldControlClassName}
                autoComplete="url"
              />
              <FieldError
                id="audit-websiteUrl-error"
                message={errors.websiteUrl}
              />
            </div>
            <div>
              <FieldLabel htmlFor="audit-industry" required>
                {labels.industry}
              </FieldLabel>
              <SelectField
                id="audit-industry"
                name="industry"
                value={industry}
                onChange={setIndustry}
                options={auditIndustryOptions}
                placeholder={placeholders.industry}
                error={errors.industry}
              />
              <FieldError id="audit-industry-error" message={errors.industry} />
            </div>
          </div>
        </fieldset>

        {/* Step 2 */}
        <fieldset className="min-w-0 border-0 p-0 lg:border-r lg:border-[var(--color-border)] lg:px-5">
          <legend className="sr-only">{steps[1]}</legend>
          <StepHeader index={2} title={steps[1]} />
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="audit-primaryGoal" required>
                {labels.primaryGoal}
              </FieldLabel>
              <SelectField
                id="audit-primaryGoal"
                name="primaryGoal"
                value={primaryGoal}
                onChange={setPrimaryGoal}
                options={auditPrimaryGoalOptions}
                placeholder={placeholders.primaryGoal}
                error={errors.primaryGoal}
              />
              <FieldError
                id="audit-primaryGoal-error"
                message={errors.primaryGoal}
              />
            </div>
            <div>
              <p className="mb-3 text-sm text-[var(--color-text-secondary)]">
                {moreGoals}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {auditSecondaryGoals.map((goal) => {
                  const id = `audit-goal-${goal.replace(/\s+/g, "-").toLowerCase()}`;
                  return (
                    <li key={goal}>
                      <label
                        htmlFor={id}
                        className="flex min-h-[44px] cursor-pointer items-center gap-3 text-sm text-[var(--color-text-primary)]"
                      >
                        <input
                          id={id}
                          type="checkbox"
                          checked={secondaryGoals.includes(goal)}
                          onChange={() => toggleSecondary(goal)}
                          className="h-4 w-4 shrink-0 rounded border-[var(--color-border)] accent-[var(--color-accent)]"
                        />
                        {goal}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </fieldset>

        {/* Step 3 */}
        <fieldset className="min-w-0 border-0 p-0 lg:border-r lg:border-[var(--color-border)] lg:px-5">
          <legend className="sr-only">{steps[2]}</legend>
          <StepHeader index={3} title={steps[2]} />
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="audit-biggestChallenge" required>
                {labels.biggestChallenge}
              </FieldLabel>
              <SelectField
                id="audit-biggestChallenge"
                name="biggestChallenge"
                value={biggestChallenge}
                onChange={setBiggestChallenge}
                options={auditChallengeOptions}
                placeholder={placeholders.biggestChallenge}
                error={errors.biggestChallenge}
              />
              <FieldError
                id="audit-biggestChallenge-error"
                message={errors.biggestChallenge}
              />
            </div>
            <div>
              <FieldLabel htmlFor="audit-challengeNotes">
                {labels.challengeNotes}
              </FieldLabel>
              <div className="relative">
                <textarea
                  id="audit-challengeNotes"
                  name="challengeNotes"
                  rows={5}
                  maxLength={500}
                  value={challengeNotes}
                  onChange={(e) => setChallengeNotes(e.target.value)}
                  placeholder={placeholders.challengeNotes}
                  className={cn(fieldControlClassName, "min-h-[120px] resize-y pb-8")}
                />
                <span className="pointer-events-none absolute bottom-2.5 right-3 text-xs text-[var(--color-text-secondary)]">
                  {challengeNotes.length}/500
                </span>
              </div>
              <FieldError
                id="audit-challengeNotes-error"
                message={errors.challengeNotes}
              />
            </div>
          </div>
        </fieldset>

        {/* Step 4 */}
        <fieldset className="min-w-0 border-0 p-0 lg:border-r lg:border-[var(--color-border)] lg:px-5">
          <legend className="sr-only">{steps[3]}</legend>
          <StepHeader index={4} title={steps[3]} />
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="audit-monthlyRevenue">
                {labels.monthlyRevenue}
              </FieldLabel>
              <SelectField
                id="audit-monthlyRevenue"
                name="monthlyRevenue"
                value={monthlyRevenue}
                onChange={setMonthlyRevenue}
                options={auditRevenueOptions}
                placeholder={placeholders.monthlyRevenue}
              />
            </div>
            <div>
              <FieldLabel htmlFor="audit-employees">
                {labels.employees}
              </FieldLabel>
              <SelectField
                id="audit-employees"
                name="employees"
                value={employees}
                onChange={setEmployees}
                options={auditEmployeeOptions}
                placeholder={placeholders.employees}
              />
            </div>
            <div>
              <FieldLabel htmlFor="audit-role">{labels.role}</FieldLabel>
              <SelectField
                id="audit-role"
                name="role"
                value={role}
                onChange={setRole}
                options={auditRoleOptions}
                placeholder={placeholders.role}
              />
            </div>
          </div>
        </fieldset>

        {/* Step 5 */}
        <fieldset className="min-w-0 border-0 p-0 lg:pl-5">
          <legend className="sr-only">{steps[4]}</legend>
          <StepHeader index={5} title={steps[4]} />
          <div className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="audit-fullName" required>
                {labels.fullName}
              </FieldLabel>
              <input
                id="audit-fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={placeholders.fullName}
                className={fieldControlClassName}
                autoComplete="name"
              />
              <FieldError id="audit-fullName-error" message={errors.fullName} />
            </div>
            <div>
              <FieldLabel htmlFor="audit-workEmail" required>
                {labels.workEmail}
              </FieldLabel>
              <input
                id="audit-workEmail"
                name="workEmail"
                type="email"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder={placeholders.workEmail}
                className={fieldControlClassName}
                autoComplete="email"
              />
              <FieldError
                id="audit-workEmail-error"
                message={errors.workEmail}
              />
            </div>
            <div className="rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-tint)] p-4">
              <p className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                <IntelligenceIcon name="lock" size={16} strokeWidth={1.5} />
                {privacy}
              </p>
            </div>
          </div>
        </fieldset>
      </div>

      {status === "success" ? (
        <FormBanner tone="success">{success}</FormBanner>
      ) : null}
      {status === "error" ? (
        <FormBanner tone="error">{failure}</FormBanner>
      ) : null}

      <div className="flex flex-col items-center gap-3">
        <SubmitButton busy={status === "loading"} idleLabel={submit} />
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]">
          <IntelligenceIcon name="clock" size={14} strokeWidth={1.5} />
          {caption}
        </p>
      </div>
    </form>
  );
}
