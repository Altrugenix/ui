import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./index";
import "@testing-library/jest-dom";

describe("Icon", () => {
  it("renders correctly with a Lucide icon", () => {
    const { container } = render(<Icon name="User" className="test-icon" />);
    expect(container.querySelector(".test-icon")).toBeInTheDocument();
  });

  it("passes size prop to the icon", () => {
    const { container } = render(
      <Icon name="User" size={32} className="test-size" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("32");
  });
  it("returns null for invalid icon name", () => {
    // @ts-expect-error - testing invalid name
    const { container } = render(<Icon name="InvalidName" />);
    expect(container.firstChild).toBeNull();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<Icon name="User" ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Icon
        name="User"
        className="custom-icon"
        id="icon-id"
        data-testid="icon"
      />
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("custom-icon");
    expect(icon).toHaveAttribute("id", "icon-id");
  });
});
