import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from "./index";
import "@testing-library/jest-dom";

describe("Pagination", () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: vi.fn(),
  };

  it("renders correct number of page buttons for a small total", () => {
    render(<Pagination {...defaultProps} totalPages={5} />);
    // 5 pages + prev + next = 7 buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(7);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders dots when there are many pages", () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={10} />);
    // For currentPage 5, siblings 1: 1 ... 4 5 6 ... 10
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    const dots = screen.getAllByText("…");
    expect(dots).toHaveLength(2);
  });

  it("calls onPageChange when a page number is clicked", () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.click(screen.getByText("2"));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange when next/prev buttons are clicked", () => {
    const { rerender } = render(
      <Pagination {...defaultProps} currentPage={2} />
    );

    fireEvent.click(screen.getByLabelText("Previous page"));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);

    rerender(<Pagination {...defaultProps} currentPage={2} />);
    fireEvent.click(screen.getByLabelText("Next page"));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  });

  it("disables previous button on first page", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    expect(screen.getByLabelText("Previous page")).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(<Pagination {...defaultProps} currentPage={10} />);
    expect(screen.getByLabelText("Next page")).toBeDisabled();
  });

  it("sets aria-current='page' on the active page", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);
    expect(screen.getByText("3")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("1")).not.toHaveAttribute("aria-current");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Pagination {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("passes through additional props and className", () => {
    render(
      <Pagination
        {...defaultProps}
        className="custom-pagination"
        data-testid="pagination"
        id="pagination-id"
      />
    );
    const nav = screen.getByTestId("pagination");
    expect(nav).toHaveClass("custom-pagination");
    expect(nav.id).toBe("pagination-id");
  });

  it("respects siblingCount prop", () => {
    // currentPage 5, totalPages 10, siblingCount 0: 1 ... 5 ... 10
    render(
      <Pagination
        {...defaultProps}
        currentPage={5}
        totalPages={10}
        siblingCount={0}
      />
    );
    expect(screen.queryByText("4")).not.toBeInTheDocument();
    expect(screen.queryByText("6")).not.toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
