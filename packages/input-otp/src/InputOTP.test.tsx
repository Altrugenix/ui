import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { InputOTP } from "./InputOTP";

describe("InputOTP component", () => {
  it("renders correctly", () => {
    const { container } = render(<InputOTP length={6} />);
    expect(container).toBeInTheDocument();
  });

  it("calls onChange when a digit is entered", () => {
    const onChangeMock = vi.fn();
    const { container } = render(
      <InputOTP length={6} onChange={onChangeMock} />
    );
    const firstInput = container.querySelector("input");
    if (firstInput) {
      fireEvent.change(firstInput, { target: { value: "1" } });
    }
    expect(onChangeMock).toHaveBeenCalledWith("1");
  });
});
