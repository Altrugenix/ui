import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Flex } from "./index";
import "@testing-library/jest-dom";

describe("Flex", () => {
  it("should render without crashing", () => {
    const { container } = render(<Flex>Test</Flex>);
    expect(container).toBeInTheDocument();
  });
  it("renders children correctly", () => {
    render(
      <Flex>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </Flex>
    );
    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
  });

  it("applies correct layout classes", () => {
    const { container } = render(
      <Flex
        direction="col"
        align="center"
        justify="between"
        wrap={true}
        gap="lg"
        inline={true}
      >
        Flex Content
      </Flex>
    );
    const el = container.firstChild;
    expect(el).toHaveClass("inline-flex");
    expect(el).toHaveClass("flex-col");
    expect(el).toHaveClass("items-center");
    expect(el).toHaveClass("justify-between");
    expect(el).toHaveClass("flex-wrap");
    expect(el).toHaveClass("gap-6");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Flex ref={ref}>Ref Content</Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Flex className="custom-flex" id="flex-id" data-testid="flex">
        Custom
      </Flex>
    );
    expect(container.firstChild).toHaveClass("custom-flex");
    expect(screen.getByTestId("flex")).toHaveAttribute("id", "flex-id");
  });
});
