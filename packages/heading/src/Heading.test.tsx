import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Heading } from "./Heading";

describe("Heading component", () => {
  it("renders correctly with level 1 by default", () => {
    render(<Heading>Level 1</Heading>);
    const heading = screen.getByText("Level 1");
    expect(heading.tagName).toBe("H1");
    expect(heading).toHaveClass("text-4xl");
  });

  it("renders correct tag and styles for each level", () => {
    const { rerender } = render(<Heading level={2}>Level 2</Heading>);
    expect(screen.getByText("Level 2").tagName).toBe("H2");
    expect(screen.getByText("Level 2")).toHaveClass("text-3xl");

    rerender(<Heading level={3}>Level 3</Heading>);
    expect(screen.getByText("Level 3").tagName).toBe("H3");
    expect(screen.getByText("Level 3")).toHaveClass("text-2xl");

    rerender(<Heading level={6}>Level 6</Heading>);
    expect(screen.getByText("Level 6").tagName).toBe("H6");
    expect(screen.getByText("Level 6")).toHaveClass("text-base");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Heading level={1} ref={ref}>Test</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Heading className="custom-heading" data-testid="heading" id="heading-id">
        Test
      </Heading>
    );
    const heading = screen.getByTestId("heading");
    expect(heading).toHaveClass("custom-heading");
    expect(heading.id).toBe("heading-id");
  });
});
