import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./index";
import "@testing-library/jest-dom";

describe("Grid", () => {
  it("should render without crashing", () => {
    const { container } = render(<Grid>Test</Grid>);
    expect(container).toBeInTheDocument();
  });
  it("renders children correctly", () => {
    render(
      <Grid>
        <div data-testid="item-1">Item 1</div>
        <div data-testid="item-2">Item 2</div>
      </Grid>
    );
    expect(screen.getByTestId("item-1")).toBeInTheDocument();
    expect(screen.getByTestId("item-2")).toBeInTheDocument();
  });

  it("applies correct layout classes", () => {
    const { container, rerender } = render(
      <Grid cols={4} gap="xl">
        Grid Content
      </Grid>
    );
    let el = container.firstChild;
    expect(el).toHaveClass("grid");
    expect(el).toHaveClass("grid-cols-1"); // sm:grid-cols-2 lg:grid-cols-4
    expect(el).toHaveClass("gap-8");

    rerender(<Grid cols={12} gap="none" />);
    el = container.firstChild;
    expect(el).toHaveClass("grid-cols-4"); // sm:grid-cols-6 lg:grid-cols-12
    expect(el).toHaveClass("gap-0");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Grid ref={ref}>Ref Content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Grid className="custom-grid" id="grid-id">
        Custom
      </Grid>
    );
    expect(container.firstChild).toHaveClass("custom-grid");
    expect(container.firstChild).toHaveAttribute("id", "grid-id");
  });
});
