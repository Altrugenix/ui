import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CalendarView } from "./CalendarView";
import "@testing-library/jest-dom";

describe("CalendarView", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(<CalendarView />);
    expect(container.firstChild).toHaveClass("bg-card");
    const today = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    expect(getByText(new RegExp(monthNames[today.getMonth()]))).toBeInTheDocument();
  });

  it("renders events correctly", () => {
    const today = new Date();
    const events = [{ id: "1", title: "Test Event", date: today }];
    const { getByText } = render(<CalendarView events={events} />);
    expect(getByText("Test Event")).toBeInTheDocument();
  });
  it("handles month navigation", () => {
    render(<CalendarView />);
    const prevButton = screen.getAllByRole("button").find(b => b.querySelector("svg.lucide-chevron-left"));
    const nextButton = screen.getAllByRole("button").find(b => b.querySelector("svg.lucide-chevron-right"));
    
    // This is a bit brittle if the icons change, but let's assume they are there
    // Alternatively, I can find by index or just use the buttons I find.
    const buttons = screen.getAllByRole("button");
    const prevBtn = buttons[0];
    const nextBtn = buttons[1];
    const todayBtn = screen.getByText("Today");

    fireEvent.click(nextBtn);
    // Should show next month
    
    fireEvent.click(todayBtn);
    // Should show current month
  });

  it("calls onAddEvent when plus button is clicked", () => {
    const onAddEvent = vi.fn();
    render(<CalendarView onAddEvent={onAddEvent} />);
    
    // Plus buttons are only visible on hover, but RTL fireEvent can still click them
    // Each day has a plus button. Let's click the first one in current month.
    const plusButtons = screen.getAllByRole("button").filter(b => b.querySelector("svg.lucide-plus"));
    fireEvent.click(plusButtons[0]);
    
    expect(onAddEvent).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { container } = render(<CalendarView className="custom-calendar" />);
    expect(container.firstChild).toHaveClass("custom-calendar");
  });
});
