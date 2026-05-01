import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "@altrugenix/progress-bar";

const meta: Meta<typeof ProgressBar> = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A horizontal progress bar for displaying completion status. Supports semantic color variants, three sizes, labels, and percentage display.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
      description: "Current progress value (0–100).",
      table: { category: "State" },
    },
    max: {
      control: "number",
      description: "Maximum value (default: 100).",
      table: { category: "State" },
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive"],
      description: "Semantic color variant.",
      table: { category: "Appearance" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Height of the progress bar.",
      table: { category: "Appearance" },
    },
    label: {
      description: "Label text displayed above the bar.",
      table: { category: "Content" },
    },
    showValue: {
      control: "boolean",
      description: "Whether to display the percentage value.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
    label: "Progress",
    showValue: true,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    label: "Complete",
    showValue: true,
    variant: "success",
  },
  parameters: {
    docs: {
      description: {
        story: "A fully completed progress bar with the success variant.",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    value: 80,
    label: "Storage Used",
    showValue: true,
    variant: "warning",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    value: 45,
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "A minimal slim progress bar without label or value display.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <ProgressBar value={25} label="Default" showValue />
      <ProgressBar value={50} label="Success" showValue variant="success" />
      <ProgressBar value={75} label="Warning" showValue variant="warning" />
      <ProgressBar
        value={90}
        label="Destructive"
        showValue
        variant="destructive"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All four semantic variants compared at different progress values.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <ProgressBar value={60} label="Small" showValue size="sm" />
      <ProgressBar value={60} label="Medium" showValue size="md" />
      <ProgressBar value={60} label="Large" showValue size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All three sizes displayed at the same value.",
      },
    },
  },
};

export const StorageUsage: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <ProgressBar
        value={85}
        label="Cloud Storage"
        showValue
        variant="warning"
        size="lg"
      />
      <p className="text-muted-foreground text-sm">
        8.5 GB of 10 GB used — consider upgrading your plan.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A storage usage indicator — a common real-world pattern for dashboards and account pages.",
      },
    },
  },
};
