import type { NavItem } from "@/types/navigation";

/** Flatten nav items for footers and simple link lists (expands parent groups). */
export function flattenNavItems(items: NavItem[]): NavItem[] {
  return items.flatMap((item) =>
    item.children && item.children.length > 0 ? item.children : [item],
  );
}
