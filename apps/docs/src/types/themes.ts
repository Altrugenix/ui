export interface ThemeTokens {
  colors?: {
    primary?: string;
    secondary?: string;
    ring?: string;
  };
  radius?: string;
}

export type ThemeType =
  | "default"
  | "crimson"
  | "emerald"
  | "violet"
  | "amber"
  | "slate"
  | "rose"
  | "orange"
  | "sky"
  | "indigo"
  | "teal"
  | "lime"
  | "fuchsia"
  | "cyan"
  | "yellow";

export interface ThemeConfig {
  tokens: ThemeTokens;
  title: string;
  description: string;
}
