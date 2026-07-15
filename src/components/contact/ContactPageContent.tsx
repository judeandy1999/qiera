import { ContactForm } from "@/components/forms/ContactForm";
import { contactCopy } from "@/data/contact-options";

type ContactPageContentProps = {
  initialTopic?: string;
};

export function ContactPageContent({
  initialTopic = "",
}: ContactPageContentProps) {
  const { eyebrow, title, body } = contactCopy;

  return (
    <div className="bg-[var(--color-shell)]">
      <section
        aria-labelledby="contact-heading"
        className="mx-auto max-w-[720px] px-6 py-16 md:px-8 md:py-20 lg:py-24"
      >
        <p className="text-xs font-normal uppercase leading-[1.4] tracking-[0.08em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
        <h1
          id="contact-heading"
          className="mt-4 text-[36px] font-semibold leading-[1.15] text-[var(--color-text-primary)] md:text-[40px] lg:text-[48px]"
        >
          {title}
        </h1>
        <p className="mt-4 text-base font-normal leading-relaxed text-[var(--color-text-secondary)]">
          {body}
        </p>

        <div className="mt-10">
          <ContactForm initialTopic={initialTopic} />
        </div>
      </section>
    </div>
  );
}
