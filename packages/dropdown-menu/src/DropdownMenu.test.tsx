import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DropdownMenu } from "./index";

describe("DropdownMenu", () => {
  it("should render without crashing", () => {
    const { container } = render(<DropdownMenu />);
    expect(container).toBeInTheDocument();
  });
});
