import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormValidation, type ValidationMessage } from "./FormValidation";
import "@testing-library/jest-dom";

describe("FormValidation", () => {
  it("renders nothing when messages are empty", () => {
    const { container } = render(<FormValidation messages={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders all messages with correct styles", () => {
    const messages: ValidationMessage[] = [
      { message: "Error message", type: "error" },
      { message: "Success message", type: "success" },
      { message: "Info message", type: "info" },
    ];
    render(<FormValidation messages={messages} />);

    const errorMsg = screen.getByText("Error message");
    const successMsg = screen.getByText("Success message");
    const infoMsg = screen.getByText("Info message");

    expect(errorMsg.parentElement).toHaveClass("text-destructive");
    expect(successMsg.parentElement).toHaveClass("text-success");
    expect(infoMsg.parentElement).toHaveClass("text-info");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <FormValidation
        messages={[{ message: "test", type: "info" }]}
        ref={ref}
      />
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <FormValidation
        messages={[{ message: "test", type: "info" }]}
        className="custom-validation"
        data-testid="validation"
        id="validation-id"
      />
    );
    const validation = screen.getByTestId("validation");
    expect(validation).toHaveClass("custom-validation");
    expect(validation.id).toBe("validation-id");
  });
});
