import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MetricCard } from "./MetricCard";
import React from "react";

describe("MetricCard", () => {
  const defaultProps = {
    title: "Total Revenue",
    value: "$45,231.89",
  };

  it("renders the title and value correctly", () => {
    render(<MetricCard {...defaultProps} />);
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("$45,231.89")).toBeInTheDocument();
  });

  it("renders the description when provided", () => {
    render(<MetricCard {...defaultProps} description="+20.1% from last month" />);
    expect(screen.getByText("+20.1% from last month")).toBeInTheDocument();
  });

  it("renders the trend correctly (up)", () => {
    render(
      <MetricCard
        {...defaultProps}
        trend={{ value: "+2.5%", direction: "up", label: "vs last week" }}
      />
    );
    expect(screen.getByText("+2.5%")).toBeInTheDocument();
    expect(screen.getByText("vs last week")).toBeInTheDocument();
    // Check if it has success color class (though testing classes can be brittle, it's good for verifying trend logic)
    expect(screen.getByText("+2.5%").parentElement).toHaveClass("text-success");
  });

  it("renders the trend correctly (down)", () => {
    render(
      <MetricCard
        {...defaultProps}
        trend={{ value: "-1.2%", direction: "down" }}
      />
    );
    expect(screen.getByText("-1.2%")).toBeInTheDocument();
    expect(screen.getByText("-1.2%").parentElement).toHaveClass("text-destructive");
  });

  it("renders the icon when provided", () => {
    render(<MetricCard {...defaultProps} icon={<span data-testid="custom-icon">Icon</span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders a sparkline when chartData is provided", () => {
    const { container } = render(<MetricCard {...defaultProps} chartData={[10, 20, 15, 30]} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
