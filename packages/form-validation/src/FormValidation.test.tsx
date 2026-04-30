import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormValidation } from "./index";

describe("FormValidation", () => {
  it("should render without crashing", () => {
    const { container } = render(<FormValidation messages={[]} />);
    expect(container).toBeTruthy();
  });
});
