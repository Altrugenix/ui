import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders correctly with a label", () => {
    render(<Slider label="Volume" />);
    expect(screen.getByLabelText(/volume/i)).toBeInTheDocument();
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    render(<Slider label="Volume" onChange={handleChange} />);
    const slider = screen.getByLabelText(/volume/i);
    fireEvent.change(slider, { target: { value: "75" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((slider as HTMLInputElement).value).toBe("75");
  });

  it("disables correctly", () => {
    render(<Slider label="Volume" disabled />);
    expect(screen.getByLabelText(/volume/i)).toBeDisabled();
  });
});
