import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stepper } from "./Stepper";

describe("Stepper", () => {
  const mockSteps = [
    { label: "Step 1", description: "First step" },
    { label: "Step 2", description: "Second step" },
    { label: "Step 3", description: "Third step" },
  ];

  it("renders all steps", () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByText("Step 1")).toBeTruthy();
    expect(screen.getByText("Step 2")).toBeTruthy();
    expect(screen.getByText("Step 3")).toBeTruthy();
  });

  it("renders descriptions correctly", () => {
    render(<Stepper steps={mockSteps} activeStep={0} />);
    expect(screen.getByText("First step")).toBeTruthy();
  });

  it("indicates active step correctly", () => {
    render(<Stepper steps={mockSteps} activeStep={1} />);
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

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Stepper steps={mockSteps} activeStep={0} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Stepper
        steps={mockSteps}
        activeStep={0}
        className="custom-stepper"
        data-testid="stepper"
        id="stepper-id"
      />
    );
    const stepper = screen.getByTestId("stepper");
    expect(stepper).toHaveClass("custom-stepper");
    expect(stepper.id).toBe("stepper-id");
  });

  it("has correct ARIA roles and labels", () => {
    render(<Stepper steps={mockSteps} activeStep={0} aria-label="Progress Bar" />);
    expect(screen.getByRole("list")).toHaveAttribute("aria-label", "Progress Bar");
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
