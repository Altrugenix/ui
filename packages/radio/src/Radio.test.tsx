import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders correctly with a label", () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByLabelText(/option 1/i)).toBeInTheDocument();
  });

  it("handles selection", () => {
    const handleChange = vi.fn();
    render(<Radio label="Option 1" onChange={handleChange} />);
    const radio = screen.getByLabelText(/option 1/i);
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((radio as HTMLInputElement).checked).toBe(true);
  });

  it("disables correctly", () => {
    render(<Radio label="Option 1" disabled />);
    expect(screen.getByLabelText(/option 1/i)).toBeDisabled();
  });
});
