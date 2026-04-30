import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text component", () => {
  it("renders correctly", () => {
    render(<Text>Hello Text</Text>);
    expect(screen.getByText("Hello Text")).toBeTruthy();
  });
});
