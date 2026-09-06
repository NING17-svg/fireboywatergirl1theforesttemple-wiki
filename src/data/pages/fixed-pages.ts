import { site } from "@/data/site";
import type { PageContent, PagePresentation } from "@/types/content";

const shellFor = (
  shell: "content",
  variant: "reading-right-rail" = "reading-right-rail",
): PagePresentation => ({ shell, variant });

const hubShell = (variant: "card-grid" = "card-grid"): PagePresentation => ({
  shell: "hub",
  variant,
});

export const fixedPages: PageContent[] = [
  {
    id: "release-platforms",
    translationKey: "release-platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 The Forest Temple release date and supported platforms",
    seoTitle: "Fireboy and Watergirl 1 The Forest Temple release date",
    metaDescription:
      "Fireboy and Watergirl 1 The Forest Temple release date on Steam is September 1, 2026. See supported platforms and console or mobile status.",
    summary:
      "Release status page confirming the September 1, 2026 Steam launch date, supported platforms, and console or mobile availability for AppID 5084260.",
    hero: {
      eyebrow: "Release status",
      subtitle:
        "Steam AppID 5084260 releases on September 1, 2026 for Windows, Mac, and Linux with Steam Cloud and controller support.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements/" },
        { label: "Where to Play", href: "/where-to-play/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 The Forest Temple release date on Steam is September 1, 2026. The standalone Steam build ships for Windows, Mac, and Linux at launch and is currently ranked #17 on the Popular Coming Soon Steam hub. Console and mobile versions remain Not announced as of 2026-09-06, so Steam on a supported PC operating system is the only confirmed way to play on launch day.",
    keyFacts: [
      { label: "Steam release date", value: "September 1, 2026" },
      { label: "Steam AppID", value: "5084260" },
      { label: "Supported platforms", value: "Windows, Mac, Linux" },
      { label: "Steam Cloud", value: "Supported" },
      { label: "Controller support", value: "Supported" },
      { label: "Console or mobile", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "release-timing",
        type: "prose",
        heading: "Steam launch timing",
        body:
          "The Steam store page for AppID 5084260 confirms September 1, 2026 as the official release date. The store page lists Oslo Albet as both developer and publisher, and the standalone Steam listing is publicly visible before launch day with a wishlist button and an active community hub. The Steam Community hub for the same AppID repeats the September 1, 2026 launch date and is already accepting discussion threads, screenshots, and Steam Cloud synchronization traffic from pre-launch players. The Popular Coming Soon Steam hub ranked this title at #17 as of the August 31, 2026 launch brief, which is a strong pre-launch demand signal for an Oslo Albet puzzle release. SteamDB mirrors the same launch date and metadata for AppID 5084260, so the September 1, 2026 timing is consistent across the Steam store page, SteamDB, and the Steam Community hub as of 2026-09-06. The Forest Temple chapter is the first installment in the standalone Steam line for the Oslo Albet Fireboy and Watergirl series, and September 1, 2026 is the first confirmed release date for this chapter as an independent Steam AppID. Players who want the new build on day one should plan around the September 1, 2026 unlock rather than waiting for later dates or assuming a public Steam demo will appear first.",
      },
      {
        id: "platforms",
        type: "prose",
        heading: "Supported platforms and console or mobile status",
        body:
          "The Steam store page for AppID 5084260 lists Windows, Mac, and Linux as supported operating systems at launch, which means the standalone Steam release is not locked to a single PC platform. Controller support and Steam Cloud synchronization are both listed as supported features on the Steam store page, so players using a gamepad or switching between machines on the same Steam account can expect both features to be active when the build goes live. Console versions for PlayStation, Xbox, and Nintendo Switch are Not announced as of 2026-09-06, and mobile versions for iOS and Android are also Not announced as of 2026-09-06. The Steam store page does not currently list any Steam Deck verified or Steam Deck playable badge either, so handheld compatibility status remains Not announced as of 2026-09-06. The Steam store page and the SteamDB listing for AppID 5084260 are the first places to update when new platforms, editions, or compatibility badges are added.",
      },
    ],
    faqIds: ["release-date", "supported-platforms", "console-mobile", "popular-coming-soon-rank"],
    relatedPageIds: ["system-requirements", "steam-version-vs-flash", "where-to-play", "reviews-press"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "release",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 The Forest Temple system requirements for PC and Steam",
    seoTitle: "Fireboy and Watergirl 1 The Forest Temple system requirements",
    metaDescription:
      "Fireboy and Watergirl 1 The Forest Temple system requirements on Steam include Windows, Mac, and Linux. See listed CPU, GPU, RAM, and storage for the launch build.",
    summary:
      "System requirements page for the standalone Steam release on AppID 5084260, confirming the supported operating systems and the unannounced numeric spec tiers.",
    hero: {
      eyebrow: "System requirements",
      subtitle:
        "Steam AppID 5084260 lists Windows, Mac, and Linux as supported operating systems. Numeric spec tiers remain Not announced as of 2026-09-06.",
      ctas: [
        { label: "Release Status", href: "/release/" },
        { label: "Steam vs Flash", href: "/steam-version/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 The Forest Temple system requirements are listed on the Steam store page for AppID 5084260 with Windows, Mac, and Linux as supported operating systems at launch. Specific minimum and recommended CPU, GPU, RAM, and storage tiers, plus Steam Deck verified or Steam Deck playable status, are Not announced as of 2026-09-06 and should be confirmed on launch day against the live Steam store page and SteamDB.",
    keyFacts: [
      { label: "Supported operating systems", value: "Windows, Mac, Linux" },
      { label: "Steam AppID", value: "5084260" },
      { label: "Controller support", value: "Listed on the Steam store page" },
      { label: "Steam Cloud", value: "Listed on the Steam store page" },
      { label: "Minimum / recommended tier list", value: "Not announced as of 2026-09-06" },
      { label: "Steam Deck verified", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "supported-os",
        type: "prose",
        heading: "Supported Steam platforms",
        body:
          "The Steam store page for AppID 5084260 publishes three supported operating systems for the standalone Forest Temple release: Windows, Mac, and Linux. That tri-platform listing is the only public machine-readable confirmation of which Steam platforms the build will support on day one, and it is mirrored in the SteamDB metadata record for the same AppID as of 2026-09-06. Controller support and Steam Cloud synchronization are both listed on the Steam store page, which means input and save sync are part of the public feature set even though exact minimum and recommended CPU, GPU, RAM, and storage tiers are Not announced as of 2026-09-06. Any older third-party walkthrough that lists older hardware minimums should be checked against the live Steam store page before buying or upgrading a PC specifically for this build. The Steam store page lists the supported operating systems and the supported Steam features; it does not currently publish a numeric minimum or recommended spec table. SteamDB mirrors the Steam store metadata for AppID 5084260 and is useful for change-detection but does not publish deeper minimum or recommended tiers than the Steam store page itself.",
      },
      {
        id: "spec-tiers",
        type: "prose",
        heading: "Minimum and recommended CPU, GPU, RAM, and storage tiers",
        body:
          "As of 2026-09-06 the Steam store page for AppID 5084260 does not publish specific minimum or recommended CPU, GPU, RAM, or storage tiers for the Forest Temple build. That is normal for many Oslo Albet Flash-era puzzle releases that target low-end hardware, but it also means a strict numeric tier list is Not announced as of 2026-09-06 and should be sourced from the live Steam store page on launch day rather than from older Flash-era third-party writeups. For practical planning, players can treat any PC that already runs modern browser-based 2D platformer puzzle releases smoothly as a safe baseline for Windows, Mac, or Linux launch-day play, but that is a usability heuristic, not a confirmed minimum tier from the Steam store page. The Steam store page does not currently list a Steam Deck verified or Steam Deck playable badge for AppID 5084260. Steam Deck compatibility status is Not announced as of 2026-09-06 and will be visible on the Steam store page only if Valve assigns a verified or playable category after launch review.",
      },
      {
        id: "verify",
        type: "steps",
        heading: "How to verify the spec list on launch day",
        items: [
          {
            title: "Read the Steam store page first",
            body:
              "Open the Steam store page for AppID 5084260 and check the supported operating systems line plus the controller and Steam Cloud feature flags. That covers the only public platform facts.",
            doneCondition:
              "OS line shows Windows, Mac, Linux and Steam Cloud / controller are listed as supported.",
          },
          {
            title: "Cross-check SteamDB for metadata changes",
            body:
              "Open the SteamDB listing for AppID 5084260 and compare the OS line and feature flags. SteamDB mirrors the Steam store metadata and is the fastest change-detection surface.",
            doneCondition:
              "OS line and feature flags on SteamDB match the Steam store page.",
          },
          {
            title: "Re-check for Steam Deck verified or playable badge",
            body:
              "After launch, look for any Steam Deck verified or playable badge assigned by Valve. As of 2026-09-06 neither badge is published.",
            doneCondition:
              "Steam Deck badge confirmed or absent as of the launch day check.",
          },
          {
            title: "Ignore older third-party Flash-era spec lists",
            body:
              "If a numeric tier list appears on the Steam store page after launch, treat those values as the only official numeric tier list. Older third-party Flash-era specs are not authoritative for the Steam build.",
            doneCondition:
              "Only the Steam store page numeric tier list (if any) is treated as authoritative.",
          },
        ],
      },
    ],
    faqIds: ["system-requirements"],
    relatedPageIds: ["release-platforms", "steam-version-vs-flash"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "steam-version-vs-flash",
    translationKey: "steam-version-vs-flash",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam-version",
    url: "/steam-version",
    pageType: "release",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 Forest Temple Steam version vs Flash: What Changed and What Stayed the Same",
    seoTitle: "Fireboy and Watergirl 1 Forest Temple Steam version vs Flash",
    metaDescription:
      "Fireboy and Watergirl 1 Forest Temple Steam version vs Flash: what changed in the standalone Steam release, what stays the same, and what is not yet announced.",
    summary:
      "Comparison page between the standalone Steam release on AppID 5084260 and the original 2009 Oslo Albet Flash-era Forest Temple chapter.",
    hero: {
      eyebrow: "Steam vs Flash",
      subtitle:
        "Standalone Steam release of the original 2009 Oslo Albet Forest Temple chapter with Steam Cloud, achievements, controller support, and modern resolution.",
      ctas: [
        { label: "Release Status", href: "/release/" },
        { label: "Controls & Co-op", href: "/controls/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 Forest Temple Steam version vs Flash is a move from a free browser plug-in to a standalone Steam AppID (5084260) by Oslo Albet. The Steam release adds modern resolution, Steam achievements, Steam Cloud, and controller support, while keeping the original 2009 Forest Temple mechanics, element rules, level order, and diamond gating intact. Specific new levels or rebalanced hazards are not announced as of 2026-09-06.",
    keyFacts: [
      { label: "Steam AppID", value: "5084260" },
      { label: "Developer and publisher", value: "Oslo Albet" },
      { label: "Steam additions", value: "Cloud, achievements, controller, modern resolution" },
      { label: "Mechanics preserved", value: "Element rules, level order, diamond gating" },
      { label: "Online multiplayer", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "build-context",
        type: "prose",
        heading: "How the Steam version was built from the Flash original",
        body:
          "The standalone Steam AppID 5084260 for Fireboy and Watergirl 1 The Forest Temple marks the first time Oslo Albet has shipped the original Forest Temple chapter as a purchasable desktop release rather than only as a free browser plug-in. The Steam store page describes the title as the standalone release of the cooperative puzzle, and the Steam Community hub threads focus on what changed for desktop players who remember the Flash-era original. The Flash-era build of Fireboy and Watergirl: The Forest Temple was hosted on the Oslo Albet series site at fireboyandwatergirl.com and on third-party browser mirrors such as Friv, CrazyGames, and Yandex Games. Those browser mirrors still carry the 2009 build during the Steam launch window, but they are play-alternatives, not the canonical version. The relationship to the rest of the series is unchanged. The Forest Temple chapter sits at the start of Oslo Albet's Fireboy & Watergirl series, ahead of the 2: Light Temple, 3: Ice Temple, 4: Crystal Temple, and 5: Elements sequels.",
      },
      {
        id: "additions",
        type: "prose",
        heading: "What the Steam version adds on top of the Flash build",
        body:
          "The Steam store page for AppID 5084260 lists several platform-level features that the Flash-era original could not offer in a browser plug-in. These additions form the baseline Steam-vs-Flash difference. The Steam AppID 5084260 means the game is no longer dependent on a browser or a Flash plug-in. Steam Cloud save support lets progress and diamond counts sync across Steam clients on the same account. Controller support lets players use a Steam controller, Xbox, or PlayStation pad without keyboard mapping. Modern resolution and windowing support lets the original 2009 pixel art scale cleanly to current desktop monitors. Steam achievements track progression milestones inside the Steam client. The Steam Community hub integration for AppID 5084260 carries discussions, screenshots, and review aggregation. Any other feature beyond what the Steam store page lists, including new level chapters, remastered art, or audio rework, is not announced as of 2026-09-06.",
      },
      {
        id: "preserved",
        type: "prose",
        heading: "What stays the same in the Steam version",
        body:
          "The core Forest Temple mechanics from the original 2009 Oslo Albet Flash build carry into the Steam release unchanged. Fireboy fears water and Watergirl fears fire; both characters fear green goo, poison pools, and lava. Diamond collection per level acts as the level-gating mechanic; missing diamonds block the level exit. Simultaneous-button cooperative triggers require both Fireboy and Watergirl to step on switches at the same time to open doors or move platforms. The Forest Temple chapter level order follows the original 2009 Oslo Albet design with about 30 levels of puzzle platforming. Fireboy uses WASD or the arrow keys; Watergirl uses the arrow keys as a paired second player on one keyboard for local co-op. These mechanics are the developer-of-record basis for the series and remain the same in the Steam release.",
      },
      {
        id: "controls-mapping",
        type: "prose",
        heading: "Controls and co-op: Steam versus Flash mapping",
        body:
          "The Flash-era original put two players on one keyboard by default (Fireboy on WASD and Watergirl on the arrow keys), and that mapping remains the foundation of the Steam release's local co-op. The Steam store page adds controller support and Steam Cloud as platform-side changes, so the keyboard layout carries forward while players gain the option of pad play and save sync. Browser mirrors still let a second player join from the same keyboard with the same Fireboy / Watergirl mapping. Whether the Steam release adds online multiplayer beyond local co-op is not announced as of 2026-09-06.",
      },
      {
        id: "unannounced",
        type: "callout",
        heading: "Not announced as of 2026-09-06",
        tone: "unknown",
        title: "Steam-vs-Flash items not announced",
        body:
          "New Forest Temple levels beyond the ~30 from the original 2009 Oslo Albet Flash build, rebalanced element hazards or new trap types, Steam online multiplayer beyond local co-op, cross-save between browser mirrors and the Steam build, and new chapters bundled into AppID 5084260 are not announced as of 2026-09-06. Where the Steam store page or Steam Community hub updates one of these items, this comparison will be updated to reflect the new information rather than carry older wording forward.",
      },
    ],
    faqIds: ["steam-vs-flash", "browser-mirrors"],
    relatedPageIds: ["release-platforms", "controls-coop", "element-traps"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "controls-coop",
    translationKey: "controls-coop",
    locale: "en-US",
    routeKind: "fixed",
    slug: "controls",
    url: "/controls",
    pageType: "guides",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl Controls and Co-op: Keyboard, Controller, and Two-Player Setup",
    seoTitle: "Fireboy and Watergirl controls and co-op for Steam players",
    metaDescription:
      "Fireboy and Watergirl controls and co-op on the Steam build: keyboard mapping, controller support, two-player local play, and browser-mirror alternatives.",
    summary:
      "Controls and cooperative play for the standalone Steam release on AppID 5084260, covering keyboard layout, controller support, and simultaneous-button triggers.",
    hero: {
      eyebrow: "Controls & Co-op",
      subtitle:
        "Original 2009 Oslo Albet keyboard layout preserved on Steam, with controller support and Steam Cloud added by the Steam store page.",
      ctas: [
        { label: "Steam vs Flash", href: "/steam-version/" },
        { label: "Where to Play", href: "/where-to-play/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl controls and co-op on the Steam release of Fireboy & Watergirl 1: The Forest Temple use the original 2009 Oslo Albet keyboard layout: Fireboy on WASD or arrows and Watergirl on arrows as a paired second player on one keyboard. The Steam store page adds controller support and Steam Cloud as platform features, so pad play and save sync are available on top of the legacy layout. Steam online multiplayer beyond local co-op is not announced as of 2026-09-06.",
    keyFacts: [
      { label: "Fireboy keys", value: "WASD or arrow keys" },
      { label: "Watergirl keys", value: "Arrow keys (paired second player)" },
      { label: "Controller support", value: "Listed on the Steam store page" },
      { label: "Steam Cloud", value: "Listed on the Steam store page" },
      { label: "Local co-op", value: "Two players, one machine, one keyboard" },
      { label: "Online multiplayer", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "keyboard-layout",
        type: "prose",
        heading: "Default keyboard layout",
        body:
          "The Fireboy and Watergirl controls and co-op design has its foundation in the original 2009 Oslo Albet Flash build, where two players share one keyboard by default. That layout carries forward into the Steam release as the developer-of-record basis for the Forest Temple chapter. Fireboy uses the WASD keys (W to jump, A to move left, D to move right, S to crouch where supported), with the arrow keys as an alternate mapping per the original design. Watergirl uses the arrow keys (Up arrow to jump, Left arrow to move left, Right arrow to move right, Down arrow to crouch where supported) as a paired second player on the same keyboard. Both characters share the same physical keyboard, so a two-player team sits side by side at one machine. This shared-keyboard layout is the legacy Oslo Albet mechanic that defines the co-op experience in the Forest Temple chapter. The Steam store page does not replace it; it adds Steam Cloud save support and controller support on top of it.",
      },
      {
        id: "solo-play",
        type: "prose",
        heading: "Single-player keyboard layout",
        body:
          "When you play solo, you control one character at a time and use the keyboard to switch between the two. The keyboard layout remains WASD or arrows for Fireboy and the arrow keys for Watergirl, and the simultaneous-button triggers still require both characters to step on switches at the same time, which means a single player has to time jumps between the two halves of the puzzle. The browser mirrors (Friv, CrazyGames, Yandex Games, Poki, Kizi) use the same keyboard mapping, so muscle memory from the 2009 Flash original carries straight into the Steam release without remapping.",
      },
      {
        id: "local-coop",
        type: "prose",
        heading: "Two-player local co-op on one machine",
        body:
          "The Fireboy and Watergirl controls and co-op design is built around two players sharing one keyboard and one machine. Player one takes Fireboy on WASD, player two takes Watergirl on the arrows, and the cooperative puzzles in the Forest Temple chapter require the two players to coordinate their movements in real time. Local co-op is the only multiplayer mode confirmed on the Steam store page for AppID 5084260 as of 2026-09-06. Online multiplayer beyond local co-op is not announced as of 2026-09-06, so two players in different locations cannot join the same Forest Temple session through Steam matchmaking.",
      },
      {
        id: "controller-support",
        type: "prose",
        heading: "Controller support on the Steam version",
        body:
          "The Steam store page for AppID 5084260 lists controller support as a platform-level feature of the Steam release. This is the headline Steam-vs-Flash change for Fireboy and Watergirl controls and co-op, since the 2009 Flash original did not offer native pad play. With controller support enabled in the Steam client, a single player can run both Fireboy and Watergirl from one pad using Steam Input, or two players can each plug in a controller and use the Steam controller remapping layer to assign the same Fireboy / Watergirl split across two pads. The exact mapping is handled through the Steam Input interface rather than through an in-game menu, so a player who prefers the original shared-keyboard layout can keep using the keyboard without enabling controllers. This addition does not change the underlying cooperative triggers. Simultaneous-button cooperative triggers still need the two characters to step on their switches at the same time, whether the inputs come from a keyboard or a controller.",
      },
      {
        id: "steam-cloud",
        type: "prose",
        heading: "Steam Cloud saves for co-op progress",
        body:
          "Steam Cloud is also listed on the Steam store page, which means diamond counts and level progression sync across Steam clients on the same account. For two-player co-op, this matters because each player's Steam client can carry the same Forest Temple chapter save forward across machines, rather than tying progress to the keyboard at one desk.",
      },
      {
        id: "trigger-mechanic",
        type: "prose",
        heading: "Simultaneous-button cooperative triggers",
        body:
          "The Fireboy and Watergirl controls and co-op design includes a specific puzzle mechanic that depends on input timing rather than movement timing alone. Simultaneous-button cooperative triggers require both Fireboy and Watergirl to step on weighted switches at the same moment, often separated by fire or water hazards that one character cannot cross alone. These triggers are the legacy Oslo Albet mechanic at the heart of the Forest Temple chapter. In a two-player local co-op session, one player calls the timing and the other player echoes it. In a single-player run, you switch between the two characters using the keyboard layout described above and time your own jumps between the two halves of the trigger puzzle.",
      },
      {
        id: "browser-mirrors",
        type: "prose",
        heading: "Browser-mirror controls as a free alternative",
        body:
          "The Fireboy and Watergirl controls and co-op layout is identical on the original 2009 browser mirrors because those mirrors use the same Oslo Albet Flash-era code. Players who want to confirm the keyboard layout before buying the Steam release can use any of the free browser mirrors to test Fireboy on WASD and Watergirl on the arrows. The browser mirrors run on a single keyboard and a single machine the same way the Steam build does. They are play-alternatives, not a separate game, so the controller support and Steam Cloud additions on the Steam store page do not apply to the browser mirrors.",
      },
    ],
    faqIds: ["controls-coop", "online-multiplayer"],
    relatedPageIds: ["steam-version-vs-flash", "where-to-play", "element-traps"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "walkthrough-overview",
    translationKey: "walkthrough-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/walkthrough",
    pageType: "wiki",
    presentation: hubShell("card-grid"),
    h1: "Fireboy and Watergirl 1 The Forest Temple Walkthrough Hub",
    seoTitle: "Fireboy and Watergirl 1 The Forest Temple walkthrough hub",
    metaDescription:
      "Fireboy and Watergirl 1 The Forest Temple walkthrough hub: chapter structure, level order, diamond gating, element rules, and where to find per-level help.",
    summary:
      "Walkthrough hub for the standalone Steam release of the Forest Temple chapter on AppID 5084260, linking to level list, diamond locations, and element-traps reference.",
    hero: {
      eyebrow: "Walkthrough hub",
      subtitle:
        "Forest Temple chapter walkthrough: level order, diamond gating, element rules, and simultaneous-button cooperative triggers.",
      ctas: [
        { label: "Levels", href: "/levels/" },
        { label: "Diamonds", href: "/diamonds/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 The Forest Temple walkthrough starts with the standalone Steam release of the 2009 Oslo Albet Forest Temple chapter on AppID 5084260, which carries the original level order, element rules, and diamond gating forward. This hub links to the level list, diamond locations, and element-traps reference so a player can move from a stuck puzzle to the right section in one click. The Steam release preserves the ~30 Forest Temple levels from the 2009 Flash original.",
    keyFacts: [
      { label: "Steam AppID", value: "5084260" },
      { label: "Chapter scope", value: "Forest Temple only" },
      { label: "Approximate level count", value: "~30 levels (2009 Flash original)" },
      { label: "Diamond gating", value: "Required per level to open the exit" },
      { label: "Series sequels", value: "Not bundled into this AppID" },
    ],
    modules: [
      {
        id: "chapter-fit",
        type: "prose",
        heading: "How the Forest Temple chapter fits in the walkthrough",
        body:
          "Fireboy and Watergirl 1: The Forest Temple is the first chapter in Oslo Albet's cooperative puzzle series. The Steam release on AppID 5084260 ships the Forest Temple chapter as a standalone title, with the rest of the series (Fireboy & Watergirl 2: Light Temple, 3: Ice Temple, 4: Crystal Temple, 5: Elements) available as separate entries and not bundled into this AppID. The walkthrough structure for the Forest Temple chapter is therefore a single-chapter progression from the first level to the chapter exit, not a multi-chapter campaign. The Forest Temple chapter acts as the on-ramp to the rest of the series: it introduces Fireboy's water weakness, Watergirl's fire weakness, the green goo and poison pool mechanics, lava avoidance, and the simultaneous-button cooperative triggers. Once a player clears the Forest Temple chapter, they can carry the same control layout and the same element-rule instincts into the Light Temple, Ice Temple, Crystal Temple, and Elements sequels.",
      },
      {
        id: "solo-vs-coop",
        type: "prose",
        heading: "Single-player vs two-player co-op walkthrough approach",
        body:
          "The walkthrough for Fireboy and Watergirl 1 The Forest Temple runs differently depending on whether you are playing solo or with a co-op partner. The element rules, the level order, and the diamond gates are the same in both modes; what changes is the path through the simultaneous-button triggers. In two-player local co-op, one player runs Fireboy on WASD and the other runs Watergirl on the arrow keys, sharing one keyboard on one machine, and the simultaneous-button triggers become a coordination exercise. In single-player mode, you control one character at a time and switch between Fireboy and Watergirl using the keyboard layout, and the simultaneous-button triggers become a self-timing exercise. Both modes use the same Forest Temple level order and the same element rules.",
      },
      {
        id: "diamond-gating",
        type: "prose",
        heading: "How diamond collection gates the Forest Temple walkthrough",
        body:
          "Diamond collection is the central progression mechanic in the Forest Temple chapter and shapes the walkthrough structure. Each level hides a fixed number of diamonds, and the level exit only opens once every diamond in that level has been collected. Missing a diamond blocks the exit and forces a backtrack. The Forest Temple chapter uses diamond collection as the level-gating mechanic. Some diamonds sit on fire-safe platforms only Watergirl can reach, some sit in water-safe sections only Fireboy can reach, and some sit behind green goo or poison pools that both characters must avoid. The element-traps page explains which character can collect which diamond, and the diamonds page ties that to the per-level gating.",
      },
      {
        id: "per-level",
        type: "entity-grid",
        heading: "Walkthrough sections",
        items: [
          {
            title: "Level List",
            summary: "Forest Temple chapter level order and per-level overview.",
            href: "/levels/",
          },
          {
            title: "Diamond Locations",
            summary: "Diamond collection and the perfect-ending unlock path.",
            href: "/diamonds/",
          },
          {
            title: "Element Traps",
            summary: "Fire, water, green goo, poison, and lava mechanics.",
            href: "/element-traps/",
          },
          {
            title: "Controls & Co-op",
            summary: "Keyboard, controller, and simultaneous-button triggers.",
            href: "/controls/",
          },
        ],
      },
    ],
    faqIds: ["level-count", "element-rules"],
    relatedPageIds: ["levels", "diamonds-gems", "element-traps", "controls-coop"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "levels",
    translationKey: "levels",
    locale: "en-US",
    routeKind: "fixed",
    slug: "levels",
    url: "/levels",
    pageType: "wiki",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 Forest Temple levels: full level list and chapter order",
    seoTitle: "Fireboy and Watergirl 1 Forest Temple levels and full level list",
    metaDescription:
      "Complete list of Fireboy and Watergirl 1 Forest Temple levels from the Steam release, with chapter order, hazard overview, and diamond gating explained.",
    summary:
      "Reference page listing the Forest Temple chapter level count, hazard overview, and diamond gating for the standalone Steam release on AppID 5084260.",
    hero: {
      eyebrow: "Level list",
      subtitle:
        "Forest Temple chapter level order, hazard overview, and diamond gating as the developer-of-record baseline.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough/" },
        { label: "Diamonds", href: "/diamonds/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 Forest Temple levels follow the single Forest Temple chapter from Oslo Albet's original 2009 Flash release, with roughly 30 levels confirmed as the developer-of-record count on the Oslo Albet series site. The Steam release on 2026-09-01 (AppID 5084260) reuses the Forest Temple chapter as the launch content for the standalone Steam build. Diamonds gate every level exit, so each level feeds directly into the next gate. A final Steam-specific level count is Not announced as of 2026-09-06.",
    keyFacts: [
      { label: "Approximate Forest Temple level count", value: "~30 levels (2009 Flash original)" },
      { label: "Steam AppID", value: "5084260" },
      { label: "Steam release date", value: "2026-09-01" },
      { label: "Sequels in this AppID", value: "None (Forest Temple only)" },
      { label: "Steam-versus-Flash level additions", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "chapter-structure",
        type: "prose",
        heading: "Forest Temple chapter structure",
        body:
          "The Forest Temple chapter is the first and only chapter in Fireboy and Watergirl 1. Each level builds on the same dual-character cooperative layout: Fireboy and Watergirl share the screen, each character solves the half of the puzzle they can survive, and both characters must reach the twin exit doors at the same time to clear the level. Element hazards (water pools, fire pools, green goo, poison pools, lava) decide which character can stand where, and diamonds sit on the routes between those hazards. Per the Oslo Albet series site and the 2009 Flash-era developer-of-record record, the Forest Temple chapter runs as a single linear sequence from level 1 through the final level. The Steam store page for AppID 5084260 confirms the Forest Temple chapter name as the canonical launch content for the standalone release on 2026-09-01. The Steam Community hub threads reuse the same level numbering when players describe Steam version puzzles.",
      },
      {
        id: "series-position",
        type: "prose",
        heading: "Where the Forest Temple chapter sits in the series",
        body:
          "Fireboy and Watergirl 1: The Forest Temple is the first title in the Oslo Albet Fireboy & Watergirl series. The Steam release is the standalone Steam version of the Forest Temple chapter; the sequels (Light Temple, Ice Temple, Crystal Temple, Elements) ship as separate chapters and are referenced only to explain the autocomplete spillover where search engines pull sequel names into Forest Temple queries. Series sequel levels do not appear in the Forest Temple level list.",
      },
      {
        id: "gating",
        type: "prose",
        heading: "Level-gating diamonds and hazard progression across levels",
        body:
          "Every level in Fireboy and Watergirl 1 Forest Temple is gated by collecting the diamonds placed on that level. The diamond counter sits in the corner of the level layout; both characters must reach the twin exit doors with the level's full diamond quota to advance. If a character dies in a hazard, the level restarts without resetting the diamond counter, so partial diamond progress persists across attempts within the same level session. Water-safe diamonds (cyan) can only be collected by Watergirl; touching them as Fireboy triggers an instant death on water-themed diamond tiles. Fire-safe diamonds (red) can only be collected by Fireboy; Watergirl dies on contact. In addition to the water and fire pools that drive the Fireboy / Watergirl element split, every Forest Temple level includes some combination of green goo, poison pools, and lava. Both characters die on contact with any of these three hazards, so neither Watergirl nor Fireboy can stand on them. Designers use these shared hazards to block routes that must instead be opened by pulling levers, pushing boxes, or stepping on pressure plates in cooperative trigger sequences.",
      },
      {
        id: "steam-vs-flash",
        type: "prose",
        heading: "Steam vs Flash differences in the level list",
        body:
          "The Steam release of Fireboy and Watergirl 1 Forest Temple levels reuses the 2009 Flash-era Forest Temple chapter level order as the launch content. Modern-resolution rendering, Steam achievements, Steam Cloud, and controller support are added by the Steam build without changing the underlying Forest Temple chapter level list. Specific Steam-versus-Flash feature changes beyond what the Steam store page lists are Not announced as of 2026-09-06. Per-level minute-by-minute walkthrough text is not published here; if a future per-level page is built, the diamond coordinates and exact hazard placements for each Forest Temple level will live on that dedicated child page.",
      },
    ],
    faqIds: ["level-count"],
    relatedPageIds: ["walkthrough-overview", "diamonds-gems", "element-traps"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "diamonds-gems",
    translationKey: "diamonds-gems",
    locale: "en-US",
    routeKind: "fixed",
    slug: "diamonds",
    url: "/diamonds",
    pageType: "guides",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 Forest Temple diamonds: full gem guide and perfect ending",
    seoTitle: "Fireboy and Watergirl 1 Forest Temple diamonds and perfect run",
    metaDescription:
      "Fireboy and Watergirl 1 Forest Temple diamonds: where to find every gem, how diamond gating works, and what unlocks the perfect ending on Steam.",
    summary:
      "Diamond locations, color rules, and perfect-ending unlock path for the Forest Temple chapter on the standalone Steam release on AppID 5084260.",
    hero: {
      eyebrow: "Diamonds & perfect run",
      subtitle:
        "Water-safe and fire-safe diamonds gate every level exit and unlock the Forest Temple perfect ending on the Steam release.",
      ctas: [
        { label: "Levels", href: "/levels/" },
        { label: "Element Traps", href: "/element-traps/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 Forest Temple diamonds are the colored gems that gate every level exit. Diamonds are split into water-safe gems that only Watergirl can pick up and fire-safe gems that only Fireboy can pick up. Collecting every diamond on a level is required before the twin exit doors open, and collecting every Forest Temple chapter diamond unlocks the perfect ending. Any Steam-specific diamond-rule changes versus the 2009 Flash original are Not announced as of 2026-09-06.",
    keyFacts: [
      { label: "Water-safe diamonds", value: "Cyan; collected by Watergirl" },
      { label: "Fire-safe diamonds", value: "Red; collected by Fireboy" },
      { label: "Level gate", value: "Diamond counter must be full to open exit" },
      { label: "Chapter perfect ending", value: "Every diamond on every level collected" },
      { label: "Solo collection", value: "Not possible (color rule splits collection)" },
    ],
    modules: [
      {
        id: "gating",
        type: "prose",
        heading: "How diamonds gate every Forest Temple level",
        body:
          "Every Forest Temple level hides a small set of diamonds across the puzzle layout. The level shows a diamond counter at the top of the screen and a target total; both characters must collect their share of the gems and reach the twin exit doors to clear the level. If either character dies on a hazard (water, fire, green goo, poison pools, lava), the level restarts, but the diamond counter carries over from the previous attempt, so partial progress is preserved within a single play session. Water-safe diamonds are placed on tiles that only Watergirl can stand on. Fireboy who touches a water-safe diamond tile dies on contact, the same way he dies in any water pool. Fire-safe diamonds sit on fire-tinted tiles that only Fireboy can survive. Watergirl who steps on a fire-safe diamond tile dies on contact, identical to her behavior in any fire pool. Some diamond routes cross shared hazards like green goo, poison pools, and lava. Both characters die on these tiles, so neither Watergirl nor Fireboy can stand on them directly. Designers route diamonds across these tiles by placing boxes, levers, and pressure plates that one character can operate while the other collects the gem on the safe side.",
      },
      {
        id: "perfect-ending",
        type: "prose",
        heading: "Forest Temple perfect ending and the diamond total",
        body:
          "The Fireboy and Watergirl 1 Forest Temple perfect ending is unlocked when the chapter diamond total is complete. On the original 2009 Oslo Albet Flash release, that means collecting every diamond in every Forest Temple level. The Steam release on 2026-09-01 (AppID 5084260) reuses the Forest Temple chapter as the launch content, and the diamond-gating rule is the same developer-of-record mechanic that drives level exits. The Steam store page lists Steam achievements for the Forest Temple chapter; the chapter-perfect achievement is unlocked when every diamond on every level has been collected. Specific Steam achievement names, icons, or unlock thresholds beyond what the Steam store page lists are Not announced as of 2026-09-06. Plan a diamond-perfect run by treating each Forest Temple level as two puzzles: the survival puzzle (who crosses which hazard) and the collection puzzle (which character picks up which diamond color).",
      },
      {
        id: "steam-vs-flash",
        type: "prose",
        heading: "Steam vs Flash diamond rules",
        body:
          "The Forest Temple diamond rule from the 2009 Oslo Albet Flash original is the developer-of-record baseline: water-safe diamonds are cyan, fire-safe diamonds are red, both colors must be collected, and the chapter total unlocks the perfect ending. The Steam release of AppID 5084260 reuses this baseline as the standalone Steam version. Steam additions such as achievements, Steam Cloud, and modern resolution do not change the underlying diamond color rule or the diamond-gating behavior of the level exits. Any Steam rebalancing of the diamond rule is Not announced as of 2026-09-06.",
      },
    ],
    faqIds: ["diamond-perfect-ending"],
    relatedPageIds: ["levels", "element-traps", "walkthrough-overview"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "element-traps",
    translationKey: "element-traps",
    locale: "en-US",
    routeKind: "fixed",
    slug: "element-traps",
    url: "/element-traps",
    pageType: "release",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl element rules and traps: how fire, water, green goo, poison, and lava work",
    seoTitle: "Fireboy and Watergirl element rules and traps explained",
    metaDescription:
      "Fireboy and Watergirl element rules and traps: Fireboy fears water, Watergirl fears fire, both fear green goo, poison, and lava on Steam and Flash.",
    summary:
      "Element rules and trap mechanics for the Forest Temple chapter on the standalone Steam release on AppID 5084260.",
    hero: {
      eyebrow: "Element rules",
      subtitle:
        "Per-character and shared hazards for the Forest Temple chapter: fire, water, green goo, poison pools, and lava, plus cooperative triggers.",
      ctas: [
        { label: "Controls & Co-op", href: "/controls/" },
        { label: "Levels", href: "/levels/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl element rules and traps split the survival mechanics by character. Fireboy dies on contact with water pools, and Watergirl dies on contact with fire pools. Both characters die on contact with green goo, poison pools, and lava. Pressure-plate doors and boxes let the two characters cooperate to bypass hazards that neither can stand on alone. The Steam release on 2026-09-01 (AppID 5084260) reuses these rules from the 2009 Oslo Albet Flash original.",
    keyFacts: [
      { label: "Fireboy weakness", value: "Water pools (and water-safe diamond tiles)" },
      { label: "Watergirl weakness", value: "Fire pools (and fire-safe diamond tiles)" },
      { label: "Shared hazards", value: "Green goo, poison pools, lava" },
      { label: "Bypass mechanic", value: "Pressure plates, boxes, levers, elevators" },
      { label: "Steam rebalancing", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "per-character",
        type: "prose",
        heading: "Per-character element rules",
        body:
          "Every Fireboy and Watergirl element trap is built from the same baseline: each character has one element they cannot survive, and three shared hazards that kill both. Fireboy dies the moment his feet touch any water pool. Water pools come in two forms: standing water on the floor of a level, and water-safe diamond tiles. Fireboy cannot stand on either. Designers place water pools as the route Watergirl must take to reach water-safe diamonds; Fireboy waits on the safe side until Watergirl clears the path. Watergirl dies on contact with any fire pool. Fire pools include standing fire on the floor and fire-safe diamond tiles. Watergirl cannot stand on either. Designers mirror the layout so Fireboy crosses the fire pools to collect fire-safe diamonds while Watergirl waits on the safe side. Green goo is the slimy green puddle that both Fireboy and Watergirl die on. Poison pools are the dark-purple water that both characters die on. Lava is the bright-orange floor that both characters die on. Because neither character can survive these three hazard types, the only way past them is to operate boxes, levers, elevators, or pressure plates that one character holds while the other character crosses the safe tile.",
      },
      {
        id: "triggers",
        type: "prose",
        heading: "Cooperative triggers and pressure-plate doors",
        body:
          "Many Fireboy and Watergirl element traps are solved by simultaneous-button cooperative triggers. A pressure plate on the floor opens a door only while a character stands on the plate. If one character needs to cross a door that closes behind them, both characters step on two plates at the same time, the door opens, both characters run through, and the door closes again before either character falls into the hazard behind. Boxes can be pushed into water pools, fire pools, green goo, poison pools, and lava to create a temporary safe tile. Levers held down by a box open doors or elevators that stay open while the box sits on the lever. Designers use these so that one character pushes a box onto a lever while the other character crosses the safe tile to reach the exit door. Some Forest Temple traps require both characters to step on two separate pressure plates at the same time. One plate opens the exit door; the other plate opens the path to the exit door. The rule is the same: both characters step on the plates together, the doors open, and both characters must reach the exit door before the doors close again.",
      },
      {
        id: "design-language",
        type: "prose",
        heading: "Element rules as the per-level puzzle language",
        body:
          "Fireboy and Watergirl element rules are not just survival mechanics; they are the design language that decides where diamonds and exit doors can sit on every Forest Temple level. Water-safe diamonds sit on water-safe tiles that only Watergirl can stand on. Fire-safe diamonds sit on fire-safe tiles that only Fireboy can stand on. Diamonds are never placed directly on green goo, poison pools, or lava; they sit on safe tiles, but the safe tile is only reachable through a cooperative trigger across the unsafe tile. Every Forest Temple level uses a small subset of the five element types to build its puzzle: water pools, fire pools, green goo, poison pools, and lava. Early levels mix only water and fire so new players can learn the character split. Later levels introduce green goo and poison pools to force cooperative triggers. Final levels stack lava on top of water-safe and fire-safe routes so both characters must operate boxes and pressure plates in sequence before either can cross.",
      },
      {
        id: "steam-parity",
        type: "prose",
        heading: "Steam vs Flash element-rule parity",
        body:
          "The Forest Temple chapter element rules on the Steam release of AppID 5084260 are described as the standalone Steam version of the 2009 Oslo Albet Flash original. Steam additions (Steam achievements, Steam Cloud, modern resolution, controller support) do not change the underlying element rules. Any Steam-specific rebalancing of the five hazard types is Not announced as of 2026-09-06.",
      },
    ],
    faqIds: ["element-rules"],
    relatedPageIds: ["controls-coop", "levels", "diamonds-gems"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "where-to-play",
    translationKey: "where-to-play",
    locale: "en-US",
    routeKind: "fixed",
    slug: "where-to-play",
    url: "/where-to-play",
    pageType: "release",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 The Forest Temple where to play on Steam and online",
    seoTitle: "Fireboy and Watergirl 1 The Forest Temple where to play online",
    metaDescription:
      "Fireboy and Watergirl 1 The Forest Temple where to play on Steam, in browser mirrors, and on mobile or console as of 2026-09-06.",
    summary:
      "Where-to-play page listing Steam as the canonical first-launch purchase channel, browser mirrors as free play-alternatives, and console or mobile as Not announced.",
    hero: {
      eyebrow: "Where to play",
      subtitle:
        "Steam as the canonical launch channel, browser mirrors as free play-alternatives, console and mobile Not announced as of 2026-09-06.",
      ctas: [
        { label: "Release Status", href: "/release/" },
        { label: "Controls & Co-op", href: "/controls/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 The Forest Temple where to play points to Steam as the canonical purchase channel for the new standalone build releasing September 1, 2026. Free browser mirrors such as Friv, CrazyGames, Yandex Games, Poki, and Kizi run the older Flash-era version of the Forest Temple chapter during the Steam launch window. Console versions and mobile versions remain Not announced as of 2026-09-06.",
    keyFacts: [
      { label: "Canonical launch channel", value: "Steam AppID 5084260" },
      { label: "Steam release date", value: "September 1, 2026" },
      { label: "Free browser mirrors", value: "Friv, CrazyGames, Yandex Games, Poki, Kizi" },
      { label: "Mobile (iOS / Android)", value: "Not announced as of 2026-09-06" },
      { label: "Console (PlayStation, Xbox, Switch)", value: "Not announced as of 2026-09-06" },
    ],
    modules: [
      {
        id: "steam-canonical",
        type: "prose",
        heading: "Steam as the canonical launch channel",
        body:
          "The Steam store page for AppID 5084260 is the canonical first-launch purchase channel for Fireboy and Watergirl 1 The Forest Temple, where to play on day one. Buying on Steam gives the Windows, Mac, and Linux launch build, plus the controller support and Steam Cloud synchronization listed on the Steam store page, and ties the save state to a Steam account that can move between machines. Steam is also the place where the launch-week Popular Coming Soon signal (#17 as of the August 31, 2026 launch brief) is visible, so players who want the new build should buy or wishlist on Steam rather than relying on a browser mirror that still hosts the 2009 Flash-era original. The Steam Community hub for AppID 5084260 is the matching discussion surface for launch-day questions, screenshots, and co-op session coordination. The Steam store page for AppID 5084260 publishes the standalone Forest Temple chapter as the launch edition. There is no current evidence on the Steam store page of a Forest Temple + sequel bundle edition, a deluxe upgrade, or pre-purchase bonuses at launch, so any bundle or upgrade offer should be treated as Not announced as of 2026-09-06.",
      },
      {
        id: "browser-mirrors",
        type: "prose",
        heading: "Free browser mirrors during the Steam launch window",
        body:
          "During the Steam launch window, free browser mirrors that host the original 2009 Oslo Albet Flash-era Forest Temple chapter remain widely available. Friv, CrazyGames, Yandex Games (Яндекс игры), Poki, and Kizi each host the Forest Temple chapter under a browser-mirror URL, and these mirrors are useful as a no-install way to revisit the original Forest Temple chapter while waiting for the new Steam build to install. These browser mirrors are demand-signal sources only for the where-to-play decision, not canonical sources for the new Steam build. They run the older Flash-era original, not the standalone Steam AppID 5084260 release, so players who want the September 1, 2026 Steam build with controller support and Steam Cloud should still buy or wishlist on Steam rather than treating a browser mirror as a substitute. Browser mirrors can rotate URLs, serve autoplay video ads, or stop hosting the chapter without warning, which is why they are listed only as play-alternatives during the Steam release window and not as a long-term home for the Forest Temple chapter.",
      },
      {
        id: "console-mobile",
        type: "callout",
        heading: "Console and mobile versions",
        tone: "unknown",
        title: "Console and mobile: Not announced",
        body:
          "Console versions for PlayStation, Xbox, and Nintendo Switch are Not announced as of 2026-09-06. Mobile versions for iOS and Android are also Not announced as of 2026-09-06. The Steam store page for AppID 5084260 and the Oslo Albet official Fireboy and Watergirl series site are the first surfaces to update if a console or mobile port is announced after launch.",
      },
    ],
    faqIds: ["browser-mirrors"],
    relatedPageIds: ["release-platforms", "controls-coop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
  {
    id: "reviews-press",
    translationKey: "reviews-press",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "release",
    presentation: shellFor("content", "reading-right-rail"),
    h1: "Fireboy and Watergirl 1 The Forest Temple Steam Reviews and Player Reactions",
    seoTitle: "Fireboy and Watergirl 1 The Forest Temple Steam reviews",
    metaDescription:
      "Fireboy and Watergirl 1 The Forest Temple Steam reviews and player reactions: launch-window demand, Popular Coming Soon rank, and where reviews go live.",
    summary:
      "Steam reviews status for AppID 5084260, including the launch-window Popular Coming Soon rank #17 demand signal and where reviews accumulate post-launch.",
    hero: {
      eyebrow: "Reviews & reactions",
      subtitle:
        "Steam reviews go live on the store page after launch; Popular Coming Soon rank #17 is the launch-window demand signal as of 2026-09-06.",
      ctas: [
        { label: "Release Status", href: "/release/" },
        { label: "Steam vs Flash", href: "/steam-version/" },
      ],
    },
    quickAnswer:
      "Fireboy and Watergirl 1 The Forest Temple Steam reviews on AppID 5084260 will go live on the Steam store page once the September 1, 2026 release is in players' hands, with the Steam Community hub carrying launch-window discussion threads in the meantime. Popular Coming Soon tracking on Steam listed the title at rank #17 in the launch run-up, which is the strongest pre-release demand signal currently published. Numeric Steam review scores are not announced as of 2026-09-06 because the reviews tab is empty before launch.",
    keyFacts: [
      { label: "Steam AppID", value: "5084260" },
      { label: "Steam release date", value: "September 1, 2026" },
      { label: "Popular Coming Soon rank", value: "#17 (launch brief date 2026-08-31)" },
      { label: "Pre-launch numeric review score", value: "Not announced as of 2026-09-06" },
      { label: "Steam Community hub", value: "Active with launch-window discussion threads" },
    ],
    modules: [
      {
        id: "review-status",
        type: "prose",
        heading: "Reviews status as of the September 1, 2026 launch",
        body:
          "The Steam store page for AppID 5084260 is the canonical surface for Fireboy and Watergirl 1 The Forest Temple Steam reviews once they go live, and the Steam Community hub for AppID 5084260 is the discussion surface that runs alongside it. Before launch, the reviews tab on the Steam store page is empty, so there are no numeric Steam review scores, no review-band label (Positive, Mixed, Negative), and no written player reviews yet. The Steam Community hub for AppID 5084260 already carries launch-window discussion threads: returning Fireboy and Watergirl fans comparing the Steam release to the 2009 Flash original, new Steam players asking about the cooperative layout, and screenshots of early Forest Temple chapter runs. These threads are demand signals, not review scores, and they preview the kinds of feedback that will move into the Steam reviews tab once players have the build in their hands.",
      },
      {
        id: "popular-coming-soon",
        type: "prose",
        heading: "Popular Coming Soon rank #17 as a launch-window signal",
        body:
          "Popular Coming Soon tracking on the Steam hub listed Fireboy and Watergirl 1 The Forest Temple at rank #17 in the launch run-up, which is the strongest pre-release demand signal currently published for the title. Popular Coming Soon rank is a Steam-published list of titles with the most wishlists and follow activity before launch, so a top-20 rank indicates strong pre-release interest from both returning Fireboy and Watergirl fans and new Steam players. The Popular Coming Soon rank is not a Steam review score. It does not rate the game, and it does not predict the post-launch review band. It is a demand indicator that explains why the title appears in launch-window Steam surfacing. The Steam store page and the Popular Coming Soon Steam hub are the official sources for this signal as of 2026-09-06.",
      },
      {
        id: "post-launch",
        type: "prose",
        heading: "Where reviews will appear post-launch",
        body:
          "Once the September 1, 2026 launch is in players' hands, Fireboy and Watergirl 1 The Forest Temple Steam reviews will accumulate on the Steam store page review tab for AppID 5084260. The Steam review aggregation bands (Positive, Mostly Positive, Mixed, Mostly Negative, Negative) are published automatically based on the percentage of positive reviews across all languages, and they update as more players submit written reviews. The Steam Community hub for AppID 5084260 is the discussion surface for player reactions during the launch window: screenshots, comparison notes about the Steam-vs-Flash differences, controller-mapping questions, and two-player local co-op coordination tips all appear in the hub threads before they consolidate into the Steam reviews tab. Press coverage of the Steam release will appear on game-media outlets once the September 1, 2026 launch passes; press outlets covering the title on Steam are not announced as of 2026-09-06.",
      },
    ],
    faqIds: ["reviews-status", "popular-coming-soon-rank"],
    relatedPageIds: ["release-platforms", "steam-version-vs-flash"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-06",
  },
];
