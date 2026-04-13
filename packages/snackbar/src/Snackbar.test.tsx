import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Snackbar } from "./Snackbar";

describe("Snackbar", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders when open is true", () => {
    render(<Snackbar open={true} message="Test Snackbar" />);
    expect(screen.getByText("Test Snackbar")).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(<Snackbar open={false} message="Test Snackbar" />);
    expect(screen.queryByText("Test Snackbar")).toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Snackbar open={true} message="Test Snackbar" onClose={handleClose} />
    );
    const closeBtn = screen.getByLabelText("Close");
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onAction when action button is clicked", () => {
    const handleAction = vi.fn();
    render(
      <Snackbar
        open={true}
        message="Test Snackbar"
        actionLabel="Retry"
        onAction={handleAction}
      />
    );
    const actionBtn = screen.getByText("Retry");
    fireEvent.click(actionBtn);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it("calls onClose after autoHideDuration", () => {
    const handleClose = vi.fn();
    render(
      <Snackbar
        open={true}
        message="Test Snackbar"
        onClose={handleClose}
        autoHideDuration={3000}
      />
    );
    expect(handleClose).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
