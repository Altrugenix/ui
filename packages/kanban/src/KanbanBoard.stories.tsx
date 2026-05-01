import type { Meta, StoryObj } from "@storybook/react-vite";
import { KanbanBoard } from "@altrugenix/kanban";
import type { KanbanTask } from "@altrugenix/kanban";
import { useState } from "react";

const meta: Meta<typeof KanbanBoard> = {
  title: "Special/KanbanBoard",
  component: KanbanBoard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A drag-and-drop Kanban board for task management. Supports columns (Todo, In Progress, Done) and task cards with priorities, assignments, and drag-and-drop reordering.",
      },
    },
  },
  argTypes: {
    tasks: {
      description: "Array of tasks to display on the board.",
      table: { category: "Data" },
    },
    onTaskMove: {
      description: "Callback triggered when a task is moved to a new column.",
      table: { category: "Events" },
    },
    className: {
      description: "Custom classes for the board container.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

const MOCK_TASKS: KanbanTask[] = [
  {
    id: "1",
    title: "Design System Audit",
    status: "todo",
    priority: "high",
    assignee: { name: "Alice", avatar: "https://i.pravatar.cc/150?u=alice" },
  },
  {
    id: "2",
    title: "Refactor Auth Flow",
    status: "in-progress",
    priority: "medium",
    assignee: { name: "Bob", avatar: "https://i.pravatar.cc/150?u=bob" },
  },
  {
    id: "3",
    title: "Update API Documentation",
    status: "todo",
    priority: "low",
    assignee: {
      name: "Charlie",
      avatar: "https://i.pravatar.cc/150?u=charlie",
    },
  },
  {
    id: "4",
    title: "Production Deployment",
    status: "done",
    priority: "high",
    assignee: { name: "Alice", avatar: "https://i.pravatar.cc/150?u=alice" },
  },
  {
    id: "5",
    title: "Fix Navigation Lag",
    status: "in-progress",
    priority: "high",
    assignee: { name: "Dave", avatar: "https://i.pravatar.cc/150?u=dave" },
  },
];

const InteractiveKanban = () => {
  const [tasks, setTasks] = useState<KanbanTask[]>(MOCK_TASKS);

  const handleTaskMove = (taskId: string, newStatus: KanbanTask["status"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="bg-muted/10 min-h-[600px] rounded-lg border p-6">
      <KanbanBoard tasks={tasks} onTaskMove={handleTaskMove} />
    </div>
  );
};

export const Default: Story = {
  render: () => <InteractiveKanban />,
  parameters: {
    docs: {
      description: {
        story:
          "An interactive Kanban board with mock tasks. Drag and drop tasks between columns.",
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    tasks: [],
  },
  parameters: {
    docs: {
      description: {
        story: "An empty Kanban board with no tasks.",
      },
    },
  },
};
