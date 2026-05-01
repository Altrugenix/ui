import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@altrugenix/spinner";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A loading indicator using a spinning icon animation. Supports multiple sizes and an optional text label for context.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the spinner icon.",
      table: { category: "Appearance" },
    },
    label: {
      description: "Optional label displayed below the spinner.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Loading data...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
      <Spinner size="xl" label="Extra Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all four available spinner sizes.",
      },
    },
  },
};

export const InlineUsage: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner size="sm" />
      <span className="text-muted-foreground text-sm">
        Processing your request...
      </span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A small spinner used inline with text, suitable for loading states within forms or list items.",
      },
    },
  },
};
