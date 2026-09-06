import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Fireboy & Watergirl 1 The Forest Temple",
  brandMark: "FBWG",
  gameName: "Fireboy & Watergirl 1: The Forest Temple",
  domain: "fireboywatergirl1theforesttemple.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://fireboywatergirl1theforesttemple.wiki").replace(/\/$/, ""),
  description:
    "Unofficial Steam launch hub for Fireboy & Watergirl 1: The Forest Temple. Release status, system requirements, Steam-vs-Flash differences, cooperative controls, walkthrough, levels, diamonds, element traps, and play options.",
  tagline:
    "Unofficial Steam launch hub for Oslo Albet's standalone release of the original Forest Temple chapter.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Fireboy & Watergirl 1: The Forest Temple Hub",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page (AppID 5084260)",
      href: "https://store.steampowered.com/app/5084260",
      description:
        "Official Steam store page confirming the September 1, 2026 release date, Windows / Mac / Linux support, Steam Cloud, and controller support.",
    },
    {
      label: "Steam Community hub (AppID 5084260)",
      href: "https://steamcommunity.com/app/5084260",
      description:
        "Steam Community hub for discussion, screenshots, and player signals on the Forest Temple release.",
    },
    {
      label: "Oslo Albet Fireboy & Watergirl series site",
      href: "https://fireboyandwatergirl.com",
      description:
        "Developer-of-record site for the original 2009 Flash-era Forest Temple chapter mechanics, element rules, and cooperative controls.",
    },
    {
      label: "Popular Coming Soon Steam hub",
      href: "https://store.steampowered.com/popularcomingsoon",
      description:
        "Steam Popular Coming Soon ranking confirming Forest Temple's rank #17 launch-window demand signal.",
    },
  ],
  disclaimer:
    "Unofficial fan hub. All current-game facts are tied to the Steam store page (AppID 5084260) and the Steam Community hub as of 2026-09-06. Mechanics rules come from Oslo Albet's original 2009 Forest Temple chapter.",
};
