import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { List, ListItem, ListItemButton } from "./List";
import "@testing-library/jest-dom";

describe("List", () => {
  it("renders a basic list with items", () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
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

    expect(screen.getByTestId("leading")).toBeInTheDocument();
    expect(screen.getByTestId("trailing")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
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

  it("renders ListItem with secondary text", () => {
    render(<ListItem secondary="Secondary info">Main Label</ListItem>);
    expect(screen.getByText("Main Label")).toBeInTheDocument();
    expect(screen.getByText("Secondary info")).toBeInTheDocument();
  });

  it("applies interactive styles to ListItem", () => {
    render(<ListItem interactive>Interactive Item</ListItem>);
    expect(screen.getByText("Interactive Item").closest("li")).toHaveClass(
      "cursor-pointer"
    );
  });

  it("renders ListItemButton as a different element", () => {
    render(
      <ListItemButton as="a" href="#">
        Link Item
      </ListItemButton>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "#");
  });

  it("forwards refs to all components", () => {
    const listRef = React.createRef<HTMLUListElement>();
    const itemRef = React.createRef<HTMLLIElement>();
    const buttonRef = React.createRef<HTMLButtonElement>();

    render(
      <List ref={listRef}>
        <ListItem ref={itemRef}>Item</ListItem>
        <ListItemButton ref={buttonRef}>Button</ListItemButton>
      </List>
    );

    expect(listRef.current).toBeInstanceOf(HTMLUListElement);
    expect(itemRef.current).toBeInstanceOf(HTMLLIElement);
    expect(buttonRef.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("applies custom classNames", () => {
    const { container } = render(
      <List className="custom-list">
        <ListItem className="custom-item">Item</ListItem>
      </List>
    );
    expect(container.firstChild).toHaveClass("custom-list");
    expect(screen.getByText("Item").closest("li")).toHaveClass("custom-item");
  });
});
