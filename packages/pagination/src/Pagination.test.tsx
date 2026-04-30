import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Pagination } from "./index";

describe("Pagination", () => {
  it("should render without crashing", () => {
    const { container } = render(<Pagination>Test</Pagination>);
    expect(container).toBeTruthy();
  });
});
