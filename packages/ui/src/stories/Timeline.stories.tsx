import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "~/components/ui/timeline";

const meta: Meta<typeof Timeline> = {
  title: "Data Display/Timeline",
  component: Timeline,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Project Created",
        description: "Initial project scaffolding was set up.",
        date: "Jan 1, 2026",
        variant: "success",
      },
      {
        title: "Components Built",
        description: "All atom and molecule components implemented.",
        date: "Feb 15, 2026",
        variant: "success",
      },
      {
        title: "Testing Phase",
        description: "Running integration and accessibility tests.",
        date: "Mar 10, 2026",
        variant: "warning",
      },
      {
        title: "Production Release",
        description: "Scheduled for public release.",
        date: "Apr 1, 2026",
        variant: "default",
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    items: [
      { title: "Step 1", description: "Account created." },
      { title: "Step 2", description: "Email verified." },
      { title: "Step 3", description: "Profile completed." },
    ],
  },
};
