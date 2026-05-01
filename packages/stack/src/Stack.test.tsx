import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stack } from "./index";
import "@testing-library/jest-dom";

describe("Stack", () => {
  it("should render without crashing", () => {
    const { container } = render(<Stack>Test</Stack>);
    expect(container).toBeInTheDocument();
  });
  it("renders children correctly", () => {
    render(
      <Stack>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </Stack>
    );
    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
  });

  it("applies correct direction and spacing classes", () => {
    const { container: verticalContainer } = render(
      <Stack direction="vertical" spacing="lg">Vertical</Stack>
    );
    expect(verticalContainer.firstChild).toHaveClass("flex-col");
    expect(verticalContainer.firstChild).toHaveClass("space-y-6");

    const { container: horizontalContainer } = render(
      <Stack direction="horizontal" spacing="sm">Horizontal</Stack>
    );
    expect(horizontalContainer.firstChild).toHaveClass("flex-row");
    expect(horizontalContainer.firstChild).toHaveClass("space-x-2");
  });

  it("applies alignment classes", () => {
    const { container } = render(<Stack align="center">Aligned</Stack>);
    expect(container.firstChild).toHaveClass("items-center");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Stack ref={ref}>Ref Content</Stack>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Stack className="custom-stack" id="stack-id" data-testid="stack">
        Custom
      </Stack>
    );
    expect(container.firstChild).toHaveClass("custom-stack");
    expect(screen.getByTestId("stack")).toHaveAttribute("id", "stack-id");
  });
});
