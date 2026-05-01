import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "@altrugenix/timeline";

const meta: Meta<typeof Timeline> = {
  title: "Data Display/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A vertical timeline for displaying chronological events. Each item supports a title, description, date, and semantic variant color (default, success, warning, destructive).",
      },
    },
  },
  argTypes: {
    items: {
      description:
        "Array of timeline items with title, description, date, and optional variant.",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Order placed",
        description: "Your order #4219 was confirmed.",
        date: "May 1, 2026",
      },
      {
        title: "Processing",
        description: "We are preparing your package.",
        date: "May 1, 2026",
      },
      {
        title: "Shipped",
        description: "Package is on its way.",
        date: "May 2, 2026",
      },
      {
        title: "Delivered",
        description: "Package arrived at destination.",
        date: "May 3, 2026",
      },
    ],
  },
};

export const WithVariants: Story = {
  args: {
    items: [
      {
        title: "Project created",
        description: "Repository initialized.",
        date: "Apr 25",
        variant: "success" as const,
      },
      {
        title: "CI pipeline configured",
        description: "GitHub Actions workflow added.",
        date: "Apr 26",
        variant: "success" as const,
      },
      {
        title: "Build failing",
        description: "TypeScript errors in 3 packages.",
        date: "Apr 27",
        variant: "destructive" as const,
      },
      {
        title: "Fix in progress",
        description: "Addressing type incompatibilities.",
        date: "Apr 28",
        variant: "warning" as const,
      },
      {
        title: "All tests passing",
        description: "Green build across all packages.",
        date: "Apr 29",
        variant: "success" as const,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Timeline with semantic variant colors showing the history of a development project.",
      },
    },
  },
};

export const ChangeLog: Story = {
  args: {
    items: [
      {
        title: "v2.0.0",
        description: "Major redesign with Tailwind v4 and React 19 support.",
        date: "May 2026",
        variant: "default" as const,
      },
      {
        title: "v1.5.0",
        description:
          "Added 20 new components including Kanban, VideoPlayer, and VirtualList.",
        date: "Mar 2026",
      },
      {
        title: "v1.0.0",
        description: "First stable release with 40 components.",
        date: "Jan 2026",
        variant: "success" as const,
      },
      {
        title: "v0.1.0",
        description: "Initial beta release.",
        date: "Nov 2025",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "A changelog timeline showing version history of a project.",
      },
    },
  },
};
