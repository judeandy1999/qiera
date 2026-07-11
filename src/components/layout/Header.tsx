import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { PrimaryNavLinks } from "@/components/layout/PrimaryNavLinks";
import { primaryNav, primaryCta } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-shell)]">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-6 py-6 md:px-8 lg:px-12">
        <Logo showTagline />
        <PrimaryNavLinks
          items={primaryNav}
          className="hidden items-center gap-4 md:flex"
        />
        <div className="hidden md:block">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
        <MobileNav items={primaryNav} />
      </div>
    </header>
  );
}
