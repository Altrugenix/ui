import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./index";
import React from "react";

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
});
