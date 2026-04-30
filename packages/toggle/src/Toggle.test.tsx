import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Toggle } from "./Toggle";
import { ToggleGroup } from "./ToggleGroup";

describe("Toggle", () => {
  it("renders correctly", () => {
    render(<Toggle>Toggle</Toggle>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies pressed state", () => {
    render(<Toggle pressed>Toggle</Toggle>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button")).toHaveClass("bg-muted");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Toggle onClick={onClick}>Toggle</Toggle>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Toggle disabled>Toggle</Toggle>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});

describe("ToggleGroup", () => {
  it("handles single selection correctly", () => {
    const onValueChange = vi.fn();
    render(
      <ToggleGroup type="single" value="bold" onValueChange={onValueChange}>
        <Toggle value="bold">B</Toggle>
        <Toggle value="italic">I</Toggle>
      </ToggleGroup>
    );

    const italicToggle = screen.getByText("I");
    fireEvent.click(italicToggle);

    expect(onValueChange).toHaveBeenCalledWith("italic");
  });

  it("handles multiple selection correctly", () => {
    const onValueChange = vi.fn();
    render(
      <ToggleGroup
        type="multiple"
        value={["bold"]}
        onValueChange={onValueChange}
      >
        <Toggle value="bold">B</Toggle>
        <Toggle value="italic">I</Toggle>
      </ToggleGroup>
    );

    const italicToggle = screen.getByText("I");
    fireEvent.click(italicToggle);

    expect(onValueChange).toHaveBeenCalledWith(["bold", "italic"]);
  });

  it("removes value from multiple selection when clicked again", () => {
    const onValueChange = vi.fn();
    render(
      <ToggleGroup
        type="multiple"
        value={["bold", "italic"]}
        onValueChange={onValueChange}
      >
        <Toggle value="bold">B</Toggle>
        <Toggle value="italic">I</Toggle>
      </ToggleGroup>
    );

    const italicToggle = screen.getByText("I");
    fireEvent.click(italicToggle);

    expect(onValueChange).toHaveBeenCalledWith(["bold"]);
  });

  it("deselects in single mode when clicking active toggle", () => {
    const onValueChange = vi.fn();
    render(
      <ToggleGroup type="single" value="bold" onValueChange={onValueChange}>
        <Toggle value="bold">B</Toggle>
      </ToggleGroup>
    );

    const boldToggle = screen.getByText("B");
    fireEvent.click(boldToggle);

    expect(onValueChange).toHaveBeenCalledWith("");
  });

  it("applies vertical orientation correctly", () => {
    const { container } = render(
      <ToggleGroup orientation="vertical">
        <Toggle value="1">1</Toggle>
      </ToggleGroup>
    );
    expect(container.firstChild).toHaveClass("flex-col");
  });
});
