import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("renders correctly with options", () => {
    render(
      <Select label="Country">
        <option value="us">USA</option>
        <option value="ca">Canada</option>
      </Select>
    );
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
    expect(screen.getByText(/usa/i)).toBeInTheDocument();
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    render(
      <Select label="Country" onChange={handleChange}>
        <option value="us">USA</option>
        <option value="ca">Canada</option>
      </Select>
    );
    const select = screen.getByLabelText(/country/i);
    fireEvent.change(select, { target: { value: "ca" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((select as HTMLSelectElement).value).toBe("ca");
  });

  it("displays error message", () => {
    render(
      <Select label="Country" errorText="Selection required">
        <option value="us">USA</option>
      </Select>
    );
    expect(screen.getByText(/selection required/i)).toBeInTheDocument();
  });

  it("disables correctly", () => {
    render(
      <Select label="Country" disabled>
        <option value="us">USA</option>
      </Select>
    );
    expect(screen.getByLabelText(/country/i)).toBeDisabled();
  });
});
