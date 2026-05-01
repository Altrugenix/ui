import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Reveal } from "./Reveal";
import "@testing-library/jest-dom";

// Mock framer-motion's useInView to always return true for tests
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    useInView: () => true,
  };
});

describe("Reveal", () => {
  it("renders children correctly", () => {
    render(
      <Reveal>
        <div data-testid="child">Test Content</div>
      </Reveal>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Reveal className="custom-reveal">
        <div>Content</div>
      </Reveal>
    );
    expect(container.firstChild).toHaveClass("custom-reveal");
  });

  it("applies custom width", () => {
    const { container } = render(
      <Reveal width="100%">
        <div>Content</div>
      </Reveal>
    );
    expect(container.firstChild).toHaveStyle({ width: "100%" });
  });

  it("renders with default fit-content width", () => {
    const { container } = render(
      <Reveal>
        <div>Content</div>
      </Reveal>
    );
    expect(container.firstChild).toHaveStyle({ width: "fit-content" });
  });

  it("renders with direction 'none'", () => {
    const { container } = render(
      <Reveal direction="none">
        <div>Content</div>
      </Reveal>
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
