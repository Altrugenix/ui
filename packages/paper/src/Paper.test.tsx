import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Paper } from "./index";

describe("Paper", () => {
  it("should render without crashing", () => {
    const { container } = render(<Paper>Test</Paper>);
    expect(container).toBeTruthy();
  });
});
