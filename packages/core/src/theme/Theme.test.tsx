import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";

const ThemeConsumer = () => {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();
  return (
    <div>
      <div data-testid="theme-value">{theme}</div>
      <div data-testid="is-dark">{isDark.toString()}</div>
      <button onClick={() => setTheme("light")} data-testid="set-light">
        Light
      </button>
      <button onClick={() => setTheme("dark")} data-testid="set-dark">
        Dark
      </button>
      <button onClick={toggleTheme} data-testid="toggle-theme">
        Toggle
      </button>
    </div>
  );
};

describe("ThemeProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    // Mock matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
    // Clear root classes
    document.documentElement.classList.remove("light", "dark");
  });

  it("provides default theme", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
    expect(document.documentElement).toHaveClass("dark");
  });

  it("updates theme and persists to localStorage", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId("set-dark"));

    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("Altrugenix-ui-theme")).toBe("dark");
  });

  it("toggles theme correctly", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId("toggle-theme"));
    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
    expect(document.documentElement).toHaveClass("dark");

    fireEvent.click(screen.getByTestId("toggle-theme"));
    expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
    expect(document.documentElement).toHaveClass("light");
  });

  it("handles system theme correctly", () => {
    // Mock system preference as dark
    (
      window.matchMedia as unknown as {
        mockImplementation: (fn: (query: string) => unknown) => void;
      }
    ).mockImplementation((query: string) => ({
      matches: query === "(prefers-color-scheme: dark)",
      media: query,
    }));

    render(
      <ThemeProvider defaultTheme="system">
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-value")).toHaveTextContent("system");
    expect(screen.getByTestId("is-dark")).toHaveTextContent("true");
    expect(document.documentElement).toHaveClass("dark");
  });

  it("applies token overrides to root element", () => {
    const tokens = {
      colors: {
        primary: "#ff0000",
        background: "#000000",
      },
      radius: "10px",
    };

    render(
      <ThemeProvider tokens={tokens}>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const style = document.documentElement.style;
    expect(style.getPropertyValue("--primary")).toBe("#ff0000");
    expect(style.getPropertyValue("--background")).toBe("#000000");
    expect(style.getPropertyValue("--radius")).toBe("10px");
  });
});
