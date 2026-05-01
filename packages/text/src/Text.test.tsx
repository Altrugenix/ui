import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Text } from "./Text";
import "@testing-library/jest-dom";

describe("Text", () => {
  it("renders correctly", () => {
    render(<Text>Hello Text</Text>);
    expect(screen.getByText("Hello Text")).toBeInTheDocument();
  });
  it("renders as different elements", () => {
    const { container: pContainer } = render(<Text>Paragraph</Text>);
    expect(pContainer.querySelector("p")).toBeInTheDocument();

    const { container: spanContainer } = render(<Text as="span">Span</Text>);
    expect(spanContainer.querySelector("span")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Text ref={ref}>Ref Content</Text>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Text className="custom-text" id="text-id">
        Custom
      </Text>
    );
    const text = screen.getByText("Custom");
    expect(text).toHaveClass("custom-text");
    expect(text).toHaveAttribute("id", "text-id");
  });
});
