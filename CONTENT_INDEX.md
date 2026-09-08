# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Fireboy and Watergirl 1 The Forest Temple Steam hub | Find the best entry point | Release / Walkthrough | Hub | Unofficial launch hub for AppID 5084260. |
| `/release` | `src/data/pages/fixed-pages.ts` | Release | Forest Temple Steam release date | Check release timing and platforms | System Requirements / Where to Play | Supporting hub | Steam store page AppID 5084260, September 1, 2026. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` | Release | Forest Temple system requirements | Confirm supported OS and feature flags | Release / Steam vs Flash | Supporting hub | Windows, Mac, Linux; numeric tiers Not announced. |
| `/steam-version` | `src/data/pages/fixed-pages.ts` | Release | Forest Temple Steam version vs Flash | Compare Steam release to 2009 Flash original | Release / Controls | Supporting hub | Steam additions: Cloud, achievements, controller. |
| `/controls` | `src/data/pages/fixed-pages.ts` | Guide | Forest Temple controls and co-op | Keyboard, controller, two-player local co-op | Steam vs Flash / Where to Play | Guide | WASD / arrow-key layout from 2009 Oslo Albet original. |
| `/walkthrough` | `src/data/pages/fixed-pages.ts` | Wiki | Forest Temple walkthrough hub | Find progression content sections | Levels / Diamonds | Hub | Links to per-section Forest Temple content. |
| `/levels` | `src/data/pages/fixed-pages.ts` | Wiki | Forest Temple level list and order | See chapter level order and diamond gating | Walkthrough / Diamonds | Reference | ~30 levels from 2009 Flash original. |
| `/forest-temple-chapter-walkthrough` | `src/data/pages/fixed-pages.ts` | Wiki | Forest Temple solo walkthrough | Solo park-and-switch rhythm and box pressure-plate holds | Levels / Diamonds | Guide | New 2026-09-08 solo-play chapter walkthrough. |
| `/diamonds` | `src/data/pages/fixed-pages.ts` | Guide | Forest Temple diamonds and perfect ending | Find water-safe and fire-safe diamonds | Levels / Element Traps | Reference | Diamonds gate the level exit. |
| `/element-traps` | `src/data/pages/fixed-pages.ts` | Wiki | Forest Temple element rules and traps | Fire / water / green goo / poison / lava rules | Controls / Levels | Reference | Per-character and shared hazards. |
| `/achievements` | `src/data/pages/fixed-pages.ts` | Guide | Forest Temple Steam achievements | See the actual two achievements and green-gem rules | Chapter Walkthrough / Diamonds | Guide | New 2026-09-08 Steam achievements page. |
| `/how-to-play-online` | `src/data/pages/fixed-pages.ts` | Guide | Forest Temple how to play online | Use Steam Remote Play Together as online co-op workaround | Controls / Where to Play | Guide | New 2026-09-08 Remote Play Together setup page. |
| `/where-to-play` | `src/data/pages/fixed-pages.ts` | Release | Forest Temple where to play online | Pick a purchase channel or browser mirror | Release / Controls | Supporting hub | Steam canonical, browser mirrors as alternatives. |
| `/reviews` | `src/data/pages/fixed-pages.ts` | Release | Forest Temple Steam reviews | Track launch-window Popular Coming Soon and review tab | Release / Steam vs Flash | Supporting hub | Popular Coming Soon rank #17 launch-window signal. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release`, `/system-requirements`, `/where-to-play`
- Progression guides: `/walkthrough`, `/levels`, `/forest-temple-chapter-walkthrough`, `/diamonds`, `/element-traps`, `/achievements`
- Co-op and play options: `/controls`, `/how-to-play-online`, `/steam-version`
- Reception: `/reviews`
- Hub: `/`

## Internal Linking Map

- Homepage should link to the most current high-demand pages (release, walkthrough, chapter walkthrough, achievements, play online).
- Walkthrough hub links to `/levels`, `/forest-temple-chapter-walkthrough`, `/diamonds`, `/element-traps`, `/controls`.
- Chapter walkthrough links to `/levels`, `/diamonds`, `/element-traps`, `/controls`, `/achievements`, `/how-to-play-online`.
- Achievements links to `/forest-temple-chapter-walkthrough`, `/diamonds`, `/levels`.
- How-to-play-online links to `/controls`, `/where-to-play`, `/steam-version`, `/system-requirements`.
- Where to play links to `/release`, `/controls`.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Per-level green-gem counts beyond the 2009 Oslo Albet baseline are not announced as of 2026-09-06.
- Specific Steam achievement icons, global completion percentages, and Steam-vs-Flash level additions are not announced as of 2026-09-06.
- Native Steam online multiplayer beyond local co-op is not announced as of 2026-09-06.
