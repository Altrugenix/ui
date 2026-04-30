import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stack } from "./index";

describe("Stack", () => {
  it("should render without crashing", () => {
    const { container } = render(<Stack>Test</Stack>);
    expect(container).toBeTruthy();
  });
});
