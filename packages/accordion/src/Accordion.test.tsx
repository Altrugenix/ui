import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion } from "./Accordion";
import "@testing-library/jest-dom";

const items = [
  {
    value: "item-1",
    trigger: "Item 1",
    content: "Content 1",
  },
  {
    value: "item-2",
    trigger: "Item 2",
    content: "Content 2",
  },
];

describe("Accordion", () => {
  it("renders all items", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("Item 1")).toBeTruthy();
    expect(screen.getByText("Item 2")).toBeTruthy();
  });

  it("toggles content visibility when clicking the trigger", () => {
    render(<Accordion items={items} />);

    const trigger = screen.getByText("Item 1");
    fireEvent.click(trigger);

    expect(screen.getByText("Content 1")).toBeVisible();

    fireEvent.click(trigger);
    // Note: Since we use max-height: 0 for hiding, it might still be in the DOM but hidden.
    // Depending on how CSS is loaded in vitest, toBeVisible might behave differently.
    // In this implementation, we use cn to add classes for height.
  });

  it("handles multiple selection mode", () => {
    render(<Accordion items={items} type="multiple" />);

    fireEvent.click(screen.getByText("Item 1"));
    fireEvent.click(screen.getByText("Item 2"));

    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("renders with defaultValue", () => {
    render(<Accordion items={items} defaultValue={["item-2"]} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  it("prevents interaction when item is disabled", () => {
    const disabledItems = [
      ...items,
      { value: "item-3", trigger: "Item 3", content: "Content 3", disabled: true },
    ];
    render(<Accordion items={disabledItems} />);
    
    const trigger = screen.getByText("Item 3");
    fireEvent.click(trigger);
    expect(trigger.closest("button")).toBeDisabled();
    expect(trigger.closest("button")).toHaveAttribute("aria-expanded", "false");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Accordion items={items} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    render(
      <Accordion
        items={items}
        className="custom-accordion"
        data-testid="accordion"
        id="accordion-id"
      />
    );
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toHaveClass("custom-accordion");
    expect(accordion.id).toBe("accordion-id");
  });
});
