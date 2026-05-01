import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders correctly with default props", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toHaveClass("sr-only");
  });

  it("renders with a label", () => {
    render(<Spinner label="Processing" />);
    expect(screen.getByText("Processing")).toBeInTheDocument();
    // Check sr-only label too
    const srOnly = screen.getAllByText("Processing");
    expect(srOnly).toHaveLength(2); 
  });

  it("applies different size classes", () => {
    const { rerender, container } = render(<Spinner size="sm" />);
    let icon = container.querySelector("svg");
    expect(icon).toHaveClass("h-4 w-4");

    rerender(<Spinner size="xl" />);
    icon = container.querySelector("svg");
    expect(icon).toHaveClass("h-12 w-12");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Spinner className="custom-spinner" data-testid="spinner" id="spinner-id" />
    );
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toHaveClass("custom-spinner");
    expect(spinner.id).toBe("spinner-id");
  });
});
