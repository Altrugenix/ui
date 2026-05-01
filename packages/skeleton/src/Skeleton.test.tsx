import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Skeleton } from "./Skeleton";

describe("Skeleton component", () => {
  it("renders correctly with default variant", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("bg-muted");
    expect(container.firstChild).toHaveClass("animate-pulse");
  });

  it("renders all variants correctly", () => {
    const { rerender, container } = render(<Skeleton variant="rectangular" />);
    expect(container.firstChild).toHaveClass("rounded-none");

    rerender(<Skeleton variant="rounded" />);
    expect(container.firstChild).toHaveClass("rounded-lg");

    rerender(<Skeleton variant="text" />);
    expect(container.firstChild).toHaveClass("h-3 w-full");
  });

  it("renders all animation types", () => {
    const { rerender, container } = render(<Skeleton animation="wave" />);
    expect(container.firstChild).toHaveClass("after:animate-shimmer");

    rerender(<Skeleton animation="none" />);
    expect(container.firstChild).not.toHaveClass("animate-pulse");
    expect(container.firstChild).not.toHaveClass("after:animate-shimmer");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Skeleton
        className="custom-skeleton"
        data-testid="skeleton"
        id="skeleton-id"
      />
    );
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("custom-skeleton");
    expect(skeleton.id).toBe("skeleton-id");
  });
});
