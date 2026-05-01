import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Marquee } from "./Marquee";
import "@testing-library/jest-dom";

describe("Marquee", () => {
  it("renders children and duplicates them", () => {
    render(
      <Marquee>
        <span data-testid="item">Item</span>
      </Marquee>
    );
    // Should have 2 motion.divs each containing the children
    expect(screen.getAllByTestId("item")).toHaveLength(2);
  });

  it("applies correct orientation classes", () => {
    const { rerender, container } = render(<Marquee>Test</Marquee>);
    expect(container.firstChild).toHaveClass("flex-row");
    expect(container.firstChild).not.toHaveClass("flex-col");

    rerender(<Marquee vertical>Test</Marquee>);
    expect(container.firstChild).toHaveClass("flex-col");
    expect(container.firstChild).toHaveClass("h-full");
  });

  it("applies pause on hover class by default", () => {
    const { container } = render(<Marquee>Test</Marquee>);
    const motionDiv = container.querySelector(".shrink-0");
    expect(motionDiv).toHaveClass("group-hover:[animation-play-state:paused]");
  });

  it("can disable pause on hover", () => {
    const { container } = render(<Marquee pauseOnHover={false}>Test</Marquee>);
    const motionDiv = container.querySelector(".shrink-0");
    expect(motionDiv).not.toHaveClass(
      "group-hover:[animation-play-state:paused]"
    );
  });

  it("applies custom gap and className", () => {
    const { container } = render(
      <Marquee gap="5rem" className="custom-marquee">
        Test
      </Marquee>
    );
    expect(container.firstChild).toHaveStyle({ gap: "5rem" });
    expect(container.firstChild).toHaveClass("custom-marquee");
  });
});
