import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
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

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Backdrop open={true} onClick={onClick} data-testid="backdrop" />);
    fireEvent.click(screen.getByTestId("backdrop"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Backdrop open={true} className="custom-backdrop" data-testid="backdrop" />);
    expect(screen.getByTestId("backdrop")).toHaveClass("custom-backdrop");
  });
});
