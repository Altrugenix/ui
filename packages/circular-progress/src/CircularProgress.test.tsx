import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CircularProgress } from "./CircularProgress";

describe("CircularProgress", () => {
  it("renders correctly with default props", () => {
    const { container } = render(<CircularProgress>Test</CircularProgress>);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg).toHaveAttribute("width", "40"); // default 'md' size
    expect(svg).toHaveAttribute("height", "40");
  });

  it("renders with different sizes", () => {
    const { rerender, container } = render(<CircularProgress size="sm" />);
    let svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");

    rerender(<CircularProgress size="lg" />);
    svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "64");
    expect(svg).toHaveAttribute("height", "64");
  });

  it("renders with indeterminate state", () => {
    const { container } = render(<CircularProgress indeterminate />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("animate-spin");

    const progressCircle = container.querySelectorAll("circle")[1];
    expect(progressCircle).toHaveClass("animate-progress-circular");
  });

  it("calculates stroke-dashoffset correctly based on value", () => {
    const { rerender, container } = render(<CircularProgress value={50} />);
    const progressCircle = container.querySelectorAll("circle")[1];

    // const radius = 20;
    // const circumference = 2 * Math.PI * radius;
    // const expectedOffset = circumference - (50 / 100) * circumference;

    // We can't easily check the exact calculated value because of floating point,
    // but we can check if it exists and is roughly correct if needed.
    // However, let's just check that it changes when value changes.
    const initialOffset = parseFloat(
      progressCircle.getAttribute("stroke-dashoffset") || "0"
    );

    rerender(<CircularProgress value={75} />);
    const updatedOffset = parseFloat(
      progressCircle.getAttribute("stroke-dashoffset") || "0"
    );

    expect(updatedOffset).toBeLessThan(initialOffset);
  });

  it("applies custom className", () => {
    const { container } = render(<CircularProgress className="custom-class" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("custom-class");
  });

  it("passes extra props to svg element", () => {
    const { container } = render(
      <CircularProgress data-testid="progress" aria-label="loading" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("data-testid", "progress");
    expect(svg).toHaveAttribute("aria-label", "loading");
  });

  it("applies thickness correctly", () => {
    const { container } = render(<CircularProgress thickness={10} />);
    const circles = container.querySelectorAll("circle");
    expect(circles[0]).toHaveAttribute("stroke-width", "10");
    expect(circles[1]).toHaveAttribute("stroke-width", "10");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<CircularProgress ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it("has correct dashoffset at 0% value", () => {
    const { container } = render(<CircularProgress value={0} />);
    const progressCircle = container.querySelectorAll("circle")[1];
    const circumference = 2 * Math.PI * 20;
    const offset = parseFloat(progressCircle.getAttribute("stroke-dashoffset") || "0");
    expect(offset).toBeCloseTo(circumference, 1);
  });

  it("has 0 dashoffset at 100% value", () => {
    const { container } = render(<CircularProgress value={100} />);
    const progressCircle = container.querySelectorAll("circle")[1];
    const offset = parseFloat(progressCircle.getAttribute("stroke-dashoffset") || "0");
    expect(offset).toBe(0);
  });
});
