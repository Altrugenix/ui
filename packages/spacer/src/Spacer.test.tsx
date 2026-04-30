import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spacer } from "./index";

describe("Spacer", () => {
  it("should render without crashing", () => {
    const { container } = render(<Spacer />);
    expect(container).toBeInTheDocument();
  });
});
