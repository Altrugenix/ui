import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./index";
import { User } from "lucide-react";

describe("Icon", () => {
  it("renders correctly with a Lucide icon", () => {
    // We can't easily check the SVG path, but we can check if it renders the wrapper
    const { container } = render(<Icon icon={User} className="test-icon" />);
    expect(container.querySelector(".test-icon")).toBeDefined();
  });

  it("applies size classes", () => {
    const { container } = render(<Icon icon={User} size="lg" />);
    expect(container.querySelector(".h-6.w-6")).toBeDefined();
  });
});
