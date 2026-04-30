import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Sheet } from "./Sheet";

describe("Sheet component", () => {
  it("renders correctly", () => {
    const { container } = render(<Sheet>Content</Sheet>);
    expect(container.firstChild).toHaveClass("bg-background");
  });

  it("renders with specific variant", () => {
    const { container } = render(<Sheet variant="soft">Content</Sheet>);
    expect(container.firstChild).toHaveClass("bg-muted/50");
  });

  it("renders as a different component", () => {
    const { container } = render(<Sheet as="section">Content</Sheet>);
    expect(container.querySelector("section")).toBeTruthy();
  });
});
