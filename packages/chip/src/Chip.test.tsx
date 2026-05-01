import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./index";
import "@testing-library/jest-dom";

describe("Chip", () => {
  it("renders correctly with children text", () => {
    render(<Chip>Active</Chip>);
    expect(screen.getByText("Active")).toBeDefined();
  });

  it("handles onDelete when click delete icon", () => {
    const handleDelete = vi.fn();
    render(<Chip onDelete={handleDelete}>Deletable</Chip>);
    const deleteButton = screen.getByLabelText("Delete");
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("can be clickable", () => {
    const handleClick = vi.fn();
    render(
      <Chip clickable onClick={handleClick}>
        Clickable
      </Chip>
    );
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with an avatar", () => {
    render(
      <Chip avatar={<span data-testid="avatar">A</span>}>Chip with Avatar</Chip>
    );
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });

  it("applies variant and size classes correctly", () => {
    const { rerender } = render(
      <Chip variant="primary" size="lg">
        Test
      </Chip>
    );
    const chip = screen.getByText("Test").parentElement;
    expect(chip).toHaveClass("bg-primary");
    expect(chip).toHaveClass("text-sm");

    rerender(
      <Chip variant="outline" size="sm">
        Test
      </Chip>
    );
    expect(chip).toHaveClass("border-input");
    expect(chip).toHaveClass("text-[10px]");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Chip ref={ref}>Test</Chip>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Chip className="custom-chip" data-testid="chip" id="chip-id">
        Test
      </Chip>
    );
    const chip = screen.getByTestId("chip");
    expect(chip).toHaveClass("custom-chip");
    expect(chip.id).toBe("chip-id");
  });
});
