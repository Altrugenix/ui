import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Typography } from "./Typography";
import "@testing-library/jest-dom";

describe("Typography", () => {
  it("renders correctly with default variant", () => {
    const { container } = render(<Typography>Hello</Typography>);
    expect(container.querySelector("p")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("leading-7");
  });

  it("renders with h1 variant", () => {
    const { container } = render(<Typography variant="h1">Title</Typography>);
    expect(container.querySelector("h1")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-4xl");
  });

  it("renders with body2 and custom component", () => {
    const { container } = render(
      <Typography variant="body2" as="section">
        Content
      </Typography>
    );
    expect(container.querySelector("section")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("text-sm");
  });

  it("applies weight and alignment classes", () => {
    const { container } = render(
      <Typography weight="bold" align="center">
        Bold Center
      </Typography>
    );
    expect(container.firstChild).toHaveClass("font-bold");
    expect(container.firstChild).toHaveClass("text-center");
  });

  it("applies noWrap and gutter classes", () => {
    const { container } = render(
      <Typography noWrap gutter>
        Truncated Gutter
      </Typography>
    );
    expect(container.firstChild).toHaveClass("truncate");
    expect(container.firstChild).toHaveClass("mb-4");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Typography variant="h1" ref={ref}>Ref Title</Typography>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Typography className="custom-typo" id="typo-id">
        Custom
      </Typography>
    );
    expect(container.firstChild).toHaveClass("custom-typo");
    expect(container.firstChild).toHaveAttribute("id", "typo-id");
  });
});
