import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { CalendarView } from "./CalendarView";

describe("CalendarView component", () => {
  it("renders correctly", () => {
    const { container, getByText } = render(<CalendarView />);
    expect(container.firstChild).toHaveClass("bg-card");
    // Check if current month is rendered
    const today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    expect(
      getByText(new RegExp(monthNames[today.getMonth()]))
    ).toBeInTheDocument();
  });

  it("renders events correctly", () => {
    const today = new Date();
    const events = [{ id: "1", title: "Test Event", date: today }];
    const { getByText } = render(<CalendarView events={events} />);
    expect(getByText("Test Event")).toBeInTheDocument();
  });
});
