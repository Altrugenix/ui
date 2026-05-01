import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VirtualList } from "./VirtualList";
import "@testing-library/jest-dom";

describe("VirtualList", () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  it("renders only visible items", () => {
    render(
      <VirtualList
        items={items}
        height={400}
        rowHeight={40}
        renderRow={(item) => <div data-testid="row">{item.name}</div>}
      />
    );

    const rows = screen.getAllByTestId("row");
    expect(rows.length).toBeGreaterThan(10);
    expect(rows.length).toBeLessThan(30);
  });

  it("renders the first item initially", () => {
    render(
      <VirtualList
        items={items}
        height={400}
        rowHeight={40}
        renderRow={(item) => <div data-testid="row">{item.name}</div>}
      />
    );

    expect(screen.getByText("Item 0")).toBeInTheDocument();
  });
  it("updates visible items on scroll", () => {
    const onScroll = vi.fn();
    const { container } = render(
      <VirtualList
        items={items}
        height={400}
        rowHeight={40}
        renderRow={(item) => <div data-testid="row">{item.name}</div>}
        onScroll={onScroll}
      />
    );
    const scrollContainer = container.firstChild as HTMLElement;

    fireEvent.scroll(scrollContainer, { target: { scrollTop: 800 } });

    expect(onScroll).toHaveBeenCalledWith(800);
    expect(screen.getByText("Item 20")).toBeInTheDocument();
    expect(screen.queryByText("Item 0")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <VirtualList
        items={items}
        height={400}
        rowHeight={40}
        renderRow={(item) => <div>{item.name}</div>}
        className="custom-virtual"
      />
    );
    expect(container.firstChild).toHaveClass("custom-virtual");
  });
});
