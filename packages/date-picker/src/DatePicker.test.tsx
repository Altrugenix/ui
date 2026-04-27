import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { DatePicker } from "./DatePicker";

describe("DatePicker component", () => {
  it("renders correctly with placeholder", () => {
    const { getByText } = render(<DatePicker placeholder="Select Date" />);
    expect(getByText("Select Date")).toBeInTheDocument();
  });

  it("renders formatted date when value is provided", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    const { getByText } = render(<DatePicker value={date} />);
    expect(getByText(/January 1, 2024/)).toBeInTheDocument();
  });
});
