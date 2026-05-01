import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./Switch";
import "@testing-library/jest-dom";

describe("Switch", () => {
  it("renders correctly with a label", () => {
    render(<Switch label="Notifications" />);
    expect(screen.getByLabelText(/notifications/i)).toBeInTheDocument();
  });

  it("handles toggle", () => {
    const handleChange = vi.fn();
    render(<Switch label="Notifications" onChange={handleChange} />);
    const switchEl = screen.getByLabelText(/notifications/i);
    fireEvent.click(switchEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((switchEl as HTMLInputElement).checked).toBe(true);
  });

  it("disables correctly", () => {
    render(<Switch label="Notifications" disabled />);
    expect(screen.getByLabelText(/notifications/i)).toBeDisabled();
  });

  it("works in controlled mode", () => {
    const { rerender } = render(<Switch checked={true} readOnly />);
    expect(screen.getByRole("checkbox")).toBeChecked();

    rerender(<Switch checked={false} readOnly />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Switch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("uses custom id if provided", () => {
    render(<Switch label="Toggle" id="custom-switch" />);
    expect(screen.getByLabelText("Toggle")).toHaveAttribute(
      "id",
      "custom-switch"
    );
  });

  it("applies custom className to input element", () => {
    render(<Switch className="custom-switch-class" />);
    expect(screen.getByRole("checkbox")).toHaveClass("custom-switch-class");
  });
});
