import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { KanbanBoard, type KanbanTask } from "./KanbanBoard";
import "@testing-library/jest-dom";

describe("KanbanBoard", () => {
  const tasks: KanbanTask[] = [
    {
      id: "1",
      title: "Task 1",
      status: "todo",
      priority: "high",
      assignee: { name: "Alice" },
    },
    {
      id: "2",
      title: "Task 2",
      status: "in-progress",
      priority: "medium",
      assignee: { name: "Bob" },
    },
    {
      id: "3",
      title: "Task 3",
      status: "done",
      priority: "low",
      assignee: { name: "Charlie" },
    },
  ];

  it("renders correctly with tasks", () => {
    render(<KanbanBoard tasks={tasks} />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });

  it("calls onTaskMove when moving a task right", () => {
    const handleMove = vi.fn();
    render(<KanbanBoard tasks={tasks} onTaskMove={handleMove} />);

    // There is an 'ArrowRight' button for "Task 1" since it's in 'todo'
    // By counting labels and their positions we can specifically target.
    // Actually aria-labels let's select.
    const allRightButtons = screen.getAllByLabelText("Move right");
    // "Task 1" (todo) has a right button. "Task 2" (in-progress) has a right button. "Task 3" (done) doesn't.
    // We can just click the first one (for Task 1)
    fireEvent.click(allRightButtons[0]);
    expect(handleMove).toHaveBeenCalledWith("1", "in-progress");
  });

  it("calls onTaskMove when moving a task left", () => {
    const handleMove = vi.fn();
    render(<KanbanBoard tasks={tasks} onTaskMove={handleMove} />);

    const allLeftButtons = screen.getAllByLabelText("Move left");
    // "Task 1" has no left button. "Task 2" has left button. "Task 3" has left button.
    // First left button is for Task 2.
    fireEvent.click(allLeftButtons[0]);
    expect(handleMove).toHaveBeenCalledWith("2", "todo");
  });

  it("renders column headers and task counts", () => {
    render(<KanbanBoard tasks={tasks} />);
    expect(screen.getByText(/Backlog/i)).toBeInTheDocument();
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
    
    // Check counts in badges. 
    // "Task 1" is in todo, "Task 2" is in-progress, "Task 3" is done.
    // So each should have 1.
    const counts = screen.getAllByText("1");
    expect(counts.length).toBeGreaterThanOrEqual(3);
  });

  it("renders task priority and assignee fallback", () => {
    render(<KanbanBoard tasks={tasks} />);
    expect(screen.getByText("high")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument(); // Alice's fallback
  });

  it("applies custom className", () => {
    const { container } = render(<KanbanBoard tasks={tasks} className="custom-kanban" />);
    expect(container.firstChild).toHaveClass("custom-kanban");
  });
});
