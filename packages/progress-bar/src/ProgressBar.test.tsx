import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar component", () => {
  it("renders correctly with default value", () => {
    const { getByRole } = render(<ProgressBar>Test</ProgressBar>);
    const bar = getByRole("progressbar");
    expect(bar).toBeTruthy();
    expect(bar).toHaveAttribute("aria-valuenow", "0");
  });

  it("clamps values between 0 and 100", () => {
    const { rerender, getByRole } = render(<ProgressBar value={150} />);
    let indicator = getByRole("progressbar").firstChild as HTMLElement;
    expect(indicator.style.width).toBe("100%");

    rerender(<ProgressBar value={-50} />);
    indicator = getByRole("progressbar").firstChild as HTMLElement;
    expect(indicator.style.width).toBe("0%");
  });

  it("handles custom max values", () => {
    render(<ProgressBar value={50} max={200} />);
    const indicator = screen.getByRole("progressbar").firstChild as HTMLElement;
    expect(indicator.style.width).toBe("25%");
  });

  it("applies variant classes correctly", () => {
    const { rerender, getByRole } = render(<ProgressBar variant="success" />);
    let indicator = getByRole("progressbar").firstChild as HTMLElement;
    expect(indicator).toHaveClass("bg-success");

    rerender(<ProgressBar variant="destructive" />);
    indicator = getByRole("progressbar").firstChild as HTMLElement;
    expect(indicator).toHaveClass("bg-destructive");
  });

  it("applies size classes correctly", () => {
    const { rerender, getByRole } = render(<ProgressBar size="sm" />);
    expect(getByRole("progressbar")).toHaveClass("h-1.5");

    rerender(<ProgressBar size="lg" />);
    expect(getByRole("progressbar")).toHaveClass("h-4");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ProgressBar ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <ProgressBar
        className="custom-progress"
        data-testid="progress"
        id="progress-id"
      />
    );
    const progress = screen.getByTestId("progress");
    expect(progress).toHaveClass("custom-progress");
    expect(progress.id).toBe("progress-id");
  });
});
