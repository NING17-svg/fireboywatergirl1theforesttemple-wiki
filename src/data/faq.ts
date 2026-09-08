import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "release-date",
    question: "When does Fireboy & Watergirl 1: The Forest Temple release on Steam?",
    answer:
      "The Steam store page for AppID 5084260 lists September 1, 2026 as the release date, with Windows, Mac, and Linux availability and Steam Cloud save support.",
    pageIds: ["home", "release-platforms", "where-to-play"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "supported-platforms",
    question: "Which platforms support the Forest Temple launch build?",
    answer:
      "Windows, Mac, and Linux are listed on the Steam store page at launch. Controller support and Steam Cloud are also listed as supported features.",
    pageIds: ["release-platforms", "system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "console-mobile",
    question: "Are console or mobile versions planned?",
    answer:
      "Console versions for PlayStation, Xbox, and Nintendo Switch, and mobile versions for iOS and Android, are Not announced as of 2026-09-06.",
    pageIds: ["release-platforms", "where-to-play"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "popular-coming-soon-rank",
    question: "What is the Popular Coming Soon rank?",
    answer:
      "The Popular Coming Soon Steam hub ranked Fireboy & Watergirl 1: The Forest Temple at #17 as of the August 31, 2026 launch brief.",
    pageIds: ["release-platforms", "reviews-press"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "system-requirements",
    question: "What PC specs does the Steam build need?",
    answer:
      "The Steam store page lists minimum and recommended CPU, GPU, RAM, and storage tiers; see the system-requirements page for the current breakdown.",
    pageIds: ["system-requirements", "release-platforms"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-vs-flash",
    question: "How does the Steam version differ from the original Flash game?",
    answer:
      "The Steam release keeps the original Oslo Albet Forest Temple mechanics and adds Steam platform features such as Steam Cloud, Steam achievements, modern resolution, and controller support.",
    pageIds: ["steam-version-vs-flash", "home"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controls-coop",
    question: "How do the cooperative controls work?",
    answer:
      "The original Oslo Albet design places Fireboy on WASD or arrow keys and Watergirl on the arrow keys as a paired second player on one keyboard; the Steam build adds controller support and Steam Cloud.",
    pageIds: ["controls-coop", "home", "how-to-play-online"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "online-multiplayer",
    question: "Does the Steam release support online multiplayer?",
    answer:
      "Steam online multiplayer beyond local co-op is Not announced as of 2026-09-06. The Steam build supports local two-player co-op on one keyboard.",
    pageIds: ["controls-coop", "where-to-play", "how-to-play-online"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "level-count",
    question: "How many levels are in the Forest Temple chapter?",
    answer:
      "The Forest Temple chapter follows the original 2009 Oslo Albet design with about 30 levels; the final Steam level count is Not announced as of 2026-09-06 if it differs.",
    pageIds: ["levels", "walkthrough-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "diamond-perfect-ending",
    question: "How do I unlock the perfect ending?",
    answer:
      "Collect every diamond (gem) in each Forest Temple level before reaching the exit; water-safe and fire-safe diamonds require Fireboy and Watergirl to work together.",
    pageIds: ["diamonds-gems", "element-traps", "forest-temple-chapter-walkthrough", "achievements"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "element-rules",
    question: "What are the element trap rules?",
    answer:
      "Fireboy fears water, Watergirl fears fire, and both characters fear green goo, poison pools, and lava; simultaneous-button cooperative triggers require both characters on switches at the same time.",
    pageIds: ["element-traps", "controls-coop", "home", "walkthrough-overview", "forest-temple-chapter-walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "browser-mirrors",
    question: "Where else can I play the Forest Temple chapter for free?",
    answer:
      "Browser mirrors including Friv, CrazyGames, Yandex Games, Poki, and Kizi carry the original 2009 Forest Temple chapter as a play-alternative during the Steam release window.",
    pageIds: ["where-to-play", "steam-version-vs-flash", "home"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "reviews-status",
    question: "What are players saying on Steam?",
    answer:
      "The Steam Community hub discussion threads and the Popular Coming Soon rank #17 launch-window signal are the first places to check; Steam review aggregation goes live once reviews open on the store page.",
    pageIds: ["reviews-press", "home"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "solo-play-strategy",
    question: "Can I play the Forest Temple chapter alone?",
    answer:
      "Yes. Solo play uses the park-and-switch rhythm, box-as-pressure-plate holds to bypass simultaneous-button triggers, and a water-safe / fire-safe / green-gem pickup order. See the chapter walkthrough for the full method.",
    pageIds: ["forest-temple-chapter-walkthrough", "controls-coop"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-achievements",
    question: "How many Steam achievements does Forest Temple have?",
    answer:
      "The Steam release on AppID 5084260 lists exactly two achievements: Complete all the levels, and Get all the green gems. Green gems are a separate collectible from diamonds.",
    pageIds: ["achievements", "diamonds-gems"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "green-gems-vs-diamonds",
    question: "Are green gems the same as diamonds?",
    answer:
      "No. Diamonds (cyan water-safe and red fire-safe) gate the per-level exit. Green gems are a separate collectible that feeds the second Steam achievement only; they do not affect the level exit.",
    pageIds: ["achievements", "diamonds-gems"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "remote-play-together",
    question: "How do I play Forest Temple online with a friend?",
    answer:
      "Use Steam Remote Play Together on AppID 5084260. The host launches the game and invites the friend through the Steam overlay; the friend streams from the host's machine and uses a virtual controller for Watergirl. Native online multiplayer is not announced as of 2026-09-06.",
    pageIds: ["how-to-play-online", "controls-coop", "where-to-play", "home"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
