import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Textarea } from "./Textarea";
import "@testing-library/jest-dom";

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

  it("renders helper text and links via aria-describedby", () => {
    render(<Textarea label="Bio" helperText="Max 200 characters" />);
    const helper = screen.getByText("Max 200 characters");
    const textarea = screen.getByLabelText(/bio/i);
    expect(textarea).toHaveAttribute("aria-describedby", helper.id);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("uses custom id if provided", () => {
    render(<Textarea label="Bio" id="custom-textarea" />);
    expect(screen.getByLabelText(/bio/i)).toHaveAttribute("id", "custom-textarea");
  });

  it("applies custom className to textarea element", () => {
    render(<Textarea className="custom-textarea-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-textarea-class");
  });
});
