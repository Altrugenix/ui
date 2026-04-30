import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormGroup } from "./index";

describe("FormGroup", () => {
  it("should render without crashing", () => {
    const { container } = render(<FormGroup>Test</FormGroup>);
    expect(container).toBeTruthy();
  });
});
