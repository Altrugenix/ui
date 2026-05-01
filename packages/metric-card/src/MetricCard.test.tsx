import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MetricCard } from "./MetricCard";

describe("MetricCard", () => {
  const defaultProps = {
    title: "Total Revenue",
    value: "$45,231.89",
  };

  it("renders the title and value correctly", () => {
    render(<MetricCard {...defaultProps} />);
    expect(screen.getByText("Total Revenue")).toBeTruthy();
    expect(screen.getByText("$45,231.89")).toBeTruthy();
  });

  it("renders the description when provided", () => {
    render(
      <MetricCard {...defaultProps} description="+20.1% from last month" />
    );
    expect(screen.getByText("+20.1% from last month")).toBeTruthy();
  });

  it("renders the trend correctly (up)", () => {
    render(
      <MetricCard
        {...defaultProps}
        trend={{ value: "+2.5%", direction: "up", label: "vs last week" }}
      />
    );
    expect(screen.getByText("+2.5%")).toBeTruthy();
    expect(screen.getByText("vs last week")).toBeTruthy();
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
    expect(screen.getByText("-1.2%")).toBeTruthy();
    expect(screen.getByText("-1.2%").parentElement).toHaveClass(
      "text-destructive"
    );
  });

  it("renders the icon when provided", () => {
    render(
      <MetricCard
        {...defaultProps}
        icon={<span data-testid="custom-icon">Icon</span>}
      />
    );
    expect(screen.getByTestId("custom-icon")).toBeTruthy();
  });

  it("renders a sparkline when chartData is provided", () => {
    const { container } = render(
      <MetricCard {...defaultProps} chartData={[10, 20, 15, 30]} />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("renders the trend correctly (neutral)", () => {
    render(
      <MetricCard
        {...defaultProps}
        trend={{ value: "0%", direction: "neutral" }}
      />
    );
    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(screen.getByText("0%").parentElement).toHaveClass("text-muted-foreground");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<MetricCard {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <MetricCard
        {...defaultProps}
        className="custom-card"
        id="test-card"
        data-testid="metric-card"
      />
    );
    const card = screen.getByTestId("metric-card");
    expect(card).toHaveClass("custom-card");
    expect(card.id).toBe("test-card");
  });
});
