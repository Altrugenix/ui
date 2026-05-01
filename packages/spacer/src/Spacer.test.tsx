import * as React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spacer } from "./Spacer";
import "@testing-library/jest-dom";

describe("Spacer", () => {
  it("renders vertical spacer by default", () => {
    const { container } = render(<Spacer />);
    expect(container.firstChild).toHaveClass("h-4");
  });

  it("applies correct size and axis classes", () => {
    const { rerender, container } = render(<Spacer size="xl" axis="horizontal" />);
    expect(container.firstChild).toHaveClass("w-12");

    rerender(<Spacer size="sm" axis="vertical" />);
    expect(container.firstChild).toHaveClass("h-2");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Spacer ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Spacer className="custom-spacer" data-testid="spacer" id="spacer-id" />
    );
    expect(container.firstChild).toHaveClass("custom-spacer");
    expect(container.firstChild).toHaveAttribute("id", "spacer-id");
  });
});
