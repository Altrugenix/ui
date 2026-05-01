import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";
import "@testing-library/jest-dom";

describe("Checkbox", () => {
  it("renders correctly with a label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
  });

  it("handles check/uncheck", () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Accept terms" onChange={handleChange} />);
    const checkbox = screen.getByLabelText(/accept terms/i);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });

  it("renders with description", () => {
    render(
      <Checkbox label="Accept terms" description="You agree to our terms." />
    );
    expect(screen.getByText(/you agree to our terms/i)).toBeInTheDocument();
  });

  it("disables correctly", () => {
    render(<Checkbox label="Accept terms" disabled />);
    expect(screen.getByLabelText(/accept terms/i)).toBeDisabled();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox label="Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("links label and input with a custom id", () => {
    render(<Checkbox label="Custom ID" id="custom-id" />);
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Custom ID");
    expect(checkbox.id).toBe("custom-id");
    expect(label).toHaveAttribute("for", "custom-id");
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Checkbox
        label="Test"
        className="custom-checkbox"
        data-testid="checkbox"
        name="test-checkbox"
      />
    );
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toHaveClass("custom-checkbox");
    expect(checkbox).toHaveAttribute("name", "test-checkbox");
  });
});
