import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders correctly with a label", () => {
    render(<Textarea label="Bio" placeholder="Tell us about yourself" />);
    expect(screen.getByLabelText(/bio/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/tell us about yourself/i)
    ).toBeInTheDocument();
  });

  it("handles value change on user input", () => {
    const handleChange = vi.fn();
    render(<Textarea label="Bio" onChange={handleChange} />);
    const textarea = screen.getByLabelText(/bio/i);
    fireEvent.change(textarea, { target: { value: "Hello world" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((textarea as HTMLTextAreaElement).value).toBe("Hello world");
  });

  it("displays error message and applies error styles", () => {
    render(<Textarea label="Bio" errorText="Field required" />);
    expect(screen.getByText(/field required/i)).toHaveClass("text-destructive");
    expect(screen.getByLabelText(/bio/i)).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("disables correctly", () => {
    render(<Textarea label="Bio" disabled />);
    expect(screen.getByLabelText(/bio/i)).toBeDisabled();
  });
});
