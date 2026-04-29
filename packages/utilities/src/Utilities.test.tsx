import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Portal } from "./portal/Portal";
import { ClickAwayListener } from "./click-away-listener/ClickAwayListener";
import { VisuallyHidden } from "./visually-hidden/VisuallyHidden";
import React from "react";

describe("Utilities", () => {
  describe("Portal", () => {
    it("renders children in document.body by default", () => {
      render(
        <Portal>
          <div data-testid="portal-content">Portal Content</div>
        </Portal>
      );
      const content = screen.getByTestId("portal-content");
      expect(content.parentElement).toBe(document.body);
    });

    it("renders children in custom container", () => {
      const container = document.createElement("div");
      document.body.appendChild(container);
      render(
        <Portal container={container}>
          <div data-testid="portal-custom">Custom Content</div>
        </Portal>
      );
      expect(screen.getByTestId("portal-custom").parentElement).toBe(container);
      document.body.removeChild(container);
    });
  });

  describe("VisuallyHidden", () => {
    it("renders children with screen-reader only styles", () => {
      const { container } = render(
        <VisuallyHidden>Hidden Text</VisuallyHidden>
      );
      expect(container.firstChild).toHaveClass("absolute");
      expect(container.firstChild).toHaveClass("overflow-hidden");
    });
  });

  describe("ClickAwayListener", () => {
    it("calls onClickAway when clicking outside", () => {
      const onClickAway = vi.fn();
      render(
        <div>
          <ClickAwayListener onClickAway={onClickAway}>
            <div data-testid="inside">Inside</div>
          </ClickAwayListener>
          <div data-testid="outside">Outside</div>
        </div>
      );

      fireEvent.mouseDown(screen.getByTestId("outside"));
      expect(onClickAway).toHaveBeenCalledTimes(1);
    });

    it("does not call onClickAway when clicking inside", () => {
      const onClickAway = vi.fn();
      render(
        <ClickAwayListener onClickAway={onClickAway}>
          <div data-testid="inside">Inside</div>
        </ClickAwayListener>
      );

      fireEvent.mouseDown(screen.getByTestId("inside"));
      expect(onClickAway).not.toHaveBeenCalled();
    });
  });
});
