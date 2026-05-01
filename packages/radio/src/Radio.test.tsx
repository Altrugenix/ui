import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders correctly with a label", () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByLabelText(/option 1/i)).toBeInTheDocument();
  });

  it("handles selection", () => {
    const handleChange = vi.fn();
    render(<Radio label="Option 1" onChange={handleChange} />);
    const radio = screen.getByLabelText(/option 1/i);
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((radio as HTMLInputElement).checked).toBe(true);
  });

  it("disables correctly", () => {
    render(<Radio label="Option 1" disabled />);
    expect(screen.getByLabelText(/option 1/i)).toBeDisabled();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Radio label="Option 1" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("links label and input with a custom id", () => {
    render(<Radio label="Custom ID" id="custom-id" />);
    const radio = screen.getByRole("radio");
    const label = screen.getByText("Custom ID");
    expect(radio.id).toBe("custom-id");
    expect(label).toHaveAttribute("for", "custom-id");
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Radio
        label="Test"
        className="custom-radio"
        data-testid="radio-input"
        name="test-group"
      />
    );
    const radio = screen.getByTestId("radio-input");
    expect(radio).toHaveClass("custom-radio");
    expect(radio).toHaveAttribute("name", "test-group");
  });
});
