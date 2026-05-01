import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Box } from "./index";

describe("Box", () => {
  it("renders children correctly", () => {
    render(<Box>Test Content</Box>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders as a different element when 'as' prop is provided", () => {
    render(<Box as="section">Test Content</Box>);
    const element = screen.getByText("Test Content");
    expect(element.tagName).toBe("SECTION");
  });

  it("applies padding classes correctly", () => {
    const { rerender } = render(<Box padding="sm">Test</Box>);
    expect(screen.getByText("Test")).toHaveClass("p-2");

    rerender(<Box padding="xl">Test</Box>);
    expect(screen.getByText("Test")).toHaveClass("p-8");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Box ref={ref}>Test</Box>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Box className="custom-box" data-testid="box" id="box-id">
        Test
      </Box>
    );
    const box = screen.getByTestId("box");
    expect(box).toHaveClass("custom-box");
    expect(box.id).toBe("box-id");
  });
});
