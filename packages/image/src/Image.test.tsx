import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Image } from "./Image";

describe("Image component", () => {
  it("shows image and triggers onLoad", () => {
    const handleLoad = vi.fn();
    render(<Image src="/test.jpg" alt="Test" onLoad={handleLoad} />);
    const img = screen.getByRole("img");

    // Simulate load
    fireEvent.load(img);
    expect(handleLoad).toHaveBeenCalled();
    expect(img).not.toHaveClass("opacity-0");
  });

  it("shows fallback on error", () => {
    const handleError = vi.fn();
    render(
      <Image
        src="/error.jpg"
        fallback="/fallback.jpg"
        alt="Test"
        onError={handleError}
      />
    );
    const img = screen.getByRole("img");

    // Simulate error
    fireEvent.error(img);
    expect(handleError).toHaveBeenCalled();
    expect(img).toHaveAttribute("src", "/fallback.jpg");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLImageElement>();
    render(<Image src="/test.jpg" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Image
        src="/test.jpg"
        className="custom-img"
        data-testid="img"
        loading="lazy"
      />
    );
    const img = screen.getByTestId("img");
    expect(img).toHaveClass("custom-img");
    expect(img).toHaveAttribute("loading", "lazy");
  });
});
