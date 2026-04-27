import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Tag } from "./Tag";

describe("Tag component", () => {
  it("renders correctly", () => {
    render(<Tag>Hello Tag</Tag>);
    expect(screen.getByText("Hello Tag")).toBeInTheDocument();
  });
});
