import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release/", labels: { "en-US": "Release" } },
  { href: "/system-requirements/", labels: { "en-US": "System Requirements" } },
  { href: "/steam-version/", labels: { "en-US": "Steam vs Flash" } },
  { href: "/controls/", labels: { "en-US": "Controls & Co-op" } },
  { href: "/walkthrough/", labels: { "en-US": "Walkthrough" } },
  { href: "/levels/", labels: { "en-US": "Levels" } },
  { href: "/diamonds/", labels: { "en-US": "Diamonds" } },
  { href: "/element-traps/", labels: { "en-US": "Element Traps" } },
  { href: "/where-to-play/", labels: { "en-US": "Where to Play" } },
  { href: "/reviews/", labels: { "en-US": "Reviews" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/contact/", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy/", labels: { "en-US": "Privacy" } },
  { href: "/terms/", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
