import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Skeleton } from "./Skeleton";

describe("Skeleton component", () => {
  it("renders correctly with default variant", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("bg-muted");
    expect(container.firstChild).toHaveClass("animate-pulse");
  });

  it("renders circular variant", () => {
    const { container } = render(<Skeleton variant="circular" />);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("renders with custom dimensions", () => {
    const { container } = render(<Skeleton width={100} height={50} />);
    expect(container.firstChild).toHaveStyle({
      width: "100px",
      height: "50px",
    });
  });
});
