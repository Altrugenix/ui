import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Rating } from "./Rating";
import "@testing-library/jest-dom";

describe("Rating", () => {
  it("renders the correct number of stars", () => {
    render(<Rating max={5} />);
    expect(screen.getAllByRole("button")).toHaveLength(5);
  });

  it("renders active stars based on value", () => {
    const { container } = render(<Rating value={3} max={5} />);
    const activeStars = container.querySelectorAll(".text-amber-400");
    expect(activeStars).toHaveLength(3);
    // Check for default fill class
    expect(activeStars[0]).toHaveClass("fill-amber-400");
  });

  it("calls onChange when a star is clicked", () => {
    const onChange = vi.fn();
    render(<Rating max={5} onChange={onChange} />);
    const stars = screen.getAllByRole("button");

    fireEvent.click(stars[3]); // Click the 4th star
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it("updates hover state on mouse enter/leave", () => {
    const { container } = render(<Rating value={0} max={5} />);
    const stars = screen.getAllByRole("button");

    fireEvent.mouseEnter(stars[1]); // Hover over 2nd star
    let activeStars = container.querySelectorAll(".text-amber-400");
    expect(activeStars).toHaveLength(2);

    fireEvent.mouseLeave(stars[1]);
    activeStars = container.querySelectorAll(".text-amber-400");
    expect(activeStars).toHaveLength(0);
  });

  it("does not call onChange when readonly", () => {
    const onChange = vi.fn();
    render(<Rating value={0} max={5} readonly onChange={onChange} />);
    const stars = screen.getAllByRole("button");

    fireEvent.click(stars[2]);
    expect(onChange).not.toHaveBeenCalled();
    expect(stars[2]).toBeDisabled();
  });

  it("applies different sizes", () => {
    const { rerender, container } = render(<Rating size="sm" />);
    expect(container.querySelector("svg")).toHaveClass("h-4 w-4");

    rerender(<Rating size="lg" />);
    expect(container.querySelector("svg")).toHaveClass("h-8 w-8");
  });

  it("applies custom active and inactive colors", () => {
    const { container } = render(
      <Rating
        value={2}
        max={5}
        activeColor="text-red-500"
        inactiveColor="text-gray-200"
      />
    );
    expect(container.querySelectorAll(".text-red-500")).toHaveLength(2);
    expect(container.querySelectorAll(".text-gray-200")).toHaveLength(3);
  });

  it("applies custom className", () => {
    const { container } = render(<Rating className="custom-rating" />);
    expect(container.firstChild).toHaveClass("custom-rating");
  });
});
