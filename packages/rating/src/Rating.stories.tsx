import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating } from "@altrugenix/rating";
import { useState } from "react";

const meta: Meta<typeof Rating> = {
  title: "Forms/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An interactive star rating component for collecting user feedback. Supports controlled and uncontrolled modes, read-only display, and customizable sizes.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 10 },
      description: "Current rating value.",
      table: { category: "State" },
    },
    max: {
      control: { type: "number", min: 1, max: 10 },
      description: "Maximum number of stars.",
      table: { category: "Appearance" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the star icons.",
      table: { category: "Appearance" },
    },
    readonly: {
      control: "boolean",
      description: "When true, the rating is display-only.",
      table: { category: "State" },
    },
    onChange: {
      description: "Callback triggered when the user selects a new value.",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A read-only rating for displaying existing scores.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Small</span>
        <Rating value={4} size="sm" readonly />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Medium</span>
        <Rating value={4} size="md" readonly />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Large</span>
        <Rating value={4} size="lg" readonly />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three available size variants.",
      },
    },
  },
};

export const TenStars: Story = {
  args: {
    value: 7,
    max: 10,
  },
  parameters: {
    docs: {
      description: {
        story: "A 10-star rating scale for more granular feedback.",
      },
    },
  },
};

const InteractiveDemo = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2">
      <Rating value={value} onChange={setValue} size="lg" />
      <p className="text-muted-foreground text-sm">
        {value > 0 ? `You rated: ${value} / 5` : "Click a star to rate"}
      </p>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A fully interactive rating with live feedback text showing the selected value.",
      },
    },
  },
};
