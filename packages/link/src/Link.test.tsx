import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Link } from "./index";
import "@testing-library/jest-dom";

describe("Link", () => {
  it("renders correctly with children", () => {
    render(<Link href="https://example.com">Visit site</Link>);
    const link = screen.getByRole("link", { name: /visit site/i });
    expect(link).toBeDefined();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("applies target blank correctly", () => {
    render(
      <Link href="https://example.com" target="_blank">
        External
      </Link>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(<Link href="#" ref={ref}>Link</Link>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Link href="#" className="custom-link" data-testid="link" title="Click me">
        Link
      </Link>
    );
    const link = screen.getByTestId("link");
    expect(link).toHaveClass("custom-link");
    expect(link).toHaveAttribute("title", "Click me");
  });
});
