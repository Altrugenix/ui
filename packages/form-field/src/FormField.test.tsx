import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormField } from "./FormField";
import "@testing-library/jest-dom";

describe("FormField", () => {
  it("renders correctly with label and input", () => {
    render(
      <FormField label="Email">
        <input data-testid="input" />
      </FormField>
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toHaveAttribute("id");
  });

  it("shows required asterisk when required prop is true", () => {
    render(
      <FormField label="Email" required>
        <input />
      </FormField>
    );
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders helper text and links via aria-describedby", () => {
    render(
      <FormField label="Email" helperText="We won't share your email.">
        <input data-testid="input" />
      </FormField>
    );
    const helper = screen.getByText("We won't share your email.");
    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("aria-describedby", helper.id);
  });

  it("renders error message and applies error styling and ARIA attributes", () => {
    render(
      <FormField label="Email" error="Invalid email address.">
        <input data-testid="input" />
      </FormField>
    );
    const error = screen.getByText("Invalid email address.");
    const input = screen.getByTestId("input");
    expect(error).toHaveClass("text-destructive");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", error.id);
  });

  it("prioritizes error over helper text", () => {
    render(
      <FormField
        label="Email"
        helperText="Helper text"
        error="Error message"
      >
        <input />
      </FormField>
    );
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("uses custom id if provided on child", () => {
    render(
      <FormField label="Email">
        <input id="custom-id" />
      </FormField>
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute("id", "custom-id");
  });

  it("applies custom className to wrapper", () => {
    const { container } = render(
      <FormField className="custom-field">
        <input />
      </FormField>
    );
    expect(container.firstChild).toHaveClass("custom-field");
  });
});
