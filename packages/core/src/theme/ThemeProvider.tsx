/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

export interface ThemeTokens {
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    foreground?: string;
    muted?: string;
    accent?: string;
    destructive?: string;
    border?: string;
    input?: string;
    ring?: string;
    success?: string;
    warning?: string;
    info?: string;
    primaryForeground?: string;
    secondaryForeground?: string;
    accentForeground?: string;
    destructiveForeground?: string;
    popover?: string;
    popoverForeground?: string;
    card?: string;
    cardForeground?: string;
  };
  radius?: string;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  tokens?: ThemeTokens;
}

export interface ThemeProviderState {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const initialState: ThemeProviderState = {
  theme: "system",
  isDark: false,
  setTheme: () => null,
  toggleTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "Altrugenix-ui-theme",
  tokens,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Apply token overrides
    if (tokens) {
      if (tokens.colors) {
        Object.entries(tokens.colors).forEach(([key, value]) => {
          if (value) root.style.setProperty(`--${key}`, value);
        });
      }
      if (tokens.radius) {
        root.style.setProperty("--radius", tokens.radius);
      }
    }
  }, [theme, tokens]);

  const value = {
    theme,
    isDark,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    toggleTheme: () => {
      const nextTheme = isDark ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
