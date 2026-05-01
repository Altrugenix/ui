import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@altrugenix/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A placeholder loading state component that shows a pulsing animation. Useful for indicating that content is loading without causing layout shifts.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular", "rounded"],
      description: "Visual shape of the skeleton.",
      table: { category: "Appearance" },
    },
    width: {
      control: "text",
      description: "Width of the skeleton (px or string like '100%').",
      table: { category: "Appearance" },
    },
    height: {
      control: "text",
      description: "Height of the skeleton (px or string like '100%').",
      table: { category: "Appearance" },
    },
    animation: {
      control: "select",
      options: ["pulse", "wave", "none"],
      description: "Animation style.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: "text",
    width: "80%",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
  parameters: {
    docs: {
      description: {
        story: "A standard text skeleton line.",
      },
    },
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 48,
    height: 48,
  },
  parameters: {
    docs: {
      description: {
        story: "A circular skeleton, typically used for avatars.",
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: "100%",
    height: 120,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A rounded rectangle skeleton, typically used for cards or images.",
      },
    },
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-[300px] space-y-4 rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rounded" height={160} className="w-full" />
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete card skeleton composed of multiple skeleton variants.",
      },
    },
  },
};
