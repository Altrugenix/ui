import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DatePicker } from "./DatePicker";
import "@testing-library/jest-dom";

describe("DatePicker", () => {
  it("renders correctly with placeholder", () => {
    render(<DatePicker placeholder="Select Date" />);
    expect(screen.getByText("Select Date")).toBeInTheDocument();
  });

  it("renders formatted date when value is provided", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    render(<DatePicker value={date} />);
    expect(screen.getByText(/January 1, 2024/)).toBeInTheDocument();
  });
  it("opens calendar on click and selects a date", () => {
    const onChange = vi.fn();
    render(<DatePicker onChange={onChange} />);
    
    const trigger = screen.getByRole("button", { name: /pick a date/i });
    fireEvent.click(trigger);
    
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    
    const day15 = screen.getByText("15");
    fireEvent.click(day15);
    
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBeInstanceOf(Date);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("applies custom className to the trigger button", () => {
    render(<DatePicker className="custom-datepicker" />);
    expect(screen.getByRole("button")).toHaveClass("custom-datepicker");
  });
});
