import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Popover } from "./Popover";
import "@testing-library/jest-dom";

describe("Popover", () => {
  it("renders trigger and shows content on click", () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <div>Content</div>
      </Popover>
    );

    expect(screen.getByText("Open")).toBeInTheDocument();
    expect(screen.queryByText("Content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("closes on click outside", () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <div>Content</div>
      </Popover>
    );

    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Content")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });
  it("works in controlled mode", () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Popover
        open={false}
        onOpenChange={onOpenChange}
        trigger={<button>Open</button>}
      >
        <div>Content</div>
      </Popover>
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open"));
    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <Popover
        open={true}
        onOpenChange={onOpenChange}
        trigger={<button>Open</button>}
      >
        <div>Content</div>
      </Popover>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies correct alignment and side classes", () => {
    render(
      <Popover trigger={<button>Open</button>} align="right" side="top">
        <div>Content</div>
      </Popover>
    );
    fireEvent.click(screen.getByText("Open"));
    const popover = screen.getByRole("dialog");
    expect(popover).toHaveClass("right-0");
    expect(popover).toHaveClass("bottom-full");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Popover trigger={<button>Open</button>} ref={ref}>
        <div>Content</div>
      </Popover>
    );
    fireEvent.click(screen.getByText("Open"));
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className", () => {
    render(
      <Popover trigger={<button>Open</button>} className="custom-popover">
        <div>Content</div>
      </Popover>
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByRole("dialog")).toHaveClass("custom-popover");
  });
});
