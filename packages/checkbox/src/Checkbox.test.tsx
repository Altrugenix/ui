import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";

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
});
