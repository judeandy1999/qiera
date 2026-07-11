import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNav, primaryCta } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-shell)]">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-6 py-6 md:px-8 lg:px-12">
        <Logo showTagline />
        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex">
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
        <div className="hidden md:block">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
        <MobileNav items={primaryNav} />
      </div>
    </header>
  );
}
