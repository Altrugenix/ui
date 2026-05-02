import type { ThemeType, ThemeConfig } from "@/types/themes";

export const THEMES: Record<ThemeType, ThemeConfig> = {
  default: {
    tokens: {
      colors: {
        primary: "199 89% 48%",
        ring: "222.2 84% 4.9%",
      },
      radius: "0.5rem",
    },
    title: "Theme Restored",
    description: "Default Altrugenix Blue restored.",
  },
  crimson: {
    tokens: {
      colors: { primary: "0 72% 51%", ring: "0 72% 51%" },
      radius: "0rem",
    },
    title: "Theme Updated",
    description: "Enterprise Crimson mode activated.",
  },
  emerald: {
    tokens: {
      colors: { primary: "142 71% 45%", ring: "142 71% 45%" },
      radius: "0.75rem",
    },
    title: "Theme Updated",
    description: "Emerald Forest mode activated.",
  },
  violet: {
    tokens: {
      colors: { primary: "262 83% 58%", ring: "262 83% 58%" },
      radius: "1rem",
    },
    title: "Theme Updated",
    description: "Royal Violet mode activated.",
  },
  amber: {
    tokens: {
      colors: { primary: "38 92% 50%", ring: "38 92% 50%" },
      radius: "0.25rem",
    },
    title: "Theme Updated",
    description: "Amber Glow mode activated.",
  },
  slate: {
    tokens: {
      colors: { primary: "215 20.2% 65.1%", ring: "215 20.2% 65.1%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Slate Modern mode activated.",
  },
  rose: {
    tokens: {
      colors: { primary: "346 84% 61%", ring: "346 84% 61%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Rose Petal mode activated.",
  },
  orange: {
    tokens: {
      colors: { primary: "24 95% 53%", ring: "24 95% 53%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Orange Sunset mode activated.",
  },
  sky: {
    tokens: {
      colors: { primary: "199 89% 48%", ring: "199 89% 48%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Clear Sky mode activated.",
  },
  indigo: {
    tokens: {
      colors: { primary: "239 84% 67%", ring: "239 84% 67%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Indigo Night mode activated.",
  },
  teal: {
    tokens: {
      colors: { primary: "173 58% 39%", ring: "173 58% 39%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Teal Ocean mode activated.",
  },
  lime: {
    tokens: {
      colors: { primary: "84 81% 44%", ring: "84 81% 44%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Lime Fresh mode activated.",
  },
  fuchsia: {
    tokens: {
      colors: { primary: "292 91% 65%", ring: "292 91% 65%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Fuchsia Neon mode activated.",
  },
  cyan: {
    tokens: {
      colors: { primary: "188 86% 53%", ring: "188 86% 53%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Cyan Electric mode activated.",
  },
  yellow: {
    tokens: {
      colors: { primary: "47 95% 50%", ring: "47 95% 50%" },
      radius: "0.5rem",
    },
    title: "Theme Updated",
    description: "Yellow Sunshine mode activated.",
  },
};
