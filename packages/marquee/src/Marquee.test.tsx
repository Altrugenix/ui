import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Marquee } from "./index";

describe("Marquee", () => {
  it("should render without crashing", () => {
    const { container } = render(<Marquee>Test</Marquee>);
    expect(container).toBeTruthy();
  });
});
