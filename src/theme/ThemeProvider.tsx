/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeTokens {
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
  };
  radius?: string;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  tokens?: ThemeTokens;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
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
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
