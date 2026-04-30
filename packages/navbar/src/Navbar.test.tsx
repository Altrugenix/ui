import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "./index";

describe("Navbar", () => {
  it("should render without crashing", () => {
    const { container } = render(<Navbar>Test</Navbar>);
    expect(container).toBeTruthy();
  });
});
