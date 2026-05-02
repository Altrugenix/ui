export interface ThemeTokens {
  colors?: {
    primary?: string;
    secondary?: string;
    ring?: string;
  };
  radius?: string;
}

export type ThemeType = "default" | "crimson" | "emerald" | "violet" | "amber";

export interface ThemeConfig {
  tokens: ThemeTokens;
  title: string;
  description: string;
}
