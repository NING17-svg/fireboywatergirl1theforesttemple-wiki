import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Fireboy and Watergirl 1 The Forest Temple: US Launch Hub",
  seoTitle: "Fireboy and Watergirl 1 The Forest Temple: Steam Hub",
  metaDescription:
    "Fireboy and Watergirl 1 The Forest Temple launches on Steam Sep 1, 2026 with a standalone AppID. Find release status, controls, levels, diamonds, and rules.",
  summary:
    "Unofficial launch hub for the standalone Steam release of Oslo Albet's original 2009 cooperative puzzle, surfacing release status, system requirements, Steam-vs-Flash differences, cooperative controls, walkthrough, levels, diamonds, element traps, and play options.",
  hero: {
    eyebrow: "Launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Steam Release", href: "/release/" },
      { label: "Where to Play", href: "/where-to-play/" },
    ],
  },
  quickAnswer:
    "Fireboy and Watergirl 1 The Forest Temple is the standalone Steam release of Oslo Albet's original 2009 cooperative platformer puzzle, confirmed for September 1, 2026 on Steam AppID 5084260 with Windows, Mac, and Linux support. This hub organizes release status, system requirements, Steam-vs-Flash differences, cooperative controls, walkthrough, levels, diamonds, element traps, where to play, and reviews in one place.",
  keyFacts: [
    { label: "Release date", value: "September 1, 2026 (Steam AppID 5084260)" },
    { label: "Platforms", value: "Windows, Mac, Linux" },
    { label: "Demand signal", value: "Popular Coming Soon rank #17" },
    { label: "Series", value: "Forest Temple chapter (Oslo Albet)" },
  ],
  modules: [
    {
      id: "release-status",
      type: "prose",
      heading: "Steam release status",
      body:
        "The Steam store page for AppID 5084260 confirms a release date of September 1, 2026, the first time Oslo Albet's original Forest Temple chapter is available as a standalone Steam title rather than only through free browser mirrors. Popular Coming Soon tracking on Steam listed this title at rank #17 in the launch run-up, which signals strong pre-release interest from returning fans and new Steam players. The supported platforms listed on the Steam store page are Windows, Mac, and Linux, and the page also lists Steam Cloud save support and controller support. Console or mobile ports are not announced as of 2026-09-06.",
    },
    {
      id: "steam-vs-flash",
      type: "prose",
      heading: "Steam version vs Flash differences",
      body:
        "The Steam version is a standalone AppID release rather than a browser plug-in, so the move from Flash to Steam is the headline version difference. The Steam store page lists modern resolution support, Steam achievements, Steam Cloud, and controller support as platform-level additions. What stays the same are the core Oslo Albet mechanics: Fireboy fears water, Watergirl fears fire, both characters fear green goo, poison pools, and lava, and diamond collection gates the level exit. Whether the Steam version adds new levels, new chapters, or rebalances element hazards is not announced as of 2026-09-06.",
    },
    {
      id: "controls-coop",
      type: "prose",
      heading: "Controls and cooperative play",
      body:
        "The cooperative layout from the original 2009 Oslo Albet design puts Fireboy on WASD or the arrow keys and Watergirl on the arrow keys as a paired second player on one keyboard. On Steam, the store page lists controller support and Steam Cloud as platform-side additions; how those map onto the keyboard layout in single-player versus two-player sessions is covered on the controls page. Two-player co-op runs locally on one machine and one keyboard in the original design. Steam online multiplayer beyond local co-op is not announced as of 2026-09-06. Browser-mirror alternatives such as Friv, CrazyGames, and Yandex Games offer a quick way to play the original 2009 layout without buying the Steam build.",
    },
    {
      id: "walkthrough-overview",
      type: "prose",
      heading: "Walkthrough, levels, diamonds, and element rules",
      body:
        "The walkthrough page is the navigation hub for progression content. It links forward to the levels page for the Forest Temple chapter list, to the diamonds page for the perfect-ending unlock path, and to the element-traps page for the fire, water, green goo, poison, and lava rules that drive every puzzle. The level count and order in the Forest Temple chapter follow the original 2009 Oslo Albet design with about 30 levels; the final Steam level count is not announced as of 2026-09-06 if it differs. Diamond collection per level acts as the level-gating mechanic, and the diamonds page explains how it interacts with the element rules; water-safe and fire-safe diamonds are part of the puzzle. Simultaneous-button cooperative triggers require both Fireboy and Watergirl to step on switches at the same time.",
    },
    {
      id: "play-options",
      type: "entity-grid",
      heading: "Launch entry points",
      items: [
        {
          title: "Release Status",
          summary: "Steam AppID 5084260, supported platforms, console and mobile scope.",
          href: "/release/",
        },
        {
          title: "Walkthrough Hub",
          summary: "Forest Temple chapter walkthrough and series context.",
          href: "/walkthrough/",
        },
        {
          title: "Levels",
          summary: "Forest Temple chapter level order, gating, and hazard overview.",
          href: "/levels/",
        },
        {
          title: "Element Traps",
          summary: "Fire, water, green goo, poison, and lava mechanics.",
          href: "/element-traps/",
        },
      ],
    },
  ],
  faqIds: ["release-date", "steam-vs-flash", "controls-coop", "browser-mirrors"],
  relatedPageIds: [
    "release-platforms",
    "steam-version-vs-flash",
    "controls-coop",
    "walkthrough-overview",
    "levels",
    "diamonds-gems",
    "element-traps",
    "where-to-play",
    "reviews-press",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-06",
};
