import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ColorPicker, type ColorPickerProps } from "./ColorPicker";
import "@testing-library/jest-dom";

describe("ColorPicker", () => {
  let defaultProps: ColorPickerProps;

  beforeEach(() => {
    defaultProps = {
      value: "#ff0000",
      onChange: vi.fn(),
    };
  });

  it("renders with the current color value", () => {
    render(<ColorPicker {...defaultProps} />);
    const trigger = screen.getByTitle("Select color");
    expect(trigger).toHaveStyle({ backgroundColor: "#ff0000" });

    const inputs = screen.getAllByPlaceholderText("#000000");
    // One is in the main view, one is in the popover (which is not open yet, but might be rendered if Popover renders eagerly or if we are using a mock)
    // Actually, Popover usually renders children only when open.
    // Let's check how many inputs are visible initially.
    expect(inputs[0]).toHaveValue("#ff0000");
  });

  it("calls onChange when typing a valid hex code", () => {
    render(<ColorPicker {...defaultProps} />);
    const input = screen.getByDisplayValue("#ff0000");

    fireEvent.change(input, { target: { value: "#00ff00" } });
    expect(defaultProps.onChange).toHaveBeenCalledWith("#00ff00");
  });

  it("does not call onChange when typing an invalid hex code", () => {
    render(<ColorPicker {...defaultProps} />);
    const input = screen.getByDisplayValue("#ff0000");

    fireEvent.change(input, { target: { value: "invalid" } });
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it("opens popover and displays presets", () => {
    render(<ColorPicker {...defaultProps} />);
    const trigger = screen.getByTitle("Select color");
    fireEvent.click(trigger);

    expect(screen.getByText("Presets")).toBeInTheDocument();
    expect(screen.getByText("Presets")).toBeInTheDocument();

    // Preset buttons are those with a background color style
    const presetButtons = screen
      .getAllByRole("button")
      .filter((b) => b.style.backgroundColor !== "");
    expect(presetButtons.length).toBeGreaterThan(0);
  });

  it("calls onChange when a preset is clicked", () => {
    render(<ColorPicker {...defaultProps} />);
    const trigger = screen.getByTitle("Select color");
    fireEvent.click(trigger);

    // Preset buttons are those with a background color style, excluding the trigger
    const presetButtons = screen
      .getAllByRole("button")
      .filter(
        (b) =>
          b.getAttribute("style")?.includes("background-color") &&
          b.getAttribute("title") !== "Select color"
      );
    fireEvent.click(presetButtons[0]);

    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("respects the disabled prop", () => {
    render(<ColorPicker {...defaultProps} disabled />);
    const trigger = screen.getByTitle("Select color");
    const input = screen.getByDisplayValue("#ff0000");

    expect(trigger).toBeDisabled();
    expect(input).toBeDisabled();
  });

  it("renders custom presets", () => {
    const customPresets = ["#111111", "#222222"];
    render(<ColorPicker {...defaultProps} presets={customPresets} />);
    fireEvent.click(screen.getByTitle("Select color"));
    
    const buttons = screen.getAllByRole("button");
    const found1 = buttons.find(b => b.getAttribute("style")?.includes("rgb(17, 17, 17)"));
    const found2 = buttons.find(b => b.getAttribute("style")?.includes("rgb(34, 34, 34)"));
    
    expect(found1).toBeInTheDocument();
    expect(found2).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<ColorPicker {...defaultProps} className="custom-picker" />);
    expect(container.firstChild).toHaveClass("custom-picker");
  });
});
