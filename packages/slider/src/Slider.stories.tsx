import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@altrugenix/slider";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A range input slider for selecting numeric values within a defined range. Supports labels, min/max bounds, step increments, and disabled state.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label text rendered above the slider.",
      table: { category: "Content" },
    },
    min: {
      control: "number",
      description: "Minimum allowed value.",
      table: { category: "Range" },
    },
    max: {
      control: "number",
      description: "Maximum allowed value.",
      table: { category: "Range" },
    },
    step: {
      control: "number",
      description: "Step increment between values.",
      table: { category: "Range" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction.",
      table: { category: "State" },
    },
    defaultValue: {
      control: "number",
      description: "Initial value for uncontrolled usage.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Volume",
    defaultValue: 50,
  },
};

export const WithRange: Story = {
  args: {
    label: "Price Range",
    min: 0,
    max: 1000,
    step: 50,
    defaultValue: 500,
  },
  parameters: {
    docs: {
      description: {
        story: "A slider with custom min, max, and step values.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked",
    defaultValue: 75,
    disabled: true,
  },
};

export const FineGrained: Story = {
  args: {
    label: "Opacity",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 80,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A slider with step=1 for precise, fine-grained value selection.",
      },
    },
  },
};

const LiveValueDemo = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="w-full space-y-2">
      <Slider
        label="Brightness"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p className="text-muted-foreground text-center text-sm">
        Current value: <span className="font-mono font-semibold">{value}%</span>
      </p>
    </div>
  );
};

export const WithLiveValue: Story = {
  render: () => <LiveValueDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A controlled slider that displays the current value in real-time.",
      },
    },
  },
};
