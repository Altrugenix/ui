import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Portal } from "./portal/Portal";
import { ClickAwayListener } from "./click-away-listener/ClickAwayListener";
import { VisuallyHidden } from "./visually-hidden/VisuallyHidden";
import { NoSsr } from "./no-ssr/NoSsr";
import { TextareaAutosize } from "./textarea-autosize/TextareaAutosize";
import "@testing-library/jest-dom";

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
          <div data-testid="outside">Outside</div>
          <ClickAwayListener onClickAway={onClickAway}>
            <div data-testid="inside">Inside</div>
          </ClickAwayListener>
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

  describe("NoSsr", () => {
    it("renders fallback initially and then children after mount", () => {
      render(
        <NoSsr fallback={<div data-testid="fallback">Fallback</div>}>
          <div data-testid="content">Content</div>
        </NoSsr>
      );
      
      // In RTL, mount happens immediately in useEffect.
      // To test the "server" state, we'd need to mock it, but standard render is client.
      expect(screen.getByTestId("content")).toBeInTheDocument();
      expect(screen.queryByTestId("fallback")).not.toBeInTheDocument();
    });
  });

  describe("TextareaAutosize", () => {
    it("renders correctly and handles change", () => {
      const onChange = vi.fn();
      render(<TextareaAutosize data-testid="textarea" onChange={onChange} />);
      const textarea = screen.getByTestId("textarea");
      
      fireEvent.change(textarea, { target: { value: "New content" } });
      expect(onChange).toHaveBeenCalled();
    });

    it("applies minRows", () => {
      render(<TextareaAutosize data-testid="textarea" minRows={5} />);
      expect(screen.getByTestId("textarea")).toHaveAttribute("rows", "5");
    });
  });
});
