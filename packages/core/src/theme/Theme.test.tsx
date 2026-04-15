import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";

const ThemeConsumer = () => {
  const { theme } = useTheme();
  return <div data-testid="theme-value">{theme}</div>;
};

describe("ThemeProvider", () => {
  it("provides default theme", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
  });
});
