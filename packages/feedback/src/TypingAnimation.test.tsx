import { render, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TypingAnimation } from "./TypingAnimation";
import "@testing-library/jest-dom";

describe("TypingAnimation", () => {
  it("renders with the initial character after speed delay", () => {
    vi.useFakeTimers();
    const { container } = render(<TypingAnimation text="Hello" speed={100} />);

    expect(container.querySelector("span")?.textContent).toBe("");

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(container.querySelector("span")?.textContent).toBe("H");

    vi.useRealTimers();
  });

  it("renders the full text after sufficient time", () => {
    vi.useFakeTimers();
    const { container } = render(<TypingAnimation text="Hi" speed={100} />);

    act(() => {
      vi.advanceTimersByTime(100);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(container.querySelector("span")?.textContent).toBe("Hi");

    vi.useRealTimers();
  });

  it("respects the delay prop", () => {
    vi.useFakeTimers();
    const { container } = render(
      <TypingAnimation text="Hi" speed={100} delay={500} />
    );

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(container.querySelector("span")?.textContent).toBe("");

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(container.querySelector("span")?.textContent).toBe("H");

    vi.useRealTimers();
  });

  it("renders the cursor by default", () => {
    const { container } = render(<TypingAnimation text="Test" />);
    const cursor = container.querySelector("span:last-child");
    // The cursor is a motion.span
    expect(cursor).toBeInTheDocument();
  });

  it("does not render the cursor if cursor=false", () => {
    const { container } = render(
      <TypingAnimation text="Test" cursor={false} />
    );
    // Since there's only one span (the text), the last child is the text span
    expect(container.querySelectorAll("span")).toHaveLength(1);
  });

  it("repeats the animation if repeat=true", () => {
    vi.useFakeTimers();
    const { container } = render(<TypingAnimation text="A" speed={100} repeat />);

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(container.querySelector("span")?.textContent).toBe("A");

    // Wait for repeat timeout (2000ms)
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(container.querySelector("span")?.textContent).toBe("");

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(container.querySelector("span")?.textContent).toBe("A");

    vi.useRealTimers();
  });

  it("applies custom className", () => {
    const { container } = render(
      <TypingAnimation text="Test" className="custom-typing" />
    );
    expect(container.firstChild).toHaveClass("custom-typing");
  });
});
