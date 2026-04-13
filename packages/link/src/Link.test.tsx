import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Link } from "./index";
import React from "react";

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
});
