import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Timeline } from "./Timeline";

describe("Timeline component", () => {
  const items = [
    { title: "Event 1", date: "2024-01-01", description: "Desc 1" },
    { title: "Event 2", date: "2024-02-01" },
  ];

  it("renders correctly", () => {
    const { getByText } = render(<Timeline items={items} />);
    expect(getByText("Event 1")).toBeTruthy();
    expect(getByText("Event 2")).toBeTruthy();
    expect(getByText("Desc 1")).toBeTruthy();
    expect(getByText("2024-01-01")).toBeTruthy();
  });
});
