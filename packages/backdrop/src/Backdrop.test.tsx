import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Backdrop } from "./Backdrop";

describe("Backdrop", () => {
  it("renders when open is true", () => {
    render(<Backdrop open={true} data-testid="backdrop" />);
    const backdrop = screen.getByTestId("backdrop");
    expect(backdrop).toBeTruthy();
    expect(backdrop).toHaveClass("bg-black/50");
  });

  it("does not render when open is false", () => {
    render(<Backdrop open={false} data-testid="backdrop" />);
    expect(screen.queryByTestId("backdrop")).toBeNull();
  });

  it("applies transparent styles when invisible is true", () => {
    render(<Backdrop open={true} invisible={true} data-testid="backdrop" />);
    const backdrop = screen.getByTestId("backdrop");
    expect(backdrop).toHaveClass("bg-transparent");
  });

  it("renders children correctly", () => {
    render(
      <Backdrop open={true}>
        <div data-testid="child">Backdrop Child</div>
      </Backdrop>
    );
    expect(screen.getByTestId("child")).toBeTruthy();
  });
});
