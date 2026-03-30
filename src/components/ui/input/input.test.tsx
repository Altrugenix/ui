import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";
import React from "react";

describe("Input", () => {
  it("renders correctly with a label", () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/enter email/i)).toBeDefined();
  });

  it("handles value change on user input", () => {
    const handleChange = vi.fn();
    render(<Input label="Email" onChange={handleChange} />);
    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((input as HTMLInputElement).value).toBe("test@example.com");
  });

  it("displays error message and applies error styles", () => {
    render(<Input label="Email" errorText="Invalid email" />);
    expect(screen.getByText(/invalid email/i)).toHaveClass("text-destructive");
    expect(screen.getByLabelText(/email/i)).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("disables correctly", () => {
    render(<Input label="Email" disabled />);
    expect(screen.getByLabelText(/email/i)).toBeDisabled();
  });

  it("renders with helper text", () => {
    render(<Input label="Password" helperText="Must be 8 characters long" />);
    expect(screen.getByText(/must be 8 characters long/i)).toBeDefined();
  });
});
