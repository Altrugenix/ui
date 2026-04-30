import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Typography } from "./Typography";

describe("Typography component", () => {
  it("renders correctly with default variant", () => {
    const { container } = render(<Typography>Hello</Typography>);
    expect(container.querySelector("p")).toBeTruthy();
    expect(container.firstChild).toHaveClass("leading-7");
  });

  it("renders with h1 variant", () => {
    const { container } = render(<Typography variant="h1">Title</Typography>);
    expect(container.querySelector("h1")).toBeTruthy();
    expect(container.firstChild).toHaveClass("text-4xl");
  });

  it("renders with body2 and custom component", () => {
    const { container } = render(
      <Typography variant="body2" as="section">
        Content
      </Typography>
    );
    expect(container.querySelector("section")).toBeTruthy();
    expect(container.firstChild).toHaveClass("text-sm");
  });
});
