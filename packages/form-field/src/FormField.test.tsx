import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormField } from "./index";

describe("FormField", () => {
  it("should render without crashing", () => {
    const { container } = render(<FormField />);
    expect(container).toBeInTheDocument();
  });
});
