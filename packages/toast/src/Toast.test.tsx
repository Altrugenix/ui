import React from "react";
import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ToastProvider, useToast } from "./Toast";
import { MotionConfig } from "framer-motion";
import "@testing-library/jest-dom";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    motion: {
      div: React.forwardRef(
        (
          {
            children,
            ...props
          }: {
            children?: React.ReactNode;
            [key: string]: unknown;
          },
          ref: React.ForwardedRef<HTMLDivElement>
        ) => (
          <div {...(props as React.HTMLAttributes<HTMLDivElement>)} ref={ref}>
            {children}
          </div>
        )
      ),
    },
  };
});

const TestComponent = () => {
  const { toast } = useToast();
  return (
    <button
      onClick={() =>
        toast({
          type: "success",
          title: "Success Toast",
          description: "This is a toast!",
        })
      }
    >
      Show Toast
    </button>
  );
};

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should show a toast when triggered", () => {
    render(
      <MotionConfig transition={{ duration: 0 }}>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </MotionConfig>
    );

    act(() => {
      screen.getByText("Show Toast").click();
    });

    expect(screen.getByText("Success Toast")).toBeInTheDocument();
    expect(screen.getByText("This is a toast!")).toBeInTheDocument();
  });

  it("auto-closes after duration", async () => {
    render(
      <MotionConfig transition={{ duration: 0 }}>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </MotionConfig>
    );

    act(() => {
      screen.getByText("Show Toast").click();
    });

    expect(screen.getByText("Success Toast")).toBeInTheDocument();

    act(() => {
      vi.runAllTimers();
    });

    // Toast should be removed from DOM
    expect(screen.queryByText("Success Toast")).not.toBeInTheDocument();
  });

  it("handles different toast types", () => {
    const TypeTester = () => {
      const { toast } = useToast();
      return (
        <button onClick={() => toast({ type: "error", title: "Error Toast" })}>
          Show Error
        </button>
      );
    };

    render(
      <MotionConfig transition={{ duration: 0 }}>
        <ToastProvider>
          <TypeTester />
        </ToastProvider>
      </MotionConfig>
    );

    act(() => {
      screen.getByText("Show Error").click();
    });

    const toast = screen.getByText("Error Toast").closest("div");
    expect(toast?.parentElement).toHaveClass("border-l-rose-500");
  });

  it("can show multiple toasts", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    act(() => {
      screen.getByText("Show Toast").click();
      screen.getByText("Show Toast").click();
    });

    expect(screen.getAllByText("Success Toast")).toHaveLength(2);
  });

  it("supports infinite duration", () => {
    const InfiniteTester = () => {
      const { toast } = useToast();
      return (
        <button
          onClick={() =>
            toast({ type: "info", title: "Inf", duration: Infinity })
          }
        >
          Show Inf
        </button>
      );
    };

    render(
      <MotionConfig transition={{ duration: 0 }}>
        <ToastProvider>
          <InfiniteTester />
        </ToastProvider>
      </MotionConfig>
    );

    act(() => {
      screen.getByText("Show Inf").click();
    });

    act(() => {
      vi.advanceTimersByTime(100000);
    });

    expect(screen.getByText("Inf")).toBeInTheDocument();
  });
});
