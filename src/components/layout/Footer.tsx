import { Logo } from "@/components/ui/Logo";
import { primaryNav, legalNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[var(--color-shell)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6 py-8 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-start justify-between gap-6 pb-6">
          <Logo showTagline />
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
            {primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded text-[14px] font-normal leading-[1.5] text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
          <p className="text-[14px] font-normal leading-[1.5] text-[var(--color-text-secondary)]">
            © 2026 QIERA. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {legalNav.map((item, i) => (
              <li key={item.href} className="flex items-center gap-4">
                {i > 0 && (
                  <span aria-hidden="true" className="text-[var(--color-border)]">
                    |
                  </span>
                )}
                <a
                  href={item.href}
                  className="rounded text-[14px] font-normal leading-[1.5] text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-shell)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
