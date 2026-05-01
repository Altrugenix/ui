import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Sidebar, SidebarItem } from "./index";
import "@testing-library/jest-dom";

describe("Sidebar", () => {
  it("renders correctly in expanded state by default", () => {
    const { container } = render(<Sidebar>Content</Sidebar>);
    const aside = container.querySelector("aside");
    expect(aside).toHaveStyle({ width: "16rem" });
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders correctly in collapsed state", () => {
    const { container } = render(<Sidebar collapsed>Content</Sidebar>);
    const aside = container.querySelector("aside");
    expect(aside).toHaveStyle({ width: "4rem" });
  });

  it("applies custom width and collapsedWidth", () => {
    const { rerender, container } = render(
      <Sidebar width="200px" collapsedWidth="50px">Content</Sidebar>
    );
    let aside = container.querySelector("aside");
    expect(aside).toHaveStyle({ width: "200px" });

    rerender(<Sidebar collapsed width="200px" collapsedWidth="50px">Content</Sidebar>);
    aside = container.querySelector("aside");
    expect(aside).toHaveStyle({ width: "50px" });
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Sidebar ref={ref}>Content</Sidebar>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("passes through additional props and className", () => {
    render(
      <Sidebar className="custom-sidebar" id="test-sidebar" data-testid="sidebar">
        Content
      </Sidebar>
    );
    const aside = screen.getByTestId("sidebar");
    expect(aside).toHaveClass("custom-sidebar");
    expect(aside.id).toBe("test-sidebar");
  });
});

describe("SidebarItem", () => {
  it("renders item with label", () => {
    render(<SidebarItem>Dashboard</SidebarItem>);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders item with icon", () => {
    render(
      <SidebarItem icon={<span data-testid="icon">Icon</span>}>
        Dashboard
      </SidebarItem>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies active styles", () => {
    render(<SidebarItem active>Active Item</SidebarItem>);
    const item = screen.getByText("Active Item").closest("div");
    expect(item).toHaveClass("bg-primary/10");
  });

  it("hides label when collapsed", () => {
    render(<SidebarItem collapsed>Dashboard</SidebarItem>);
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<SidebarItem ref={ref}>Item</SidebarItem>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through additional props and className", () => {
    render(
      <SidebarItem className="custom-item" data-testid="item" id="item-id">
        Item
      </SidebarItem>
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveClass("custom-item");
    expect(item.id).toBe("item-id");
  });
});
