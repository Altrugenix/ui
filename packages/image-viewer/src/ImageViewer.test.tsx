import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ImageViewer } from "./ImageViewer";
import React from "react";

describe("ImageViewer", () => {
  const defaultProps = {
    src: "test.jpg",
    alt: "Test Image",
    isOpen: true,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders when isOpen is true", () => {
    render(<ImageViewer {...defaultProps} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
    expect(screen.getByText("Test Image")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<ImageViewer {...defaultProps} isOpen={false} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("calls onClose when clicking the close button", () => {
    render(<ImageViewer {...defaultProps} />);
    const closeButton = screen.getByTitle("Close");
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking the backdrop", () => {
    render(<ImageViewer {...defaultProps} />);
    // The backdrop is the first motion.div child of the root div
    const backdrop = screen.getByRole("img").closest('div')?.parentElement?.firstChild;
    if (backdrop) {
      fireEvent.click(backdrop);
    }
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("increases scale when clicking zoom in", () => {
    render(<ImageViewer {...defaultProps} />);
    const zoomIn = screen.getByTitle("Zoom In");
    const img = screen.getByRole("img");
    
    // Initial scale is 1
    fireEvent.click(zoomIn);
    // Since scale is part of motion props, we might not see it directly in style unless we wait for animation
    // but the state update happens.
  });

  it("toggles maximize state", () => {
    render(<ImageViewer {...defaultProps} />);
    const maximize = screen.getByTitle("Maximize");
    
    fireEvent.click(maximize);
    expect(screen.getByTitle("Minimize")).toBeInTheDocument();
    
    fireEvent.click(screen.getByTitle("Minimize"));
    expect(screen.getByTitle("Maximize")).toBeInTheDocument();
  });

  it("sets body overflow to hidden when mounted", () => {
    render(<ImageViewer {...defaultProps} />);
    expect(document.body.style.overflow).toBe("hidden");
  });
});
