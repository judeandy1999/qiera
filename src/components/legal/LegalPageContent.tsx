import { IntelligenceIcon } from "@/components/ui/IntelligenceIcon";
import type { LegalBlock, LegalDocument, LegalSection } from "@/types/legal";

function LegalBlocks({
  blocks,
  contactEmail,
  isContactSection,
}: {
  blocks: LegalBlock[];
  contactEmail?: string;
  isContactSection: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      {blocks.map((block, index) => {
        if (block.type === "pending") {
          return (
            <p
              key={index}
              className="text-base font-normal italic leading-relaxed text-[var(--color-text-secondary)]"
            >
              Full text pending legal review.
            </p>
          );
        }
        if (block.type === "labeled") {
          return (
            <p
              key={index}
              className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
            >
              <span className="font-semibold text-[var(--color-text-primary)]">
                {block.label}
              </span>{" "}
              {block.text}
            </p>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    {block.headers.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-3 py-3 font-semibold text-[var(--color-accent)]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-[var(--color-border)] last:border-b-0"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-3 py-3 align-top text-[var(--color-text-secondary)]"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p
            key={index}
            className="text-base font-normal leading-relaxed text-[var(--color-text-secondary)]"
          >
            {block.text}
          </p>
        );
      })}
      {isContactSection && contactEmail ? (
        <p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-base font-normal text-[var(--color-accent)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
          >
            {contactEmail}
          </a>
        </p>
      ) : null}
    </div>
  );
}

function LegalSectionBlock({
  section,
  contactEmail,
}: {
  section: LegalSection;
  contactEmail?: string;
}) {
  const isContact = section.id === "contact-us";
  return (
    <article
      id={section.id}
      className="scroll-mt-[var(--header-scroll-offset)] border-b border-[var(--color-border)] py-8 last:border-b-0"
    >
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/40">
          <IntelligenceIcon name={section.icon} size={20} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold leading-snug text-[var(--color-text-primary)]">
            {section.number}. {section.title}
          </h2>
          <div className="mt-3">
            <LegalBlocks
              blocks={section.blocks}
              contactEmail={contactEmail}
              isContactSection={isContact}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function LegalPageContent({ document }: { document: LegalDocument }) {
  const {
    eyebrow,
    title,
    lastUpdated,
    provisionalNotice,
    intro,
    sections,
    contactEmail,
  } = document;

  return (
    <div className="bg-[var(--color-shell)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[36px] font-semibold leading-[1.15] text-[var(--color-text-primary)] md:text-[40px] lg:text-[48px]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
            {lastUpdated}
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {provisionalNotice}
          </p>
          <p className="mt-5 text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
            {intro}
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <nav
            aria-label="On this page"
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-5 lg:sticky lg:top-[calc(var(--header-scroll-offset)+12px)]"
          >
            <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
              ON THIS PAGE
            </p>
            <ol className="mt-4 flex flex-col gap-2.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-2 rounded text-sm leading-snug text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
                  >
                    <span className="shrink-0 text-[var(--color-accent)]">
                      {section.number}.
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            {sections.map((section) => (
              <LegalSectionBlock
                key={section.id}
                section={section}
                contactEmail={contactEmail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
