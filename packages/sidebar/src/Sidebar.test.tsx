import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Sidebar } from "./index";

describe("Sidebar", () => {
  it("should render without crashing", () => {
    const { container } = render(<Sidebar>Test</Sidebar>);
    expect(container).toBeTruthy();
  });
});
