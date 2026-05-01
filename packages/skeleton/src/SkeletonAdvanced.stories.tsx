import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@altrugenix/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton/Advanced",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Advanced compositions and animation variations for the Skeleton component.",
      },
    },
  },
};

export default meta;

export const AnimationVariants: StoryObj = {
  render: () => (
    <div className="max-w-sm space-y-8">
      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          Pulse (Default)
        </h4>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={100} />
      </div>

      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          Wave (Shimmer)
        </h4>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="rectangular" height={100} animation="wave" />
      </div>

      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          None (Static)
        </h4>
        <Skeleton variant="text" animation="none" />
        <Skeleton variant="rectangular" height={100} animation="none" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Skeleton supports three animation modes: `pulse`, `wave`, and `none`.",
      },
    },
  },
};

export const ComplexLoading: StoryObj = {
  render: () => (
    <div className="bg-card flex max-w-sm items-start gap-4 overflow-hidden rounded-xl border p-4 shadow-sm">
      <Skeleton variant="circular" width={48} height={48} animation="wave" />
      <div className="flex-1 space-y-3">
        <div className="space-y-1">
          <Skeleton variant="text" width="60%" animation="wave" />
          <Skeleton variant="text" width="40%" height={10} animation="wave" />
        </div>
        <Skeleton variant="rounded" height={120} animation="wave" />
        <div className="flex gap-2">
          <Skeleton variant="rounded" width={80} height={32} animation="wave" />
          <Skeleton variant="rounded" width={80} height={32} animation="wave" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complex dashboard card loading state using the `wave` animation.",
      },
    },
  },
};
