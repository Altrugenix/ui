import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BarChart, type ChartDataPoint } from "./BarChart";

describe("BarChart", () => {
  const data: ChartDataPoint[] = [
    { label: "Jan", value: 10 },
    { label: "Feb", value: 20 },
    { label: "Mar", value: 30 },
  ];

  it("renders correctly with labels", () => {
    render(<BarChart data={data} />);
    expect(screen.getByText("Jan")).toBeTruthy();
    expect(screen.getByText("Feb")).toBeTruthy();
    expect(screen.getByText("Mar")).toBeTruthy();
    expect(screen.getByText("10")).toBeTruthy();
    expect(screen.getByText("20")).toBeTruthy();
    expect(screen.getByText("30")).toBeTruthy();
  });

  it("does not render labels if showLabels is false", () => {
    render(<BarChart data={data} showLabels={false} />);
    expect(screen.queryByText("Jan")).toBeNull();
    expect(screen.getByText("10")).toBeTruthy();
  });
});
