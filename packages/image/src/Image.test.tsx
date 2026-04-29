import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Image } from "./Image";

describe("Image component", () => {
  it("renders correctly", () => {
    render(<Image src="/test.jpg" alt="Test Image" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
