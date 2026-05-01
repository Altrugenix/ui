import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paper } from "@altrugenix/paper";

const meta: Meta<typeof Paper> = {
  title: "Layout/Paper",
  component: Paper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A surface component that provides elevation (shadow) or outlined visual depth. Use it as a base container for cards, dialogs, and other elevated content.",
      },
    },
  },
  argTypes: {
    elevation: {
      control: { type: "number", min: 0, max: 6 },
      description: "Shadow depth level (0–6). Only applies to the `elevation` variant.",
      table: { category: "Appearance" },
    },
    variant: {
      control: "radio",
      options: ["elevation", "outlined"],
      description: "Whether to use shadow elevation or a border outline.",
      table: { category: "Appearance" },
    },
    square: {
      control: "boolean",
      description: "When true, removes border-radius for sharp corners.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    elevation: 3,
    variant: "elevation",
    square: false,
    className: "p-8",
    children: "This is a Paper component",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    className: "p-8",
    children: "Outlined paper — uses a border instead of shadow.",
  },
  parameters: {
    docs: {
      description: {
        story: "The `outlined` variant replaces shadow elevation with a subtle border.",
      },
    },
  },
};

export const Square: Story = {
  args: {
    elevation: 2,
    square: true,
    className: "p-8",
    children: "Square paper with no border-radius.",
  },
};

export const ElevationLevels: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      {([0, 1, 2, 3, 4, 5, 6] as const).map((level) => (
        <Paper key={level} elevation={level} className="flex h-24 w-24 items-center justify-center">
          <span className="text-muted-foreground text-sm font-medium">
            {level}
          </span>
        </Paper>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All seven elevation levels displayed side by side — from flat (0) to deeply elevated (6).",
      },
    },
  },
};

export const Nested: Story = {
  render: () => (
    <Paper elevation={1} className="p-6">
      <p className="text-sm mb-4">Outer paper (elevation 1)</p>
      <Paper elevation={3} className="p-4">
        <p className="text-sm">Inner paper (elevation 3) — nested containers create visual hierarchy.</p>
      </Paper>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Papers can be nested to create layered visual depth.",
      },
    },
  },
};
