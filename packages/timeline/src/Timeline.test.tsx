import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Timeline } from "./Timeline";
import "@testing-library/jest-dom";

describe("Timeline", () => {
  const items = [
    { title: "Event 1", date: "2024-01-01", description: "Desc 1" },
    { title: "Event 2", date: "2024-02-01" },
  ];

  it("renders correctly", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Desc 1")).toBeInTheDocument();
    expect(screen.getByText("2024-01-01")).toBeInTheDocument();
  });
  it("renders custom icons and variants", () => {
    const customItems = [
      {
        title: "Success",
        icon: <span data-testid="success-icon">V</span>,
        variant: "success" as const,
      },
      { title: "Destructive", variant: "destructive" as const },
    ];
    render(<Timeline items={customItems} />);
    expect(screen.getByTestId("success-icon")).toBeInTheDocument();

    // Check variant classes
    const dots = document.querySelectorAll(".rounded-full");
    // Success icon container has border-success (index 0)
    // Destructive dot has border-destructive bg-destructive (index 1)
    expect(dots[1]).toHaveClass("border-destructive");
    expect(dots[1]).toHaveClass("bg-destructive");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Timeline items={items} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Timeline items={items} className="custom-timeline" id="timeline-id" />
    );
    expect(container.firstChild).toHaveClass("custom-timeline");
    expect(container.firstChild).toHaveAttribute("id", "timeline-id");
  });
});
