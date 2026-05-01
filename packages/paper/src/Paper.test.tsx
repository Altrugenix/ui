import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Paper } from "./index";
import "@testing-library/jest-dom";

describe("Paper", () => {
  it("should render correctly with default props", () => {
    render(<Paper>Test Content</Paper>);
    const element = screen.getByText("Test Content");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass("shadow-sm"); // default elevation 1
    expect(element).toHaveClass("rounded-xl"); // default square false
  });

  it("should apply elevation classes correctly", () => {
    const { rerender } = render(<Paper elevation={0}>Test</Paper>);
    expect(screen.getByText("Test")).toHaveClass("shadow-none");

    rerender(<Paper elevation={3}>Test</Paper>);
    expect(screen.getByText("Test")).toHaveClass("shadow-md");

    rerender(<Paper elevation={6}>Test</Paper>);
    expect(screen.getByText("Test")).toHaveClass("shadow-2xl");
  });

  it("should apply variant classes correctly", () => {
    render(<Paper variant="outlined">Test</Paper>);
    const element = screen.getByText("Test");
    expect(element).toHaveClass("border-border");
    expect(element).toHaveClass("shadow-none");
  });

  it("should apply square class when square prop is true", () => {
    render(<Paper square>Test</Paper>);
    expect(screen.getByText("Test")).toHaveClass("rounded-none");
  });

  it("should render as a different element when 'as' prop is provided", () => {
    render(<Paper as="section">Test</Paper>);
    expect(screen.getByText("Test").tagName).toBe("SECTION");
  });

  it("should apply custom className", () => {
    render(<Paper className="custom-class">Test</Paper>);
    expect(screen.getByText("Test")).toHaveClass("custom-class");
  });

  it("should forward ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Paper ref={ref}>Test</Paper>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("should pass through additional HTML attributes", () => {
    render(
      <Paper data-testid="paper-element" id="test-id">
        Test
      </Paper>
    );
    const element = screen.getByTestId("paper-element");
    expect(element.id).toBe("test-id");
  });
});
