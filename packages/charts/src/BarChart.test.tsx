import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BarChart, ChartDataPoint } from "./BarChart";

describe("BarChart", () => {
  const data: ChartDataPoint[] = [
    { label: "Jan", value: 10 },
    { label: "Feb", value: 20 },
    { label: "Mar", value: 30 },
  ];

  it("renders correctly with labels", () => {
    render(<BarChart data={data} />);
    expect(screen.getByText("Jan")).toBeInTheDocument();
    expect(screen.getByText("Feb")).toBeInTheDocument();
    expect(screen.getByText("Mar")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });

  it("does not render labels if showLabels is false", () => {
    render(<BarChart data={data} showLabels={false} />);
    expect(screen.queryByText("Jan")).toBeNull();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
