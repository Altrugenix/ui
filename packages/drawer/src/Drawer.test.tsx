import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Drawer } from "./Drawer";
import "@testing-library/jest-dom";

describe("Drawer", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    title: "Test Drawer",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders when isOpen is true", () => {
    render(<Drawer {...defaultProps}>Content</Drawer>);
    expect(screen.getByText("Test Drawer")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Drawer {...defaultProps} isOpen={false}>
        Content
      </Drawer>
    );
    expect(screen.queryByText("Test Drawer")).not.toBeInTheDocument();
  });

  it("calls onClose when clicking the backdrop", () => {
    render(<Drawer {...defaultProps}>Content</Drawer>);
    const backdrop = screen.getByRole("dialog").previousElementSibling;
    if (backdrop) {
      fireEvent.click(backdrop);
    }
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking the close button", () => {
    render(<Drawer {...defaultProps}>Content</Drawer>);
    const closeButton = screen.getByLabelText("Close drawer");
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when pressing Escape key", () => {
    render(<Drawer {...defaultProps}>Content</Drawer>);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("sets body overflow to hidden when open", () => {
    render(<Drawer {...defaultProps}>Content</Drawer>);
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("applies custom width", () => {
    render(
      <Drawer {...defaultProps} width="500px">
        Content
      </Drawer>
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveStyle({ width: "500px" });
  });

  it("applies correct classes for side prop", () => {
    const { rerender } = render(
      <Drawer {...defaultProps} side="left">
        Content
      </Drawer>
    );
    expect(screen.getByRole("dialog")).toHaveClass("left-0");

    rerender(
      <Drawer {...defaultProps} side="right">
        Content
      </Drawer>
    );
    expect(screen.getByRole("dialog")).toHaveClass("right-0");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Drawer {...defaultProps} ref={ref}>Content</Drawer>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has correct ARIA attributes", () => {
    render(<Drawer {...defaultProps}>Content</Drawer>);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByLabelText("Close drawer")).toBeInTheDocument();
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Drawer
        {...defaultProps}
        className="custom-drawer"
        data-testid="drawer-panel"
        id="drawer-id"
      >
        Content
      </Drawer>
    );
    const panel = screen.getByTestId("drawer-panel");
    expect(panel).toHaveClass("custom-drawer");
    expect(panel.id).toBe("drawer-id");
  });

  it("cleans up body overflow on unmount", () => {
    const { unmount } = render(<Drawer {...defaultProps}>Content</Drawer>);
    expect(document.body.style.overflow).toBe("hidden");
    unmount();
    expect(document.body.style.overflow).toBe("");
  });
});
