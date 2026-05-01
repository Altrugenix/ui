import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContextMenu } from "./ContextMenu";

describe("ContextMenu", () => {
  it("opens the menu on right click and sets position", () => {
    render(
      <ContextMenu menu={<div data-testid="menu-item">Item 1</div>}>
        <div data-testid="trigger">Right click me</div>
      </ContextMenu>
    );
    
    const trigger = screen.getByTestId("trigger");
    expect(screen.queryByTestId("menu-item")).not.toBeInTheDocument();
    
    fireEvent.contextMenu(trigger, { clientX: 100, clientY: 200 });
    
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveStyle({ left: "100px", top: "200px" });
    expect(screen.getByTestId("menu-item")).toBeInTheDocument();
  });

  it("closes the menu when clicking outside", () => {
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <ContextMenu menu={<div>Menu</div>}>
          <div>Trigger</div>
        </ContextMenu>
      </div>
    );
    
    fireEvent.contextMenu(screen.getByText("Trigger"));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes the menu on Escape key", () => {
    render(<ContextMenu menu={<div>Menu</div>}>Trigger</ContextMenu>);
    fireEvent.contextMenu(screen.getByText("Trigger"));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes the menu when an item is clicked", () => {
    render(<ContextMenu menu={<button>Action</button>}>Trigger</ContextMenu>);
    fireEvent.contextMenu(screen.getByText("Trigger"));
    
    fireEvent.click(screen.getByText("Action"));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ContextMenu menu={<div>Menu</div>} ref={ref}>Trigger</ContextMenu>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
