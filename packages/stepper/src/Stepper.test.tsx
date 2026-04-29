import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stepper } from "./Stepper";
import React from "react";

describe("Stepper", () => {
  const mockSteps = [
    { label: "Step 1", description: "First step" },
    { label: "Step 2", description: "Second step" },
    { label: "Step 3", description: "Third step" },
  ];

  it("renders all steps", () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 3")).toBeInTheDocument();
  });

  it("renders descriptions correctly", () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByText("First step")).toBeInTheDocument();
  });

  it("indicates active step correctly", () => {
    const { container } = render(<Stepper steps={mockSteps} activeStep={1} />);
    // Active step should have number '2' and specific border class
    expect(screen.getByText("2")).toHaveClass("border-primary");
    expect(screen.getByText("2")).toHaveClass("bg-background");
  });

  it("indicates completed steps correctly", () => {
    const { container } = render(<Stepper steps={mockSteps} activeStep={2} />);
    // Steps 0 and 1 should be completed (show Check icon)
    // We can check for the presence of the check icon or the background class
    const indicators = container.querySelectorAll(".bg-primary");
    // Steps 0 and 1 are completed -> 2 indicators + 2 connectors = 4
    expect(indicators).toHaveLength(4);
  });

  it("applies horizontal orientation by default", () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByRole("list")).toHaveClass("items-start");
    expect(screen.getByRole("list")).not.toHaveClass("flex-col");
  });

  it("applies vertical orientation correctly", () => {
    render(<Stepper steps={mockSteps} activeStep={0} orientation="vertical" />);
    expect(screen.getByRole("list")).toHaveClass("flex-col");
  });
});
