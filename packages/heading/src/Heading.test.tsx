import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Heading } from "./Heading";

describe("Heading component", () => {
  it("renders correctly", () => {
    render(<Heading>Hello Heading</Heading>);
    expect(screen.getByText("Hello Heading")).toBeTruthy();
  });
});
