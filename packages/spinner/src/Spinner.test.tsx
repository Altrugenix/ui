import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";
import "@testing-library/jest-dom";

describe("Spinner", () => {
  it("renders correctly with default props", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toHaveClass("sr-only");
  });

  it("renders with a label", () => {
    render(<Spinner label="Processing" />);
    const labels = screen.getAllByText("Processing");
    expect(labels).toHaveLength(2);
    expect(labels[0]).not.toHaveClass("sr-only");
    expect(labels[1]).toHaveClass("sr-only");
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
      <Spinner
        className="custom-spinner"
        data-testid="spinner"
        id="spinner-id"
      />
    );
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toHaveClass("custom-spinner");
    expect(spinner.id).toBe("spinner-id");
  });
});
