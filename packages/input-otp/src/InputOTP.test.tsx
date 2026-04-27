import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./InputOTP";

describe("InputOTP component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
      </InputOTP>
    );
    expect(container).toBeInTheDocument();
  });
});
