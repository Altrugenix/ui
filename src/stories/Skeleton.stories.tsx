import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@/components/composites/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Composites/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular", "rounded"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: {
    variant: "text",
    width: "80%",
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 48,
    height: 48,
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: "100%",
    height: 120,
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
};
