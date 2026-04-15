import type { Meta, StoryObj } from "@storybook/react-vite";
import { KanbanBoard } from "@altrugenix/kanban";
import type { KanbanTask } from "@altrugenix/kanban";

const meta: Meta<typeof KanbanBoard> = {
  title: "UI/KanbanBoard",
  component: KanbanBoard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-10">
        <Story />
      </div>
    ),
  ],
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

export const Default: Story = {
  args: {
    tasks: MOCK_TASKS,
  },
};
