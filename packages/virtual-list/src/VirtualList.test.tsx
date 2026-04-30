import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VirtualList } from "./VirtualList";

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

    // 400px / 40px = 10 items visible + overscan (default 5)
    const rows = screen.getAllByTestId("row");
    expect(rows.length).toBeGreaterThan(10);
    expect(rows.length).toBeLessThan(30); // 10 + 2*5 + some buffer
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

    expect(screen.getByText("Item 0")).toBeTruthy();
  });
});
