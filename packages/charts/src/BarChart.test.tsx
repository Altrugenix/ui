import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BarChart, type ChartDataPoint } from "./BarChart";
import "@testing-library/jest-dom";

describe("BarChart", () => {
  const data: ChartDataPoint[] = [
    { label: "Jan", value: 10 },
    { label: "Feb", value: 20 },
    { label: "Mar", value: 30 },
  ];

  it("applies custom height to the container", () => {
    const { container } = render(<BarChart data={data} height={400} />);
    expect(container.firstChild).toHaveStyle({ height: "400px" });
  });

  it("applies custom colors to bars", () => {
    const coloredData = [
      { label: "A", value: 10, color: "bg-red-500" },
      { label: "B", value: 20 },
    ];
    const { container } = render(<BarChart data={coloredData} />);
    const bars = container.querySelectorAll(".rounded-t-md");
    expect(bars[0]).toHaveClass("bg-red-500");
    expect(bars[1]).toHaveClass("bg-primary");
  });

  it("calculates bar heights correctly based on maxValue", async () => {
    const { container } = render(<BarChart data={data} />);
    const bars = container.querySelectorAll(".rounded-t-md");
    // Max value is 30, so "Jan" (10) should be 33.33%, "Feb" (20) should be 66.66%, "Mar" (30) 100%
    
    // We use waitFor because of framer-motion animations
    await waitFor(() => {
      expect(bars[0]).toHaveStyle({ height: "33.33333333333333%" });
    });
    expect(bars[1]).toHaveStyle({ height: "66.66666666666666%" });
    expect(bars[2]).toHaveStyle({ height: "100%" });
  });

  it("applies custom className", () => {
    const { container } = render(<BarChart data={data} className="custom-chart" />);
    expect(container.firstChild).toHaveClass("custom-chart");
  });
});
