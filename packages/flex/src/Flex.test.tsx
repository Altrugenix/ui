import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Flex } from "./index";

describe("Flex", () => {
  it("should render without crashing", () => {
    const { container } = render(<Flex>Test</Flex>);
    expect(container).toBeTruthy();
  });
});
