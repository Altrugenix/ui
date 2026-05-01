import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircularProgress } from "@altrugenix/circular-progress";

const meta: Meta<typeof CircularProgress> = {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A circular progress indicator supporting both determinate (0–100%) and indeterminate (spinning) modes. Customizable in size, thickness, and color.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
      description: "Current progress value (0–100). Only applies in determinate mode.",
      table: { category: "State" },
    },
    indeterminate: {
      control: "boolean",
      description: "When true, displays a continuously spinning animation.",
      table: { category: "State" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Visual size of the circular indicator.",
      table: { category: "Appearance" },
    },
    thickness: {
      control: { type: "number", min: 1, max: 10 },
      description: "Stroke width of the progress ring.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  args: {
    value: 65,
    size: "md",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A continuously spinning indicator for operations with unknown duration.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress indeterminate size="sm" />
        <span className="text-muted-foreground text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress indeterminate size="md" />
        <span className="text-muted-foreground text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress indeterminate size="lg" />
        <span className="text-muted-foreground text-xs">Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three available sizes.",
      },
    },
  },
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={40} className="text-emerald-500" />
      <CircularProgress value={70} className="text-rose-500" />
      <CircularProgress value={90} className="text-amber-500" />
      <CircularProgress indeterminate className="text-sky-500" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Custom colors applied via Tailwind text color classes — the ring inherits `currentColor`.",
      },
    },
  },
};

export const ProgressValues: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {[0, 25, 50, 75, 100].map((val) => (
        <div key={val} className="flex flex-col items-center gap-2">
          <CircularProgress value={val} size="lg" />
          <span className="text-muted-foreground text-xs font-mono">{val}%</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Determinate progress at various values, from 0% to 100%.",
      },
    },
  },
};

export const ThickRing: Story = {
  args: {
    value: 75,
    size: "lg",
    thickness: 8,
  },
  parameters: {
    docs: {
      description: {
        story: "A thicker ring for more visual weight.",
      },
    },
  },
};
