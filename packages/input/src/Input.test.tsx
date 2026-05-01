import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("renders correctly with a label", () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
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
    expect(screen.getByText(/must be 8 characters long/i)).toBeInTheDocument();
  });

  it("renders with addons", () => {
    render(
      <Input
        label="Price"
        leftAddon={<span data-testid="left">$</span>}
        rightAddon={<span data-testid="right">USD</span>}
      />
    );
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("links to error text with aria-describedby", () => {
    render(<Input label="Email" errorText="Error!" id="email-input" />);
    const input = screen.getByLabelText(/email/i);
    const errorText = screen.getByText("Error!");
    expect(input).toHaveAttribute("aria-describedby", errorText.id);
    expect(errorText.id).toBe("email-input-error");
  });

  it("links to helper text with aria-describedby when no error", () => {
    render(<Input label="Email" helperText="Help" id="email-input" />);
    const input = screen.getByLabelText(/email/i);
    const helperText = screen.getByText("Help");
    expect(input).toHaveAttribute("aria-describedby", helperText.id);
    expect(helperText.id).toBe("email-input-helper");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input label="Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Input
        label="Test"
        className="custom-input"
        data-testid="input"
        name="test-input"
        type="password"
      />
    );
    const input = screen.getByTestId("input");
    expect(input).toHaveClass("custom-input");
    expect(input).toHaveAttribute("name", "test-input");
    expect(input).toHaveAttribute("type", "password");
  });
});
