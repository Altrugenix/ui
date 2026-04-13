import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Chip } from "./index";
import React from "react";

describe("Chip", () => {
  it("renders correctly with label", () => {
    render(<Chip label="Active" />);
    expect(screen.getByText("Active")).toBeDefined();
  });

  it("handles onClose when click delete icon", () => {
    const handleClose = vi.fn();
    render(<Chip label="Deletable" onClose={handleClose} />);
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    const handleClick = vi.fn();
    render(<Chip label="Disabled" disabled onClick={handleClick} />);
    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
