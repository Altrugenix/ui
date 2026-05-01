import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tag } from "./Tag";
import "@testing-library/jest-dom";

describe("Tag", () => {
  it("renders correctly", () => {
    render(<Tag>Hello Tag</Tag>);
    expect(screen.getByText("Hello Tag")).toBeInTheDocument();
  });
  it("applies variant styles correctly", () => {
    const { rerender, container } = render(<Tag variant="success">Success</Tag>);
    expect(container.firstChild).toHaveClass("bg-success/10");
    expect(container.firstChild).toHaveClass("text-success");

    rerender(<Tag variant="destructive">Error</Tag>);
    expect(container.firstChild).toHaveClass("bg-destructive/10");
  });

  it("renders with icon", () => {
    render(<Tag icon={<span data-testid="tag-icon">#</span>}>Label</Tag>);
    expect(screen.getByTestId("tag-icon")).toBeInTheDocument();
  });

  it("calls onRemove when delete button is clicked", () => {
    const onRemove = vi.fn();
    render(<Tag onRemove={onRemove}>Removable</Tag>);
    const removeButton = screen.getByLabelText("Remove");
    fireEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Tag ref={ref}>Ref Content</Tag>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <Tag className="custom-tag" id="tag-id">
        Custom
      </Tag>
    );
    expect(container.firstChild).toHaveClass("custom-tag");
    expect(container.firstChild).toHaveAttribute("id", "tag-id");
  });
});
