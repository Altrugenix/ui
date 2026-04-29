import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TransferList } from "./TransferList";
import React from "react";

describe("TransferList", () => {
  const items = ["Apple", "Banana", "Cherry", "Date"];

  it("renders both lists correctly", () => {
    render(<TransferList items={items} titles={["Left", "Right"]} />);
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getAllByText("0 items")).toHaveLength(1); // Right list
    expect(screen.getAllByText("4 items")).toHaveLength(1); // Left list
  });

  it("toggles items and moves them to the right", () => {
    const onChange = vi.fn();
    render(<TransferList items={items} onChange={onChange} />);
    
    const apple = screen.getByText("Apple");
    fireEvent.click(apple);
    
    const moveRightBtn = screen.getByLabelText("move selected right");
    expect(moveRightBtn).not.toBeDisabled();
    
    fireEvent.click(moveRightBtn);
    
    expect(onChange).toHaveBeenCalled();
    // Check if Apple is now in the right list (by checking item counts or presence)
    expect(screen.getAllByText("1 items")).toHaveLength(1); // Right list
    expect(screen.getAllByText("3 items")).toHaveLength(1); // Left list
  });

  it("moves items back to the left", () => {
    render(<TransferList items={items} initialSelected={["Apple"]} />);
    
    const apple = screen.getByText("Apple");
    fireEvent.click(apple);
    
    const moveLeftBtn = screen.getByLabelText("move selected left");
    fireEvent.click(moveLeftBtn);
    
    expect(screen.getAllByText("4 items")).toHaveLength(1); // Left list
    expect(screen.getAllByText("0 items")).toHaveLength(1); // Right list
  });

  it("disables move buttons when no items are selected", () => {
    render(<TransferList items={items} />);
    expect(screen.getByLabelText("move selected right")).toBeDisabled();
    expect(screen.getByLabelText("move selected left")).toBeDisabled();
  });
});
