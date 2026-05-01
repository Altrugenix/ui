import { describe, it, expect, vi, beforeEach } from "vitest";
import { Confetti } from "./Confetti";
import confetti from "canvas-confetti";
import { act } from "@testing-library/react";

vi.mock("canvas-confetti", () => ({
  default: vi.fn(),
}));

describe("Confetti", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls confetti on burst with default options", () => {
    Confetti.burst();
    expect(confetti).toHaveBeenCalledWith(
      expect.objectContaining({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      })
    );
  });

  it("merges custom options in burst", () => {
    Confetti.burst({ particleCount: 200, colors: ["#ff0000"] });
    expect(confetti).toHaveBeenCalledWith(
      expect.objectContaining({
        particleCount: 200,
        colors: ["#ff0000"],
      })
    );
  });

  it("calls confetti multiple times in sideCannons", () => {
    Confetti.sideCannons();
    // It calls twice per frame
    expect(confetti).toHaveBeenCalledTimes(2);
  });

  it("calls confetti on rain at intervals", () => {
    vi.useFakeTimers();
    Confetti.rain();

    act(() => {
      vi.advanceTimersByTime(250);
    });

    // Should have called confetti twice (left and right cannons)
    expect(confetti).toHaveBeenCalledTimes(2);

    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(confetti).toHaveBeenCalledTimes(4);

    vi.useRealTimers();
  });
});
