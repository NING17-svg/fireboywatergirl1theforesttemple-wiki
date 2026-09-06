import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "mixed",
  tokens: {
    pageBg: "#F4F1E8",
    surface1: "#FBF8EF",
    surface2: "#FFFFFF",
    surface3: "#E8E2D2",
    surfaceInverse: "#1F2A24",
    textPrimary: "#1E2A22",
    textMuted: "#5A6A60",
    textInverse: "#F4F1E8",
    textOnAccentPrimary: "#1A0E04",
    textLink: "#A8421B",
    focusRing: "#1F6FB2",
    line: "#C9C0AB",
    lineStrong: "#8C7E5F",
    accentPrimary: "#D9541E",
    accentSecondary: "#1F6FB2",
    accentBright: "#F2B431",
    statusConfirmed: "#2E7D4F",
    statusCaution: "#C97A0F",
    statusUnknown: "#6E7B82",
  },
  typography: {
    headingFamily:
      "'Fraunces', 'Source Serif 4', Georgia, 'Times New Roman', serif",
    bodyFamily:
      "'Inter', 'Helvetica Neue', Arial, system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(30, 42, 34, 0.08), 0 4px 12px rgba(30, 42, 34, 0.06)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.18, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "organic", intensity: "low" },
} satisfies ThemeConfig;
