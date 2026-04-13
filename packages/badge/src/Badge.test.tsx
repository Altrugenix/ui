import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge, AdvancedBadge } from "./index";
import React from "react";

describe("Badge", () => {
  it("renders correctly with content", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeDefined();
  });

  it("applies variant classes", () => {
    const { container } = render(<Badge variant="destructive">Alert</Badge>);
    expect(container.firstChild).toHaveClass("bg-destructive");
  });
});

describe("AdvancedBadge", () => {
  it("renders overflow count correctly", () => {
    render(<AdvancedBadge content={150} max={99} />);
    expect(screen.getByText("99+")).toBeDefined();
  });

  it("wraps children correctly", () => {
    render(
      <AdvancedBadge content={5}>
        <button>Cart</button>
      </AdvancedBadge>
    );
    expect(screen.getByText("Cart")).toBeDefined();
    expect(screen.getByText("5")).toBeDefined();
  });
});
