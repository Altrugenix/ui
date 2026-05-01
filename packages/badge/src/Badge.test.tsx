import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge, AdvancedBadge } from "./index";
import "@testing-library/jest-dom";

describe("Badge", () => {
  it("renders correctly with content", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    const { container } = render(<Badge variant="destructive">Alert</Badge>);
    expect(container.firstChild).toHaveClass("bg-destructive");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Badge ref={ref}>Ref Content</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and extra props", () => {
    const { container } = render(
      <Badge className="custom-badge" id="badge-id" />
    );
    expect(container.firstChild).toHaveClass("custom-badge");
    expect(container.firstChild).toHaveAttribute("id", "badge-id");
  });
});

describe("AdvancedBadge", () => {
  it("renders overflow count correctly", () => {
    render(<AdvancedBadge content={150} max={99} />);
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("wraps children correctly", () => {
    render(
      <AdvancedBadge content={5}>
        <button>Cart</button>
      </AdvancedBadge>
    );
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("handles showZero prop", () => {
    const { rerender } = render(<AdvancedBadge content={0} showZero={false} />);
    expect(screen.queryByText("0")).not.toBeInTheDocument();

    rerender(<AdvancedBadge content={0} showZero={true} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("applies placement classes correctly", () => {
    const { container } = render(
      <AdvancedBadge content={5} placement="bottom-left">
        <span>Child</span>
      </AdvancedBadge>
    );
    const badge = container.querySelector(".absolute");
    expect(badge).toHaveClass("-bottom-2");
    expect(badge).toHaveClass("-left-2");
  });

  it("forwards ref to the badge element", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AdvancedBadge ref={ref} content={5} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
