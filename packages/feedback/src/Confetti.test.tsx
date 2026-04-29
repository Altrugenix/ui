import { describe, it, expect, vi } from "vitest";
import { Confetti } from "./Confetti";
import confetti from "canvas-confetti";

describe("Confetti", () => {
  it("calls confetti on burst", () => {
    Confetti.burst();
    expect(confetti).toHaveBeenCalled();
  });

  it("calls confetti on sideCannons", () => {
    // sideCannons uses requestAnimationFrame and frame loop
    // We can just check if it was called at least once
    Confetti.sideCannons();
    expect(confetti).toHaveBeenCalled();
  });

  it("calls confetti on rain", () => {
    vi.useFakeTimers();
    Confetti.rain();
    
    act(() => {
      vi.advanceTimersByTime(300);
    });
    
    expect(confetti).toHaveBeenCalled();
    vi.useRealTimers();
  });
});

// Helper for act in non-react test if needed, but actually I can just use vi.fn() for confetti
import { act } from "@testing-library/react";
