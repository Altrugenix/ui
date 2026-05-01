import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from "./DropdownMenu";

describe("DropdownMenu", () => {
  it("toggles the menu when the trigger is clicked", () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    
    const trigger = screen.getByText("Open");
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    
    fireEvent.click(trigger);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(trigger.parentElement).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(trigger);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(trigger.parentElement).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the menu when clicking outside", () => {
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <DropdownMenu trigger={<button>Open</button>}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenu>
      </div>
    );
    
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("applies alignment classes correctly", () => {
    const { rerender } = render(
      <DropdownMenu trigger={<button>Open</button>} align="right">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByRole("menu")).toHaveClass("right-0");

    rerender(
      <DropdownMenu trigger={<button>Open</button>} align="left">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    expect(screen.getByRole("menu")).toHaveClass("left-0");
  });

  it("renders disabled and destructive items correctly", () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
        <DropdownMenuItem destructive>Delete Item</DropdownMenuItem>
      </DropdownMenu>
    );
    fireEvent.click(screen.getByText("Open"));
    
    const disabledItem = screen.getByText("Disabled Item");
    const destructiveItem = screen.getByText("Delete Item");
    
    expect(disabledItem).toHaveClass("pointer-events-none");
    expect(destructiveItem).toHaveClass("text-destructive");
  });

  it("forwards refs correctly", () => {
    const menuRef = React.createRef<HTMLDivElement>();
    const itemRef = React.createRef<HTMLDivElement>();
    
    render(
      <DropdownMenu trigger={<button>Open</button>} ref={menuRef}>
        <DropdownMenuItem ref={itemRef}>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    
    fireEvent.click(screen.getByText("Open"));
    expect(menuRef.current).toBeInstanceOf(HTMLDivElement);
    expect(itemRef.current).toBeInstanceOf(HTMLDivElement);
  });
});
