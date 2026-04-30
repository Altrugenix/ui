import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./index";

describe("Grid", () => {
  it("should render without crashing", () => {
    const { container } = render(<Grid />);
    expect(container).toBeInTheDocument();
  });
});
