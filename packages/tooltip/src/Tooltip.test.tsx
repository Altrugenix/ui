import * as React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Tooltip } from "./index";
import "@testing-library/jest-dom";

describe("Tooltip", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("is hidden by default", () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows after delay on mouse enter", () => {
    render(
      <Tooltip content="Tooltip Content" delay={500}>
        <button>Hover me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);
    
    // Still hidden before delay
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    
    act(() => {
      vi.advanceTimersByTime(500);
    });
    
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByText("Tooltip Content")).toBeInTheDocument();
  });

  it("hides on mouse leave", () => {
    render(
      <Tooltip content="Tooltip Content" delay={0}>
        <button>Hover me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);
    
    act(() => {
      vi.runAllTimers();
    });
    
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    
    fireEvent.mouseLeave(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows on focus and hides on blur", () => {
    render(
      <Tooltip content="Tooltip Content" delay={0}>
        <button>Focus me</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText("Focus me");
    fireEvent.focus(trigger);
    
    act(() => {
      vi.runAllTimers();
    });
    
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    
    fireEvent.blur(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("applies correct side classes", () => {
    render(
      <Tooltip content="Tooltip Content" delay={0} side="right">
        <button>Hover me</button>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(screen.getByText("Hover me"));
    act(() => {
      vi.runAllTimers();
    });
    
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveClass("left-full");
  });

  it("clears timeout on unmount", () => {
    const { unmount } = render(
      <Tooltip content="Tooltip Content" delay={500}>
        <button>Hover me</button>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(screen.getByText("Hover me"));
    unmount();
    
    // If it didn't clear, advancing timers might trigger state update on unmounted component
    act(() => {
      vi.advanceTimersByTime(500);
    });
    
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
