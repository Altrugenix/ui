import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Alert } from "./index";
import "@testing-library/jest-dom";

describe("Alert", () => {
  it("renders the title and content correctly", () => {
    render(
      <Alert title="Alert Title">
        Alert Content
      </Alert>
    );
    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert Content")).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Alert variant="success">Success</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-success");

    rerender(<Alert variant="destructive">Error</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-destructive");

    rerender(<Alert variant="warning">Warning</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-warning-foreground");
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Dismissible</Alert>);
    
    const closeButton = screen.getByLabelText("Close alert");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Alert ref={ref}>Test</Alert>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Alert
        className="custom-alert"
        data-testid="alert"
        id="alert-id"
      >
        Test
      </Alert>
    );
    const alert = screen.getByTestId("alert");
    expect(alert).toHaveClass("custom-alert");
    expect(alert.id).toBe("alert-id");
  });
});
