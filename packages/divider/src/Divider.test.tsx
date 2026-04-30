import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Divider } from "./Divider";

describe("Divider component", () => {
  it("renders correctly", () => {
    const { container } = render(<Divider>Test</Divider>);
    expect(container.firstChild).toHaveAttribute("role", "separator");
  });

  it("renders with label correctly", () => {
    const { getByText } = render(<Divider label="OR" />);
    expect(getByText("OR")).toBeTruthy();
  });

  it("renders vertical orientation", () => {
    const { container } = render(<Divider orientation="vertical" />);
    expect(container.firstChild).toHaveClass("h-full");
  });
});
