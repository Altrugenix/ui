import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "./Switch";

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
});
