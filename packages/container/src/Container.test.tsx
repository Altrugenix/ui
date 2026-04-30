import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./index";

describe("Container", () => {
  it("should render without crashing", () => {
    const { container } = render(<Container />);
    expect(container).toBeInTheDocument();
  });
});
