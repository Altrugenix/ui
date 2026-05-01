import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";
import "@testing-library/jest-dom";

describe("Container", () => {
  it("renders children correctly", () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies correct max-width class based on size", () => {
    const { rerender } = render(<Container size="sm">Test</Container>);
    expect(screen.getByText("Test")).toHaveClass("max-w-screen-sm");

    rerender(<Container size="2xl">Test</Container>);
    expect(screen.getByText("Test")).toHaveClass("max-w-screen-2xl");

    rerender(<Container size="full">Test</Container>);
    expect(screen.getByText("Test")).toHaveClass("max-w-full");
  });

  it("centers content by default", () => {
    render(<Container>Test</Container>);
    expect(screen.getByText("Test")).toHaveClass("mx-auto");
  });

  it("can disable centering", () => {
    render(<Container centered={false}>Test</Container>);
    expect(screen.getByText("Test")).not.toHaveClass("mx-auto");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Container ref={ref}>Test</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Container className="custom-container" data-testid="container" id="container-id">
        Test
      </Container>
    );
    const container = screen.getByTestId("container");
    expect(container).toHaveClass("custom-container");
    expect(container.id).toBe("container-id");
  });
});
