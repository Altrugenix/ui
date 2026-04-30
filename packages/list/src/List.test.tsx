import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { List, ListItem, ListItemButton } from "./List";

describe("List", () => {
  it("renders a basic list with items", () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );

    expect(screen.getByText("Item 1")).toBeTruthy();
    expect(screen.getByText("Item 2")).toBeTruthy();
  });

  it("renders as an ordered list when 'ordered' is true", () => {
    const { container } = render(
      <List ordered>
        <ListItem>Item 1</ListItem>
      </List>
    );
    expect(container.querySelector("ol")).toBeTruthy();
    expect(container.querySelector("ul")).not.toBeTruthy();
  });

  it("renders with dividers when 'divided' is true", () => {
    const { container } = render(
      <List divided>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    // Dividers are applied via CSS selectors in this implementation
    expect(container.querySelector("ul")).toHaveClass("[&>li+li]:border-t");
  });

  it("renders ListItem with leading and trailing components", () => {
    render(
      <ListItem
        leading={<span data-testid="leading">L</span>}
        trailing={<span data-testid="trailing">T</span>}
      >
        Main Content
      </ListItem>
    );

    expect(screen.getByTestId("leading")).toBeTruthy();
    expect(screen.getByTestId("trailing")).toBeTruthy();
    expect(screen.getByText("Main Content")).toBeTruthy();
  });

  it("renders ListItemButton correctly", () => {
    render(
      <List>
        <ListItemButton>Clickable Item</ListItemButton>
      </List>
    );

    const button = screen.getByRole("button", { name: /clickable item/i });
    expect(button).toBeTruthy();
    expect(button).toHaveClass("hover:bg-accent/50");
  });
});
