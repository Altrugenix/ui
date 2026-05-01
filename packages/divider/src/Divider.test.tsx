import React from "react";
import { render, screen } from "@testing-library/react";
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

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Divider className="custom-divider" data-testid="divider" id="divider-id" />
    );
    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("custom-divider");
    expect(divider.id).toBe("divider-id");
  });
});
