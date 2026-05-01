import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Sheet } from "./Sheet";
import "@testing-library/jest-dom";

describe("Sheet", () => {
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
    expect(container.querySelector("section")).toBeInTheDocument();
  });
  it("applies elevation and padding classes", () => {
    const { container } = render(
      <Sheet elevation="xl" padding="xl">
        High Elevation
      </Sheet>
    );
    expect(container.firstChild).toHaveClass("shadow-xl");
    expect(container.firstChild).toHaveClass("p-10");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Sheet ref={ref}>Ref Content</Sheet>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Sheet className="custom-sheet" id="sheet-id">
        Custom
      </Sheet>
    );
    expect(container.firstChild).toHaveClass("custom-sheet");
    expect(container.firstChild).toHaveAttribute("id", "sheet-id");
  });
});
