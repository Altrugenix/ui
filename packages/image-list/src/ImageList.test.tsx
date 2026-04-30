import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ImageList, ImageListItem } from "./ImageList";

describe("ImageList", () => {
  it("renders children correctly", () => {
    render(
      <ImageList>
        <ImageListItem data-testid="item-1">Item 1</ImageListItem>
        <ImageListItem data-testid="item-2">Item 2</ImageListItem>
      </ImageList>
    );
    expect(screen.getByTestId("item-1")).toBeTruthy();
    expect(screen.getByTestId("item-2")).toBeTruthy();
  });

  it("applies default grid styles", () => {
    const { container } = render(<ImageList>Test</ImageList>);
    const grid = container.firstChild as HTMLElement;
    expect(grid).toHaveClass("grid");
    expect(grid).toHaveStyle({
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "4px",
    });
  });

  it("applies custom cols and gap", () => {
    const { container } = render(<ImageList cols={4} gap={10} />);
    const grid = container.firstChild as HTMLElement;
    expect(grid).toHaveStyle({
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "10px",
    });
  });

  it("applies masonry classes when variant is masonry", () => {
    const { container } = render(<ImageList variant="masonry" />);
    const grid = container.firstChild as HTMLElement;
    expect(grid).toHaveClass("columns-2 md:columns-3");
    expect(grid.style.gridTemplateColumns).toBe("");
  });
});

describe("ImageListItem", () => {
  it("applies default span styles", () => {
    render(<ImageListItem data-testid="item">Content</ImageListItem>);
    const item = screen.getByTestId("item");
    expect(item).toHaveStyle({
      gridColumn: "span 1",
      gridRow: "span 1",
    });
  });

  it("applies custom cols and rows span", () => {
    render(
      <ImageListItem data-testid="item" cols={2} rows={3}>
        Content
      </ImageListItem>
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveStyle({
      gridColumn: "span 2",
      gridRow: "span 3",
    });
  });

  it("applies custom className", () => {
    render(
      <ImageListItem data-testid="item" className="custom-item">
        Content
      </ImageListItem>
    );
    expect(screen.getByTestId("item")).toHaveClass("custom-item");
  });
});
