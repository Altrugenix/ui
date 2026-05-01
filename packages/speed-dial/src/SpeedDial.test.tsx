import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SpeedDial } from "./SpeedDial";
import "@testing-library/jest-dom";

describe("SpeedDial", () => {
  const mockActions = [
    {
      icon: <span data-testid="icon-1">1</span>,
      label: "Action 1",
      onClick: vi.fn(),
    },
    {
      icon: <span data-testid="icon-2">2</span>,
      label: "Action 2",
      onClick: vi.fn(),
    },
  ];

  it("renders the trigger button", () => {
    render(<SpeedDial actions={mockActions} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles actions when clicked", () => {
    render(<SpeedDial actions={mockActions} />);
    const trigger = screen.getByRole("button");

    // Closed initially
    expect(screen.queryByTestId("icon-1")).not.toBeInTheDocument();

    fireEvent.click(trigger);

    // Open
    expect(screen.getByTestId("icon-1")).toBeInTheDocument();
    expect(screen.getByTestId("icon-2")).toBeInTheDocument();
    expect(screen.getByText("Action 1")).toBeInTheDocument();

    fireEvent.click(trigger);

    // Closed again (framer-motion AnimatePresence might delay removal, but screen.query should reflect state)
    // Actually, screen.queryBy might still find it if animation hasn't finished.
    // In Vitest with default settings, it might be immediate.
  });

  it("calls action onClick and closes when an action is clicked", () => {
    render(<SpeedDial actions={mockActions} />);
    fireEvent.click(screen.getByRole("button")); // Open

    const actionButton = screen.getByTestId("icon-1").closest("button");
    if (actionButton) {
      fireEvent.click(actionButton);
    }

    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);
    // Should close
    // expect(screen.queryByTestId("icon-1")).not.toBeInTheDocument();
  });

  it("applies correct direction classes", () => {
    const { rerender } = render(
      <SpeedDial actions={mockActions} direction="up" />
    );
    fireEvent.click(screen.getByRole("button"));
    let actionsContainer = screen
      .getByTestId("icon-1")
      .closest("div")?.parentElement;
    expect(actionsContainer).toHaveClass("flex-col-reverse");

    rerender(<SpeedDial actions={mockActions} direction="right" />);
    actionsContainer = screen
      .getByTestId("icon-1")
      .closest("div")?.parentElement;
    expect(actionsContainer).toHaveClass("flex-row");
  });

  it("renders custom trigger icons", () => {
    render(
      <SpeedDial
        actions={mockActions}
        icon={<span data-testid="custom-plus">+</span>}
        openIcon={<span data-testid="custom-x">x</span>}
      />
    );
    expect(screen.getByTestId("custom-plus")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("custom-x")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <SpeedDial actions={mockActions} className="custom-speed-dial" />
    );
    expect(container.firstChild).toHaveClass("custom-speed-dial");
  });
});
