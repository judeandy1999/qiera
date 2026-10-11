import type { NavItem } from "@/types/navigation";

/** Shared active-state check for primary nav (routes + homepage hashes). */
export function isNavItemActive(
  pathname: string,
  hash: string,
  href: string,
): boolean {
  const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;

  if (href.startsWith("/#")) {
    if (pathname !== "/") return false;
    return normalizedHash === href.slice(2);
  }

  if (href.includes("?")) {
    const [path] = href.split("?");
    return pathname === path;
  }

  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isNavEntryActive(
  pathname: string,
  hash: string,
  item: NavItem,
): boolean {
  if (item.children?.length) {
    return item.children.some((child) =>
      isNavItemActive(pathname, hash, child.href),
    );
  }
  return isNavItemActive(pathname, hash, item.href);
}
