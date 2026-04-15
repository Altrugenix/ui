import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./index";

describe("Icon", () => {
  it("renders correctly with a Lucide icon", () => {
    // Current implementation uses 'name' as a string key
    const { container } = render(<Icon name="User" className="test-icon" />);
    expect(container.querySelector(".test-icon")).toBeDefined();
  });

  it("passes size prop to the icon", () => {
    // Lucide components take size as a number
    const { container } = render(
      <Icon name="User" size={32} className="test-size" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("32");
  });
});
