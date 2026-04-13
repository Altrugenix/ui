import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders when isOpen is true", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={false} onClose={handleClose} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByText("Test Modal")).toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );
    const closeButton = screen.getByLabelText("Close modal");
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
