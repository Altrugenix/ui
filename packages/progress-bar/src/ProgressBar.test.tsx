import { render } from "@testing-library/react";
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

  it("renders correct width based on value", () => {
    const { getByRole } = render(<ProgressBar value={50} />);
    const bar = getByRole("progressbar");
    const indicator = bar.firstChild as HTMLElement;
    expect(indicator.style.width).toBe("50%");
  });

  it("renders labels correctly", () => {
    const { getByText } = render(
      <ProgressBar value={25} label="Loading" showValue />
    );
    expect(getByText("Loading")).toBeTruthy();
    expect(getByText("25%")).toBeTruthy();
  });
});
