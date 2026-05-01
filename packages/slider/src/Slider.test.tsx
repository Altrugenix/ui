import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Slider } from "./Slider";
import "@testing-library/jest-dom";

describe("Slider", () => {
  it("renders correctly with a label", () => {
    render(<Slider label="Volume" />);
    expect(screen.getByLabelText(/volume/i)).toBeInTheDocument();
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    render(<Slider label="Volume" onChange={handleChange} />);
    const slider = screen.getByLabelText(/volume/i);
    fireEvent.change(slider, { target: { value: "75" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((slider as HTMLInputElement).value).toBe("75");
  });

  it("disables correctly", () => {
    render(<Slider label="Volume" disabled />);
    expect(screen.getByLabelText(/volume/i)).toBeDisabled();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Slider label="Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("links label and input with a custom id", () => {
    render(<Slider label="Custom ID" id="custom-id" />);
    const slider = screen.getByRole("slider");
    const label = screen.getByText("Custom ID");
    expect(slider.id).toBe("custom-id");
    expect(label).toHaveAttribute("for", "custom-id");
  });

  it("applies min, max, and step props", () => {
    render(<Slider label="Range" min={0} max={10} step={2} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("min", "0");
    expect(slider).toHaveAttribute("max", "10");
    expect(slider).toHaveAttribute("step", "2");
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Slider
        label="Test"
        className="custom-slider"
        data-testid="slider"
        name="test-slider"
      />
    );
    const slider = screen.getByTestId("slider");
    expect(slider).toHaveClass("custom-slider");
    expect(slider).toHaveAttribute("name", "test-slider");
  });
});
