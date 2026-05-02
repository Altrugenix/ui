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
};
